sl.addType(
  false,
  "Time",
  "Time",
  ["Object"],
  ["seconds"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Time",
);

sl.addMethodToExistingType(
  "Time",
  "Time",
  "magnitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.addMethodToExistingType(
  "Time",
  "Time",
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
  "Time",
  "Time",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "seconds";
  }, ["unused"]),
  "{ :unused | 'seconds' }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "asSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "asSeconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_self);
  }, ["self"]),
  "{ :self | seconds(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 10);
  }, ["self"]),
  "{ :self | *(seconds(self), 10) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 10);
  }, ["self"]),
  "{ :self | *(seconds(self), 10) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  }, ["self"]),
  "{ :self | /(hours(self), 24) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_hours_1(_self), 24);
  }, ["self"]),
  "{ :self | /(hours(self), 24) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  }, ["self"]),
  "{ :self | /(minutes(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_minutes_1(_self), 60);
  }, ["self"]),
  "{ :self | /(minutes(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 1000);
  }, ["self"]),
  "{ :self | *(seconds(self), 1000) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_seconds_1(_self), 1000);
  }, ["self"]),
  "{ :self | *(seconds(self), 1000) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  }, ["self"]),
  "{ :self | /(seconds(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_seconds_1(_self), 60);
  }, ["self"]),
  "{ :self | /(seconds(self), 60) }",
);

sl.extendTypeOrTraitWithMethod(
  "Time",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 7);
  }, ["self"]),
  "{ :self | /(days(self), 7) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_days_1(_self), 7);
  }, ["self"]),
  "{ :self | /(days(self), 7) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "Time",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTime_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newTime(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "Quantity",
  "Time",
  "asTime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Time_1(_seconds_1(_self));
  }, ["self"]),
  "{ :self | Time(seconds(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "anomalisticMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.554551));
  }, ["self"]),
  "{ :self | days((*(self, 27.554551))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "anomalisticYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.259636));
  }, ["self"]),
  "{ :self | days((*(self, 365.259636))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "centiseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _milliseconds_1(_asterisk_2(_self, 10));
  }, ["self"]),
  "{ :self | milliseconds((*(self, 10))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "days",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hours_1(_asterisk_2(_self, 24));
  }, ["self"]),
  "{ :self | hours((*(self, 24))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "hours",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _minutes_1(_asterisk_2(_self, 60));
  }, ["self"]),
  "{ :self | minutes((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "julianYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.25));
  }, ["self"]),
  "{ :self | days((*(self, 365.25))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "milliseconds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_solidus_2(_self, 1000));
  }, ["self"]),
  "{ :self | seconds((/(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "minutes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _seconds_1(_asterisk_2(_self, 60));
  }, ["self"]),
  "{ :self | seconds((*(self, 60))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealDays",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 0.99726968));
  }, ["self"]),
  "{ :self | days((*(self, 0.99726968))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321661));
  }, ["self"]),
  "{ :self | days((*(self, 27.321661))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "siderealYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.256363004));
  }, ["self"]),
  "{ :self | days((*(self, 365.256363004))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "solarMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 27.321582));
  }, ["self"]),
  "{ :self | days((*(self, 27.321582))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "solarYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 365.24219));
  }, ["self"]),
  "{ :self | days((*(self, 365.24219))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "synodicMonths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 29.53059));
  }, ["self"]),
  "{ :self | days((*(self, 29.53059))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Time",
  "weeks",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _days_1(_asterisk_2(_self, 7));
  }, ["self"]),
  "{ :self | days((*(self, 7))) }",
);
