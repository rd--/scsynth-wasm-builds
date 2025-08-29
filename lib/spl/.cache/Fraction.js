sl.addType(
  false,
  "Fraction",
  "Fraction",
  ["Object", "Magnitude", "Number"],
  ["numerator", "denominator"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
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
            return _adaptToFractionAndApply_3(_anObject, _self, _equalsSign_2);
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
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isNumber(anObject), { if(isFraction(anObject), { &(=(numerator(self), numerator(anObject)), { =(denominator(self), denominator(anObject)) }) }, { adaptToFractionAndApply(anObject,self, =) }) }, { false }) }",
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
  "{ :self :aNumber | if(isFraction(aNumber), { let d1 = gcd(numerator(self),denominator(aNumber)); let d2 = gcd(denominator(self),numerator(aNumber)); let numerator = *((//(numerator(self), d1)), (//(numerator(aNumber), d2))); if((&(=(d2, denominator(self)), { =(d1, denominator(aNumber)) })), { ReducedFraction(numerator, one(numerator)) }, { Fraction(numerator, *((//(denominator(self), d2)), (//(denominator(aNumber), d1)))) }) }, { adaptToFractionAndApply(aNumber,self, *) }) }",
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
  "{ :self :aNumber | if(isScalarInteger(aNumber), { ReducedFraction(+(numerator(self), (*(denominator(self), asLargeInteger(aNumber)))), denominator(self)) }, { if(isFraction(aNumber), { let d = gcd(denominator(self),denominator(aNumber)); let d1 = //(denominator(aNumber), d); let d2 = //(denominator(self), d); let n = +((*(numerator(self), d1)), (*(numerator(aNumber), d2))); d1 := *(d1, d2); d2 := gcd(n,d); n := //(n, d2); d := *(d1, (//(d, d2))); if((=(d, 1)), { ReducedFraction(n, one(n)) }, { ReducedFraction(n, d) }) }, { adaptToFractionAndApply(aNumber,self, +) }) }) }",
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
  "{ :self :aNumber | if(isScalarInteger(aNumber), { ReducedFraction(-(numerator(self), (*(denominator(self), asLargeInteger(aNumber)))), denominator(self)) }, { if(isFraction(aNumber), { +(self, negate(aNumber)) }, { adaptToFractionAndApply(aNumber,self, -) }) }) }",
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
  "{ :self :aNumber | if(isScalarInteger(aNumber), { *(self, ReducedFraction(1, asLargeInteger(aNumber))) }, { if(isFraction(aNumber), { *(self, reciprocal(aNumber)) }, { adaptToFractionAndApply(aNumber,self, /) }) }) }",
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
  "{ :self :aNumber | if(isScalarInteger(aNumber), { raisedToInteger(self,asInteger(aNumber)) }, { if(isFraction(aNumber), { if(isNegative(self), { ^(Complex(asFloat(self), 0), aNumber) }, { raisedToFraction(self,aNumber) }) }, { adaptToFractionAndApply(aNumber,self, ^) }) }) }",
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
  "{ :self :aNumber | if(isFraction(aNumber), { <((*(numerator(self), denominator(aNumber))), (*(numerator(aNumber), denominator(self)))) }, { adaptToFractionAndApply(aNumber,self, <) }) }",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "lessThanSignEqualsSign",
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
        return _lessThanSignEqualsSign_2(
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
        return _adaptToFractionAndApply_3(
          _aNumber,
          _self,
          _lessThanSignEqualsSign_2,
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | if(isFraction(aNumber), { <=((*(numerator(self), denominator(aNumber))), (*(numerator(aNumber), denominator(self)))) }, { adaptToFractionAndApply(aNumber,self, <=) }) }",
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
  "{ :self :anInteger :aBlock:/2 | aBlock(ReducedFraction(anInteger, 1L), self) }",
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
  "{ :self :aNumber :aBlock:/2 | if(isScalarInteger(aNumber), { aBlock(asFraction(aNumber), self) }, { aBlock(aNumber, asFloat(self)) }) }",
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
  "{ :self | /(asFloat(numerator(self)), asFloat(denominator(self))) }",
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
  "{ :self | self }",
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
    return _asInteger_1(_truncate_1(_self));
  }, ["self"]),
  "{ :self | asInteger(truncate(self)) }",
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
    return _truncate_1(_self);
  }, ["self"]),
  "{ :self | truncate(self) }",
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
  "{ :self | asFloat(self) }",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "asList",
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
  "{ :self | [asInteger(numerator(self)), asInteger(denominator(self))] }",
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
  "{ :self :aNumber | let r = /(self, aNumber); &(=(denominator(r), 1), { isPrime(numerator(r)) }) }",
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
  "{ :self | exp(asFloat(self)) }",
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
  "{ :self :aFraction | if(isFraction(aFraction), { let d = gcd(denominator(self),denominator(aFraction)); ReducedFraction(gcd((*(numerator(self), (//(denominator(aFraction), d)))),*(numerator(aFraction), (//(denominator(self), d)))), (*(//(denominator(self), d), denominator(aFraction)))) }, { adaptToFractionAndApply(aFraction,self, lcm:/2) }) }",
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
  "{ :self :operand | isOne(abs(numerator((-(operand, self))))) }",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "isCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.0001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | isCloseToBy(self,aNumber, 0.0001) }",
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
  "{ :self :aNumber :epsilon | isCloseToBy(asFloat(self),asFloat(aNumber), epsilon) }",
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
  "{ :unused | true }",
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
    let __SPL498 = _assertIsOfSize_2(_asList_1(_self), 2);
    let _a = _at_2(__SPL498, 1);
    let _b = _at_2(__SPL498, 2);
    let __SPL499 = _assertIsOfSize_2(_asList_1(_aFraction), 2);
    let _c = _at_2(__SPL499, 1);
    let _d = _at_2(__SPL499, 2);
    /* Statements */
    return _equalsSign_2(
      _hyphenMinus_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
      1,
    );
  }, ["self", "aFraction"]),
  "{ :self :aFraction | let __SPL498 = assertIsOfSize(asList(self), 2); let a = at(__SPL498, 1); let b = at(__SPL498, 2); let __SPL499 = assertIsOfSize(asList(aFraction), 2); let c = at(__SPL499, 1); let d = at(__SPL499, 2); =(-((*(b, c)), (*(a, d))), 1) }",
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
  "{ :self | =(denominator(self), 1) }",
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
  "{ :self | true }",
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
  "{ :self | isNegative(numerator(self)) }",
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
  "{ :self :aFraction | =(abs((-((*(numerator(self), denominator(aFraction))), (*(denominator(self), numerator(aFraction)))))), 1) }",
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
  "{ :self | &(isInteger(self), { isPowerOfTwo(numerator(self)) }) }",
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
  "{ :unused | true }",
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
  "{ :self | &(isInteger(self), { isSmallInteger(numerator(self)) }) }",
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
  "{ :self | &(isSuperparticular(self), { not(isSquareFree(numerator(self))) }) }",
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
  "{ :self | &(>(self, 1), { not(isSuperparticular(self)) }) }",
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
  "{ :self | =(-(numerator(self), 1), denominator(self)) }",
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
  "{ :self :aNumber | =(self, aNumber) }",
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
  "{ :self | isZero(numerator(self)) }",
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
  "{ :self :aFraction | if(isFraction(aFraction), { *(//(self, gcd(self,aFraction)), aFraction) }, { adaptToFractionAndApply(aFraction,self, lcm:/2) }) }",
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
                      let __SPL500 = [
                        _p1,
                        _q1,
                        _plusSign_2(_p0, _asterisk_2(_a, _p1)),
                        _q2,
                        _d,
                        _hyphenMinus_2(_n, _asterisk_2(_a, _d)),
                      ];
                      /* Statements */
                      _p0 = _at_2(__SPL500, 1);
                      _q0 = _at_2(__SPL500, 2);
                      _p1 = _at_2(__SPL500, 3);
                      _q1 = _at_2(__SPL500, 4);
                      _n = _at_2(__SPL500, 5);
                      return _d = _at_2(__SPL500, 6);
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
  "{ :self :maxDenominator | if((<(maxDenominator, 1)), { error(self,'limitDenominator: illegal maxDenominator') }, { if((<=(denominator(self), maxDenominator)), { self }, { let p0 = 0; let q0 = 1; let p1 = 1; let q1 = 0; let n = numerator(self); let d = denominator(self); let continue = true; let k = nil; let bound1 = nil; let bound2 = nil; whileTrue({ continue }, { let a = //(n, d); let q2 = +(q0, (*(a, q1))); if((>(q2, maxDenominator)), { continue := false }, { ({ let __SPL500 = [p1, q1, +(p0, (*(a, p1))), q2, d, -(n, (*(a, d)))]; p0 := at(__SPL500, 1); q0 := at(__SPL500, 2); p1 := at(__SPL500, 3); q1 := at(__SPL500, 4); n := at(__SPL500, 5); d := at(__SPL500, 6) } . ()) }) }); k := //((-(maxDenominator, q0)), q1); bound1 := ReducedFraction(+(p0, (*(k, p1))), +(q0, (*(k, q1)))); bound2 := ReducedFraction(p1, q1); if((<=(abs((-(bound2, self))), abs((-(bound1, self))))), { bound2 }, { bound1 }) }) }) }",
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
  "{ :self | log(asFloat(self)) }",
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
  "{ :self | log2(asFloat(self)) }",
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
  "{ :self | log10(asFloat(self)) }",
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
  "{ :self :aFraction | Fraction(+(numerator(self), numerator(aFraction)), +(denominator(self), denominator(aFraction))) }",
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
  "{ :self | ReducedFraction(negate(numerator(self)), denominator(self)) }",
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
  "{ :self | normalize(copy(self)) }",
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
  "{ :self | if((=(denominator(self), 0)), { error(self,'Fraction>>normalize: zeroDenominatorError') }, { let x = *(numerator(self), sign(denominator(self))); let y = abs(denominator(self)); let d = gcd(x,y); numerator(self, //(x, d)); denominator(self, //(y, d)); self }) }",
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
  "{ :self | ReducedFraction(1L, 1L) }",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "parts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_numerator_1(_self), _denominator_1(_self)];
  }, ["self"]),
  "{ :self | [numerator(self), denominator(self)] }",
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
  "{ :self :aFraction | weightedMediant(self,aFraction, 1, goldenRatio(1)) }",
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
  "{ :self :aFraction | let rootNumerator = truncate(nthRoot(numerator(self),denominator(aFraction))); let rootDenominator = truncate(nthRoot(denominator(self),denominator(aFraction))); let root = Fraction(rootNumerator, rootDenominator); if((=(raisedToInteger(root,denominator(aFraction)), self)), { raisedToInteger(root,numerator(aFraction)) }, { ^(asFloat(self), asFloat(aFraction)) }) }",
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
  "{ :self :anInteger | if(isZero(anInteger), { one(self) }, { if((<(anInteger, 0)), { raisedToInteger(reciprocal(self),negate(anInteger)) }, { ReducedFraction(raisedToInteger(numerator(self),anInteger), raisedToInteger(denominator(self),anInteger)) }) }) }",
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
  "{ :self | if((=(abs(numerator(self)), 1)), { ReducedFraction(*(denominator(self), numerator(self)), one(denominator(self))) }, { Fraction(denominator(self), numerator(self)) }) }",
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
  "{ :self | if((=(denominator(self), 0)), { error(self,'Fraction>>simplify: zeroDenominatorError') }, { let x = *(numerator(self), sign(denominator(self))); let y = abs(denominator(self)); let d = gcd(x,y); numerator(self, //(x, d)); denominator(self, //(y, d)); if((=(denominator(self), 1)), { self }, { self }) }) }",
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
  "{ :self | simplify(copy(self)) }",
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
  "{ :self | sqrt(asFloat(self)) }",
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
  "{ :self | stringIntercalate([basicPrintString(numerator(self),10), basicPrintString(denominator(self),10)],'/') }",
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
  "{ :self | quotient(numerator(self),denominator(self)) }",
);

sl.addMethodToExistingType(
  "Fraction",
  "Fraction",
  "unicode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _indexOf_2(_unicodeFractionsTable_1(_system), _self);
  }, ["self"]),
  "{ :self | indexOf(unicodeFractionsTable(system),self) }",
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
  "{ :self :aFraction :m :n | let a = numerator(self); let b = denominator(self); let c = numerator(aFraction); let d = denominator(aFraction); if((&&(isFraction(m), isFraction(n))), { /((+((*(m, a)), (*(n, c)))), (+((*(m, b)), (*(n, d))))) }, { /((+((*(m, asFloat(a))), (*(n, asFloat(c))))), (+((*(m, asFloat(b))), (*(n, asFloat(d)))))) }) }",
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
  "{ :self | ReducedFraction(0L, 1L) }",
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
  "{ :self | cached(self, 'unicodeFractionsTable', { Record([['⅒', Fraction(1L, 10L)], ['⅑', Fraction(1L, 9L)], ['⅛', Fraction(1L, 8L)], ['⅐', Fraction(1L, 7L)], ['⅙', Fraction(1L, 6L)], ['⅕', Fraction(1L, 5L)], ['¼', Fraction(1L, 4L)], ['⅓', Fraction(1L, 3L)], ['⅜', Fraction(3L, 8L)], ['⅖', Fraction(2L, 5L)], ['½', Fraction(1L, 2L)], ['⅗', Fraction(3L, 5L)], ['⅝', Fraction(5L, 8L)], ['⅔', Fraction(2L, 3L)], ['¾', Fraction(3L, 4L)], ['⅘', Fraction(4L, 5L)], ['⅚', Fraction(5L, 6L)], ['⅞', Fraction(7L, 8L)]]) }) }",
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
  "{ :self :aFraction :aBlock:/2 | aBlock(aFraction, Fraction(self, one(self))) }",
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
  "{ :numerator :denominator | if(isScalarInteger(denominator), { if((=(denominator, 0)), { error('@Integer>>ReducedFraction: zeroDenominatorError') }, { initializeSlots(newFraction(),asLargeInteger(numerator), asLargeInteger(denominator)) }) }, { adaptToNumberAndApply(denominator,numerator, Fraction:/2) }) }",
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
  "{ :numerator :denominator | if(isScalarInteger(denominator), { simplify(ReducedFraction(asLargeInteger(numerator), asLargeInteger(denominator))) }, { adaptToNumberAndApply(denominator,numerator, Fraction:/2) }) }",
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
  "{ :numerator :denominator | Fraction(numerator, denominator) }",
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
  "{ :self :aFraction :aBlock:/2 | collect(self, { :each | aBlock(aFraction, each) }) }",
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
  "{ :self | if((=(size(self), 2)), { Fraction(at(self, 1), at(self, 2)) }, { error(self,'List>>Fraction: invalid size') }) }",
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
  "{ :self :aFraction :aBlock:/2 | if(isInteger(self), { aBlock(aFraction, Fraction(self, one(self))) }, { aBlock(asSmallFloat(aFraction), self) }) }",
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
  "{ :self :epsilon | rationalize(self,epsilon) }",
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
  "{ :self | asFraction(self,1E-5) }",
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
  "{ :self :epsilon | if(isInteger(self), { ReducedFraction(self, 1L) }, { rationalize(self,epsilon) }) }",
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
  "{ :self :epsilon | let c = continuedFraction(abs(self),16); let l = semiconvergents(c,epsilon); valueWithReturn({ :return:/1 | do(l, { :r | ifTrue((<(abs((-(self, r))), epsilon)), { return(copySignTo(self,r)) }) }); copySignTo(self,last(l)) }) }",
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
  "{ :self | Fraction(self, 1L) }",
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
  "{ :self | matchesRegularExpression(self,'^[-]?[0-9]+/[0-9]+$') }",
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
  "{ :self :separator :elseClause:/0 | if(includesSubstring(self,separator), { let parts = splitBy(self,separator); if((=(size(parts), 2)), { Fraction(parseLargeInteger(at(parts, 1),elseClause:/0), parseLargeInteger(at(parts, 2),elseClause:/0)) }, { elseClause() }) }, { if(isDecimalIntegerString(self), { ReducedFraction(parseLargeInteger(self), 1L) }, { elseClause() }) }) }",
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
  "{ :self :elseClause:/0 | parseFractionSeparatedBy(self,'/', elseClause:/0) }",
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
  "{ :self | parseFraction(self, { error(self,'parseFraction: parse failed') }) }",
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
    return _asFractionOver_2(_self, _circumflexAccent_2(10, _places));
  }, ["self", "places"]),
  "{ :self :places | asFractionOver(self,^(10, places)) }",
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
    return _asFractionOver_2(_self, _circumflexAccent_2(10, _places));
  }, ["self", "places"]),
  "{ :self :places | asFractionOver(self,^(10, places)) }",
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
  "{ :self :denominator | if(isInteger(self), { ReducedFraction(self, 1L) }, { Fraction(round((*(self, denominator))), denominator) }) }",
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
  "{ :self :denominator | if(isInteger(self), { ReducedFraction(self, 1L) }, { Fraction(round((*(self, denominator))), denominator) }) }",
);
