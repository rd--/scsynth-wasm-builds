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
  function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalsSign_2(_radians_1(_self), _radians_1(_anAngle));
  },
  "{ :self :anAngle | =(radians(self), radians(anAngle)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "lessThanSign",
  ["self", "anAngle"],
  function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_radians_1(_self), _radians_1(_anAngle));
  },
  "{ :self :anAngle | <(radians(self), radians(anAngle)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "asGradians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_radians_1(_self), 400);
  },
  "{ :self | /(radians(self), 400) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "asRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_self);
  },
  "{ :self | radians(self) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cos_1(_radians_1(_self));
  },
  "{ :self | cos(radians(self)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "degrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_solidus_2(_radians_1(_self), _pi_1(1)), 180);
  },
  "{ :self | *(/(radians(self), pi(1)), 180) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(_radians_1(_self));
  },
  "{ :self | sin(radians(self)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_radians_1(_self)), ".radians");
  },
  "{ :self | ++(storeString(radians(self)), '.radians') }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tan_1(_radians_1(_self));
  },
  "{ :self | tan(radians(self)) }",
);

sl.addMethodToExistingType(
  "Angle",
  "Angle",
  "vector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _angleVector_1(_radians_1(_self));
  },
  "{ :self | angleVector(radians(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Angle",
  "asRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Angle",
  "degrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_solidus_2(_pi_1(_self), 180));
  },
  "{ :self | radians((/(pi(self), 180))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Angle",
  "gradians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radians_1(_asterisk_2(_self, 400));
  },
  "{ :self | radians((*(self, 400))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Angle",
  "radians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newAngle_0(), _self);
  },
  "{ :self | initializeSlots(newAngle(),self) }",
);
