/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["Object"],
  ["rho", "phi", "z"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CylindricalCoordinates",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_rho_1(_self), _phi_1(_self), _z_1(_self)];
  },
  "{ :self | [rho(self), phi(self), z(self)] }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self | CartesianCoordinates(x(self), y(self), z(self)) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["rho", _rho_1(_self)], ["phi", _phi_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  },
  "{ :self | Record([['rho', rho(self)], ['phi', phi(self)], ['z', z(self)]]) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rho_1(_self);
  },
  "{ :self | rho(self) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _phi_1(_self);
  },
  "{ :self | phi(self) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _cos_1(_phi_1(_self)));
  },
  "{ :self | *(rho(self), cos(phi(self))) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _sin_1(_phi_1(_self)));
  },
  "{ :self | *(rho(self), sin(phi(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["rho", "phi", "z"],
  function (_rho, _phi, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _rho, _phi, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newCylindricalCoordinates_0(), _rho, _phi, _z);
  },
  "{ :rho :phi :z | initializeSlots(newCylindricalCoordinates(),rho, phi, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SPL2, 1);
    let _phi = _at_2(__SPL2, 2);
    let _z = _at_2(__SPL2, 3);
    /* Statements */
    return _CylindricalCoordinates_3(_rho, _phi, _z);
  },
  "{ :self | let __SPL2 = assertIsOfSize(self, 3); let rho = at(__SPL2, 1); let phi = at(__SPL2, 2); let z = at(__SPL2, 3); CylindricalCoordinates(rho, phi, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SPL2, 1);
    let _phi = _at_2(__SPL2, 2);
    let _z = _at_2(__SPL2, 3);
    /* Statements */
    return _CylindricalCoordinates_3(_rho, _phi, _z);
  },
  "{ :self | let __SPL2 = assertIsOfSize(self, 3); let rho = at(__SPL2, 1); let phi = at(__SPL2, 2); let z = at(__SPL2, 3); CylindricalCoordinates(rho, phi, z) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "fromCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SPL3, 1);
    let _phi = _at_2(__SPL3, 2);
    let _z = _at_2(__SPL3, 3);
    let _x = _asterisk_2(_rho, _cos_1(_phi));
    let _y = _asterisk_2(_rho, _sin_1(_phi));
    /* Statements */
    return [_x, _y, _z];
  },
  "{ :self | let __SPL3 = assertIsOfSize(self, 3); let rho = at(__SPL3, 1); let phi = at(__SPL3, 2); let z = at(__SPL3, 3); let x = *(rho, cos(phi)); let y = *(rho, sin(phi)); [x, y, z] }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "CylindricalCoordinates",
  "fromCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SPL3, 1);
    let _phi = _at_2(__SPL3, 2);
    let _z = _at_2(__SPL3, 3);
    let _x = _asterisk_2(_rho, _cos_1(_phi));
    let _y = _asterisk_2(_rho, _sin_1(_phi));
    /* Statements */
    return [_x, _y, _z];
  },
  "{ :self | let __SPL3 = assertIsOfSize(self, 3); let rho = at(__SPL3, 1); let phi = at(__SPL3, 2); let z = at(__SPL3, 3); let x = *(rho, cos(phi)); let y = *(rho, sin(phi)); [x, y, z] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "toCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL4, 1);
    let _y = _at_2(__SPL4, 2);
    let _z = _at_2(__SPL4, 3);
    let _rho = _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y)));
    let _phi = _atan2_2(_y, _x);
    /* Statements */
    return [_rho, _phi, _z];
  },
  "{ :self | let __SPL4 = assertIsOfSize(self, 3); let x = at(__SPL4, 1); let y = at(__SPL4, 2); let z = at(__SPL4, 3); let rho = sqrt((+(squared(x), squared(y)))); let phi = atan2(y,x); [rho, phi, z] }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "CylindricalCoordinates",
  "toCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL4 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL4, 1);
    let _y = _at_2(__SPL4, 2);
    let _z = _at_2(__SPL4, 3);
    let _rho = _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y)));
    let _phi = _atan2_2(_y, _x);
    /* Statements */
    return [_rho, _phi, _z];
  },
  "{ :self | let __SPL4 = assertIsOfSize(self, 3); let x = at(__SPL4, 1); let y = at(__SPL4, 2); let z = at(__SPL4, 3); let rho = sqrt((+(squared(x), squared(y)))); let phi = atan2(y,x); [rho, phi, z] }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CylindricalCoordinates_3(
      _at_2(_self, "rho"),
      _at_2(_self, "phi"),
      _at_2(_self, "z"),
    );
  },
  "{ :self | CylindricalCoordinates(at(self, 'rho'), at(self, 'phi'), at(self, 'z')) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  "{ :self | let x = x(self); let y = y(self); let z = z(self); CylindricalCoordinates(sqrt((+(squared(x), squared(y)))), atan2(y,x), z) }",
);
