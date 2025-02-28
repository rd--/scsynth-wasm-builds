sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "ugenCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "ugenCount");
  },
  "{ :self | at(self, 'ugenCount') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "synthCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "synthCount");
  },
  "{ :self | at(self, 'synthCount') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "groupCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "groupCount");
  },
  "{ :self | at(self, 'groupCount') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "synthdefCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "synthdefCount");
  },
  "{ :self | at(self, 'synthdefCount') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "cpuAverage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "cpuAverage");
  },
  "{ :self | at(self, 'cpuAverage') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "cpuPeak",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "cpuPeak");
  },
  "{ :self | at(self, 'cpuPeak') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateNominal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "sampleRateNominal");
  },
  "{ :self | at(self, 'sampleRateNominal') }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateActual",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_self, "sampleRateActual");
  },
  "{ :self | at(self, 'sampleRateActual') }",
);
