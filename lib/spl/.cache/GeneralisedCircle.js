sl.addType(
  false,
  "GeneralisedCircle",
  "GeneralisedCircle",
  ["Object", "Equatable"],
  ["c", "alpha", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeneralisedCircle",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "GeneralisedCircle",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "asCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsCircle_1(_self)),
      3,
    );
    let _c = _at_2(__SplVar1, 1);
    let _alpha = _at_2(__SplVar1, 2);
    let __SplUnused12 = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    /* Statements */
    return _Circle_2(
      _solidus_2([_negate_1(_a), _b], _c),
      _sqrt_1(_solidus_2(_discriminant_1(_self), _square_1(_c))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [c, alpha, _] = self.assertIsCircle.coefficientList;\n\t\tlet [a, b] = alpha.asList;\n\t\tCircle(\n\t\t\t[a.negate, b] / c,\n\t\t\t(self.discriminant / c.square).sqrt\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "asLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_lineEquation_1(_self), 3);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    /* Statements */
    return _InfiniteLine_3(_a, _b, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.lineEquation;\n\t\tInfiniteLine(a, b, c)\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "asPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsPoint_1(_self)),
      3,
    );
    let _c = _at_2(__SplVar4, 1);
    let _alpha = _at_2(__SplVar4, 2);
    let __SplUnused13 = _at_2(__SplVar4, 3);
    let __SplVar5 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _r = _at_2(__SplVar5, 1);
    let _i = _at_2(__SplVar5, 2);
    /* Statements */
    return _Point_1(_solidus_2([_negate_1(_r), _i], _c));
  }, ["self"]),
  "{ :self |\n\t\tlet [c, alpha, _] = self.assertIsPoint.coefficientList;\n\t\tlet [r, i] = alpha.asList;\n\t\tPoint(\n\t\t\t[r.negate, i] / c\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "assertIsCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      "GeneralisedCircle: not circle",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCircle_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.assert('GeneralisedCircle: not circle') { self.isCircle }\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "assertIsLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      "GeneralisedCircle: not line",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isLine_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.assert('GeneralisedCircle: not line') { self.isLine }\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "assertIsPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _assert_3(
      _self,
      "GeneralisedCircle: not point",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPoint_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.assert('GeneralisedCircle: not point') { self.isPoint }\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "coefficientList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_c_1(_self), _alpha_1(_self), _d_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.c, self.alpha, self.d]\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "discriminant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SplVar6, 1);
    let _alpha = _at_2(__SplVar6, 2);
    let _d = _at_2(__SplVar6, 3);
    /* Statements */
    return _hyphenMinus_2(_square_1(_abs_1(_alpha)), _asterisk_2(_c, _d));
  }, ["self"]),
  "{ :self |\n\t\tlet [c, alpha, d] = self.coefficientList;\n\t\talpha.abs.square - (c * d)\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "distanceFromOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let _c = _at_2(__SplVar7, 1);
    let _alpha = _at_2(__SplVar7, 2);
    let _d = _at_2(__SplVar7, 3);
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_alpha), 1E-12),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_abs_1(_d), _asterisk_2(2, _abs_1(_alpha)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return Infinity;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [c, alpha, d] = self.assertIsLine.coefficientList;\n\t\t(alpha.abs > 1E-12).if {\n\t\t\td.abs / (2 * alpha.abs)\n\t\t} {\n\t\t\tInfinity\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "implicitEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SplVar8, 1);
    let _alpha = _at_2(__SplVar8, 2);
    let _d = _at_2(__SplVar8, 3);
    let __SplVar9 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SplVar9, 1);
    let _b = _at_2(__SplVar9, 2);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _plusSign_2(
          _asterisk_2(_c, _plusSign_2(_square_1(_x), _square_1(_y))),
          _asterisk_2(
            2,
            _hyphenMinus_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
          ),
        ),
        _d,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [c, alpha, d] = self.coefficientList;\n\t\tlet [a, b] = alpha.asList;\n\t\t{ :x :y |\n\t\t\t(c * (x.square + y.square)) + (2 * ((a * x) - (b * y))) + d\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "isCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _not_1(_isLine_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_discriminant_1(_self), 1E-12);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isLine.not & {\n\t\t\tself.discriminant > 1E-12\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "isLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_c_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tself.c.isVeryCloseTo(0)\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "isPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _not_1(_isLine_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_discriminant_1(_self), 0);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isLine.not & {\n\t\t\tself.discriminant.isVeryCloseTo(0)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "lineEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let __SplUnused14 = _at_2(__SplVar10, 1);
    let _alpha = _at_2(__SplVar10, 2);
    let _d = _at_2(__SplVar10, 3);
    let __SplVar11 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SplVar11, 1);
    let _b = _at_2(__SplVar11, 2);
    /* Statements */
    return [_a, _asterisk_2(-1, _b), _solidus_2(_d, 2)];
  }, ["self"]),
  "{ :self |\n\t\tlet [_, alpha, d] = self.assertIsLine.coefficientList;\n\t\tlet [a, b] = alpha.asList;\n\t\t[a, -1 * b, d / 2]\n\t}",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "GeneralisedCircle",
  "GeneralisedCircle",
  ["c", "alpha", "d"],
  sl.annotateFunction(function (_c, _alpha, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _c, _alpha, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newGeneralisedCircle_0(), _c, _alpha, _d);
  }, ["c", "alpha", "d"]),
  "{ :c :alpha :d |\n\t\tnewGeneralisedCircle().initializeSlots(c, alpha, d)\n\t}",
);
