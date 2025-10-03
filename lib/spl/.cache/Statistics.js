sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "arithmeticMean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  }, ["self"]),
  "{ :self | /(sum(self), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "average",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mean_1(_self);
  }, ["self"]),
  "{ :self | mean(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "centralFeature",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = Infinity;
    let _k = 0;
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _sum_1(
          _collect_2(
            _upOrDownTo_2(1, _n),
            sl.annotateFunction(function (_j) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _j";
                throw new Error(errorMessage);
              } /* Statements */
              return _aBlock_2(_at_2(_self, _i), _at_2(_self, _j));
            }, ["j"]),
          ),
        );
        /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_d, _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _m = _d;
            return _k = _i;
          }, []),
        );
      }, ["i"]),
    );
    return _at_2(_self, _k);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let n = size(self); let m = Infinity; let k = 0; toDo(1, n, { :i | let d = sum(collect(upOrDownTo(1, n), { :j | aBlock(at(self, i), at(self, j)) })); ifTrue((<(d, m)), { m := d; k := i }) }); at(self, k) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "centralMoment",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mean = _mean_1(_self);
    /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean), _r)),
    );
  }, ["self", "r"]),
  "{ :self :r | let mean = mean(self); *((/(1, size(self))), sum((^((-(self, mean)), r)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "contraharmonicMean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_square_1(_self)), _sum_1(_self));
  }, ["self"]),
  "{ :self | /(sum(square(self)), sum(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "geometricMean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _product_1(_self),
      _solidus_2(1, _size_1(_self)),
    );
  }, ["self"]),
  "{ :self | ^(product(self), (/(1, size(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "harmonicMean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_size_1(_self), _sum_1(_reciprocal_1(_self)));
  }, ["self"]),
  "{ :self | /(size(self), sum(reciprocal(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "interquartileRange",
  ["self", "o"],
  sl.annotateFunction(function (_self, _o) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _o";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_quartiles_2(_self, _o), 3);
    let _q1 = _at_2(__SplVar1, 1);
    let _q2 = _at_2(__SplVar1, 2);
    let _q3 = _at_2(__SplVar1, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  }, ["self", "o"]),
  "{ :self :o | let __SplVar1 = assertIsOfSize(quartiles(self,o), 3); let q1 = at(__SplVar1, 1); let q2 = at(__SplVar1, 2); let q3 = at(__SplVar1, 3); -(q3, q1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "interquartileRange",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_quartiles_1(_self), 3);
    let _q1 = _at_2(__SplVar2, 1);
    let _q2 = _at_2(__SplVar2, 2);
    let _q3 = _at_2(__SplVar2, 3);
    /* Statements */
    return _hyphenMinus_2(_q3, _q1);
  }, ["self"]),
  "{ :self | let __SplVar2 = assertIsOfSize(quartiles(self), 3); let q1 = at(__SplVar2, 1); let q2 = at(__SplVar2, 2); let q3 = at(__SplVar2, 3); -(q3, q1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _centralMoment_2(_self, 4),
          _circumflexAccent_2(_centralMoment_2(_self, 2), 2),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_transpose_1(_self), _kurtosis_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("@Collection>>kurtosis: not vector or matrix");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { /(centralMoment(self,4), (^(centralMoment(self,2), 2))) }, { if(isMatrix(self), { collect(transpose(self),kurtosis:/1) }, { error('@Collection>>kurtosis: not vector or matrix') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_self), _size_1(_self));
  }, ["self"]),
  "{ :self | /(sum(self), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "meanDeviation",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_abs_1(_hyphenMinus_2(_self, _aBlock_1(_self)))),
      _size_1(_self),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | /(sum(abs((-(self, aBlock(self))))), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "meanDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _meanDeviation_2(_self, _mean_1);
  }, ["self"]),
  "{ :self | meanDeviation(self,mean:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "meanShift",
  ["x", "d"],
  sl.annotateFunction(function (_x, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _x,
      sl.annotateFunction(function (_a) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _a";
          throw new Error(errorMessage);
        } /* Statements */
        return _mean_1(_select_2(
          _x,
          sl.annotateFunction(function (_b) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _b";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_euclideanDistance_2(_a, _b), _d);
          }, ["b"]),
        ));
      }, ["a"]),
    );
  }, ["x", "d"]),
  "{ :x :d | collect(x, { :a | mean(select(x, { :b | <=(euclideanDistance(a,b), d) })) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "meanShift",
  ["x", "d", "m"],
  sl.annotateFunction(function (_x, _d, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _d, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _y = _meanShift_2(_x, _d);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSignEqualsSign_2(_m, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_y, _x);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _y;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _meanShift_3(_y, _d, _hyphenMinus_2(_m, 1));
      }, []),
    );
  }, ["x", "d", "m"]),
  "{ :x :d :m | let y = meanShift(x,d); if((|(<=(m, 1), { =(y, x) })), { y }, { meanShift(y,d, -(m, 1)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "meanSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _mean_1(_square_1(_self));
  }, ["self"]),
  "{ :self | mean(square(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "moment",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(1, _size_1(_self)),
      _sum_1(_circumflexAccent_2(_self, _r)),
    );
  }, ["self", "r"]),
  "{ :self :r | *((/(1, size(self))), sum((^(self, r)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "percentile",
  ["self", "p", "o"],
  sl.annotateFunction(function (_self, _p, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _p, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _quantile_3(_self, _solidus_2(_p, 100), _o);
  }, ["self", "p", "o"]),
  "{ :self :p :o | quantile(self,/(p, 100), o) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "percentile",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _percentile_3(_self, _p, [[0, 1], [0, 1]]);
  }, ["self", "p"]),
  "{ :self :p | percentile(self,p, [[0, 1], [0, 1]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "quantile",
  ["self", "p", "o"],
  sl.annotateFunction(function (_self, _p, _o) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _p, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _quantile_3(
          _asSortedList_2(_self, _lessThanSignEqualsSign_2),
          _p,
          _o,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(
              _transpose_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _quantile_3(
                  _asSortedList_2(_each, _lessThanSignEqualsSign_2),
                  _p,
                  _o,
                );
              }, ["each"]),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return "Collection>>quantile: not vector or matrix";
          }, []),
        );
      }, []),
    );
  }, ["self", "p", "o"]),
  "{ :self :p :o | if(isVector(self), { quantile(asSortedList(self,<=),p, o) }, { if(isMatrix(self), { collect(transpose(self), { :each | quantile(asSortedList(each,<=),p, o) }) }, { 'Collection>>quantile: not vector or matrix' }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "quantile",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _quantile_3(_self, _p, [[0, 0], [1, 0]]);
  }, ["self", "p"]),
  "{ :self :p | quantile(self,p, [[0, 0], [1, 0]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "quartiles",
  ["self", "o"],
  sl.annotateFunction(function (_self, _o) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _o";
      throw new Error(errorMessage);
    } /* Statements */
    return _quantile_3(_self, _solidus_2([1, 2, 3], 4), _o);
  }, ["self", "o"]),
  "{ :self :o | quantile(self,/([1, 2, 3], 4), o) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "quartiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _quartiles_2(_self, [[0.5, 0], [0, 1]]);
  }, ["self"]),
  "{ :self | quartiles(self,[[0.5, 0], [0, 1]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "rootMeanSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_mean_1(_square_1(_self)));
  }, ["self"]),
  "{ :self | sqrt(mean(square(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "sampleStandardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_mean_1(_square_1(_hyphenMinus_2(_self, _mean_1(_self)))));
  }, ["self"]),
  "{ :self | sqrt(mean(square((-(self, mean(self)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "sampleVariance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean_1(_self)), 2)),
      _size_1(_self),
    );
  }, ["self"]),
  "{ :self | /(sum((^((-(self, mean(self))), 2))), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _centralMoment_2(_self, 3),
          _circumflexAccent_2(_centralMoment_2(_self, 2), _solidus_2(3, 2)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _collect_2(_transpose_1(_self), _skewness_1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("@Collection>>skewness: not vector or matrix");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { /(centralMoment(self,3), (^(centralMoment(self,2), (/(3, 2))))) }, { if(isMatrix(self), { collect(transpose(self),skewness:/1) }, { error('@Collection>>skewness: not vector or matrix') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_variance_1(_self));
  }, ["self"]),
  "{ :self | sqrt(variance(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "standardizedMoment",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _centralMoment_2(_self, _r),
      _circumflexAccent_2(_sampleStandardDeviation_1(_self), _r),
    );
  }, ["self", "r"]),
  "{ :self :r | /(centralMoment(self,r), (^(sampleStandardDeviation(self), r))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "stochasticVector",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _numberSign_2(0, _k);
    /* Statements */
    _do_2(
      _self,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(_v, _i, _plusSign_2(_at_2(_v, _i), 1));
      }, ["i"]),
    );
    return _solidus_2(_v, _sum_1(_v));
  }, ["self", "k"]),
  "{ :self :k | let v = #(0, k); do(self, { :i | atPut(v, i, +(at(v, i), 1)) }); /(v, sum(v)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "trimmedMean",
  ["self", "f"],
  sl.annotateFunction(function (_self, _f) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_f, 2);
    let _f1 = _at_2(__SplVar3, 1);
    let _f2 = _at_2(__SplVar3, 2);
    let _n = _size_1(_self);
    /* Statements */
    return _mean_1(
      _sliceFromTo_3(
        _sorted_2(_self, _lessThanSignEqualsSign_2),
        _plusSign_2(1, _floor_1(_asterisk_2(_f1, _n))),
        _hyphenMinus_2(_n, _floor_1(_asterisk_2(_f2, _n))),
      ),
    );
  }, ["self", "f"]),
  "{ :self :f | let __SplVar3 = assertIsOfSize(f, 2); let f1 = at(__SplVar3, 1); let f2 = at(__SplVar3, 2); let n = size(self); mean(sliceFromTo(sorted(self,<=),+(1, floor((*(f1, n)))), -(n, floor((*(f2, n)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean_1(_self)), 2)),
      _hyphenMinus_2(_size_1(_self), 1),
    );
  }, ["self"]),
  "{ :self | /(sum((^((-(self, mean(self))), 2))), (-(size(self), 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Statistics",
  "winsorizedMean",
  ["self", "f"],
  sl.annotateFunction(function (_self, _f) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_f, 2);
    let _f1 = _at_2(__SplVar4, 1);
    let _f2 = _at_2(__SplVar4, 2);
    let _n = _size_1(_self);
    let _z1 = _rankedMin_2(
      _self,
      _plusSign_2(1, _floor_1(_asterisk_2(_f1, _n))),
    );
    let _z2 = _rankedMax_2(
      _self,
      _plusSign_2(1, _floor_1(_asterisk_2(_f2, _n))),
    );
    /* Statements */
    return _mean_1(_clip_2(_self, [_z1, _z2]));
  }, ["self", "f"]),
  "{ :self :f | let __SplVar4 = assertIsOfSize(f, 2); let f1 = at(__SplVar4, 1); let f2 = at(__SplVar4, 2); let n = size(self); let z1 = rankedMin(self,+(1, floor((*(f1, n))))); let z2 = rankedMax(self,+(1, floor((*(f2, n))))); mean(clip(self,[z1, z2])) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "absoluteCorrelation",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_u);
    /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_v), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_dot_2(_u, _conjugate_1(_v)), _n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_u, "absoluteCorrelation: size mismatch");
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v | let n = size(u); if((=(size(v), n)), { /(dot(u,conjugate(v)), n) }, { error(u,'absoluteCorrelation: size mismatch') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "absoluteCorrelationFunction",
  ["x", "hList"],
  sl.annotateFunction(function (_x, _hList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _hList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    /* Statements */
    return _collect_2(
      _hList,
      sl.annotateFunction(function (_h) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _h";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _sum_1(
            _collect_2(
              _upOrDownTo_2(1, _hyphenMinus_2(_n, _h)),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  _at_2(_x, _i),
                  _at_2(_x, _plusSign_2(_i, _h)),
                );
              }, ["i"]),
            ),
          ),
          _n,
        );
      }, ["h"]),
    );
  }, ["x", "hList"]),
  "{ :x :hList | let n = size(x); collect(hList, { :h | /(sum(collect(upOrDownTo(1, -(n, h)), { :i | *(at(x, i), at(x, +(i, h))) })), n) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "blomqvistBeta",
  ["v", "w"],
  sl.annotateFunction(function (_v, _w) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _correlation_2(
      _sign_1(_hyphenMinus_2(_v, _median_1(_v))),
      _sign_1(_hyphenMinus_2(_w, _median_1(_w))),
    );
  }, ["v", "w"]),
  "{ :v :w | correlation(sign((-(v, median(v)))),sign((-(w, median(w))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "correlation",
  ["v", "w"],
  sl.annotateFunction(function (_v, _w) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_v),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _matrixCorrelation_2(_v, _w);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _covariance_2(_v, _w),
          _asterisk_2(_standardDeviation_1(_v), _standardDeviation_1(_w)),
        );
      }, []),
    );
  }, ["v", "w"]),
  "{ :v :w | if(isMatrix(v), { matrixCorrelation(v,w) }, { /(covariance(v,w), (*(standardDeviation(v), standardDeviation(w)))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "correlationDistance",
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
    return _hyphenMinus_2(
      1,
      _solidus_2(
        _dot_2(
          _hyphenMinus_2(_u, _mean_1(_u)),
          _hyphenMinus_2(_v, _mean_1(_v)),
        ),
        _asterisk_2(_norm_1(_uu), _norm_1(_vv)),
      ),
    );
  }, ["u", "v"]),
  "{ :u :v | let uu = (-(u, mean(u))); let vv = (-(v, mean(v))); -(1, (/(dot((-(u, mean(u))),-(v, mean(v))), (*(norm(uu), norm(vv)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "correlationFunction",
  ["x", "hList"],
  sl.annotateFunction(function (_x, _hList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _hList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _mu = _mean_1(_x);
    /* Statements */
    return _collect_2(
      _hList,
      sl.annotateFunction(function (_h) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _h";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _sum_1(
          _collect_2(
            _upOrDownTo_2(1, _hyphenMinus_2(_n, _h)),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _asterisk_2(
                _hyphenMinus_2(_at_2(_x, _i), _mu),
                _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, _h)), _mu),
              );
            }, ["i"]),
          ),
        );
        let _b = _sum_1(
          _collect_2(
            _upOrDownTo_2(1, _n),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _square_1(_hyphenMinus_2(_at_2(_x, _i), _mu));
            }, ["i"]),
          ),
        );
        /* Statements */
        return _solidus_2(_a, _b);
      }, ["h"]),
    );
  }, ["x", "hList"]),
  "{ :x :hList | let n = size(x); let mu = mean(x); collect(hList, { :h | let a = sum(collect(upOrDownTo(1, -(n, h)), { :i | *((-(at(x, i), mu)), (-(at(x, +(i, h)), mu))) })); let b = sum(collect(upOrDownTo(1, n), { :i | square((-(at(x, i), mu))) })); /(a, b) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "covariance",
  ["v", "w"],
  sl.annotateFunction(function (_v, _w) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _v, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_v),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _crossCovarianceMatrix_2(_v, _w);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_v);
        let _m = _size_1(_w);
        /* Statements */
        return _if_3(
          _equalsSign_2(_n, _m),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _solidus_2(1, _hyphenMinus_2(_n, 1)),
              _dot_2(
                _hyphenMinus_2(_v, _mean_1(_v)),
                _conjugate_1(_hyphenMinus_2(_w, _mean_1(_w))),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(
              [_v, _w],
              "@Sequenceable>>covariance: vectors must be equal",
            );
          }, []),
        );
      }, []),
    );
  }, ["v", "w"]),
  "{ :v :w | if(isMatrix(v), { crossCovarianceMatrix(v,w) }, { let n = size(v); let m = size(w); if((=(n, m)), { *((/(1, (-(n, 1)))), dot((-(v, mean(v))),conjugate((-(w, mean(w)))))) }, { error([v, w],'@Sequenceable>>covariance: vectors must be equal') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "covarianceFunction",
  ["x", "hList"],
  sl.annotateFunction(function (_x, _hList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _hList";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _mu = _mean_1(_x);
    /* Statements */
    return _collect_2(
      _hList,
      sl.annotateFunction(function (_h) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _h";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _solidus_2(1, _n),
          _sum_1(
            _collect_2(
              _upOrDownTo_2(1, _hyphenMinus_2(_n, _h)),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, _h)), _mu),
                  _hyphenMinus_2(_at_2(_x, _i), _mu),
                );
              }, ["i"]),
            ),
          ),
        );
      }, ["h"]),
    );
  }, ["x", "hList"]),
  "{ :x :hList | let n = size(x); let mu = mean(x); collect(hList, { :h | *((/(1, n)), sum(collect(upOrDownTo(1, -(n, h)), { :i | *((-(at(x, +(i, h)), mu)), (-(at(x, i), mu))) }))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _median_1(_asSortedList_2(_self, _lessThanSignEqualsSign_2));
  }, ["self"]),
  "{ :self | median(asSortedList(self,<=)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "spearmanRho",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _correlation_2(_rankingFractional_1(_u), _rankingFractional_1(_v));
  }, ["u", "v"]),
  "{ :u :v | correlation(rankingFractional(u), rankingFractional(v)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _transpose_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _sqrt_1(_variance_1(_each));
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sqrt_1(_variance_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { collect(transpose(self), { :each | sqrt(variance(each)) }) }, { sqrt(variance(self)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "standardize",
  ["self", "meanBlock:/1", "deviationBlock:/1"],
  sl.annotateFunction(function (_self, _meanBlock_1, _deviationBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _meanBlock_1, _deviationBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _deviation = _deviationBlock_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_deviation, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "@Sequenceable>>standardize: deviation = 0?");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(_self, _meanBlock_1(_self)),
          _deviation,
        );
      }, []),
    );
  }, ["self", "meanBlock:/1", "deviationBlock:/1"]),
  "{ :self :meanBlock:/1 :deviationBlock:/1 | let deviation = deviationBlock(self); if((=(deviation, 0)), { error(self,'@Sequenceable>>standardize: deviation = 0?') }, { /((-(self, meanBlock(self))), deviation) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "standardize",
  ["self", "meanBlock:/1"],
  sl.annotateFunction(function (_self, _meanBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _meanBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _standardize_3(_self, _meanBlock_1, _standardDeviation_1);
  }, ["self", "meanBlock:/1"]),
  "{ :self :meanBlock:/1 | standardize(self,meanBlock:/1, standardDeviation:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "standardize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _standardize_3(_self, _mean_1, _standardDeviation_1);
  }, ["self"]),
  "{ :self | standardize(self,mean:/1, standardDeviation:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Statistics",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_transpose_1(_self), _variance_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _sum_1(_circumflexAccent_2(_hyphenMinus_2(_self, _mean_1(_self)), 2)),
          _hyphenMinus_2(_size_1(_self), 1),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { collect(transpose(self),variance:/1) }, { /(sum((^((-(self, mean(self))), 2))), (-(size(self), 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "gaussianFilter",
  ["x", "r"],
  sl.annotateFunction(function (_x, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sigma = _solidus_2(_r, 2);
    let _k = _collect_2(
      _asList_1(_upOrDownTo_2(_negate_1(_r), _r)),
      _gaussianKernel_1(_sigma),
    );
    let _y = _convolve_2(_k, _x);
    /* Statements */
    _removeFirst_2(_y, _r);
    _removeLast_2(_y, _r);
    return _y;
  }, ["x", "r"]),
  "{ :x :r | let sigma = /(r, 2); let k = collect(asList(upOrDownTo(negate(r), r)),gaussianKernel(sigma)); let y = convolve(k,x); removeFirst(y,r); removeLast(y,r); y }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "geometricMeanFilter",
  ["x", "r"],
  sl.annotateFunction(function (_x, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _neighbourhoodMap_3(
      sl.annotateFunction(function (_y, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _y, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _geometricMean_1(_y);
      }, ["y", "i"]),
      _x,
      _r,
    );
  }, ["x", "r"]),
  "{ :x :r | neighbourhoodMap({ :y :i | geometricMean(y) },x, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "harmonicMeanFilter",
  ["x", "r"],
  sl.annotateFunction(function (_x, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _neighbourhoodMap_3(
      sl.annotateFunction(function (_y, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _y, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _harmonicMean_1(_y);
      }, ["y", "i"]),
      _x,
      _r,
    );
  }, ["x", "r"]),
  "{ :x :r | neighbourhoodMap({ :y :i | harmonicMean(y) },x, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "meanFilter",
  ["x", "r"],
  sl.annotateFunction(function (_x, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _neighbourhoodMap_3(
      sl.annotateFunction(function (_y, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _y, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _mean_1(_y);
      }, ["y", "i"]),
      _x,
      _r,
    );
  }, ["x", "r"]),
  "{ :x :r | neighbourhoodMap({ :y :i | mean(y) },x, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "medianFilter",
  ["x", "r"],
  sl.annotateFunction(function (_x, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _neighbourhoodMap_3(
      sl.annotateFunction(function (_y, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _y, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _median_1(_y);
      }, ["y", "i"]),
      _x,
      _r,
    );
  }, ["x", "r"]),
  "{ :x :r | neighbourhoodMap({ :y :i | median(y) },x, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "meanShiftFilter",
  ["self", "r", "d"],
  sl.annotateFunction(function (_self, _r, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _neighbourhoodMap_3(
      sl.annotateFunction(function (_each, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _each, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _at_2(_self, _i);
        /* Statements */
        return _mean_1(_select_2(
          _each,
          sl.annotateFunction(function (_b) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _b";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_euclideanDistance_2(_a, _b), _d);
          }, ["b"]),
        ));
      }, ["each", "i"]),
      _self,
      _r,
    );
  }, ["self", "r", "d"]),
  "{ :self :r :d | neighbourhoodMap({ :each :i | let a = at(self, i); mean(select(each, { :b | <=(euclideanDistance(a,b), d) })) },self, r) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Statistics",
  "nadarayaWatsonEstimator",
  ["i", "x", "y", "h", "k:/1"],
  sl.annotateFunction(function (_i, _x, _y, _h, _k_1) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _i, _x, _y, _h, _k_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _kx = _transpose_1(_collect_2(
      _x,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _collect_2(_solidus_2(_hyphenMinus_2(_i, _each), _h), _k_1),
          _h,
        );
      }, ["each"]),
    ));
    let _w = _solidus_2(_kx, _collect_2(_kx, _sum_1));
    /* Statements */
    return _dot_2(_w, _y);
  }, ["i", "x", "y", "h", "k:/1"]),
  "{ :i :x :y :h :k:/1 | let kx = transpose(collect(x, { :each | /(collect((/((-(i, each)), h)),k:/1), h) })); let w = /(kx, collect(kx,sum:/1)); dot(w,y) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Statistics",
  "nistData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(
      _self,
      "NistEngineeringStatisticsHandbookData",
    );
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'NistEngineeringStatisticsHandbookData') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Statistics",
  "nistData",
  ["self", "name", "columns"],
  sl.annotateFunction(function (_self, _name, _columns) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _name, _columns";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _at_2(_nistData_1(_self), _name);
    /* Statements */
    return _if_3(
      _ampersand_2(
        _isVector_1(_d),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_columns, [1]);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _d;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_d),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _h = _at_2(_d, 1);
            let _m = _allButFirst_1(_d);
            /* Statements */
            return _if_3(
              _equalsSign_2(_size_1(_columns), 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _column_2(_m, _at_2(_columns, 1));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _columns_2(_m, _columns);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "nistData: invalid data");
          }, []),
        );
      }, []),
    );
  }, ["self", "name", "columns"]),
  "{ :self :name :columns | let d = at(nistData(self),name); if((&(isVector(d), { =(columns, [1]) })), { d }, { if(isMatrix(d), { let h = at(d, 1); let m = allButFirst(d); if((=(size(columns), 1)), { column(m,at(columns, 1)) }, { columns(m,columns) }) }, { error(self,'nistData: invalid data') }) }) }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "NistEngineeringStatisticsHandbookData"],
      ["category", "Math/Statistics"],
      ["url", "https://rohandrape.net/sw/hsc3-data/data/statistics/nist.json"],
      ["mimeType", "application/json"],
      ["parser", _identity_1],
    ]),
  ),
);
