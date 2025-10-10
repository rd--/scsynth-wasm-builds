sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "ugenCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "ugenCount");
  }, ["self"]),
  "{ :self | self['ugenCount'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "synthCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "synthCount");
  }, ["self"]),
  "{ :self | self['synthCount'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "groupCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "groupCount");
  }, ["self"]),
  "{ :self | self['groupCount'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "synthdefCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "synthdefCount");
  }, ["self"]),
  "{ :self | self['synthdefCount'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "cpuAverage",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "cpuAverage");
  }, ["self"]),
  "{ :self | self['cpuAverage'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "cpuPeak",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "cpuPeak");
  }, ["self"]),
  "{ :self | self['cpuPeak'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateNominal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "sampleRateNominal");
  }, ["self"]),
  "{ :self | self['sampleRateNominal'] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateActual",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "sampleRateActual");
  }, ["self"]),
  "{ :self | self['sampleRateActual'] }",
);
