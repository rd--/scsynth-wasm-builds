sl.addType(
  false,
  "Decimal",
  "Decimal",
  ["Object", "Comparable", "Magnitude"],
  ["fraction", "scale"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Decimal",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Decimal",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asterisk",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _asterisk_2(_fraction_1(_self), _fraction_1(_operand)),
          _plusSign_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isDecimal(operand), { UnsimplifiedDecimal(*(fraction(self), fraction(operand)), +(scale(self), scale(operand))) }, { adaptToDecimalAndApply(operand,self, *) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "plusSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _plusSign_2(_fraction_1(_self), _fraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isDecimal(operand), { UnsimplifiedDecimal(+(fraction(self), fraction(operand)), max(scale(self),scale(operand))) }, { adaptToDecimalAndApply(operand,self, +) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "hyphenMinus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _hyphenMinus_2(_fraction_1(_self), _fraction_1(_operand)),
          _max_2(_scale_1(_self), _scale_1(_operand)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isDecimal(operand), { UnsimplifiedDecimal(-(fraction(self), fraction(operand)), max(scale(self),scale(operand))) }, { adaptToDecimalAndApply(operand,self, -) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "solidus",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>/: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isDecimal_1(_operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnsimplifiedDecimal_2(
              _solidus_2(_fraction_1(_self), _fraction_1(_operand)),
              _max_2(_scale_1(_self), _scale_1(_operand)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToDecimalAndApply_3(_operand, _self, _solidus_2);
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isZero(operand), { error(self,'Decimal>>/: zero divide') }, { if(isDecimal(operand), { UnsimplifiedDecimal(/(fraction(self), fraction(operand)), max(scale(self),scale(operand))) }, { adaptToDecimalAndApply(operand,self, /) }) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "equalsSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_scale_1(_self), _scale_1(_operand)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _m = _circumflexAccent_2(10, _scale_1(_self));
            /* Statements */
            return _equalsSign_2(
              _round_1(_asterisk_2(_asFloat_1(_self), _m)),
              _round_1(_asterisk_2(_asFloat_1(_operand), _m)),
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
  }, ["self", "operand"]),
  "{ :self :operand | if(isDecimal(operand), { &((=(scale(self), scale(operand))), { let m = ^(10, scale(self)); =(round((*(asFloat(self), m))), round((*(asFloat(operand), m)))) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "tilde",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _equalsSign_2(_self, _operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isNumber_1(_operand),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _tilde_2(_asFloat_1(_self), _asFloat_1(_operand));
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
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | |(=(self, operand), { if(isNumber(operand), { ~(asFloat(self), asFloat(operand)) }, { false }) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "lessThanSign",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isDecimal_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_fraction_1(_self), _fraction_1(_operand));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToDecimalAndApply_3(_operand, _self, _lessThanSign_2);
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand | if(isDecimal(operand), { <(fraction(self), fraction(operand)) }, { adaptToDecimalAndApply(operand,self, <) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "circumflexAccent",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
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
        return _unimplementedCase_2(_self, "^");
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | if(isInteger(aNumber), { raisedToInteger(self,aNumber) }, { unimplementedCase(self,'^') }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_abs_1(_fraction_1(_self)), _scale_1(_self));
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(abs(fraction(self)), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToFractionAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, _scale_1(_self)), _self);
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 | aBlock(asDecimal(receiver,scale(self)), self) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToIntegerAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 | aBlock(asDecimal(receiver,0), self) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "adaptToNumberAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_receiver),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asDecimal_2(_receiver, 0), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Decimal>>adaptToNumberAndApply: not integer");
      }, []),
    );
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 | if(isInteger(receiver), { aBlock(asDecimal(receiver,0), self) }, { error(self,'Decimal>>adaptToNumberAndApply: not integer') }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_fraction_1(_self), _scale);
  }, ["self", "scale"]),
  "{ :self :scale | asDecimal(fraction(self),scale) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | asFloat(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fraction_1(_self);
  }, ["self"]),
  "{ :self | fraction(self) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | asInteger(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | asSmallInteger(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asSmallFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asSmallFloat_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | asSmallFloat(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "asLargeInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asLargeInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | asLargeInteger(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "denominator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _denominator_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | denominator(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _fractionalPart_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(fractionalPart(fraction(self)), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _asFraction_1(_integerPart_1(_fraction_1(_self))),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(asFraction(integerPart(fraction(self))), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
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
  "Decimal",
  "Decimal",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | isInteger(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isNegative_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | isNegative(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isNumber",
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
  "Decimal",
  "Decimal",
  "isPowerOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isPowerOfTwo_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | isPowerOfTwo(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_numerator_1(_fraction_1(_self)), 0);
  }, ["self"]),
  "{ :self | =(numerator(fraction(self)), 0) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _negate_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(negate(fraction(self)), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "numerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numerator_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | numerator(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_scale_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSignPlusSign_2(
          _basicPrintString_2(_asLargeInteger_1(_integerPart_1(_self)), 10),
          "D",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _format_2("%%.%D", [
          _if_3(
            _isNegative_1(_fraction_1(_self)),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "-";
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return "";
            }, []),
          ),
          _basicPrintString_2(
            _abs_1(_asLargeInteger_1(_integerPart_1(_self))),
            10,
          ),
          _padRight_3(
            _basicPrintString_2(
              _round_1(
                _asterisk_2(
                  _abs_1(_fraction_1(_fractionalPart_1(_self))),
                  _circumflexAccent_2(10, _scale_1(_self)),
                ),
              ),
              10,
            ),
            [_scale_1(_self)],
            "0",
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(scale(self), 0)), { ++(basicPrintString(asLargeInteger(integerPart(self)),10), 'D') }, { format('%%.%D',[if(isNegative(fraction(self)), { '-' }, { '' }), basicPrintString(abs(asLargeInteger(integerPart(self))),10), padRight(basicPrintString(round((*(abs(fraction(fractionalPart(self))), (^(10, scale(self)))))),10),[scale(self)], '0')]) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "raisedToInteger",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _raisedToInteger_2(_fraction_1(_self), _aNumber),
      _scale_1(_self),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | UnsimplifiedDecimal(raisedToInteger(fraction(self),aNumber), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "reciprocal",
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
        return _error_2(_self, "Decimal>>reciprocal: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _UnsimplifiedDecimal_2(
          _reciprocal_1(_fraction_1(_self)),
          _scale_1(_self),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { error(self,'Decimal>>reciprocal: zero divide') }, { UnsimplifiedDecimal(reciprocal(fraction(self)), scale(self)) }) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(
      _square_1(_fraction_1(_self)),
      _scale_1(_self),
    );
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(square(fraction(self)), scale(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Decimal(%, %)", [
      _storeString_1(_fraction_1(_self)),
      _scale_1(_self),
    ]);
  }, ["self"]),
  "{ :self | format('Decimal(%, %)',[storeString(fraction(self)), scale(self)]) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_fraction_1(_self));
  }, ["self"]),
  "{ :self | truncate(fraction(self)) }",
);

sl.addMethodToExistingType(
  "Decimal",
  "Decimal",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_Fraction_2(0n, 1n), 0);
  }, ["self"]),
  "{ :self | UnsimplifiedDecimal(Fraction(0L, 1L), 0) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_receiver, _asDecimal_2(_self, _scale_1(_receiver)));
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 | aBlock(receiver, asDecimal(self,scale(receiver))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _Decimal_2(_self, _scale);
  }, ["self", "scale"]),
  "{ :self :scale | Decimal(self, scale) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "Decimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
  }, ["self", "scale"]),
  "{ :self :scale | UnsimplifiedDecimal(asDecimalFraction(self,scale), scale) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Decimal",
  "UnsimplifiedDecimal",
  ["fraction", "scale"],
  sl.annotateFunction(function (_fraction, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _fraction, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newDecimal_0(), _fraction, _scale);
  }, ["fraction", "scale"]),
  "{ :fraction :scale | initializeSlots(newDecimal(),fraction, scale) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "adaptToDecimalAndApply",
  ["self", "receiver", "aBlock:/2"],
  sl.annotateFunction(function (_self, _receiver, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _receiver, _aBlock_2";
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
        return _aBlock_2(_receiver, _asDecimal_2(_self, 0));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_asFloat_1(_receiver), _self);
      }, []),
    );
  }, ["self", "receiver", "aBlock:/2"]),
  "{ :self :receiver :aBlock:/2 | if(isInteger(self), { aBlock(receiver, asDecimal(self,0)) }, { aBlock(asFloat(receiver), self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
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
        return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1), _scale);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asDecimal_2(_asDecimalFraction_2(_self, _scale), _scale);
      }, []),
    );
  }, ["self", "scale"]),
  "{ :self :scale | if(isInteger(self), { UnsimplifiedDecimal(Fraction(self, 1), scale) }, { asDecimal(asDecimalFraction(self,scale),scale) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Decimal",
  "asDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  }, ["self"]),
  "{ :self | asDecimal(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self", "scale"],
  sl.annotateFunction(function (_self, _scale) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _scale";
      throw new Error(errorMessage);
    } /* Statements */
    return _UnsimplifiedDecimal_2(_Fraction_2(_self, 1n), _scale);
  }, ["self", "scale"]),
  "{ :self :scale | UnsimplifiedDecimal(Fraction(self, 1L), scale) }",
);

sl.extendTypeOrTraitWithMethod(
  "LargeInteger",
  "Decimal",
  "asDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asDecimal_2(_self, 0);
  }, ["self"]),
  "{ :self | asDecimal(self,0) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "basicParseDecimal",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, ".");
    /* Statements */
    return _caseOf_3(
      _size_1(_parts),
      [
        _hyphenMinusGreaterThanSign_2(
          1,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _UnsimplifiedDecimal_2(
              _asFraction_1(
                _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0),
              ),
              0,
            );
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
            let _sign = _if_3(
              _beginsWith_2(_self, "-"),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return -1;
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return 1;
              }, []),
            );
            let _i = _parseLargeInteger_2(_at_2(_parts, 1), _elseClause_0);
            let _f = _copySignTo_2(
              _sign,
              _parseLargeInteger_2(_at_2(_parts, 2), _elseClause_0),
            );
            let _k = _size_1(_at_2(_parts, 2));
            /* Statements */
            return _UnsimplifiedDecimal_2(
              _plusSign_2(_i, _Fraction_2(_f, _circumflexAccent_2(10, _k))),
              _k,
            );
          }, []),
        ),
      ],
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
  "{ :self :elseClause:/0 | let parts = splitBy(self,'.'); caseOf(size(parts), [->(1, { UnsimplifiedDecimal(asFraction(parseLargeInteger(at(parts, 1),elseClause:/0)), 0) }), ->(2, { let sign = if(beginsWith(self,'-'), { -1 }, { 1 }); let i = parseLargeInteger(at(parts, 1),elseClause:/0); let f = copySignTo(sign,parseLargeInteger(at(parts, 2),elseClause:/0)); let k = size(at(parts, 2)); UnsimplifiedDecimal(+(i, Fraction(f, ^(10, k))), k) })], { elseClause() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _endsWith_2(_self, "D"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicParseDecimal_2(_allButLast_1(_self), _elseClause_0);
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
  "{ :self :elseClause:/0 | if(endsWith(self,'D'), { basicParseDecimal(allButLast(self),elseClause:/0) }, { elseClause() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Decimal",
  "parseDecimal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _endsWith_2(_self, "D"),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicParseDecimal_2(
          _allButLast_1(_self),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "String>>parseDecimal: no D suffix");
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "String>>parseDecimal");
      }, []),
    );
  }, ["self"]),
  "{ :self | if(endsWith(self,'D'), { basicParseDecimal(allButLast(self), { error(self,'String>>parseDecimal: no D suffix') }) }, { error(self,'String>>parseDecimal') }) }",
);
