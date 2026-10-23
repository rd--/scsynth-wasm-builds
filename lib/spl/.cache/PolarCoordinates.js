sl.addType(
  false,
  "PolarCoordinates",
  "PolarCoordinates",
  ["@Object", "@Copy", "@Store", "@Equal"],
  ["rho", "phi"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "PolarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "PolarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Store",
  "PolarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "PolarCoordinates",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "coordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_rho_1(_self), _phi_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.rho, self.phi]\n\t}",
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
    return _isZero_1(_rho_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.rho.isZero\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "List",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "polarCoordinatesToList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "PlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _y_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPlanarCoordinates(self.x, self.y)\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "PolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.copy\n\t}",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "Record",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["rho", _rho_1(_self)], ["phi", _phi_1(_self)]]);
  }, ["self"]),
  "{ :self |\n\t\t(rho: self.rho, phi: self.phi)\n\t}",
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
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _cos_1(_phi_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.rho * self.phi.cos\n\t}",
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
    } /* Statements */
    return _asterisk_2(_rho_1(_self), _sin_1(_phi_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.rho * self.phi.sin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PolarCoordinates",
  "PolarCoordinates",
  ["rho", "phi"],
  sl.annotateFunction(function (_rho, _phi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _rho, _phi";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_phi),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newPolarCoordinates_0(), _rho, _phi);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_phi, _rho, _PolarCoordinates_2);
      }, []),
    );
  }, ["rho", "phi"]),
  "{ :rho :phi |\n\t\tphi.isNumber.if {\n\t\t\tnewPolarCoordinates().initializeSlots(rho, phi)\n\t\t} {\n\t\t\tphi.adaptToNumberAndApply(rho, PolarCoordinates/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "PolarCoordinates",
  ["rho", "phi"],
  sl.annotateFunction(function (_rho, _phi) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _rho, _phi";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_phi, _rho, _PolarCoordinates_2);
  }, ["rho", "phi"]),
  "{ :rho :phi |\n\t\tphi.adaptToCollectionAndApply(rho, PolarCoordinates/2)\n\t}",
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
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar1 = _assertIsOfSize_2(_each, 2);
        let _rho = _at_2(__SplVar1, 1);
        let _phi = _at_2(__SplVar1, 2);
        return _PolarCoordinates_2(_rho, _phi);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\tlet [rho, phi] = each;\n\t\t\tPolarCoordinates(rho, phi)\n\t\t}\n\t}",
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
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar2 = _assertIsOfSize_2(_v, 2);
        let _rho = _at_2(__SplVar2, 1);
        let _phi = _at_2(__SplVar2, 2);
        return [
          _asterisk_2(_rho, _cos_1(_phi)),
          _asterisk_2(_rho, _sin_1(_phi)),
        ];
      }, ["v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :v |\n\t\t\tlet [rho, phi] = v;\n\t\t\t[rho * phi.cos, rho * phi.sin]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "toPolarCoordinates",
  ["self", "rule"],
  sl.annotateFunction(function (_self, _rule) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _rule";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_rule, [
      _hyphenMinusGreaterThanSign_2(
        "Signed",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _toPolarCoordinates_1(_self);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "Unsigned",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _atVectorOrElementwise_2(
            _self,
            sl.annotateFunction(function (_v) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _v";
                throw new Error(errorMessage);
              } /* Statements */
              let __SplVar3 = _assertIsOfSize_2(_v, 2);
              let _x = _at_2(__SplVar3, 1);
              let _y = _at_2(__SplVar3, 2);
              return [
                _sqrt_1(_plusSign_2(_square_1(_x), _square_1(_y))),
                _percentSign_2(_atan2_2(_y, _x), _pi_1(2)),
              ];
            }, ["v"]),
          );
        }, []),
      ),
    ]);
  }, ["self", "rule"]),
  "{ :self :rule |\n\t\trule.caseOf(\n\t\t\t[\n\t\t\t\t'Signed' -> { self.toPolarCoordinates },\n\t\t\t\t'Unsigned' -> {\n\t\t\t\t\tself.atVectorOrElementwise { :v |\n\t\t\t\t\t\tlet [x, y] = v;\n\t\t\t\t\t\t[(x.square + y.square).sqrt, atan2(y, x) % 2.pi]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t]\n\t\t)\n\t}",
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
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_v) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _v";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar4 = _assertIsOfSize_2(_v, 2);
        let _x = _at_2(__SplVar4, 1);
        let _y = _at_2(__SplVar4, 2);
        return [
          _sqrt_1(_plusSign_2(_square_1(_x), _square_1(_y))),
          _atan2_2(_y, _x),
        ];
      }, ["v"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :v |\n\t\t\tlet [x, y] = v;\n\t\t\t[(x.square + y.square).sqrt, atan2(y, x)]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PolarCoordinates",
  "PolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar5 = _assertIsOfSize_2(_self, 2);
    let _rho = _at_2(__SplVar5, "rho");
    let _phi = _at_2(__SplVar5, "phi");
    return _PolarCoordinates_2(_rho, _phi);
  }, ["self"]),
  "{ :self |\n\t\tlet (rho: rho, phi: phi) = self;\n\t\tPolarCoordinates(rho, phi)\n\t}",
);
