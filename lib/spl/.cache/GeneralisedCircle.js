sl.addType(
  false,
  "GeneralisedCircle",
  "GeneralisedCircle",
  ["Object"],
  ["c", "alpha", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeneralisedCircle",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "equalsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand | hasEqualSlots(self,operand) }",
);

sl.addMethodToExistingType(
  "GeneralisedCircle",
  "GeneralisedCircle",
  "tilde",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _operand, _tilde_2);
  }, ["self", "operand"]),
  "{ :self :operand | hasEqualSlotsBy(self,operand, ~) }",
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
    let __SPL148 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsCircle_1(_self)),
      3,
    );
    let _c = _at_2(__SPL148, 1);
    let _alpha = _at_2(__SPL148, 2);
    let __genSym159 = _at_2(__SPL148, 3);
    let __SPL149 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL149, 1);
    let _b = _at_2(__SPL149, 2);
    /* Statements */
    return _Circle_2(
      _solidus_2([_negate_1(_a), _b], _c),
      _sqrt_1(_solidus_2(_discriminant_1(_self), _square_1(_c))),
    );
  }, ["self"]),
  "{ :self | let __SPL148 = assertIsOfSize(coefficientList(assertIsCircle(self)), 3); let c = at(__SPL148, 1); let alpha = at(__SPL148, 2); let _ = at(__SPL148, 3); let __SPL149 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL149, 1); let b = at(__SPL149, 2); Circle(/([negate(a), b], c), sqrt((/(discriminant(self), square(c))))) }",
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
    let __SPL150 = _assertIsOfSize_2(_lineEquation_1(_self), 3);
    let _a = _at_2(__SPL150, 1);
    let _b = _at_2(__SPL150, 2);
    let _c = _at_2(__SPL150, 3);
    /* Statements */
    return _InfiniteLine_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL150 = assertIsOfSize(lineEquation(self), 3); let a = at(__SPL150, 1); let b = at(__SPL150, 2); let c = at(__SPL150, 3); InfiniteLine(a, b, c) }",
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
    let __SPL151 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsPoint_1(_self)),
      3,
    );
    let _c = _at_2(__SPL151, 1);
    let _alpha = _at_2(__SPL151, 2);
    let __genSym160 = _at_2(__SPL151, 3);
    let __SPL152 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _r = _at_2(__SPL152, 1);
    let _i = _at_2(__SPL152, 2);
    /* Statements */
    return _Point_1(_solidus_2([_negate_1(_r), _i], _c));
  }, ["self"]),
  "{ :self | let __SPL151 = assertIsOfSize(coefficientList(assertIsPoint(self)), 3); let c = at(__SPL151, 1); let alpha = at(__SPL151, 2); let _ = at(__SPL151, 3); let __SPL152 = assertIsOfSize(asList(alpha), 2); let r = at(__SPL152, 1); let i = at(__SPL152, 2); Point(/([negate(r), i], c)) }",
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
    let __SPL153 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SPL153, 1);
    let _alpha = _at_2(__SPL153, 2);
    let _d = _at_2(__SPL153, 3);
    /* Statements */
    return _hyphenMinus_2(_square_1(_abs_1(_alpha)), _asterisk_2(_c, _d));
  }, ["self"]),
  "{ :self | let __SPL153 = assertIsOfSize(coefficientList(self), 3); let c = at(__SPL153, 1); let alpha = at(__SPL153, 2); let d = at(__SPL153, 3); -(square(abs(alpha)), (*(c, d))) }",
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
    let __SPL154 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let _c = _at_2(__SPL154, 1);
    let _alpha = _at_2(__SPL154, 2);
    let _d = _at_2(__SPL154, 3);
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
  "{ :self | let __SPL154 = assertIsOfSize(coefficientList(assertIsLine(self)), 3); let c = at(__SPL154, 1); let alpha = at(__SPL154, 2); let d = at(__SPL154, 3); if((>(abs(alpha), 1E-12)), { /(abs(d), (*(2, abs(alpha)))) }, { Infinity }) }",
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
    let __SPL155 = _assertIsOfSize_2(_coefficientList_1(_self), 3);
    let _c = _at_2(__SPL155, 1);
    let _alpha = _at_2(__SPL155, 2);
    let _d = _at_2(__SPL155, 3);
    let __SPL156 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL156, 1);
    let _b = _at_2(__SPL156, 2);
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
  "{ :self | let __SPL155 = assertIsOfSize(coefficientList(self), 3); let c = at(__SPL155, 1); let alpha = at(__SPL155, 2); let d = at(__SPL155, 3); let __SPL156 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL156, 1); let b = at(__SPL156, 2); { :x :y | +(+((*(c, (+(square(x), square(y))))), (*(2, (-((*(a, x)), (*(b, y))))))), d) } }",
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
    let __SPL157 = _assertIsOfSize_2(
      _coefficientList_1(_assertIsLine_1(_self)),
      3,
    );
    let __genSym161 = _at_2(__SPL157, 1);
    let _alpha = _at_2(__SPL157, 2);
    let _d = _at_2(__SPL157, 3);
    let __SPL158 = _assertIsOfSize_2(_asList_1(_alpha), 2);
    let _a = _at_2(__SPL158, 1);
    let _b = _at_2(__SPL158, 2);
    /* Statements */
    return [_a, _asterisk_2(-1, _b), _solidus_2(_d, 2)];
  }, ["self"]),
  "{ :self | let __SPL157 = assertIsOfSize(coefficientList(assertIsLine(self)), 3); let _ = at(__SPL157, 1); let alpha = at(__SPL157, 2); let d = at(__SPL157, 3); let __SPL158 = assertIsOfSize(asList(alpha), 2); let a = at(__SPL158, 1); let b = at(__SPL158, 2); [a, *(-1, b), /(d, 2)] }",
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
