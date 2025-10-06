sl.addTrait("PlaneAngle", "PlaneAngle");

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "asRadians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_self);
  }, ["self"]),
  "{ :self | radians(self) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cos_1(_radians_1(_self));
  }, ["self"]),
  "{ :self | cos(radians(self)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "degrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_solidus_2(_radians_1(_self), _pi_1(1)), 180);
  }, ["self"]),
  "{ :self | *(/(radians(self), pi(1)), 180) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "dmsList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dmsList_1(_degrees_1(_self));
  }, ["self"]),
  "{ :self | dmsList(degrees(self)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "gradians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_radians_1(_self), 400);
  }, ["self"]),
  "{ :self | /(radians(self), 400) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isAcute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_radians_1(_self), _pi_1(_Fraction_2(1n, 2n)));
  }, ["self"]),
  "{ :self | <(radians(self), pi(Fraction(1L, 2L))) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isFull",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_radians_1(_self), _pi_1(2));
  }, ["self"]),
  "{ :self | isVeryCloseTo(radians(self),pi(2)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isObtuse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_radians_1(_self), _pi_1(_Fraction_2(1n, 2n))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_radians_1(_self), _pi_1(1));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(>(radians(self), pi(Fraction(1L, 2L))), { <(radians(self), pi(1)) }) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isReflex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_radians_1(_self), _pi_1(1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_radians_1(_self), _pi_1(2));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(>(radians(self), pi(1)), { <(radians(self), pi(2)) }) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_radians_1(_self), _pi_1(_Fraction_2(1n, 2n)));
  }, ["self"]),
  "{ :self | isVeryCloseTo(radians(self),pi(Fraction(1L, 2L))) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "isStraight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_radians_1(_self), _pi_1(1));
  }, ["self"]),
  "{ :self | isVeryCloseTo(radians(self),pi(1)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "radians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "radians");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'radians') }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(_radians_1(_self));
  }, ["self"]),
  "{ :self | sin(radians(self)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tan_1(_radians_1(_self));
  }, ["self"]),
  "{ :self | tan(radians(self)) }",
);

sl.addMethodToExistingTrait(
  "PlaneAngle",
  "PlaneAngle",
  "vector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _angleVector_1(_radians_1(_self));
  }, ["self"]),
  "{ :self | angleVector(radians(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "PlaneAngle",
  "PlaneAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "radians");
  }, ["self"]),
  "{ :self | Quantity(self, 'radians') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlaneAngle",
  "asRadians",
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

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlaneAngle",
  "degrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_solidus_2(_pi_1(_self), 180));
  }, ["self"]),
  "{ :self | radians((/(pi(self), 180))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlaneAngle",
  "dmsList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = [60, 60];
    /* Statements */
    return _asterisk_2(
      _mixedRadixEncode_2(_asterisk_2(_asterisk_2(_abs_1(_self), 60), 60), _b),
      _sign_1(_self),
    );
  }, ["self"]),
  "{ :self | let b = [60, 60]; *(mixedRadixEncode((*(*(abs(self), 60), 60)),b), sign(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlaneAngle",
  "dmsString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dmsString_1(_dmsList_1(_self));
  }, ["self"]),
  "{ :self | dmsString(dmsList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlaneAngle",
  "gradians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_asterisk_2(_self, 400));
  }, ["self"]),
  "{ :self | radians((*(self, 400))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlaneAngle",
  "dmsList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _dmsList_1(_fromDms_1(_self));
  }, ["self"]),
  "{ :self | dmsList(fromDms(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlaneAngle",
  "dmsString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_dmsList_1(_self), 3);
    let _d = _at_2(__SplVar1, 1);
    let _m = _at_2(__SplVar1, 2);
    let _s = _at_2(__SplVar1, 3);
    /* Statements */
    return _format_2("%°%′%″", [
      _printString_1(_d),
      _printString_1(_m),
      _printStringToFixed_2(_s, 3),
    ]);
  }, ["self"]),
  "{ :self | let __SplVar1 = assertIsOfSize(dmsList(self), 3); let d = at(__SplVar1, 1); let m = at(__SplVar1, 2); let s = at(__SplVar1, 3); format('%°%′%″',[printString(d), printString(m), printStringToFixed(s,3)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlaneAngle",
  "fromDms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _numberCompose_2(_self, [1, _solidus_2(1, 60), _solidus_2(1, 3600)]);
  }, ["self"]),
  "{ :self | numberCompose(self,[1, /(1, 60), /(1, 3600)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "PlaneAngle",
  "degrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _degrees_1);
  }, ["self"]),
  "{ :self | collect(self,degrees:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "PlaneAngle",
  "radians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _radians_1);
  }, ["self"]),
  "{ :self | collect(self,radians:/1) }",
);
