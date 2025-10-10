sl.addType(
  false,
  "PolarCoordinates",
  "PolarCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PolarCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PolarCoordinates",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
  "asPolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["r", _r_1(_self)], ["theta", _theta_1(_self)]]);
  }, ["self"]),
  "{ :self |\n\t\t(r: self.r, theta: self.theta)\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1([_x_1(_self), _y_1(_self)]);
  }, ["self"]),
  "{ :self |\n\t\tPlanarCoordinates([self.x, self.y])\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "isOrigin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_r_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.r.isZero\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "phi",
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
  "PolarCoordinates",
  "PolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
  "radius",
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
  "PolarCoordinates",
  "PolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
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
  "PolarCoordinates",
  "PolarCoordinates",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _r = _at_2(__SplVar1, 1);
    let _theta = _at_2(__SplVar1, 2);
    /* Statements */
    return _asterisk_2(_r, _cos_1(_theta));
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta] = self.coordinates;\n\t\tr * theta.cos\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _r = _at_2(__SplVar2, 1);
    let _theta = _at_2(__SplVar2, 2);
    /* Statements */
    return _asterisk_2(_r, _sin_1(_theta));
  }, ["self"]),
  "{ :self |\n\t\tlet [r, theta] = self.coordinates;\n\t\tr * theta.sin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "PolarCoordinates",
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
        let __SplVar3 = _assertIsOfSize_2(_self, 2);
        let _r = _at_2(__SplVar3, 1);
        let _theta = _at_2(__SplVar3, 2);
        /* Statements */
        return _initializeSlots_2(_newPolarCoordinates_0(), [_r, _theta]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _PolarCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [r, theta] = self;\n\t\t\tnewPolarCoordinates().initializeSlots([r, theta])\n\t\t} {\n\t\t\tself.collect(PolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tPolarCoordinates(self)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "fromPolarCoordinates",
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
        let __SplVar4 = _assertIsOfSize_2(_self, 2);
        let _r = _at_2(__SplVar4, 1);
        let _theta = _at_2(__SplVar4, 2);
        /* Statements */
        return [
          _asterisk_2(_r, _cos_1(_theta)),
          _asterisk_2(_r, _sin_1(_theta)),
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _fromPolarCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [r, theta] = self;\n\t\t\t[r * theta.cos, r * theta.sin]\n\t\t} {\n\t\t\tself.collect(fromPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "toPolarCoordinates",
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
        let __SplVar5 = _assertIsOfSize_2(_self, 2);
        let _x = _at_2(__SplVar5, 1);
        let _y = _at_2(__SplVar5, 2);
        /* Statements */
        return [
          _sqrt_1(_plusSign_2(_square_1(_x), _square_1(_y))),
          _atan2_2(_y, _x),
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _toPolarCoordinates_1);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet [x, y] = self;\n\t\t\t[(x.square + y.square).sqrt, atan2(y, x)]\n\t\t} {\n\t\t\tself.collect(toPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_1([_at_2(_self, "r"), _at_2(_self, "theta")]);
  }, ["self"]),
  "{ :self |\n\t\tPolarCoordinates(\n\t\t\t[\n\t\t\t\tself['r'],\n\t\t\t\tself['theta']\n\t\t\t]\n\t\t)\n\t}",
);
