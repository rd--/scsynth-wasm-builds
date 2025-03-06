sl.addType(
  false,
  "Angle",
  "Angle",
  ["Object", "Magnitude"],
  ["radians"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Angle",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Angle",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "equalsSign",
  ["self", "anAngle"],
  sl.annotateFunction(function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_radians_1(_self), _radians_1(_anAngle));
  }, ["self", "anAngle"]),
  "{ :self :anAngle | =(radians(self), radians(anAngle)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
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
  "Angle",
  "Angle",
  "asGradians",
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

sl.addMethodToExistingType(
  "Angle",
  "Angle",
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

sl.addMethodToExistingType(
  "Angle",
  "Angle",
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
  "Angle",
  "Angle",
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

sl.addMethodToExistingType(
  "Angle",
  "Angle",
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
  "Angle",
  "Angle",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_radians_1(_self)), ".radians");
  }, ["self"]),
  "{ :self | ++(storeString(radians(self)), '.radians') }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
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
  "Angle",
  "Angle",
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
  "@Number",
  "Angle",
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
  "Angle",
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
  "Angle",
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
  "@Number",
  "Angle",
  "radians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newAngle_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newAngle(),self) }",
);
