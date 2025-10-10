sl.extendTypeOrTraitWithMethod(
  "String",
  "SiPrefix",
  "isSiPrefix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _includes_2(_siPrefixList_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.siPrefixList.includes(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "SiPrefix",
  "siPrefixList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "siPrefixList",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [
          "centi",
          "deca",
          "deci",
          "hecto",
          "giga",
          "mega",
          "kilo",
          "micro",
          "milli",
          "nano",
          "pico",
          "terra",
        ];
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('siPrefixList') {\n\t\t\t[\n\t\t\t\t'centi' 'deca' 'deci' 'hecto' 'giga'\n\t\t\t\t'mega' 'kilo' 'micro' 'milli' 'nano'\n\t\t\t\t'pico' 'terra'\n\t\t\t]\n\t\t}\n\t}",
);

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
  "{ :self |\n\t\tself * 1E-2\n\t}",
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
  "{ :self |\n\t\tself * 1E1\n\t}",
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
  "{ :self |\n\t\tself * 1E-1\n\t}",
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
  "{ :self |\n\t\tself * 1E2\n\t}",
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
  "{ :self |\n\t\tself * 1E9\n\t}",
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
  "{ :self |\n\t\tself * 1E6\n\t}",
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
  "{ :self |\n\t\tself * 1E3\n\t}",
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
  "{ :self |\n\t\tself * 1E-6\n\t}",
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
  "{ :self |\n\t\tself * 1E-3\n\t}",
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
  "{ :self |\n\t\tself * 1E-9\n\t}",
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
  "{ :self |\n\t\tself * 1E-12\n\t}",
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
  "{ :self |\n\t\tself * 1E12\n\t}",
);
