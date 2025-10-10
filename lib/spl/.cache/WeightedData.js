sl.addType(
  false,
  "WeightedData",
  "WeightedData",
  ["Object", "Equatable"],
  ["inputData", "weights"],
);

sl.copyTraitMethodsToType(
  "Object",
  "WeightedData",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tlet x = self.inputData;\n\t\tlet w = self.weights;\n\t\t(x * w).sum / w.sum\n\t}",
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
  "{ :self |\n\t\tlet x = self.inputData;\n\t\tlet w = self.weights;\n\t\tlet k = x.size;\n\t\tlet wH = w.sum / 2;\n\t\tlet o = x.ordering(<=);\n\t\tlet xO = x.atAll(o);\n\t\tlet wO = w.atAll(o);\n\t\tlet z = wO.prefixSum;\n\t\tlet i = z.detectIndex { :each | each >= wH };\n\t\txO[i] /* no interpolation */\n\t}",
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
  "{ :self :r :shape |\n\t\tr.randomWeightedChoice(\n\t\t\tself.inputData,\n\t\t\tself.weights,\n\t\t\tshape\n\t\t)\n\t}",
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
      _sum_1(_solidus_2(_asterisk_2(_square_1(_x), _w), _sum_1(_w))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet x = self.inputData;\n\t\tlet w = self.weights;\n\t\t((x.square * w) / w.sum).sum.sqrt\n\t}",
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
  "{ :self |\n\t\tlet x = self.inputData;\n\t\tlet w = self.weights;\n\t\tlet mu = self.mean;\n\t\t(w * ((x - mu) ^ 2)).sum / w.sum\n\t}",
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
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
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
    let _v = _sum_1(_square_1(_w));
    let _n = _size_1(_x);
    let _mu = _mean_1(_self);
    /* Statements */
    return _asterisk_2(
      _solidus_2(_wSum, _hyphenMinus_2(_square_1(_wSum), _v)),
      _sum_1(_asterisk_2(_w, _circumflexAccent_2(_hyphenMinus_2(_x, _mu), 2))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet x = self.inputData;\n\t\tlet w = self.weights;\n\t\tlet wSum = w.sum;\n\t\tlet v = w.square.sum;\n\t\tlet n = x.size;\n\t\tlet mu = self.mean;\n\t\t(wSum / (wSum.square - v)) * (w * ((x - mu) ^ 2)).sum\n\t}",
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
  "{ :x :wSpecifier |\n\t\tlet w = wSpecifier.isBlock.if {\n\t\t\tx.collect(wSpecifier)\n\t\t} {\n\t\t\twSpecifier\n\t\t};\n\t\tnewWeightedData().initializeSlots(x, w)\n\t}",
);
