/* {- Requires: CartesianCoordinate -} */

sl.addType(
  false,
  "Sphere",
  "Sphere",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitToType(
  "Object",
  "Sphere",
);

sl.addMethod(
  "Sphere",
  "Sphere",
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
    return _and_2(_isSphere_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(
        _equals_2(_center_1(_self), _center_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_radius_1(_self), _radius_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isSphere & {\n\t\t\tself.center = anObject.center & {\n\t\t\t\tself.radius = anObject.radius\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
  "diameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _times_2(_radius_1(_self), 2);
  },
  "{ :self |\n\t\tself.radius * 2\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "Sphere(",
      _storeString_1(_center_1(_self)),
      ", ",
      _storeString_1(_radius_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'Sphere(',\n\t\t\t\tself.center.storeString,\n\t\t\t\t', ',\n\t\t\t\tself.radius.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
  "surfaceArea",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _pi_1(_times_2(_squared_1(_radius_1(_self)), 4));
  },
  "{ :self |\n\t\t(self.radius.squared * 4).pi\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
  "volume",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _pi_1(_dividedBy_2(_times_2(_cubed_1(_radius_1(_self)), 4), 3));
  },
  "{ :self |\n\t\t(self.radius.cubed * 4 / 3).pi\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _Sphere_2(_plus_2(_center_1(_self), _factor), _radius_1(_self));
  },
  "{ :self :factor |\n\t\tSphere(self.center + factor, self.radius)\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
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
    return _x_1(_center_1(_self));
  },
  "{ :self |\n\t\tself.center.x\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
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
    return _y_1(_center_1(_self));
  },
  "{ :self |\n\t\tself.center.y\n\t}",
);

sl.addMethod(
  "Sphere",
  "Sphere",
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
    return _z_1(_center_1(_self));
  },
  "{ :self |\n\t\tself.center.z\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "Sphere",
  "Sphere",
  ["center", "radius"],
  function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newSphere_0(), _center, _radius);
  },
  "{ :center :radius |\n\t\tnewSphere().initializeSlots(center, radius)\n\t}",
);
