sl.addType(
  false,
  "PolarCoordinate",
  "PolarCoordinate",
  ["Object"],
  ["r", "theta"],
);

sl.copyTraitToType(
  "Object",
  "PolarCoordinate",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "equals",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isPolarCoordinate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_equals_2(_r_1(_self), _r_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _equals_2(_theta_1(_self), _theta_1(_anObject));
      });
    });
  },
  "{ :self :anObject |\n\t\tanObject.isPolarCoordinate & {\n\t\t\tself.r = anObject.r & {\n\t\t\t\tself.theta = anObject.theta\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "asArray",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return [_r_1(_self), _theta_1(_self)];
  },
  "{ :self |\n\t\t[self.r, self.theta]\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "asPolarCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["r", _r_1(_self)], ["theta", _theta_1(_self)]]);
  },
  "{ :self |\n\t\t(r: self.r, theta: self.theta)\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Tuple_2(_r_1(_self), _theta_1(_self));
  },
  "{ :self |\n\t\t(self.r, self.theta)\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "phi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _theta_1(_self);
  },
  "{ :self |\n\t\tself.theta\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "rho",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _r_1(_self);
  },
  "{ :self |\n\t\tself.r\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_r_1(_self), _cos_1(_theta_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.theta.cos\n\t}",
);

sl.addMethod(
  "PolarCoordinate",
  "PolarCoordinate",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_r_1(_self), _sin_1(_theta_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.theta.sin\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "PolarCoordinate",
  "PolarCoordinate",
  ["r", "theta"],
  function (_r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _r, _theta";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newPolarCoordinate_0(), _r, _theta);
  },
  "{ :r :theta |\n\t\tnewPolarCoordinate().initializeSlots(r, theta)\n\t}",
);

sl.addMethod(
  "Array",
  "PolarCoordinate",
  "asPolarCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym9 = _assertIsOfSize_2(_self, 2),
      _r = _at_2(__genSym9, 1),
      _theta = _at_2(__genSym9, 2);
    /* Statements */
    return _PolarCoordinate_2(_r, _theta);
  },
  "{ :self |\n\t\tlet [r, theta] = self;\n\t\tPolarCoordinate(r, theta)\n\t}",
);

sl.addMethod(
  "Record",
  "PolarCoordinate",
  "asPolarCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _PolarCoordinate_2(_at_2(_self, "r"), _at_2(_self, "theta"));
  },
  "{ :self |\n\t\tPolarCoordinate(self::r, self::theta)\n\t}",
);

sl.addMethod(
  "TwoTuple",
  "PolarCoordinate",
  "asPolarCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _PolarCoordinate_2(_first_1(_self), _second_1(_self));
  },
  "{ :self |\n\t\tPolarCoordinate(self.first, self.second)\n\t}",
);
