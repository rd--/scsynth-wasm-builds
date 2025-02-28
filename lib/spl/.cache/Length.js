sl.addType(
  false,
  "Length",
  "Length",
  ["Object", "Magnitude"],
  ["metres"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Length",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "Length",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "lessThanSign",
  ["self", "aLength"],
  function (_self, _aLength) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLength";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSign_2(_metres_1(_self), _metres_1(_aLength));
  },
  "{ :self :aLength | <(metres(self), metres(aLength)) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "asMetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_self);
  },
  "{ :self | metres(self) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "astronomicalUnits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(1.495978707, _circumflexAccent_2(10, 11)),
    );
  },
  "{ :self | /(metres(self), (*(1.495978707, (^(10, 11))))) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "millimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1000);
  },
  "{ :self | *(metres(self), 1000) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "centimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 100);
  },
  "{ :self | *(metres(self), 100) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "feet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 0.3048);
  },
  "{ :self | /(metres(self), 0.3048) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "inches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 25.4);
  },
  "{ :self | /(millimetres(self), 25.4) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "kilometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1000);
  },
  "{ :self | /(metres(self), 1000) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "lightYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(9.4607, _circumflexAccent_2(10, 15)),
    );
  },
  "{ :self | /(metres(self), (*(9.4607, (^(10, 15))))) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "miles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1609.344);
  },
  "{ :self | /(metres(self), 1609.344) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "nauticalMiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 1852);
  },
  "{ :self | /(metres(self), 1852) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "parsecs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(3.0857, _circumflexAccent_2(10, 16)),
    );
  },
  "{ :self | /(metres(self), (*(3.0857, (^(10, 16))))) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "picas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 4.2333);
  },
  "{ :self | /(millimetres(self), 4.2333) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "picometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_metres_1(_self), 1000000000);
  },
  "{ :self | *(metres(self), 1000000000) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "point",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_millimetres_1(_self), 0.3528);
  },
  "{ :self | /(millimetres(self), 0.3528) }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_metres_1(_self)), ".metres");
  },
  "{ :self | ++(storeString(metres(self)), '.metres') }",
);

sl.addMethodToExistingType(
  "Length",
  "Length",
  "yards",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_metres_1(_self), 0.9144);
  },
  "{ :self | /(metres(self), 0.9144) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "asMetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "astronomicalUnits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(1.495978707, _circumflexAccent_2(10, 11))),
    );
  },
  "{ :self | metres((*(self, (*(1.495978707, (^(10, 11))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "millimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_solidus_2(_self, 1000));
  },
  "{ :self | metres((/(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "centimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_solidus_2(_self, 100));
  },
  "{ :self | metres((/(self, 100))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "feet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 0.3048));
  },
  "{ :self | metres((*(self, 0.3048))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "inches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 25.4));
  },
  "{ :self | millimetres((*(self, 25.4))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "kilometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1000));
  },
  "{ :self | metres((*(self, 1000))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "lightYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(9.4607, _circumflexAccent_2(10, 15))),
    );
  },
  "{ :self | metres((*(self, (*(9.4607, (^(10, 15))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "metres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newLength_0(), _self);
  },
  "{ :self | initializeSlots(newLength(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "miles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1609.344));
  },
  "{ :self | metres((*(self, 1609.344))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "nauticalMiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 1852));
  },
  "{ :self | metres((*(self, 1852))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "parsecs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(3.0857, _circumflexAccent_2(10, 16))),
    );
  },
  "{ :self | metres((*(self, (*(3.0857, (^(10, 16))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "picometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 0.000000001));
  },
  "{ :self | metres((*(self, 0.000000001))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "picas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 4.2333));
  },
  "{ :self | millimetres((*(self, 4.2333))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "point",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _millimetres_1(_asterisk_2(_self, 0.3528));
  },
  "{ :self | millimetres((*(self, 0.3528))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Length",
  "yards",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _metres_1(_asterisk_2(_self, 0.9144));
  },
  "{ :self | metres((*(self, 0.9144))) }",
);
