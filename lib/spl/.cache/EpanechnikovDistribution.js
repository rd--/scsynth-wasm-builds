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
  "{ :self | let c = c(self); let m = /(3, (*(4, c))); { :x | let y = clip(x,[-(0, c), c]); -(+(0.5, (*(m, y))), (/((^(y, 3)), (*(4, (^(c, 3))))))) } }",
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
  "{ :self | 0 }",
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
  "{ :self | 0 }",
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
  "{ :self | let c = c(self); let m = /(3, (*(4, c))); { :x | *(m, max(0, -(1, (^((/(x, c)), 2))))) } }",
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
  "{ :self | 0 }",
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
    return _Interval_2(_negated_1(_c), _c);
  }, ["self"]),
  "{ :self | let c = c(self); Interval(negated(c), c) }",
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
    return _solidus_2(_squared_1(_c_1(_self)), 5);
  }, ["self"]),
  "{ :self | /(squared(c(self)), 5) }",
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
  "{ :c | initializeSlots(newEpanechnikovDistribution(),c) }",
);
