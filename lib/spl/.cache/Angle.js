sl.addType(
  false,
  "Angle",
  "Angle",
  ["Object", "Magnitude"],
  ["radians"],
);

sl.copyTraitToType(
  "Object",
  "Angle",
);

sl.copyTraitToType(
  "Magnitude",
  "Angle",
);

sl.addMethod(
  "Angle",
  "Angle",
  "equalsSign",
  ["self", "anAngle"],
  function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalsSign_2(_radians_1(_self), _radians_1(_anAngle));
  },
  "{ :self :anAngle |\n\t\tself.radians = anAngle.radians\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "lessThanSign",
  ["self", "anAngle"],
  function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_radians_1(_self), _radians_1(_anAngle));
  },
  "{ :self :anAngle |\n\t\tself.radians < anAngle.radians\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "asRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _radians_1(_self);
  },
  "{ :self |\n\t\tself.radians\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _cos_1(_radians_1(_self));
  },
  "{ :self |\n\t\tself.radians.cos\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "degrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_solidus_2(_radians_1(_self), _pi), 180);
  },
  "{ :self |\n\t\tself.radians / pi * 180\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sin_1(_radians_1(_self));
  },
  "{ :self |\n\t\tself.radians.sin\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_radians_1(_self)), ".radians");
  },
  "{ :self |\n\t\tself.radians.storeString ++ '.radians'\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _tan_1(_radians_1(_self));
  },
  "{ :self |\n\t\tself.radians.tan\n\t}",
);

sl.addMethod(
  "Angle",
  "Angle",
  "vector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _angleVector_1(_radians_1(_self));
  },
  "{ :self |\n\t\tself.radians.angleVector\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Angle",
  "asRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Angle",
  "degrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _radians_1(_asterisk_2(_solidus_2(_self, 180), _pi));
  },
  "{ :self |\n\t\t(self / 180 * pi).radians\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Angle",
  "radians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newAngle_0(), _self);
  },
  "{ :self |\n\t\tnewAngle().initializeSlots(self)\n\t}",
);
