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
    let __SPL11 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsCircle_1(_self)),
      3,
    );
    let _c = _at_2(__SPL11, 1);
    let _alpha = _at_2(__SPL11, 2);
    let __genSym22 = _at_2(__SPL11, 3);
    let __SPL12 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL12, 1);
    let _b = _at_2(__SPL12, 2);
    /* Statements */
    return _Circle_2(
      _solidus_2([_negate_1(_a), _b], _c),
      _sqrt_1(_solidus_2(_discriminant_1(_self), _square_1(_c))),
    );
  }, ["self"]),
  "{ :self | let __SPL11 = assertIsOfSize(coefficientList(assertIsCircle(self)), 3); let c = at(__SPL11, 1); let alpha = at(__SPL11, 2); let _ = at(__SPL11, 3); let __SPL12 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL12, 1); let b = at(__SPL12, 2); Circle(/([negate(a), b], c), sqrt((/(discriminant(self), square(c))))) }",
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
    let __SPL13 = _assertIsOfSize_2(_lineEquation_1(_self), 3);
    let _a = _at_2(__SPL13, 1);
    let _b = _at_2(__SPL13, 2);
    let _c = _at_2(__SPL13, 3);
    /* Statements */
    return _InfiniteLine_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL13 = assertIsOfSize(lineEquation(self), 3); let a = at(__SPL13, 1); let b = at(__SPL13, 2); let c = at(__SPL13, 3); InfiniteLine(a, b, c) }",
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
    let __SPL14 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsPoint_1(_self)),
      3,
    );
    let _c = _at_2(__SPL14, 1);
    let _alpha = _at_2(__SPL14, 2);
    let __genSym23 = _at_2(__SPL14, 3);
    let __SPL15 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _r = _at_2(__SPL15, 1);
    let _i = _at_2(__SPL15, 2);
    /* Statements */
    return _Point_1(_solidus_2([_negate_1(_r), _i], _c));
  }, ["self"]),
  "{ :self | let __SPL14 = assertIsOfSize(coefficientList(assertIsPoint(self)), 3); let c = at(__SPL14, 1); let alpha = at(__SPL14, 2); let _ = at(__SPL14, 3); let __SPL15 = assertIsOfSize(asList(alpha), 2); let r = at(__SPL15, 1); let i = at(__SPL15, 2); Point(/([negate(r), i], c)) }",
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
  "{ :self | assert(self, 'GeneralisedCircle: not circle', { isCircle(self) }) }",
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
  "{ :self | assert(self, 'GeneralisedCircle: not line', { isLine(self) }) }",
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
  "{ :self | assert(self, 'GeneralisedCircle: not point', { isPoint(self) }) }",
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
  "{ :self | [c(self), alpha(self), d(self)] }",
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
    let __SPL16 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SPL16, 1);
    let _alpha = _at_2(__SPL16, 2);
    let _d = _at_2(__SPL16, 3);
    /* Statements */
    return _hyphenMinus_2(_square_1(_abs_1(_alpha)), _asterisk_2(_c, _d));
  }, ["self"]),
  "{ :self | let __SPL16 = assertIsOfSize(coefficientList(self), 3); let c = at(__SPL16, 1); let alpha = at(__SPL16, 2); let d = at(__SPL16, 3); -(square(abs(alpha)), (*(c, d))) }",
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
    let __SPL17 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let _c = _at_2(__SPL17, 1);
    let _alpha = _at_2(__SPL17, 2);
    let _d = _at_2(__SPL17, 3);
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
  "{ :self | let __SPL17 = assertIsOfSize(coefficientList(assertIsLine(self)), 3); let c = at(__SPL17, 1); let alpha = at(__SPL17, 2); let d = at(__SPL17, 3); if((>(abs(alpha), 1E-12)), { /(abs(d), (*(2, abs(alpha)))) }, { Infinity }) }",
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
    let __SPL18 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SPL18, 1);
    let _alpha = _at_2(__SPL18, 2);
    let _d = _at_2(__SPL18, 3);
    let __SPL19 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL19, 1);
    let _b = _at_2(__SPL19, 2);
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
  "{ :self | let __SPL18 = assertIsOfSize(coefficientList(self), 3); let c = at(__SPL18, 1); let alpha = at(__SPL18, 2); let d = at(__SPL18, 3); let __SPL19 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL19, 1); let b = at(__SPL19, 2); { :x :y | +(+((*(c, (+(square(x), square(y))))), (*(2, (-((*(a, x)), (*(b, y))))))), d) } }",
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
  "{ :self | &(not(isLine(self)), { >(discriminant(self), 1E-12) }) }",
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
  "{ :self | isVeryCloseTo(c(self),0) }",
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
  "{ :self | &(not(isLine(self)), { isVeryCloseTo(discriminant(self),0) }) }",
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
    let __SPL20 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let __genSym24 = _at_2(__SPL20, 1);
    let _alpha = _at_2(__SPL20, 2);
    let _d = _at_2(__SPL20, 3);
    let __SPL21 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL21, 1);
    let _b = _at_2(__SPL21, 2);
    /* Statements */
    return [_a, _asterisk_2(-1, _b), _solidus_2(_d, 2)];
  }, ["self"]),
  "{ :self | let __SPL20 = assertIsOfSize(coefficientList(assertIsLine(self)), 3); let _ = at(__SPL20, 1); let alpha = at(__SPL20, 2); let d = at(__SPL20, 3); let __SPL21 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL21, 1); let b = at(__SPL21, 2); [a, *(-1, b), /(d, 2)] }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :c :alpha :d | initializeSlots(newGeneralisedCircle(),c, alpha, d) }",
);
