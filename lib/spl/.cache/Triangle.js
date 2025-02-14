/*  Requires: Polygon  */

sl.addType(
  false,
  "Triangle",
  "Triangle",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitToType(
  "Object",
  "Triangle",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlotsBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonArcLength_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonArcLength\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _shoelaceFormula_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.shoelaceFormula\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "asPolygon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_embeddingDimension_1(_self), 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Polygon_1(_vertexCoordinates_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asPolygon: embeddingDimension not two");
    });
  },
  "{ :self |\n\t\t(self.embeddingDimension = 2).if {\n\t\t\tself.vertexCoordinates.Polygon\n\t\t} {\n\t\t\tself.error('asPolygon: embeddingDimension not two')\n\t\t}\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "asPolyhedron",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_embeddingDimension_1(_self), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _Polyhedron_1(_vertexCoordinates_1(_self));
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "asPolyhedron: embeddingDimension not three");
    });
  },
  "{ :self |\n\t\t(self.embeddingDimension = 3).if {\n\t\t\tself.vertexCoordinates.Polyhedron\n\t\t} {\n\t\t\tself.error('asPolyhedron: embeddingDimension not three')\n\t\t}\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonCentroid_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonCentroid\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "circumcircle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumcircle_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.circumcircle\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  },
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "faceCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "faceIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [_asList_1(_upOrDownTo_2(1, 3))];
  },
  "{ :self |\n\t\t[[1 .. 3]]\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _forSvg_2(_asPolygon_1(_self), _options);
  },
  "{ :self :options |\n\t\tself.asPolygon.forSvg(options)\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "interiorAngles",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonInteriorAngles_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.polygonInteriorAngles\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "surfaceNormal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym92 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3),
      _p1 = _at_2(__genSym92, 1),
      _p2 = _at_2(__genSym92, 2),
      _p3 = _at_2(__genSym92, 3);
    let _u = _hyphenMinus_2(_p2, _p1);
    let _v = _hyphenMinus_2(_p3, _p1);
    /* Statements */
    return _cross_2(_u, _v);
  },
  "{ :self |\n\t\tlet [p1, p2, p3] = self.vertexCoordinates;\n\t\tlet u = p2 - p1;\n\t\tlet v = p3 - p1;\n\t\tu.cross(v)\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "unitNormal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _normalize_1(_surfaceNormal_1(_self));
  },
  "{ :self |\n\t\tself.surfaceNormal.normalize\n\t}",
);

sl.addMethod(
  "List",
  "Triangle",
  "asTriangle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym93 = _assertIsOfSize_2(_self, 3),
      _a = _at_2(__genSym93, 1),
      _b = _at_2(__genSym93, 2),
      _c = _at_2(__genSym93, 3);
    /* Statements */
    return _Triangle_3(_a, _b, _c);
  },
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\tTriangle(a, b, c)\n\t}",
);

sl.addMethod(
  "List",
  "Triangle",
  "circumcircle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym94 = _assertIsOfSize_2(_self, 3),
      _a = _at_2(__genSym94, 1),
      _b = _at_2(__genSym94, 2),
      _c = _at_2(__genSym94, 3);
    let __genSym95 = _assertIsOfSize_2(_a, 2),
      _ax = _at_2(__genSym95, 1),
      _ay = _at_2(__genSym95, 2);
    let __genSym96 = _assertIsOfSize_2(_b, 2),
      _bx = _at_2(__genSym96, 1),
      _by = _at_2(__genSym96, 2);
    let __genSym97 = _assertIsOfSize_2(_c, 2),
      _cx = _at_2(__genSym97, 1),
      _cy = _at_2(__genSym97, 2);
    let _ad = _plusSign_2(_asterisk_2(_ax, _ax), _asterisk_2(_ay, _ay));
    let _bd = _plusSign_2(_asterisk_2(_bx, _bx), _asterisk_2(_by, _by));
    let _cd = _plusSign_2(_asterisk_2(_cx, _cx), _asterisk_2(_cy, _cy));
    let _d = _asterisk_2(
      2,
      _plusSign_2(
        _plusSign_2(
          _asterisk_2(_ax, _hyphenMinus_2(_by, _cy)),
          _asterisk_2(_bx, _hyphenMinus_2(_cy, _ay)),
        ),
        _asterisk_2(_cx, _hyphenMinus_2(_ay, _by)),
      ),
    );
    let _center = [
      _asterisk_2(
        _solidus_2(1, _d),
        _plusSign_2(
          _plusSign_2(
            _asterisk_2(_ad, _hyphenMinus_2(_by, _cy)),
            _asterisk_2(_bd, _hyphenMinus_2(_cy, _ay)),
          ),
          _asterisk_2(_cd, _hyphenMinus_2(_ay, _by)),
        ),
      ),
      _asterisk_2(
        _solidus_2(1, _d),
        _plusSign_2(
          _plusSign_2(
            _asterisk_2(_ad, _hyphenMinus_2(_cx, _bx)),
            _asterisk_2(_bd, _hyphenMinus_2(_ax, _cx)),
          ),
          _asterisk_2(_cd, _hyphenMinus_2(_bx, _ax)),
        ),
      ),
    ];
    let _radius = _euclideanDistance_2(_center, _anyOne_1(_self));
    /* Statements */
    return _Circle_2(_center, _radius);
  },
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\tlet [ax, ay] = a;\n\t\tlet [bx, by] = b;\n\t\tlet [cx, cy] = c;\n\t\tlet ad = (ax * ax) + (ay * ay);\n\t\tlet bd = (bx * bx) + (by * by);\n\t\tlet cd = (cx * cx) + (cy * cy);\n\t\tlet d = 2 * ((ax * (by - cy)) + (bx * (cy - ay)) + (cx * (ay - by)));\n\t\tlet center = [\n\t\t\t1 / d * ((ad * (by - cy)) + (bd * (cy - ay)) + (cd * (ay - by))),\n\t\t\t1 / d * ((ad * (cx - bx)) + (bd * (ax - cx)) + (cd * (bx - ax)))\n\t\t];\n\t\tlet radius = center.euclideanDistance(self.anyOne);\n\t\tCircle(center, radius)\n\t}",
);

sl.addMethod(
  "List",
  "Triangle",
  "equilateralTriangle",
  ["center", "radius", "angle"],
  function (_center, _radius, _angle) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radius, _angle";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _center,
        _fromPolarCoordinates_1([
          _radius,
          _plusSign_2(_angle, _solidus_2(_asterisk_2(_pi_1(2), _n), 3)),
        ]),
      );
    };
    /* Statements */
    return _Triangle_3(_f_1(0), _f_1(1), _f_1(2));
  },
  "{ :center :radius :angle |\n\t\tlet f = { :n |\n\t\t\tcenter + [\n\t\t\t\tradius,\n\t\t\t\tangle + (2.pi * n / 3)\n\t\t\t].fromPolarCoordinates\n\t\t};\n\t\tTriangle(0.f, 1.f, 2.f)\n\t}",
);

sl.addMethod(
  "List",
  "Triangle",
  "Triangle",
  ["p1", "p2", "p3"],
  function (_p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p1, _p2, _p3";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTriangle_0(), [_p1, _p2, _p3]);
  },
  "{ :p1 :p2 :p3 |\n\t\tnewTriangle().initializeSlots([p1, p2, p3])\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Triangle",
  "aasTriangle",
  ["alpha", "beta", "a"],
  function (_alpha, _beta, _a) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _a";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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

sl.addMethod(
  "SmallFloat",
  "Triangle",
  "asaTriangle",
  ["alpha", "c", "beta"],
  function (_alpha, _c, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _c, _beta";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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

sl.addMethod(
  "SmallFloat",
  "Triangle",
  "sasTriangle",
  ["a", "gamma", "b"],
  function (_a, _gamma, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _gamma, _b";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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

sl.addMethod(
  "SmallFloat",
  "Triangle",
  "sssTriangle",
  ["a", "b", "c"],
  function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
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

sl.addMethod(
  "List",
  "Triangle",
  "circumcenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_circumcircle_1(_self));
  },
  "{ :self |\n\t\tself.circumcircle.center\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "circumcenter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_circumcircle_1(_self));
  },
  "{ :self |\n\t\tself.circumcircle.center\n\t}",
);

sl.addMethod(
  "List",
  "Triangle",
  "circumradius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_circumcircle_1(_self));
  },
  "{ :self |\n\t\tself.circumcircle.radius\n\t}",
);

sl.addMethod(
  "Triangle",
  "Triangle",
  "circumradius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_circumcircle_1(_self));
  },
  "{ :self |\n\t\tself.circumcircle.radius\n\t}",
);
