sl.addType(
  false,
  "MultivariateTDistribution",
  "MultivariateTDistribution",
  ["Object"],
  ["mu", "sigma", "nu"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MultivariateTDistribution",
);

sl.addMethodToExistingType(
  "MultivariateTDistribution",
  "MultivariateTDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_sigma_1(_self));
    let __SplVar1 = _assertIsOfSize_2(_shape, 1);
    let _n = _at_2(__SplVar1, 1);
    let _x = _solidus_2(
      _randomVariate_3(_ChiSquareDistribution_1(_nu_1(_self)), _r, _shape),
      _nu_1(_self),
    );
    let _z = _randomVariate_3(
      _MultinormalDistribution_2(_List_2(_k, 0), _sigma_1(_self)),
      _r,
      _shape,
    );
    /* Statements */
    return _plusSign_2([_mu_1(_self)], _solidus_2(_z, _sqrt_1(_x)));
  }, ["self", "r", "shape"]),
  "{ :self :r :shape |\n\t\tlet k = self.sigma.size;\n\t\tlet [n] = shape;\n\t\tlet x = ChiSquareDistribution(self.nu).randomVariate(r, shape) / self.nu;\n\t\tlet z = MultinormalDistribution(List(k, 0), self.sigma).randomVariate(r, shape);\n\t\t[self.mu] + (z / x.sqrt)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "MultivariateTDistribution",
  "MultivariateTDistribution",
  ["mu", "sigma", "nu"],
  sl.annotateFunction(function (_mu, _sigma, _nu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _mu, _sigma, _nu";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(
      _newMultivariateTDistribution_0(),
      _mu,
      _sigma,
      _nu,
    );
  }, ["mu", "sigma", "nu"]),
  "{ :mu :sigma :nu |\n\t\tnewMultivariateTDistribution().initializeSlots(mu, sigma, nu)\n\t}",
);
