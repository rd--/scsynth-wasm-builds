sl.addType(
  false,
  "FRatioDistribution",
  "FRatioDistribution",
  ["Object"],
  ["n", "m"],
);

sl.copyTraitMethodsToType(
  "Object",
  "FRatioDistribution",
);

sl.addMethodToExistingType(
  "FRatioDistribution",
  "FRatioDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _randomVariate_3(
      _ChiSquareDistribution_1(_n_1(_self)),
      _r,
      _shape,
    );
    let _d = _randomVariate_3(
      _ChiSquareDistribution_1(_m_1(_self)),
      _r,
      _shape,
    );
    /* Statements */
    return _asterisk_2(
      _solidus_2(_n, _d),
      _solidus_2(_m_1(_self), _n_1(_self)),
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\tlet n = ChiSquareDistribution(self.n).randomVariate(r, shape);\n\t\tlet d = ChiSquareDistribution(self.m).randomVariate(r, shape);\n\t\t(n / d) * (self.m / self.n)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "FRatioDistribution",
  "FRatioDistribution",
  ["n", "m"],
  sl.annotateFunction(function (_n, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newFRatioDistribution_0(), _n, _m);
  }, ["n", "m"]),
  "{ :n :m |\n\t\tnewFRatioDistribution().initializeSlots(n, m)\n\t}",
);
