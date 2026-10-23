sl.addType(
  false,
  "EisensteinInteger",
  "EisensteinInteger",
  ["@Object", "@Store", "@Equal"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "EisensteinInteger",
);

sl.copyTraitMethodsToType(
  "@Store",
  "EisensteinInteger",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "EisensteinInteger",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock/2"],
  sl.annotateFunction(function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aComplexNumber, _toComplex_1(_self));
  }, ["self", "aComplexNumber", "aBlock/2"]),
  "{ :self :aComplexNumber :aBlock/2 |\n\t\taBlock(aComplexNumber, self.toComplex)\n\t}",
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
  "{ :self |\n\t\tEisensteinInteger(\n\t\t\t0 - self.a - 1,\n\t\t\t0 - self.b\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "times",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isEisensteinInteger_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar1 = _assertIsOfSize_2(_components_1(_self), 2);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        let __SplVar2 = _assertIsOfSize_2(_components_1(_operand), 2);
        let _c = _at_2(__SplVar2, 1);
        let _d = _at_2(__SplVar2, 2);
        return _EisensteinInteger_2(
          _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
          _hyphenMinus_2(
            _plusSign_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
            _asterisk_2(_b, _d),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_toComplex_1(_self), _operand);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isEisensteinInteger.if {\n\t\t\tlet [a, b] = self.components;\n\t\t\tlet [c, d] = operand.components;\n\t\t\tEisensteinInteger(\n\t\t\t\t(a * c) - (b * d),\n\t\t\t\t(b * c) + (a * d) - (b * d)\n\t\t\t)\n\t\t} {\n\t\t\tself.toComplex * operand\n\t\t}\n\t}",
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
    } /* Statements */
    return _if_3(
      _isEisensteinInteger_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar1 = _assertIsOfSize_2(_components_1(_self), 2);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        let __SplVar2 = _assertIsOfSize_2(_components_1(_operand), 2);
        let _c = _at_2(__SplVar2, 1);
        let _d = _at_2(__SplVar2, 2);
        return _EisensteinInteger_2(
          _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
          _hyphenMinus_2(
            _plusSign_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
            _asterisk_2(_b, _d),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_toComplex_1(_self), _operand);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isEisensteinInteger.if {\n\t\t\tlet [a, b] = self.components;\n\t\t\tlet [c, d] = operand.components;\n\t\t\tEisensteinInteger(\n\t\t\t\t(a * c) - (b * d),\n\t\t\t\t(b * c) + (a * d) - (b * d)\n\t\t\t)\n\t\t} {\n\t\t\tself.toComplex * operand\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "absoluteValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_toComplex_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.toComplex.abs\n\t}",
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
    return _abs_1(_toComplex_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.toComplex.abs\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "components",
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
    } /* Statements */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    return _plusSign_2(
      _hyphenMinus_2(_asterisk_2(_a, _a), _asterisk_2(_a, _b)),
      _asterisk_2(_b, _b),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\t(a * a) - (a * b) + (b * b)\n\t}",
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
    return _hyphenMinus_2(_a_1(_self), _solidus_2(_b_1(_self), 2));
  }, ["self"]),
  "{ :self |\n\t\tself.a - (self.b / 2)\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.real, self.imaginary]\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "toComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_a_1(_self), _eisensteinOmega_1(_b_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.a + self.b.eisensteinOmega\n\t}",
);

sl.addMethodToExistingType(
  "EisensteinInteger",
  "EisensteinInteger",
  "eisensteinIntegerToComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_a_1(_self), _eisensteinOmega_1(_b_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.a + self.b.eisensteinOmega\n\t}",
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
    return _if_3(
      _isInteger_1(_b),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uncheckedEisensteinInteger_2(_a, _b);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToIntegerAndApply_3(_b, _a, _EisensteinInteger_2);
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\tb.isInteger.if {\n\t\t\tuncheckedEisensteinInteger(a, b)\n\t\t} {\n\t\t\tb.adaptToIntegerAndApply(a, EisensteinInteger/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EisensteinInteger",
  "eisensteinOmega",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    let _omega = _Complex_2(-0.5, 0.8660254037844386);
    return _asterisk_2(_n, _omega);
  }, ["n"]),
  "{ :n |\n\t\t/* let omega = (-1 + (0J1 * 3.sqrt)) / 2; */\n\t\tlet omega = -0.5J0.8660254037844386;\n\t\tn * omega\n\t}",
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
        } /* Statements */
        let _c = _max_2(_abs_1(_a), _abs_1(_b));
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
        } /* Statements */
        let _n = _hyphenMinus_2(
          _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
          _asterisk_2(_a, _b),
        );
        return _isPrime_1(_n);
      }, []),
    );
  }, ["a", "b"]),
  "{ :a :b |\n\t\t(a = 0 | { b = 0 | { a = b } }).if {\n\t\t\tlet c = a.abs.max(b.abs);\n\t\t\tc.isPrime & { c % 3 = 2 }\n\t\t} {\n\t\t\tlet n = (a * a) + (b * b) - (a * b);\n\t\t\tn.isPrime\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EisensteinInteger",
  "uncheckedEisensteinInteger",
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
  "@Sequence",
  "EisensteinInteger",
  "EisensteinInteger",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_b, _a, _EisensteinInteger_2);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tb.adaptToCollectionAndApply(a, EisensteinInteger/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EisensteinInteger",
  "EisensteinInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar3 = _assertIsOfSize_2(_each, 2);
        let _a = _at_2(__SplVar3, 1);
        let _b = _at_2(__SplVar3, 2);
        return _EisensteinInteger_2(_a, _b);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\tlet [a, b] = each;\n\t\t\tEisensteinInteger(a, b)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "EisensteinInteger",
  "arrayToEisensteinInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar3 = _assertIsOfSize_2(_each, 2);
        let _a = _at_2(__SplVar3, 1);
        let _b = _at_2(__SplVar3, 2);
        return _EisensteinInteger_2(_a, _b);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\tlet [a, b] = each;\n\t\t\tEisensteinInteger(a, b)\n\t\t}\n\t}",
);
