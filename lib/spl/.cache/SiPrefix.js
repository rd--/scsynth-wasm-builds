sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "centi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-2);
  }, ["self"]),
  "{ :self | *(self, 1E-2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "deca",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E1);
  }, ["self"]),
  "{ :self | *(self, 1E1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "deci",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-1);
  }, ["self"]),
  "{ :self | *(self, 1E-1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "hecto",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E2);
  }, ["self"]),
  "{ :self | *(self, 1E2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "giga",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E9);
  }, ["self"]),
  "{ :self | *(self, 1E9) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "mega",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E6);
  }, ["self"]),
  "{ :self | *(self, 1E6) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "kilo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E3);
  }, ["self"]),
  "{ :self | *(self, 1E3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "micro",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-6);
  }, ["self"]),
  "{ :self | *(self, 1E-6) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "milli",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-3);
  }, ["self"]),
  "{ :self | *(self, 1E-3) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "nano",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-9);
  }, ["self"]),
  "{ :self | *(self, 1E-9) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "pico",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E-12);
  }, ["self"]),
  "{ :self | *(self, 1E-12) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SiPrefix",
  "terra",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1E12);
  }, ["self"]),
  "{ :self | *(self, 1E12) }",
);
