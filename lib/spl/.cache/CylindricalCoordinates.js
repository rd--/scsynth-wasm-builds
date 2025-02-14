/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["Object"],
  ["rho", "phi", "z"],
);

sl.copyTraitToType(
  "Object",
  "CylindricalCoordinates",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_rho_1(_self), _phi_1(_self), _z_1(_self)];
  },
  "{ :self |\n\t\t[self.rho, self.phi, self.z]\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tCartesianCoordinates(self.x, self.y, self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return Object.fromEntries([["rho", _rho_1(_self)], ["phi", _phi_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(rho: self.rho, phi: self.phi, z: self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asTuple_1([_rho_1(_self), _phi_1(_self), _z_1(_self)]);
  },
  "{ :self |\n\t\t(self.rho, self.phi, self.z)\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _rho_1(_self);
  },
  "{ :self |\n\t\tself.rho\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _phi_1(_self);
  },
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _cos_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.rho * self.phi.cos\n\t}",
);

sl.addMethod(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _sin_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.rho * self.phi.sin\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["rho", "phi", "z"],
  function (_rho, _phi, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rho, _phi, _z";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newCylindricalCoordinates_0(), _rho, _phi, _z);
  },
  "{ :rho :phi :z |\n\t\tnewCylindricalCoordinates().initializeSlots(rho, phi, z)\n\t}",
);

sl.addMethod(
  "List",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym41 = _assertIsOfSize_2(_self, 3),
      _rho = _at_2(__genSym41, 1),
      _phi = _at_2(__genSym41, 2),
      _z = _at_2(__genSym41, 3);
    /* Statements */
    return _CylindricalCoordinates_3(_rho, _phi, _z);
  },
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tCylindricalCoordinates(rho, phi, z)\n\t}",
);

sl.addMethod(
  "Tuple",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym41 = _assertIsOfSize_2(_self, 3),
      _rho = _at_2(__genSym41, 1),
      _phi = _at_2(__genSym41, 2),
      _z = _at_2(__genSym41, 3);
    /* Statements */
    return _CylindricalCoordinates_3(_rho, _phi, _z);
  },
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tCylindricalCoordinates(rho, phi, z)\n\t}",
);

sl.addMethod(
  "List",
  "CylindricalCoordinates",
  "fromCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym42 = _assertIsOfSize_2(_self, 3),
      _rho = _at_2(__genSym42, 1),
      _phi = _at_2(__genSym42, 2),
      _z = _at_2(__genSym42, 3);
    let _x = _asterisk_2(_rho, _cos_1(_phi));
    let _y = _asterisk_2(_rho, _sin_1(_phi));
    /* Statements */
    return [_x, _y, _z];
  },
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tlet x = rho * phi.cos;\n\t\tlet y = rho * phi.sin;\n\t\t[x y z]\n\t}",
);

sl.addMethod(
  "Tuple",
  "CylindricalCoordinates",
  "fromCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym42 = _assertIsOfSize_2(_self, 3),
      _rho = _at_2(__genSym42, 1),
      _phi = _at_2(__genSym42, 2),
      _z = _at_2(__genSym42, 3);
    let _x = _asterisk_2(_rho, _cos_1(_phi));
    let _y = _asterisk_2(_rho, _sin_1(_phi));
    /* Statements */
    return [_x, _y, _z];
  },
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tlet x = rho * phi.cos;\n\t\tlet y = rho * phi.sin;\n\t\t[x y z]\n\t}",
);

sl.addMethod(
  "List",
  "CylindricalCoordinates",
  "toCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym43 = _assertIsOfSize_2(_self, 3),
      _x = _at_2(__genSym43, 1),
      _y = _at_2(__genSym43, 2),
      _z = _at_2(__genSym43, 3);
    let _rho = _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y)));
    let _phi = _atan2_2(_y, _x);
    /* Statements */
    return [_rho, _phi, _z];
  },
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tlet rho = (x.squared + y.squared).sqrt;\n\t\tlet phi = y.atan2(x);\n\t\t[rho phi z]\n\t}",
);

sl.addMethod(
  "Tuple",
  "CylindricalCoordinates",
  "toCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym43 = _assertIsOfSize_2(_self, 3),
      _x = _at_2(__genSym43, 1),
      _y = _at_2(__genSym43, 2),
      _z = _at_2(__genSym43, 3);
    let _rho = _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y)));
    let _phi = _atan2_2(_y, _x);
    /* Statements */
    return [_rho, _phi, _z];
  },
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tlet rho = (x.squared + y.squared).sqrt;\n\t\tlet phi = y.atan2(x);\n\t\t[rho phi z]\n\t}",
);

sl.addMethod(
  "Record",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _CylindricalCoordinates_3(
      _at_2(_self, "rho"),
      _at_2(_self, "phi"),
      _at_2(_self, "z"),
    );
  },
  "{ :self |\n\t\tCylindricalCoordinates(\n\t\t\tself['rho'],\n\t\t\tself['phi'],\n\t\t\tself['z']\n\t\t)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _z = _z_1(_self);
    /* Statements */
    return _CylindricalCoordinates_3(
      _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y))),
      _atan2_2(_y, _x),
      _z,
    );
  },
  "{ :self |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet z = self.z;\n\t\tCylindricalCoordinates(\n\t\t\t(x.squared + y.squared).sqrt,\n\t\t\ty.atan2(x),\n\t\t\tz\n\t\t)\n\t}",
);
