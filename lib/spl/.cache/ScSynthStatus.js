sl.addMethod(
  "Record",
  "ScSynthStatus",
  "ugenCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "ugenCount");
  },
  "{ :self | self::ugenCount }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "synthCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "synthCount");
  },
  "{ :self | self::synthCount }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "groupCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "groupCount");
  },
  "{ :self | self::groupCount }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "synthdefCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "synthdefCount");
  },
  "{ :self | self::synthdefCount }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "cpuAverage",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "cpuAverage");
  },
  "{ :self | self::cpuAverage }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "cpuPeak",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "cpuPeak");
  },
  "{ :self | self::cpuPeak }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateNominal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "sampleRateNominal");
  },
  "{ :self | self::sampleRateNominal }",
);

sl.addMethod(
  "Record",
  "ScSynthStatus",
  "sampleRateActual",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _at_2(_self, "sampleRateActual");
  },
  "{ :self | self::sampleRateActual }",
);
