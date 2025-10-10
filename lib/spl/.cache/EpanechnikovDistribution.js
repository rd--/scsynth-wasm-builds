sl.addType(
  false,
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  ["Object"],
  ["c"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EpanechnikovDistribution",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _c_1(_self);
    let _m = _solidus_2(3, _asterisk_2(4, _c));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _y = _clip_2(_x, [_hyphenMinus_2(0, _c), _c]);
      /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(0.5, _asterisk_2(_m, _y)),
        _solidus_2(
          _circumflexAccent_2(_y, 3),
          _asterisk_2(4, _circumflexAccent_2(_c, 3)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.c;\n\t\tlet m = 3 / (4 * c);\n\t\t{ :x |\n\t\t\tlet y = x.clip([0 - c, c]);\n\t\t\t0.5 + (m * y) - ((y ^ 3) / (4 * (c ^ 3)))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _c_1(_self);
    let _m = _solidus_2(3, _asterisk_2(4, _c));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _m,
        _max_2(
          0,
          _hyphenMinus_2(1, _circumflexAccent_2(_solidus_2(_x, _c), 2)),
        ),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.c;\n\t\tlet m = 3 / (4 * c);\n\t\t{ :x |\n\t\t\tm * max(0, 1 - ((x / c) ^ 2))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "support",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _c_1(_self);
    /* Statements */
    return _Interval_2(_negate_1(_c), _c);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.c;\n\t\tInterval(c.negate, c)\n\t}",
);

sl.addMethodToExistingType(
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_square_1(_c_1(_self)), 5);
  }, ["self"]),
  "{ :self |\n\t\tself.c.square / 5\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EpanechnikovDistribution",
  "EpanechnikovDistribution",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newEpanechnikovDistribution_0(), _c);
  }, ["c"]),
  "{ :c |\n\t\tnewEpanechnikovDistribution().initializeSlots(c)\n\t}",
);
