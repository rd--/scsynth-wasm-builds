/* {- Requires: CartesianCoordinate -} */

sl.addTrait("SphericalCoordinate", "SphericalCoordinate");

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
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
    return _compareBy_3(_self, _anObject, _equals_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, =)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, ~)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "asSphericalCoordinate",
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

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "asCartesianCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _r = _r_1(_self);
    let _theta = _theta_1(_self);
    let _phi = _phi_1(_self);
    /* Statements */
    return _CartesianCoordinate_3(
      _times_2(_times_2(_r, _cos_1(_theta)), _sin_1(_phi)),
      _times_2(_times_2(_r, _sin_1(_theta)), _sin_1(_phi)),
      _times_2(_r, _cos_1(_phi)),
    );
  },
  "{ :self |\n\t\tlet r = self.r;\n\t\tlet theta = self.theta;\n\t\tlet phi = self.phi;\n\t\tCartesianCoordinate(\n\t\t\tr * theta.cos * phi.sin,\n\t\t\tr * theta.sin * phi.sin,\n\t\t\tr * phi.cos\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
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
    return Object.fromEntries([["r", _r_1(_self)], ["theta", _theta_1(_self)], [
      "phi",
      _phi_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(r: self.r, theta: self.theta, phi: self.phi)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "azimuth",
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

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "compareBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isSphericalCoordinate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_aBlock_2(_r_1(_self), _r_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(
          _aBlock_2(_theta_1(_self), _theta_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _aBlock_2(_phi_1(_self), _phi_1(_anObject));
          },
        );
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isSphericalCoordinate & {\n\t\t\taBlock(self.r, anObject.r) & {\n\t\t\t\taBlock(self.theta, anObject.theta) & {\n\t\t\t\t\taBlock(self.phi, anObject.phi)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "elevation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _negated_1(_minus_2(_phi_1(_self), _dividedBy_2(_pi, 2)));
  },
  "{ :self |\n\t\t(self.phi - (pi / 2)).negated\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "inclination",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _phi_1(_self);
  },
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "radius",
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

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
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

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
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
    return _times_2(
      _times_2(_r_1(_self), _cos_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  },
  "{ :self |\n\t\tself.r * self.theta.cos * self.phi.sin\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
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
    return _times_2(
      _times_2(_r_1(_self), _sin_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  },
  "{ :self |\n\t\tself.r * self.theta.sin * self.phi.sin\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinate",
  "SphericalCoordinate",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_r_1(_self), _cos_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.phi.cos\n\t}",
);

sl.addType(
  false,
  "SphericalCoordinate",
  "SphericalCoordinate",
  ["Object", "SphericalCoordinate"],
  ["r", "theta", "phi"],
);

sl.copyTraitToType(
  "Object",
  "SphericalCoordinate",
);

sl.copyTraitToType(
  "SphericalCoordinate",
  "SphericalCoordinate",
);

sl.extendTraitWithMethod(
  "Number",
  "SphericalCoordinate",
  "IsoSphericalCoordinate",
  ["r", "theta", "phi"],
  function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newSphericalCoordinate_0(), _r, _phi, _theta);
  },
  "{ :r :theta :phi |\n\t\tnewSphericalCoordinate().initializeSlots(r, phi, theta)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "SphericalCoordinate",
  "SphericalCoordinate",
  ["r", "theta", "phi"],
  function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newSphericalCoordinate_0(), _r, _theta, _phi);
  },
  "{ :r :theta :phi |\n\t\tnewSphericalCoordinate().initializeSlots(r, theta, phi)\n\t}",
);

sl.addMethod(
  "Array",
  "SphericalCoordinate",
  "asSphericalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym11 = _assertIsOfSize_2(_self, 3),
      _r = _at_2(__genSym11, 1),
      _theta = _at_2(__genSym11, 2),
      _phi = _at_2(__genSym11, 3);
    /* Statements */
    return _SphericalCoordinate_3(_r, _theta, _phi);
  },
  "{ :self |\n\t\tlet [r, theta, phi] = self;\n\t\tSphericalCoordinate(r, theta, phi)\n\t}",
);

sl.addMethod(
  "Record",
  "SphericalCoordinate",
  "asSphericalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _SphericalCoordinate_3(
      _at_2(_self, "r"),
      _at_2(_self, "theta"),
      _at_2(_self, "phi"),
    );
  },
  "{ :self |\n\t\tSphericalCoordinate(self::r, self::theta, self::phi)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "SphericalCoordinate",
  "asSphericalCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _z = _z_1(_self);
    /* Statements */
    return _SphericalCoordinate_3(
      _sqrt_1(_plus_2(_plus_2(_squared_1(_x), _squared_1(_y)), _squared_1(_z))),
      _atan2_2(_y, _x),
      _atan2_2(_sqrt_1(_plus_2(_squared_1(_x), _squared_1(_y))), _z),
    );
  },
  "{ :self |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet z = self.z;\n\t\tSphericalCoordinate(\n\t\t\t(x.squared + y.squared + z.squared).sqrt,\n\t\t\ty.atan2(x),\n\t\t\t(x.squared + y.squared).sqrt.atan2(z)\n\t\t)\n\t}",
);
