sl.addType(
  false,
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  ["Object"],
  ["coefficientList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnivariatePolynomial",
);

sl.addMethodToExistingType(
  "UnivariatePolynomial",
  "UnivariatePolynomial",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c1 = _coefficientList_1(_self);
    let _c2 = _coefficientList_1(_anObject);
    let _n = _max_2(_size_1(_c1), _size_1(_c2));
    /* Statements */
    return _UnivariatePolynomial_1(
      _plusSign_2(_padRight_3(_c1, [_n], 0), _padRight_3(_c2, [_n], 0)),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | let c1 = coefficientList(self); let c2 = coefficientList(anObject); let n = max(size(c1),size(c2)); UnivariatePolynomial(+(padRight(c1,[n], 0), padRight(c2,[n], 0))) }",
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
  "{ :self :x | evaluateUnivariatePolynomial(coefficientList(self),x) }",
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
  "{ :self :aCollection | collect(aCollection, { :each | at(self,each) }) }",
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
  "{ :self | -(size(coefficientList(self)), 1) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :coefficientList :x | let n = size(coefficientList); if((=(n, 0)), { 0 }, { let answer = at(coefficientList, n); downToDo((-(n, 1)), 1, { :i | answer := +(*(x, answer), at(coefficientList, i)) }); answer }) }",
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
    return _initializeSlots_2(_newUnivariatePolynomial_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newUnivariatePolynomial(),self) }",
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
  '{ :a :b :c :d | <primitive: function xroot(a, x) {\n\t\t\tconst i = (a < 0) ? -1 : 1;\n\t\t\treturn (i * Math.exp(Math.log(a * i) / x));\n\t\t}\n\t\tfunction splComplex(r, i) {\n\t\t\treturn _Complex_2(r, i);\n\t\t}\n\t\tif (_a === 0) {\n\t\t\tthrow new Error("cardanosAlgorithm: a=0");\n\t\t}\n\t\tconst a = _b / _a;\n\t\tconst b = _c / _a;\n\t\tconst c = _d / _a;\n\t\tconst p = -(a * a / 3) + b;\n\t\tconst q = (2 / 27 * a * a * a) - (a * b / 3) + c;\n\t\tconst pi = Math.PI;\n\t\tlet d = q * q / 4 + p * p * p / 27;\n\t\tif (Math.abs(d) < Math.pow(10, -11)) {\n\t\t\td = 0;\n\t\t}\n\t\tif (d > 1e-20) {\n\t\t\tconst u = xroot(-q / 2 + Math.sqrt(d), 3);\n\t\t\tconst v = xroot(-q / 2 - Math.sqrt(d), 3);\n\t\t\tconst x1 = u + v - a / 3;\n\t\t\tconst x2r = -(u + v) / 2 - a / 3;\n\t\t\tconst x2i = Math.sqrt(3) / 2 * (u - v);\n\t\t\tconst x3r = x2r;\n\t\t\tconst x3i = -x2i;\n\t\t\treturn [x1, splComplex(x2r, x2i), splComplex(x3r, x3i)];\n\t\t}\n\t\tif (Math.abs(d) <= 1e-20) {\n\t\t\tconst u = xroot(-q / 2, 3);\n\t\t\tconst v = xroot(-q / 2, 3);\n\t\t\tconst x1 = u + v - a / 3;\n\t\t\tconst x2 = -(u + v) / 2 - a / 3;\n\t\t\treturn [x1, x2];\n\t\t}\n\t\tif (d < -1e-20) {\n\t\t\tconst r = Math.sqrt(-p * p * p / 27);\n\t\t\tlet alpha = Math.atan(Math.sqrt(-d) / -q * 2);\n\t\t\tif (q > 0) {\n\t\t\t\talpha = pi + alpha;\n\t\t\t}\n\t\t\tconst x1 = xroot(r, 3) * (Math.cos((6 * pi - alpha) / 3) + Math.cos(alpha / 3)) - a / 3;\n\t\t\tconst x2 = xroot(r, 3) * (Math.cos((2 * pi + alpha) / 3) + Math.cos((4 * pi - alpha) / 3)) - a / 3;\n\t\t\tconst x3 = xroot(r, 3) * (Math.cos((4 * pi + alpha) / 3) + Math.cos((2 * pi - alpha) / 3)) - a / 3;\n\t\t\treturn [x1, x2, x3];\n\t\t}>\n }',
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
    } /* Temporaries */
    let _c = _caseOfOtherwise_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
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
            } /* Statements */
            return [1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
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
            return [1, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [2, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [4, 0, -3, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 4;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [8, 0, -8, 0, 1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 5;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [16, 0, -20, 0, 5, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 6;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [32, 0, -48, 0, 18, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 7;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [64, 0, -112, 0, 56, 0, -7, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 8;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [128, 0, -256, 0, 160, 0, -32, 0, 1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 9;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [256, 0, -576, 0, 432, 0, -120, 0, 9, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 10;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [512, 0, -1280, 0, 1120, 0, -400, 0, 50, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 11;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [1024, 0, -2816, 0, 2816, 0, -1232, 0, 220, 0, -11, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 12;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [2048, 0, -6144, 0, 6912, 0, -3584, 0, 840, 0, -72, 0, 1];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "chebyshevT: not implemented");
      }, []),
    );
    /* Statements */
    return _UnivariatePolynomial_1(_reverse_1(_c));
  }, ["self"]),
  "{ :self | let c = caseOfOtherwise(self, [->({ 0 }, { [1] }), ->({ 1 }, { [1, 0] }), ->({ 2 }, { [2, 0, -1] }), ->({ 3 }, { [4, 0, -3, 0] }), ->({ 4 }, { [8, 0, -8, 0, 1] }), ->({ 5 }, { [16, 0, -20, 0, 5, 0] }), ->({ 6 }, { [32, 0, -48, 0, 18, 0, -1] }), ->({ 7 }, { [64, 0, -112, 0, 56, 0, -7, 0] }), ->({ 8 }, { [128, 0, -256, 0, 160, 0, -32, 0, 1] }), ->({ 9 }, { [256, 0, -576, 0, 432, 0, -120, 0, 9, 0] }), ->({ 10 }, { [512, 0, -1280, 0, 1120, 0, -400, 0, 50, 0, -1] }), ->({ 11 }, { [1024, 0, -2816, 0, 2816, 0, -1232, 0, 220, 0, -11, 0] }), ->({ 12 }, { [2048, 0, -6144, 0, 6912, 0, -3584, 0, 840, 0, -72, 0, 1] })], { error(self,'chebyshevT: not implemented') }); UnivariatePolynomial(reverse(c)) }",
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
    } /* Temporaries */
    let _c = _caseOfOtherwise_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
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
            } /* Statements */
            return [1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
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
            return [2, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 2;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [4, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 3;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [8, 0, -4, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 4;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [16, 0, -12, 0, 1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 5;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [32, 0, -32, 0, 6, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 6;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [64, 0, -80, 0, 24, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 7;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [128, 0, -192, 0, 80, 0, -8, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 8;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [256, 0, -448, 0, 240, 0, -40, 0, 1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 9;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [512, 0, -1024, 0, 672, 0, -160, 0, 10, 0];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 10;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [1024, 0, -2304, 0, 1792, 0, -560, 0, 60, 0, -1];
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 11;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [2048, 0, -5120, 0, 4608, 0, -1792, 0, 280, 0, -12, 0];
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "chebyshevU: not implemented");
      }, []),
    );
    /* Statements */
    return _UnivariatePolynomial_1(_reverse_1(_c));
  }, ["self"]),
  "{ :self | let c = caseOfOtherwise(self, [->({ 0 }, { [1] }), ->({ 1 }, { [2, 0] }), ->({ 2 }, { [4, 0, -1] }), ->({ 3 }, { [8, 0, -4, 0] }), ->({ 4 }, { [16, 0, -12, 0, 1] }), ->({ 5 }, { [32, 0, -32, 0, 6, 0] }), ->({ 6 }, { [64, 0, -80, 0, 24, 0, -1] }), ->({ 7 }, { [128, 0, -192, 0, 80, 0, -8, 0] }), ->({ 8 }, { [256, 0, -448, 0, 240, 0, -40, 0, 1] }), ->({ 9 }, { [512, 0, -1024, 0, 672, 0, -160, 0, 10, 0] }), ->({ 10 }, { [1024, 0, -2304, 0, 1792, 0, -560, 0, 60, 0, -1] }), ->({ 11 }, { [2048, 0, -5120, 0, 4608, 0, -1792, 0, 280, 0, -12, 0] })], { error(self,'chebyshevU: not implemented') }); UnivariatePolynomial(reverse(c)) }",
);
