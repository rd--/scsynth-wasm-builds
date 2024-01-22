sl.addType(
  false,
  "CartesianCoordinate",
  "CartesianCoordinate",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y", "z"],
);

sl.copyTraitToType(
  "Object",
  "CartesianCoordinate",
);

sl.copyTraitToType(
  "Magnitude",
  "CartesianCoordinate",
);

sl.copyTraitToType(
  "Indexable",
  "CartesianCoordinate",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return _equalBy_3(_self, _anObject, _equals_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "asCartesianCoordinate",
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
  "CartesianCoordinate",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _minusGreaterThan_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _x_1(_self);
      }),
      _minusGreaterThan_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _y_1(_self);
      }),
      _minusGreaterThan_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _z_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "CartesianCoordinate>>at: index out of range");
    });
  },
  "{ :self :index |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x },\n\t\t\t2 -> { self.y },\n\t\t\t3 -> { self.z }\n\t\t]) {\n\t\t\tself.error('CartesianCoordinate>>at: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _minusGreaterThan_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _x_2(_self, _value);
      }),
      _minusGreaterThan_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _y_2(_self, _value);
      }),
      _minusGreaterThan_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _z_2(_self, _value);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "CartesianCoordinate>>atPut: index out of range");
    });
  },
  "{ :self :index :value |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x := value },\n\t\t\t2 -> { self.y := value },\n\t\t\t3 -> { self.z := value }\n\t\t]) {\n\t\t\tself.error('CartesianCoordinate>>atPut: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return [_x_1(_self), _y_1(_self), _z_1(_self)];
  },
  "{ :self |\n\t\t[self.x, self.y, self.z]\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return Object.fromEntries([["x", _x_1(_self)], ["y", _y_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(x: self.x, y: self.y, z: self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return _Tuple_3(_x_1(_self), _y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\t(self.x, self.y, self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return _and_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_aBlock_2(_y_1(_self), _y_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_z_1(_self), _z_1(_anObject));
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\taBlock(self.x, anObject.x) & {\n\t\t\taBlock(self.y, anObject.y) & {\n\t\t\t\taBlock(self.z, anObject.z)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "distance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plus_2(
        _plus_2(
          _squared_1(_minus_2(_x_1(_other), _x_1(_self))),
          _squared_1(_minus_2(_y_1(_other), _y_1(_self))),
        ),
        _squared_1(_minus_2(_z_1(_other), _z_1(_self))),
      ),
    );
  },
  "{ :self :other |\n\t\t(\n\t\t\t(other.x - self.x).squared +\n\t\t\t(other.y - self.y).squared +\n\t\t\t(other.z - self.z).squared\n\t\t).sqrt\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "dotProduct",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _plus_2(
      _plus_2(
        _times_2(_x_1(_self), _x_1(_anObject)),
        _times_2(_y_1(_self), _y_1(_anObject)),
      ),
      _times_2(_z_1(_self), _z_1(_anObject)),
    );
  },
  "{ :self :anObject |\n\t\t(self.x * anObject.x) + (self.y * anObject.y) + (self.z * anObject.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _and_2(_isCartesianCoordinate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _and_2(_aBlock_2(_y_1(_self), _y_1(_anObject)), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _aBlock_2(_z_1(_self), _z_1(_anObject));
        });
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isCartesianCoordinate & {\n\t\t\taBlock(self.x, anObject.x) & {\n\t\t\t\taBlock(self.y, anObject.y) & {\n\t\t\t\t\taBlock(self.z, anObject.z)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _x_1(_self);
  },
  "{ :self |\n\t\tself.x\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "isCartesianCoordinate",
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
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return _and_2(_isZero_1(_x_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _and_2(_isZero_1(_y_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw Error(errorMessage);
        }
        /* Statements */
        return _isZero_1(_z_1(_self));
      });
    });
  },
  "{ :self |\n\t\tself.x.isZero & {\n\t\t\tself.y.isZero & {\n\t\t\t\tself.z.isZero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _y_1(_self);
  },
  "{ :self |\n\t\tself.y\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "third",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _z_1(_self);
  },
  "{ :self |\n\t\tself.z\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
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
  "CartesianCoordinate",
  "CartesianCoordinate",
  "xz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_x_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tRectangularCoordinate(self.x, self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinate",
  "CartesianCoordinate",
  "yz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tRectangularCoordinate(self.y, self.z)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "CartesianCoordinate",
  "CartesianCoordinate",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newCartesianCoordinate_0(), _x, _y, _z);
  },
  "{ :x :y :z |\n\t\tnewCartesianCoordinate().initializeSlots(x, y, z)\n\t}",
);

sl.addMethod(
  "Array",
  "CartesianCoordinate",
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
    let __genSym1 = _assertIsOfSize_2(_self, 3),
      _x = _at_2(__genSym1, 1),
      _y = _at_2(__genSym1, 2),
      _z = _at_2(__genSym1, 3);
    /* Statements */
    return _CartesianCoordinate_3(_x, _y, _z);
  },
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tCartesianCoordinate(x, y, z)\n\t}",
);

sl.addMethod(
  "Record",
  "CartesianCoordinate",
  "asCartesianCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinate_3(
      _at_2(_self, "x"),
      _at_2(_self, "y"),
      _at_2(_self, "z"),
    );
  },
  "{ :self |\n\t\tCartesianCoordinate(self::x, self::y, self::z)\n\t}",
);

sl.addMethod(
  "ThreeTuple",
  "CartesianCoordinate",
  "asCartesianCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinate_3(
      _first_1(_self),
      _second_1(_self),
      _third_1(_self),
    );
  },
  "{ :self |\n\t\tCartesianCoordinate(self.first, self.second, self.third)\n\t}",
);
