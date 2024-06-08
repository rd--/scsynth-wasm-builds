sl.addType(
  false,
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y", "z"],
);

sl.copyTraitToType(
  "Object",
  "CartesianCoordinates",
);

sl.copyTraitToType(
  "Magnitude",
  "CartesianCoordinates",
);

sl.copyTraitToType(
  "Indexable",
  "CartesianCoordinates",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "asCartesianCoordinates",
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
  "CartesianCoordinates",
  "CartesianCoordinates",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _x_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _y_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _z_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "CartesianCoordinate>>at: index out of range");
    });
  },
  "{ :self :index |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x },\n\t\t\t2 -> { self.y },\n\t\t\t3 -> { self.z }\n\t\t]) {\n\t\t\tself.error('CartesianCoordinate>>at: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _x_2(_self, _value);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _y_2(_self, _value);
      }),
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _z_2(_self, _value);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "CartesianCoordinate>>atPut: index out of range");
    });
  },
  "{ :self :index :value |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x := value },\n\t\t\t2 -> { self.y := value },\n\t\t\t3 -> { self.z := value }\n\t\t]) {\n\t\t\tself.error('CartesianCoordinate>>atPut: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return [_x_1(_self), _y_1(_self), _z_1(_self)];
  },
  "{ :self |\n\t\t[self.x, self.y, self.z]\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return Object.fromEntries([["x", _x_1(_self)], ["y", _y_1(_self)], [
      "z",
      _z_1(_self),
    ]]);
  },
  "{ :self |\n\t\t(x: self.x, y: self.y, z: self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return _asTuple_1([_x_1(_self), _y_1(_self), _z_1(_self)]);
  },
  "{ :self |\n\t\t(self.x, self.y, self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
    return _ampersand_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_aBlock_2(_y_1(_self), _y_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_z_1(_self), _z_1(_anObject));
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\taBlock(self.x, anObject.x) & {\n\t\t\taBlock(self.y, anObject.y) & {\n\t\t\t\taBlock(self.z, anObject.z)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "cross",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinates_3(
      _hyphenMinus_2(
        _asterisk_2(_y_1(_u), _z_1(_v)),
        _asterisk_2(_z_1(_u), _y_1(_v)),
      ),
      _hyphenMinus_2(
        _asterisk_2(_z_1(_u), _x_1(_v)),
        _asterisk_2(_x_1(_u), _z_1(_v)),
      ),
      _hyphenMinus_2(
        _asterisk_2(_x_1(_u), _y_1(_v)),
        _asterisk_2(_y_1(_u), _x_1(_v)),
      ),
    );
  },
  "{ :u :v |\n\t\tCartesianCoordinates(\n\t\t\t(u.y * v.z) - (u.z * v.y),\n\t\t\t(u.z * v.x) - (u.x * v.z),\n\t\t\t(u.x * v.y) - (u.y * v.x)\n\t\t)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "distance",
  ["self", "other"],
  function (_self, _other) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _other";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plusSign_2(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x_1(_other), _x_1(_self))),
          _squared_1(_hyphenMinus_2(_y_1(_other), _y_1(_self))),
        ),
        _squared_1(_hyphenMinus_2(_z_1(_other), _z_1(_self))),
      ),
    );
  },
  "{ :self :other |\n\t\t(\n\t\t\t(other.x - self.x).squared +\n\t\t\t(other.y - self.y).squared +\n\t\t\t(other.z - self.z).squared\n\t\t).sqrt\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "dotProduct",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _asterisk_2(_x_1(_self), _x_1(_anObject)),
        _asterisk_2(_y_1(_self), _y_1(_anObject)),
      ),
      _asterisk_2(_z_1(_self), _z_1(_anObject)),
    );
  },
  "{ :self :anObject |\n\t\t(self.x * anObject.x) + (self.y * anObject.y) + (self.z * anObject.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isCartesianCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _ampersand_2(
          _aBlock_2(_y_1(_self), _y_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _aBlock_2(_z_1(_self), _z_1(_anObject));
          },
        );
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isCartesianCoordinates & {\n\t\t\taBlock(self.x, anObject.x) & {\n\t\t\t\taBlock(self.y, anObject.y) & {\n\t\t\t\t\taBlock(self.z, anObject.z)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _x_1(_self);
  },
  "{ :self |\n\t\tself.x\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "isCartesianCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isZero_1(_x_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_isZero_1(_y_1(_self)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _isZero_1(_z_1(_self));
      });
    });
  },
  "{ :self |\n\t\tself.x.isZero & {\n\t\t\tself.y.isZero & {\n\t\t\t\tself.z.isZero\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _y_1(_self);
  },
  "{ :self |\n\t\tself.y\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
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
      "CartesianCoordinates(",
      _storeString_1(_x_1(_self)),
      ", ",
      _storeString_1(_y_1(_self)),
      ", ",
      _storeString_1(_z_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'CartesianCoordinates(',\n\t\t\tself.x.storeString,\n\t\t\t', ',\n\t\t\tself.y.storeString,\n\t\t\t', ',\n\t\t\tself.z.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "third",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _z_1(_self);
  },
  "{ :self |\n\t\tself.z\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "xy",
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
  "CartesianCoordinates",
  "CartesianCoordinates",
  "xz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PlanarCoordinates_2(_x_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tPlanarCoordinates(self.x, self.z)\n\t}",
);

sl.addMethod(
  "CartesianCoordinates",
  "CartesianCoordinates",
  "yz",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PlanarCoordinates_2(_y_1(_self), _z_1(_self));
  },
  "{ :self |\n\t\tPlanarCoordinates(self.y, self.z)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "CartesianCoordinates",
  "CartesianCoordinates",
  ["x", "y", "z"],
  function (_x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _z";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_4(_newCartesianCoordinates_0(), _x, _y, _z);
  },
  "{ :x :y :z |\n\t\tnewCartesianCoordinates().initializeSlots(x, y, z)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "CartesianCoordinates",
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
    let __genSym9 = _assertIsOfSize_2(_self, 3),
      _x = _at_2(__genSym9, 1),
      _y = _at_2(__genSym9, 2),
      _z = _at_2(__genSym9, 3);
    /* Statements */
    return _CartesianCoordinates_3(_x, _y, _z);
  },
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tCartesianCoordinates(x, y, z)\n\t}",
);

sl.addMethod(
  "Record",
  "CartesianCoordinates",
  "asCartesianCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _CartesianCoordinates_3(
      _at_2(_self, "x"),
      _at_2(_self, "y"),
      _at_2(_self, "z"),
    );
  },
  "{ :self |\n\t\tCartesianCoordinates(self::x, self::y, self::z)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "CartesianCoordinates",
  "linePlaneIntersection",
  ["p0", "n", "l0", "l"],
  function (_p0, _n, _l0, _l) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _p0, _n, _l0, _l";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _ln = _dot_2(_l, _n);
    /* Statements */
    return _if_3(_isVeryCloseTo_2(_ln, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return null;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _d = _solidus_2(_dot_2(_hyphenMinus_2(_p0, _l0), _n), _ln);
      /* Statements */
      return _plusSign_2(_l0, _asterisk_2(_l, _d));
    });
  },
  "{ :p0 :n :l0 :l |\n\t\tlet ln = l.dot(n);\n\t\tln.isVeryCloseTo(0).if {\n\t\t\tnil\n\t\t} {\n\t\t\tlet d = (p0 - l0).dot(n) / ln;\n\t\t\tl0 + (l * d)\n\t\t}\n\t}",
);
