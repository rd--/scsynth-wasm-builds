sl.addType(
  false,
  "EisensteinInteger",
  "EisensteinInteger",
  ["Object"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EisensteinInteger",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL409 = _assertIsOfSize_2(_asList_1(_self), 2);
    let _a = _at_2(__SPL409, 1);
    let _b = _at_2(__SPL409, 2);
    let __SPL410 = _assertIsOfSize_2(_asList_1(_operand), 2);
    let _c = _at_2(__SPL410, 1);
    let _d = _at_2(__SPL410, 2);
    /* Statements */
    return _EisensteinInteger_2(
      _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
      _hyphenMinus_2(
        _plusSign_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
        _asterisk_2(_b, _d),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand | let __SPL409 = assertIsOfSize(asList(self), 2); let a = at(__SPL409, 1); let b = at(__SPL409, 2); let __SPL410 = assertIsOfSize(asList(operand), 2); let c = at(__SPL410, 1); let d = at(__SPL410, 2); EisensteinInteger(-((*(a, c)), (*(b, d))), -(+((*(b, c)), (*(a, d))), (*(b, d)))) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_asComplex_1(_self));
  }, ["self"]),
  "{ :self | abs(asComplex(self)) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "asComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _omega = _solidus_2(
      _plusSign_2(-1, _asterisk_2(_Complex_2(0, 1), _sqrt_1(3))),
      2,
    );
    /* Statements */
    return _plusSign_2(_a_1(_self), _asterisk_2(_b_1(_self), _omega));
  }, ["self"]),
  "{ :self | let omega = /((+(-1, (*(Complex(0, 1), sqrt(3))))), 2); +(a(self), (*(b(self), omega))) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_a_1(_self), _b_1(_self)];
  }, ["self"]),
  "{ :self | [a(self), b(self)] }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "conjugated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _EisensteinInteger_2(
      _hyphenMinus_2(_hyphenMinus_2(0, _a_1(_self)), 1),
      _hyphenMinus_2(0, _b_1(_self)),
    );
  }, ["self"]),
  "{ :self | EisensteinInteger(-(-(0, a(self)), 1), -(0, b(self))) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_asterisk_2(_b_1(_self), _sqrt_1(3)), 2);
  }, ["self"]),
  "{ :self | /(*(b(self), sqrt(3)), 2) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "isPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEisensteinPrime_2(_a_1(_self), _b_1(_self));
  }, ["self"]),
  "{ :self | isEisensteinPrime(a(self), b(self)) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
      _asterisk_2(_a, _b),
    );
  }, ["self"]),
  "{ :self | let a = a(self); let b = b(self); -(+((*(a, a)), (*(b, b))), (*(a, b))) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "real",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hyphenMinus_2(_a_1(_self), _b_1(_self)), 2);
  }, ["self"]),
  "{ :self | /(-(a(self), b(self)), 2) }",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
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
  "EisensteinInteger",
  "EisensteinInteger",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newEisensteinInteger_0(), _a, _b);
  }, ["a", "b"]),
  "{ :a :b | initializeSlots(newEisensteinInteger(),a, b) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EisensteinInteger",
  "isEisensteinPrime",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_a, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _verticalLine_2(
            _equalsSign_2(_b, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_a, _b);
            }, []),
          );
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _max_2(_abs_1(_a), _abs_1(_b));
        /* Statements */
        return _ampersand_2(
          _isPrime_1(_c),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_percentSign_2(_c, 3), 2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _hyphenMinus_2(
          _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
          _asterisk_2(_a, _b),
        );
        /* Statements */
        return _isPrime_1(_n);
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b | if((|(=(a, 0), { |(=(b, 0), { =(a, b) }) })), { let c = max(abs(a),abs(b)); &(isPrime(c), { =(%(c, 3), 2) }) }, { let n = -(+((*(a, a)), (*(b, b))), (*(a, b))); isPrime(n) }) }",
);
