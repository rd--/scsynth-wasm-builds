sl.addType(
  false,
  "PolarCoordinates",
  "PolarCoordinates",
  ["Object"],
  ["r", "theta"],
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
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isPolarCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_r_1(_self), _r_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_theta_1(_self), _theta_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject | &(isPolarCoordinates(anObject), { &(=(r(self), r(anObject)), { =(theta(self), theta(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_r_1(_self), _theta_1(_self)];
  },
  "{ :self | [r(self), theta(self)] }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["r", _r_1(_self)], ["theta", _theta_1(_self)]]);
  },
  "{ :self | Record([['r', r(self)], ['theta', theta(self)]]) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _y_1(_self));
  },
  "{ :self | PlanarCoordinates(x(self), y(self)) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "phi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _theta_1(_self);
  },
  "{ :self | theta(self) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _r_1(_self);
  },
  "{ :self | r(self) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "rho",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _r_1(_self);
  },
  "{ :self | r(self) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "PolarCoordinates(",
      _storeString_1(_r_1(_self)),
      ", ",
      _storeString_1(_theta_1(_self)),
      ")",
    ], "");
  },
  "{ :self | join(['PolarCoordinates(', storeString(r(self)), ', ', storeString(theta(self)), ')'],'') }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_r_1(_self), _cos_1(_theta_1(_self)));
  },
  "{ :self | *(r(self), cos(theta(self))) }",
);

sl.addMethodToExistingType(
  "PolarCoordinates",
  "PolarCoordinates",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_r_1(_self), _sin_1(_theta_1(_self)));
  },
  "{ :self | *(r(self), sin(theta(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PolarCoordinates",
  "PolarCoordinates",
  ["r", "theta"],
  function (_r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPolarCoordinates_0(), _r, _theta);
  },
  "{ :r :theta | initializeSlots(newPolarCoordinates(),r, theta) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL6 = _assertIsOfSize_2(_self, 2);
    let _r = _at_2(__SPL6, 1);
    let _theta = _at_2(__SPL6, 2);
    /* Statements */
    return _PolarCoordinates_2(_r, _theta);
  },
  "{ :self | let __SPL6 = assertIsOfSize(self, 2); let r = at(__SPL6, 1); let theta = at(__SPL6, 2); PolarCoordinates(r, theta) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "fromPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asList_1(_asPlanarCoordinates_1(_asPolarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _fromPolarCoordinates_1);
    });
  },
  "{ :self | if(isVector(self), { asList(asPlanarCoordinates(asPolarCoordinates(self))) }, { collect(self,fromPolarCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "PolarCoordinates",
  ["radius", "theta"],
  function (_radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _radius, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_radius, _theta, _PolarCoordinates_2);
  },
  "{ :radius :theta | withCollect(radius,theta, PolarCoordinates:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolarCoordinates",
  "toPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _asList_1(_asPolarCoordinates_1(_asPlanarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _toPolarCoordinates_1);
    });
  },
  "{ :self | if(isVector(self), { asList(asPolarCoordinates(asPlanarCoordinates(self))) }, { collect(self,toPolarCoordinates:/1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_2(_at_2(_self, "r"), _at_2(_self, "theta"));
  },
  "{ :self | PolarCoordinates(at(self, 'r'), at(self, 'theta')) }",
);
