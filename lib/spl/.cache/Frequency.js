sl.addTrait("Frequency", "Frequency");

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "asDuration",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Duration_1(_solidus_2(1, _hertz_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tDuration(1 / self.hertz)\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "asHertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "cyclesPerMinute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_hertz_1(_self), 60);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz * 60\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "cyclesPerSecond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "gigahertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hertz_1(_self), 1E9);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz / 1E9\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "hertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "hertz");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('hertz')\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "kilohertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hertz_1(_self), 1E3);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz / 1E3\n\t}",
);

sl.addMethodToExistingTrait(
  "Frequency",
  "Frequency",
  "megaherz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hertz_1(_self), 1E6);
  }, ["self"]),
  "{ :self |\n\t\tself.hertz / 1E6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Frequency",
  "Frequency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "hertz");
  }, ["self"]),
  "{ :self |\n\t\tQuantity(self, 'hertz')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "asHertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "gigahertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_asterisk_2(_self, 1E9));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1E9).hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "kilohertz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1000).hertz\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Frequency",
  "megaherz",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hertz_1(_asterisk_2(_self, 1000000));
  }, ["self"]),
  "{ :self |\n\t\t(self * 1000000).hertz\n\t}",
);
