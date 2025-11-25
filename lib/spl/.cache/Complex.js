/*  Requires: Comparable List Number Object  */

sl.addType(
  false,
  "Complex",
  "Complex",
  ["Object", "Storeable", "Equatable", "Comparable", "Number"],
  ["real", "imaginary"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Complex",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Complex",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Complex",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Complex",
);

sl.copyTraitMethodsToType(
  "Number",
  "Complex",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(
          _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
          _plusSign_2(_asterisk_2(_a, _d), _asterisk_2(_b, _c)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex((a * c) - (b * d), (a * d) + (b * c))\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(_plusSign_2(_a, _c), _plusSign_2(_b, _d));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a + c, b + d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, +)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(_hyphenMinus_2(_a, _c), _hyphenMinus_2(_b, _d));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(a - c, b - d)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, -)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(
          _solidus_2(
            _plusSign_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
            _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
          ),
          _solidus_2(
            _hyphenMinus_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
            _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _solidus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tlet a = self.real;\n\t\t\tlet b = self.imaginary;\n\t\t\tlet c = anObject.real;\n\t\t\tlet d = anObject.imaginary;\n\t\t\tComplex(\n\t\t\t\t((a * c) + (b * d)) / ((c * c) + (d * d)),\n\t\t\t\t((b * c) - (a * d)) / ((c * c) + (d * d))\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, /)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "circumflexAccent",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _aNumber,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _circumflexAccent_2(_self, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isInteger_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _raisedToInteger_2(_self, _aNumber);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_aNumber, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _one_1(_self);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_aNumber, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _self;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_self, 0),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _lessThanSign_2(_aNumber, 0),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _error_2(_self, "^: zero divide");
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _self;
                          }, []),
                        );
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _exp_1(_asterisk_2(_aNumber, _log_1(_self)));
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isCollection.if {\n\t\t\taNumber.collect { :each |\n\t\t\t\tself ^ each\n\t\t\t}\n\t\t} {\n\t\t\taNumber.isInteger.if {\n\t\t\t\tself.raisedToInteger(aNumber)\n\t\t\t} {\n\t\t\t\t(aNumber = 0).if {\n\t\t\t\t\tself.one\n\t\t\t\t} {\n\t\t\t\t\t(aNumber = 1).if {\n\t\t\t\t\t\tself\n\t\t\t\t\t} {\n\t\t\t\t\t\t(self = 0).if {\n\t\t\t\t\t\t\t(aNumber < 0).if {\n\t\t\t\t\t\t\t\tself.error('^: zero divide')\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tself\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(aNumber * self.log).exp\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_absSquare_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.absSquare.sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absArg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_abs_1(_self), _arg_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.abs, self.arg]\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.real * self.real) + (self.imaginary * self.imaginary)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aFraction), _self);
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 |\n\t\taFraction.asComplex.aBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aNumber), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.asComplex.aBlock(self)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Zero has no argument");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcTan_2(_real_1(_self), _imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.error('Zero has no argument')\n\t\t} {\n\t\t\tself.real.arcTan(self.imaginary)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asGaussianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _j_2(_round_1(_real_1(_self)), _round_1(_imaginary_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.real.round.j(self.imaginary.round)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _real_1(_self);
    let _b = _imaginary_1(_self);
    /* Statements */
    return [[_a, _negate_1(_b)], [_b, _a]];
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.real;\n\t\tlet b = self.imaginary;\n\t\t[a b.negate; b a]\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["real", _real_1(_self)], [
      "imaginary",
      _imaginary_1(_self),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\t(real: self.real, imaginary: self.imaginary)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomComplex_3(_system, [_Complex_2(0, 0), _self], []);
  }, ["self"]),
  "{ :self |\n\t\tsystem.randomComplex([0J0, self], [])\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "chop",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _real_1(_self);
    let _y = _imaginary_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_y), 1E-10),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _chop_2(_x, _epsilon);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(_chop_2(_x, _epsilon), _y);
      }, []),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet x = self.real;\n\t\tlet y = self.imaginary;\n\t\t(y.abs < 1E-10).if {\n\t\t\tx.chop(epsilon)\n\t\t} {\n\t\t\tComplex(\n\t\t\t\tx.chop(epsilon),\n\t\t\t\ty\n\t\t\t)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "chop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _chop_2(_self, 1E-10);
  }, ["self"]),
  "{ :self |\n\t\tself.chop(1E-10)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "compare",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _compare_2(_abs_1(_self), _abs_1(_operand));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "compare: not Complex");
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isComplex.if {\n\t\t\tself.abs.compare(operand.abs)\n\t\t} {\n\t\t\tself.error('compare: not Complex')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "components",
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
  "Complex",
  "Complex",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isReal_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _printString_1(_real_1(_self));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isPurelyImaginary_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSignPlusSign_2(_printString_1(_imaginary_1(_self)), "I");
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
          return _printString_1(_self);
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\t{ self.isReal } -> { self.real.printString },\n\t\t\t{ self.isPurelyImaginary } -> { self.imaginary.printString ++ 'I' },\n\t\t\t{ true } -> { self.printString }\n\t\t].which\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_real_1(_self), _negate_1(_imaginary_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.real, self.imaginary.negate)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isComplex_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _aBlock_2(_real_1(_self), _real_1(_anObject)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(_imaginary_1(_self), _imaginary_1(_anObject));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToComplexAndApply_3(_anObject, _self, _aBlock_2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isComplex.if {\n\t\t\t\taBlock(self.real, anObject.real) & {\n\t\t\t\t\taBlock(self.imaginary, anObject.imaginary)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToComplexAndApply(self, aBlock:/2)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _exp_1(_real_1(_self)),
      _plusSign_2(
        _cos_1(_imaginary_1(_self)),
        _i_1(_sin_1(_imaginary_1(_self))),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.real.exp * (self.imaginary.cos + self.imaginary.sin.i)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _fractionalPart_1(_real_1(_self)),
      _fractionalPart_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.real.fractionalPart, self.imaginary.fractionalPart)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_negate_1(_imaginary_1(_self)), _real_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.imaginary.negate, self.real)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _integerPart_1(_real_1(_self)),
      _integerPart_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.real.integerPart, self.imaginary.integerPart)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  sl.annotateFunction(function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isComplex_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isCloseToBy_3(_real_1(_self), _real_1(_anObject), _epsilon),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isCloseToBy_3(
                  _imaginary_1(_self),
                  _imaginary_1(_anObject),
                  _epsilon,
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToComplexAndApply_3(
              _anObject,
              _self,
              sl.annotateFunction(function (_p, _q) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _p, _q";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isCloseToBy_3(_p, _q, _epsilon);
              }, ["p", "q"]),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anObject", "epsilon"]),
  "{ :self :anObject :epsilon |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isComplex.if {\n\t\t\t\tself.real.isCloseToBy(anObject.real, epsilon) & {\n\t\t\t\t\tself.imaginary.isCloseToBy(anObject.imaginary, epsilon)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToComplexAndApply(self) { :p :q |\n\t\t\t\t\tp.isCloseToBy(q, epsilon)\n\t\t\t\t}\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isExact",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isExact_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isExact_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.real.isExact & {\n\t\t\tself.imaginary.isExact\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isFinite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isFinite_1(_arg_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.arg.isFinite\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isGaussianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.real.isInteger & {\n\t\t\tself.imaginary.isInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isGaussianUnit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2([
      _Complex_2(1, 0),
      _Complex_2(-1, 0),
      _Complex_2(0, 1),
      _Complex_2(0, -1),
    ], _self);
  }, ["self"]),
  "{ :self |\n\t\t[1J0 -1J0 0J1 0J-1].includes(self)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isNaN",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isNaN_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isNaN_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.real.isNaN | {\n\t\t\tself.imaginary.isNaN\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isPurelyImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_real_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.real.isZero\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isRational",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused |\n\t\tfalse\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_imaginary_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.imaginary.isZero\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isVeryCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.000000000001);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.isCloseToBy(anObject, 0.000000000001)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isZero_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isZero_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.real.isZero & {\n\t\t\tself.imaginary.isZero\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _real_1(_self);
    let _y = _imaginary_1(_self);
    /* Statements */
    return _Complex_2(
      _asterisk_2(
        0.5,
        _log_1(
          _plusSign_2(_circumflexAccent_2(_x, 2), _circumflexAccent_2(_y, 2)),
        ),
      ),
      _arg_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\t/* self.abs.log + self.arg.i */\n\t\tlet x = self.real;\n\t\tlet y = self.imaginary;\n\t\tComplex(\n\t\t\t0.5 * ((x ^ 2) + (y ^ 2)).log,\n\t\t\tself.arg\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_log_1(_self), _log_1(_aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.log / aNumber.log\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _maxOn_3(_self, _anObject, _abs_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _max_1);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tself.maxOn(anObject, abs:/1)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, max:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _minOn_3(_self, _anObject, _abs_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _min_1);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.isComplex.if {\n\t\t\tself.minOn(anObject, abs:/1)\n\t\t} {\n\t\t\tanObject.adaptToComplexAndApply(self, min:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _negate_1(_real_1(_self)),
      _negate_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.real.negate, self.imaginary.negate)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.abs\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(0, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_self, _abs_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0J0\n\t\t} {\n\t\t\tself / self.abs\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(1);
  }, ["self"]),
  "{ :self |\n\t\t1.asComplex\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _printString_1(_real_1(_self)),
      _printString_1(_imaginary_1(_self)),
    ], "J");
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.real.printString,\n\t\t\tself.imaginary.printString\n\t\t].stringIntercalate('J')\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printStringShowingDecimalPlaces",
  ["self", "places"],
  sl.annotateFunction(function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _printStringShowingDecimalPlaces_2(_real_1(_self), _places),
      _printStringShowingDecimalPlaces_2(_imaginary_1(_self), _places),
    ], "J");
  }, ["self", "places"]),
  "{ :self :places |\n\t\t[\n\t\t\tself.real.printStringShowingDecimalPlaces(places),\n\t\t\tself.imaginary.printStringShowingDecimalPlaces(places)\n\t\t].stringIntercalate('J')\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "quotient",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "quotient");
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.shouldNotImplement('quotient')\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
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
  "Complex",
  "Complex",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "reciprocal: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(1, _self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self = 0).if {\n\t\t\tself.error('reciprocal: zero divide')\n\t\t} {\n\t\t\t1 / self\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "remainder",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _shouldNotImplement_2(_self, "remainder");
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.shouldNotImplement('remainder')\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _abs_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself / self.abs\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_imaginary_1(_self), 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_real_1(_self), 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asComplex_1(_sqrt_1(_real_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _sqrt_1(
          _solidus_2(_hyphenMinus_2(_abs_1(_self), _real_1(_self)), 2),
        );
        let _u = _solidus_2(_solidus_2(_imaginary_1(_self), 2), _v);
        /* Statements */
        return _Complex_2(_u, _v);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.imaginary = 0 & {\n\t\t\tself.real >= 0\n\t\t}).if {\n\t\t\tself.real.sqrt.asComplex\n\t\t} {\n\t\t\tlet v = (self.abs - self.real / 2).sqrt;\n\t\t\tlet u = self.imaginary / 2 / v;\n\t\t\tComplex(u, v)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "squaredNorm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.real * self.real) + (self.imaginary * self.imaginary)\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _integerPart_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.integerPart\n\t}",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(0);
  }, ["self"]),
  "{ :self |\n\t\t0.asComplex\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Complex",
  "Complex",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newComplex_0(), _real, _imaginary);
  }, ["real", "imaginary"]),
  "{ :real :imaginary |\n\t\tnewComplex().initializeSlots(real, imaginary)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aComplexNumber, _asComplex_1(_self));
  }, ["self", "aComplexNumber", "aBlock:/2"]),
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\taComplexNumber.aBlock(self.asComplex)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "asComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_asFloat_1(_self), 0);
  }, ["self"]),
  "{ :self |\n\t\tComplex(self.asFloat, 0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "cayleyTransform",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_2(_z, _Complex_2(0, 1)),
      _plusSign_2(_z, _Complex_2(0, 1)),
    );
  }, ["z"]),
  "{ :z |\n\t\t(z - 0J1) / (z + 0J1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "Complex",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_asFloat_1(_real), _asFloat_1(_imaginary));
  }, ["real", "imaginary"]),
  "{ :real :imaginary |\n\t\tComplex(real.asFloat, imaginary.asFloat)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(0, _asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tComplex(0, self.asFloat)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "isGaussianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self |\n\t\ttrue\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "j",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_asFloat_1(_real), _asFloat_1(_imaginary));
  }, ["real", "imaginary"]),
  "{ :real :imaginary |\n\t\tComplex(real.asFloat, imaginary.asFloat)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aComplexNumber, _each);
      }, ["each"]),
    );
  }, ["self", "aComplexNumber", "aBlock:/2"]),
  "{ :self :aComplexNumber :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taComplexNumber.aBlock(each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Complex",
  "Complex",
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
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_self, 2);
        let _r = _at_2(__SplVar1, 1);
        let _i = _at_2(__SplVar1, 2);
        /* Statements */
        return _Complex_2(_r, _i);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _Complex_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [r, i] = self;\n\t\t\tComplex(r, i)\n\t\t} {\n\t\t\tself.collect(Complex:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Complex",
  "listToComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    /* Statements */
    return _j_2(_a, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self;\n\t\ta.j(b)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "isComplexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, "J");
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_parts), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_parts, _isFloatString_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_beginsWith_2(_at_2(_parts, 2), "-"));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet parts = self.splitBy('J');\n\t\tparts.size = 2 & {\n\t\t\tparts.allSatisfy(isFloatString:/1) & {\n\t\t\t\tparts[2].beginsWith('-').not\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "parseComplex",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplexString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar3 = _assertIsOfSize_2(_splitBy_2(_self, "J"), 2);
        let _real = _at_2(__SplVar3, 1);
        let _imaginary = _at_2(__SplVar3, 2);
        /* Statements */
        return _Complex_2(
          _parseNumber_2(_real, _elseClause_0),
          _parseNumber_2(_imaginary, _elseClause_0),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.isComplexString.if {\n\t\t\tlet [real, imaginary] = self.splitBy('J');\n\t\t\tComplex(\n\t\t\t\treal.parseNumber(elseClause:/0),\n\t\t\t\timaginary.parseNumber(elseClause:/0)\n\t\t\t)\n\t\t} {\n\t\t\telseClause()\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "parseComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseComplex_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseComplex: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseComplex {\n\t\t\tself.error('parseComplex: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Complex",
  "parseComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_keys_1(_self), [
      _hyphenMinusGreaterThanSign_2(
        ["real", "imaginary"],
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _Complex_2(_at_2(_self, "real"), _at_2(_self, "imaginary"));
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tself.keys.caseOf(\n\t\t\t[\n\t\t\t\t['real' 'imaginary'] -> { Complex(self['real'], self['imaginary']) }\n\t\t\t]\n\t\t)\n\t}",
);
