sl.addType(
  false,
  "Superellipse",
  "Superellipse",
  ["Object", "Equatable", "Geometry"],
  ["center", "a", "b", "n"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Superellipse",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Superellipse",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Superellipse",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(4, _a_1(_self)), _b_1(_self)),
      _solidus_2(
        _circumflexAccent_2(
          _gamma_1(_plusSign_2(1, _solidus_2(1, _n_1(_self)))),
          2,
        ),
        _gamma_1(_plusSign_2(1, _solidus_2(2, _n_1(_self)))),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\t4 * self.a * self.b * (((1 + (1 / self.n)).gamma ^ 2) / (1 + (2 / self.n)).gamma)\n\t}",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "at",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _value_2(
        _superellipseCurve_3(_a_1(_self), _b_1(_self), _n_1(_self)),
        _theta,
      ),
      _center_1(_self),
    );
  }, ["self", "theta"]),
  "{ :self :theta |\n\t\tsuperellipseCurve(self.a, self.b, self.n).value(theta) + self.center\n\t}",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "atAll",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _collect_2(
        _theta,
        _superellipseCurve_3(_a_1(_self), _b_1(_self), _n_1(_self)),
      ),
      [_center_1(_self)],
    );
  }, ["self", "theta"]),
  "{ :self :theta |\n\t\ttheta.collect(\n\t\t\tsuperellipseCurve(self.a, self.b, self.n)\n\t\t) + [self.center]\n\t}",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Superellipse",
  "discretize",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(
      _self,
      _subdivide_2(_hyphenMinusHyphenMinus_2(0, _pi_1(2)), _anInteger),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.atAll(\n\t\t\t(0 -- 2.pi).subdivide(anInteger)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Superellipse",
  "Superellipse",
  ["center", "a", "b", "n"],
  sl.annotateFunction(function (_center, _a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _center, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newSuperellipse_0(), _center, _a, _b, _n);
  }, ["center", "a", "b", "n"]),
  "{ :center :a :b :n |\n\t\tnewSuperellipse().initializeSlots(center, a, b, n)\n\t}",
);
