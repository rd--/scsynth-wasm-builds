sl.addTrait("Mass", "Mass");

sl.addMethodToExistingTrait(
  "Mass",
  "Mass",
  "inGrams",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inKilograms_1(_self), 1E3);
  }, ["self"]),
  "{ :self |\n\t\tself.inKilograms * 1E3\n\t}",
);

sl.addMethodToExistingTrait(
  "Mass",
  "Mass",
  "inKilograms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "inKilograms");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('inKilograms')\n\t}",
);

sl.addMethodToExistingTrait(
  "Mass",
  "Mass",
  "inOunces",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inGrams_1(_self), 28.349523125);
  }, ["self"]),
  "{ :self |\n\t\tself.inGrams * 28.349523125\n\t}",
);

sl.addMethodToExistingTrait(
  "Mass",
  "Mass",
  "inPounds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inKilograms_1(_self), 0.45359237);
  }, ["self"]),
  "{ :self |\n\t\tself.inKilograms * 0.45359237\n\t}",
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
    return _Quantity_2(_self, "kilograms");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'kilograms')\n\t}",
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
  "{ :self |\n\t\t(self * 1E-3).kilograms\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Mass",
  "milligrams",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _kilograms_1(_asterisk_2(_self, 1E-6));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1E-6).kilograms\n\t}",
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
  "{ :self |\n\t\t(self * 28.349523125).grams\n\t}",
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
  "{ :self |\n\t\t(self * 0.45359237).kilograms\n\t}",
);
