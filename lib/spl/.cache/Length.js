sl.addTrait("Length", "Length");

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inAngstroms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E10);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E10\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inAstronomicalUnits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _inMetres_1(_self),
      _asterisk_2(1.495978707, _circumflexAccent_2(10, 11)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / (1.495978707 * (10 ^ 11))\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inCentimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E2);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E2\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inFeet",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMetres_1(_self), 0.3048);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / 0.3048\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inInches",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMillimetres_1(_self), 25.4);
  }, ["self"]),
  "{ :self |\n\t\tself.inMillimetres / 25.4\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inKilometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMetres_1(_self), 1E3);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / 1E3\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inLightYears",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _inMetres_1(_self),
      _asterisk_2(9.4607, _circumflexAccent_2(10, 15)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / (9.4607 * (10 ^ 15))\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inMetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "inMetres");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('inMetres')\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inMicrometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E-6);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E-6\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inMiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMetres_1(_self), 1609.344);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / 1609.344\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inMillimetres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E3);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E3\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inNanometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E9);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E9\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inNauticalMiles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMetres_1(_self), 1852);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / 1852\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inParsecs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _inMetres_1(_self),
      _asterisk_2(3.0857, _circumflexAccent_2(10, 16)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / (3.0857 * (10 ^ 16))\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inPicas",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMillimetres_1(_self), 4.2333);
  }, ["self"]),
  "{ :self |\n\t\tself.inMillimetres / 4.2333\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inPicometres",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_inMetres_1(_self), 1E12);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres * 1E12\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMillimetres_1(_self), 0.3528);
  }, ["self"]),
  "{ :self |\n\t\tself.inMillimetres / 0.3528\n\t}",
);

sl.addMethodToExistingTrait(
  "Length",
  "Length",
  "inYards",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_inMetres_1(_self), 0.9144);
  }, ["self"]),
  "{ :self |\n\t\tself.inMetres / 0.9144\n\t}",
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
  "{ :self |\n\t\tQuantity(self, 'metres')\n\t}",
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
  "{ :self |\n\t\t(self * 1E-10).metres\n\t}",
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
  "{ :self |\n\t\t(self * (1.495978707 * (10 ^ 11))).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1E-3).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1E-2).metres\n\t}",
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
  "{ :self |\n\t\t(self * 0.3048).metres\n\t}",
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
  "{ :self |\n\t\t(self * 25.4).millimetres\n\t}",
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
  "{ :self |\n\t\t(self * 1E3).metres\n\t}",
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
  "{ :self |\n\t\t(self * (9.4607 * (10 ^ 15))).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1609.344).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1E-9).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1852).metres\n\t}",
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
  "{ :self |\n\t\t(self * (3.0857 * (10 ^ 16))).metres\n\t}",
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
  "{ :self |\n\t\t(self * 1E-12).metres\n\t}",
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
  "{ :self |\n\t\t(self * 4.2333).millimetres\n\t}",
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
  "{ :self |\n\t\t(self * 0.3528).millimetres\n\t}",
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
  "{ :self |\n\t\t(self * 0.9144).metres\n\t}",
);
