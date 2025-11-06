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
  "{ :self |\n\t\tself.sum / self.size\n\t}",
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
  "{ :self |\n\t\tself.mean\n\t}",
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
            _to_2(1, _n),
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
  "{ :self :aBlock:/2 |\n\t\tlet n = self.size;\n\t\tlet m = Infinity;\n\t\tlet k = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet d = 1.to(n).collect { :j |\n\t\t\t\taBlock(self[i], self[j])\n\t\t\t}.sum;\n\t\t\t(d < m).ifTrue {\n\t\t\t\tm := d;\n\t\t\t\tk := i\n\t\t\t}\n\t\t};\n\t\tself[k]\n\t}",
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
  "{ :self :r |\n\t\tlet mean = self.mean;\n\t\t(1 / self.size) * ((self - mean) ^ r).sum\n\t}",
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
  "{ :self |\n\t\tself.square.sum / self.sum\n\t}",
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
  "{ :self |\n\t\tself.product ^ (1 / self.size)\n\t}",
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
  "{ :self |\n\t\tself.size / self.reciprocal.sum\n\t}",
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
  "{ :self :o |\n\t\tlet [q1, q2, q3] = self.quartiles(o);\n\t\tq3 - q1\n\t}",
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
  "{ :self |\n\t\tlet [q1, q2, q3] = self.quartiles;\n\t\tq3 - q1\n\t}",
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.centralMoment(4) / (self.centralMoment(2) ^ 2)\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transpose.collect(kurtosis:/1)\n\t\t\t} {\n\t\t\t\t'@Collection>>kurtosis: not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.sum / self.size\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\t(self - aBlock(self)).abs.sum / self.size\n\t}",
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
  "{ :self |\n\t\tself.meanDeviation(mean:/1)\n\t}",
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
  "{ :x :d |\n\t\tx.collect { :a |\n\t\t\tx.select { :b |\n\t\t\t\ta.euclideanDistance(b) <= d\n\t\t\t}.mean\n\t\t}\n\t}",
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
  "{ :x :d :m |\n\t\tlet y = x.meanShift(d);\n\t\t(m <= 1 | { y = x }).if {\n\t\t\ty\n\t\t} {\n\t\t\ty.meanShift(d, m - 1)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.square.mean\n\t}",
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
  "{ :self :r |\n\t\t(1 / self.size) * (self ^ r).sum\n\t}",
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
  "{ :self :p :o |\n\t\tself.quantile(p / 100, o)\n\t}",
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
  "{ :self :p |\n\t\tself.percentile(p, [0 1; 0 1])\n\t}",
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
  "{ :self :p :o |\n\t\tself.isVector.if {\n\t\t\tself.asSortedList(<=).quantile(p, o)\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transpose.collect { :each |\n\t\t\t\t\teach.asSortedList(<=).quantile(p, o)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t'Collection>>quantile: not vector or matrix'\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :p |\n\t\tself.quantile(p, [0 0; 1 0])\n\t}",
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
  "{ :self :o |\n\t\tself.quantile([1 2 3] / 4, o)\n\t}",
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
  "{ :self |\n\t\tself.quartiles([0.5 0; 0 1])\n\t}",
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
  "{ :self |\n\t\tself.square.mean.sqrt\n\t}",
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
  "{ :self |\n\t\t(self - self.mean).square.mean.sqrt\n\t}",
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
  "{ :self |\n\t\t((self - self.mean) ^ 2).sum / self.size\n\t}",
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.centralMoment(3) / (self.centralMoment(2) ^ (3 / 2))\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tself.transpose.collect(skewness:/1)\n\t\t\t} {\n\t\t\t\t'@Collection>>skewness: not vector or matrix'.error\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
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
  "{ :self :r |\n\t\tself.centralMoment(r) / (self.sampleStandardDeviation ^ r)\n\t}",
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
  "{ :self :k |\n\t\tlet v = 0 # k;\n\t\tself.do { :i |\n\t\t\tv[i] := v[i] + 1\n\t\t};\n\t\tv / v.sum\n\t}",
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
      _ListView_4(
        _sorted_2(_self, _lessThanSignEqualsSign_2),
        _plusSign_2(1, _floor_1(_asterisk_2(_f1, _n))),
        _hyphenMinus_2(_n, _floor_1(_asterisk_2(_f2, _n))),
        1,
      ),
    );
  }, ["self", "f"]),
  "{ :self :f |\n\t\tlet [f1, f2] = f;\n\t\tlet n = self.size;\n\t\tListView(\n\t\t\tself.sorted(<=),\n\t\t\t1 + (f1 * n).floor,\n\t\t\tn - (f2 * n).floor,\n\t\t\t1\n\t\t).mean\n\t}",
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
  "{ :self |\n\t\t((self - self.mean) ^ 2).sum / (self.size - 1)\n\t}",
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
  "{ :self :f |\n\t\tlet [f1, f2] = f;\n\t\tlet n = self.size;\n\t\tlet z1 = self.rankedMin(1 + (f1 * n).floor);\n\t\tlet z2 = self.rankedMax(1 + (f2 * n).floor);\n\t\tself.clip([z1 z2]).mean\n\t}",
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
  "{ :u :v |\n\t\tlet n = u.size;\n\t\t(v.size = n).if {\n\t\t\tu.dot(v.conjugate) / n\n\t\t} {\n\t\t\tu.error('absoluteCorrelation: size mismatch')\n\t\t}\n\t}",
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
              _to_2(1, _hyphenMinus_2(_n, _h)),
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
  "{ :x :hList |\n\t\tlet n = x.size;\n\t\thList.collect { :h |\n\t\t\t1.to(n - h).collect { :i |\n\t\t\t\tx[i] * x[i + h]\n\t\t\t}.sum / n\n\t\t}\n\t}",
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
  "{ :v :w |\n\t\t(v - v.median).sign.correlation(\n\t\t\t(w - w.median).sign\n\t\t)\n\t}",
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
  "{ :v :w |\n\t\tv.isMatrix.if {\n\t\t\tv.matrixCorrelation(w)\n\t\t} {\n\t\t\tv.covariance(w) / (v.standardDeviation * w.standardDeviation)\n\t\t}\n\t}",
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
  "{ :u :v |\n\t\tlet uu = (u - u.mean);\n\t\tlet vv = (v - v.mean);\n\t\t1 - ((u - u.mean).dot(v - v.mean) / (uu.norm * vv.norm))\n\t}",
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
            _to_2(1, _hyphenMinus_2(_n, _h)),
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
            _to_2(1, _n),
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
  "{ :x :hList |\n\t\tlet n = x.size;\n\t\tlet mu = x.mean;\n\t\thList.collect { :h |\n\t\t\tlet a = 1.to(n - h).collect { :i |\n\t\t\t\t(x[i] - mu) * (x[i + h] - mu)\n\t\t\t}.sum;\n\t\t\tlet b = 1.to(n).collect { :i |\n\t\t\t\t(x[i] - mu).square\n\t\t\t}.sum;\n\t\t\ta / b\n\t\t}\n\t}",
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
  "{ :v :w |\n\t\tv.isMatrix.if {\n\t\t\tv.crossCovarianceMatrix(w)\n\t\t} {\n\t\t\tlet n = v.size;\n\t\t\tlet m = w.size;\n\t\t\t(n = m).if {\n\t\t\t\t(1 / (n - 1)) * (v - v.mean).dot((w - w.mean).conjugate)\n\t\t\t} {\n\t\t\t\t[v, w].error('@Sequenceable>>covariance: vectors must be equal')\n\t\t\t}\n\t\t}\n\t}",
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
              _to_2(1, _hyphenMinus_2(_n, _h)),
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
  "{ :x :hList |\n\t\tlet n = x.size;\n\t\tlet mu = x.mean;\n\t\thList.collect { :h |\n\t\t\t(1 / n) * 1.to(n - h).collect { :i |\n\t\t\t\t(x[i + h] - mu) * (x[i] - mu)\n\t\t\t}.sum\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.asSortedList(<=).median\n\t}",
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
  "{ :u :v |\n\t\tcorrelation(\n\t\t\tu.rankingFractional,\n\t\t\tv.rankingFractional\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tself.transpose.collect { :each |\n\t\t\t\teach.variance.sqrt\n\t\t\t}\n\t\t} {\n\t\t\tself.variance.sqrt\n\t\t}\n\t}",
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
  "{ :self :meanBlock:/1 :deviationBlock:/1 |\n\t\tlet deviation = deviationBlock(self);\n\t\t(deviation = 0).if {\n\t\t\tself.error('@Sequenceable>>standardize: deviation = 0?')\n\t\t} {\n\t\t\t(self - meanBlock(self)) / deviation\n\t\t}\n\t}",
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
  "{ :self :meanBlock:/1 |\n\t\tself.standardize(meanBlock:/1, standardDeviation:/1)\n\t}",
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
  "{ :self |\n\t\tself.standardize(mean:/1, standardDeviation:/1)\n\t}",
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
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tself.transpose.collect(variance:/1)\n\t\t} {\n\t\t\t((self - self.mean) ^ 2).sum / (self.size - 1)\n\t\t}\n\t}",
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
    let _k = _collect_2(_to_2(_negate_1(_r), _r), _gaussianKernel_1(_sigma));
    let _y = _convolve_2(_k, _x);
    /* Statements */
    _removeFirst_2(_y, _r);
    _removeLast_2(_y, _r);
    return _y;
  }, ["x", "r"]),
  "{ :x :r |\n\t\tlet sigma = r / 2;\n\t\tlet k = r.negate.to(r).collect(sigma.gaussianKernel);\n\t\tlet y = k.convolve(x);\n\t\ty.removeFirst(r);\n\t\ty.removeLast(r);\n\t\ty\n\t}",
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
  "{ :x :r |\n\t\t{ :y :i |\n\t\t\ty.geometricMean\n\t\t}.neighbourhoodMap(x, r)\n\t}",
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
  "{ :x :r |\n\t\t{ :y :i |\n\t\t\ty.harmonicMean\n\t\t}.neighbourhoodMap(x, r)\n\t}",
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
  "{ :x :r |\n\t\t{ :y :i |\n\t\t\ty.mean\n\t\t}.neighbourhoodMap(x, r)\n\t}",
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
  "{ :x :r |\n\t\t{ :y :i |\n\t\t\ty.median\n\t\t}.neighbourhoodMap(x, r)\n\t}",
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
  "{ :self :r :d |\n\t\t{ :each :i |\n\t\t\tlet a = self[i];\n\t\t\teach.select { :b |\n\t\t\t\ta.euclideanDistance(b) <= d\n\t\t\t}.mean\n\t\t}.neighbourhoodMap(self, r)\n\t}",
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
  "{ :i :x :y :h :k:/1 |\n\t\tlet kx = x.collect { :each |\n\t\t\t((i - each) / h).collect(k:/1) / h\n\t\t}.transpose;\n\t\tlet w = kx / kx.collect(sum:/1);\n\t\tw.dot(y)\n\t}",
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
  "{ :self |\n\t\tself\n\t\t.requireLibraryItem(\n\t\t\t'NistEngineeringStatisticsHandbookData'\n\t\t)\n\t}",
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
  "{ :self :name :columns |\n\t\tlet d = self.nistData.at(name);\n\t\t(d.isVector & { columns = [1] }).if {\n\t\t\td\n\t\t} {\n\t\t\td.isMatrix.if {\n\t\t\t\tlet h = d[1];\n\t\t\t\tlet m = d.allButFirst;\n\t\t\t\t(columns.size = 1).if {\n\t\t\t\t\tm.column(columns[1])\n\t\t\t\t} {\n\t\t\t\t\tm.columns(columns)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tself.error('nistData: invalid data')\n\t\t\t}\n\t\t}\n\t}",
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
