/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SphericalCoordinates",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asSphericalCoordinates",
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

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(
      _fromSphericalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | CartesianCoordinates(fromSphericalCoordinates(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL268 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SPL268, 1);
    let _theta = _at_2(__SPL268, 2);
    let _phi = _at_2(__SPL268, 3);
    /* Statements */
    return _Record_1([["radius", _r], ["theta", _theta], ["phi", _phi]]);
  }, ["self"]),
  "{ :self | let __SPL268 = assertIsOfSize(coordinates(self), 3); let r = at(__SPL268, 1); let theta = at(__SPL268, 2); let phi = at(__SPL268, 3); Record([['radius', r], ['theta', theta], ['phi', phi]]) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "azimuth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _theta_1(_self);
  }, ["self"]),
  "{ :self | theta(self) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "elevation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_hyphenMinus_2(_phi_1(_self), _pi_1(0.5)));
  }, ["self"]),
  "{ :self | negate((-(phi(self), pi(0.5)))) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "inclination",
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
  "SphericalCoordinates",
  "SphericalCoordinates",
  "phi",
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

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "r",
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
  "SphericalCoordinates",
  "SphericalCoordinates",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _r_1(_self);
  }, ["self"]),
  "{ :self | r(self) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "rho",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_self);
  }, ["self"]),
  "{ :self | radius(self) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "theta",
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
  "SphericalCoordinates",
  "SphericalCoordinates",
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
  "SphericalCoordinates",
  "SphericalCoordinates",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL269 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SPL269, 1);
    let _theta = _at_2(__SPL269, 2);
    let _phi = _at_2(__SPL269, 3);
    /* Statements */
    return _asterisk_2(_asterisk_2(_r, _cos_1(_theta)), _sin_1(_phi));
  }, ["self"]),
  "{ :self | let __SPL269 = assertIsOfSize(coordinates(self), 3); let r = at(__SPL269, 1); let theta = at(__SPL269, 2); let phi = at(__SPL269, 3); *(*(r, cos(theta)), sin(phi)) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL270 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SPL270, 1);
    let _theta = _at_2(__SPL270, 2);
    let _phi = _at_2(__SPL270, 3);
    /* Statements */
    return _asterisk_2(_asterisk_2(_r, _sin_1(_theta)), _sin_1(_phi));
  }, ["self"]),
  "{ :self | let __SPL270 = assertIsOfSize(coordinates(self), 3); let r = at(__SPL270, 1); let theta = at(__SPL270, 2); let phi = at(__SPL270, 3); *(*(r, sin(theta)), sin(phi)) }",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL271 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SPL271, 1);
    let _theta = _at_2(__SPL271, 2);
    let _phi = _at_2(__SPL271, 3);
    /* Statements */
    return _asterisk_2(_r, _cos_1(_phi));
  }, ["self"]),
  "{ :self | let __SPL271 = assertIsOfSize(coordinates(self), 3); let r = at(__SPL271, 1); let theta = at(__SPL271, 2); let phi = at(__SPL271, 3); *(r, cos(phi)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SphericalCoordinates",
  "IsoSphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL272 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SPL272, 1);
    let _theta = _at_2(__SPL272, 2);
    let _phi = _at_2(__SPL272, 3);
    /* Statements */
    return _SphericalCoordinates_1([_r, _phi, _theta]);
  }, ["self"]),
  "{ :self | let __SPL272 = assertIsOfSize(self, 3); let r = at(__SPL272, 1); let theta = at(__SPL272, 2); let phi = at(__SPL272, 3); SphericalCoordinates([r, phi, theta]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL273 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SPL273, 1);
    let _theta = _at_2(__SPL273, 2);
    let _phi = _at_2(__SPL273, 3);
    /* Statements */
    return _initializeSlots_2(_newSphericalCoordinates_0(), [_r, _theta, _phi]);
  }, ["self"]),
  "{ :self | let __SPL273 = assertIsOfSize(self, 3); let r = at(__SPL273, 1); let theta = at(__SPL273, 2); let phi = at(__SPL273, 3); initializeSlots(newSphericalCoordinates(),[r, theta, phi]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SphericalCoordinates_1(_asList_1(_self));
  }, ["self"]),
  "{ :self | SphericalCoordinates(asList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SphericalCoordinates",
  "fromSphericalCoordinates",
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
        let __SPL274 = _assertIsOfSize_2(_self, 3);
        let _r = _at_2(__SPL274, 1);
        let _theta = _at_2(__SPL274, 2);
        let _phi = _at_2(__SPL274, 3);
        /* Statements */
        return [
          _asterisk_2(_asterisk_2(_r, _cos_1(_theta)), _sin_1(_phi)),
          _asterisk_2(_asterisk_2(_r, _sin_1(_theta)), _sin_1(_phi)),
          _asterisk_2(_r, _cos_1(_phi)),
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _fromSphericalCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let __SPL274 = assertIsOfSize(self, 3); let r = at(__SPL274, 1); let theta = at(__SPL274, 2); let phi = at(__SPL274, 3); [*(*(r, cos(theta)), sin(phi)), *(*(r, sin(theta)), sin(phi)), *(r, cos(phi))] }, { collect(self,fromSphericalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "SphericalCoordinates",
  "toSphericalCoordinates",
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
        let __SPL275 = _assertIsOfSize_2(_self, 3);
        let _x = _at_2(__SPL275, 1);
        let _y = _at_2(__SPL275, 2);
        let _z = _at_2(__SPL275, 3);
        /* Statements */
        return [
          _sqrt_1(
            _plusSign_2(
              _plusSign_2(_square_1(_x), _square_1(_y)),
              _square_1(_z),
            ),
          ),
          _atan2_2(_y, _x),
          _atan2_2(_sqrt_1(_plusSign_2(_square_1(_x), _square_1(_y))), _z),
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _toSphericalCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let __SPL275 = assertIsOfSize(self, 3); let x = at(__SPL275, 1); let y = at(__SPL275, 2); let z = at(__SPL275, 3); [sqrt((+(+(square(x), square(y)), square(z)))), atan2(y,x), atan2(sqrt((+(square(x), square(y)))),z)] }, { collect(self,toSphericalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SphericalCoordinates_1([
      _at_2(_self, "r"),
      _at_2(_self, "theta"),
      _at_2(_self, "phi"),
    ]);
  }, ["self"]),
  "{ :self | SphericalCoordinates([at(self, 'r'), at(self, 'theta'), at(self, 'phi')]) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _SphericalCoordinates_1(
      _toSphericalCoordinates_1(_coordinates_1(_self)),
    );
  }, ["self"]),
  "{ :self | SphericalCoordinates(toSphericalCoordinates(coordinates(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "azimuth",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _theta_1(_self);
  }, ["self"]),
  "{ :self | theta(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "inclination",
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

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "phi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(
      _sqrt_1(_plusSign_2(_square_1(_x_1(_self)), _square_1(_y_1(_self)))),
      _z_1(_self),
    );
  }, ["self"]),
  "{ :self | atan2(sqrt((+(square(x(self)), square(y(self))))),z(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(
        _plusSign_2(_square_1(_x_1(_self)), _square_1(_y_1(_self))),
        _square_1(_z_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self | sqrt((+(+(square(x(self)), square(y(self))), square(z(self))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "rho",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_self);
  }, ["self"]),
  "{ :self | radius(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  }, ["self"]),
  "{ :self | atan2(y(self),x(self)) }",
);
