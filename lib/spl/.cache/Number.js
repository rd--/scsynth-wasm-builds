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
  "{ :self | conjugate(self) }",
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
  "{ :self | sign(self) }",
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
  "{ :self | negate(self) }",
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
  "{ :self | reciprocal(self) }",
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
  "{ :self | ^(e(1), self) }",
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
  "{ :self | factorialOrGamma(self) }",
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
  "{ :self :aNumber | quotient(self,aNumber) }",
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
  "{ :self :aNumber | remainder(self,aNumber) }",
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
  "{ :self :aNumber | -(self, (*(//(self, aNumber), aNumber))) }",
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
  "{ :self :aNumber | isCloseTo(self,aNumber) }",
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
  "{ :self :aNumber | not(isCloseTo(self,aNumber)) }",
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
  "{ :self :aNumber | |(<(self, aNumber), { isCloseTo(self,aNumber) }) }",
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
  "{ :self :aNumber | |(>(self, aNumber), { isCloseTo(self,aNumber) }) }",
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
  "{ :self :mul :add | +(*(self, mul), add) }",
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
  "{ :self | if(isNegative(self), { negate(self) }, { self }) }",
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
  "{ :self | absArg(j(self,0)) }",
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
  "{ :self | let abs = abs(self); *(abs, abs) }",
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
  "{ :self :aCollection :aBlock:/2 | collect(aCollection, { :each | aBlock(each, self) }) }",
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
  "{ :self | *(self, 0.0002908882086657216) }",
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
  "{ :self | *(self, 0.00000484813681109536) }",
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
  "{ :self | [cos(self), sin(self)] }",
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
  "{ :self | if(isZero(self), { 0 }, { arg(j(self,0)) }) }",
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
          let __SPL78 = [
            _asterisk_2(0.5, _plusSign_2(_a, _b)),
            _sqrt_1(_asterisk_2(_a, _b)),
          ];
          /* Statements */
          _a = _at_2(__SPL78, 1);
          return _b = _at_2(__SPL78, 2);
        }, [])());
      }, []),
    );
    return _a;
  }, ["self", "aNumber"]),
  "{ :self :aNumber | let a = self; let b = aNumber; whileFalse({ isVeryCloseTo(a,b) }, { ({ let __SPL78 = [*(0.5, (+(a, b))), sqrt((*(a, b)))]; a := at(__SPL78, 1); b := at(__SPL78, 2) } . ()) }); a }",
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
    return _truncate_1(_self);
  }, ["self"]),
  "{ :self | truncate(self) }",
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
  "{ :self | self }",
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
  "{ :self | <primitive: return _self.toLocaleString('en-US');>\n }",
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
  "{ :s :t | let epsilon = smallFloatEpsilon(1); { :x | if((<(x, t)), { /((*(t, x)), (+(+(x, (*(s, (-(t, x))))), epsilon))) }, { +(/((*((-(1, t)), (-(x, 1)))), (+(-(-(1, x), (*(s, (-(t, x))))), epsilon))), 1) }) } }",
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
  "{ :self :aNumber | if(isNumber(aNumber), { +(self, aNumber) }, { error((++('Number>>basicPlus: operand not a number', aNumber))) }) }",
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
  "{ :self :aNumber | if(isNumber(aNumber), { *(self, aNumber) }, { error((++('Number>>basicTimes: operand not a number: ', aNumber))) }) }",
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
  "{ :self | let truncation = truncate(self); if((<=(self, 0)), { truncation }, { if((=(self, truncation)), { truncation }, { +(truncation, 1) }) }) }",
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
  "{ :self :low :high | max(low,min(self,high)) }",
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
  "{ :self | printString(self) }",
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
  "{ :self :limit | let answer = []; let i = floor(self); let f = -(self, i); whileTrue({ &((>(limit, 1)), { not(isVeryCloseTo(f,0)) }) }, { add(answer,i); f := /(1, f); i := floor(f); f := -(f, i); limit := -(limit, 1) }); add(answer,i); answer }",
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
  "{ :self | continuedFraction(self,24) }",
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
  "{ :self :aNumber | if(signBit(self), { negate(abs(aNumber)) }, { abs(aNumber) }) }",
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
  "{ :self | *(*(self, self), self) }",
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
  "{ :self | -(self, 1) }",
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
  "{ :self | *(self, 0.01745329251994329547) }",
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
  "{ :x :z | if(isInteger(x), { z }, { 0 }) }",
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
  "{ :x | diracComb(x,Infinity) }",
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
  "{ :self :aNumber | if(isZero(self), { aNumber }, { 0 }) }",
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
  "{ :self | diracDelta(self,Infinity) }",
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
  "{ :self :aNumber | if(isNumber(aNumber), { isVeryCloseTo((%(self, aNumber)),0) }, { adaptToNumberAndApply(aNumber,self, divisible:/2) }) }",
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
  "{ :k :n | if(isNumber(n), { if((=(k, 0)), { product((+(values(factorInteger(n)), 1))) }, { sum((^(divisors(n), k))) }) }, { adaptToNumberAndApply(n,k, divisorSigma:/2) }) }",
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
  "{ :self :anInteger :aBlock:/1 | do(Range(self, anInteger, -1),aBlock:/1) }",
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
  "{ :self | *(self, 2) }",
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
  "{ :self :aNumber | *(self, (^(10, aNumber))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "ellipticK",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _pi_1(1),
      _asterisk_2(
        2,
        _arithmeticGeometricMean_2(1, _sqrt_1(_hyphenMinus_2(1, _m))),
      ),
    );
  }, ["m"]),
  "{ :m | /(pi(1), (*(2, arithmeticGeometricMean(1, sqrt((-(1, m))))))) }",
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
  "{ :u | *(0.75, (-(1, (*(u, u))))) }",
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
  "{ :self | if(isNonNegativeInteger(self), { factorial(self) }, { gamma((+(1, self))) }) }",
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
  "{ :self | let truncation = truncate(self); if((>=(self, 0)), { truncation }, { if((=(self, truncation)), { truncation }, { -(truncation, 1) }) }) }",
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
  "{ :self :radix | floor(log(self,radix)) }",
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
  "{ :self :low :high | let range = -(high, low); let twiceRange = +(range, range); let z = %((-(self, low)), twiceRange); ifTrue((>(z, range)), { z := -(twiceRange, z) }); +(low, z) }",
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
  "{ :self | -(self, integerPart(self)) }",
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
  "{ :sigma | let m = /(1, (*(sqrt(pi(2)), sigma))); let sigmaSquared = *(sigma, sigma); { :u | *(m, exp(negate((/(square(u), (*(2, sigmaSquared))))))) } }",
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
  "{ :a :b :c | { :t | *(a, exp((*(exp((*(negate(c), t))), negate(b))))) } }",
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
  "{ :self | /(self, 2) }",
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
  "{ :x | if((<(abs(x), 1)), { if((>(x, 0)), { -(1, x) }, { +(1, x) }) }, { 0 }) }",
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
  "{ :self | boole((<=(abs(self), 0.5))) }",
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
  "{ :self | if((<(self, 0)), { 0 }, { if((>(self, 0)), { 1 }, { 0.5 }) }) }",
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
  "{ :self | zero(self) }",
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
  "{ :self | +(self, 1) }",
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
  "{ :self | *(self, Infinity) }",
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
  "{ :self | truncate(self) }",
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
  "{ :x | if((>=(abs(x), 1)), { *(Infinity, sign(x)) }, { let a = [0.886226899, -1.645349621, 0.914624893, -0.140543331]; let b = [1, -2.118377725, 1.442710462, -0.329097515, 0.012229801]; let c = [-1.970840454, -1.62490649, 3.429567803, 1.641345311]; let d = [1, 3.543889200, 1.637067800]; let z = *(sign(x), x); let r = nil; if((<=(z, 0.7)), { let x2 = *(z, z); r := *(z, (+(*((+(*((+(*(at(a, 4), x2), at(a, 3))), x2), at(a, 2))), x2), at(a, 1)))); r := /(r, (+(*((+(*((+(*((+(*(at(b, 5), x2), at(b, 4))), x2), at(b, 3))), x2), at(b, 2))), x2), at(b, 1)))) }, { let y = sqrt(negate(log((/((-(1, z)), 2))))); r := +(*((+(*((+(*(at(c, 4), y), at(c, 3))), y), at(c, 2))), y), at(c, 1)); r := /(r, (+(*((+(*(at(d, 3), y), at(d, 2))), y), at(d, 1)))) }); r := *(r, sign(x)); z := *(z, sign(x)); r := -(r, (/((-(erf(r), z)), (*(/(2, sqrt(pi(1))), exp((*(negate(r), r)))))))); r := -(r, (/((-(erf(r), z)), (*(/(2, sqrt(pi(1))), exp((*(negate(r), r)))))))); r }) }",
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
  "{ :self | /(-(standardNormalDistributionInverseCdf((/(self, 2)))), sqrt(2)) }",
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
  "{ :x | let a = 0.147; let b = (/(2, pi(a))); let c = log((-(1, square(x)))); *(sqrt((-(sqrt((-(square((+(b, (/(c, 2))))), (/(c, a))))), (+(b, (/(c, 2))))))), sign(x)) }",
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
  "{ :self | isOne((*(abs(fractionalPart(self)), 2))) }",
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
  "{ :self | <(self, zero(self)) }",
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
  "{ :self | false }",
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
  "{ :self | >=(self, zero(self)) }",
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
  "{ :self | &(isInteger(self), { isNonNegative(self) }) }",
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
  "{ :self | <=(self, zero(self)) }",
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
  "{ :self | !=(self, 0) }",
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
  "{ :self | true }",
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
  "{ :self | >(self, zero(self)) }",
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
  "{ :self | =(self, 1) }",
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
  "{ :self | true }",
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
  "{ :self | =(self, 0) }",
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
  "{ :self | boole((=(self, 0))) }",
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
  "{ :self :aNumber | if((=(self, aNumber)), { 1 }, { 0 }) }",
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
  "{ :self | log2(asSmallFloat(self)) }",
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
        return 0;
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
  "{ :self :limit | if(isZero(self), { 0 }, { +(+(eulerGamma(1), (log(abs(log(self))))), sum(collect(Span(1, limit, 1), { :k | /((^(log(self), k)), (*(factorial(k), k))) }))) }) }",
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
  "{ :self | logarithmicIntegralRamanujan(self,9) }",
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
        } /* Temporaries */
        let _x = _asFloat_1(_self);
        /* Statements */
        return _asterisk_2(_sign_1(_x), _log_1(_abs_1(_x)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { 0 }, { let x = asFloat(self); *(sign(x), log(abs(x))) }) }",
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
  "{ :l :k :x0 | { :z | /(l, (+(1, exp((*(-(k), (-(z, x0)))))))) } }",
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
  "{ :z | /(1, (+(1, exp(-(z))))) }",
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
  "{ :x | log((/(x, (-(1, x))))) }",
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
  "{ :n | /((+(n, sqrt((+(square(n), 4))))), 2) }",
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
  "{ :self | let i = integerPart(self); [i, -(self, i)] }",
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
  "{ :m :n | -(m, (*(n, quotient(m,n)))) }",
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
  "{ :m :n :d | -(m, (*(n, floor((/((-(m, d)), n)))))) }",
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
  "{ :i :j :k | +((*(i, j)), k) }",
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
  "{ :self | *(self, -1) }",
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
  "{ :self | niceNumberBy(self, { :l :n | at(l, bisect(l,n)) }) }",
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
  "{ :self :aBlock:/2 | let n = self; let m = ^(10, negate(floor(log10(abs(n))))); let steps = [1, 1.5, 2, 2.5, 5, 7.5, 10]; let z = aBlock(steps,*(n, m)); /(z, m) }",
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
  "{ :self | niceNumberBy(self, { :l :n | first(nearest(l,n)) }) }",
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
  "{ :self :u | if((<(self, 0)), { -(numberDecompose(-(self),u)) }, { let answer = []; let x = self; let k = size(u); withIndexDo(u, { :each :index | if((=(index, k)), { add(answer,/(x, each)) }, { let n = floor((/(x, each))); x := -(x, (*(n, each))); add(answer,n) }) }); answer }) }",
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
  "{ :b :x | value(perlinBiasFunction(b),x) }",
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
  "{ :b | let p = /(log(b), log(0.5)); { :x | ^(x, p) } }",
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
  "{ :g :x | value(perlinGainFunction(g),x) }",
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
  "{ :g | let p = -((/(1, (-(1, g)))), 2); { :x | let q = -(1, (*(2, x))); if((<(x, 0.5)), { /(x, (+((*(p, q)), 1))) }, { -(1, (/((-(2, (*(2, x)))), (*(2, (+((*(p, -(q))), 1))))))) }) } }",
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
  "{ :n | let rho = plasticRatio(1); let theta = arcCos((/(-(sqrt((^(rho, 3)))), 2))); +((^(rho, n)), (*(*(2, cos((*(n, theta)))), sqrt((^(rho, -(n))))))) }",
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
  "{ :x | if((<=(x, 0)), { 0 }, { *((/(15, (^(pi(1), 4)))), (/(1, (*((^(x, 5)), (-((^(e(1), (/(1, x)))), 1))))))) }) }",
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
  "{ :nu :t | let c = speedOfLight(1); let h = planckConstant(1); let k = boltzmannConstant(1); *((/((*(*(2, h), cube(nu))), (square(c)))), (/(1, (-(exp((/((*(h, nu)), (*(k, t))))), 1))))) }",
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
  "{ :lambda :t | let c = speedOfLight(1); let h = planckConstant(1); let k = boltzmannConstant(1); *((/((*(*(2, h), square(c))), (^(lambda, 5)))), (/(1, (-(exp((/((*(h, c)), (*(*(lambda, k), t))))), 1))))) }",
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
  "{ :nuOrLambda :t | if((>(nuOrLambda, 1)), { planckRadiationLawFrequency(nuOrLambda,t) }, { planckRadiationLawWavelength(nuOrLambda,t) }) }",
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
  "{ :base :exponent :modulo | if((>(exponent, 0)), { if((=(modulo, 1)), { 0 }, { let r = 1; let b = %(base, modulo); let e = exponent; let m = modulo; whileTrue({ >(e, 0) }, { ifTrue((=((%(e, 2)), 1)), { r := %((*(r, b)), m) }); b := %((*(b, b)), m); e := floor((/(e, 2))) }); r }) }, { modularInverse((^(base, abs(exponent))),modulo) }) }",
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
  "{ :a :b :r | let answer = []; let next = a; whileTrue({ if((>(r, 1)), { <=(abs(next), abs(b)) }, { >=(abs(next), abs(b)) }) }, { add(answer,next); next := *(next, r) }); answer }",
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
        let _round = _roundTo_2(_self, _reciprocal_1(_rounder));
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
  "{ :self :placesDesired | if((<=(placesDesired, 0)), { printString(round(self)) }, { let rounder = ^(10, placesDesired); let round = roundTo(self,reciprocal(rounder)); let prefix = if(isNegative(round), { '-' }, { '' }); let roundFractionPart = round((*(fractionalPart(abs(round)), rounder))); stringCatenate([prefix, printString(truncate(integerPart(abs(round)))), '.', padLeft(printString(roundFractionPart),[placesDesired], '0')]) }) }",
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
  "{ :self :aNumber :aBlock:/1 | if((=(aNumber, 0)), { error('@Number>>quotient: divideByZero') }, { aBlock(/(self, aNumber)) }) }",
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
  "{ :self :aNumber | quotientBy(self,aNumber, truncate:/1) }",
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
  "{ :self :aNumber | [quotient(self,aNumber), remainder(self,aNumber)] }",
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
  "{ :self | *(self, 57.29577951308232286465) }",
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
  "{ :self :operand | let count = bitShift(1,highBit((-(operand, 1)))); let result = one(self); whileTrue({ >(count, 0) }, { result := square(result); ifFalse((=(bitAnd(operand,count), 0)), { result := *(result, self) }); count := bitShift(count,-1) }); result }",
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
  "{ :self :operand | ifFalse(isInteger(operand), { error('Numnber>>raisedToInteger: operand is not an Integer') }); if((=(operand, 0)), { one(self) }, { if((=(operand, 1)), { self }, { if((<(operand, 0)), { reciprocal(raisedToInteger(self,negate(operand))) }, { if(isLargeInteger(operand), { ^(asLargeInteger(self), operand) }, { raisedToSmallInteger(self,operand) }) }) }) }) }",
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
  "{ :self | let zero = zero(self); if((>=(self, zero)), { self }, { zero }) }",
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
  "{ :self | self }",
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
  "{ :self | [self, zero(self)] }",
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
  "{ :self | /(one(self), self) }",
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
  "{ :self :aNumber :aBlock:/1 | -(self, (*(quotientBy(self,aNumber, aBlock:/1), aNumber))) }",
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
  "{ :self :aNumber | remainderBy(self,aNumber, truncate:/1) }",
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
    let __SPL79 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SPL79, 1);
    let _max = _at_2(__SPL79, 2);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min));
  }, ["self", "a"]),
  "{ :self :a | let __SPL79 = assertIsOfSize(a, 2); let min = at(__SPL79, 1); let max = at(__SPL79, 2); /((-(self, min)), (-(max, min))) }",
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
    let __SPL80 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SPL80, 1);
    let _max = _at_2(__SPL80, 2);
    let __SPL81 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SPL81, 1);
    let _yMax = _at_2(__SPL81, 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min)),
        _hyphenMinus_2(_yMax, _yMin),
      ),
      _yMin,
    );
  }, ["self", "a", "b"]),
  "{ :self :a :b | let __SPL80 = assertIsOfSize(a, 2); let min = at(__SPL80, 1); let max = at(__SPL80, 2); let __SPL81 = assertIsOfSize(b, 2); let yMin = at(__SPL81, 1); let yMax = at(__SPL81, 2); +(*((/((-(self, min)), (-(max, min)))), (-(yMax, yMin))), yMin) }",
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
  "{ :a :k :b :nu :q :c | { :t | +(a, (/((-(k, a)), (^((+(c, (*(q, exp((-(0, (*(b, t))))))))), (/(1, nu))))))) } }",
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
    return _roundDownTo_2(_self, 1);
  }, ["self"]),
  "{ :self | roundDownTo(self,1) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundDownTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_floor_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | *(floor((/(self, aNumber))), aNumber) }",
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
  "{ :self | truncate((+(self, (/(sign(self), 2))))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTowardsZeroTo",
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
        return _roundUpTo_2(_self, _aNumber);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _roundDownTo_2(_self, _aNumber);
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | if((<(self, 0)), { roundUpTo(self,aNumber) }, { roundDownTo(self,aNumber) }) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundTo",
  ["self", "quantum"],
  sl.annotateFunction(function (_self, _quantum) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _quantum";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_round_1(_solidus_2(_self, _quantum)), _quantum);
  }, ["self", "quantum"]),
  "{ :self :quantum | *(round((/(self, quantum))), quantum) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundToPrecision",
  ["self", "precision"],
  sl.annotateFunction(function (_self, _precision) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _precision";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _scalar = _circumflexAccent_2(10, _precision);
    /* Statements */
    return _solidus_2(_round_1(_asterisk_2(_self, _scalar)), _scalar);
  }, ["self", "precision"]),
  "{ :self :precision | let scalar = ^(10, precision); /(round((*(self, scalar))), scalar) }",
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
    return _roundTowardsZeroTo_2(_self, 1);
  }, ["self"]),
  "{ :self | roundTowardsZeroTo(self,1) }",
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
    return _roundUpTo_2(_self, 1);
  }, ["self"]),
  "{ :self | roundUpTo(self,1) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundUpTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_ceiling_1(_solidus_2(_self, _aNumber)), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | *(ceiling((/(self, aNumber))), aNumber) }",
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
  "{ :b :x | value(schlickBiasFunction(b),x) }",
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
  "{ :b | let p = -((/(1, b)), 2); { :x | /(x, (+((*(p, (-(1, x)))), 1))) } }",
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
  "{ :g :x | value(schlickGainFunction(g),x) }",
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
  "{ :g | let p = -((/(1, g)), 2); { :x | let q = -(1, (*(2, x))); if((<(x, 0.5)), { /(x, (+((*(p, q)), 1))) }, { /((-((*(p, q)), x)), (-((*(p, q)), 1))) }) } }",
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
        return _unit_1(_self);
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
            return _negate_1(_unit_1(_self));
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
  "{ :self | if((>(self, 0)), { unit(self) }, { if((<(self, 0)), { negate(unit(self)) }, { zero(self) }) }) }",
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
  "{ :self :aNumber | copySignTo(aNumber,self) }",
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
  "{ :self | |(isNegativeZero(self), { <(self, 0) }) }",
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
  "{ :self | *(self, smallFloatEpsilon(system)) }",
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
  "{ :self | *(self, smallFloatMax(system)) }",
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
  "{ :x | log((+(1, exp(x)))) }",
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
  "{ :x | /(x, (+(1, abs(x)))) }",
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
  "{ :self | *(self, self) }",
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
  "{ :x :p :y | reduce((+(x, (*(p, (-(Span(1, y, 1), 1)))))),*) }",
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
  "{ :self | >(self, 0) }",
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
  "{ :beta | { :x | /(x, (+(1, exp((*(negate(beta), x)))))) } }",
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
  "{ :self :aNumber | if(isNegative(self), { negate((^(negate(self), aNumber))) }, { ^(self, aNumber) }) }",
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
  "{ :self :stop :step :aBlock:/1 | if((=(step, 0)), { error('@Number>>toByDo: step must be non-zero') }, { let nextValue = self; if((<(step, 0)), { whileTrue({ <=(stop, nextValue) }, { aBlock(nextValue); nextValue := +(nextValue, step) }) }, { whileTrue({ >=(stop, nextValue) }, { aBlock(nextValue); nextValue := +(nextValue, step) }) }) }); self }",
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
  "{ :self :end :aBlock:/1 | let index = self; whileTrue({ <=(index, end) }, { aBlock(index); index := +(index, 1) }); self }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "truncateTo",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_quotient_2(_self, _aNumber), _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | *(quotient(self,aNumber), aNumber) }",
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
  "{ :self | *(self, 2) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "unit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
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
  "{ :self | boole((<=(abs(self), 0.5))) }",
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
  "{ :self :dx | if((<(abs(self), dx)), { zero(self) }, { one(self) }) }",
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
  "{ :self | if(isZero(self), { zero(self) }, { one(self) }) }",
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
  "{ :self | boole((>(self, 0))) }",
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
  "{ :self | if(betweenAnd(self,-1, 0), { +(self, 1) }, { if(betweenAnd(self,0, 1), { -(1, self) }, { 0 }) }) }",
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
  "{ :n :k | let answer = List(n, 0); atPut(answer, k, 1); answer }",
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
  "{ :self :end :aBlock:/1 | let step = if((<(end, self)), { -1 }, { 1 }); toByDo(self,end, step, aBlock:/1) }",
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
  "{ :self :low :high | let range = -(high, low); whileTrue({ <(self, low) }, { self := +(self, range) }); whileTrue({ >(self, high) }, { self := -(self, range) }); self }",
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
  "{ :self :low :high | let range = -(high, low); let z = %((-(self, low)), range); +(low, z) }",
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
  "{ :self | 0 }",
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
  "{ :self | false }",
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
  "{ :self | product(collect(self,unitBox:/1)) }",
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
  "{ :self | product(collect(self,unitStep:/1)) }",
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
  "{ :self | product(collect(self,unitTriangle:/1)) }",
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
  "{ :self | *(self, 1.2020569031595942853997381) }",
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
  "{ :self | *(self, 6.02214076E+23) }",
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
  "{ :n | +(2, (*(2, cos((/(pi(2), n)))))) }",
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
  "{ :self | *(self, 1.380649E-23) }",
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
  "{ :self | *(1.90216058, self) }",
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
  "{ :self | *(self, 0.9159655941772190150) }",
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
  "{ :b | if((=(b, 10)), { 0.1234567891011121314151617181920 }, { error(b,'champernowneNumber: b≠10') }) }",
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
  "{ :self | 1.303577269034296391257099112152551890730702504659404875755 }",
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
  "{ :self | *(self, 0.017453292519943295) }",
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
  "{ :self | *(self, 2.71828182845904523536028747135266249775724709369995) }",
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
  "{ :self | *(self, 8.8541878188E-12) }",
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
  "{ :self | *(self, 1.602176634E-19) }",
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
  "{ :self | *(self, 0.000000000000001) }",
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
  "{ :self | *(self, 0.57721566490153286060651209008240243104215933593992) }",
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
  "{ :self | *(self, 4.669201609102990671853203820466201617258) }",
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
  "{ :self | *(self, 1.22674201072035324441763023045536165587140969044025) }",
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
  "{ :self | *(self, 0.0072973525643) }",
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
  "{ :self | *(self, 4.527829566160879140882695988070469646929833632769728) }",
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
    return _asterisk_2(_self, 0.83462684167407318628142973);
  }, ["self"]),
  "{ :self | *(self, 0.83462684167407318628142973) }",
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
  "{ :self | *(self, exp(pi(1))) }",
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
  "{ :self | *(self, 1.2824271291006226368753425688697917277676889) }",
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
  "{ :self | *(pi(self), (-(3, sqrt(5)))) }",
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
  "{ :self | let phi = /((+(sqrt(5), 1)), 2); *(self, phi) }",
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
  "{ :self | *(self, 0.596347362323194074341078499369) }",
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
  "{ :self | *(self, -2.15778299665944622092914278682957772350) }",
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
  "{ :self | *(self, 0.114942044853296200701040157469598742831) }",
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
  "{ :self | *(self, 2.685452001065306445309714835) }",
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
  "{ :self | 1.7872316501829659330132748903370084 }",
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
  "{ :self | *(self, 0.543258965342976706952728295) }",
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
  "{ :self | *(self, 0.764223653589220662990698731) }",
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
  "{ :self | *(self, 2.62205755429211981046483959) }",
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
  "{ :self | *(self, 3.27582291872181115978768188) }",
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
  "{ :self | *(self, (^(2, goldenRatio(1)))) }",
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
  "{ :self | *(self, 1.25663706127E-6) }",
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
  "{ :self | *(self, 0.2614972128476427837554268386086958590516) }",
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
  "{ :self | *(self, 0.567143290409783872999968662210) }",
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
  "{ :self | *(self, 0.8507361882018672603677977) }",
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
  "{ :self | *(self, 3.1415926535897932384626433) }",
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
  "{ :self | *(self, 6.62607015E-34) }",
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
  "{ :self | *(self, 1.3247179572447460259609089) }",
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
  "{ :self | *(self, 0.4124540336401075977833614) }",
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
  "{ :self | *(self, 1.4142135623730950488) }",
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
  "{ :self | *(self, 0.7098034428612913146417873994445755970125) }",
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
  "{ :self | *(self, 3.359885666243177553172011302918927179689) }",
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
  "{ :self | *(self, 1.054571817E-34) }",
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
  "{ :self | *(self, 2.502907875095892822283902873218215786381) }",
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
  "{ :self | *(self, 0.822825249678847032995328716261464949475) }",
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
  "{ :self | *(self, (+(2, (*(2, cos(pi((/(2, 7))))))))) }",
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
  "{ :self | *(self, (+(sqrt(2), 1))) }",
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
  "{ :self | *(self, 1.45136923488338105028396848589202744949303228) }",
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
  "{ :self | *(self, 299792458) }",
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
  "{ :self | let k = [0.57721566490153286061, -0.072815845483676724861, -0.0096903631928723184845, 0.0020538344203033458662, 0.0023253700654673000575, 0.00079332381730106270175, -0.00023876934543019960987, -0.00052728956705775104607, -0.00035212335380303950960, -0.000034394774418088048178, 0.00020533281490906479468, 0.00027018443954390352667, 0.00016727291210514019335, -0.000027463806603760158860, -0.00020920926205929994584, -0.00028346865532024144664, -0.00019969685830896977471, 0.000026277037109918336699, 0.00030736840814925282659, 0.00050360545304735562906, 0.00046634356151155944940, 0.00010443776975600011581, -0.00054159958220399770166, -0.0012439620904082457793, -0.0015885112789035615619, -0.0010745919527384888247]; at(k,+(self, 1)) }",
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
  "{ :self | *(self, 0.81255655901600638769) }",
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
  "{ :self | *(self, 1.465571231876768) }",
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
  "{ :self | *(self, 2.2055694304005903) }",
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
  "{ :n | *(n, 1.83928675521416113255185) }",
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
  "{ :self | *(self, 1.25663706127E-6) }",
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
  "{ :self | *(self, 8.8541878188E-12) }",
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
    let __SPL82 = _assertIsOfSize_2(_a, 2);
    let _min = _at_2(__SPL82, 1);
    let _max = _at_2(__SPL82, 2);
    let __SPL83 = _assertIsOfSize_2(_b, 2);
    let _yMin = _at_2(__SPL83, 1);
    let _yMax = _at_2(__SPL83, 2);
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
  "{ :a :b | let __SPL82 = assertIsOfSize(a, 2); let min = at(__SPL82, 1); let max = at(__SPL82, 2); let __SPL83 = assertIsOfSize(b, 2); let yMin = at(__SPL83, 1); let yMax = at(__SPL83, 2); { :x | +(*((/((-(x, min)), (-(max, min)))), (-(yMax, yMin))), yMin) } }",
);
