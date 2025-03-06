/*  Requires: CartesianCoordinates  */

sl.addTrait("SphericalCoordinates", "SphericalCoordinates");

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _r_1(_self);
    let _theta = _theta_1(_self);
    let _phi = _phi_1(_self);
    /* Statements */
    return _CartesianCoordinates_3(
      _asterisk_2(_asterisk_2(_r, _cos_1(_theta)), _sin_1(_phi)),
      _asterisk_2(_asterisk_2(_r, _sin_1(_theta)), _sin_1(_phi)),
      _asterisk_2(_r, _cos_1(_phi)),
    );
  }, ["self"]),
  "{ :self | let r = r(self); let theta = theta(self); let phi = phi(self); CartesianCoordinates(*(*(r, cos(theta)), sin(phi)), *(*(r, sin(theta)), sin(phi)), *(r, cos(phi))) }",
);

sl.addMethodToExistingTrait(
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
    return [_r_1(_self), _theta_1(_self), _phi_1(_self)];
  }, ["self"]),
  "{ :self | [r(self), theta(self), phi(self)] }",
);

sl.addMethodToExistingTrait(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["radius", _r_1(_self)], ["theta", _theta_1(_self)], [
      "phi",
      _phi_1(_self),
    ]]);
  }, ["self"]),
  "{ :self | Record([['radius', r(self)], ['theta', theta(self)], ['phi', phi(self)]]) }",
);

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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
    return _negated_1(_hyphenMinus_2(_phi_1(_self), _pi_1(0.5)));
  }, ["self"]),
  "{ :self | negated((-(phi(self), pi(0.5)))) }",
);

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
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

sl.addMethodToExistingTrait(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_r_1(_self), _cos_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  }, ["self"]),
  "{ :self | *(*(r(self), cos(theta(self))), sin(phi(self))) }",
);

sl.addMethodToExistingTrait(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_r_1(_self), _sin_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  }, ["self"]),
  "{ :self | *(*(r(self), sin(theta(self))), sin(phi(self))) }",
);

sl.addMethodToExistingTrait(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_r_1(_self), _cos_1(_phi_1(_self)));
  }, ["self"]),
  "{ :self | *(r(self), cos(phi(self))) }",
);

sl.addType(
  false,
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["Object", "SphericalCoordinates"],
  ["r", "theta", "phi"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SphericalCoordinates",
);

sl.copyTraitMethodsToType(
  "SphericalCoordinates",
  "SphericalCoordinates",
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

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SphericalCoordinates",
  "IsoSphericalCoordinates",
  ["r", "theta", "phi"],
  sl.annotateFunction(function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newSphericalCoordinates_0(), _r, _phi, _theta);
  }, ["r", "theta", "phi"]),
  "{ :r :theta :phi | initializeSlots(newSphericalCoordinates(),r, phi, theta) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["r", "theta", "phi"],
  sl.annotateFunction(function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newSphericalCoordinates_0(), _r, _theta, _phi);
  }, ["r", "theta", "phi"]),
  "{ :r :theta :phi | initializeSlots(newSphericalCoordinates(),r, theta, phi) }",
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
    } /* Temporaries */
    let __SPL128 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SPL128, 1);
    let _theta = _at_2(__SPL128, 2);
    let _phi = _at_2(__SPL128, 3);
    /* Statements */
    return _SphericalCoordinates_3(_r, _theta, _phi);
  }, ["self"]),
  "{ :self | let __SPL128 = assertIsOfSize(self, 3); let r = at(__SPL128, 1); let theta = at(__SPL128, 2); let phi = at(__SPL128, 3); SphericalCoordinates(r, theta, phi) }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL128 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SPL128, 1);
    let _theta = _at_2(__SPL128, 2);
    let _phi = _at_2(__SPL128, 3);
    /* Statements */
    return _SphericalCoordinates_3(_r, _theta, _phi);
  }, ["self"]),
  "{ :self | let __SPL128 = assertIsOfSize(self, 3); let r = at(__SPL128, 1); let theta = at(__SPL128, 2); let phi = at(__SPL128, 3); SphericalCoordinates(r, theta, phi) }",
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
        } /* Statements */
        return _asList_1(
          _asCartesianCoordinates_1(_asSphericalCoordinates_1(_self)),
        );
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
  "{ :self | if(isVector(self), { asList(asCartesianCoordinates(asSphericalCoordinates(self))) }, { collect(self,fromSphericalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
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
        } /* Statements */
        return _asList_1(
          _asCartesianCoordinates_1(_asSphericalCoordinates_1(_self)),
        );
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
  "{ :self | if(isVector(self), { asList(asCartesianCoordinates(asSphericalCoordinates(self))) }, { collect(self,fromSphericalCoordinates:/1) }) }",
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
        } /* Statements */
        return _asList_1(
          _asSphericalCoordinates_1(_asCartesianCoordinates_1(_self)),
        );
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
  "{ :self | if(isVector(self), { asList(asSphericalCoordinates(asCartesianCoordinates(self))) }, { collect(self,toSphericalCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Tuple",
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
        } /* Statements */
        return _asList_1(
          _asSphericalCoordinates_1(_asCartesianCoordinates_1(_self)),
        );
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
  "{ :self | if(isVector(self), { asList(asSphericalCoordinates(asCartesianCoordinates(self))) }, { collect(self,toSphericalCoordinates:/1) }) }",
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
    return _SphericalCoordinates_3(
      _at_2(_self, "r"),
      _at_2(_self, "theta"),
      _at_2(_self, "phi"),
    );
  }, ["self"]),
  "{ :self | SphericalCoordinates(at(self, 'r'), at(self, 'theta'), at(self, 'phi')) }",
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
    } /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _z = _z_1(_self);
    /* Statements */
    return _SphericalCoordinates_3(
      _sqrt_1(
        _plusSign_2(
          _plusSign_2(_squared_1(_x), _squared_1(_y)),
          _squared_1(_z),
        ),
      ),
      _atan2_2(_y, _x),
      _atan2_2(_sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y))), _z),
    );
  }, ["self"]),
  "{ :self | let x = x(self); let y = y(self); let z = z(self); SphericalCoordinates(sqrt((+(+(squared(x), squared(y)), squared(z)))), atan2(y,x), atan2(sqrt((+(squared(x), squared(y)))),z)) }",
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
      _sqrt_1(_plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self)))),
      _z_1(_self),
    );
  }, ["self"]),
  "{ :self | atan2(sqrt((+(squared(x(self)), squared(y(self))))),z(self)) }",
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
        _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
        _squared_1(_z_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self | sqrt((+(+(squared(x(self)), squared(y(self))), squared(z(self))))) }",
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
