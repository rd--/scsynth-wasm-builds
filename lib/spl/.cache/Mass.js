sl.addType(
  false,
  "Mass",
  "Mass",
  ["Object", "Magnitude"],
  ["grams"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Mass",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Mass",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "lessThanSign",
  ["self", "aMass"],
  function (_self, _aMass) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMass";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_grams_1(_self), _grams_1(_aMass));
  },
  "{ :self :aMass | <(grams(self), grams(aMass)) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "asGrams",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _grams_1(_self);
  },
  "{ :self | grams(self) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "kilograms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_grams_1(_self), 1000);
  },
  "{ :self | /(grams(self), 1000) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "ounces",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_grams_1(_self), 28.349523125);
  },
  "{ :self | *(grams(self), 28.349523125) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "pounds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_kilograms_1(_self), 0.45359237);
  },
  "{ :self | *(kilograms(self), 0.45359237) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_grams_1(_self)), ".grams");
  },
  "{ :self | ++(storeString(grams(self)), '.grams') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "asGrams",
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
  "Mass",
  "grams",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newMass_0(), _self);
  },
  "{ :self | initializeSlots(newMass(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "kilograms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _grams_1(_asterisk_2(_self, 1000));
  },
  "{ :self | grams((*(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "ounces",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _grams_1(_asterisk_2(_self, 28.349523125));
  },
  "{ :self | grams((*(self, 28.349523125))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "pounds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_asterisk_2(_self, 0.45359237));
  },
  "{ :self | kilograms((*(self, 0.45359237))) }",
);
