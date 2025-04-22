sl.addType(
  false,
  "WeightedData",
  "WeightedData",
  ["Object"],
  ["inputData", "weights"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeightedData",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _inputData_1(_self);
    let _w = _weights_1(_self);
    /* Statements */
    return _solidus_2(_sum_1(_asterisk_2(_x, _w)), _sum_1(_w));
  }, ["self"]),
  "{ :self | let x = inputData(self); let w = weights(self); /(sum((*(x, w))), sum(w)) }",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _inputData_1(_self);
    let _w = _weights_1(_self);
    let _k = _size_1(_x);
    let _wH = _solidus_2(_sum_1(_w), 2);
    let _o = _ordering_2(_x, _lessThanSignEqualsSign_2);
    let _xO = _atAll_2(_x, _o);
    let _wO = _atAll_2(_w, _o);
    let _z = _prefixSum_1(_wO);
    let _i = _detectIndex_2(
      _z,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_each, _wH);
      }, ["each"]),
    );
    /* Statements */
    return _at_2(_xO, _i);
  }, ["self"]),
  "{ :self | let x = inputData(self); let w = weights(self); let k = size(x); let wH = /(sum(w), 2); let o = ordering(x,<=); let xO = atAll(x,o); let wO = atAll(w,o); let z = prefixSum(wO); let i = detectIndex(z, { :each | >=(each, wH) }); at(xO, i) }",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "randomChoice",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomWeightedChoice_4(
      _r,
      _inputData_1(_self),
      _weights_1(_self),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | randomWeightedChoice(r,inputData(self), weights(self), shape) }",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "rootMeanSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _inputData_1(_self);
    let _w = _weights_1(_self);
    /* Statements */
    return _sqrt_1(
      _sum_1(_solidus_2(_asterisk_2(_squared_1(_x), _w), _sum_1(_w))),
    );
  }, ["self"]),
  "{ :self | let x = inputData(self); let w = weights(self); sqrt(sum((/((*(squared(x), w)), sum(w))))) }",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "sampleVariance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _inputData_1(_self);
    let _w = _weights_1(_self);
    let _mu = _mean_1(_self);
    /* Statements */
    return _solidus_2(
      _sum_1(_asterisk_2(_w, _circumflexAccent_2(_hyphenMinus_2(_x, _mu), 2))),
      _sum_1(_w),
    );
  }, ["self"]),
  "{ :self | let x = inputData(self); let w = weights(self); let mu = mean(self); /(sum((*(w, (^((-(x, mu)), 2))))), sum(w)) }",
);

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
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

sl.addMethodToExistingType(
  "WeightedData",
  "WeightedData",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _inputData_1(_self);
    let _w = _weights_1(_self);
    let _wSum = _sum_1(_w);
    let _v = _sum_1(_squared_1(_w));
    let _n = _size_1(_x);
    let _mu = _mean_1(_self);
    /* Statements */
    return _asterisk_2(
      _solidus_2(_wSum, _hyphenMinus_2(_squared_1(_wSum), _v)),
      _sum_1(_asterisk_2(_w, _circumflexAccent_2(_hyphenMinus_2(_x, _mu), 2))),
    );
  }, ["self"]),
  "{ :self | let x = inputData(self); let w = weights(self); let wSum = sum(w); let v = sum(squared(w)); let n = size(x); let mu = mean(self); *((/(wSum, (-(squared(wSum), v)))), sum((*(w, (^((-(x, mu)), 2)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "WeightedData",
  "WeightedData",
  ["x", "wSpecifier"],
  sl.annotateFunction(function (_x, _wSpecifier) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _wSpecifier";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _w = _if_3(
      _isBlock_1(_wSpecifier),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_x, _wSpecifier);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _wSpecifier;
      }, []),
    );
    /* Statements */
    return _initializeSlots_3(_newWeightedData_0(), _x, _w);
  }, ["x", "wSpecifier"]),
  "{ :x :wSpecifier | let w = if(isBlock(wSpecifier), { collect(x,wSpecifier) }, { wSpecifier }); initializeSlots(newWeightedData(),x, w) }",
);
