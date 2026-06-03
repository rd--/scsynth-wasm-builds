sl.addType(
  false,
  "MeixnerDistribution",
  "MeixnerDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["a", "b", "m", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
  "MeixnerDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "MeixnerDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "MeixnerDistribution",
);

sl.addMethodToExistingType(
  "MeixnerDistribution",
  "MeixnerDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    let _m = _m_1(_self);
    let _d = _d_1(_self);
    let _p = _circumflexAccent_2(2, _plusSign_2(-1, _asterisk_2(2, _d)));
    let _q = _circumflexAccent_2(_cos_1(_solidus_2(_b, 2)), _asterisk_2(2, _d));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _r = _solidus_2(_i_1(_hyphenMinus_2(_x, _m)), _a);
      let _s = _asterisk_2(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(
              _p,
              _exp_1(_solidus_2(_asterisk_2(_b, _hyphenMinus_2(_x, _m)), _a)),
            ),
            _q,
          ),
          _gamma_1(_hyphenMinus_2(_d, _r)),
        ),
        _gamma_1(_plusSign_2(_d, _r)),
      );
      let _t = _asterisk_2(_pi_1(_a), _gamma_1(_asterisk_2(2, _d)));
      /* Statements */
      return _real_1(_solidus_2(_s, _t));
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\tlet m = self.m;\n\t\tlet d = self.d;\n\t\tlet p = 2 ^ (-1 + (2 * d));\n\t\tlet q = (b / 2).cos ^ (2 * d);\n\t\t{ :x |\n\t\t\tlet r = (x - m).i / a;\n\t\t\tlet s = (p * (b * (x - m) / a).exp * q * (d - r).gamma * (d + r).gamma);\n\t\t\tlet t = (a.pi * (2 * d).gamma);\n\t\t\t(s / t).real\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "MeixnerDistribution",
  "MeixnerDistribution",
  ["a", "b", "m", "d"],
  sl.annotateFunction(function (_a, _b, _m, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _m, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newMeixnerDistribution_0(), _a, _b, _m, _d);
  }, ["a", "b", "m", "d"]),
  "{ :a :b :m :d |\n\t\tnewMeixnerDistribution().initializeSlots(a, b, m, d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "MeixnerDistribution",
  "MeixnerDistribution",
  ["a", "b", "m", "d"],
  sl.annotateFunction(function (_a, _b, _m, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _m, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newMeixnerDistribution_0(), _a, _b, _m, _d);
  }, ["a", "b", "m", "d"]),
  "{ :a :b :m :d |\n\t\tnewMeixnerDistribution().initializeSlots(a, b, m, d)\n\t}",
);
