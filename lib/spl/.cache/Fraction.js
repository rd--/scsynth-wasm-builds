sl.addType(
  false,
  "Fraction",
  "Fraction",
  ["Object", "Equatable", "Comparable", "Magnitude", "Number"],
  ["numerator", "denominator"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Fraction",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Fraction",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Fraction",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Fraction",
);

sl.copyTraitMethodsToType(
  "Number",
  "Fraction",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "lessThanSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFraction_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(
          _asterisk_2(_numerator_1(_self), _denominator_1(_aNumber)),
          _asterisk_2(_numerator_1(_aNumber), _denominator_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToFractionAndApply_3(_aNumber, _self, _lessThanSign_2);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isFraction.if {\n\t\t\t(self.numerator * aNumber.denominator) < (aNumber.numerator * self.denominator)\n\t\t} {\n\t\t\taNumber.adaptToFractionAndApply(self, <)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asterisk",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFraction_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d1 = _gcd_2(_numerator_1(_self), _denominator_1(_aNumber));
        let _d2 = _gcd_2(_denominator_1(_self), _numerator_1(_aNumber));
        let _numerator = _asterisk_2(
          _solidusSolidus_2(_numerator_1(_self), _d1),
          _solidusSolidus_2(_numerator_1(_aNumber), _d2),
        );
        /* Statements */
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_d2, _denominator_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_d1, _denominator_1(_aNumber));
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ReducedFraction_2(_numerator, _one_1(_numerator));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Fraction_2(
              _numerator,
              _asterisk_2(
                _solidusSolidus_2(_denominator_1(_self), _d2),
                _solidusSolidus_2(_denominator_1(_aNumber), _d1),
              ),
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
        return _adaptToFractionAndApply_3(_aNumber, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isFraction.if {\n\t\t\tlet d1 = self.numerator.gcd(aNumber.denominator);\n\t\t\tlet d2 = self.denominator.gcd(aNumber.numerator);\n\t\t\tlet numerator = (self.numerator // d1) * (aNumber.numerator // d2);\n\t\t\t(d2 = self.denominator & {\n\t\t\t\td1 = aNumber.denominator\n\t\t\t}).if {\n\t\t\t\t/* preference: answer proper integer */\n\t\t\t\tReducedFraction(numerator, numerator.one)\n\t\t\t} {\n\t\t\t\tFraction(\n\t\t\t\t\tnumerator,\n\t\t\t\t\t(self.denominator // d2) * (aNumber.denominator // d1)\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\taNumber.adaptToFractionAndApply(self, *)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "plusSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(
          _plusSign_2(
            _numerator_1(_self),
            _asterisk_2(_denominator_1(_self), _asLargeInteger_1(_aNumber)),
          ),
          _denominator_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFraction_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _d = _gcd_2(_denominator_1(_self), _denominator_1(_aNumber));
            let _d1 = _solidusSolidus_2(_denominator_1(_aNumber), _d);
            let _d2 = _solidusSolidus_2(_denominator_1(_self), _d);
            let _n = _plusSign_2(
              _asterisk_2(_numerator_1(_self), _d1),
              _asterisk_2(_numerator_1(_aNumber), _d2),
            );
            /* Statements */
            _d1 = _asterisk_2(_d1, _d2);
            _d2 = _gcd_2(_n, _d);
            _n = _solidusSolidus_2(_n, _d2);
            _d = _asterisk_2(_d1, _solidusSolidus_2(_d, _d2));
            return _if_3(
              _equalsSign_2(_d, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ReducedFraction_2(_n, _one_1(_n));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ReducedFraction_2(_n, _d);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToFractionAndApply_3(_aNumber, _self, _plusSign_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isScalarInteger.if {\n\t\t\tReducedFraction(\n\t\t\t\tself.numerator + (self.denominator * aNumber.asLargeInteger),\n\t\t\t\tself.denominator\n\t\t\t)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tlet d = self.denominator.gcd(aNumber.denominator);\n\t\t\t\tlet d1 = aNumber.denominator // d;\n\t\t\t\tlet d2 = self.denominator // d;\n\t\t\t\tlet n = (self.numerator * d1) + (aNumber.numerator * d2);\n\t\t\t\td1 := d1 * d2;\n\t\t\t\td2 := n.gcd(d);\n\t\t\t\tn := n // d2;\n\t\t\t\td := d1 * (d // d2);\n\t\t\t\t(d = 1).if {\n\t\t\t\t\t/* preference: answer proper integer */\n\t\t\t\t\tReducedFraction(n, n.one)\n\t\t\t\t} {\n\t\t\t\t\tReducedFraction(n, d)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, +)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "hyphenMinus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(
          _hyphenMinus_2(
            _numerator_1(_self),
            _asterisk_2(_denominator_1(_self), _asLargeInteger_1(_aNumber)),
          ),
          _denominator_1(_self),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFraction_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_self, _negate_1(_aNumber));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToFractionAndApply_3(_aNumber, _self, _hyphenMinus_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isScalarInteger.if {\n\t\t\tReducedFraction(\n\t\t\t\tself.numerator - (self.denominator * aNumber.asLargeInteger),\n\t\t\t\tself.denominator\n\t\t\t)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself + aNumber.negate\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, -)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "solidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _self,
          _ReducedFraction_2(1, _asLargeInteger_1(_aNumber)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFraction_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_self, _reciprocal_1(_aNumber));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToFractionAndApply_3(_aNumber, _self, _solidus_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isScalarInteger.if {\n\t\t\tself * ReducedFraction(1, aNumber.asLargeInteger)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself * aNumber.reciprocal\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, /)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "circumflexAccent",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _raisedToInteger_2(_self, _asInteger_1(_aNumber));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isFraction_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _isNegative_1(_self),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _circumflexAccent_2(
                  _Complex_2(_asFloat_1(_self), 0),
                  _aNumber,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _raisedToFraction_2(_self, _aNumber);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToFractionAndApply_3(
              _aNumber,
              _self,
              _circumflexAccent_2,
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isScalarInteger.if {\n\t\t\tself.raisedToInteger(aNumber.asInteger)\n\t\t} {\n\t\t\taNumber.isFraction.if {\n\t\t\t\tself.isNegative.if {\n\t\t\t\t\tComplex(self.asFloat, 0) ^ aNumber\n\t\t\t\t} {\n\t\t\t\t\tself.raisedToFraction(aNumber)\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\taNumber.adaptToFractionAndApply(self, ^)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "adaptToIntegerAndApply",
  ["self", "anInteger", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_ReducedFraction_2(_anInteger, 1n), _self);
  }, ["self", "anInteger", "aBlock:/2"]),
  "{ :self :anInteger :aBlock:/2 |\n\t\taBlock(\n\t\t\tReducedFraction(anInteger, 1L),\n\t\t\tself\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asFraction_1(_aNumber), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aNumber, _asFloat_1(_self));
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 |\n\t\taNumber.isScalarInteger.if {\n\t\t\taBlock(aNumber.asFraction, self)\n\t\t} {\n\t\t\taBlock(aNumber, self.asFloat)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _asFloat_1(_numerator_1(_self)),
      _asFloat_1(_denominator_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.asFloat / self.denominator.asFloat\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asFraction",
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
  "Fraction",
  "Fraction",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asInteger_1(_asLargeInteger_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asLargeInteger.asInteger\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asLargeInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _numerator_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Fraction>>asLargeInteger: not integer");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger.if {\n\t\t\tself.numerator\n\t\t} {\n\t\t\tself.error('Fraction>>asLargeInteger: not integer')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asSmallFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFloat_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallInteger_1(_asLargeInteger_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asLargeInteger.asSmallInteger\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["numerator", _asInteger_1(_numerator_1(_self))], [
      "denominator",
      _asInteger_1(_denominator_1(_self)),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\tnumerator: self.numerator.asInteger,\n\t\t\tdenominator: self.denominator.asInteger\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "components",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _asInteger_1(_numerator_1(_self)),
      _asInteger_1(_denominator_1(_self)),
    ];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.numerator.asInteger,\n\t\t\tself.denominator.asInteger\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "continuedFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _integerPart_1(_self);
    let _f = _hyphenMinus_2(_self, _i);
    /* Statements */
    return _if_3(
      _isNegative_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _continuedFraction_1(_plusSign_2(1, _f));
        /* Statements */
        _atPut_3(
          _answer,
          1,
          _hyphenMinus_2(_plusSign_2(_at_2(_answer, 1), _i), 1),
        );
        return _answer;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_f, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _add_2(_answer, _i);
            _f = _solidus_2(1, _f);
            _i = _integerPart_1(_f);
            return _f = _hyphenMinus_2(_f, _i);
          }, []),
        );
        _add_2(_answer, _i);
        return _answer;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.integerPart;\n\t\tlet f = self - i;\n\t\tself.isNegative.if {\n\t\t\tlet answer = (1 + f).continuedFraction;\n\t\t\tanswer[1] := answer[1] + i - 1;\n\t\t\tanswer\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\t{\n\t\t\t\tf != 0\n\t\t\t}.whileTrue {\n\t\t\t\tanswer.add(i);\n\t\t\t\tf := 1 / f;\n\t\t\t\ti := f.integerPart;\n\t\t\t\tf := f - i\n\t\t\t};\n\t\t\tanswer.add(i);\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "decimalPeriod",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _denominator_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_powerMod_3(10, _n, _n), 0),
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
        let _a = _circumflexAccent_2(2n, _integerExponent_2(_n, 2));
        let _b = _circumflexAccent_2(5n, _integerExponent_2(_n, 5));
        let _c = _solidus_2(_solidus_2(_n, _a), _b);
        /* Statements */
        return _multiplicativeOrder_2(10, _c);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.denominator;\n\t\t(powerMod(10, n, n) = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet a = 2L ^ n.integerExponent(2);\n\t\t\tlet b = 5L ^ n.integerExponent(5);\n\t\t\tlet c = n / a / b;\n\t\t\t10.multiplicativeOrder(c)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "dividesImmediately",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _solidus_2(_self, _aNumber);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_denominator_1(_r), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPrime_1(_numerator_1(_r));
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet r = self / aNumber;\n\t\tr.denominator = 1 & {\n\t\t\tr.numerator.isPrime\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "engelExpansion",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [];
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMarkEqualsSign_2(_x, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _ceiling_1(_solidus_2(1, _x));
        /* Statements */
        _add_2(_a, _y);
        return _x = _hyphenMinus_2(_asterisk_2(_x, _y), 1);
      }, []),
    );
    return _a;
  }, ["x"]),
  "{ :x |\n\t\tlet a = [];\n\t\t{\n\t\t\tx != 0\n\t\t}.whileTrue {\n\t\t\tlet y = (1 / x).ceiling;\n\t\t\ta.add(y);\n\t\t\tx := x * y - 1\n\t\t};\n\t\ta\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
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
          _isFraction_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _equalsSign_2(_numerator_1(_self), _numerator_1(_anObject)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(
                  _denominator_1(_self),
                  _denominator_1(_anObject),
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
            return _adaptToFractionAndApply_3(_anObject, _self, _aBlock_2);
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isNumber.if {\n\t\t\tanObject.isFraction.if {\n\t\t\t\tself.numerator = anObject.numerator & {\n\t\t\t\t\tself.denominator = anObject.denominator\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\tanObject.adaptToFractionAndApply(self, aBlock:/2)\n\t\t\t}\n\t\t} {\n\t\t\tfalse\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exp_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.exp\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "gcd",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFraction_1(_aFraction),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _gcd_2(_denominator_1(_self), _denominator_1(_aFraction));
        /* Statements */
        return _ReducedFraction_2(
          _gcd_2(
            _asterisk_2(
              _numerator_1(_self),
              _solidusSolidus_2(_denominator_1(_aFraction), _d),
            ),
            _asterisk_2(
              _numerator_1(_aFraction),
              _solidusSolidus_2(_denominator_1(_self), _d),
            ),
          ),
          _asterisk_2(
            _solidusSolidus_2(_denominator_1(_self), _d),
            _denominator_1(_aFraction),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToFractionAndApply_3(_aFraction, _self, _lcm_2);
      }, []),
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\taFraction.isFraction.if {\n\t\t\tlet d = self.denominator.gcd(aFraction.denominator);\n\t\t\tReducedFraction(\n\t\t\t\t(self.numerator * (aFraction.denominator // d)).gcd(\n\t\t\t\t\taFraction.numerator * (self.denominator // d)\n\t\t\t\t),\n\t\t\t\t(self.denominator // d * aFraction.denominator)\n\t\t\t)\n\t\t} {\n\t\t\taFraction.adaptToFractionAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isAdjacentFraction",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOne_1(_abs_1(_numerator_1(_hyphenMinus_2(_operand, _self))));
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\t(operand - self).numerator.abs.isOne\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_asFloat_1(_self), _asFloat_1(_aNumber), _epsilon);
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon |\n\t\tself.asFloat.isCloseToBy(aNumber.asFloat, epsilon)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isDyadicRational",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPowerOfTwo_1(_denominator_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.denominator.isPowerOfTwo\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isExact",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isFareyPair",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_numeratorDenominator_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let __SplVar2 = _assertIsOfSize_2(_numeratorDenominator_1(_aFraction), 2);
    let _c = _at_2(__SplVar2, 1);
    let _d = _at_2(__SplVar2, 2);
    /* Statements */
    return _equalsSign_2(
      _hyphenMinus_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
      1,
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\tlet [a, b] = self.numeratorDenominator;\n\t\tlet [c, d] = aFraction.numeratorDenominator;\n\t\t(b * c) - (a * d) = 1\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_denominator_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.denominator = 1\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
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
  "Fraction",
  "Fraction",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNegative_1(_numerator_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.isNegative\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isPhiWeightedMediantNoble",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _abs_1(
        _hyphenMinus_2(
          _asterisk_2(_numerator_1(_self), _denominator_1(_aFraction)),
          _asterisk_2(_denominator_1(_self), _numerator_1(_aFraction)),
        ),
      ),
      1,
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\t(\n\t\t\t(self.numerator * aFraction.denominator)\n\t\t\t-\n\t\t\t(self.denominator * aFraction.numerator)\n\t\t).abs = 1\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isPowerOfTwo_1(_numerator_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.numerator.isPowerOfTwo\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isRational",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["unused"]),
  "{ :unused |\n\t\ttrue\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isSmallInteger_1(_numerator_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.numerator.isSmallInteger\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isSquareSuperparticular",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSuperparticular_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isSquareFree_1(_numerator_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isSuperparticular & {\n\t\t\tself.numerator.isSquareFree.not\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isSuperpartient",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _not_1(_isSuperparticular_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself > 1 & { self.isSuperparticular.not }\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isSuperparticular",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(
      _hyphenMinus_2(_numerator_1(_self), 1),
      _denominator_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.numerator - 1 = self.denominator\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isUnitFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_numerator_1(_self), 1);
  }, ["self"]),
  "{ :self |\n\t\tself.numerator = 1\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isVeryCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself = aNumber\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_numerator_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.isZero\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "lcm",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isFraction_1(_aFraction),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _solidusSolidus_2(_self, _gcd_2(_self, _aFraction)),
          _aFraction,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToFractionAndApply_3(_aFraction, _self, _lcm_2);
      }, []),
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\taFraction.isFraction.if {\n\t\t\tself // self.gcd(aFraction) * aFraction\n\t\t} {\n\t\t\taFraction.adaptToFractionAndApply(self, lcm:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "limitDenominator",
  ["self", "maxDenominator"],
  sl.annotateFunction(function (_self, _maxDenominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _maxDenominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_maxDenominator, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "limitDenominator: illegal maxDenominator");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSignEqualsSign_2(_denominator_1(_self), _maxDenominator),
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
            } /* Temporaries */
            let _p0 = 0;
            let _q0 = 1;
            let _p1 = 1;
            let _q1 = 0;
            let _n = _numerator_1(_self);
            let _d = _denominator_1(_self);
            let _continue = true;
            let _k = null;
            let _bound1 = null;
            let _bound2 = null;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _continue;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _a = _solidusSolidus_2(_n, _d);
                let _q2 = _plusSign_2(_q0, _asterisk_2(_a, _q1));
                /* Statements */
                return _if_3(
                  _greaterThanSign_2(_q2, _maxDenominator),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _continue = false;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return (sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let __SplVar3 = [
                        _p1,
                        _q1,
                        _plusSign_2(_p0, _asterisk_2(_a, _p1)),
                        _q2,
                        _d,
                        _hyphenMinus_2(_n, _asterisk_2(_a, _d)),
                      ];
                      /* Statements */
                      _p0 = _at_2(__SplVar3, 1);
                      _q0 = _at_2(__SplVar3, 2);
                      _p1 = _at_2(__SplVar3, 3);
                      _q1 = _at_2(__SplVar3, 4);
                      _n = _at_2(__SplVar3, 5);
                      return _d = _at_2(__SplVar3, 6);
                    }, [])());
                  }, []),
                );
              }, []),
            );
            _k = _solidusSolidus_2(_hyphenMinus_2(_maxDenominator, _q0), _q1);
            _bound1 = _ReducedFraction_2(
              _plusSign_2(_p0, _asterisk_2(_k, _p1)),
              _plusSign_2(_q0, _asterisk_2(_k, _q1)),
            );
            _bound2 = _ReducedFraction_2(_p1, _q1);
            return _if_3(
              _lessThanSignEqualsSign_2(
                _abs_1(_hyphenMinus_2(_bound2, _self)),
                _abs_1(_hyphenMinus_2(_bound1, _self)),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _bound2;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _bound1;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "maxDenominator"]),
  "{ :self :maxDenominator |\n\t\t(maxDenominator < 1).if {\n\t\t\tself.error('limitDenominator: illegal maxDenominator')\n\t\t} {\n\t\t\t(self.denominator <= maxDenominator).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tlet p0 = 0;\n\t\t\t\tlet q0 = 1;\n\t\t\t\tlet p1 = 1;\n\t\t\t\tlet q1 = 0;\n\t\t\t\tlet n = self.numerator;\n\t\t\t\tlet d = self.denominator;\n\t\t\t\tlet continue = true;\n\t\t\t\tlet k = nil;\n\t\t\t\tlet bound1 = nil;\n\t\t\t\tlet bound2 = nil;\n\t\t\t\t{\n\t\t\t\t\tcontinue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\tlet a = n // d;\n\t\t\t\t\tlet q2 = q0 + (a * q1);\n\t\t\t\t\t(q2 > maxDenominator).if {\n\t\t\t\t\t\tcontinue := false\n\t\t\t\t\t} {\n\t\t\t\t\t\t[p0, q0, p1, q1, n, d] := [p1, q1, p0 + (a * p1), q2, d, n - (a * d)]\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tk := (maxDenominator - q0) // q1;\n\t\t\t\tbound1 := ReducedFraction(p0 + (k * p1), q0 + (k * q1));\n\t\t\t\tbound2 := ReducedFraction(p1, q1);\n\t\t\t\t((bound2 - self).abs <= (bound1 - self).abs).if {\n\t\t\t\t\tbound2\n\t\t\t\t} {\n\t\t\t\t\tbound1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.log\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.log2\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log10_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.log10\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "mediant",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(
      _plusSign_2(_numerator_1(_self), _numerator_1(_aFraction)),
      _plusSign_2(_denominator_1(_self), _denominator_1(_aFraction)),
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\tFraction(\n\t\t\tself.numerator + aFraction.numerator,\n\t\t\tself.denominator + aFraction.denominator\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "minkowskiQuestionMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _continuedFraction_1(_self);
    let _a0 = _removeFirst_1(_a);
    let _m = _size_1(_a);
    /* Statements */
    return _plusSign_2(
      _a0,
      _asterisk_2(
        2,
        _sum_2(
          _asList_1(_nonemptyRange_3(1n, _m, 1)),
          sl.annotateFunction(function (_n) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _n";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _circumflexAccent_2(-1, _plusSign_2(_n, 1)),
              _circumflexAccent_2(2, _sum_1(_take_2(_a, _n))),
            );
          }, ["n"]),
        ),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.continuedFraction;\n\t\tlet a0 = a.removeFirst;\n\t\tlet m = a.size;\n\t\ta0 + (2 * [1L .. m].sum { :n |\n\t\t\t(-1 ^ (n + 1)) / (2 ^ a.take(n).sum)\n\t\t})\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ReducedFraction_2(
      _negate_1(_numerator_1(_self)),
      _denominator_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tReducedFraction(self.numerator.negate, self.denominator)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "normal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalize_1(_copy_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.copy.normalize\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_denominator_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Fraction>>normalize: zeroDenominatorError");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _asterisk_2(
          _numerator_1(_self),
          _sign_1(_denominator_1(_self)),
        );
        let _y = _abs_1(_denominator_1(_self));
        let _d = _gcd_2(_x, _y);
        /* Statements */
        _numerator_2(_self, _solidusSolidus_2(_x, _d));
        _denominator_2(_self, _solidusSolidus_2(_y, _d));
        return _self;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.denominator = 0).if {\n\t\t\tself.error('Fraction>>normalize: zeroDenominatorError')\n\t\t} {\n\t\t\tlet x = self.numerator * self.denominator.sign;\n\t\t\tlet y = self.denominator.abs;\n\t\t\tlet d = x.gcd(y);\n\t\t\tself.numerator := x // d;\n\t\t\tself.denominator := y // d;\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "numeratorDenominator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_numerator_1(_self), _denominator_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.numerator, self.denominator]\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ReducedFraction_2(1n, 1n);
  }, ["self"]),
  "{ :self |\n\t\tReducedFraction(1L, 1L)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "phiWeightedMediant",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Statements */
    return _weightedMediant_4(_self, _aFraction, 1, _goldenRatio_1(1));
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\tself.weightedMediant(aFraction, 1, 1.goldenRatio)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "printStringToFixed",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _printStringToFixed_2(_asFloat_1(_self), _anInteger);
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tself.asFloat.printStringToFixed(anInteger)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "raisedToFraction",
  ["self", "aFraction"],
  sl.annotateFunction(function (_self, _aFraction) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFraction";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rootNumerator = _truncate_1(
      _nthRoot_2(_numerator_1(_self), _denominator_1(_aFraction)),
    );
    let _rootDenominator = _truncate_1(
      _nthRoot_2(_denominator_1(_self), _denominator_1(_aFraction)),
    );
    let _root = _Fraction_2(_rootNumerator, _rootDenominator);
    /* Statements */
    return _if_3(
      _equalsSign_2(
        _raisedToInteger_2(_root, _denominator_1(_aFraction)),
        _self,
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _raisedToInteger_2(_root, _numerator_1(_aFraction));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_asFloat_1(_self), _asFloat_1(_aFraction));
      }, []),
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction |\n\t\tlet rootNumerator = self.numerator.nthRoot(aFraction.denominator).truncate;\n\t\tlet rootDenominator = self.denominator.nthRoot(aFraction.denominator).truncate;\n\t\tlet root = Fraction(rootNumerator, rootDenominator);\n\t\t(root.raisedToInteger(aFraction.denominator) = self).if {\n\t\t\troot.raisedToInteger(aFraction.numerator)\n\t\t} {\n\t\t\tself.asFloat ^ aFraction.asFloat\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "raisedToInteger",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_anInteger),
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
          _lessThanSign_2(_anInteger, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _raisedToInteger_2(
              _reciprocal_1(_self),
              _negate_1(_anInteger),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ReducedFraction_2(
              _raisedToInteger_2(_numerator_1(_self), _anInteger),
              _raisedToInteger_2(_denominator_1(_self), _anInteger),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tanInteger.isZero.if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(anInteger < 0).if {\n\t\t\t\tself.reciprocal.raisedToInteger(anInteger.negate)\n\t\t\t} {\n\t\t\t\tReducedFraction(\n\t\t\t\t\tself.numerator.raisedToInteger(anInteger),\n\t\t\t\t\tself.denominator.raisedToInteger(anInteger)\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_abs_1(_numerator_1(_self)), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(
          _asterisk_2(_denominator_1(_self), _numerator_1(_self)),
          _one_1(_denominator_1(_self)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(_denominator_1(_self), _numerator_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.numerator.abs = 1).if {\n\t\t\t/* preference: answer proper integer */\n\t\t\tReducedFraction(self.denominator * self.numerator, self.denominator.one)\n\t\t} {\n\t\t\tFraction(self.denominator, self.numerator)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "simplify",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_denominator_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Fraction>>simplify: zeroDenominatorError");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _asterisk_2(
          _numerator_1(_self),
          _sign_1(_denominator_1(_self)),
        );
        let _y = _abs_1(_denominator_1(_self));
        let _d = _gcd_2(_x, _y);
        /* Statements */
        _numerator_2(_self, _solidusSolidus_2(_x, _d));
        _denominator_2(_self, _solidusSolidus_2(_y, _d));
        return _if_3(
          _equalsSign_2(_denominator_1(_self), 1),
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
            return _self;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.denominator = 0).if {\n\t\t\tself.error('Fraction>>simplify: zeroDenominatorError')\n\t\t} {\n\t\t\tlet x = self.numerator * self.denominator.sign;\n\t\t\tlet y = self.denominator.abs;\n\t\t\tlet d = x.gcd(y);\n\t\t\tself.numerator := x // d;\n\t\t\tself.denominator := y // d;\n\t\t\t(self.denominator = 1).if {\n\t\t\t\t/* preference: answer proper integer */\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\tself\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "simplified",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _simplify_1(_copy_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.copy.simplify\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _basicPrintString_2(_numerator_1(_self), 10),
      _basicPrintString_2(_denominator_1(_self), 10),
    ], "/");
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.numerator.basicPrintString(10),\n\t\t\tself.denominator.basicPrintString(10)\n\t\t].stringIntercalate('/')\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "sylvesterExpansion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [];
    let __SplVar4 = _assertIsOfSize_2(_numeratorDenominator_1(_self), 2);
    let _x = _at_2(__SplVar4, 1);
    let _y = _at_2(__SplVar4, 2);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _equalsSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_y, 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_x, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _ceiling_1(_solidus_2(_y, _x));
            /* Statements */
            _add_2(_a, [1, _z]);
            _x = _hyphenMinus_2(_asterisk_2(_x, _z), _y);
            return _y = _asterisk_2(_y, _z);
          }, []),
        );
        return _collect_2(_a, _Fraction_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = [];\n\t\tlet [x, y] = self.numeratorDenominator;\n\t\t(x = 0 | { y = 0 }).if {\n\t\t\t[]\n\t\t} {\n\t\t\t{\n\t\t\t\tx != 0\n\t\t\t}.whileTrue {\n\t\t\t\tlet z = (y / x).ceiling;\n\t\t\t\ta.add([1 z]);\n\t\t\t\tx := x * z - y;\n\t\t\t\ty := y * z\n\t\t\t};\n\t\t\ta.collect(Fraction:/1)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotient_2(_numerator_1(_self), _denominator_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.numerator.quotient(self.denominator)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "unicodeFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOf_2(_unicodeFractionsTable_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.unicodeFractionsTable.indexOf(self)\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "weightedMediant",
  ["self", "aFraction", "m", "n"],
  sl.annotateFunction(function (_self, _aFraction, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _aFraction, _m, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _numerator_1(_self);
    let _b = _denominator_1(_self);
    let _c = _numerator_1(_aFraction);
    let _d = _denominator_1(_aFraction);
    /* Statements */
    return _if_3(
      _ampersandAmpersand_2(_isFraction_1(_m), _isFraction_1(_n)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(_asterisk_2(_m, _a), _asterisk_2(_n, _c)),
          _plusSign_2(_asterisk_2(_m, _b), _asterisk_2(_n, _d)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _plusSign_2(
            _asterisk_2(_m, _asFloat_1(_a)),
            _asterisk_2(_n, _asFloat_1(_c)),
          ),
          _plusSign_2(
            _asterisk_2(_m, _asFloat_1(_b)),
            _asterisk_2(_n, _asFloat_1(_d)),
          ),
        );
      }, []),
    );
  }, ["self", "aFraction", "m", "n"]),
  "{ :self :aFraction :m :n |\n\t\tlet a = self.numerator;\n\t\tlet b = self.denominator;\n\t\tlet c = aFraction.numerator;\n\t\tlet d = aFraction.denominator;\n\t\t(m.isFraction && n.isFraction).if {\n\t\t\t((m * a) + (n * c)) / ((m * b) + (n * d))\n\t\t} {\n\t\t\t((m * a.asFloat) + (n * c.asFloat)) / ((m * b.asFloat) + (n * d.asFloat))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ReducedFraction_2(0n, 1n);
  }, ["self"]),
  "{ :self |\n\t\tReducedFraction(0L, 1L)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Fraction",
  "unicodeFractionsTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "unicodeFractionsTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([
          ["⅒", _Fraction_2(1n, 10n)],
          ["⅑", _Fraction_2(1n, 9n)],
          ["⅛", _Fraction_2(1n, 8n)],
          ["⅐", _Fraction_2(1n, 7n)],
          ["⅙", _Fraction_2(1n, 6n)],
          ["⅕", _Fraction_2(1n, 5n)],
          ["¼", _Fraction_2(1n, 4n)],
          ["⅓", _Fraction_2(1n, 3n)],
          ["⅜", _Fraction_2(3n, 8n)],
          ["⅖", _Fraction_2(2n, 5n)],
          ["½", _Fraction_2(1n, 2n)],
          ["⅗", _Fraction_2(3n, 5n)],
          ["⅝", _Fraction_2(5n, 8n)],
          ["⅔", _Fraction_2(2n, 3n)],
          ["¾", _Fraction_2(3n, 4n)],
          ["⅘", _Fraction_2(4n, 5n)],
          ["⅚", _Fraction_2(5n, 6n)],
          ["⅞", _Fraction_2(7n, 8n)],
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('unicodeFractionsTable') {\n\t\t\t(\n\t\t\t\t'⅒': 1/10, /* 0.1 */\n\t\t\t\t'⅑': 1/9, /* 1.111 */\n\t\t\t\t'⅛': 1/8, /* 0.125 */\n\t\t\t\t'⅐': 1/7, /* 0.142 */\n\t\t\t\t'⅙': 1/6, /* 0.166 */\n\t\t\t\t'⅕': 1/5, /* 0.2 */\n\t\t\t\t'¼': 1/4, /* 0.25 */\n\t\t\t\t'⅓': 1/3, /* 0.333 */\n\t\t\t\t'⅜': 3/8, /* 0.375 */\n\t\t\t\t'⅖': 2/5, /* 0.4 */\n\t\t\t\t'½': 1/2, /* 0.5 */\n\t\t\t\t'⅗': 3/5, /* 0.6 */\n\t\t\t\t'⅝': 5/8, /* 0.625 */\n\t\t\t\t'⅔': 2/3, /* 0.666 */\n\t\t\t\t'¾': 3/4, /* 0.75 */\n\t\t\t\t'⅘': 4/5, /* 0.8 */\n\t\t\t\t'⅚': 5/6, /* 0.833 */\n\t\t\t\t'⅞': 7/8 /* 0.875 */\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 |\n\t\taBlock(aFraction, Fraction(self, self.one))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Fraction",
  "ReducedFraction",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_denominator),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_denominator, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("@Integer>>ReducedFraction: zeroDenominatorError");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _initializeSlots_3(
              _newFraction_0(),
              _asLargeInteger_1(_numerator),
              _asLargeInteger_1(_denominator),
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
        return _adaptToNumberAndApply_3(_denominator, _numerator, _Fraction_2);
      }, []),
    );
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tdenominator.isScalarInteger.if {\n\t\t\t(denominator = 0).if {\n\t\t\t\t'@Integer>>ReducedFraction: zeroDenominatorError'.error\n\t\t\t} {\n\t\t\t\tnewFraction().initializeSlots(\n\t\t\t\t\tnumerator.asLargeInteger,\n\t\t\t\t\tdenominator.asLargeInteger\n\t\t\t\t)\n\t\t\t}\n\t\t} {\n\t\t\tdenominator.adaptToNumberAndApply(numerator, Fraction:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Fraction",
  "Fraction",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isScalarInteger_1(_denominator),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _simplify_1(
          _ReducedFraction_2(
            _asLargeInteger_1(_numerator),
            _asLargeInteger_1(_denominator),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_denominator, _numerator, _Fraction_2);
      }, []),
    );
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tdenominator.isScalarInteger.if {\n\t\t\tReducedFraction(\n\t\t\t\tnumerator.asLargeInteger,\n\t\t\t\tdenominator.asLargeInteger\n\t\t\t).simplify\n\t\t} {\n\t\t\tdenominator.adaptToNumberAndApply(numerator, Fraction:/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Fraction",
  "r",
  ["numerator", "denominator"],
  sl.annotateFunction(function (_numerator, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _numerator, _denominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_numerator, _denominator);
  }, ["numerator", "denominator"]),
  "{ :numerator :denominator |\n\t\tFraction(numerator, denominator)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
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
        return _aBlock_2(_aFraction, _each);
      }, ["each"]),
    );
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 |\n\t\tself.collect { :each |\n\t\t\taBlock(aFraction, each)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Fraction",
  "Fraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(_at_2(_self, 1), _at_2(_self, 2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "List>>Fraction: invalid size");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 2).if {\n\t\t\tFraction(self[1], self[2])\n\t\t} {\n\t\t\tself.error('List>>Fraction: invalid size')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aFraction, _Fraction_2(_self, _one_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asSmallFloat_1(_aFraction), _self);
      }, []),
    );
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 |\n\t\tself.isInteger.if {\n\t\t\taBlock(aFraction, Fraction(self, self.one))\n\t\t} {\n\t\t\taBlock(aFraction.asSmallFloat, self)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "asApproximateFraction",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _rationalize_2(_self, _epsilon);
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tself.rationalize(epsilon)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "asFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFraction_2(_self, 1E-5);
  }, ["self"]),
  "{ :self |\n\t\tself.asFraction(1E-5)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "asFraction",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(_self, 1n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rationalize_2(_self, _epsilon);
      }, []),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tself.isInteger.if {\n\t\t\tReducedFraction(self, 1L)\n\t\t} {\n\t\t\tself.rationalize(epsilon)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "rationalize",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _continuedFraction_2(_abs_1(_self), 16);
    let _l = _semiconvergents_2(_c, _epsilon);
    /* Statements */
    return _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      _do_2(
        _l,
        sl.annotateFunction(function (_r) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _r";
            throw new Error(errorMessage);
          } /* Statements */
          return _ifTrue_2(
            _lessThanSign_2(_abs_1(_hyphenMinus_2(_self, _r)), _epsilon),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _return_1(_copySignTo_2(_self, _r));
            }, []),
          );
        }, ["r"]),
      );
      return _copySignTo_2(_self, _last_1(_l));
    }, ["return:/1"]));
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet c = self.abs.continuedFraction(16);\n\t\tlet l = c.semiconvergents(epsilon);\n\t\tvalueWithReturn { :return:/1 |\n\t\t\tl.do { :r |\n\t\t\t\t((self - r).abs < epsilon).ifTrue {\n\t\t\t\t\tself.copySignTo(r).return\n\t\t\t\t}\n\t\t\t};\n\t\t\tself.copySignTo(l.last)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Fraction",
  "asFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_self, 1n);
  }, ["self"]),
  "{ :self |\n\t\tFraction(self, 1L)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Fraction",
  "isFractionString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _matchesRegularExpression_2(_self, "^[-]?[0-9]+/[0-9]+$");
  }, ["self"]),
  "{ :self |\n\t\tself.matchesRegularExpression('^[-]?[0-9]+/[0-9]+$')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Fraction",
  "parseFractionSeparatedBy",
  ["self", "separator", "elseClause:/0"],
  sl.annotateFunction(function (_self, _separator, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _separator, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _includesSubstring_2(_self, _separator),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _parts = _splitBy_2(_self, _separator);
        /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_parts), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Fraction_2(
              _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0),
              _parseLargeInteger_2(_at_2(_parts, 2), _elseClause_0),
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
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDecimalIntegerString_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ReducedFraction_2(_parseLargeInteger_1(_self), 1n);
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
      }, []),
    );
  }, ["self", "separator", "elseClause:/0"]),
  "{ :self :separator :elseClause:/0 |\n\t\tself.includesSubstring(separator).if {\n\t\t\tlet parts = self.splitBy(separator);\n\t\t\t(parts.size = 2).if {\n\t\t\t\tFraction(\n\t\t\t\t\tparts[1].parseLargeInteger(elseClause:/0),\n\t\t\t\t\tparts[2].parseLargeInteger(elseClause:/0)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\telseClause()\n\t\t\t}\n\t\t} {\n\t\t\tself.isDecimalIntegerString.if {\n\t\t\t\tReducedFraction(\n\t\t\t\t\tself.parseLargeInteger,\n\t\t\t\t\t1L\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\telseClause()\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Fraction",
  "parseFraction",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseFractionSeparatedBy_3(_self, "/", _elseClause_0);
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 |\n\t\tself.parseFractionSeparatedBy('/', elseClause:/0)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Fraction",
  "parseFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseFraction_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseFraction: parse failed");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.parseFraction {\n\t\t\tself.error('parseFraction: parse failed')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Fraction",
  "asDecimalFraction",
  ["self", "places"],
  sl.annotateFunction(function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFractionOver_2(_self, _circumflexAccent_2(10n, _places));
  }, ["self", "places"]),
  "{ :self :places |\n\t\tself.asFractionOver(10L ^ places)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "asDecimalFraction",
  ["self", "places"],
  sl.annotateFunction(function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFractionOver_2(_self, _circumflexAccent_2(10n, _places));
  }, ["self", "places"]),
  "{ :self :places |\n\t\tself.asFractionOver(10L ^ places)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Fraction",
  "asFractionOver",
  ["self", "denominator"],
  sl.annotateFunction(function (_self, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _denominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(_self, 1n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(
          _round_1(_asterisk_2(_self, _denominator)),
          _denominator,
        );
      }, []),
    );
  }, ["self", "denominator"]),
  "{ :self :denominator |\n\t\tself.isInteger.if {\n\t\t\tReducedFraction(self, 1L)\n\t\t} {\n\t\t\tFraction(\n\t\t\t\t(self * denominator).round,\n\t\t\t\tdenominator\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Fraction",
  "asFractionOver",
  ["self", "denominator"],
  sl.annotateFunction(function (_self, _denominator) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _denominator";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ReducedFraction_2(_self, 1n);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Fraction_2(
          _round_1(_asterisk_2(_self, _denominator)),
          _denominator,
        );
      }, []),
    );
  }, ["self", "denominator"]),
  "{ :self :denominator |\n\t\tself.isInteger.if {\n\t\t\tReducedFraction(self, 1L)\n\t\t} {\n\t\t\tFraction(\n\t\t\t\t(self * denominator).round,\n\t\t\t\tdenominator\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "Fraction",
  "parseFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_at_2(_self, "numerator"), _at_2(_self, "denominator"));
  }, ["self"]),
  "{ :self |\n\t\tFraction(self['numerator'], self['denominator'])\n\t}",
);
