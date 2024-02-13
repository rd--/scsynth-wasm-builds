sl.addType(
  false,
  "Length",
  "Length",
  ["Object", "Magnitude"],
  ["metres"],
);

sl.copyTraitToType(
  "Object",
  "Length",
);

sl.copyTraitToType(
  "Magnitude",
  "Length",
);

sl.addMethod(
  "Length",
  "Length",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isLength_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equalsSign_2(_metres_1(_self), _metres_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isLength & {\n\t\t\tself.metres = anObject.metres\n\t\t}\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isLength_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _tilde_2(_metres_1(_self), _metres_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isLength & {\n\t\t\tself.metres ~ anObject.metres\n\t\t}\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "lessThanSign",
  ["self", "aLength"],
  function (_self, _aLength) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aLength";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _lessThanSign_2(_metres_1(_self), _metres_1(_aLength));
  },
  "{ :self :aLength |\n\t\tself.metres < aLength.metres\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "asMetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_self);
  },
  "{ :self |\n\t\tself.metres\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "astronomicalUnits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(1.495978707, _circumflexAccent_2(10, 11)),
    );
  },
  "{ :self |\n\t\tself.metres / (1.495978707 * (10 ^ 11))\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "millimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_metres_1(_self), 1000);
  },
  "{ :self |\n\t\tself.metres * 1000\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "centimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_metres_1(_self), 100);
  },
  "{ :self |\n\t\tself.metres * 100\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "feet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_metres_1(_self), 0.3048);
  },
  "{ :self |\n\t\tself.metres / 0.3048\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "inches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_millimetres_1(_self), 25.4);
  },
  "{ :self |\n\t\tself.millimetres / 25.4\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "kilometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_metres_1(_self), 1000);
  },
  "{ :self |\n\t\tself.metres / 1000\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "lightYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(9.4607, _circumflexAccent_2(10, 15)),
    );
  },
  "{ :self |\n\t\tself.metres / (9.4607 * (10 ^ 15))\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "miles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_metres_1(_self), 1609.344);
  },
  "{ :self |\n\t\tself.metres / 1609.344\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "nauticalMiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_metres_1(_self), 1852);
  },
  "{ :self |\n\t\tself.metres / 1852\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "parsecs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _metres_1(_self),
      _asterisk_2(3.0857, _circumflexAccent_2(10, 16)),
    );
  },
  "{ :self |\n\t\tself.metres / (3.0857 * (10 ^ 16))\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "picas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_millimetres_1(_self), 4.2333);
  },
  "{ :self |\n\t\tself.millimetres / 4.2333\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "picometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_metres_1(_self), 1000000000);
  },
  "{ :self |\n\t\tself.metres * 1000000000\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "point",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_millimetres_1(_self), 0.3528);
  },
  "{ :self |\n\t\tself.millimetres / 0.3528\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plusSignPlusSign_2(_storeString_1(_metres_1(_self)), ".metres");
  },
  "{ :self |\n\t\tself.metres.storeString ++ '.metres'\n\t}",
);

sl.addMethod(
  "Length",
  "Length",
  "yards",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_metres_1(_self), 0.9144);
  },
  "{ :self |\n\t\tself.metres / 0.9144\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "asMetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "astronomicalUnits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(1.495978707, _circumflexAccent_2(10, 11))),
    );
  },
  "{ :self |\n\t\t(self * (1.495978707 * (10 ^ 11))).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "millimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_solidus_2(_self, 1000));
  },
  "{ :self |\n\t\t(self / 1000).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "centimetres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_solidus_2(_self, 100));
  },
  "{ :self |\n\t\t(self / 100).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "feet",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 0.3048));
  },
  "{ :self |\n\t\t(self * 0.3048).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "inches",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _millimetres_1(_asterisk_2(_self, 25.4));
  },
  "{ :self |\n\t\t(self * 25.4).millimetres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "kilometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 1000));
  },
  "{ :self |\n\t\t(self * 1000).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "lightYears",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(9.4607, _circumflexAccent_2(10, 15))),
    );
  },
  "{ :self |\n\t\t(self * (9.4607 * (10 ^ 15))).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "metres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newLength_0(), _self);
  },
  "{ :self |\n\t\tnewLength().initializeSlots(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "miles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 1609.344));
  },
  "{ :self |\n\t\t(self * 1609.344).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "nauticalMiles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 1852));
  },
  "{ :self |\n\t\t(self * 1852).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "parsecs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(
      _asterisk_2(_self, _asterisk_2(3.0857, _circumflexAccent_2(10, 16))),
    );
  },
  "{ :self |\n\t\t(self * (3.0857 * (10 ^ 16))).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "picometres",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 0.000000001));
  },
  "{ :self |\n\t\t(self * 0.000000001).metres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "picas",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _millimetres_1(_asterisk_2(_self, 4.2333));
  },
  "{ :self |\n\t\t(self * 4.2333).millimetres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "point",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _millimetres_1(_asterisk_2(_self, 0.3528));
  },
  "{ :self |\n\t\t(self * 0.3528).millimetres\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Length",
  "yards",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _metres_1(_asterisk_2(_self, 0.9144));
  },
  "{ :self |\n\t\t(self * 0.9144).metres\n\t}",
);
