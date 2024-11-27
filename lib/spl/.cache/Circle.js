sl.addType(
  false,
  "Circle",
  "Circle",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitToType(
  "Object",
  "Circle",
);

sl.addMethod(
  "Circle",
  "Circle",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isCircle_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(
        _equalsSign_2(_center_1(_self), _center_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage =
              "Arity: expected 0, "; /* console.error(errorMessage); */
            throw new Error(errorMessage);
          }
          /* Statements */
          return _equalsSign_2(_radius_1(_self), _radius_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCircle & {\n\t\t\tself.center = anObject.center & {\n\t\t\t\tself.radius = anObject.radius\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumference_1(_self);
  },
  "{ :self |\n\t\tself.circumference\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _pi_1(_squared_1(_radius_1(_self)));
  },
  "{ :self |\n\t\tself.radius.squared.pi\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _center_1(_self);
  },
  "{ :self |\n\t\tself.center\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "circumference",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _pi_1(_asterisk_2(_radius_1(_self), 2));
  },
  "{ :self |\n\t\t(self.radius * 2).pi\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "diameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_radius_1(_self), 2);
  },
  "{ :self |\n\t\tself.radius * 2\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "perimeter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumference_1(_self);
  },
  "{ :self |\n\t\tself.circumference\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "r",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _radius_1(_self);
  },
  "{ :self |\n\t\tself.radius\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "randomPoint",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _shape"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _theta = _randomReal_4(_system, 0, _pi_1(2), []);
      /* Statements */
      return _plusSign_2(
        _center_1(_self),
        _fromPolarCoordinates_1([_radius_1(_self), _theta]),
      );
    }, _shape);
  },
  "{ :self :shape |\n\t\t{\n\t\t\tlet theta = system.randomReal(0, 2.pi, []);\n\t\t\tself.center + [self.radius, theta].fromPolarCoordinates\n\t\t} ! shape\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_2([
      "Circle(",
      _storeString_1(_center_1(_self)),
      ", ",
      _storeString_1(_radius_1(_self)),
      ")",
    ], "");
  },
  "{ :self |\n\t\t[\n\t\t\t'Circle(',\n\t\t\tself.center.storeString,\n\t\t\t', ',\n\t\t\tself.radius.storeString,\n\t\t\t')'\n\t\t].join('')\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _factor"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Circle_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  },
  "{ :self :factor |\n\t\tCircle(self.center + factor, self.radius)\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_center_1(_self), 1);
  },
  "{ :self |\n\t\tself.center[1]\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _at_2(_center_1(_self), 2);
  },
  "{ :self |\n\t\tself.center[2]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Circle",
  "Circle",
  ["center", "radius"],
  function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _center, _radius"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newCircle_0(), _center, _radius);
  },
  "{ :center :radius |\n\t\tnewCircle().initializeSlots(center, radius)\n\t}",
);
