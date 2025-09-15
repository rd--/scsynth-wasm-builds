/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["Object"],
  ["coordinates"],
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
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self | copy(coordinates(self)) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(
      _fromCylindricalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | CartesianCoordinates(fromCylindricalCoordinates(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL125 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _rho = _at_2(__SPL125, 1);
    let _phi = _at_2(__SPL125, 2);
    let _z = _at_2(__SPL125, 3);
    /* Statements */
    return _Record_1([["rho", _rho], ["phi", _phi], ["z", _z]]);
  }, ["self"]),
  "{ :self | let __SPL125 = assertIsOfSize(coordinates(self), 3); let rho = at(__SPL125, 1); let phi = at(__SPL125, 2); let z = at(__SPL125, 3); Record([['rho', rho], ['phi', phi], ['z', z]]) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _rho_1(_self);
  }, ["self"]),
  "{ :self | rho(self) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "rho",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self), 1) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "phi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | at(coordinates(self), 2) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _phi_1(_self);
  }, ["self"]),
  "{ :self | phi(self) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _cos_1(_phi_1(_self)));
  }, ["self"]),
  "{ :self | *(rho(self), cos(phi(self))) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _sin_1(_phi_1(_self)));
  }, ["self"]),
  "{ :self | *(rho(self), sin(phi(self))) }",
);

sl.addMethodToExistingType(
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 3);
  }, ["self"]),
  "{ :self | at(coordinates(self), 3) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CylindricalCoordinates_1(_self);
  }, ["self"]),
  "{ :self | CylindricalCoordinates(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL126 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SPL126, 1);
    let _phi = _at_2(__SPL126, 2);
    let _z = _at_2(__SPL126, 3);
    /* Statements */
    return _initializeSlots_2(_newCylindricalCoordinates_0(), _self);
  }, ["self"]),
  "{ :self | let __SPL126 = assertIsOfSize(self, 3); let rho = at(__SPL126, 1); let phi = at(__SPL126, 2); let z = at(__SPL126, 3); initializeSlots(newCylindricalCoordinates(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "fromCylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL127 = _assertIsOfSize_2(_self, 3);
        let _rho = _at_2(__SPL127, 1);
        let _phi = _at_2(__SPL127, 2);
        let _z = _at_2(__SPL127, 3);
        let _x = _asterisk_2(_rho, _cos_1(_phi));
        let _y = _asterisk_2(_rho, _sin_1(_phi));
        /* Statements */
        return [_x, _y, _z];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _fromCylindricalCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let __SPL127 = assertIsOfSize(self, 3); let rho = at(__SPL127, 1); let phi = at(__SPL127, 2); let z = at(__SPL127, 3); let x = *(rho, cos(phi)); let y = *(rho, sin(phi)); [x, y, z] }, { collect(self,fromCylindricalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "CylindricalCoordinates",
  "toCylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL128 = _assertIsOfSize_2(_self, 3);
        let _x = _at_2(__SPL128, 1);
        let _y = _at_2(__SPL128, 2);
        let _z = _at_2(__SPL128, 3);
        let _rho = _sqrt_1(_plusSign_2(_square_1(_x), _square_1(_y)));
        let _phi = _atan2_2(_y, _x);
        /* Statements */
        return [_rho, _phi, _z];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _toCylindricalCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let __SPL128 = assertIsOfSize(self, 3); let x = at(__SPL128, 1); let y = at(__SPL128, 2); let z = at(__SPL128, 3); let rho = sqrt((+(square(x), square(y)))); let phi = atan2(y,x); [rho, phi, z] }, { collect(self,toCylindricalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CylindricalCoordinates_1([
      _at_2(_self, "rho"),
      _at_2(_self, "phi"),
      _at_2(_self, "z"),
    ]);
  }, ["self"]),
  "{ :self | CylindricalCoordinates([at(self, 'rho'), at(self, 'phi'), at(self, 'z')]) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "CylindricalCoordinates",
  "asCylindricalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CylindricalCoordinates_1(
      _toCylindricalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | CylindricalCoordinates(toCylindricalCoordinates(coordinates(self))) }",
);
