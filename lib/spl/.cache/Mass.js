sl.addType(
  false,
  "Mass",
  "Mass",
  ["Object", "Magnitude"],
  ["grams"],
);

sl.copyTraitToType(
  "Object",
  "Mass",
);

sl.copyTraitToType(
  "Magnitude",
  "Mass",
);

sl.addMethod(
  "Mass",
  "Mass",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMass_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_grams_1(_self), _grams_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isMass & {\n\t\t\tself.grams = anObject.grams\n\t\t}\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isMass_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _tilde_2(_grams_1(_self), _grams_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isMass & {\n\t\t\tself.grams ~ anObject.grams\n\t\t}\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "lessThanSign",
  ["self", "aMass"],
  function (_self, _aMass) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMass";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_grams_1(_self), _grams_1(_aMass));
  },
  "{ :self :aMass |\n\t\tself.grams < aMass.grams\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "asGrams",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _grams_1(_self);
  },
  "{ :self |\n\t\tself.grams\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "kilograms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_grams_1(_self), 1000);
  },
  "{ :self |\n\t\tself.grams / 1000\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "ounces",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_grams_1(_self), 28.349523125);
  },
  "{ :self |\n\t\tself.grams * 28.349523125\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
  "pounds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_kilograms_1(_self), 0.45359237);
  },
  "{ :self |\n\t\tself.kilograms * 0.45359237\n\t}",
);

sl.addMethod(
  "Mass",
  "Mass",
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
    return _plusSignPlusSign_2(_storeString_1(_grams_1(_self)), ".grams");
  },
  "{ :self |\n\t\tself.grams.storeString ++ '.grams'\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Mass",
  "asGrams",
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
  "Mass",
  "grams",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newMass_0(), _self);
  },
  "{ :self |\n\t\tnewMass().initializeSlots(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Mass",
  "kilograms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _grams_1(_asterisk_2(_self, 1000));
  },
  "{ :self |\n\t\t(self * 1000).grams\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Mass",
  "ounces",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _grams_1(_asterisk_2(_self, 28.349523125));
  },
  "{ :self |\n\t\t(self * 28.349523125).grams\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Mass",
  "pounds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _kilograms_1(_asterisk_2(_self, 0.45359237));
  },
  "{ :self |\n\t\t(self * 0.45359237).kilograms\n\t}",
);
