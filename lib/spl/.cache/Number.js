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
    return _conjugated_1(_self);
  }, ["self"]),
  "{ :self | conjugated(self) }",
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
    return _negated_1(_self);
  }, ["self"]),
  "{ :self | negated(self) }",
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
        return _negated_1(_self);
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
  "{ :self | if(isNegative(self), { negated(self) }, { self }) }",
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
  "absSquared",
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
          let __SPL245 = [
            _asterisk_2(0.5, _plusSign_2(_a, _b)),
            _sqrt_1(_asterisk_2(_a, _b)),
          ];
          /* Statements */
          _a = _at_2(__SPL245, 1);
          return _b = _at_2(__SPL245, 2);
        }, [])());
      }, []),
    );
    return _a;
  }, ["self", "aNumber"]),
  "{ :self :aNumber | let a = self; let b = aNumber; whileFalse({ isVeryCloseTo(a,b) }, { ({ let __SPL245 = [*(0.5, (+(a, b))), sqrt((*(a, b)))]; a := at(__SPL245, 1); b := at(__SPL245, 2) } . ()) }); a }",
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
    return _truncated_1(_self);
  }, ["self"]),
  "{ :self | truncated(self) }",
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
  "atRandom",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_3(_self, _shape, _system);
  }, ["self", "shape"]),
  "{ :self :shape | atRandom(self,shape, system) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atRandom_3(_self, [], _system);
  }, ["self"]),
  "{ :self | atRandom(self,[], system) }",
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

sl.addMethodToExistingTrait(
  "Number",
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
    let _truncation = _truncated_1(_self);
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
  "{ :self | let truncation = truncated(self); if((<=(self, 0)), { truncation }, { if((=(self, truncation)), { truncation }, { +(truncation, 1) }) }) }",
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
        return _negated_1(_abs_1(_aNumber));
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
  "{ :self :aNumber | if(signBit(self), { negated(abs(aNumber)) }, { abs(aNumber) }) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "coth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_cosh_1(_self), _sinh_1(_self));
  }, ["self"]),
  "{ :self | /(cosh(self), sinh(self)) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "cubed",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "degreeCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(
      _degreesToRadians_1(
        _hyphenMinus_2(
          90,
          _abs_1(
            _hyphenMinus_2(_percentSign_2(_plusSign_2(180, _self), 360), 180),
          ),
        ),
      ),
    );
  }, ["self"]),
  "{ :self | sin(degreesToRadians((-(90, abs((-(%(+(180, self), 360), 180))))))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "degreeSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _degreeCos_1(_hyphenMinus_2(90, _self));
  }, ["self"]),
  "{ :self | degreeCos((-(90, self))) }",
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
        return _sum_1(_circumflexAccent_2(_divisors_1(_n), _k));
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
  "{ :k :n | if(isNumber(n), { sum((^(divisors(n), k))) }, { adaptToNumberAndApply(n,k, divisorSigma:/2) }) }",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "erfAbramowitzStegun",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = 0.47047;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.3480242, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.0958798, _t), _t);
        let _a3 = _asterisk_2(_asterisk_2(_asterisk_2(0.7478556, _t), _t), _t);
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(_plusSign_2(_a1, _a2), _a3),
            _exp_1(_negated_1(_squared_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negated_1(_erf_1(_negated_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>=(x, 0)), { let p = 0.47047; let t = /(1, (+(1, (*(p, x))))); let a1 = *(0.3480242, t); let a2 = *(*(-0.0958798, t), t); let a3 = *(*(*(0.7478556, t), t), t); -(1, (*((+(+(a1, a2), a3)), exp(negated(squared(x)))))) }, { negated(erf(negated(x))) }) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "erf",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = 0.3275911;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.254829592, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.284496736, _t), _t);
        let _a3 = _asterisk_2(
          _asterisk_2(_asterisk_2(1.421413741, _t), _t),
          _t,
        );
        let _a4 = _asterisk_2(
          _asterisk_2(_asterisk_2(_asterisk_2(-1.453152027, _t), _t), _t),
          _t,
        );
        let _a5 = _asterisk_2(
          _asterisk_2(
            _asterisk_2(_asterisk_2(_asterisk_2(1.061405429, _t), _t), _t),
            _t,
          ),
          _t,
        );
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(
              _plusSign_2(_plusSign_2(_plusSign_2(_a1, _a2), _a3), _a4),
              _a5,
            ),
            _exp_1(_negated_1(_squared_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negated_1(_erf_1(_negated_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>=(x, 0)), { let p = 0.3275911; let t = /(1, (+(1, (*(p, x))))); let a1 = *(0.254829592, t); let a2 = *(*(-0.284496736, t), t); let a3 = *(*(*(1.421413741, t), t), t); let a4 = *(*(*(*(-1.453152027, t), t), t), t); let a5 = *(*(*(*(*(1.061405429, t), t), t), t), t); -(1, (*((+(+(+(+(a1, a2), a3), a4), a5)), exp(negated(squared(x)))))) }, { negated(erf(negated(x))) }) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "erfc",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _erf_1(_x));
  }, ["x"]),
  "{ :x | -(1, erf(x)) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "euclideanDistance",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_hyphenMinus_2(_aNumber, _self));
  }, ["self", "aNumber"]),
  "{ :self :aNumber | abs((-(aNumber, self))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "eulerGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.577215664901532860606512090082402431042);
  }, ["self"]),
  "{ :self | *(self, 0.577215664901532860606512090082402431042) }",
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
  "factorialPower",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_1(
      _hyphenMinus_2(_self, _to_2(0, _hyphenMinus_2(_anInteger, 1))),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | product((-(self, to(0,-(anInteger, 1))))) }",
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
    let _truncation = _truncated_1(_self);
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
  "{ :self | let truncation = truncated(self); if((>=(self, 0)), { truncation }, { if((=(self, truncation)), { truncation }, { -(truncation, 1) }) }) }",
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
  "foldBetweenAnd",
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
  "fractionPart",
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

sl.addMethodToExistingTrait(
  "Number",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "halved",
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
  "haversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(0.5, _hyphenMinus_2(1, _cos_1(_self)));
  }, ["self"]),
  "{ :self | *(0.5, (-(1, cos(self)))) }",
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
  "inf",
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
    return _truncated_1(_self);
  }, ["self"]),
  "{ :self | truncated(self) }",
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
        let _d = [1, 3543889200, 1.637067800];
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
              _negated_1(_log_1(_solidus_2(_hyphenMinus_2(1, _z), 2))),
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
              _exp_1(_asterisk_2(_negated_1(_r), _r)),
            ),
          ),
        );
        _r = _hyphenMinus_2(
          _r,
          _solidus_2(
            _hyphenMinus_2(_erf_1(_r), _z),
            _asterisk_2(
              _solidus_2(2, _sqrt_1(_pi_1(1))),
              _exp_1(_asterisk_2(_negated_1(_r), _r)),
            ),
          ),
        );
        return _r;
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>=(abs(x), 1)), { *(Infinity, sign(x)) }, { let a = [0.886226899, -1.645349621, 0.914624893, -0.140543331]; let b = [1, -2.118377725, 1.442710462, -0.329097515, 0.012229801]; let c = [-1.970840454, -1.62490649, 3.429567803, 1.641345311]; let d = [1, 3543889200, 1.637067800]; let z = *(sign(x), x); let r = nil; if((<=(z, 0.7)), { let x2 = *(z, z); r := *(z, (+(*((+(*((+(*(at(a, 4), x2), at(a, 3))), x2), at(a, 2))), x2), at(a, 1)))); r := /(r, (+(*((+(*((+(*((+(*(at(b, 5), x2), at(b, 4))), x2), at(b, 3))), x2), at(b, 2))), x2), at(b, 1)))) }, { let y = sqrt(negated(log((/((-(1, z)), 2))))); r := (+(*((+(*((+(*(at(c, 4), y), at(c, 3))), y), at(c, 2))), y), at(c, 1))); r := /(r, (+(*((+(*(at(d, 3), y), at(d, 2))), y), at(d, 1)))) }); r := *(r, sign(x)); z := *(z, sign(x)); r := -(r, (/((-(erf(r), z)), (*(/(2, sqrt(pi(1))), exp((*(negated(r), r)))))))); r := -(r, (/((-(erf(r), z)), (*(/(2, sqrt(pi(1))), exp((*(negated(r), r)))))))); r }) }",
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
    let _c = _log_1(_hyphenMinus_2(1, _squared_1(_x)));
    /* Statements */
    return _asterisk_2(
      _sqrt_1(
        _hyphenMinus_2(
          _sqrt_1(
            _hyphenMinus_2(
              _squared_1(_plusSign_2(_b, _solidus_2(_c, 2))),
              _solidus_2(_c, _a),
            ),
          ),
          _plusSign_2(_b, _solidus_2(_c, 2)),
        ),
      ),
      _sign_1(_x),
    );
  }, ["x"]),
  "{ :x | let a = 0.147; let b = (/(2, pi(a))); let c = log((-(1, squared(x)))); *(sqrt((-(sqrt((-(squared((+(b, (/(c, 2))))), (/(c, a))))), (+(b, (/(c, 2))))))), sign(x)) }",
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
              _to_2(1, _limit),
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
  "{ :self :limit | if(isZero(self), { 0 }, { +(+(eulerGamma(1), (log(abs(log(self))))), sum(collect(to(1, limit), { :k | /((^(log(self), k)), (*(factorial(k), k))) }))) }) }",
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
  "metallicMean",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _plusSign_2(_n, _sqrt_1(_plusSign_2(_squared_1(_n), 4))),
      2,
    );
  }, ["n"]),
  "{ :n | /((+(n, sqrt((+(squared(n), 4))))), 2) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "minkowskiDistance",
  ["p", "u", "v"],
  sl.annotateFunction(function (_p, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _u, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _sum_1(_circumflexAccent_2(_abs_1(_hyphenMinus_2(_u, _v)), _p)),
      _solidus_2(1, _p),
    );
  }, ["p", "u", "v"]),
  "{ :p :u :v | ^(sum((^(abs((-(u, v))), p))), (/(1, p))) }",
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
  "negated",
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
        return _at_2(_l, _bisect_3(_l, _n, _lessThanSignEqualsSign_2));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self | niceNumberBy(self, { :l :n | at(l, bisect(l,n, <=)) }) }",
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
    let _m = _circumflexAccent_2(
      10,
      _negated_1(_floor_1(_log10_1(_abs_1(_n)))),
    );
    let _steps = [1, 1.5, 2, 2.5, 5, 7.5, 10];
    let _z = _aBlock_2(_steps, _asterisk_2(_n, _m));
    /* Statements */
    return _solidus_2(_z, _m);
  }, ["self", "aBlock:/2"]),
  "{ :self :aBlock:/2 | let n = self; let m = ^(10, negated(floor(log10(abs(n))))); let steps = [1, 1.5, 2, 2.5, 5, 7.5, 10]; let z = aBlock(steps,*(n, m)); /(z, m) }",
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
        return _first_1(_nearest_3(_l, _n, _hyphenMinus_2));
      }, ["l", "n"]),
    );
  }, ["self"]),
  "{ :self | niceNumberBy(self, { :l :n | first(nearest(l,n, -)) }) }",
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

sl.addMethodToExistingTrait(
  "Number",
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
      _solidus_2(
        _asterisk_2(_asterisk_2(2, _h), _cubed_1(_nu)),
        _squared_1(_c),
      ),
      _solidus_2(
        1,
        _hyphenMinus_2(
          _exp_1(_solidus_2(_asterisk_2(_h, _nu), _asterisk_2(_k, _t))),
          1,
        ),
      ),
    );
  }, ["nu", "t"]),
  "{ :nu :t | let c = speedOfLight(1); let h = planckConstant(1); let k = boltzmannConstant(1); *((/((*(*(2, h), cubed(nu))), (squared(c)))), (/(1, (-(exp((/((*(h, nu)), (*(k, t))))), 1))))) }",
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
        _asterisk_2(_asterisk_2(2, _h), _squared_1(_c)),
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
  "{ :lambda :t | let c = speedOfLight(1); let h = planckConstant(1); let k = boltzmannConstant(1); *((/((*(*(2, h), squared(c))), (^(lambda, 5)))), (/(1, (-(exp((/((*(h, c)), (*(*(lambda, k), t))))), 1))))) }",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "powerMod",
  ["self", "exponent", "modulo"],
  sl.annotateFunction(function (_self, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _exponent, _modulo";
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
        return _percentSign_2(_circumflexAccent_2(_self, _exponent), _modulo);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return "Number>>powerMod: not implemented for negative exponents";
      }, []),
    );
  }, ["self", "exponent", "modulo"]),
  "{ :self :exponent :modulo | if((>(exponent, 0)), { %((^(self, exponent)), modulo) }, { 'Number>>powerMod: not implemented for negative exponents' }) }",
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
        return _printString_1(_rounded_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _rounder = _circumflexAccent_2(10, _placesDesired);
        let _rounded = _roundTo_2(_self, _reciprocal_1(_rounder));
        let _prefix = _if_3(
          _isNegative_1(_rounded),
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
        let _roundedFractionPart = _rounded_1(
          _asterisk_2(_fractionPart_1(_abs_1(_rounded)), _rounder),
        );
        /* Statements */
        return _stringCatenate_1([
          _prefix,
          _printString_1(_truncated_1(_integerPart_1(_abs_1(_rounded)))),
          ".",
          _padLeft_3(
            _printString_1(_roundedFractionPart),
            [_placesDesired],
            "0",
          ),
        ]);
      }, []),
    );
  }, ["self", "placesDesired"]),
  "{ :self :placesDesired | if((<=(placesDesired, 0)), { printString(rounded(self)) }, { let rounder = ^(10, placesDesired); let rounded = roundTo(self,reciprocal(rounder)); let prefix = if(isNegative(rounded), { '-' }, { '' }); let roundedFractionPart = rounded((*(fractionPart(abs(rounded)), rounder))); stringCatenate([prefix, printString(truncated(integerPart(abs(rounded)))), '.', padLeft(printString(roundedFractionPart),[placesDesired], '0')]) }) }",
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
    return _quotientBy_3(_self, _aNumber, _truncated_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | quotientBy(self,aNumber, truncated:/1) }",
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
        _result = _squared_1(_result);
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
  "{ :self :operand | let count = bitShift(1,highBit((-(operand, 1)))); let result = one(self); whileTrue({ >(count, 0) }, { result := squared(result); ifFalse((=(bitAnd(operand,count), 0)), { result := *(result, self) }); count := bitShift(count,-1) }); result }",
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
                  _raisedToInteger_2(_self, _negated_1(_operand)),
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
  "{ :self :operand | ifFalse(isInteger(operand), { error('Numnber>>raisedToInteger: operand is not an Integer') }); if((=(operand, 0)), { one(self) }, { if((=(operand, 1)), { self }, { if((<(operand, 0)), { reciprocal(raisedToInteger(self,negated(operand))) }, { if(isLargeInteger(operand), { ^(asLargeInteger(self), operand) }, { raisedToSmallInteger(self,operand) }) }) }) }) }",
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
    return _remainderBy_3(_self, _aNumber, _truncated_1);
  }, ["self", "aNumber"]),
  "{ :self :aNumber | remainderBy(self,aNumber, truncated:/1) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min));
  }, ["self", "min", "max"]),
  "{ :self :min :max | /((-(self, min)), (-(max, min))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "rescale",
  ["self", "min", "max", "ymin", "ymax"],
  sl.annotateFunction(function (_self, _min, _max, _ymin, _ymax) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _self, _min, _max, _ymin, _ymax";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _solidus_2(_hyphenMinus_2(_self, _min), _hyphenMinus_2(_max, _min)),
        _hyphenMinus_2(_ymax, _ymin),
      ),
      _ymin,
    );
  }, ["self", "min", "max", "ymin", "ymax"]),
  "{ :self :min :max :ymin :ymax | +(*((/((-(self, min)), (-(max, min)))), (-(ymax, ymin))), ymin) }",
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
  "rounded",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncated_1(_plusSign_2(_self, _solidus_2(_sign_1(_self), 2)));
  }, ["self"]),
  "{ :self | truncated((+(self, (/(sign(self), 2))))) }",
);

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "roundToTowardsZero",
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
    return _asterisk_2(_rounded_1(_solidus_2(_self, _quantum)), _quantum);
  }, ["self", "quantum"]),
  "{ :self :quantum | *(rounded((/(self, quantum))), quantum) }",
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
    return _solidus_2(_rounded_1(_asterisk_2(_self, _scalar)), _scalar);
  }, ["self", "precision"]),
  "{ :self :precision | let scalar = ^(10, precision); /(rounded((*(self, scalar))), scalar) }",
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
    return _roundToTowardsZero_2(_self, 1);
  }, ["self"]),
  "{ :self | roundToTowardsZero(self,1) }",
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
            return _negated_1(_unit_1(_self));
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
  "{ :self | if((>(self, 0)), { unit(self) }, { if((<(self, 0)), { negated(unit(self)) }, { zero(self) }) }) }",
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

sl.addMethodToExistingTrait(
  "Number",
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

sl.addMethodToExistingTrait(
  "Number",
  "Number",
  "squared",
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
      _plusSign_2(_x, _asterisk_2(_p, _hyphenMinus_2(_to_2(1, _y), 1))),
      _asterisk_2,
    );
  }, ["x", "p", "y"]),
  "{ :x :p :y | reduce((+(x, (*(p, (-(to(1, y), 1)))))),*) }",
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

sl.addMethodToExistingTrait(
  "Number",
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
        return _negated_1(_circumflexAccent_2(_negated_1(_self), _aNumber));
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
  "{ :self :aNumber | if(isNegative(self), { negated((^(negated(self), aNumber))) }, { ^(self, aNumber) }) }",
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
  "wrapBetweenAnd",
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
