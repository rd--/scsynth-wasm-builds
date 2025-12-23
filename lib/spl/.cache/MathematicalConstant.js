sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "aperysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.2020569031595942853997381);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.2020569031595942853997381\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "artinsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      0.373955813619202288054728054346416415111629248606150042094742802417350182040028082344304317087250568981603,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 0.373955813619202288054728054346416415111629248606150042094742802417350182040028082344304317087250568981603\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "avogadroConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 6.02214076E+23);
  }, ["self"]),
  "{ :self |\n\t\tself * 6.02214076E+23\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "berahaConstant",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(2, _asterisk_2(2, _cos_1(_solidus_2(_pi_1(2), _n))));
  }, ["n"]),
  "{ :n |\n\t\t2 + (2 * (2.pi / n).cos)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "boltzmannConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.380649E-23);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.380649E-23\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "brunsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(1.90216058, _self);
  }, ["self"]),
  "{ :self |\n\t\t1.90216058 * self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "calabisConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "catalansConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.9159655941772190150);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.9159655941772190150\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "champernowneNumber",
  ["b"],
  sl.annotateFunction(function (_b) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _b";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_b, 10),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.1234567891011121314151617181920;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_b, "champernowneNumber: b≠10");
      }, []),
    );
  }, ["b"]),
  "{ :b |\n\t\t(b = 10).if {\n\t\t\t0.1234567891011121314151617181920\n\t\t} {\n\t\t\tb.error('champernowneNumber: b≠10')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "conwaysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.303577269034296391257099112152551890730702504659404875755;
  }, ["self"]),
  "{ :self |\n\t\t1.303577269034296391257099112152551890730702504659404875755\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.017453292519943295);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.017453292519943295\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "e",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      2.71828182845904523536028747135266249775724709369995,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 2.71828182845904523536028747135266249775724709369995\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "electricConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 8.8541878188E-12);
  }, ["self"]),
  "{ :self |\n\t\tself * 8.8541878188E-12\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "elementaryCharge",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.602176634E-19);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.602176634E-19\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "epsilon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.000000000000001);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.000000000000001\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "eulerGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      0.57721566490153286060651209008240243104215933593992,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 0.57721566490153286060651209008240243104215933593992\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "feigenbaumConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 4.669201609102990671853203820466201617258);
  }, ["self"]),
  "{ :self |\n\t\tself * 4.669201609102990671853203820466201617258\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "fibonacciFactorialConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      1.22674201072035324441763023045536165587140969044025,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 1.22674201072035324441763023045536165587140969044025\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "fineStructureConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.0072973525643);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.0072973525643\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "freimansConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      4.527829566160879140882695988070469646929833632769728,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 4.527829566160879140882695988070469646929833632769728\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "gausssConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "gelfondsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _exp_1(_pi_1(1)));
  }, ["self"]),
  "{ :self |\n\t\tself * 1.pi.exp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "glaisher",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.2824271291006226368753425688697917277676889);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.2824271291006226368753425688697917277676889\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "goldenAngle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_pi_1(_self), _hyphenMinus_2(3, _sqrt_1(5)));
  }, ["self"]),
  "{ :self |\n\t\tself.pi * (3 - 5.sqrt)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "goldenRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _phi = _solidus_2(_plusSign_2(_sqrt_1(5), 1), 2);
    /* Statements */
    return _asterisk_2(_self, _phi);
  }, ["self"]),
  "{ :self |\n\t\tlet phi = (5.sqrt + 1) / 2;\n\t\tself * phi\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "gompertzConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.596347362323194074341078499369);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.596347362323194074341078499369\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "hlawkasSchneckenkonstante",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, -2.15778299665944622092914278682957772350);
  }, ["self"]),
  "{ :self |\n\t\tself * -2.15778299665944622092914278682957772350\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "keplerBouwkampConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.114942044853296200701040157469598742831);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.114942044853296200701040157469598742831\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "khinchinsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.685452001065306445309714835);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.685452001065306445309714835\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "komornikLoretiConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.7872316501829659330132748903370084;
  }, ["self"]),
  "{ :self |\n\t\t1.7872316501829659330132748903370084\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "landauConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.543258965342976706952728295);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.543258965342976706952728295\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "landauRamanujanConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.764223653589220662990698731);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.764223653589220662990698731\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "lemniscateConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.62205755429211981046483959);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.62205755429211981046483959\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "levysConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 3.27582291872181115978768188);
  }, ["self"]),
  "{ :self |\n\t\tself * 3.27582291872181115978768188\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "logarithmicPhi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _circumflexAccent_2(2, _goldenRatio_1(1)));
  }, ["self"]),
  "{ :self |\n\t\tself * (2 ^ 1.goldenRatio)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "madelungConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      -1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * -1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "magneticConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.25663706127E-6);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.25663706127E-6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "meisselMertensConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.2614972128476427837554268386086958590516);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.2614972128476427837554268386086958590516\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "omegaConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.567143290409783872999968662210);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.567143290409783872999968662210\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "paperFoldingConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.8507361882018672603677977);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.8507361882018672603677977\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "pi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "planckConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 6.62607015E-34);
  }, ["self"]),
  "{ :self |\n\t\tself * 6.62607015E-34\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "plasticRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.3247179572447460259609089);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.3247179572447460259609089\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "prouhetThueMorseConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.4124540336401075977833614);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.4124540336401075977833614\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "pythagorasConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.4142135623730950488);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.4142135623730950488\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "rabbitConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.7098034428612913146417873994445755970125);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.7098034428612913146417873994445755970125\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "reciprocalFibonacciConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 3.359885666243177553172011302918927179689);
  }, ["self"]),
  "{ :self |\n\t\tself * 3.359885666243177553172011302918927179689\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "reducedPlanckConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.054571817E-34);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.054571817E-34\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "secondFeigenbaumConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.502907875095892822283902873218215786381);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.502907875095892822283902873218215786381\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "sierpinskiConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.822825249678847032995328716261464949475);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.822825249678847032995328716261464949475\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "silverConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      _plusSign_2(2, _asterisk_2(2, _cos_1(_pi_1(_solidus_2(2, 7))))),
    );
  }, ["self"]),
  "{ :self |\n\t\tself * (2 + (2 * (2 / 7).pi.cos))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "silverRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _plusSign_2(_sqrt_1(2), 1));
  }, ["self"]),
  "{ :self |\n\t\tself * (2.sqrt + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "soldnersConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.45136923488338105028396848589202744949303228);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.45136923488338105028396848589202744949303228\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "speedOfLight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 299792458);
  }, ["self"]),
  "{ :self |\n\t\tself * 299792458\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "stieltjesGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = [
      0.57721566490153286061,
      -0.072815845483676724861,
      -0.0096903631928723184845,
      0.0020538344203033458662,
      0.0023253700654673000575,
      0.00079332381730106270175,
      -0.00023876934543019960987,
      -0.00052728956705775104607,
      -0.00035212335380303950960,
      -0.000034394774418088048178,
      0.00020533281490906479468,
      0.00027018443954390352667,
      0.00016727291210514019335,
      -0.000027463806603760158860,
      -0.00020920926205929994584,
      -0.00028346865532024144664,
      -0.00019969685830896977471,
      0.000026277037109918336699,
      0.00030736840814925282659,
      0.00050360545304735562906,
      0.00046634356151155944940,
      0.00010443776975600011581,
      -0.00054159958220399770166,
      -0.0012439620904082457793,
      -0.0015885112789035615619,
      -0.0010745919527384888247,
    ];
    /* Statements */
    return _at_2(_k, _plusSign_2(_self, 1));
  }, ["self"]),
  "{ :self |\n\t\tlet k = [\n\t\t\t0.57721566490153286061,\n\t\t\t-0.072815845483676724861,\n\t\t\t-0.0096903631928723184845,\n\t\t\t0.0020538344203033458662,\n\t\t\t0.0023253700654673000575,\n\t\t\t0.00079332381730106270175,\n\t\t\t-0.00023876934543019960987,\n\t\t\t-0.00052728956705775104607,\n\t\t\t-0.00035212335380303950960,\n\t\t\t-0.000034394774418088048178,\n\t\t\t0.00020533281490906479468,\n\t\t\t0.00027018443954390352667,\n\t\t\t0.00016727291210514019335,\n\t\t\t-0.000027463806603760158860,\n\t\t\t-0.00020920926205929994584,\n\t\t\t-0.00028346865532024144664,\n\t\t\t-0.00019969685830896977471,\n\t\t\t0.000026277037109918336699,\n\t\t\t0.00030736840814925282659,\n\t\t\t0.00050360545304735562906,\n\t\t\t0.00046634356151155944940,\n\t\t\t0.00010443776975600011581,\n\t\t\t-0.00054159958220399770166,\n\t\t\t-0.0012439620904082457793,\n\t\t\t-0.0015885112789035615619,\n\t\t\t-0.0010745919527384888247\n\t\t];\n\t\tk.at(self + 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "stolarskyHarborthConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 0.81255655901600638769);
  }, ["self"]),
  "{ :self |\n\t\tself * 0.81255655901600638769\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "supergoldenRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.465571231876768);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.465571231876768\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "supersilverRatio",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 2.2055694304005903);
  }, ["self"]),
  "{ :self |\n\t\tself * 2.2055694304005903\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "tetranacciConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325;
  }, ["self"]),
  "{ :self |\n\t\t1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "tribonacciConstant",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_n, 1.83928675521416113255185);
  }, ["n"]),
  "{ :n |\n\t\tn * 1.83928675521416113255185\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "unitDegree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(1, 360);
    /* Statements */
    return _asterisk_2(_self, _m);
  }, ["self"]),
  "{ :self |\n\t\tlet m = 1 / 360;\n\t\tself * m\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "vacuumPermeability",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 1.25663706127E-6);
  }, ["self"]),
  "{ :self |\n\t\tself * 1.25663706127E-6\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "vacuumPermittivity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, 8.8541878188E-12);
  }, ["self"]),
  "{ :self |\n\t\tself * 8.8541878188E-12\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "vanDerCorputsConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _self,
      3.36431757815589910606771338650344126945671165216123542095557778081362782116856232377457634773739093410938,
    );
  }, ["self"]),
  "{ :self |\n\t\tself * 3.36431757815589910606771338650344126945671165216123542095557778081362782116856232377457634773739093410938\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Cache",
  "MathematicalConstant",
  "namedConstantTable",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "namedConstantTable",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Record_1([[
          "AperysConstant",
          _Decimal_2(
            _Fraction_2(
              120205690315959428539973816151144999076498629234049888179227155534183820578631309018645587360933525814619915n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            107,
          ),
        ], [
          "ArtinsConstant",
          _Decimal_2(
            _Fraction_2(
              373955813619202288054728054346416415111629248606150042094742802417350182040028082344304317087250568981603n,
              1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            105,
          ),
        ], [
          "CalabisConstant",
          _Decimal_2(
            _Fraction_2(
              155138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "CatalansConstant",
          _Decimal_2(
            _Fraction_2(
              915965594177219015054603514932384110774149374281672134266498119621763019776254769479356512926115106248574n,
              1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            105,
          ),
        ], [
          "GoldenRatio",
          _Decimal_2(
            _Fraction_2(
              161803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "E",
          _Decimal_2(
            _Fraction_2(
              271828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "EulerGamma",
          _Decimal_2(
            _Fraction_2(
              577215664901532860606512090082402431042159335939923598805767234884867726777664670936947063291746749n,
              1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            99,
          ),
        ], [
          "FeigenbaumConstant",
          _Decimal_2(
            _Fraction_2(
              466920160910299067185320382046620161725818557747576863274565134300413433021131473713868974402394801381716n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "GausssConstant",
          _Decimal_2(
            _Fraction_2(
              83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            107,
          ),
        ], [
          "HardHexagonEntropyConstant",
          _Decimal_2(
            _Fraction_2(
              139548597247930273522950066356688806895410372814466119081747215613576088035869777468983787308527542790n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "KhinchinsConstant",
          _Decimal_2(
            _Fraction_2(
              268545200106530644530971483548179569382038229399446295305115234555721885953715200280114117493184769799515n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "LevysConstant",
          _Decimal_2(
            _Fraction_2(
              327582291872181115978768188245384386360847552598237414940519892419072321564496035518127754047917452949269n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "Ln(2)",
          _Decimal_2(
            _Fraction_2(
              693147180559945309417232121458176568075500134360255254120680009493393621969694715605863326996418687n,
              1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            99,
          ),
        ], [
          "MadelungConstant",
          _Decimal_2(
            _Fraction_2(
              -174756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "Pi",
          _Decimal_2(
            _Fraction_2(
              314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ], [
          "Pi^2/9",
          _Decimal_2(
            _Fraction_2(
              109662271123215095764827677776401679281263326747119895849037215291333831360213391588908593374650580353n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "PythagorasConstant",
          _Decimal_2(
            _Fraction_2(
              141421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            98,
          ),
        ], [
          "TribonacciConstant",
          _Decimal_2(
            _Fraction_2(
              183928675521416113255185256465328660042417874609759224677875863940420322208196642573843541942830701414n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "TetranacciConstant",
          _Decimal_2(
            _Fraction_2(
              192756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            101,
          ),
        ], [
          "VanDerCorputsConstant",
          _Decimal_2(
            _Fraction_2(
              336431757815589910606771338650344126945671165216123542095557778081362782116856232377457634773739093410938n,
              100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n,
            ),
            104,
          ),
        ]]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('namedConstantTable') {\n\t\t\t(\n\t\t\t\t'AperysConstant':\n\t\t\t\t1.20205690315959428539973816151144999076498629234049888179227155534183820578631309018645587360933525814619915D,\n\t\t\t\t'ArtinsConstant':\n\t\t\t\t0.373955813619202288054728054346416415111629248606150042094742802417350182040028082344304317087250568981603D,\n\t\t\t\t'CalabisConstant':\n\t\t\t\t1.55138752454832039226195251026462381516359170380388719952800712011792674255425695729576045361202543629D,\n\t\t\t\t'CatalansConstant':\n\t\t\t\t0.915965594177219015054603514932384110774149374281672134266498119621763019776254769479356512926115106248574D,\n\t\t\t\t'GoldenRatio':\n\t\t\t\t1.61803398874989484820458683436563811772030917980576286213544862270526046281890244970720720418939113748475D,\n\t\t\t\t'E':\n\t\t\t\t2.71828182845904523536028747135266249775724709369995957496696762772407663035354759457138217852516642742746D,\n\t\t\t\t'EulerGamma':\n\t\t\t\t0.577215664901532860606512090082402431042159335939923598805767234884867726777664670936947063291746749D,\n\t\t\t\t'FeigenbaumConstant':\n\t\t\t\t4.66920160910299067185320382046620161725818557747576863274565134300413433021131473713868974402394801381716D,\n\t\t\t\t'GausssConstant':\n\t\t\t\t0.83462684167407318628142973279904680899399301349034700244982737010368199270952641186969116035127532412906785D,\n\t\t\t\t'HardHexagonEntropyConstant':\n\t\t\t\t1.39548597247930273522950066356688806895410372814466119081747215613576088035869777468983787308527542790D,\n\t\t\t\t'KhinchinsConstant':\n\t\t\t\t2.68545200106530644530971483548179569382038229399446295305115234555721885953715200280114117493184769799515D,\n\t\t\t\t'LevysConstant':\n\t\t\t\t3.27582291872181115978768188245384386360847552598237414940519892419072321564496035518127754047917452949269D,\n\t\t\t\t'Ln(2)':\n\t\t\t\t0.693147180559945309417232121458176568075500134360255254120680009493393621969694715605863326996418687D,\n\t\t\t\t'MadelungConstant':\n\t\t\t\t-1.74756459463318219063621203554439740348516143662474175815282535076504062353276117989075836269460788993D,\n\t\t\t\t'Pi':\n\t\t\t\t3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214D,\n\t\t\t\t'Pi^2/9':\n\t\t\t\t1.09662271123215095764827677776401679281263326747119895849037215291333831360213391588908593374650580353D,\n\t\t\t\t'PythagorasConstant':\n\t\t\t\t1.41421356237309504880168872420969807856967187537694807317667973799073247846210703885038753432764157D,\n\t\t\t\t'TribonacciConstant':\n\t\t\t\t1.83928675521416113255185256465328660042417874609759224677875863940420322208196642573843541942830701414D,\n\t\t\t\t'TetranacciConstant':\n\t\t\t\t1.92756197548292530426190586173662216869855425516338472714664703800966606229781555914981825346189065325D,\n\t\t\t\t'VanDerCorputsConstant':\n\t\t\t\t3.36431757815589910606771338650344126945671165216123542095557778081362782116856232377457634773739093410938D\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "MathematicalConstant",
  "namedConstant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_namedConstantTable_1(_system), _self);
  }, ["self"]),
  "{ :self |\n\t\tsystem.namedConstantTable.at(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "MathematicalConstant",
  "namedConstant",
  ["self", "n", "s"],
  sl.annotateFunction(function (_self, _n, _s) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _truncateScale_2(_asterisk_2(_namedConstant_1(_self), _n), _s);
  }, ["self", "n", "s"]),
  "{ :self :n :s |\n\t\t(self.namedConstant * n).truncateScale(s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "calabisConstant",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("CalabisConstant", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'CalabisConstant'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "catalansConstant",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("CatalansConstant", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'CatalansConstant'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "e",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("E", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'E'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "eulerGamma",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("EulerGamma", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'EulerGamma'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "goldenRatio",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("GoldenRatio", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'GoldenRatio'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "pi",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("Pi", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'Pi'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "pythagorasConstant",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("PythagorasConstant", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'PythagorasConstant'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "levysConstant",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("LevysConstant", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'LevysConstant'.namedConstant(n, s)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "MathematicalConstant",
  "vanDerCorputsConstant",
  ["n", "s"],
  sl.annotateFunction(function (_n, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _namedConstant_3("VanDerCorputsConstant", _n, _s);
  }, ["n", "s"]),
  "{ :n :s |\n\t\t'VanDerCorputsConstant'.namedConstant(n, s)\n\t}",
);
