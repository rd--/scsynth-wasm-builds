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
  "lessThan",
  ["self", "anAngle"],
  function (_self, _anAngle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anAngle";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThan_2(_radians_1(_self), _radians_1(_anAngle));
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _radians_1(_self);
  },
  "{ :self |\n\t\tself.radians\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_dividedBy_2(_radians_1(_self), _pi), 180);
  },
  "{ :self |\n\t\tself.radians / pi * 180\n\t}",
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusPlus_2(_storeString_1(_radians_1(_self)), ".radians");
  },
  "{ :self |\n\t\tself.radians.storeString ++ '.radians'\n\t}",
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
      throw Error(errorMessage);
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _radians_1(_times_2(_dividedBy_2(_self, 180), _pi));
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
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newAngle_0(), _self);
  },
  "{ :self |\n\t\tnewAngle().initializeSlots(self)\n\t}",
);
