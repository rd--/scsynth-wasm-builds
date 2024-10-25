sl.addType(
  false,
  "Point",
  "Point",
  ["Object"],
  ["vector"],
);

sl.copyTraitToType(
  "Object",
  "Point",
);

sl.addMethod(
  "Point",
  "Point",
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
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
    return _vector_1(_self);
  },
  "{ :self |\n\t\tself.vector\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
    return _at_2(_vector_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.vector[index]\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
  "Point",
  "Point",
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
    return _size_1(_vector_1(_self));
  },
  "{ :self |\n\t\tself.vector.size\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
  "midpoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Point_1(_midpoint_2(_vector_1(_self), _vector_1(_aPoint)));
  },
  "{ :self :aPoint |\n\t\tPoint(self.vector.midpoint(aPoint.vector))\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
    return _size_1(_vector_1(_self));
  },
  "{ :self |\n\t\tself.vector.size\n\t}",
);

sl.addMethod(
  "Point",
  "Point",
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
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "InfiniteLine",
  "Point",
  ["Object"],
  ["point", "vector"],
);

sl.copyTraitToType(
  "Object",
  "InfiniteLine",
);

sl.addMethod(
  "InfiniteLine",
  "Point",
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
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "InfiniteLine",
  "Point",
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
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "InfiniteLine",
  "Point",
  "includes",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  },
  "{ :self :aPoint |\n\t}",
);

sl.addMethod(
  "InfiniteLine",
  "Point",
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
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "LineSegment",
  "Point",
  ["Object"],
  ["u", "v"],
);

sl.copyTraitToType(
  "Object",
  "LineSegment",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _euclideanDistance_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.euclideanDistance(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
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
    return _caseOf_2(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _u_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _v_1(_self);
      }),
    ]);
  },
  "{ :self :index |\n\t\tindex.caseOf([\n\t\t\t1 -> { self.u },\n\t\t\t2 -> { self.v }\n\t\t])\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midpoint_1(_self);
  },
  "{ :self |\n\t\tself.midpoint\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "dimensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "distance",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _pointLineDistance_2([_u_1(_self), _v_1(_self)], _aPoint);
  },
  "{ :self :aPoint |\n\t\t[self.u, self.v].pointLineDistance(aPoint)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
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
    return _size_1(_u_1(_self));
  },
  "{ :self |\n\t\tself.u.size\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "includes",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isVeryCloseTo_2(_distance_2(_self, _aPoint), 0);
  },
  "{ :self :aPoint |\n\t\tself.distance(aPoint).isVeryCloseTo(0)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _midpoint_2(_u_1(_self), _v_1(_self));
  },
  "{ :self |\n\t\tself.u.midpoint(self.v)\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
  "nearestPoint",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  },
  "{ :self :aPoint |\n\t}",
);

sl.addMethod(
  "LineSegment",
  "Point",
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
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addType(
  false,
  "Line",
  "Point",
  ["Object"],
  ["matrix"],
);

sl.copyTraitToType(
  "Object",
  "Line",
);

sl.addMethod(
  "Line",
  "Point",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = 0;
    /* Statements */
    _adjacentPairsDo_2(_matrix_1(_self), function (_u, _v) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _u, _v";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _answer = _plusSign_2(_answer, _euclideanDistance_2(_u, _v));
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = 0;\n\t\tself.matrix.adjacentPairsDo { :u :v |\n\t\t\tanswer := answer + u.euclideanDistance(v)\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Line",
  "Point",
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
    return _at_2(_matrix_1(_self), _index);
  },
  "{ :self :index |\n\t\tself.matrix[index]\n\t}",
);

sl.addMethod(
  "Line",
  "Point",
  "dimensions",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "Line",
  "Point",
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
    return _size_1(_first_1(_matrix_1(_self)));
  },
  "{ :self |\n\t\tself.matrix.first.size\n\t}",
);

sl.addMethod(
  "Line",
  "Point",
  "midpoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p = _matrix_1(_self);
    let _l = _arcLength_1(_self);
    let _h = _solidus_2(_l, 2);
    let _i = 1;
    let _c1 = 0;
    let _c2 = _c1;
    let __genSym36 = _whileTrue_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _lessThanSign_2(_c2, _h);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      _c1 = _c2;
      _c2 = _plusSign_2(
        _c1,
        _euclideanDistance_2(_at_2(_p, _i), _at_2(_p, _plusSign_2(_i, 1))),
      );
      return _i = _plusSign_2(_i, 1);
    });
    let _d = _hyphenMinus_2(_h, _c1);
    let _v = _hyphenMinus_2(_at_2(_p, _i), _at_2(_p, _hyphenMinus_2(_i, 1)));
    /* Statements */
    return _plusSign_2(
      _at_2(_p, _hyphenMinus_2(_i, 1)),
      _asterisk_2(_normalize_1(_v), _d),
    );
  },
  "{ :self |\n\t\tlet p = self.matrix;\n\t\tlet l = self.arcLength;\n\t\tlet h = l / 2;\n\t\tlet i = 1;\n\t\tlet c1 = 0;\n\t\tlet c2 = c1;\n\t\tlet _ = {\n\t\t\tc2 < h\n\t\t}.whileTrue {\n\t\t\tc1 := c2;\n\t\t\tc2 := c1 + p[i].euclideanDistance(p[i + 1]);\n\t\t\ti := i + 1\n\t\t};\n\t\tlet d = h - c1;\n\t\tlet v = p[i] - p[i - 1];\n\t\tp[i - 1] + (v.normalize * d)\n\t}",
);

sl.addMethod(
  "Line",
  "Point",
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
    return _size_1(_matrix_1(_self));
  },
  "{ :self |\n\t\tself.matrix.size\n\t}",
);

sl.addType(
  false,
  "Triangle",
  "Point",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitToType(
  "Object",
  "Triangle",
);

sl.addMethod(
  "Triangle",
  "Point",
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
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
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
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonArcLength_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonArcLength\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _shoelaceFormula_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.shoelaceFormula\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonCentroid_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonCentroid\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
  "interiorAngles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonInteriorAngles_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonInteriorAngles\n\t}",
);

sl.addMethod(
  "Triangle",
  "Point",
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
  "Triangle",
  "Point",
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
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addType(
  false,
  "Polygon",
  "Point",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitToType(
  "Object",
  "Polygon",
);

sl.addMethod(
  "Polygon",
  "Point",
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
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
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
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonArcLength_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonArcLength\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _shoelaceFormula_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.shoelaceFormula\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_self);
    /* Statements */
    return _if_3(_equalsSign_2(_index, _plusSign_2(_n, 1)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_coordinates_1(_self), 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_coordinates_1(_self), _index);
    });
  },
  "{ :self :index |\n\t\tlet n = self.size;\n\t\t(index = (n + 1)).if {\n\t\t\tself.coordinates[1]\n\t\t} {\n\t\t\tself.coordinates[index]\n\t\t}\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonCentroid_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonCentroid\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
  "interiorAngles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _polygonInteriorAngles_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.polygonInteriorAngles\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
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
    return _size_1(_coordinates_1(_self));
  },
  "{ :self |\n\t\tself.coordinates.size\n\t}",
);

sl.addMethod(
  "Polygon",
  "Point",
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
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "anglePath",
  ["angles", "distances", "origin"],
  function (_angles, _distances, _origin) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _angles, _distances, _origin";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _answer = [_origin];
    let _theta = 0;
    let _p = _origin;
    /* Statements */
    _withIndexDo_2(_angles, function (_each, _index) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _each, _index";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _r = _atWrap_2(_distances, _index);
      /* Statements */
      _theta = _percentSign_2(_plusSign_2(_theta, _each), _pi_1(2));
      _p = _plusSign_2(_p, _asterisk_2(_angleVector_1(_theta), _r));
      return _add_2(_answer, _p);
    });
    return _answer;
  },
  "{ :angles :distances :origin |\n\t\tlet answer = [origin];\n\t\tlet theta = 0;\n\t\tlet p = origin;\n\t\tangles.withIndexDo { :each :index |\n\t\t\tlet r = distances.atWrap(index);\n\t\t\ttheta := (theta + each) % 2.pi;\n\t\t\tp := p + (theta.angleVector * r);\n\t\t\tanswer.add(p)\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "anglePath",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _anglePath_3(_self, [1], [0, 0]);
  },
  "{ :self |\n\t\tself.anglePath([1], [0 0])\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "InfiniteLine",
  ["aPoint", "aVector"],
  function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newInfiniteLine_0(), _aPoint, _aVector);
  },
  "{ :aPoint :aVector |\n\t\tnewInfiniteLine().initializeSlots(aPoint, aVector)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "Line",
  ["aMatrix"],
  function (_aMatrix) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _aMatrix";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newLine_0(), _aMatrix);
  },
  "{ :aMatrix |\n\t\tnewLine().initializeSlots(aMatrix)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "LineSegment",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newLineSegment_0(), _u, _v);
  },
  "{ :u :v |\n\t\tnewLineSegment().initializeSlots(u, v)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "lineEquation",
  ["p1", "p2"],
  function (_p1, _p2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p1, _p2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym37 = _assertIsOfSize_2(_p1, 2),
      _x1 = _at_2(__genSym37, 1),
      _y1 = _at_2(__genSym37, 2);
    let __genSym38 = _assertIsOfSize_2(_p2, 2),
      _x2 = _at_2(__genSym38, 1),
      _y2 = _at_2(__genSym38, 2);
    let _a = _hyphenMinus_2(_y2, _y1);
    let _b = _hyphenMinus_2(_x1, _x2);
    let _c = _hyphenMinus_2(
      _asterisk_2(_y1, _hyphenMinus_2(_x2, _x1)),
      _asterisk_2(_x1, _hyphenMinus_2(_y2, _y1)),
    );
    /* Statements */
    return [_a, _b, _c];
  },
  "{ :p1 :p2 |\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet a = y2 - y1;\n\t\tlet b = x1 - x2;\n\t\tlet c = (y1 * (x2 - x1)) - (x1 * (y2 - y1));\n\t\t[a, b, c]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "lineLineIntersection",
  ["l1", "l2"],
  function (_l1, _l2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l1, _l2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym39 = _assertIsOfSize_2(_l1, 2),
      _p1 = _at_2(__genSym39, 1),
      _p2 = _at_2(__genSym39, 2);
    let __genSym40 = _assertIsOfSize_2(_l2, 2),
      _p3 = _at_2(__genSym40, 1),
      _p4 = _at_2(__genSym40, 2);
    let __genSym41 = _assertIsOfSize_2(_p1, 2),
      _x1 = _at_2(__genSym41, 1),
      _y1 = _at_2(__genSym41, 2);
    let __genSym42 = _assertIsOfSize_2(_p2, 2),
      _x2 = _at_2(__genSym42, 1),
      _y2 = _at_2(__genSym42, 2);
    let __genSym43 = _assertIsOfSize_2(_p3, 2),
      _x3 = _at_2(__genSym43, 1),
      _y3 = _at_2(__genSym43, 2);
    let __genSym44 = _assertIsOfSize_2(_p4, 2),
      _x4 = _at_2(__genSym44, 1),
      _y4 = _at_2(__genSym44, 2);
    let _a1 = _hyphenMinus_2(_y2, _y1);
    let _b1 = _hyphenMinus_2(_x1, _x2);
    let _c1 = _plusSign_2(_asterisk_2(_a1, _x1), _asterisk_2(_b1, _y1));
    let _a2 = _hyphenMinus_2(_y4, _y3);
    let _b2 = _hyphenMinus_2(_x3, _x4);
    let _c2 = _plusSign_2(_asterisk_2(_a2, _x3), _asterisk_2(_b2, _y3));
    let _delta = _hyphenMinus_2(_asterisk_2(_a1, _b2), _asterisk_2(_a2, _b1));
    /* Statements */
    return [
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_b2, _c1), _asterisk_2(_b1, _c2)),
        _delta,
      ),
      _solidus_2(
        _hyphenMinus_2(_asterisk_2(_a1, _c2), _asterisk_2(_a2, _c1)),
        _delta,
      ),
    ];
  },
  "{ :l1 :l2 |\n\t\tlet [p1, p2] = l1;\n\t\tlet [p3, p4] = l2;\n\t\tlet [x1, y1] = p1;\n\t\tlet [x2, y2] = p2;\n\t\tlet [x3, y3] = p3;\n\t\tlet [x4, y4] = p4;\n\t\tlet a1 = y2 - y1;\n\t\tlet b1 = x1 - x2;\n\t\tlet c1 = (a1 * x1) + (b1 * y1);\n\t\tlet a2 = y4 - y3;\n\t\tlet b2 = x3 - x4;\n\t\tlet c2 = (a2 * x3) + (b2 * y3);\n\t\tlet delta = (a1 * b2) - (a2 * b1);\n\t\t[\n\t\t\t((b2 * c1) - (b1 * c2)) / delta,\n\t\t\t((a1 * c2) - (a2 * c1)) / delta\n\t\t]\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "midpoint",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_u, _solidus_2(_hyphenMinus_2(_v, _u), 2));
  },
  "{ :u :v |\n\t\tu + ((v - u) / 2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "perpendicularBisector",
  ["u", "v"],
  function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _rotationMatrix_1(_solidus_2(_pi, 2));
    /* Statements */
    return _InfiniteLine_2(
      _midpoint_2(_u, _v),
      _dot_2(_hyphenMinus_2(_v, _u), _m),
    );
  },
  "{ :u :v |\n\t\tlet m = (pi / 2).rotationMatrix;\n\t\tInfiniteLine(\n\t\t\tu.midpoint(v),\n\t\t\t(v - u).dot(m)\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "planarAngle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym45 = _assertIsOfSize_2(_self, 3),
      _q1 = _at_2(__genSym45, 1),
      _p = _at_2(__genSym45, 2),
      _q2 = _at_2(__genSym45, 3);
    let __genSym46 = _assertIsOfSize_2(_q1, 2),
      _x1 = _at_2(__genSym46, 1),
      _y1 = _at_2(__genSym46, 2);
    let __genSym47 = _assertIsOfSize_2(_p, 2),
      _x0 = _at_2(__genSym47, 1),
      _y0 = _at_2(__genSym47, 2);
    let __genSym48 = _assertIsOfSize_2(_q2, 2),
      _x2 = _at_2(__genSym48, 1),
      _y2 = _at_2(__genSym48, 2);
    let _n = _plusSign_2(
      _asterisk_2(_hyphenMinus_2(_x1, _x0), _hyphenMinus_2(_x2, _x0)),
      _asterisk_2(_hyphenMinus_2(_y1, _y0), _hyphenMinus_2(_y2, _y0)),
    );
    let _d = _asterisk_2(
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x1, _x0)),
          _squared_1(_hyphenMinus_2(_y1, _y0)),
        ),
      ),
      _sqrt_1(
        _plusSign_2(
          _squared_1(_hyphenMinus_2(_x2, _x0)),
          _squared_1(_hyphenMinus_2(_y2, _y0)),
        ),
      ),
    );
    /* Statements */
    return _arcCos_1(_solidus_2(_n, _d));
  },
  "{ :self |\n\t\tlet [q1, p, q2] = self;\n\t\tlet [x1, y1] = q1;\n\t\tlet [x0, y0] = p;\n\t\tlet [x2, y2] = q2;\n\t\tlet n = ((x1 - x0) * (x2 - x0)) + ((y1 - y0) * (y2 - y0));\n\t\tlet d = ((x1 - x0).squared + (y1 - y0).squared).sqrt * ((x2 - x0).squared + (y2 - y0).squared).sqrt;\n\t\t(n / d).arcCos\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "Point",
  ["vector"],
  function (_vector) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _vector";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newPoint_0(), _vector);
  },
  "{ :vector |\n\t\tnewPoint().initializeSlots(vector)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "pointLineDistance",
  ["aLine", "aPoint"],
  function (_aLine, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aLine, _aPoint";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym49 = _assertIsOfSize_2(_aLine, 2),
      _p1 = _at_2(__genSym49, 1),
      _p2 = _at_2(__genSym49, 2);
    let _p0 = _aPoint;
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_p0), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _abs_1(_asterisk_2(2, _shoelaceFormula_1([_p0, _p1, _p2]))),
        _abs_1(_euclideanDistance_2(_p1, _p2)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _solidus_2(
        _norm_1(_cross_2(_hyphenMinus_2(_p0, _p1), _hyphenMinus_2(_p0, _p2))),
        _norm_1(_hyphenMinus_2(_p2, _p1)),
      );
    });
  },
  "{ :aLine :aPoint |\n\t\tlet [p1, p2] = aLine;\n\t\tlet p0 = aPoint;\n\t\t(p0.size = 2).if {\n\t\t\t(2 * [p0, p1, p2].shoelaceFormula).abs / p1.euclideanDistance(p2).abs\n\t\t} {\n\t\t\t(p0 - p1).cross(p0 - p2).norm / (p2 - p1).norm\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "pointLineNearest",
  ["l", "p"],
  function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym50 = _assertIsOfSize_2(_l, 2),
      _a = _at_2(__genSym50, 1),
      _b = _at_2(__genSym50, 2);
    let _u = _hyphenMinus_2(_p, _a);
    let _v = _hyphenMinus_2(_b, _a);
    let _r = _projection_2(_u, _v);
    /* Statements */
    return _plusSign_2(_a, _r);
  },
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet u = p - a;\n\t\tlet v = b - a;\n\t\tlet r = projection(u, v);\n\t\ta + r\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "pointLineSegmentNearest",
  ["l", "p"],
  function (_l, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _l, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym51 = _assertIsOfSize_2(_l, 2),
      _a = _at_2(__genSym51, 1),
      _b = _at_2(__genSym51, 2);
    let _d = _euclideanDistance_2(_a, _b);
    /* Statements */
    return _if_3(_equalsSign_2(_d, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _a;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _u = _hyphenMinus_2(_p, _a);
      let _v = _hyphenMinus_2(_b, _a);
      let _r = _projection_2(_u, _v);
      let _t = _vectorAngle_2(_v, _r);
      /* Statements */
      return _if_3(_tilde_2(_t, _pi), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _a;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let _i = _plusSign_2(_a, _r);
        /* Statements */
        return _if_3(
          _greaterThanSign_2(_euclideanDistance_2(_a, _i), _d),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _b;
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _i;
          },
        );
      });
    });
  },
  "{ :l :p |\n\t\tlet [a, b] = l;\n\t\tlet d = a.euclideanDistance(b);\n\t\t(d = 0).if {\n\t\t\ta\n\t\t} {\n\t\t\tlet u = p - a;\n\t\t\tlet v = b - a;\n\t\t\tlet r = projection(u, v);\n\t\t\tlet t = v.vectorAngle(r);\n\t\t\t(t ~ pi).if {\n\t\t\t\ta\n\t\t\t} {\n\t\t\t\tlet i = a + r;\n\t\t\t\t(a.euclideanDistance(i) > d).if {\n\t\t\t\t\tb\n\t\t\t\t} {\n\t\t\t\t\ti\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "Polygon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newPolygon_0(), _self);
  },
  "{ :self |\n\t\tnewPolygon().initializeSlots(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "polygonArcLength",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _polylineArcLength_1(_p),
      _euclideanDistance_2(_last_1(_p), _first_1(_p)),
    );
  },
  "{ :p |\n\t\tp.polylineArcLength + p.last.euclideanDistance(p.first)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "polygonCentroid",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_p);
    let _m = _solidus_2(1, _asterisk_2(_shoelaceFormula_1(_p), 6));
    let _x = 0;
    let _y = 0;
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _j = _if_3(_equalsSign_2(_i, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_i, 1);
      });
      let _d = _hyphenMinus_2(
        _asterisk_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 2)),
        _asterisk_2(_at_2(_at_2(_p, _j), 1), _at_2(_at_2(_p, _i), 2)),
      );
      /* Statements */
      _x = _plusSign_2(
        _x,
        _asterisk_2(
          _plusSign_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 1)),
          _d,
        ),
      );
      return _y = _plusSign_2(
        _y,
        _asterisk_2(
          _plusSign_2(_at_2(_at_2(_p, _i), 2), _at_2(_at_2(_p, _j), 2)),
          _d,
        ),
      );
    });
    return _asterisk_2([_x, _y], _m);
  },
  "{ :p |\n\t\tlet n = p.size;\n\t\tlet m = 1 / (p.shoelaceFormula * 6);\n\t\tlet x = 0;\n\t\tlet y = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\tx := x + ((p[i][1] + p[j][1]) * d);\n\t\t\ty := y + ((p[i][2] + p[j][2]) * d)\n\t\t};\n\t\t[x y] * m\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "polygonInteriorAngles",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_p);
    let _a = [];
    /* Statements */
    _toDo_3(1, _n, function (_j) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _j";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _i = _wrapIndex_2(_hyphenMinus_2(_j, 1), _n);
      let _k = _wrapIndex_2(_plusSign_2(_j, 1), _n);
      let _r = _planarAngle_1(_commercialAtAsterisk_2(_p, [_i, _j, _k]));
      /* Statements */
      return _add_2(_a, _r);
    });
    return _a;
  },
  "{ :p |\n\t\tlet n = p.size;\n\t\tlet a = [];\n\t\t1.toDo(n) { :j |\n\t\t\tlet i = (j - 1).wrapIndex(n);\n\t\t\tlet k = (j + 1).wrapIndex(n);\n\t\t\tlet r = (p @* [i, j, k]).planarAngle;\n\t\t\ta.add(r)\n\t\t};\n\t\ta\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "polylineArcLength",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_adjacentPairsCollect_2(_p, _euclideanDistance_2));
  },
  "{ :p |\n\t\tp.adjacentPairsCollect(euclideanDistance:/2).sum\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "shoelaceFormula",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _size_1(_p);
    let _a = 0;
    /* Statements */
    _toDo_3(1, _n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _j = _if_3(_equalsSign_2(_i, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _plusSign_2(_i, 1);
      });
      let _d = _hyphenMinus_2(
        _asterisk_2(_at_2(_at_2(_p, _i), 1), _at_2(_at_2(_p, _j), 2)),
        _asterisk_2(_at_2(_at_2(_p, _j), 1), _at_2(_at_2(_p, _i), 2)),
      );
      /* Statements */
      return _a = _plusSign_2(_a, _d);
    });
    return _solidus_2(_a, 2);
  },
  "{ :p |\n\t\tlet n = p.size;\n\t\tlet a = 0;\n\t\t1.toDo(n) { :i |\n\t\t\tlet j = (i = n).if { 1 } { i + 1};\n\t\t\tlet d = (p[i][1] * p[j][2]) - (p[j][1] * p[i][2]);\n\t\t\ta := a + d\n\t\t};\n\t\ta / 2\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
  "Triangle",
  ["p1", "p2", "p3"],
  function (_p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p1, _p2, _p3";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_2(_newTriangle_0(), [_p1, _p2, _p3]);
  },
  "{ :p1 :p2 :p3 |\n\t\tnewTriangle().initializeSlots([p1, p2, p3])\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
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
    return _if_3(_betweenAnd_3(_size_1(_self), 2, 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, 1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>x: not two- three-vector");
    });
  },
  "{ :self |\n\t\tself.size.betweenAnd(2, 3).if {\n\t\t\tself[1]\n\t\t} {\n\t\t\tself.error('@Sequence>>x: not two- three-vector')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
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
    return _if_3(_betweenAnd_3(_size_1(_self), 2, 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, 2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>y: not two- three-vector");
    });
  },
  "{ :self |\n\t\tself.size.betweenAnd(2, 3).if {\n\t\t\tself[2]\n\t\t} {\n\t\t\tself.error('@Sequence>>y: not two- three-vector')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Point",
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
    return _if_3(_equalsSign_2(_size_1(_self), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, 3);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Sequence>>z: not three-vector");
    });
  },
  "{ :self |\n\t\t(self.size = 3).if {\n\t\t\tself[3]\n\t\t} {\n\t\t\tself.error('@Sequence>>z: not three-vector')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Point",
  "asPoint",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_includesAllIndices_2(_self, ["x", "y", "z"]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _Point_1([
        _at_2(_self, "x"),
        _at_2(_self, "y"),
        _at_2(_self, "z"),
      ]);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_includesAllIndices_2(_self, ["x", "y"]), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _Point_1([_at_2(_self, "x"), _at_2(_self, "y")]);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Dictionary>>asPoint: invalid dictionary");
      });
    });
  },
  "{ :self |\n\t\tself.includesAllIndices(['x','y','z']).if {\n\t\t\tPoint([self::x, self::y, self::z])\n\t\t} {\n\t\t\tself.includesAllIndices(['x','y']).if {\n\t\t\t\tPoint([self::x, self::y])\n\t\t\t} {\n\t\t\t\tself.error('@Dictionary>>asPoint: invalid dictionary')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Point",
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
    return _if_3(_includesAllIndices_2(_self, ["x", "y"]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, "x");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>x: incorrect keys");
    });
  },
  "{ :self |\n\t\tself.includesAllIndices(['x' 'y']).if {\n\t\t\tself['x']\n\t\t} {\n\t\t\tself.error('@Dictionary>>x: incorrect keys')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Point",
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
    return _if_3(_includesAllIndices_2(_self, ["x", "y"]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, "y");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>y: incorrect keys");
    });
  },
  "{ :self |\n\t\tself.includesAllIndices(['x' 'y']).if {\n\t\t\tself['y']\n\t\t} {\n\t\t\tself.error('@Dictionary>>y: incorrect keys')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Dictionary",
  "Point",
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
    return _if_3(_includesAllIndices_2(_self, ["x", "y", "z"]), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _at_2(_self, "z");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "@Dictionary>>z: incorrect keys");
    });
  },
  "{ :self |\n\t\tself.includesAllIndices(['x' 'y' 'z']).if {\n\t\t\tself['z']\n\t\t} {\n\t\t\tself.error('@Dictionary>>z: incorrect keys')\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "aasTriangle",
  ["alpha", "beta", "a"],
  function (_alpha, _beta, _a) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _a";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x2 = _asterisk_2(
      _asterisk_2(_a, _cosecant_1(_alpha)),
      _sin_1(_plusSign_2(_alpha, _beta)),
    );
    let _x3 = _asterisk_2(_asterisk_2(_a, _cotangent_1(_alpha)), _sin_1(_beta));
    let _y3 = _asterisk_2(_a, _sin_1(_beta));
    /* Statements */
    return _Triangle_3([0, 0], [_x2, 0], [_x3, _y3]);
  },
  "{ :alpha :beta :a |\n\t\tlet x2 = a * alpha.cosecant * (alpha + beta).sin;\n\t\tlet x3 = a * alpha.cotangent * beta.sin;\n\t\tlet y3 = a * beta.sin;\n\t\tTriangle([0 0], [x2, 0], [x3, y3])\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "asaTriangle",
  ["alpha", "c", "beta"],
  function (_alpha, _c, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _c, _beta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x = _asterisk_2(
      _asterisk_2(_cos_1(_alpha), _cosecant_1(_plusSign_2(_alpha, _beta))),
      _sin_1(_beta),
    );
    let _y = _asterisk_2(
      _asterisk_2(_sin_1(_alpha), _cosecant_1(_plusSign_2(_alpha, _beta))),
      _sin_1(_beta),
    );
    /* Statements */
    return _Triangle_3([0, 0], [_c, 0], [
      _asterisk_2(_c, _x),
      _asterisk_2(_c, _y),
    ]);
  },
  "{ :alpha :c :beta |\n\t\tlet x = alpha.cos * (alpha + beta).cosecant * beta.sin;\n\t\tlet y = alpha.sin * (alpha + beta).cosecant * beta.sin;\n\t\tTriangle([0 0], [c 0], [c * x, c * y])\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "sasTriangle",
  ["a", "gamma", "b"],
  function (_a, _gamma, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _gamma, _b";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x = _sqrt_1(
      _hyphenMinus_2(
        _plusSign_2(_circumflexAccent_2(_a, 2), _circumflexAccent_2(_b, 2)),
        _asterisk_2(_asterisk_2(_asterisk_2(2, _a), _b), _cos_1(_gamma)),
      ),
    );
    let _y = _solidus_2(
      _hyphenMinus_2(
        _circumflexAccent_2(_b, 2),
        _asterisk_2(_asterisk_2(_a, _b), _cos_1(_gamma)),
      ),
      _x,
    );
    let _z = _solidus_2(_asterisk_2(_asterisk_2(_a, _b), _sin_1(_gamma)), _x);
    /* Statements */
    return _Triangle_3([0, 0], [_x, 0], [_y, _z]);
  },
  "{ :a :gamma :b |\n\t\tlet x = ((a ^ 2) + (b ^ 2) - (2 * a * b * gamma.cos)).sqrt;\n\t\tlet y = ((b ^ 2) - (a * b * gamma.cos)) / x;\n\t\tlet z = (a * b * gamma.sin) / x;\n\t\tTriangle([0 0], [x 0], [y z])\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Point",
  "sssTriangle",
  ["a", "b", "c"],
  function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _y = _solidus_2(
      _plusSign_2(
        _plusSign_2(
          _negated_1(_circumflexAccent_2(_a, 2)),
          _circumflexAccent_2(_b, 2),
        ),
        _circumflexAccent_2(_c, 2),
      ),
      _asterisk_2(2, _c),
    );
    let _z = _solidus_2(
      _sqrt_1(
        _asterisk_2(
          _asterisk_2(
            _asterisk_2(
              _hyphenMinus_2(_plusSign_2(_a, _b), _c),
              _plusSign_2(_hyphenMinus_2(_a, _b), _c),
            ),
            _plusSign_2(_plusSign_2(_negated_1(_a), _b), _c),
          ),
          _plusSign_2(_plusSign_2(_a, _b), _c),
        ),
      ),
      _asterisk_2(2, _c),
    );
    /* Statements */
    return _Triangle_3([0, 0], [_c, 0], [_y, _z]);
  },
  "{ :a :b :c |\n\t\tlet y = ((a ^ 2).negated + (b ^ 2) + (c ^ 2)) / (2 * c);\n\t\tlet z = ((a + b - c) * (a - b + c) * (a.negated + b + c) * (a + b + c)).sqrt / (2 * c);\n\t\tTriangle([0 0], [c 0], [y z])\n\t}",
);
