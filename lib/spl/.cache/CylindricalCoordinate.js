/* {- Requires: CartesianCoordinate -} */

sl.addType(
  false,
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  ["Object"],
  ["rho", "phi", "z"],
);

sl.copyTraitToType(
  "Object",
  "CylindricalCoordinate",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [_rho_1(_self), _phi_1(_self), _z_1(_self)];
  },
  "{ :self |\n\t\t[self.rho, self.phi, self.z]\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "asCartesianCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinate_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tCartesianCoordinate(self.x, self.y, self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["rho", _rho_1(_self)], ["phi", _phi_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(rho: self.rho, phi: self.phi, z: self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Tuple_3(_rho_1(_self), _phi_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\t(self.rho, self.phi, self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "r",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _rho_1(_self);
  },
  "{ :self |\n\t\tself.rho\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _phi_1(_self);
  },
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_rho_1(_self), _cos_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.rho * self.phi.cos\n\t}",
);

sl.addMethod(
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_rho_1(_self), _sin_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.rho * self.phi.sin\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "CylindricalCoordinate",
  "CylindricalCoordinate",
  ["rho", "phi", "z"],
  function (_rho, _phi, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rho, _phi, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newCylindricalCoordinate_0(), _rho, _phi, _z);
  },
  "{ :rho :phi :z |\n\t\tnewCylindricalCoordinate().initializeSlots(rho, phi, z)\n\t}",
);

sl.addMethod(
  "Array",
  "CylindricalCoordinate",
  "asCylindricalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym2 = _assertIsOfSize_2(_self, 3),
      _rho = _at_2(__genSym2, 1),
      _phi = _at_2(__genSym2, 2),
      _z = _at_2(__genSym2, 3);
    /* Statements */
    return _CylindricalCoordinate_3(_rho, _phi, _z);
  },
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tCylindricalCoordinate(rho, phi, z)\n\t}",
);

sl.addMethod(
  "Record",
  "CylindricalCoordinate",
  "asCylindricalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CylindricalCoordinate_3(
      _at_2(_self, "rho"),
      _at_2(_self, "phi"),
      _at_2(_self, "z"),
    );
  },
  "{ :self |\n\t\tCylindricalCoordinate(self::rho, self::phi, self::z)\n\t}",
);

sl.addMethod(
  "ThreeTuple",
  "CylindricalCoordinate",
  "asCylindricalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CylindricalCoordinate_3(
      _first_1(_self),
      _second_1(_self),
      _third_1(_self),
    );
  },
  "{ :self |\n\t\tCylindricalCoordinate(self.first, self.second, self.third)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CylindricalCoordinate",
  "asCylindricalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _z = _z_1(_self);
    /* Statements */
    return _CylindricalCoordinate_3(
      _sqrt_1(_plus_2(_squared_1(_x), _squared_1(_y))),
      _atan2_2(_y, _x),
      _z,
    );
  },
  "{ :self |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet z = self.z;\n\t\tCylindricalCoordinate(\n\t\t\t(x.squared + y.squared).sqrt,\n\t\t\ty.atan2(x),\n\t\t\tz\n\t\t)\n\t}",
);