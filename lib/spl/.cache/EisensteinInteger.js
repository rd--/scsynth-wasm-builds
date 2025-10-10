sl.addType(
  false,
  "EisensteinInteger",
  "EisensteinInteger",
  ["Object", "Equatable"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "EisensteinInteger",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
    let __SplVar1 = _assertIsOfSize_2(_asList_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2(_asList_1(_operand), 2);
    let _c = _at_2(__SplVar2, 1);
    let _d = _at_2(__SplVar2, 2);
    /* Statements */
    return _EisensteinInteger_2(
      _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
      _hyphenMinus_2(
        _plusSign_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
        _asterisk_2(_b, _d),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet [a, b] = self.asList;\n\t\tlet [c, d] = operand.asList;\n\t\tEisensteinInteger(\n\t\t\t(a * c) - (b * d),\n\t\t\t(b * c) + (a * d) - (b * d)\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.asComplex.abs\n\t}",
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
  "{ :self |\n\t\tlet omega = (-1 + (0J1 * 3.sqrt)) / 2;\n\t\tself.a + (self.b * omega)\n\t}",
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
  "{ :self |\n\t\t[self.a, self.b]\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "conjugate",
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
  "{ :self |\n\t\tEisensteinInteger(0 - self.a - 1, 0 - self.b)\n\t}",
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
  "{ :self |\n\t\tself.b * 3.sqrt / 2\n\t}",
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
  "{ :self |\n\t\tisEisensteinPrime(self.a, self.b)\n\t}",
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
  "{ :self |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\t(a * a) + (b * b) - (a * b)\n\t}",
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
  "{ :self |\n\t\tself.a - self.b / 2\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
  "{ :a :b |\n\t\tnewEisensteinInteger().initializeSlots(a, b)\n\t}",
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
  "{ :a :b |\n\t\t(a = 0 | { b = 0 | { a = b } }).if {\n\t\t\tlet c = a.abs.max(b.abs);\n\t\t\tc.isPrime & { c % 3 = 2 }\n\t\t} {\n\t\t\tlet n = (a * a) + (b * b) - (a * b);\n\t\t\tn.isPrime\n\t\t}\n\t}",
);
