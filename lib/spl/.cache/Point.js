/* {- Requires: RectangularCoordinate CartesianCoordinate FourVector -} */

sl.addMethod(
  "RectangularCoordinate",
  "Point",
  "asPoint",
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
  "RectangularCoordinate",
  "Point",
  "isPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "Point",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _join_1([_x_1(_self), "@", _y_1(_self)]);
  },
  "{ :self |\n\t\t[self.x, '@', self.y].join\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "Point",
  "asPoint",
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
  "CartesianCoordinate",
  "Point",
  "isPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.extendTraitWithMethod(
  "Object",
  "Point",
  "isPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return false;
  },
  "{ :self |\n\t\tfalse\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "commercialAt",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_x, _y);
  },
  "{ :x :y |\n\t\tRectangularCoordinate(x, y)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "Point",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_x, _y);
  },
  "{ :x :y |\n\t\tRectangularCoordinate(x, y)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "Point",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinate_3(_x, _y, _z);
  },
  "{ :x :y :z |\n\t\tCartesianCoordinate(x, y, z)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "Point",
  ["w", "x", "y", "z"],
  function (_w, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _w, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _FourVector_4(_w, _x, _y, _z);
  },
  "{ :w :x :y :z |\n\t\tFourVector(w, x, y, z)\n\t}",
);

sl.addMethod(
  "List",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asRectangularCoordinate_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asCartesianCoordinate_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asFourVector_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("List>>asPoint: invalid size");
    });
  },
  "{ :self |\n\t\tself.size.caseOfOtherwise([\n\t\t\t{ 2 } -> { self.asRectangularCoordinate },\n\t\t\t{ 3 } -> { self.asCartesianCoordinate },\n\t\t\t{ 4 } -> { self.asFourVector }\n\t\t]) {\n\t\t\t'List>>asPoint: invalid size'.error\n\t\t}\n\t}",
);

sl.addMethod(
  "Record",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _if_3(
      _includesAllIndices_2(_self, ["w", "x", "y", "z"]),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _asFourVector_1(_self);
      },
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _if_3(
          _includesAllIndices_2(_self, ["x", "y", "z"]),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _asCartesianCoordinate_1(_self);
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _if_3(_includesAllIndices_2(_self, ["x", "y"]), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _asRectangularCoordinate_1(_self);
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                console.error(errorMessage);
                throw Error(errorMessage);
              }
              /* Statements */
              return _error_1("Record>>asPoint: invalid record");
            });
          },
        );
      },
    );
  },
  "{ :self |\n\t\tself.includesAllIndices(['w','x','y','z']).if {\n\t\t\tself.asFourVector\n\t\t} {\n\t\t\tself.includesAllIndices(['x','y','z']).if {\n\t\t\t\tself.asCartesianCoordinate\n\t\t\t} {\n\t\t\t\tself.includesAllIndices(['x','y']).if {\n\t\t\t\t\tself.asRectangularCoordinate\n\t\t\t\t} {\n\t\t\t\t\t'Record>>asPoint: invalid record'.error\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_size_1(_self), [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _RectangularCoordinate_2(_first_1(_self), _second_1(_self));
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 3;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _CartesianCoordinate_3(
          _first_1(_self),
          _second_1(_self),
          _third_1(_self),
        );
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return 4;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_1("Tuple>>asPoint");
    });
  },
  "{ :self |\n\t\tself.size.caseOfOtherwise([\n\t\t\t{ 2 } -> { RectangularCoordinate(self.first, self.second) },\n\t\t\t{ 3 } -> { CartesianCoordinate(self.first, self.second, self.third) },\n\t\t\t{ 4 } -> { FourVector(self.first, self.second, self.third, self.fourth) }\n\t\t]) {\n\t\t\t'Tuple>>asPoint'.error\n\t\t}\n\t}",
);
