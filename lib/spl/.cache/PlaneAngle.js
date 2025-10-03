sl.addType(
  false,
  "PlaneAngle",
  "PlaneAngle",
  ["Object", "Equatable", "Comparable", "Magnitude"],
  ["radians"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PlaneAngle",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PlaneAngle",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "PlaneAngle",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "PlaneAngle",
);

sl.addMethodToExistingType(
  "PlaneAngle",
  "PlaneAngle",
  "lessThanSign",
  ["self", "anAngle"],
  sl.annotateFunction(function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_radians_1(_self), _radians_1(_anAngle));
  }, ["self", "anAngle"]),
  "{ :self :anAngle | <(radians(self), radians(anAngle)) }",
);

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
  "PlaneAngle",
  "PlaneAngle",
  "equalBy",
  ["self", "anAngle", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anAngle, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anAngle, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_radians_1(_self), _radians_1(_anAngle));
  }, ["self", "anAngle", "aBlock:/2"]),
  "{ :self :anAngle :aBlock:/2 | aBlock(radians(self), radians(anAngle)) }",
);

sl.addMethodToExistingType(
  "PlaneAngle",
  "PlaneAngle",
  "magnitude",
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

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
  "PlaneAngle",
  "PlaneAngle",
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

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
  "PlaneAngle",
  "PlaneAngle",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "radians";
  }, ["unused"]),
  "{ :unused | 'radians' }",
);

sl.addMethodToExistingType(
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
    return _initializeSlots_2(_newPlaneAngle_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newPlaneAngle(),self) }",
);

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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
  "Quantity",
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
