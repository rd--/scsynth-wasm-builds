sl.addTrait("Length", "Length");

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "angstroms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E10);
  }, ["self"]),
  "{ :self | *(metres(self), 1E10) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "asMetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_self);
  }, ["self"]),
  "{ :self | metres(self) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "astronomicalUnits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(1.495978707, _circumflexAccent_2(10, 11)),
    );
  }, ["self"]),
  "{ :self | /(metres(self), (*(1.495978707, (^(10, 11))))) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "centimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E2);
  }, ["self"]),
  "{ :self | *(metres(self), 1E2) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "feet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 0.3048);
  }, ["self"]),
  "{ :self | /(metres(self), 0.3048) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 25.4);
  }, ["self"]),
  "{ :self | /(millimetres(self), 25.4) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "kilometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1E3);
  }, ["self"]),
  "{ :self | /(metres(self), 1E3) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "lightYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(9.4607, _circumflexAccent_2(10, 15)),
    );
  }, ["self"]),
  "{ :self | /(metres(self), (*(9.4607, (^(10, 15))))) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "metres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "metres");
  }, ["self"]),
  "{ :self | typeResponsibility(self,'metres') }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "micrometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E-6);
  }, ["self"]),
  "{ :self | *(metres(self), 1E-6) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "miles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1609.344);
  }, ["self"]),
  "{ :self | /(metres(self), 1609.344) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "millimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E3);
  }, ["self"]),
  "{ :self | *(metres(self), 1E3) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "nanometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E9);
  }, ["self"]),
  "{ :self | *(metres(self), 1E9) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "nauticalMiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1852);
  }, ["self"]),
  "{ :self | /(metres(self), 1852) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "parsecs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(3.0857, _circumflexAccent_2(10, 16)),
    );
  }, ["self"]),
  "{ :self | /(metres(self), (*(3.0857, (^(10, 16))))) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "picas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 4.2333);
  }, ["self"]),
  "{ :self | /(millimetres(self), 4.2333) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "picometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1E12);
  }, ["self"]),
  "{ :self | *(metres(self), 1E12) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "point",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 0.3528);
  }, ["self"]),
  "{ :self | /(millimetres(self), 0.3528) }",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "yards",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 0.9144);
  }, ["self"]),
  "{ :self | /(metres(self), 0.9144) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Length",
  "Length",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quantity_2(_self, "metres");
  }, ["self"]),
  "{ :self | Quantity(self, 'metres') }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "angstroms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E-10));
  }, ["self"]),
  "{ :self | metres((*(self, 1E-10))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "asMetres",
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
  "Length",
  "astronomicalUnits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(1.495978707, _circumflexAccent_2(10, 11))),
    );
  }, ["self"]),
  "{ :self | metres((*(self, (*(1.495978707, (^(10, 11))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "millimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E-3));
  }, ["self"]),
  "{ :self | metres((*(self, 1E-3))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "centimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E-2));
  }, ["self"]),
  "{ :self | metres((*(self, 1E-2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "feet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 0.3048));
  }, ["self"]),
  "{ :self | metres((*(self, 0.3048))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "inches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 25.4));
  }, ["self"]),
  "{ :self | millimetres((*(self, 25.4))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "kilometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E3));
  }, ["self"]),
  "{ :self | metres((*(self, 1E3))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "lightYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(9.4607, _circumflexAccent_2(10, 15))),
    );
  }, ["self"]),
  "{ :self | metres((*(self, (*(9.4607, (^(10, 15))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "miles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1609.344));
  }, ["self"]),
  "{ :self | metres((*(self, 1609.344))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "nanometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E-9));
  }, ["self"]),
  "{ :self | metres((*(self, 1E-9))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "nauticalMiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1852));
  }, ["self"]),
  "{ :self | metres((*(self, 1852))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "parsecs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(3.0857, _circumflexAccent_2(10, 16))),
    );
  }, ["self"]),
  "{ :self | metres((*(self, (*(3.0857, (^(10, 16))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "picometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1E-12));
  }, ["self"]),
  "{ :self | metres((*(self, 1E-12))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "picas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 4.2333));
  }, ["self"]),
  "{ :self | millimetres((*(self, 4.2333))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "point",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 0.3528));
  }, ["self"]),
  "{ :self | millimetres((*(self, 0.3528))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "yards",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 0.9144));
  }, ["self"]),
  "{ :self | metres((*(self, 0.9144))) }",
);
