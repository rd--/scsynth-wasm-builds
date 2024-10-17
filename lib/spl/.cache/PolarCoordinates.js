sl.addType(
  false,
  "PolarCoordinates",
  "PolarCoordinates",
  ["Object"],
  ["r", "theta"],
);

sl.copyTraitToType(
  "Object",
  "PolarCoordinates",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isPolarCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_r_1(_self), _r_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_theta_1(_self), _theta_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isPolarCoordinates & {\n\t\t\tself.r = anObject.r & {\n\t\t\t\tself.theta = anObject.theta\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_r_1(_self), _theta_1(_self)];
  },
  "{ :self |\n\t\t[self.r, self.theta]\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["r", _r_1(_self)], ["theta", _theta_1(_self)]]);
  },
  "{ :self |\n\t\t(r: self.r, theta: self.theta)\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _y_1(_self));
  },
  "{ :self |\n\t\tPlanarCoordinates(self.x, self.y)\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1([_r_1(_self), _theta_1(_self)]);
  },
  "{ :self |\n\t\t(self.r, self.theta)\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "phi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _theta_1(_self);
  },
  "{ :self |\n\t\tself.theta\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _r_1(_self);
  },
  "{ :self |\n\t\tself.r\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "rho",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _r_1(_self);
  },
  "{ :self |\n\t\tself.r\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "PolarCoordinates(",
      _storeString_1(_r_1(_self)),
      ", ",
      _storeString_1(_theta_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'PolarCoordinates(',\n\t\t\tself.r.storeString,\n\t\t\t', ',\n\t\t\tself.theta.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_r_1(_self), _cos_1(_theta_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.theta.cos\n\t}",
);

sl.addMethod(
  "PolarCoordinates",
  "PolarCoordinates",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_r_1(_self), _sin_1(_theta_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.theta.sin\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "PolarCoordinates",
  "PolarCoordinates",
  ["r", "theta"],
  function (_r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _theta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newPolarCoordinates_0(), _r, _theta);
  },
  "{ :r :theta |\n\t\tnewPolarCoordinates().initializeSlots(r, theta)\n\t}",
);

sl.addMethod(
  "List",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym51 = _assertIsOfSize_2(_self, 2),
      _r = _at_2(__genSym51, 1),
      _theta = _at_2(__genSym51, 2);
    /* Statements */
    return _PolarCoordinates_2(_r, _theta);
  },
  "{ :self |\n\t\tlet [r, theta] = self;\n\t\tPolarCoordinates(r, theta)\n\t}",
);

sl.addMethod(
  "Tuple",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym51 = _assertIsOfSize_2(_self, 2),
      _r = _at_2(__genSym51, 1),
      _theta = _at_2(__genSym51, 2);
    /* Statements */
    return _PolarCoordinates_2(_r, _theta);
  },
  "{ :self |\n\t\tlet [r, theta] = self;\n\t\tPolarCoordinates(r, theta)\n\t}",
);

sl.addMethod(
  "List",
  "PolarCoordinates",
  "fromPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asList_1(_asPlanarCoordinates_1(_asPolarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _fromPolarCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asPolarCoordinates.asPlanarCoordinates.asList\n\t\t} {\n\t\t\tself.collect(fromPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "PolarCoordinates",
  "fromPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asList_1(_asPlanarCoordinates_1(_asPolarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _fromPolarCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asPolarCoordinates.asPlanarCoordinates.asList\n\t\t} {\n\t\t\tself.collect(fromPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "PolarCoordinates",
  "PolarCoordinates",
  ["radius", "theta"],
  function (_radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _radius, _theta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_theta, _radius, _PolarCoordinates_2);
  },
  "{ :radius :theta |\n\t\ttheta.adaptToCollectionAndApply(radius, PolarCoordinates:/2)\n\t}",
);

sl.addMethod(
  "Tuple",
  "PolarCoordinates",
  "PolarCoordinates",
  ["radius", "theta"],
  function (_radius, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _radius, _theta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_theta, _radius, _PolarCoordinates_2);
  },
  "{ :radius :theta |\n\t\ttheta.adaptToCollectionAndApply(radius, PolarCoordinates:/2)\n\t}",
);

sl.addMethod(
  "List",
  "PolarCoordinates",
  "toPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asList_1(_asPolarCoordinates_1(_asPlanarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _toPolarCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asPlanarCoordinates.asPolarCoordinates.asList\n\t\t} {\n\t\t\tself.collect(toPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "PolarCoordinates",
  "toPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asList_1(_asPolarCoordinates_1(_asPlanarCoordinates_1(_self)));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _toPolarCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asPlanarCoordinates.asPolarCoordinates.asList\n\t\t} {\n\t\t\tself.collect(toPolarCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Record",
  "PolarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PolarCoordinates_2(_at_2(_self, "r"), _at_2(_self, "theta"));
  },
  "{ :self |\n\t\tPolarCoordinates(self::r, self::theta)\n\t}",
);
