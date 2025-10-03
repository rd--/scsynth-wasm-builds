sl.addType(
  false,
  "Length",
  "Length",
  ["Object", "Equatable", "Comparable", "Magnitude"],
  ["metres"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Length",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Length",
);

sl.copyTraitMethodsToType(
  "Comparable",
  "Length",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Length",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "lessThanSign",
  ["self", "aLength"],
  sl.annotateFunction(function (_self, _aLength) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLength";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_metres_1(_self), _metres_1(_aLength));
  }, ["self", "aLength"]),
  "{ :self :aLength | <(metres(self), metres(aLength)) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "magnitude",
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

sl.addMethodToExistingType(
  "Length",
  "Length",
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
  "Length",
  "Length",
  "unit",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return "metres";
  }, ["unused"]),
  "{ :unused | 'metres' }",
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
    return _initializeSlots_2(_newLength_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newLength(),self) }",
);

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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

sl.extendTypeOrTraitWithMethod(
  "Quantity",
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

sl.extendTypeOrTraitWithMethod(
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
  "Quantity",
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
  "Quantity",
  "Length",
  "asLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Length_1(_metres_1(_self));
  }, ["self"]),
  "{ :self | Length(metres(self)) }",
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
