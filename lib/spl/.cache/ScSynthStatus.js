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
  "{ :self |\n\t\tself['cpuAverage']\n\t}",
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
  "{ :self |\n\t\tself['cpuPeak']\n\t}",
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
  "{ :self |\n\t\tself['groupCount']\n\t}",
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
  "{ :self |\n\t\tself['sampleRateActual']\n\t}",
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
  "{ :self |\n\t\tself['sampleRateNominal']\n\t}",
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
  "{ :self |\n\t\tself['synthCount']\n\t}",
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
  "{ :self |\n\t\tself['synthdefCount']\n\t}",
);

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
  "{ :self |\n\t\tself['ugenCount']\n\t}",
);
