sl.addType(
  false,
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["Object", "Copyable", "Equatable"],
  ["coefficientList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnivariatePolynomial",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "UnivariatePolynomial",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "UnivariatePolynomial",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c1 = _coefficientList_1(_self);
    let _c2 = _coefficientList_1(_operand);
    let _n = _max_2(_size_1(_c1), _size_1(_c2));
    /* Statements */
    return _UnivariatePolynomial_1(
      _plusSign_2(_padRight_3(_c1, [_n], 0), _padRight_3(_c2, [_n], 0)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet c1 = self.coefficientList;\n\t\tlet c2 = operand.coefficientList;\n\t\tlet n = c1.size.max(c2.size);\n\t\tUnivariatePolynomial(\n\t\t\tc1.padRight([n], 0) + c2.padRight([n], 0)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _negate_1(_operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself + operand.negate\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _coefficientList_1(_self);
    /* Statements */
    return _if_3(
      _isUnivariatePolynomial_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _coefficientList_1(_operand);
        let _m = _size_1(_a);
        let _n = _size_1(_b);
        let _c = _List_2(_hyphenMinus_2(_plusSign_2(_m, _n), 1), 0);
        /* Statements */
        _toDo_3(
          1,
          _m,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _toDo_3(
              1,
              _n,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(
                  _c,
                  _hyphenMinus_2(_plusSign_2(_i, _j), 1),
                  _plusSign_2(
                    _at_2(_c, _hyphenMinus_2(_plusSign_2(_i, _j), 1)),
                    _asterisk_2(_at_2(_a, _i), _at_2(_b, _j)),
                  ),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _UnivariatePolynomial_1(_c);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnivariatePolynomial_1(_asterisk_2(_a, _operand));
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet a = self.coefficientList;\n\t\toperand.isUnivariatePolynomial.if {\n\t\t\tlet b = operand.coefficientList;\n\t\t\tlet m = a.size;\n\t\t\tlet n = b.size;\n\t\t\tlet c = List(m + n - 1, 0);\n\t\t\t1.toDo(m) { :i |\n\t\t\t\t1.toDo(n) { :j |\n\t\t\t\t\tc[i + j - 1] := c[i + j - 1] + (a[i] * b[j])\n\t\t\t\t}\n\t\t\t};\n\t\t\tUnivariatePolynomial(c)\n\t\t} {\n\t\t\tUnivariatePolynomial(a * operand)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "circumflexAccent",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_operand, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polynomial_1([1]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _self;
        /* Statements */
        _timesRepeat_2(
          _hyphenMinus_2(_operand, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _asterisk_2(_answer, _self);
          }, []),
        );
        return _answer;
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t(operand = 0).if {\n\t\t\tPolynomial([1])\n\t\t} {\n\t\t\tlet answer = self;\n\t\t\t(operand - 1).timesRepeat {\n\t\t\t\tanswer := answer * self\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "asBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _coefficientList_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateUnivariatePolynomial_2(_c, _x);
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.coefficientList;\n\t\t{ :x |\n\t\t\tc.evaluateUnivariatePolynomial(x)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "assertIsNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifFalse_2(
      _isNormal_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "assertIsNormal: not normal");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNormal.ifFalse {\n\t\t\tself.error('assertIsNormal: not normal')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "at",
  ["self", "x"],
  sl.annotateFunction(function (_self, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluateUnivariatePolynomial_2(_coefficientList_1(_self), _x);
  }, ["self", "x"]),
  "{ :self :x |\n\t\tself.coefficientList.evaluateUnivariatePolynomial(x)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "atAll",
  ["self", "aCollection"],
  sl.annotateFunction(function (_self, _aCollection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aCollection";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _aCollection,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "aCollection"]),
  "{ :self :aCollection |\n\t\taCollection.collect { :each |\n\t\t\tself.at(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_size_1(_coefficientList_1(_self)), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.size - 1\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "discriminant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discriminant_1(_coefficientList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.discriminant\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isUnivariatePolynomial_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _coefficientList_1(_self),
          _coefficientList_1(_operand),
        );
      }, []),
    );
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\toperand.isUnivariatePolynomial & {\n\t\t\taBlock(self.coefficientList, operand.coefficientList)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "exponent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _degree_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.degree\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "euclideanAlgorithm",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _self;
    let _b = _operand;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isZero_1(_b);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _r = _remainder_2(_a, _b);
        /* Statements */
        _a = _b;
        return _b = _r;
      }, []),
    );
    return _a;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet a = self;\n\t\tlet b = operand;\n\t\t{\n\t\t\tb.isZero\n\t\t}.whileFalse {\n\t\t\tlet r = a.remainder(b);\n\t\t\ta := b;\n\t\t\tb := r\n\t\t};\n\t\ta\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "gcd",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _monicPolynomial_1(_euclideanAlgorithm_2(_self, _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.euclideanAlgorithm(operand).monicPolynomial\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "isNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isSymbolic_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _coefficientList_1(_self);
        /* Statements */
        return _verticalLine_2(
          _equalsSign_2(_size_1(_c), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_last_1(_c), 0);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSymbolic | {\n\t\t\tlet c = self.coefficientList;\n\t\t\t(c.size = 0) | {\n\t\t\t\tc.last != 0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "isSymbolic",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_coefficientList_1(_self), _isSymbol_1);
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.allSatisfy(isSymbol:/1)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "isUnimodal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isUnimodal_1(_coefficientList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.isUnimodal\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEmpty_1(_coefficientList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.isEmpty\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "leadingCoefficient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_coefficientList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList.last\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "mod",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnivariatePolynomial_1(
      _percentSign_2(_coefficientList_1(_self), _modulus),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tUnivariatePolynomial(\n\t\t\tself.coefficientList % modulus\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "monicPolynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _reciprocal_1(_leadingCoefficient_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself * self.leadingCoefficient.reciprocal\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, -1);
  }, ["self"]),
  "{ :self |\n\t\tself * -1\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _not_1(_isSymbolic_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _coefficientList_1(_self);
        /* Statements */
        return _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _greaterThanSign_2(_size_1(_c), 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_last_1(_c), 0);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _removeLast_1(_c);
          }, []),
        );
      }, []),
    );
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself.isSymbolic.not.ifTrue {\n\t\t\tlet c = self.coefficientList;\n\t\t\t{\n\t\t\t\tc.size > 0 & {\n\t\t\t\t\tc.last = 0\n\t\t\t\t}\n\t\t\t}.whileTrue {\n\t\t\t\tc.removeLast\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "polynomialGcd",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _gcd_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.gcd(operand)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "polynomialQuotient",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotient_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.quotient(operand)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "polynomialQuotientRemainder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotientRemainder_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.quotientRemainder(operand)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "polynomialRemainder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainder_2(_self, _operand);
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.remainder(operand)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientList_2(_self, _copy_1(_coefficientList_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientList := self.coefficientList.copy\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "quotient",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(
      _quotientRemainder_2(_numerator, _denominator),
      2,
    );
    let _q = _at_2(__SplVar1, 1);
    let __SplUnused7 = _at_2(__SplVar1, 2);
    /* Statements */
    return _q;
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tlet [q, _] = numerator.quotientRemainder(denominator);\n\t\tq\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "quotientRemainder",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _quotient = _UnivariatePolynomial_1([]);
    let _remainder = _copy_1(_numerator);
    let _denominatorDegree = _degree_1(_denominator);
    let _denominatorLeadingCoefficient = _leadingCoefficient_1(_denominator);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(
          _degree_1(_remainder),
          _denominatorDegree,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _exponent = _hyphenMinus_2(
          _degree_1(_remainder),
          _denominatorDegree,
        );
        let _coefficient = _solidus_2(
          _leadingCoefficient_1(_remainder),
          _denominatorLeadingCoefficient,
        );
        let _temporary = _UnivariatePolynomial_1(
          _Map_1([[_exponent, _coefficient]]),
        );
        /* Statements */
        _quotient = _plusSign_2(_quotient, _temporary);
        return _remainder = _hyphenMinus_2(
          _remainder,
          _asterisk_2(_temporary, _denominator),
        );
      }, []),
    );
    return [_quotient, _remainder];
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tlet quotient = UnivariatePolynomial([]);\n\t\tlet remainder = numerator.copy;\n\t\tlet denominatorDegree = denominator.degree;\n\t\tlet denominatorLeadingCoefficient = denominator.leadingCoefficient;\n\t\t{ remainder.degree >= denominatorDegree }.whileTrue {\n\t\t\tlet exponent = remainder.degree - denominatorDegree;\n\t\t\tlet coefficient = remainder.leadingCoefficient / denominatorLeadingCoefficient;\n\t\t\tlet temporary = UnivariatePolynomial(Map([[exponent, coefficient]]));\n\t\t\tquotient := quotient + temporary;\n\t\t\tremainder := remainder - (temporary * denominator)\n\t\t};\n\t\t[quotient, remainder]\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "remainder",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(
      _quotientRemainder_2(_numerator, _denominator),
      2,
    );
    let __SplUnused8 = _at_2(__SplVar2, 1);
    let _r = _at_2(__SplVar2, 2);
    /* Statements */
    return _r;
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tlet [_, r] = numerator.quotientRemainder(denominator);\n\t\tr\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "resultant",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _resultant_2(
      _coefficientList_1(_self),
      _coefficientList_1(_operand),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.coefficientList.resultant(\n\t\t\toperand.coefficientList\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
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

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "terms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Map_0();
    /* Statements */
    _withIndexDo_2(
      _coefficientList_1(_self),
      sl.annotateFunction(function (_c, _i) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _c, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _exclamationMarkEqualsSign_2(_c, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _hyphenMinusGreaterThanSign_2(_hyphenMinus_2(_i, 1), _c),
            );
          }, []),
        );
      }, ["c", "i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self |\n\t\tlet answer = Map();\n\t\tself.coefficientList.withIndexDo { :c :i |\n\t\t\t(c != 0).ifTrue {\n\t\t\t\tanswer.add((i - 1) -> c)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "discriminant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _hyphenMinus_2(_size_1(_self), 1),
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          2,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar3 = _assertIsOfSize_2(_self, 3);
            let _c = _at_2(__SplVar3, 1);
            let _b = _at_2(__SplVar3, 2);
            let _a = _at_2(__SplVar3, 3);
            /* Statements */
            return _hyphenMinus_2(
              _square_1(_b),
              _asterisk_2(_asterisk_2(4, _a), _c),
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar4 = _assertIsOfSize_2(_self, 4);
            let _d = _at_2(__SplVar4, 1);
            let _c = _at_2(__SplVar4, 2);
            let _b = _at_2(__SplVar4, 3);
            let _a = _at_2(__SplVar4, 4);
            /* Statements */
            return _plusSign_2(
              _hyphenMinus_2(
                _hyphenMinus_2(
                  _hyphenMinus_2(
                    _asterisk_2(_square_1(_b), _square_1(_c)),
                    _asterisk_2(_asterisk_2(4, _a), _cube_1(_c)),
                  ),
                  _asterisk_2(_asterisk_2(4, _cube_1(_b)), _d),
                ),
                _asterisk_2(_asterisk_2(27, _square_1(_a)), _square_1(_d)),
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(_asterisk_2(18, _a), _b), _c),
                _d,
              ),
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          4,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar5 = _assertIsOfSize_2(_self, 5);
            let _e = _at_2(__SplVar5, 1);
            let _d = _at_2(__SplVar5, 2);
            let _c = _at_2(__SplVar5, 3);
            let _b = _at_2(__SplVar5, 4);
            let _a = _at_2(__SplVar5, 5);
            /* Statements */
            return _sum_1([
              _asterisk_2(_asterisk_2(256, _cube_1(_a)), _cube_1(_e)),
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(-192, _square_1(_a)), _b),
                  _d,
                ),
                _square_1(_e),
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(-128, _square_1(_a)), _square_1(_c)),
                _square_1(_e),
              ),
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(144, _square_1(_a)), _c),
                  _square_1(_d),
                ),
                _e,
              ),
              _asterisk_2(
                _asterisk_2(-27, _square_1(_a)),
                _circumflexAccent_2(_d, 4),
              ),
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(144, _a), _square_1(_b)),
                  _c,
                ),
                _square_1(_e),
              ),
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(-6, _a), _square_1(_b)),
                  _square_1(_d),
                ),
                _e,
              ),
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(
                    _asterisk_2(_asterisk_2(-80, _a), _b),
                    _square_1(_c),
                  ),
                  _d,
                ),
                _e,
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(_asterisk_2(18, _a), _b), _c),
                _cube_1(_d),
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(16, _a), _circumflexAccent_2(_c, 4)),
                _e,
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(-4, _a), _cube_1(_c)),
                _square_1(_d),
              ),
              _asterisk_2(
                _asterisk_2(-27, _circumflexAccent_2(_b, 4)),
                _square_1(_e),
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(_asterisk_2(18, _cube_1(_b)), _c), _d),
                _e,
              ),
              _asterisk_2(_asterisk_2(-4, _cube_1(_b)), _cube_1(_d)),
              _asterisk_2(
                _asterisk_2(_asterisk_2(-4, _square_1(_b)), _cube_1(_c)),
                _e,
              ),
              _asterisk_2(
                _asterisk_2(_asterisk_2(1, _square_1(_b)), _square_1(_c)),
                _square_1(_d),
              ),
            ]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "discriminant: degree≠{1,2,3,4}");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size - 1).caseOf([\n\t\t\t1 -> { 1 },\n\t\t\t2 -> {\n\t\t\t\tlet [c, b, a] = self;\n\t\t\t\tb.square - (4 * a * c)\n\t\t\t},\n\t\t\t3 -> {\n\t\t\t\tlet [d, c, b, a] = self;\n\t\t\t\t(b.square * c.square)\n\t\t\t\t- (4 * a * c.cube)\n\t\t\t\t- (4 * b.cube * d)\n\t\t\t\t- (27 * a.square * d.square)\n\t\t\t\t+ (18 * a * b * c * d)\n\t\t\t},\n\t\t\t4 -> {\n\t\t\t\t/*\n\t\t\t\t256a³e³\n\t\t\t\t-192a²bde²\n\t\t\t\t-128a²c²e²\n\t\t\t\t+144a²cd²e\n\t\t\t\t-27a²d⁴\n\t\t\t\t+144ab²ce²\n\t\t\t\t-6ab²d²e\n\t\t\t\t-80abc²de\n\t\t\t\t+18abcd³\n\t\t\t\t+16ac⁴e\n\t\t\t\t-4ac³d²\n\t\t\t\t-27b⁴e²\n\t\t\t\t+18b³cde\n\t\t\t\t-4b³d³\n\t\t\t\t-4b²c³e\n\t\t\t\t+b²c²d²\n\t\t\t\t*/\n\t\t\t\tlet [e, d, c, b, a] = self;\n\t\t\t\t[\n\t\t\t\t\t256 * a.cube * e.cube,\n\t\t\t\t\t-192 * a.square * b * d * e.square,\n\t\t\t\t\t-128 * a.square * c.square * e.square,\n\t\t\t\t\t144 * a.square * c * d.square * e,\n\t\t\t\t\t-27 * a.square * (d ^ 4),\n\t\t\t\t\t144 * a * b.square * c * e.square,\n\t\t\t\t\t-6 * a * b.square * d.square * e,\n\t\t\t\t\t-80 * a * b * c.square * d * e,\n\t\t\t\t\t18 * a * b * c * d.cube,\n\t\t\t\t\t16 * a * (c ^ 4) * e,\n\t\t\t\t\t-4 * a * c.cube * d.square,\n\t\t\t\t\t-27 * (b ^ 4) * e.square,\n\t\t\t\t\t18 * b.cube * c * d * e,\n\t\t\t\t\t-4 * b.cube * d.cube,\n\t\t\t\t\t-4 * b.square * c.cube * e,\n\t\t\t\t\t1 * b.square * c.square * d.square\n\t\t\t\t].sum\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('discriminant: degree≠{1,2,3,4}')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "evaluateUnivariatePolynomial",
  ["coefficientList", "x"],
  sl.annotateFunction(function (_coefficientList, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _coefficientList, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_coefficientList);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _at_2(_coefficientList, _n);
        /* Statements */
        _downToDo_3(
          _hyphenMinus_2(_n, 1),
          1,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSign_2(
              _asterisk_2(_x, _answer),
              _at_2(_coefficientList, _i),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["coefficientList", "x"]),
  "{ :coefficientList :x |\n\t\tlet n = coefficientList.size;\n\t\t(n = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet answer = coefficientList[n];\n\t\t\t(n - 1).downToDo(1) { :i |\n\t\t\t\tanswer := x * answer + coefficientList[i]\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "evaluateUnivariatePolynomialDirectForm",
  ["coefficientList", "x"],
  sl.annotateFunction(function (_coefficientList, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _coefficientList, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _reverse_1(_coefficientList);
    let _n = _size_1(_coefficientList);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _asterisk_2(
          _at_2(_c, 1),
          _circumflexAccent_2(_x, _hyphenMinus_2(_n, 1)),
        );
        /* Statements */
        _toDo_3(
          2,
          _n,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _at_2(_c, _i);
            let _j = _hyphenMinus_2(_n, _i);
            let _t = _if_3(
              _equalsSign_2(_j, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_j, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _x;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(_x, _hyphenMinus_2(_n, _i));
                  }, []),
                );
              }, []),
            );
            let _f_2 = _if_3(
              _lessThanSign_2(_m, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _plusSign_2;
              }, []),
            );
            /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_m, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer = _f_2(
                  _answer,
                  _if_3(
                    _equalsSignEqualsSign_2(_m, 1),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _t;
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _if_3(
                        _equalsSignEqualsSign_2(_t, 1),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _abs_1(_m);
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _asterisk_2(_abs_1(_m), _t);
                        }, []),
                      );
                    }, []),
                  ),
                );
              }, []),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["coefficientList", "x"]),
  "{ :coefficientList :x |\n\t\tlet c = coefficientList.reverse;\n\t\tlet n = coefficientList.size;\n\t\t(n = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet answer = c[1] * (x ^ (n - 1));\n\t\t\t2.toDo(n) { :i |\n\t\t\t\tlet m = c[i];\n\t\t\t\tlet j = n - i;\n\t\t\t\tlet t = (j = 0).if { 1 } { (j = 1).if { x } { x ^ (n - i) } };\n\t\t\t\tlet f:/2 = (m < 0).if { - } { + };\n\t\t\t\t(m != 0).ifTrue {\n\t\t\t\t\tanswer := f(answer, (m == 1).if { t } { (t == 1).if { m.abs } { m.abs * t } })\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "lagrangeInterpolatingPolynomial",
  ["c"],
  sl.annotateFunction(function (_c) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_c);
    let __SplVar6 = _assertIsOfSize_2(_transpose_1(_c), 2);
    let _x = _at_2(__SplVar6, 1);
    let _y = _at_2(__SplVar6, 2);
    let _p = _List_2(_n, _UnivariatePolynomial_1([1]));
    /* Statements */
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        _toDo_3(
          1,
          _n,
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifFalse_2(
              _equalsSign_2(_i, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _q = _UnivariatePolynomial_1([
                  _hyphenMinus_2(0, _at_2(_x, _j)),
                  1,
                ]);
                /* Statements */
                return _atPut_3(_p, _i, _asterisk_2(_at_2(_p, _i), _q));
              }, []),
            );
          }, ["j"]),
        );
        return _atPut_3(
          _p,
          _i,
          _asterisk_2(
            _at_2(_p, _i),
            _solidus_2(1, _at_2(_at_2(_p, _i), _at_2(_x, _i))),
          ),
        );
      }, ["i"]),
    );
    return _sum_1(_asterisk_2(_p, _y));
  }, ["c"]),
  "{ :c |\n\t\tlet n = c.size;\n\t\tlet [x, y] = c.transpose;\n\t\tlet p = List(n, UnivariatePolynomial([1]));\n\t\t1.toDo(n) { :i |\n\t\t\t1.toDo(n) { :j |\n\t\t\t\t(i = j).ifFalse {\n\t\t\t\t\tlet q = UnivariatePolynomial([0 - x[j], 1]);\n\t\t\t\t\tp[i] := p[i] * q\n\t\t\t\t}\n\t\t\t};\n\t\t\tp[i] := p[i] * (1 / p[i].at(x[i]))\n\t\t};\n\t\t(p * y).sum\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "resultant",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _determinant_1(_sylvesterMatrix_2(_p, _q));
  }, ["p", "q"]),
  "{ :p :q |\n\t\tp.sylvesterMatrix(q).determinant\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalize_1(
      _initializeSlots_2(_newUnivariatePolynomial_0(), _self),
    );
  }, ["self"]),
  "{ :self |\n\t\tnewUnivariatePolynomial().initializeSlots(self).normalize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "UnivariatePolynomial",
  "Polynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _keyType_1(_self),
      [
        _hyphenMinusGreaterThanSign_2(
          "SmallFloat",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1(_self);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "List",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _BivariatePolynomial_1(_self);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Polynomial: invalid coefficient dictionary");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.keyType.caseOf(\n\t\t\t[\n\t\t\t\t'SmallFloat' -> { UnivariatePolynomial(self) },\n\t\t\t\t'List' -> { BivariatePolynomial(self) }\n\t\t\t]\n\t\t) {\n\t\t\tself.error('Polynomial: invalid coefficient dictionary')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Map",
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _max_1(_keys_1(_self));
    let _c = _collect_2(
      _Span_3(0, _n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atIfAbsent_3(
          _self,
          _i,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, ["i"]),
    );
    /* Statements */
    return _UnivariatePolynomial_1(_c);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.keys.max;\n\t\tlet c = 0:n.collect { :i |\n\t\t\tself.atIfAbsent(i) { 0 }\n\t\t};\n\t\tUnivariatePolynomial(c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "bellB",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnivariatePolynomial_1([1]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_2(
          _to_2(1, _n),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _UnivariatePolynomial_1([0, 1]);
            let _c = _UnivariatePolynomial_1([
              _binomial_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_k, 1)),
            ]);
            /* Statements */
            return _asterisk_2(
              _asterisk_2(_x, _c),
              _bellB_1(_hyphenMinus_2(_k, 1)),
            );
          }, ["k"]),
        );
      }, []),
    );
  }, ["n"]),
  "{ :n |\n\t\t(n = 0).if {\n\t\t\tUnivariatePolynomial([1])\n\t\t} {\n\t\t\t1.to(n).sum { :k |\n\t\t\t\tlet x = UnivariatePolynomial([0 1]);\n\t\t\t\tlet c = UnivariatePolynomial([binomial(n - 1, k - 1)]);\n\t\t\t\tx * c * bellB(k - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "bellB",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_bellB_1(_n), _x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\tbellB(n).at(x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "cardanosAlgorithm",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Primitive */
    function xroot(a, x) {
      const i = (a < 0) ? -1 : 1;
      return (i * Math.exp(Math.log(a * i) / x));
    }
    function splComplex(r, i) {
      return _Complex_2(r, i);
    }
    if (_a === 0) {
      throw new Error("cardanosAlgorithm: a=0");
    }
    const a = _b / _a;
    const b = _c / _a;
    const c = _d / _a;
    const p = -(a * a / 3) + b;
    const q = (2 / 27 * a * a * a) - (a * b / 3) + c;
    const pi = Math.PI;
    let d = q * q / 4 + p * p * p / 27;
    if (Math.abs(d) < Math.pow(10, -11)) {
      d = 0;
    }
    if (d > 1e-20) {
      const u = xroot(-q / 2 + Math.sqrt(d), 3);
      const v = xroot(-q / 2 - Math.sqrt(d), 3);
      const x1 = u + v - a / 3;
      const x2r = -(u + v) / 2 - a / 3;
      const x2i = Math.sqrt(3) / 2 * (u - v);
      const x3r = x2r;
      const x3i = -x2i;
      return [x1, splComplex(x2r, x2i), splComplex(x3r, x3i)];
    }
    if (Math.abs(d) <= 1e-20) {
      const u = xroot(-q / 2, 3);
      const v = xroot(-q / 2, 3);
      const x1 = u + v - a / 3;
      const x2 = -(u + v) / 2 - a / 3;
      return [x1, x2];
    }
    if (d < -1e-20) {
      const r = Math.sqrt(-p * p * p / 27);
      let alpha = Math.atan(Math.sqrt(-d) / -q * 2);
      if (q > 0) {
        alpha = pi + alpha;
      }
      const x1 =
        xroot(r, 3) * (Math.cos((6 * pi - alpha) / 3) + Math.cos(alpha / 3)) -
        a / 3;
      const x2 = xroot(r, 3) *
          (Math.cos((2 * pi + alpha) / 3) + Math.cos((4 * pi - alpha) / 3)) -
        a / 3;
      const x3 = xroot(r, 3) *
          (Math.cos((4 * pi + alpha) / 3) + Math.cos((2 * pi - alpha) / 3)) -
        a / 3;
      return [x1, x2, x3];
    }
  }, ["a", "b", "c", "d"]),
  '{ :a :b :c :d |\n\t\t<primitive:\n\t\t/* https://www.mosismath.com/Cardano/Cardano.html */\n\t\tfunction xroot(a, x) {\n\t\t\tconst i = (a < 0) ? -1 : 1;\n\t\t\treturn (i * Math.exp(Math.log(a * i) / x));\n\t\t}\n\t\tfunction splComplex(r, i) {\n\t\t\treturn _Complex_2(r, i);\n\t\t}\n\t\tif (_a === 0) {\n\t\t\tthrow new Error("cardanosAlgorithm: a=0");\n\t\t}\n\t\tconst a = _b / _a;\n\t\tconst b = _c / _a;\n\t\tconst c = _d / _a;\n\t\tconst p = -(a * a / 3) + b;\n\t\tconst q = (2 / 27 * a * a * a) - (a * b / 3) + c;\n\t\tconst pi = Math.PI;\n\t\tlet d = q * q / 4 + p * p * p / 27;\n\t\tif (Math.abs(d) < Math.pow(10, -11)) {\n\t\t\td = 0;\n\t\t}\n\t\tif (d > 1e-20) {\n\t\t\tconst u = xroot(-q / 2 + Math.sqrt(d), 3);\n\t\t\tconst v = xroot(-q / 2 - Math.sqrt(d), 3);\n\t\t\tconst x1 = u + v - a / 3;\n\t\t\tconst x2r = -(u + v) / 2 - a / 3;\n\t\t\tconst x2i = Math.sqrt(3) / 2 * (u - v);\n\t\t\tconst x3r = x2r;\n\t\t\tconst x3i = -x2i;\n\t\t\treturn [x1, splComplex(x2r, x2i), splComplex(x3r, x3i)];\n\t\t}\n\t\tif (Math.abs(d) <= 1e-20) {\n\t\t\tconst u = xroot(-q / 2, 3);\n\t\t\tconst v = xroot(-q / 2, 3);\n\t\t\tconst x1 = u + v - a / 3;\n\t\t\tconst x2 = -(u + v) / 2 - a / 3;\n\t\t\treturn [x1, x2];\n\t\t}\n\t\tif (d < -1e-20) {\n\t\t\tconst r = Math.sqrt(-p * p * p / 27);\n\t\t\tlet alpha = Math.atan(Math.sqrt(-d) / -q * 2);\n\t\t\tif (q > 0) {\n\t\t\t\talpha = pi + alpha;\n\t\t\t}\n\t\t\tconst x1 = xroot(r, 3) * (Math.cos((6 * pi - alpha) / 3) + Math.cos(alpha / 3)) - a / 3;\n\t\t\tconst x2 = xroot(r, 3) * (Math.cos((2 * pi + alpha) / 3) + Math.cos((4 * pi - alpha) / 3)) - a / 3;\n\t\t\tconst x3 = xroot(r, 3) * (Math.cos((4 * pi + alpha) / 3) + Math.cos((2 * pi - alpha) / 3)) - a / 3;\n\t\t\treturn [x1, x2, x3];\n\t\t}\n\t\t>\n\t}',
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevPolynomial",
  ["self", "kind"],
  sl.annotateFunction(function (_self, _kind) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _kind";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1([1]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1([0, _kind]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _hyphenMinus_2(_self, 1);
        let _a = _UnivariatePolynomial_1([0, 2]);
        let _b = _chebyshevPolynomial_2(_n, _kind);
        let _c = _chebyshevPolynomial_2(_hyphenMinus_2(_n, 1), _kind);
        /* Statements */
        return _hyphenMinus_2(_asterisk_2(_a, _b), _c);
      }, []),
    );
  }, ["self", "kind"]),
  "{ :self :kind |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t0 -> { UnivariatePolynomial([1]) },\n\t\t\t\t1 -> { UnivariatePolynomial([0 kind]) }\n\t\t\t]\n\t\t) {\n\t\t\tlet n = self - 1;\n\t\t\tlet a = UnivariatePolynomial([0 2]);\n\t\t\tlet b = chebyshevPolynomial(n, kind);\n\t\t\tlet c = chebyshevPolynomial(n - 1, kind);\n\t\t\t(a * b) - c\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevT",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _chebyshevPolynomial_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.chebyshevPolynomial(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevT",
  ["n", "x"],
  sl.annotateFunction(function (_n, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_chebyshevT_1(_n), _x);
  }, ["n", "x"]),
  "{ :n :x |\n\t\tn.chebyshevT.at(x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "chebyshevU",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _chebyshevPolynomial_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself.chebyshevPolynomial(2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "UnivariatePolynomial",
  "quadraticEquationRoots",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _sqrt_1(
      _hyphenMinus_2(
        _circumflexAccent_2(_b, 2),
        _asterisk_2(_asterisk_2(4, _a), _c),
      ),
    );
    /* Statements */
    return _if_3(
      _lessThanSign_2(0, _b),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _solidus_2(
            _asterisk_2(2, _c),
            _hyphenMinus_2(_hyphenMinus_2(0, _b), _d),
          ),
          _solidus_2(
            _hyphenMinus_2(_hyphenMinus_2(0, _b), _d),
            _asterisk_2(2, _a),
          ),
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          _solidus_2(
            _plusSign_2(_hyphenMinus_2(0, _b), _d),
            _asterisk_2(2, _a),
          ),
          _solidus_2(
            _asterisk_2(2, _c),
            _plusSign_2(_hyphenMinus_2(0, _b), _d),
          ),
        ];
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\tlet d = sqrt((b ^ 2) - (4 * a * c));\n\t\t(0 < b).if {\n\t\t\t[\n\t\t\t\t(2 * c) / (0 - b - d),\n\t\t\t\t(0 - b - d) / (2 * a)\n\t\t\t]\n\t\t} {\n\t\t\t[\n\t\t\t\t(0 - b + d) / (2 * a),\n\t\t\t\t(2 * c) / (0 - b + d)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "Polynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnivariatePolynomial_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isMatrix_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _BivariatePolynomial_1(_self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "Polynomial: not vector or matrix");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tUnivariatePolynomial(self)\n\t\t} {\n\t\t\tself.isMatrix.if {\n\t\t\t\tBivariatePolynomial(self)\n\t\t\t} {\n\t\t\t\tself.error('Polynomial: not vector or matrix')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "polynomialGcd",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientList_1(
      _gcd_2(_UnivariatePolynomial_1(_self), _UnivariatePolynomial_1(_operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tUnivariatePolynomial(self).gcd(\n\t\t\tUnivariatePolynomial(operand)\n\t\t).coefficientList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "polynomialMod",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientList_1(_mod_2(_UnivariatePolynomial_1(_self), _operand));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tUnivariatePolynomial(self).mod(\n\t\t\toperand\n\t\t).coefficientList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "polynomialQuotient",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientList_1(
      _quotient_2(
        _UnivariatePolynomial_1(_self),
        _UnivariatePolynomial_1(_operand),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tUnivariatePolynomial(self).quotient(\n\t\t\tUnivariatePolynomial(operand)\n\t\t).coefficientList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "polynomialQuotientRemainder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _quotientRemainder_2(
        _UnivariatePolynomial_1(_self),
        _UnivariatePolynomial_1(_operand),
      ),
      _coefficientList_1,
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tUnivariatePolynomial(self).quotientRemainder(\n\t\t\tUnivariatePolynomial(operand)\n\t\t).collect(coefficientList:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UnivariatePolynomial",
  "polynomialRemainder",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientList_1(
      _remainder_2(
        _UnivariatePolynomial_1(_self),
        _UnivariatePolynomial_1(_operand),
      ),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tUnivariatePolynomial(self).remainder(\n\t\t\tUnivariatePolynomial(operand)\n\t\t).coefficientList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "UnivariatePolynomial",
  "cachedCyclotomic",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "cyclotomic",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Map_1([[1, _UnivariatePolynomial_1([-1, 1])]]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('cyclotomic') {\n\t\t\t[1: UnivariatePolynomial([-1 1])]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "UnivariatePolynomial",
  "cyclotomic",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _cachedCyclotomic_1(_system);
    /* Statements */
    return _if_3(
      _includesKey_2(_c, _self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_c, _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _if_3(
          _isPrime_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1(_numberSign_2(1, _self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _UnivariatePolynomial_1(
              _plusSignPlusSign_2(
                _plusSignPlusSign_2(
                  [-1],
                  _numberSign_2(0, _hyphenMinus_2(_self, 1)),
                ),
                [1],
              ),
            );
            /* Statements */
            _do_2(
              _allButLast_1(_divisors_1(_self)),
              sl.annotateFunction(function (_d) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _d";
                  throw new Error(errorMessage);
                } /* Statements */
                return _p = _quotient_2(_p, _cyclotomic_1(_d));
              }, ["d"]),
            );
            return _p;
          }, []),
        );
        /* Statements */
        _add_2(_c, _hyphenMinusGreaterThanSign_2(_self, _p));
        return _p;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet c = system.cachedCyclotomic;\n\t\tc.includesKey(self).if {\n\t\t\tc.at(self)\n\t\t} {\n\t\t\tlet p = self.isPrime.if {\n\t\t\t\tUnivariatePolynomial(1 # self)\n\t\t\t} {\n\t\t\t\tlet p = UnivariatePolynomial([-1] ++ (0 # (self - 1)) ++ [1]);\n\t\t\t\tself.divisors.allButLast.do { :d |\n\t\t\t\t\tp := p.quotient(d.cyclotomic)\n\t\t\t\t};\n\t\t\t\tp\n\t\t\t};\n\t\t\tc.add(self -> p);\n\t\t\tp\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "UnivariatePolynomial",
  "legendreP",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          0,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1([1]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnivariatePolynomial_1([0, 1]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _hyphenMinus_2(_self, 1);
        let _a = _UnivariatePolynomial_1([
          0,
          _plusSign_2(_asterisk_2(2, _n), 1),
        ]);
        let _b = _legendreP_1(_n);
        let _c = _legendreP_1(_hyphenMinus_2(_n, 1));
        let _d = _solidus_2(1, _plusSign_2(_n, 1));
        /* Statements */
        return _asterisk_2(
          _hyphenMinus_2(_asterisk_2(_a, _b), _asterisk_2(_c, _n)),
          _d,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.caseOf(\n\t\t\t[\n\t\t\t\t0 -> { UnivariatePolynomial([1]) },\n\t\t\t\t1 -> { UnivariatePolynomial([0 1]) }\n\t\t\t]\n\t\t) {\n\t\t\tlet n = self - 1;\n\t\t\tlet a = UnivariatePolynomial([0, (2 * n) + 1]);\n\t\t\tlet b = legendreP(n);\n\t\t\tlet c = legendreP(n - 1);\n\t\t\tlet d = 1 / (n + 1);\n\t\t\t((a * b) - (c * n)) * d\n\t\t}\n\t}",
);
