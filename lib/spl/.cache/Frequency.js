sl.addType(
  false,
  "Frequency",
  "Frequency",
  ["Object", "Equatable", "Comparable", "Magnitude"],
  ["hertz"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Frequency",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Frequency",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Frequency",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Frequency",
);

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "lessThanSign",
  ["self", "aFrequency"],
  sl.annotateFunction(function (_self, _aFrequency) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aFrequency";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_hertz_1(_self), _hertz_1(_aFrequency));
  }, ["self", "aFrequency"]),
  "{ :self :aFrequency | <(hertz(self), hertz(aFrequency)) }",
);

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
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

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
  "magnitude",
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

sl.addMethodToExistingType(
  "Frequency",
  "Frequency",
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
  "Frequency",
  "Frequency",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "hertz";
  }, ["unused"]),
  "{ :unused | 'hertz' }",
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
    return _initializeSlots_2(_newFrequency_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newFrequency(),self) }",
);

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Frequency",
  "asFrequency",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Frequency_1(_hertz_1(_self));
  }, ["self"]),
  "{ :self | Frequency(hertz(self)) }",
);
