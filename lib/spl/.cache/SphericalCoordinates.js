/*  Requires: CartesianCoordinates  */

sl.addTrait("SphericalCoordinates", "SphericalCoordinates");

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return _compareBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, =)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, ~)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asSphericalCoordinates",
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

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "asCartesianCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _r = _r_1(_self);
    let _theta = _theta_1(_self);
    let _phi = _phi_1(_self);
    /* Statements */
    return _CartesianCoordinates_3(
      _asterisk_2(_asterisk_2(_r, _cos_1(_theta)), _sin_1(_phi)),
      _asterisk_2(_asterisk_2(_r, _sin_1(_theta)), _sin_1(_phi)),
      _asterisk_2(_r, _cos_1(_phi)),
    );
  },
  "{ :self |\n\t\tlet r = self.r;\n\t\tlet theta = self.theta;\n\t\tlet phi = self.phi;\n\t\tCartesianCoordinates(\n\t\t\tr * theta.cos * phi.sin,\n\t\t\tr * theta.sin * phi.sin,\n\t\t\tr * phi.cos\n\t\t)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return [_r_1(_self), _theta_1(_self), _phi_1(_self)];
  },
  "{ :self |\n\t\t[self.r, self.theta, self.phi]\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return Object.fromEntries([["r", _r_1(_self)], ["theta", _theta_1(_self)], [
      "phi",
      _phi_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(r: self.r, theta: self.theta, phi: self.phi)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return _asTuple_1([_r_1(_self), _theta_1(_self), _phi_1(_self)]);
  },
  "{ :self |\n\t\t(self.r, self.theta, self.phi)\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "azimuth",
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

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "compareBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isSphericalCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_aBlock_2(_r_1(_self), _r_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _aBlock_2(_theta_1(_self), _theta_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _aBlock_2(_phi_1(_self), _phi_1(_anObject));
          },
        );
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isSphericalCoordinates & {\n\t\t\taBlock(self.r, anObject.r) & {\n\t\t\t\taBlock(self.theta, anObject.theta) & {\n\t\t\t\t\taBlock(self.phi, anObject.phi)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "elevation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _negated_1(_hyphenMinus_2(_phi_1(_self), _solidus_2(_pi, 2)));
  },
  "{ :self |\n\t\t(self.phi - (pi / 2)).negated\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "inclination",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _phi_1(_self);
  },
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return _join_2([
      "SphericalCoordinates(",
      _storeString_1(_r_1(_self)),
      ", ",
      _storeString_1(_theta_1(_self)),
      ", ",
      _storeString_1(_phi_1(_self)),
      ")",
    ], "");
  },
  "{ :self |\n\t\t[\n\t\t\t'SphericalCoordinates(',\n\t\t\tself.r.storeString,\n\t\t\t', ',\n\t\t\tself.theta.storeString,\n\t\t\t', ',\n\t\t\tself.phi.storeString,\n\t\t\t')'\n\t\t].join('')\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return _asterisk_2(
      _asterisk_2(_r_1(_self), _cos_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  },
  "{ :self |\n\t\tself.r * self.theta.cos * self.phi.sin\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
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
    return _asterisk_2(
      _asterisk_2(_r_1(_self), _sin_1(_theta_1(_self))),
      _sin_1(_phi_1(_self)),
    );
  },
  "{ :self |\n\t\tself.r * self.theta.sin * self.phi.sin\n\t}",
);

sl.addTraitMethod(
  "SphericalCoordinates",
  "SphericalCoordinates",
  "z",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_r_1(_self), _cos_1(_phi_1(_self)));
  },
  "{ :self |\n\t\tself.r * self.phi.cos\n\t}",
);

sl.addType(
  false,
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["Object", "SphericalCoordinates"],
  ["r", "theta", "phi"],
);

sl.copyTraitToType(
  "Object",
  "SphericalCoordinates",
);

sl.copyTraitToType(
  "SphericalCoordinates",
  "SphericalCoordinates",
);

sl.extendTraitWithMethod(
  "Number",
  "SphericalCoordinates",
  "IsoSphericalCoordinates",
  ["r", "theta", "phi"],
  function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newSphericalCoordinates_0(), _r, _phi, _theta);
  },
  "{ :r :theta :phi |\n\t\tnewSphericalCoordinates().initializeSlots(r, phi, theta)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "SphericalCoordinates",
  "SphericalCoordinates",
  ["r", "theta", "phi"],
  function (_r, _theta, _phi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _r, _theta, _phi";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newSphericalCoordinates_0(), _r, _theta, _phi);
  },
  "{ :r :theta :phi |\n\t\tnewSphericalCoordinates().initializeSlots(r, theta, phi)\n\t}",
);

sl.addMethod(
  "List",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym57 = _assertIsOfSize_2(_self, 3),
      _r = _at_2(__genSym57, 1),
      _theta = _at_2(__genSym57, 2),
      _phi = _at_2(__genSym57, 3);
    /* Statements */
    return _SphericalCoordinates_3(_r, _theta, _phi);
  },
  "{ :self |\n\t\tlet [r, theta, phi] = self;\n\t\tSphericalCoordinates(r, theta, phi)\n\t}",
);

sl.addMethod(
  "Tuple",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym57 = _assertIsOfSize_2(_self, 3),
      _r = _at_2(__genSym57, 1),
      _theta = _at_2(__genSym57, 2),
      _phi = _at_2(__genSym57, 3);
    /* Statements */
    return _SphericalCoordinates_3(_r, _theta, _phi);
  },
  "{ :self |\n\t\tlet [r, theta, phi] = self;\n\t\tSphericalCoordinates(r, theta, phi)\n\t}",
);

sl.addMethod(
  "List",
  "SphericalCoordinates",
  "fromSphericalCoordinates",
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
      return _asList_1(
        _asCartesianCoordinates_1(_asSphericalCoordinates_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _fromSphericalCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asSphericalCoordinates.asCartesianCoordinates.asList\n\t\t} {\n\t\t\tself.collect(fromSphericalCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "SphericalCoordinates",
  "fromSphericalCoordinates",
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
      return _asList_1(
        _asCartesianCoordinates_1(_asSphericalCoordinates_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _fromSphericalCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asSphericalCoordinates.asCartesianCoordinates.asList\n\t\t} {\n\t\t\tself.collect(fromSphericalCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "SphericalCoordinates",
  "toSphericalCoordinates",
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
      return _asList_1(
        _asSphericalCoordinates_1(_asCartesianCoordinates_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _toSphericalCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asCartesianCoordinates.asSphericalCoordinates.asList\n\t\t} {\n\t\t\tself.collect(toSphericalCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "SphericalCoordinates",
  "toSphericalCoordinates",
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
      return _asList_1(
        _asSphericalCoordinates_1(_asCartesianCoordinates_1(_self)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _toSphericalCoordinates_1);
    });
  },
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tself.asCartesianCoordinates.asSphericalCoordinates.asList\n\t\t} {\n\t\t\tself.collect(toSphericalCoordinates:/1)\n\t\t}\n\t}",
);

sl.addMethod(
  "Record",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _SphericalCoordinates_3(
      _at_2(_self, "r"),
      _at_2(_self, "theta"),
      _at_2(_self, "phi"),
    );
  },
  "{ :self |\n\t\tSphericalCoordinates(self::r, self::theta, self::phi)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "asSphericalCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  },
  "{ :self |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet z = self.z;\n\t\tSphericalCoordinates(\n\t\t\t(x.squared + y.squared + z.squared).sqrt,\n\t\t\ty.atan2(x),\n\t\t\t(x.squared + y.squared).sqrt.atan2(z)\n\t\t)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "azimuth",
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
  "CartesianCoordinates",
  "SphericalCoordinates",
  "inclination",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _phi_1(_self);
  },
  "{ :self |\n\t\tself.phi\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
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
    return _atan2_2(
      _sqrt_1(_plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self)))),
      _z_1(_self),
    );
  },
  "{ :self |\n\t\t(self.x.squared + self.y.squared).sqrt.atan2(self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
  "r",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plusSign_2(
        _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
        _squared_1(_z_1(_self)),
      ),
    );
  },
  "{ :self |\n\t\t(self.x.squared + self.y.squared + self.z.squared).sqrt\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "SphericalCoordinates",
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
  "CartesianCoordinates",
  "SphericalCoordinates",
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
  "CartesianCoordinates",
  "SphericalCoordinates",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  },
  "{ :self |\n\t\tself.y.atan2(self.x)\n\t}",
);
