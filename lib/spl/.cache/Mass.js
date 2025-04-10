sl.addType(
  false,
  "Mass",
  "Mass",
  ["Object", "Magnitude"],
  ["kilograms"],
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
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "lessThanSign",
  ["self", "aMass"],
  sl.annotateFunction(function (_self, _aMass) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aMass";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_kilograms_1(_self), _kilograms_1(_aMass));
  }, ["self", "aMass"]),
  "{ :self :aMass | <(kilograms(self), kilograms(aMass)) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
  "magnitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_self);
  }, ["self"]),
  "{ :self | kilograms(self) }",
);

sl.addMethodToExistingType(
  "Mass",
  "Mass",
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
  "Mass",
  "Mass",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "kilograms";
  }, ["unused"]),
  "{ :unused | 'kilograms' }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Mass",
  "Mass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newMass_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newMass(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Mass",
  "Mass",
  "asKilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_self);
  }, ["self"]),
  "{ :self | kilograms(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Mass",
  "asKilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_self);
  }, ["self"]),
  "{ :self | kilograms(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Mass",
  "Mass",
  "grams",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_kilograms_1(_self), 1E3);
  }, ["self"]),
  "{ :self | *(kilograms(self), 1E3) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Mass",
  "grams",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_kilograms_1(_self), 1E3);
  }, ["self"]),
  "{ :self | *(kilograms(self), 1E3) }",
);

sl.extendTypeOrTraitWithMethod(
  "Mass",
  "Mass",
  "ounces",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_grams_1(_self), 28.349523125);
  }, ["self"]),
  "{ :self | *(grams(self), 28.349523125) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Mass",
  "ounces",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_grams_1(_self), 28.349523125);
  }, ["self"]),
  "{ :self | *(grams(self), 28.349523125) }",
);

sl.extendTypeOrTraitWithMethod(
  "Mass",
  "Mass",
  "pounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_kilograms_1(_self), 0.45359237);
  }, ["self"]),
  "{ :self | *(kilograms(self), 0.45359237) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Mass",
  "pounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_kilograms_1(_self), 0.45359237);
  }, ["self"]),
  "{ :self | *(kilograms(self), 0.45359237) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Mass",
  "asMass",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Mass_1(_kilograms_1(_self));
  }, ["self"]),
  "{ :self | Mass(kilograms(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "asKilograms",
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
  "Mass",
  "grams",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_asterisk_2(_self, 1E-3));
  }, ["self"]),
  "{ :self | kilograms((*(self, 1E-3))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "ounces",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _grams_1(_asterisk_2(_self, 28.349523125));
  }, ["self"]),
  "{ :self | grams((*(self, 28.349523125))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "pounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_asterisk_2(_self, 0.45359237));
  }, ["self"]),
  "{ :self | kilograms((*(self, 0.45359237))) }",
);
