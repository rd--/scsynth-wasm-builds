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
  "{ :self | Duration(/(1, hertz(self))) }",
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
  "{ :self | hertz(self) }",
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
  "{ :self | *(hertz(self), 60) }",
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
  "{ :self | hertz(self) }",
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
  "{ :self | /(hertz(self), 1E9) }",
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
  "{ :self | typeResponsibility(self,'hertz') }",
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
  "{ :self | /(hertz(self), 1E3) }",
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
  "{ :self | /(hertz(self), 1E6) }",
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
  "{ :self | Quantity(self, 'hertz') }",
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
  "{ :self | self }",
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
  "{ :self | hertz((*(self, 1E9))) }",
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
  "{ :self | hertz((*(self, 1000))) }",
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
  "{ :self | hertz((*(self, 1000000))) }",
);
