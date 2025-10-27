sl.addTrait("Number", "Number");

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "plusSign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _conjugate_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.conjugate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asterisk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sign_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.sign\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.negate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "solidus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reciprocal_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.reciprocal\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "circumflexAccent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_e_1(1), _self);
  }, ["self"]),
  "{ :self |\n\t\t1.e ^ self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "exclamationMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _factorialOrGamma_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.factorialOrGamma\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "solidusSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotient_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotient(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reverseSolidusReverseSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainder_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.remainder(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "percentSign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_solidusSolidus_2(_self, _aNumber), _aNumber),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself - (self // aNumber * aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reverseSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.Fraction(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "tilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseTo_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "exclamationMarkTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isCloseTo_2(_self, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseTo(aNumber).not\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "lessThanSignTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _lessThanSign_2(_self, _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseTo_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself < aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "greaterThanSignTilde",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _greaterThanSign_2(_self, _aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseTo_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself > aNumber | {\n\t\t\tself.isCloseTo(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asteriskPlusSign",
  ["self", "mul", "add"],
  sl.annotateFunction(function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  }, ["self", "mul", "add"]),
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
        return _negate_1(_self);
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
  }, ["self"]),
  "{ :self |\n\t\tself.isNegative.if {\n\t\t\tself.negate\n\t\t} {\n\t\t\tself\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "absArg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _absArg_1(_j_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\tself.j(0).absArg\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _abs = _abs_1(_self);
    /* Statements */
    return _asterisk_2(_abs, _abs);
  }, ["self"]),
  "{ :self |\n\t\tlet abs = self.abs;\n\t\tabs * abs\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "adaptToCollectionAndApply",
  ["self", "aCollection", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aCollection, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aCollection, _aBlock_2";
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
        return _aBlock_2(_each, _self);
      }, ["each"]),
    );
  }, ["self", "aCollection", "aBlock:/2"]),
  "{ :self :aCollection :aBlock:/2 |\n\t\taCollection.collect { :each |\n\t\t\taBlock(each, self)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arcMinute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.0002908882086657216);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.0002908882086657216\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arcSecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.00000484813681109536);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.00000484813681109536\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "angleVector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_cos_1(_self), _sin_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.cos, self.sin]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arg_1(_j_2(_self, 0));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t0\n\t\t} {\n\t\t\tself.j(0).arg\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "arithmeticGeometricMean",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _self;
    let _b = _aNumber;
    /* Statements */
    _whileFalse_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_a, _b);
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
          let __SplVar1 = [
            _asterisk_2(0.5, _plusSign_2(_a, _b)),
            _sqrt_1(_asterisk_2(_a, _b)),
          ];
          /* Statements */
          _a = _at_2(__SplVar1, 1);
          return _b = _at_2(__SplVar1, 2);
        }, [])());
      }, []),
    );
    return _a;
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet a = self;\n\t\tlet b = aNumber;\n\t\t{\n\t\t\ta.isVeryCloseTo(b)\n\t\t}.whileFalse {\n\t\t\t[a, b] := [0.5 * (a + b), (a * b).sqrt]\n\t\t};\n\t\ta\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "@Number>>asInteger");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('@Number>>asInteger')\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asNumber",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "asStringWithCommas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.toLocaleString("en-US");
  }, ["self"]),
  "{ :self |\n\t\t<primitive: return _self.toLocaleString('en-US');>\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "barronCurve",
  ["s", "t"],
  sl.annotateFunction(function (_s, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _s, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _epsilon = _smallFloatEpsilon_1(1);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, _t),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(_t, _x),
            _plusSign_2(
              _plusSign_2(_x, _asterisk_2(_s, _hyphenMinus_2(_t, _x))),
              _epsilon,
            ),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _solidus_2(
              _asterisk_2(_hyphenMinus_2(1, _t), _hyphenMinus_2(_x, 1)),
              _plusSign_2(
                _hyphenMinus_2(
                  _hyphenMinus_2(1, _x),
                  _asterisk_2(_s, _hyphenMinus_2(_t, _x)),
                ),
                _epsilon,
              ),
            ),
            1,
          );
        }, []),
      );
    }, ["x"]);
  }, ["s", "t"]),
  "{ :s :t |\n\t\tlet epsilon = 1.smallFloatEpsilon;\n\t\t{ :x |\n\t\t\t(x < t).if {\n\t\t\t\t(t * x) / (x + (s * (t - x)) + epsilon)\n\t\t\t} {\n\t\t\t\t((1 - t) * (x - 1)) / (1 - x - (s * (t - x)) + epsilon) + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "basicPlus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1(
          _plusSignPlusSign_2(
            "Number>>basicPlus: operand not a number",
            _aNumber,
          ),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself + aNumber\n\t\t} {\n\t\t\t('Number>>basicPlus: operand not a number' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "basicTimes",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1(
          _plusSignPlusSign_2(
            "Number>>basicTimes: operand not a number: ",
            _aNumber,
          ),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\tself * aNumber\n\t\t} {\n\t\t\t('Number>>basicTimes: operand not a number: ' ++ aNumber).error\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _truncation = _truncate_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _truncation;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, _truncation),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _truncation;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_truncation, 1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet truncation = self.truncate;\n\t\t(self <= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation + 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "clamp",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Statements */
    return _max_2(_low, _min_2(_self, _high));
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlow.max(self.min(high))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "concisePrintString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _printString_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.printString\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "continuedFraction",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _i = _floor_1(_self);
    let _f = _hyphenMinus_2(_self, _i);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _greaterThanSign_2(_limit, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_isVeryCloseTo_2(_f, 0));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _i);
        _f = _solidus_2(1, _f);
        _i = _floor_1(_f);
        _f = _hyphenMinus_2(_f, _i);
        return _limit = _hyphenMinus_2(_limit, 1);
      }, []),
    );
    _add_2(_answer, _i);
    return _answer;
  }, ["self", "limit"]),
  "{ :self :limit |\n\t\tlet answer = [];\n\t\tlet i = self.floor;\n\t\tlet f = self - i;\n\t\t{\n\t\t\t(limit > 1) & {\n\t\t\t\tf.isVeryCloseTo(0).not\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(i);\n\t\t\tf := 1 / f;\n\t\t\ti := f.floor;\n\t\t\tf := f - i;\n\t\t\tlimit := limit - 1\n\t\t};\n\t\tanswer.add(i);\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "continuedFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _continuedFraction_2(_self, 24);
  }, ["self"]),
  "{ :self |\n\t\tself.continuedFraction(24)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "copySignTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _signBit_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negate_1(_abs_1(_aNumber));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _abs_1(_aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.signBit.if {\n\t\t\taNumber.abs.negate\n\t\t} {\n\t\t\taNumber.abs\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_self, _self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself * self * self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "decrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself - 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "degreesToRadians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.01745329251994329547);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.01745329251994329547 /* 1/180.pi */\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracComb",
  ["x", "z"],
  sl.annotateFunction(function (_x, _z) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isInteger_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _z;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "z"]),
  "{ :x :z |\n\t\tx.isInteger.if {\n\t\t\tz\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracComb",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _diracComb_2(_x, Infinity);
  }, ["x"]),
  "{ :x |\n\t\tx.diracComb(Infinity)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracDelta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
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
        return _aNumber;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isZero.if {\n\t\t\taNumber\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "diracDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _diracDelta_2(_self, Infinity);
  }, ["self"]),
  "{ :self |\n\t\tself.diracDelta(Infinity)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "divisible",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_percentSign_2(_self, _aNumber), 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_aNumber, _self, _divisible_2);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isNumber.if {\n\t\t\t(self % aNumber).isVeryCloseTo(0)\n\t\t} {\n\t\t\taNumber.adaptToNumberAndApply(self, divisible:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "divisorSigma",
  ["k", "n"],
  sl.annotateFunction(function (_k, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _k, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_k, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _product_1(_plusSign_2(_values_1(_factorInteger_1(_n)), 1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_1(_circumflexAccent_2(_divisors_1(_n), _k));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_n, _k, _divisorSigma_2);
      }, []),
    );
  }, ["k", "n"]),
  "{ :k :n |\n\t\tn.isNumber.if {\n\t\t\t(k = 0).if {\n\t\t\t\t(n.factorInteger.values + 1).product\n\t\t\t} {\n\t\t\t\t(n.divisors ^ k).sum\n\t\t\t}\n\t\t} {\n\t\t\tn.adaptToNumberAndApply(k, divisorSigma:/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "downToDo",
  ["self", "anInteger", "aBlock:/1"],
  sl.annotateFunction(function (_self, _anInteger, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anInteger, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _do_2(_Range_3(_self, _anInteger, -1), _aBlock_1);
  }, ["self", "anInteger", "aBlock:/1"]),
  "{ :self :anInteger :aBlock:/1 |\n\t\tRange(self, anInteger, -1).do(aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "double",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself * 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "e",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _circumflexAccent_2(10, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself * (10 ^ aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "epanechnikovKernel",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(0.75, _hyphenMinus_2(1, _asterisk_2(_u, _u)));
  }, ["u"]),
  "{ :u |\n\t\t0.75 * (1 - (u * u))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "factorialOrGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNonNegativeInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _factorial_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_plusSign_2(1, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNonNegativeInteger.if {\n\t\t\tself.factorial\n\t\t} {\n\t\t\t(1 + self).gamma\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floor",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _ceiling_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_hyphenMinus_2(_self, _x)), _epsilon),
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
        return _floor_1(_self);
      }, []),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tlet x = self.ceiling;\n\t\t((self - x).abs < epsilon).if {\n\t\t\tx\n\t\t} {\n\t\t\tself.floor\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _truncation = _truncate_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _truncation;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_self, _truncation),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _truncation;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_truncation, 1);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet truncation = self.truncate;\n\t\t(self >= 0).if {\n\t\t\ttruncation\n\t\t} {\n\t\t\t(self = truncation).if {\n\t\t\t\ttruncation\n\t\t\t} {\n\t\t\t\ttruncation - 1\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "floorLog",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_log_2(_self, _radix));
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.log(radix).floor\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "fold",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _twiceRange = _plusSign_2(_range, _range);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _twiceRange);
    /* Statements */
    _ifTrue_2(
      _greaterThanSign_2(_z, _range),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _z = _hyphenMinus_2(_twiceRange, _z);
      }, []),
    );
    return _plusSign_2(_low, _z);
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet twiceRange = range + range;\n\t\tlet z = (self - low) % twiceRange;\n\t\t(z > range).ifTrue {\n\t\t\tz := twiceRange - z\n\t\t};\n\t\tlow + z\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_self, _integerPart_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself - self.integerPart\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "gaussianKernel",
  ["sigma"],
  sl.annotateFunction(function (_sigma) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(1, _asterisk_2(_sqrt_1(_pi_1(2)), _sigma));
    let _sigmaSquared = _asterisk_2(_sigma, _sigma);
    /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _m,
        _exp_1(
          _negate_1(_solidus_2(_square_1(_u), _asterisk_2(2, _sigmaSquared))),
        ),
      );
    }, ["u"]);
  }, ["sigma"]),
  "{ :sigma |\n\t\tlet m = 1 / (2.pi.sqrt * sigma);\n\t\tlet sigmaSquared = sigma * sigma;\n\t\t{ :u |\n\t\t\tm * (u.square / (2 * sigmaSquared)).negate.exp\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "gompertzFunction",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _a,
        _exp_1(
          _asterisk_2(_exp_1(_asterisk_2(_negate_1(_c), _t)), _negate_1(_b)),
        ),
      );
    }, ["t"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\t{ :t |\n\t\t\ta * ((c.negate * t).exp * b.negate).exp\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "halve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisideLambda",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_x), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_x, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _x);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(1, _x);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs < 1).if {\n\t\t\t(x > 0).if {\n\t\t\t\t1 - x\n\t\t\t} {\n\t\t\t\t1 + x\n\t\t\t}\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisidePi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_lessThanSignEqualsSign_2(_abs_1(_self), 0.5));
  }, ["self"]),
  "{ :self |\n\t\t(self.abs <= 0.5).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "heavisideTheta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
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
        return _if_3(
          _greaterThanSign_2(_self, 0),
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
            return 0.5;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self < 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self > 0).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\t0.5\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _zero_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "increment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself + 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "infinity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, Infinity);
  }, ["self"]),
  "{ :self |\n\t\tself * Infinity\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.truncate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErf",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_abs_1(_x), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(Infinity, _sign_1(_x));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = [0.886226899, -1.645349621, 0.914624893, -0.140543331];
        let _b = [1, -2.118377725, 1.442710462, -0.329097515, 0.012229801];
        let _c = [-1.970840454, -1.62490649, 3.429567803, 1.641345311];
        let _d = [1, 3.543889200, 1.637067800];
        let _z = _asterisk_2(_sign_1(_x), _x);
        let _r = null;
        /* Statements */
        _if_3(
          _lessThanSignEqualsSign_2(_z, 0.7),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x2 = _asterisk_2(_z, _z);
            /* Statements */
            _r = _asterisk_2(
              _z,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(
                    _asterisk_2(
                      _plusSign_2(_asterisk_2(_at_2(_a, 4), _x2), _at_2(_a, 3)),
                      _x2,
                    ),
                    _at_2(_a, 2),
                  ),
                  _x2,
                ),
                _at_2(_a, 1),
              ),
            );
            return _r = _solidus_2(
              _r,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(
                    _asterisk_2(
                      _plusSign_2(
                        _asterisk_2(
                          _plusSign_2(
                            _asterisk_2(_at_2(_b, 5), _x2),
                            _at_2(_b, 4),
                          ),
                          _x2,
                        ),
                        _at_2(_b, 3),
                      ),
                      _x2,
                    ),
                    _at_2(_b, 2),
                  ),
                  _x2,
                ),
                _at_2(_b, 1),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _y = _sqrt_1(
              _negate_1(_log_1(_solidus_2(_hyphenMinus_2(1, _z), 2))),
            );
            /* Statements */
            _r = _plusSign_2(
              _asterisk_2(
                _plusSign_2(
                  _asterisk_2(
                    _plusSign_2(_asterisk_2(_at_2(_c, 4), _y), _at_2(_c, 3)),
                    _y,
                  ),
                  _at_2(_c, 2),
                ),
                _y,
              ),
              _at_2(_c, 1),
            );
            return _r = _solidus_2(
              _r,
              _plusSign_2(
                _asterisk_2(
                  _plusSign_2(_asterisk_2(_at_2(_d, 3), _y), _at_2(_d, 2)),
                  _y,
                ),
                _at_2(_d, 1),
              ),
            );
          }, []),
        );
        _r = _asterisk_2(_r, _sign_1(_x));
        _z = _asterisk_2(_z, _sign_1(_x));
        _r = _hyphenMinus_2(
          _r,
          _solidus_2(
            _hyphenMinus_2(_erf_1(_r), _z),
            _asterisk_2(
              _solidus_2(2, _sqrt_1(_pi_1(1))),
              _exp_1(_asterisk_2(_negate_1(_r), _r)),
            ),
          ),
        );
        _r = _hyphenMinus_2(
          _r,
          _solidus_2(
            _hyphenMinus_2(_erf_1(_r), _z),
            _asterisk_2(
              _solidus_2(2, _sqrt_1(_pi_1(1))),
              _exp_1(_asterisk_2(_negate_1(_r), _r)),
            ),
          ),
        );
        return _r;
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs >= 1).if {\n\t\t\tInfinity * x.sign\n\t\t} {\n\t\t\tlet a = [0.886226899 -1.645349621 0.914624893 -0.140543331];\n\t\t\tlet b = [1 -2.118377725 1.442710462 -0.329097515 0.012229801];\n\t\t\tlet c = [-1.970840454 -1.62490649 3.429567803 1.641345311];\n\t\t\tlet d = [1 3.543889200 1.637067800];\n\t\t\tlet z = x.sign * x;\n\t\t\tlet r = nil;\n\t\t\t(z <= 0.7).if {\n\t\t\t\tlet x2 = z * z;\n\t\t\t\tr := z * (((a[4] * x2 + a[3]) * x2 + a[2]) * x2 + a[1]);\n\t\t\t\tr := r / ((((b[5] * x2 + b[4]) * x2 + b[3]) * x2 + b[2]) * x2 + b[1])\n\t\t\t} {\n\t\t\t\tlet y = ((1 - z) / 2).log.negate.sqrt;\n\t\t\t\tr := ((c[4] * y + c[3]) * y + c[2]) * y + c[1];\n\t\t\t\tr := r / ((d[3] * y + d[2]) * y + d[1])\n\t\t\t};\n\t\t\tr := r * x.sign;\n\t\t\tz := z * x.sign;\n\t\t\tr := r - ((r.erf - z) / (2 / 1.pi.sqrt * (r.negate * r).exp));\n\t\t\tr := r - ((r.erf - z) / (2 / 1.pi.sqrt * (r.negate * r).exp));\n\t\t\tr\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErfc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _hyphenMinus_1(
        _standardNormalDistributionInverseCdf_1(_solidus_2(_self, 2)),
      ),
      _sqrt_1(2),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self / 2).standardNormalDistributionInverseCdf.- / 2.sqrt\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "inverseErfWinitzki",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = 0.147;
    let _b = _solidus_2(2, _pi_1(_a));
    let _c = _log_1(_hyphenMinus_2(1, _square_1(_x)));
    /* Statements */
    return _asterisk_2(
      _sqrt_1(
        _hyphenMinus_2(
          _sqrt_1(
            _hyphenMinus_2(
              _square_1(_plusSign_2(_b, _solidus_2(_c, 2))),
              _solidus_2(_c, _a),
            ),
          ),
          _plusSign_2(_b, _solidus_2(_c, 2)),
        ),
      ),
      _sign_1(_x),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet a = 0.147;\n\t\tlet b = (2 / a.pi);\n\t\tlet c = (1 - x.square).log;\n\t\t(((b + (c / 2)).square - (c / a)).sqrt - (b + (c / 2))).sqrt * x.sign\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isCloseToBy",
  ["self", "aNumber", "epsilon"],
  sl.annotateFunction(function (_self, _aNumber, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "isCloseToBy");
  }, ["self", "aNumber", "epsilon"]),
  "{ :self :aNumber :epsilon |\n\t\tself.typeResponsibility('isCloseToBy')\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
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
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.0001)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isHalfInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOne_1(_asterisk_2(_abs_1(_fractionalPart_1(_self)), 2));
  }, ["self"]),
  "{ :self |\n\t\t(self.fractionalPart.abs * 2).isOne\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself < self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNegativeZero",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSignEqualsSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself >= self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonNegativeInteger",
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
        return _isNonNegative_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isInteger & {\n\t\t\tself.isNonNegative\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself <= self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNonZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMarkEqualsSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself != 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isNumber",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself > self.zero\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isOne",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself = 1\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isScalar",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isVeryCloseTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _aNumber, 0.000000000001);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isCloseToBy(aNumber, 0.000000000001)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself = 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "kroneckerDelta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_equalsSign_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\t(self = 0).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "kroneckerDelta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, _aNumber),
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
        return 0;
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self = aNumber).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log2_1(_asSmallFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asSmallFloat.log2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logarithmicIntegralRamanujan",
  ["self", "limit"],
  sl.annotateFunction(function (_self, _limit) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _limit";
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
        return _self;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(_eulerGamma_1(1), _log_1(_abs_1(_log_1(_self)))),
          _sum_1(
            _collect_2(
              _Span_3(1, _limit, 1),
              sl.annotateFunction(function (_k) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _k";
                  throw new Error(errorMessage);
                } /* Statements */
                return _solidus_2(
                  _circumflexAccent_2(_log_1(_self), _k),
                  _asterisk_2(_factorial_1(_k), _k),
                );
              }, ["k"]),
            ),
          ),
        );
      }, []),
    );
  }, ["self", "limit"]),
  "{ :self :limit |\n\t\tself.isZero.if {\n\t\t\tself\n\t\t} {\n\t\t\t1.eulerGamma + (self.log.abs.log) + 1:limit.collect { :k |\n\t\t\t\t(self.log ^ k) / (k.factorial * k)\n\t\t\t}.sum\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logarithmicIntegral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _logarithmicIntegralRamanujan_2(_self, 9);
  }, ["self"]),
  "{ :self |\n\t\tself.logarithmicIntegralRamanujan(9)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logScale",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _asFloat_1(_self);
    /* Statements */
    return _asterisk_2(
      _sign_1(_x),
      _log10_1(_plusSign_2(1, _abs_1(_solidus_2(_x, _c)))),
    );
  }, ["self", "c"]),
  "{ :self :c |\n\t\tlet x = self.asFloat;\n\t\tx.sign * (1 + (x / c).abs).log10\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logScale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _solidus_2(1, _log_1(10));
    /* Statements */
    return _logScale_2(_self, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet c = 1 / 10.log;\n\t\tself.logScale(c)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logisticSigmoid",
  ["l", "k", "x0"],
  sl.annotateFunction(function (_l, _k, _x0) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _l, _k, _x0";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_z) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _z";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _l,
        _plusSign_2(
          1,
          _exp_1(_asterisk_2(_hyphenMinus_1(_k), _hyphenMinus_2(_z, _x0))),
        ),
      );
    }, ["z"]);
  }, ["l", "k", "x0"]),
  "{ :l :k :x0 |\n\t\t{ :z |\n\t\t\tl / (1 + (k.- * (z - x0)).exp)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logisticSigmoid",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _plusSign_2(1, _exp_1(_hyphenMinus_1(_z))));
  }, ["z"]),
  "{ :z |\n\t\t1 / (1 + z.-.exp)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "logit",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_solidus_2(_x, _hyphenMinus_2(1, _x)));
  }, ["x"]),
  "{ :x |\n\t\t(x / (1 - x)).log\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "metallicMean",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _plusSign_2(_n, _sqrt_1(_plusSign_2(_square_1(_n), 4))),
      2,
    );
  }, ["n"]),
  "{ :n |\n\t\t(n + (n.square + 4).sqrt) / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mixedFractionParts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _i = _integerPart_1(_self);
    /* Statements */
    return [_i, _hyphenMinus_2(_self, _i)];
  }, ["self"]),
  "{ :self |\n\t\tlet i = self.integerPart;\n\t\t[i, self - i]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mod",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_m, _asterisk_2(_n, _quotient_2(_m, _n)));
  }, ["m", "n"]),
  "{ :m :n |\n\t\tm - (n * m.quotient(n))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "mod",
  ["m", "n", "d"],
  sl.annotateFunction(function (_m, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _n, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _m,
      _asterisk_2(_n, _floor_1(_solidus_2(_hyphenMinus_2(_m, _d), _n))),
    );
  }, ["m", "n", "d"]),
  "{ :m :n :d |\n\t\tm - (n * ((m - d) / n).floor)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "multiplyAdd",
  ["i", "j", "k"],
  sl.annotateFunction(function (_i, _j, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _i, _j, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_i, _j), _k);
  }, ["i", "j", "k"]),
  "{ :i :j :k |\n\t\t(i * j) + k\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberAbove",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _niceNumberBy_2(
      _self,
      sl.annotateFunction(function (_l, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _l, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_l, _bisect_2(_l, _n));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.niceNumberBy { :l :n |\n\t\t\tl[l.bisect(n)]\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberBy",
  ["self", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _self;
    let _m = _circumflexAccent_2(10, _negate_1(_floor_1(_log10_1(_abs_1(_n)))));
    let _steps = [1, 1.5, 2, 2.5, 5, 7.5, 10];
    let _z = _aBlock_2(_steps, _asterisk_2(_n, _m));
    /* Statements */
    return _solidus_2(_z, _m);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 |\n\t\tlet n = self;\n\t\tlet m = 10 ^ n.abs.log10.floor.negate;\n\t\tlet steps = [1 1.5 2 2.5 5 7.5 10];\n\t\tlet z = steps.aBlock(n * m);\n\t\tz / m\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "niceNumberNear",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _niceNumberBy_2(
      _self,
      sl.annotateFunction(function (_l, _n) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _l, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_nearest_2(_l, _n));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.niceNumberBy { :l :n |\n\t\t\tl.nearest(n).first\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "numberDecompose",
  ["self", "u"],
  sl.annotateFunction(function (_self, _u) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _u";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_1(_numberDecompose_2(_hyphenMinus_1(_self), _u));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = [];
        let _x = _self;
        let _k = _size_1(_u);
        /* Statements */
        _withIndexDo_2(
          _u,
          sl.annotateFunction(function (_each, _index) {
            /* ArityCheck */
            if (arguments.length !== 2) {
              const errorMessage = "Arity: expected 2, _each, _index";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_index, _k),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_answer, _solidus_2(_x, _each));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _n = _floor_1(_solidus_2(_x, _each));
                /* Statements */
                _x = _hyphenMinus_2(_x, _asterisk_2(_n, _each));
                return _add_2(_answer, _n);
              }, []),
            );
          }, ["each", "index"]),
        );
        return _answer;
      }, []),
    );
  }, ["self", "u"]),
  "{ :self :u |\n\t\t(self < 0).if {\n\t\t\tself.-.numberDecompose(u).-\n\t\t} {\n\t\t\tlet answer = [];\n\t\t\tlet x = self;\n\t\t\tlet k = u.size;\n\t\t\tu.withIndexDo { :each :index |\n\t\t\t\t(index = k).if {\n\t\t\t\t\tanswer.add(x / each)\n\t\t\t\t} {\n\t\t\t\t\tlet n = (x / each).floor;\n\t\t\t\t\tx := x - (n * each);\n\t\t\t\t\tanswer.add(n)\n\t\t\t\t}\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinBiasFunction",
  ["b", "x"],
  sl.annotateFunction(function (_b, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_perlinBiasFunction_1(_b), _x);
  }, ["b", "x"]),
  "{ :b :x |\n\t\tb.perlinBiasFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinBiasFunction",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _solidus_2(_log_1(_b), _log_1(0.5));
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _circumflexAccent_2(_x, _p);
    }, ["x"]);
  }, ["b"]),
  "{ :b |\n\t\tlet p = b.log / 0.5.log;\n\t\t{ :x |\n\t\t\tx ^ p\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinGainFunction",
  ["g", "x"],
  sl.annotateFunction(function (_g, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_perlinGainFunction_1(_g), _x);
  }, ["g", "x"]),
  "{ :g :x |\n\t\tg.perlinGainFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perlinGainFunction",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _hyphenMinus_2(1, _g)), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _q = _hyphenMinus_2(1, _asterisk_2(2, _x));
      /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _plusSign_2(_asterisk_2(_p, _q), 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            1,
            _solidus_2(
              _hyphenMinus_2(2, _asterisk_2(2, _x)),
              _asterisk_2(
                2,
                _plusSign_2(_asterisk_2(_p, _hyphenMinus_1(_q)), 1),
              ),
            ),
          );
        }, []),
      );
    }, ["x"]);
  }, ["g"]),
  "{ :g |\n\t\tlet p = (1 / (1 - g)) - 2;\n\t\t{ :x |\n\t\t\tlet q = 1 - (2 * x);\n\t\t\t(x < 0.5).if {\n\t\t\t\tx / ((p * q) + 1)\n\t\t\t} {\n\t\t\t\t1 - ((2 - (2 * x)) / (2 * ((p * q.-) + 1)))\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "perrinFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _rho = _plasticRatio_1(1);
    let _theta = _arcCos_1(
      _solidus_2(_hyphenMinus_1(_sqrt_1(_circumflexAccent_2(_rho, 3))), 2),
    );
    /* Statements */
    return _plusSign_2(
      _circumflexAccent_2(_rho, _n),
      _asterisk_2(
        _asterisk_2(2, _cos_1(_asterisk_2(_n, _theta))),
        _sqrt_1(_circumflexAccent_2(_rho, _hyphenMinus_1(_n))),
      ),
    );
  }, ["n"]),
  "{ :n |\n\t\tlet rho = 1.plasticRatio;\n\t\tlet theta = ((rho ^ 3).sqrt.- / 2).arcCos;\n\t\t(rho ^ n) + (2 * (n * theta).cos * (rho ^ n.-).sqrt)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "plancksRadiationFunction",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_x, 0),
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
        return _asterisk_2(
          _solidus_2(15, _circumflexAccent_2(_pi_1(1), 4)),
          _solidus_2(
            1,
            _asterisk_2(
              _circumflexAccent_2(_x, 5),
              _hyphenMinus_2(
                _circumflexAccent_2(_e_1(1), _solidus_2(1, _x)),
                1,
              ),
            ),
          ),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x <= 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(15 / (1.pi ^ 4)) * (1 / ((x ^ 5) * ((1.e ^ (1 / x)) - 1)))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLawFrequency",
  ["nu", "t"],
  sl.annotateFunction(function (_nu, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nu, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _speedOfLight_1(1);
    let _h = _planckConstant_1(1);
    let _k = _boltzmannConstant_1(1);
    /* Statements */
    return _asterisk_2(
      _solidus_2(_asterisk_2(_asterisk_2(2, _h), _cube_1(_nu)), _square_1(_c)),
      _solidus_2(
        1,
        _hyphenMinus_2(
          _exp_1(_solidus_2(_asterisk_2(_h, _nu), _asterisk_2(_k, _t))),
          1,
        ),
      ),
    );
  }, ["nu", "t"]),
  "{ :nu :t |\n\t\tlet c = 1.speedOfLight;\n\t\tlet h = 1.planckConstant;\n\t\tlet k = 1.boltzmannConstant;\n\t\t((2 * h * nu.cube) / (c.square)) * (1 / (((h * nu) / (k * t)).exp - 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLawWavelength",
  ["lambda", "t"],
  sl.annotateFunction(function (_lambda, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _lambda, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _speedOfLight_1(1);
    let _h = _planckConstant_1(1);
    let _k = _boltzmannConstant_1(1);
    /* Statements */
    return _asterisk_2(
      _solidus_2(
        _asterisk_2(_asterisk_2(2, _h), _square_1(_c)),
        _circumflexAccent_2(_lambda, 5),
      ),
      _solidus_2(
        1,
        _hyphenMinus_2(
          _exp_1(
            _solidus_2(
              _asterisk_2(_h, _c),
              _asterisk_2(_asterisk_2(_lambda, _k), _t),
            ),
          ),
          1,
        ),
      ),
    );
  }, ["lambda", "t"]),
  "{ :lambda :t |\n\t\tlet c = 1.speedOfLight;\n\t\tlet h = 1.planckConstant;\n\t\tlet k = 1.boltzmannConstant;\n\t\t((2 * h * c.square) / (lambda ^ 5)) * (1 / (((h * c) / (lambda * k * t)).exp - 1))\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "planckRadiationLaw",
  ["nuOrLambda", "t"],
  sl.annotateFunction(function (_nuOrLambda, _t) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _nuOrLambda, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_nuOrLambda, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckRadiationLawFrequency_2(_nuOrLambda, _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckRadiationLawWavelength_2(_nuOrLambda, _t);
      }, []),
    );
  }, ["nuOrLambda", "t"]),
  "{ :nuOrLambda :t |\n\t\t(nuOrLambda > 1).if {\n\t\t\tnuOrLambda.planckRadiationLawFrequency(t)\n\t\t} {\n\t\t\tnuOrLambda.planckRadiationLawWavelength(t)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "powerMod",
  ["base", "exponent", "modulo"],
  sl.annotateFunction(function (_base, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _base, _exponent, _modulo";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_exponent, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_modulo, 1),
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
            let _r = 1;
            let _b = _percentSign_2(_base, _modulo);
            let _e = _exponent;
            let _m = _modulo;
            /* Statements */
            _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSign_2(_e, 0);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _ifTrue_2(
                  _equalsSign_2(_percentSign_2(_e, 2), 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _r = _percentSign_2(_asterisk_2(_r, _b), _m);
                  }, []),
                );
                _b = _percentSign_2(_asterisk_2(_b, _b), _m);
                return _e = _floor_1(_solidus_2(_e, 2));
              }, []),
            );
            return _r;
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _modularInverse_2(
          _circumflexAccent_2(_base, _abs_1(_exponent)),
          _modulo,
        );
      }, []),
    );
  }, ["base", "exponent", "modulo"]),
  "{ :base :exponent :modulo |\n\t\t(exponent > 0).if {\n\t\t\t(modulo = 1).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\tlet r = 1;\n\t\t\t\tlet b = base % modulo;\n\t\t\t\tlet e = exponent;\n\t\t\t\tlet m = modulo;\n\t\t\t\t{ e > 0 }.whileTrue {\n\t\t\t\t\t((e % 2) = 1).ifTrue {\n\t\t\t\t\t\tr := (r * b) % m\n\t\t\t\t\t};\n\t\t\t\t\tb := (b * b) % m;\n\t\t\t\t\te := (e / 2).floor\n\t\t\t\t};\n\t\t\t\tr\n\t\t\t}\n\t\t} {\n\t\t\t(base ^ exponent.abs).modularInverse(modulo)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "powerRange",
  ["a", "b", "r"],
  sl.annotateFunction(function (_a, _b, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _next = _a;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_r, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSignEqualsSign_2(_abs_1(_next), _abs_1(_b));
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _add_2(_answer, _next);
        return _next = _asterisk_2(_next, _r);
      }, []),
    );
    return _answer;
  }, ["a", "b", "r"]),
  "{ :a :b :r |\n\t\tlet answer = [];\n\t\tlet next = a;\n\t\t{\n\t\t\t(r > 1).if {\n\t\t\t\tnext.abs <= b.abs\n\t\t\t} {\n\t\t\t\tnext.abs >= b.abs\n\t\t\t}\n\t\t}.whileTrue {\n\t\t\tanswer.add(next);\n\t\t\tnext := next * r\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "printStringShowingDecimalPlaces",
  ["self", "placesDesired"],
  sl.annotateFunction(function (_self, _placesDesired) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _placesDesired";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_placesDesired, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _printString_1(_round_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _rounder = _circumflexAccent_2(10, _placesDesired);
        let _round = _round_2(_self, _reciprocal_1(_rounder));
        let _prefix = _if_3(
          _isNegative_1(_round),
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
        );
        let _roundFractionPart = _round_1(
          _asterisk_2(_fractionalPart_1(_abs_1(_round)), _rounder),
        );
        /* Statements */
        return _stringCatenate_1([
          _prefix,
          _printString_1(_truncate_1(_integerPart_1(_abs_1(_round)))),
          ".",
          _padLeft_3(_printString_1(_roundFractionPart), [_placesDesired], "0"),
        ]);
      }, []),
    );
  }, ["self", "placesDesired"]),
  "{ :self :placesDesired |\n\t\t(placesDesired <= 0).if {\n\t\t\tself.round.printString\n\t\t} {\n\t\t\tlet rounder = 10 ^ placesDesired;\n\t\t\tlet round = self.round(rounder.reciprocal);\n\t\t\tlet prefix = round.isNegative.if { '-' } { '' };\n\t\t\tlet roundFractionPart = (round.abs.fractionalPart * rounder).round; /* truncate? */\n\t\t\t[\n\t\t\t\tprefix,\n\t\t\t\tround.abs.integerPart.truncate.printString,\n\t\t\t\t'.',\n\t\t\t\troundFractionPart.printString.padLeft([placesDesired], '0')\n\t\t\t].stringCatenate\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotientBy",
  ["self", "aNumber", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
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
        return _error_1("@Number>>quotient: divideByZero");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_solidus_2(_self, _aNumber));
      }, []),
    );
  }, ["self", "aNumber", "aBlock:/1"]),
  "{ :self :aNumber :aBlock:/1 |\n\t\t(aNumber = 0).if {\n\t\t\t'@Number>>quotient: divideByZero'.error\n\t\t} {\n\t\t\taBlock(self / aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotient",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotientBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotientBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "quotientRemainder",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return [_quotient_2(_self, _aNumber), _remainder_2(_self, _aNumber)];
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t[\n\t\t\tself.quotient(aNumber),\n\t\t\tself.remainder(aNumber)\n\t\t]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "radiansToDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 57.29577951308232286465);
  }, ["self"]),
  "{ :self |\n\t\tself * 57.29577951308232286465 /* 1/180.pi */\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "raisedToSmallInteger",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _count = _bitShift_2(1, _highBit_1(_hyphenMinus_2(_operand, 1)));
    let _result = _one_1(_self);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_count, 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _result = _square_1(_result);
        _ifFalse_2(
          _equalsSign_2(_bitAnd_2(_operand, _count), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _result = _asterisk_2(_result, _self);
          }, []),
        );
        return _count = _bitShift_2(_count, -1);
      }, []),
    );
    return _result;
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet count = 1.bitShift((operand - 1).highBit);\n\t\tlet result = self.one;\n\t\t{\n\t\t\tcount > 0\n\t\t}.whileTrue {\n\t\t\tresult := result.square;\n\t\t\t(operand.bitAnd(count) = 0).ifFalse {\n\t\t\t\tresult := result * self\n\t\t\t};\n\t\t\tcount := count.bitShift(-1)\n\t\t};\n\t\tresult\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "raisedToInteger",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isInteger_1(_operand),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Numnber>>raisedToInteger: operand is not an Integer");
      }, []),
    );
    return _if_3(
      _equalsSign_2(_operand, 0),
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
          _equalsSign_2(_operand, 1),
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
              _lessThanSign_2(_operand, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _reciprocal_1(
                  _raisedToInteger_2(_self, _negate_1(_operand)),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _isLargeInteger_1(_operand),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _circumflexAccent_2(
                      _asLargeInteger_1(_self),
                      _operand,
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _raisedToSmallInteger_2(_self, _operand);
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\toperand.isInteger.ifFalse {\n\t\t\t'Numnber>>raisedToInteger: operand is not an Integer'.error\n\t\t};\n\t\t(operand = 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(operand = 1).if {\n\t\t\t\tself\n\t\t\t} {\n\t\t\t\t(operand < 0).if {\n\t\t\t\t\tself.raisedToInteger(operand.negate).reciprocal\n\t\t\t\t} {\n\t\t\t\t\toperand.isLargeInteger.if {\n\t\t\t\t\t\tself.asLargeInteger ^ operand\n\t\t\t\t\t} {\n\t\t\t\t\t\tself.raisedToSmallInteger(operand)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "ramp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _zero = _zero_1(_self);
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_self, _zero),
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
        return _zero;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet zero = self.zero;\n\t\t(self >= zero).if {\n\t\t\tself\n\t\t} {\n\t\t\tzero\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "real",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_self, _zero_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self, self.zero]\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_one_1(_self), _self);
  }, ["self"]),
  "{ :self |\n\t\tself.one / self\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "remainderBy",
  ["self", "aNumber", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _self,
      _asterisk_2(_quotientBy_3(_self, _aNumber, _aBlock_1), _aNumber),
    );
  }, ["self", "aNumber", "aBlock:/1"]),
  "{ :self :aNumber :aBlock:/1 |\n\t\tself - (self.quotientBy(aNumber, aBlock:/1) * aNumber)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "remainder",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainderBy_3(_self, _aNumber, _truncate_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.remainderBy(aNumber, truncate:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar2, 1);
    let _max = _at_2(__SplVar2, 2);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min));
  }, ["self", "a"]),
  "{ :self :a |\n\t\tlet [min, max] = a;\n\t\t(self - min) / (max - min)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar3, 1);
    let _max = _at_2(__SplVar3, 2);
    let __SplVar4 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SplVar4, 1);
    let _yMax = _at_2(__SplVar4, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min)),
        _hyphenMinus_2(_yMax, _yMin),
      ),
      _yMin,
    );
  }, ["self", "a", "b"]),
  "{ :self :a :b |\n\t\tlet [min, max] = a;\n\t\tlet [yMin, yMax] = b;\n\t\t((self - min) / (max - min)) * (yMax - yMin) + yMin\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "richardsCurve",
  ["a", "k", "b", "nu", "q", "c"],
  sl.annotateFunction(function (_a, _k, _b, _nu, _q, _c) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _k, _b, _nu, _q, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _a,
        _solidus_2(
          _hyphenMinus_2(_k, _a),
          _circumflexAccent_2(
            _plusSign_2(
              _c,
              _asterisk_2(_q, _exp_1(_hyphenMinus_2(0, _asterisk_2(_b, _t)))),
            ),
            _solidus_2(1, _nu),
          ),
        ),
      );
    }, ["t"]);
  }, ["a", "k", "b", "nu", "q", "c"]),
  "{ :a :k :b :nu :q :c |\n\t\t{ :t |\n\t\t\ta + ((k - a) / ((c + (q * (0 - (b * t)).exp)) ^ (1 / nu)))\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundDown",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_floor_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).floor * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundDown",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _floor_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.floor\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "round",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_round_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).round * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncate_1(_plusSign_2(_self, _solidus_2(_sign_1(_self), 2)));
  }, ["self"]),
  "{ :self |\n\t\t(self + (self.sign / 2)).truncate\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundToPrecision",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scalar = _circumflexAccent_2(10, _aNumber);
    /* Statements */
    return _solidus_2(_round_1(_asterisk_2(_self, _scalar)), _scalar);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tlet scalar = 10 ^ aNumber;\n\t\t(self * scalar).round / scalar\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTowardsZero",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_self, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _roundUp_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _roundDown_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self < 0).if {\n\t\t\tself.roundUp(aNumber)\n\t\t} {\n\t\t\tself.roundDown(aNumber)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTowardsZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _roundTowardsZero_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.roundTowardsZero(1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundUp",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_ceiling_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\t(self / aNumber).ceiling * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundUp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ceiling_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.ceiling\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickBiasFunction",
  ["b", "x"],
  sl.annotateFunction(function (_b, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _b, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_schlickBiasFunction_1(_b), _x);
  }, ["b", "x"]),
  "{ :b :x |\n\t\tb.schlickBiasFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickBiasFunction",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _b), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _x,
        _plusSign_2(_asterisk_2(_p, _hyphenMinus_2(1, _x)), 1),
      );
    }, ["x"]);
  }, ["b"]),
  "{ :b |\n\t\tlet p = (1 / b) - 2;\n\t\t{ :x |\n\t\t\tx / ((p * (1 - x)) + 1)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickGainFunction",
  ["g", "x"],
  sl.annotateFunction(function (_g, _x) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _g, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_schlickGainFunction_1(_g), _x);
  }, ["g", "x"]),
  "{ :g :x |\n\t\tg.schlickGainFunction.value(x)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "schlickGainFunction",
  ["g"],
  sl.annotateFunction(function (_g) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _g";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _hyphenMinus_2(_solidus_2(1, _g), 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _q = _hyphenMinus_2(1, _asterisk_2(2, _x));
      /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_x, _plusSign_2(_asterisk_2(_p, _q), 1));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _hyphenMinus_2(_asterisk_2(_p, _q), _x),
            _hyphenMinus_2(_asterisk_2(_p, _q), 1),
          );
        }, []),
      );
    }, ["x"]);
  }, ["g"]),
  "{ :g |\n\t\tlet p = (1 / g) - 2;\n\t\t{ :x |\n\t\t\tlet q = 1 - (2 * x);\n\t\t\t(x < 0.5).if {\n\t\t\t\tx / ((p * q) + 1)\n\t\t\t} {\n\t\t\t\t((p * q) - x) / ((p * q) - 1)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, 0),
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
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _negate_1(_one_1(_self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _zero_1(_self);
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self > 0).if {\n\t\t\tself.one\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\tself.one.negate\n\t\t\t} {\n\t\t\t\tself.zero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "sign",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _copySignTo_2(_aNumber, _self);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.copySignTo(self)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "signBit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _verticalLine_2(
      _isNegativeZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, 0);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isNegativeZero | {\n\t\t\tself < 0\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "smallFloatEpsilon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _smallFloatEpsilon_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself * system.smallFloatEpsilon\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "smallFloatMax",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _smallFloatMax_1(_system));
  }, ["self"]),
  "{ :self |\n\t\tself * system.smallFloatMax\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "softPlus",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_plusSign_2(1, _exp_1(_x)));
  }, ["x"]),
  "{ :x |\n\t\t(1 + x.exp).log\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "softSign",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_x, _plusSign_2(1, _abs_1(_x)));
  }, ["x"]),
  "{ :x |\n\t\tx / (1 + x.abs)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "stope",
  ["x", "p", "y"],
  sl.annotateFunction(function (_x, _p, _y) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _p, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(
      _plusSign_2(_x, _asterisk_2(_p, _hyphenMinus_2(_Span_3(1, _y, 1), 1))),
      _asterisk_2,
    );
  }, ["x", "p", "y"]),
  "{ :x :p :y |\n\t\t(x + (p * (1:y - 1))).reduce(*)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "strictlyPositive",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(_self, 0);
  }, ["self"]),
  "{ :self |\n\t\tself > 0\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "swishFunction",
  ["beta"],
  sl.annotateFunction(function (_beta) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _beta";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _x,
        _plusSign_2(1, _exp_1(_asterisk_2(_negate_1(_beta), _x))),
      );
    }, ["x"]);
  }, ["beta"]),
  "{ :beta |\n\t\t{ :x |\n\t\t\tx / (1 + (beta.negate * x).exp)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "symmetricPower",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
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
        return _negate_1(_circumflexAccent_2(_negate_1(_self), _aNumber));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.isNegative.if {\n\t\t\t(self.negate ^ aNumber).negate\n\t\t} {\n\t\t\tself ^ aNumber\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toByDo",
  ["self", "stop", "step", "aBlock:/1"],
  sl.annotateFunction(function (_self, _stop, _step, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _stop, _step, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    _if_3(
      _equalsSign_2(_step, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("@Number>>toByDo: step must be non-zero");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _nextValue = _self;
        /* Statements */
        return _if_3(
          _lessThanSign_2(_step, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_stop, _nextValue);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _aBlock_1(_nextValue);
                return _nextValue = _plusSign_2(_nextValue, _step);
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _whileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _greaterThanSignEqualsSign_2(_stop, _nextValue);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _aBlock_1(_nextValue);
                return _nextValue = _plusSign_2(_nextValue, _step);
              }, []),
            );
          }, []),
        );
      }, []),
    );
    return _self;
  }, ["self", "stop", "step", "aBlock:/1"]),
  "{ :self :stop :step :aBlock:/1 |\n\t\t(step = 0).if {\n\t\t\t'@Number>>toByDo: step must be non-zero'.error\n\t\t} {\n\t\t\tlet nextValue = self;\n\t\t\t(step < 0).if {\n\t\t\t\t{\n\t\t\t\t\tstop <= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t} {\n\t\t\t\t{\n\t\t\t\t\tstop >= nextValue\n\t\t\t\t}.whileTrue {\n\t\t\t\t\taBlock(nextValue);\n\t\t\t\t\tnextValue := nextValue + step\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toDoWithBreak",
  ["self", "end", "aBlock:/2"],
  sl.annotateFunction(function (_self, _end, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _self;
    /* Statements */
    _valueWithReturn_1(sl.annotateFunction(function (_return_1) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _return_1";
        throw new Error(errorMessage);
      } /* Statements */
      return _whileTrue_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_index, _end);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          _aBlock_2(_index, _return_1);
          return _index = _plusSign_2(_index, 1);
        }, []),
      );
    }, ["return:/1"]));
    return _self;
  }, ["self", "end", "aBlock:/2"]),
  "{ :self :end :aBlock:/2 |\n\t\tlet index = self;\n\t\tvalueWithReturn { :return:/1 |\n\t\t\t{\n\t\t\t\tindex <= end\n\t\t\t}.whileTrue {\n\t\t\t\taBlock(index, return:/1);\n\t\t\t\tindex := index + 1\n\t\t\t}\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "toDo",
  ["self", "end", "aBlock:/1"],
  sl.annotateFunction(function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _index = _self;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSignEqualsSign_2(_index, _end);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _aBlock_1(_index);
        return _index = _plusSign_2(_index, 1);
      }, []),
    );
    return _self;
  }, ["self", "end", "aBlock:/1"]),
  "{ :self :end :aBlock:/1 |\n\t\tlet index = self;\n\t\t{\n\t\t\tindex <= end\n\t\t}.whileTrue {\n\t\t\taBlock(index);\n\t\t\tindex := index + 1\n\t\t};\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "truncate",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_quotient_2(_self, _aNumber), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.quotient(aNumber) * aNumber\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "twice",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2);
  }, ["self"]),
  "{ :self |\n\t\tself * 2\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_lessThanSignEqualsSign_2(_abs_1(_self), 0.5));
  }, ["self"]),
  "{ :self |\n\t\t(self.abs <= 0.5).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitize",
  ["self", "dx"],
  sl.annotateFunction(function (_self, _dx) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _dx";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_abs_1(_self), _dx),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
    );
  }, ["self", "dx"]),
  "{ :self :dx |\n\t\t(self.abs < dx).if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitize",
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
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _one_1(_self);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tself.zero\n\t\t} {\n\t\t\tself.one\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitStep",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_greaterThanSign_2(_self, 0));
  }, ["self"]),
  "{ :self |\n\t\t(self > 0).boole\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _betweenAnd_3(_self, -1, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_self, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _betweenAnd_3(_self, 0, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _self);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.betweenAnd(-1, 0).if {\n\t\t\tself + 1\n\t\t} {\n\t\t\tself.betweenAnd(0, 1).if {\n\t\t\t\t1 - self\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unitVector",
  ["n", "k"],
  sl.annotateFunction(function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_n, 0);
    /* Statements */
    _atPut_3(_answer, _k, 1);
    return _answer;
  }, ["n", "k"]),
  "{ :n :k |\n\t\tlet answer = List(n, 0);\n\t\tanswer[k] := 1;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "upOrDownToDo",
  ["self", "end", "aBlock:/1"],
  sl.annotateFunction(function (_self, _end, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _end, _aBlock_1";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _step = _if_3(
      _lessThanSign_2(_end, _self),
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
    /* Statements */
    return _toByDo_4(_self, _end, _step, _aBlock_1);
  }, ["self", "end", "aBlock:/1"]),
  "{ :self :end :aBlock:/1 |\n\t\tlet step = (end < self).if { -1 } { 1 };\n\t\tself.toByDo(end, step, aBlock:/1)\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "wrap",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_self, _low);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self = _plusSign_2(_self, _range);
      }, []),
    );
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_self, _high);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _self = _hyphenMinus_2(_self, _range);
      }, []),
    );
    return _self;
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\t{ self < low }.whileTrue { self := self + range };\n\t\t{ self > high }.whileTrue { self := self - range };\n\t\tself\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "wrapExclusive",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _range = _hyphenMinus_2(_high, _low);
    let _z = _percentSign_2(_hyphenMinus_2(_self, _low), _range);
    /* Statements */
    return _plusSign_2(_low, _z);
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tlet range = high - low;\n\t\tlet z = (self - low) % range;\n\t\tlow + z\n\t}",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self |\n\t\t0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Object",
  "Number",
  "isNumber",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "Number",
  "unitBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_collect_2(_self, _unitBox_1));
  }, ["self"]),
  "{ :self |\n\t\tself.collect(unitBox:/1).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Number",
  "unitStep",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_collect_2(_self, _unitStep_1));
  }, ["self"]),
  "{ :self |\n\t\tself.collect(unitStep:/1).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Number",
  "unitTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(_collect_2(_self, _unitTriangle_1));
  }, ["self"]),
  "{ :self |\n\t\tself.collect(unitTriangle:/1).product\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "aperysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.2020569031595942853997381);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.2020569031595942853997381\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "avogadroConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 6.02214076E+23);
  }, ["self"]),
  "{ :self |\n\t\tself * 6.02214076E+23\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "berahaConstant",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(2, _asterisk_2(2, _cos_1(_solidus_2(_pi_1(2), _n))));
  }, ["n"]),
  "{ :n |\n\t\t2 + (2 * (2.pi / n).cos)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "boltzmannConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.380649E-23);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.380649E-23\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "brunsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(1.90216058, _self);
  }, ["self"]),
  "{ :self |\n\t\t1.90216058 * self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "calabisConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "catalansConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.9159655941772190150);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.9159655941772190150\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "champernowneNumber",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_b, 10),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.1234567891011121314151617181920;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_b, "champernowneNumber: b≠10");
      }, []),
    );
  }, ["b"]),
  "{ :b |\n\t\t(b = 10).if {\n\t\t\t0.1234567891011121314151617181920\n\t\t} {\n\t\t\tb.error('champernowneNumber: b≠10')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "conwaysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.303577269034296391257099112152551890730702504659404875755;
  }, ["self"]),
  "{ :self |\n\t\t1.303577269034296391257099112152551890730702504659404875755\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.017453292519943295);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.017453292519943295\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "e",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      2.71828182845904523536028747135266249775724709369995,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 2.71828182845904523536028747135266249775724709369995\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "electricConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 8.8541878188E-12);
  }, ["self"]),
  "{ :self |\n\t\tself * 8.8541878188E-12\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "elementaryCharge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.602176634E-19);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.602176634E-19\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "epsilon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.000000000000001);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.000000000000001\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "eulerGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      0.57721566490153286060651209008240243104215933593992,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 0.57721566490153286060651209008240243104215933593992\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "feigenbaumConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 4.669201609102990671853203820466201617258);
  }, ["self"]),
  "{ :self |\n\t\tself * 4.669201609102990671853203820466201617258\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "fibonacciFactorialConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      1.22674201072035324441763023045536165587140969044025,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 1.22674201072035324441763023045536165587140969044025\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "fineStructureConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.0072973525643);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.0072973525643\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "freimansConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      4.527829566160879140882695988070469646929833632769728,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 4.527829566160879140882695988070469646929833632769728\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "gausssConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "gelfondsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _exp_1(_pi_1(1)));
  }, ["self"]),
  "{ :self |\n\t\tself * 1.pi.exp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "glaisher",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.2824271291006226368753425688697917277676889);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.2824271291006226368753425688697917277676889\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "goldenAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_pi_1(_self), _hyphenMinus_2(3, _sqrt_1(5)));
  }, ["self"]),
  "{ :self |\n\t\tself.pi * (3 - 5.sqrt)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "goldenRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _solidus_2(_plusSign_2(_sqrt_1(5), 1), 2);
    /* Statements */
    return _asterisk_2(_self, _phi);
  }, ["self"]),
  "{ :self |\n\t\tlet phi = (5.sqrt + 1) / 2;\n\t\tself * phi\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "gompertzConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.596347362323194074341078499369);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.596347362323194074341078499369\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "hlawkasSchneckenkonstante",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, -2.15778299665944622092914278682957772350);
  }, ["self"]),
  "{ :self |\n\t\tself * -2.15778299665944622092914278682957772350\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "keplerBouwkampConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.114942044853296200701040157469598742831);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.114942044853296200701040157469598742831\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "khinchinsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.685452001065306445309714835);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.685452001065306445309714835\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "komornikLoretiConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.7872316501829659330132748903370084;
  }, ["self"]),
  "{ :self |\n\t\t1.7872316501829659330132748903370084\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "landauConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.543258965342976706952728295);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.543258965342976706952728295\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "landauRamanujanConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.764223653589220662990698731);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.764223653589220662990698731\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "lemniscateConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.62205755429211981046483959);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.62205755429211981046483959\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "levysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 3.27582291872181115978768188);
  }, ["self"]),
  "{ :self |\n\t\tself * 3.27582291872181115978768188\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "logarithmicPhi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _circumflexAccent_2(2, _goldenRatio_1(1)));
  }, ["self"]),
  "{ :self |\n\t\tself * (2 ^ 1.goldenRatio)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "madelungConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      -1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * -1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "magneticConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.25663706127E-6);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.25663706127E-6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "meisselMertensConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.2614972128476427837554268386086958590516);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.2614972128476427837554268386086958590516\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "omegaConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.567143290409783872999968662210);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.567143290409783872999968662210\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "paperFoldingConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.8507361882018672603677977);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.8507361882018672603677977\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "pi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 3.1415926535897932384626433);
  }, ["self"]),
  "{ :self |\n\t\tself * 3.1415926535897932384626433\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "planckConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 6.62607015E-34);
  }, ["self"]),
  "{ :self |\n\t\tself * 6.62607015E-34\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "plasticRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.3247179572447460259609089);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.3247179572447460259609089\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "prouhetThueMorseConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.4124540336401075977833614);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.4124540336401075977833614\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "pythagorasConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.4142135623730950488);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.4142135623730950488\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "rabbitConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.7098034428612913146417873994445755970125);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.7098034428612913146417873994445755970125\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "reciprocalFibonacciConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 3.359885666243177553172011302918927179689);
  }, ["self"]),
  "{ :self |\n\t\tself * 3.359885666243177553172011302918927179689\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "reducedPlanckConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.054571817E-34);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.054571817E-34\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "secondFeigenbaumConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.502907875095892822283902873218215786381);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.502907875095892822283902873218215786381\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "sierpinskiConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.822825249678847032995328716261464949475);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.822825249678847032995328716261464949475\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "silverConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      _plusSign_2(2, _asterisk_2(2, _cos_1(_pi_1(_solidus_2(2, 7))))),
    );
  }, ["self"]),
  "{ :self |\n\t\tself * (2 + (2 * (2 / 7).pi.cos))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "silverRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _plusSign_2(_sqrt_1(2), 1));
  }, ["self"]),
  "{ :self |\n\t\tself * (2.sqrt + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "soldnersConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.45136923488338105028396848589202744949303228);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.45136923488338105028396848589202744949303228\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "speedOfLight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 299792458);
  }, ["self"]),
  "{ :self |\n\t\tself * 299792458\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "stieltjesGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = [
      0.57721566490153286061,
      -0.072815845483676724861,
      -0.0096903631928723184845,
      0.0020538344203033458662,
      0.0023253700654673000575,
      0.00079332381730106270175,
      -0.00023876934543019960987,
      -0.00052728956705775104607,
      -0.00035212335380303950960,
      -0.000034394774418088048178,
      0.00020533281490906479468,
      0.00027018443954390352667,
      0.00016727291210514019335,
      -0.000027463806603760158860,
      -0.00020920926205929994584,
      -0.00028346865532024144664,
      -0.00019969685830896977471,
      0.000026277037109918336699,
      0.00030736840814925282659,
      0.00050360545304735562906,
      0.00046634356151155944940,
      0.00010443776975600011581,
      -0.00054159958220399770166,
      -0.0012439620904082457793,
      -0.0015885112789035615619,
      -0.0010745919527384888247,
    ];
    /* Statements */
    return _at_2(_k, _plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self |\n\t\tlet k = [\n\t\t\t0.57721566490153286061,\n\t\t\t-0.072815845483676724861,\n\t\t\t-0.0096903631928723184845,\n\t\t\t0.0020538344203033458662,\n\t\t\t0.0023253700654673000575,\n\t\t\t0.00079332381730106270175,\n\t\t\t-0.00023876934543019960987,\n\t\t\t-0.00052728956705775104607,\n\t\t\t-0.00035212335380303950960,\n\t\t\t-0.000034394774418088048178,\n\t\t\t0.00020533281490906479468,\n\t\t\t0.00027018443954390352667,\n\t\t\t0.00016727291210514019335,\n\t\t\t-0.000027463806603760158860,\n\t\t\t-0.00020920926205929994584,\n\t\t\t-0.00028346865532024144664,\n\t\t\t-0.00019969685830896977471,\n\t\t\t0.000026277037109918336699,\n\t\t\t0.00030736840814925282659,\n\t\t\t0.00050360545304735562906,\n\t\t\t0.00046634356151155944940,\n\t\t\t0.00010443776975600011581,\n\t\t\t-0.00054159958220399770166,\n\t\t\t-0.0012439620904082457793,\n\t\t\t-0.0015885112789035615619,\n\t\t\t-0.0010745919527384888247\n\t\t];\n\t\tk.at(self + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "stolarskyHarborthConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.81255655901600638769);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.81255655901600638769\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "supergoldenRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.465571231876768);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.465571231876768\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "supersilverRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.2055694304005903);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.2055694304005903\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "tetranacciConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325;
  }, ["self"]),
  "{ :self |\n\t\t1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "tribonacciConstant",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_n, 1.83928675521416113255185);
  }, ["n"]),
  "{ :n |\n\t\tn * 1.83928675521416113255185\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "vacuumPermeability",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.25663706127E-6);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.25663706127E-6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Number",
  "vacuumPermittivity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 8.8541878188E-12);
  }, ["self"]),
  "{ :self |\n\t\tself * 8.8541878188E-12\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Number",
  "rescaleBlock",
  ["a", "b"],
  sl.annotateFunction(function (_a, _b) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SplVar5, 1);
    let _max = _at_2(__SplVar5, 2);
    let __SplVar6 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SplVar6, 1);
    let _yMax = _at_2(__SplVar6, 2);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _asterisk_2(
          _solidus_2(_hyphenMinus_2(_x, _min), _hyphenMinus_2(_max, _min)),
          _hyphenMinus_2(_yMax, _yMin),
        ),
        _yMin,
      );
    }, ["x"]);
  }, ["a", "b"]),
  "{ :a :b |\n\t\tlet [min, max] = a;\n\t\tlet [yMin, yMax] = b;\n\t\t{ :x |\n\t\t\t((x - min) / (max - min)) * (yMax - yMin) + yMin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "Number",
  "namedConstantTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "namedConstantTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([[
          "AperysConstant",
          _parseDecimal_1(
            "1.20205690315959428539973816151144999076498629234049888179227155534183820578631309018645587360933525814619915D",
          ),
        ], [
          "CalabisConstant",
          _parseDecimal_1(
            "1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629D",
          ),
        ], [
          "CatalansConstant",
          _parseDecimal_1(
            "0.915965594177219015054603514932384110774149374281672134266498119621763019776254769479356512926115106248574D",
          ),
        ], [
          "GoldenRatio",
          _parseDecimal_1(
            "1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475D",
          ),
        ], [
          "E",
          _parseDecimal_1(
            "2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746D",
          ),
        ], [
          "EulerGamma",
          _parseDecimal_1(
            "0.577215664901532860606512090082402431042159335939923598805767234884867726777664670936947063291746749D",
          ),
        ], [
          "FeigenbaumConstant",
          _parseDecimal_1(
            "4.66920160910299067185320382046620161725818557747576863274565134300413433021131473713868974402394801381716D",
          ),
        ], [
          "GausssConstant",
          _parseDecimal_1(
            "0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785D",
          ),
        ], [
          "HardHexagonEntropyConstant",
          _parseDecimal_1(
            "1.39548597247930273522950066356688806895410372814466119081747215613576088035869777468983787308527542790D",
          ),
        ], [
          "KhinchinsConstant",
          _parseDecimal_1(
            "2.68545200106530644530971483548179569382038229399446295305115234555721885953715200280114117493184769799515D",
          ),
        ], [
          "LevysConstant",
          _parseDecimal_1(
            "3.27582291872181115978768188245384386360847552598237414940519892419072321564496035518127754047917452949269D",
          ),
        ], [
          "MadelungConstant",
          _parseDecimal_1(
            "-1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993D",
          ),
        ], [
          "Pi",
          _parseDecimal_1(
            "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214D",
          ),
        ], [
          "PythagorasConstant",
          _parseDecimal_1(
            "1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157D",
          ),
        ], [
          "TribonacciConstant",
          _parseDecimal_1(
            "1.83928675521416113255185256465328660042417874609759224677875863940420322208196642573843541942830701414D",
          ),
        ], [
          "TetranacciConstant",
          _parseDecimal_1(
            "1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325D",
          ),
        ]]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('namedConstantTable') {\n\t\t\t(\n\t\t\t\t'AperysConstant':\n\t\t\t\t1.20205690315959428539973816151144999076498629234049888179227155534183820578631309018645587360933525814619915D,\n\t\t\t\t'CalabisConstant':\n\t\t\t\t1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629D,\n\t\t\t\t'CatalansConstant':\n\t\t\t\t0.915965594177219015054603514932384110774149374281672134266498119621763019776254769479356512926115106248574D,\n\t\t\t\t'GoldenRatio':\n\t\t\t\t1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475D,\n\t\t\t\t'E':\n\t\t\t\t2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746D,\n\t\t\t\t'EulerGamma':\n\t\t\t\t0.577215664901532860606512090082402431042159335939923598805767234884867726777664670936947063291746749D,\n\t\t\t\t'FeigenbaumConstant':\n\t\t\t\t4.66920160910299067185320382046620161725818557747576863274565134300413433021131473713868974402394801381716D,\n\t\t\t\t'GausssConstant':\n\t\t\t\t0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785D,\n\t\t\t\t'HardHexagonEntropyConstant':\n\t\t\t\t1.39548597247930273522950066356688806895410372814466119081747215613576088035869777468983787308527542790D,\n\t\t\t\t'KhinchinsConstant':\n\t\t\t\t2.68545200106530644530971483548179569382038229399446295305115234555721885953715200280114117493184769799515D,\n\t\t\t\t'LevysConstant':\n\t\t\t\t3.27582291872181115978768188245384386360847552598237414940519892419072321564496035518127754047917452949269D,\n\t\t\t\t'MadelungConstant':\n\t\t\t\t-1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993D,\n\t\t\t\t'Pi':\n\t\t\t\t3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214D,\n\t\t\t\t'PythagorasConstant':\n\t\t\t\t1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157D,\n\t\t\t\t'TribonacciConstant':\n\t\t\t\t1.83928675521416113255185256465328660042417874609759224677875863940420322208196642573843541942830701414D,\n\t\t\t\t'TetranacciConstant':\n\t\t\t\t1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325D\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Number",
  "namedConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_namedConstantTable_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.namedConstantTable.at(self)\n\t}",
);
