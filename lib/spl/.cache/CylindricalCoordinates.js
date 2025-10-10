/*  Requires: CartesianCoordinates  */

sl.addType(
  false,
  "CylindricalCoordinates",
  "CylindricalCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "CylindricalCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tself.coordinates.copy\n\t}",
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
  "{ :self |\n\t\tCartesianCoordinates(\n\t\t\tself.coordinates.fromCylindricalCoordinates\n\t\t)\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 3);
    let _rho = _at_2(__SplVar1, 1);
    let _phi = _at_2(__SplVar1, 2);
    let _z = _at_2(__SplVar1, 3);
    /* Statements */
    return _Record_1([["rho", _rho], ["phi", _phi], ["z", _z]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [rho, phi, z] = self.coordinates;\n\t\t(rho: rho, phi: phi, z: z)\n\t}",
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
  "{ :self |\n\t\tself.rho\n\t}",
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
  "{ :self |\n\t\tself.coordinates[1]\n\t}",
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
  "{ :self |\n\t\tself.coordinates[2]\n\t}",
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
  "{ :self |\n\t\tself.phi\n\t}",
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
  "{ :self |\n\t\tself.rho * self.phi.cos\n\t}",
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
  "{ :self |\n\t\tself.rho * self.phi.sin\n\t}",
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
  "{ :self |\n\t\tself.coordinates[3]\n\t}",
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
  "{ :self |\n\t\tCylindricalCoordinates(self)\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_self, 3);
    let _rho = _at_2(__SplVar2, 1);
    let _phi = _at_2(__SplVar2, 2);
    let _z = _at_2(__SplVar2, 3);
    /* Statements */
    return _initializeSlots_2(_newCylindricalCoordinates_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tlet [rho, phi, z] = self;\n\t\tnewCylindricalCoordinates().initializeSlots(self)\n\t}",
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
        let __SplVar3 = _assertIsOfSize_2(_self, 3);
        let _rho = _at_2(__SplVar3, 1);
        let _phi = _at_2(__SplVar3, 2);
        let _z = _at_2(__SplVar3, 3);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [rho, phi, z] = self;\n\t\t\tlet x = rho * phi.cos;\n\t\t\tlet y = rho * phi.sin;\n\t\t\t[x y z]\n\t\t} {\n\t\t\tself.collect(fromCylindricalCoordinates:/1)\n\t\t}\n\t}",
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
        let __SplVar4 = _assertIsOfSize_2(_self, 3);
        let _x = _at_2(__SplVar4, 1);
        let _y = _at_2(__SplVar4, 2);
        let _z = _at_2(__SplVar4, 3);
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
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [x, y, z] = self;\n\t\t\tlet rho = (x.square + y.square).sqrt;\n\t\t\tlet phi = y.atan2(x);\n\t\t\t[rho phi z]\n\t\t} {\n\t\t\tself.collect(toCylindricalCoordinates:/1)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tCylindricalCoordinates(\n\t\t\t[\n\t\t\t\tself['rho'],\n\t\t\t\tself['phi'],\n\t\t\t\tself['z']\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :self |\n\t\tCylindricalCoordinates(\n\t\t\tself.coordinates.toCylindricalCoordinates\n\t\t)\n\t}",
);
