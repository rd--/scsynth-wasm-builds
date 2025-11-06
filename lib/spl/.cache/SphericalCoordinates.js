/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "SphericalCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "SphericalCoordinates",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates(\n\t\t\tself.coordinates.fromSphericalCoordinates\n\t\t)\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SplVar1, 1);
    let _theta = _at_2(__SplVar1, 2);
    let _phi = _at_2(__SplVar1, 3);
    /* Statements */
    return _Record_1([["radius", _r], ["theta", _theta], ["phi", _phi]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self.coordinates;\n\t\t(radius: r, theta: theta, phi: phi)\n\t}",
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
  "{ :self |\n\t\tself.theta\n\t}",
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
  "{ :self |\n\t\t(self.phi - 0.5.pi).negate\n\t}",
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
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addMethodToExistingType(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "parts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_coordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates.copy\n\t}",
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
  "{ :self |\n\t\tself.coordinates[3]\n\t}",
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
  "{ :self |\n\t\tself.coordinates[1]\n\t}",
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
  "{ :self |\n\t\tself.r\n\t}",
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
  "{ :self |\n\t\tself.radius\n\t}",
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
  "{ :self |\n\t\tself.coordinates[2]\n\t}",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SplVar2, 1);
    let _theta = _at_2(__SplVar2, 2);
    let _phi = _at_2(__SplVar2, 3);
    /* Statements */
    return _asterisk_2(_asterisk_2(_r, _cos_1(_theta)), _sin_1(_phi));
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self.coordinates;\n\t\tr * theta.cos * phi.sin\n\t}",
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
    let __SplVar3 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SplVar3, 1);
    let _theta = _at_2(__SplVar3, 2);
    let _phi = _at_2(__SplVar3, 3);
    /* Statements */
    return _asterisk_2(_asterisk_2(_r, _sin_1(_theta)), _sin_1(_phi));
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self.coordinates;\n\t\tr * theta.sin * phi.sin\n\t}",
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
    let __SplVar4 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _r = _at_2(__SplVar4, 1);
    let _theta = _at_2(__SplVar4, 2);
    let _phi = _at_2(__SplVar4, 3);
    /* Statements */
    return _asterisk_2(_r, _cos_1(_phi));
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self.coordinates;\n\t\tr * phi.cos\n\t}",
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
    let __SplVar5 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SplVar5, 1);
    let _theta = _at_2(__SplVar5, 2);
    let _phi = _at_2(__SplVar5, 3);
    /* Statements */
    return _SphericalCoordinates_1([_r, _phi, _theta]);
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self;\n\t\tSphericalCoordinates([r, phi, theta])\n\t}",
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
    let __SplVar6 = _assertIsOfSize_2(_self, 3);
    let _r = _at_2(__SplVar6, 1);
    let _theta = _at_2(__SplVar6, 2);
    let _phi = _at_2(__SplVar6, 3);
    /* Statements */
    return _initializeSlots_2(_newSphericalCoordinates_0(), [_r, _theta, _phi]);
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta, phi] = self;\n\t\tnewSphericalCoordinates().initializeSlots([r, theta, phi])\n\t}",
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
    return _SphericalCoordinates_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tSphericalCoordinates(self)\n\t}",
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
        let __SplVar7 = _assertIsOfSize_2(_self, 3);
        let _r = _at_2(__SplVar7, 1);
        let _theta = _at_2(__SplVar7, 2);
        let _phi = _at_2(__SplVar7, 3);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [r, theta, phi] = self;\n\t\t\t[\n\t\t\t\tr * theta.cos * phi.sin,\n\t\t\t\tr * theta.sin * phi.sin,\n\t\t\t\tr * phi.cos\n\t\t\t]\n\t\t} {\n\t\t\tself.collect(fromSphericalCoordinates:/1)\n\t\t}\n\t}",
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
        let __SplVar8 = _assertIsOfSize_2(_self, 3);
        let _x = _at_2(__SplVar8, 1);
        let _y = _at_2(__SplVar8, 2);
        let _z = _at_2(__SplVar8, 3);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [x, y, z] = self;\n\t\t\t[\n\t\t\t\t(x.square + y.square + z.square).sqrt,\n\t\t\t\ty.atan2(x),\n\t\t\t\t(x.square + y.square).sqrt.atan2(z)\n\t\t\t]\n\t\t} {\n\t\t\tself.collect(toSphericalCoordinates:/1)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tSphericalCoordinates([\n\t\t\tself['r'],\n\t\t\tself['theta'],\n\t\t\tself['phi']\n\t\t])\n\t}",
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
  "{ :self |\n\t\tSphericalCoordinates(\n\t\t\tself.coordinates.toSphericalCoordinates\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.theta\n\t}",
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
  "{ :self |\n\t\tself.phi\n\t}",
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
  "{ :self |\n\t\t(self.x.square + self.y.square).sqrt.atan2(self.z)\n\t}",
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
  "{ :self |\n\t\t(self.x.square + self.y.square + self.z.square).sqrt\n\t}",
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
  "{ :self |\n\t\tself.radius\n\t}",
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
  "{ :self |\n\t\tself.y.atan2(self.x)\n\t}",
);
