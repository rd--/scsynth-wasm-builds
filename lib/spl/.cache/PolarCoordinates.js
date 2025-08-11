sl.addType(
  false,
  "PolarCoordinates",
  "PolarCoordinates",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PolarCoordinates",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlots(self,anObject) }",
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
  "{ :self | copy(coordinates(self)) }",
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
  "{ :self | self }",
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
  "{ :self | Record([['r', r(self)], ['theta', theta(self)]]) }",
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
  "{ :self | PlanarCoordinates([x(self), y(self)]) }",
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
  "{ :self | isZero(r(self)) }",
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
  "{ :self | theta(self) }",
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
  "{ :self | at(coordinates(self), 1) }",
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
  "{ :self | at(coordinates(self), 1) }",
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
  "{ :self | at(coordinates(self), 1) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | at(coordinates(self), 2) }",
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
    let __SPL200 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _r = _at_2(__SPL200, 1);
    let _theta = _at_2(__SPL200, 2);
    /* Statements */
    return _asterisk_2(_r, _cos_1(_theta));
  }, ["self"]),
  "{ :self | let __SPL200 = assertIsOfSize(coordinates(self), 2); let r = at(__SPL200, 1); let theta = at(__SPL200, 2); *(r, cos(theta)) }",
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
    let __SPL201 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _r = _at_2(__SPL201, 1);
    let _theta = _at_2(__SPL201, 2);
    /* Statements */
    return _asterisk_2(_r, _sin_1(_theta));
  }, ["self"]),
  "{ :self | let __SPL201 = assertIsOfSize(coordinates(self), 2); let r = at(__SPL201, 1); let theta = at(__SPL201, 2); *(r, sin(theta)) }",
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
        let __SPL202 = _assertIsOfSize_2(_self, 2);
        let _r = _at_2(__SPL202, 1);
        let _theta = _at_2(__SPL202, 2);
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
  "{ :self | if(isVector(self), { let __SPL202 = assertIsOfSize(self, 2); let r = at(__SPL202, 1); let theta = at(__SPL202, 2); initializeSlots(newPolarCoordinates(),[r, theta]) }, { collect(self,PolarCoordinates:/1) }) }",
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
  "{ :self | PolarCoordinates(self) }",
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
        let __SPL203 = _assertIsOfSize_2(_self, 2);
        let _r = _at_2(__SPL203, 1);
        let _theta = _at_2(__SPL203, 2);
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
  "{ :self | if(isVector(self), { let __SPL203 = assertIsOfSize(self, 2); let r = at(__SPL203, 1); let theta = at(__SPL203, 2); [*(r, cos(theta)), *(r, sin(theta))] }, { collect(self,fromPolarCoordinates:/1) }) }",
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
        let __SPL204 = _assertIsOfSize_2(_self, 2);
        let _x = _at_2(__SPL204, 1);
        let _y = _at_2(__SPL204, 2);
        /* Statements */
        return [
          _sqrt_1(_plusSign_2(_squared_1(_x), _squared_1(_y))),
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
  "{ :self | if(isVector(self), { let __SPL204 = assertIsOfSize(self, 2); let x = at(__SPL204, 1); let y = at(__SPL204, 2); [sqrt((+(squared(x), squared(y)))), atan2(y, x)] }, { collect(self,toPolarCoordinates:/1) }) }",
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
  "{ :self | PolarCoordinates([at(self, 'r'), at(self, 'theta')]) }",
);
