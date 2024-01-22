/* {- Requires: RectangularCoordinate CartesianCoordinate -} */

sl.addType(
  false,
  "FourVector",
  "FourVector",
  ["Object"],
  ["w", "x", "y", "z"],
);

sl.copyTraitToType(
  "Object",
  "FourVector",
);

sl.addMethod(
  "FourVector",
  "FourVector",
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
    return _and_2(_isFourVector_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _equals_2(_asArray_1(_self), _asArray_1(_anObject));
    });
  },
  "{ :self :anObject |\n\t\tanObject.isFourVector & {\n\t\t\tself.asArray = anObject.asArray\n\t\t}\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
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
    return [_w_1(_self), _x_1(_self), _y_1(_self), _z_1(_self)];
  },
  "{ :self |\n\t\t[self.w, self.x, self.y, self.z]\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
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
    return Object.fromEntries([["w", _w_1(_self)], ["x", _x_1(_self)], [
      "y",
      _y_1(_self),
    ], ["z", _z_1(_self)]]);
  },
  "{ :self |\n\t\t(w: self.w, x: self.x, y: self.y, z: self.z)\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_equals_2(_w_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_equals_2(_x_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_equals_2(_y_1(_self), 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _equals_2(_z_1(_self), 0);
        });
      });
    });
  },
  "{ :self |\n\t\tself.w = 0 & {\n\t\t\tself.x = 0 & {\n\t\t\t\tself.y = 0 & {\n\t\t\t\t\tself.z = 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return 4;
  },
  "{ :self |\n\t\t4\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
  "xy",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_x_1(_self), _y_1(_self));
  },
  "{ :self |\n\t\tRectangularCoordinate(self.x, self.y)\n\t}",
);

sl.addMethod(
  "FourVector",
  "FourVector",
  "xyz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinate_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tCartesianCoordinate(self.x, self.y, self.z)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "FourVector",
  "FourVector",
  ["w", "x", "y", "z"],
  function (_w, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(_newFourVector_0(), _w, _x, _y, _z);
  },
  "{ :w :x :y :z |\n\t\tnewFourVector().initializeSlots(w, x, y, z)\n\t}",
);

sl.addMethod(
  "Array",
  "FourVector",
  "asFourVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Temporaries */
    let __genSym3 = _assertIsOfSize_2(_self, 4),
      _w = _at_2(__genSym3, 1),
      _x = _at_2(__genSym3, 2),
      _y = _at_2(__genSym3, 3),
      _z = _at_2(__genSym3, 4);
    /* Statements */
    return _FourVector_4(_w, _x, _y, _z);
  },
  "{ :self |\n\t\tlet [w, x, y, z] = self;\n\t\tFourVector(w, x, y, z)\n\t}",
);

sl.addMethod(
  "Record",
  "FourVector",
  "asFourVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _FourVector_4(
      _at_2(_self, "w"),
      _at_2(_self, "x"),
      _at_2(_self, "y"),
      _at_2(_self, "z"),
    );
  },
  "{ :self |\n\t\tFourVector(self::w, self::x, self::y, self::z)\n\t}",
);

sl.addMethod(
  "FourTuple",
  "FourVector",
  "asFourVector",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _FourVector_4(
      _first_1(_self),
      _second_1(_self),
      _third_1(_self),
      _fourth_1(_self),
    );
  },
  "{ :self |\n\t\tFourVector(self.first, self.second, self.third, self.fourth)\n\t}",
);
