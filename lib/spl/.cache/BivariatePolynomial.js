sl.addType(
  false,
  "BivariatePolynomial",
  "BivariatePolynomial",
  ["Object", "Copyable", "Equatable"],
  ["coefficientMatrix"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BivariatePolynomial",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "BivariatePolynomial",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BivariatePolynomial",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "asBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _coefficientMatrix_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateBivariatePolynomial_3(_m, _x, _y);
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self |\n\t\tlet m = self.coefficientMatrix;\n\t\t{ :x :y |\n\t\t\tm.evaluateBivariatePolynomial(x, y)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_shape_1(_coefficientMatrix_1(_self)), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientMatrix.shape - 1\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "equalBy",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isBivariatePolynomial_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(
          _coefficientMatrix_1(_self),
          _coefficientMatrix_1(_operand),
        );
      }, []),
    );
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\toperand.isBivariatePolynomial & {\n\t\t\taBlock(self.coefficientMatrix, operand.coefficientMatrix)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "evaluate",
  ["self", "x", "y"],
  sl.annotateFunction(function (_self, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _evaluateBivariatePolynomial_3(_coefficientMatrix_1(_self), _x, _y);
  }, ["self", "x", "y"]),
  "{ :self :x :y |\n\t\tself.coefficientMatrix.evaluateBivariatePolynomial(x, y)\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isEmpty_1(_coefficientMatrix_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientMatrix.isEmpty\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coefficientMatrix_2(
      _self,
      _deepCopy_1(_coefficientMatrix_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.coefficientMatrix := self.coefficientMatrix.deepCopy\n\t}",
);

sl.addMethodToExistingType(
  "BivariatePolynomial",
  "BivariatePolynomial",
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
  "List",
  "BivariatePolynomial",
  "evaluateBivariatePolynomial",
  ["coefficientMatrix", "x", "y"],
  sl.annotateFunction(function (_coefficientMatrix, _x, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _coefficientMatrix, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _ifEmpty_3(
      _coefficientMatrix,
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
        let __SplVar1 = _assertIsOfSize_2(_shape_1(_coefficientMatrix), 2);
        let _m = _at_2(__SplVar1, 1);
        let _n = _at_2(__SplVar1, 2);
        let _answer = null;
        /* Statements */
        _toDo_3(
          1,
          _m,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _r = _at_2(_coefficientMatrix, _i);
            /* Statements */
            return _toDo_3(
              1,
              _n,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _a = _at_2(_r, _j);
                /* Statements */
                return _ifFalse_2(
                  _isZero_1(_a),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _p = _hyphenMinus_2(_i, 1);
                    let _q = _hyphenMinus_2(_j, 1);
                    let _r = _which_1([
                      _hyphenMinusGreaterThanSign_2(
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _ampersand_2(
                            _equalsSign_2(_p, 0),
                            sl.annotateFunction(function () {
                              /* ArityCheck */
                              if (arguments.length !== 0) {
                                const errorMessage = "Arity: expected 0, ";
                                throw new Error(errorMessage);
                              } /* Statements */
                              return _equalsSign_2(_q, 0);
                            }, []),
                          );
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _a;
                        }, []),
                      ),
                      _hyphenMinusGreaterThanSign_2(
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _equalsSign_2(_p, 0);
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _asterisk_2(_a, _circumflexAccent_2(_y, _q));
                        }, []),
                      ),
                      _hyphenMinusGreaterThanSign_2(
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _equalsSign_2(_q, 0);
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _asterisk_2(_a, _circumflexAccent_2(_x, _p));
                        }, []),
                      ),
                      _hyphenMinusGreaterThanSign_2(
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return true;
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _asterisk_2(
                            _asterisk_2(_a, _circumflexAccent_2(_x, _p)),
                            _circumflexAccent_2(_y, _q),
                          );
                        }, []),
                      ),
                    ]);
                    /* Statements */
                    return _answer = _ifNil_3(
                      _answer,
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _r;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _plusSign_2(_answer, _r);
                      }, []),
                    );
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
        return _answer;
      }, []),
    );
  }, ["coefficientMatrix", "x", "y"]),
  "{ :coefficientMatrix :x :y |\n\t\tcoefficientMatrix.ifEmpty {\n\t\t\t0\n\t\t} {\n\t\t\tlet [m, n] = coefficientMatrix.shape;\n\t\t\tlet answer = nil;\n\t\t\t1.toDo(m) { :i |\n\t\t\t\tlet r = coefficientMatrix[i];\n\t\t\t\t1.toDo(n) { :j |\n\t\t\t\t\tlet a = r[j];\n\t\t\t\t\ta.isZero.ifFalse {\n\t\t\t\t\t\tlet p = i - 1;\n\t\t\t\t\t\tlet q = j - 1;\n\t\t\t\t\t\tlet r = [\n\t\t\t\t\t\t\t{ p = 0 & { q = 0 } } -> { a },\n\t\t\t\t\t\t\t{ p = 0 } -> { a * (y ^ q) },\n\t\t\t\t\t\t\t{ q = 0 } -> { a * (x ^ p) },\n\t\t\t\t\t\t\t{ true } -> { a * (x ^ p) * (y ^ q) }\n\t\t\t\t\t\t].which;\n\t\t\t\t\t\tanswer := answer.ifNil { r } { answer + r }\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BivariatePolynomial",
  "BivariatePolynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBivariatePolynomial_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewBivariatePolynomial().initializeSlots(self)\n\t}",
);
