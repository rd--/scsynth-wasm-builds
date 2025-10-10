/*  Requires: Polygon  */

sl.addType(
  false,
  "Triangle",
  "Triangle",
  ["Object", "Equatable", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Triangle",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Triangle",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Triangle",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "altitudes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _p = _at_2(__SplVar2, 1);
    let _q = _at_2(__SplVar2, 2);
    let _r = _at_2(__SplVar2, 3);
    /* Statements */
    return [
      _asterisk_2(_b, _sin_1(_r)),
      _asterisk_2(_c, _sin_1(_p)),
      _asterisk_2(_a, _sin_1(_q)),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet [p, q, r] = self.interiorAngles;\n\t\t[b * r.sin, c * p.sin, a * q.sin]\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "anticomplementaryTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _antipedalTriangle_2(_self, _orthocenter_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.antipedalTriangle(self.orthocenter)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "antipedalTriangle",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    let __SplVar4 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SplVar4, 1);
    let _beta = _at_2(__SplVar4, 2);
    let _gamma = _at_2(__SplVar4, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[
      _asterisk_2(
        _hyphenMinus_2(0, _plusSign_2(_beta, _asterisk_2(_alpha, _cos_1(_c)))),
        _plusSign_2(_gamma, _asterisk_2(_alpha, _cos_1(_b))),
      ),
      _asterisk_2(
        _plusSign_2(_gamma, _asterisk_2(_alpha, _cos_1(_b))),
        _plusSign_2(_alpha, _asterisk_2(_beta, _cos_1(_c))),
      ),
      _asterisk_2(
        _plusSign_2(_beta, _asterisk_2(_alpha, _cos_1(_c))),
        _plusSign_2(_alpha, _asterisk_2(_gamma, _cos_1(_b))),
      ),
    ], [
      _asterisk_2(
        _plusSign_2(_gamma, _asterisk_2(_beta, _cos_1(_a))),
        _plusSign_2(_beta, _asterisk_2(_alpha, _cos_1(_c))),
      ),
      _asterisk_2(
        _hyphenMinus_2(0, _plusSign_2(_gamma, _asterisk_2(_beta, _cos_1(_a)))),
        _plusSign_2(_alpha, _asterisk_2(_beta, _cos_1(_c))),
      ),
      _asterisk_2(
        _plusSign_2(_alpha, _asterisk_2(_beta, _cos_1(_c))),
        _plusSign_2(_beta, _asterisk_2(_gamma, _cos_1(_a))),
      ),
    ], [
      _asterisk_2(
        _plusSign_2(_beta, _asterisk_2(_gamma, _cos_1(_a))),
        _plusSign_2(_gamma, _asterisk_2(_alpha, _cos_1(_b))),
      ),
      _asterisk_2(
        _plusSign_2(_alpha, _asterisk_2(_gamma, _cos_1(_b))),
        _plusSign_2(_gamma, _asterisk_2(_beta, _cos_1(_a))),
      ),
      _asterisk_2(
        _hyphenMinus_2(0, _plusSign_2(_alpha, _asterisk_2(_gamma, _cos_1(_b)))),
        _plusSign_2(_beta, _asterisk_2(_gamma, _cos_1(_a))),
      ),
    ]]);
  }, ["self", "p"]),
  "{ :self :p |\n\t\tlet [a, b, c] = self.interiorAngles;\n\t\tlet [alpha, beta, gamma] = self.toTrilinearCoordinates(p);\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[\n\t\t\t\t\t0 - (beta + (alpha * c.cos)) * (gamma + (alpha * b.cos)),\n\t\t\t\t\t(gamma + (alpha * b.cos)) * (alpha + (beta * c.cos)),\n\t\t\t\t\t(beta + (alpha * c.cos)) * (alpha + (gamma * b.cos))\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t(gamma + (beta * a.cos)) * (beta + (alpha * c.cos)),\n\t\t\t\t\t0 - (gamma + (beta * a.cos)) * (alpha + (beta * c.cos)),\n\t\t\t\t\t(alpha + (beta * c.cos)) * (beta + (gamma * a.cos))\n\t\t\t\t],\n\t\t\t\t[\n\t\t\t\t\t(beta + (gamma * a.cos)) * (gamma + (alpha * b.cos)),\n\t\t\t\t\t(alpha + (gamma * b.cos)) * (gamma + (beta * a.cos)),\n\t\t\t\t\t0 - (alpha + (gamma * b.cos)) * (beta + (gamma * a.cos))\n\t\t\t\t]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonArcLength_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.polygonArcLength\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_shoelaceFormula_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.shoelaceFormula.abs\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "asPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_embeddingDimension_1(_self), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polygon_1(_vertexCoordinates_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asPolygon: embeddingDimension not two");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.embeddingDimension = 2).if {\n\t\t\tself.vertexCoordinates.Polygon\n\t\t} {\n\t\t\tself.error('asPolygon: embeddingDimension not two')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "asPolyhedron",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_embeddingDimension_1(_self), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Polyhedron_1(_vertexCoordinates_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "asPolyhedron: embeddingDimension not three");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.embeddingDimension = 3).if {\n\t\t\tself.vertexCoordinates.Polyhedron\n\t\t} {\n\t\t\tself.error('asPolyhedron: embeddingDimension not three')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "bevanCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumcircle_1(_excentralTriangle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.excentralTriangle.circumcircle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "bevanPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          _hyphenMinus_2(_plusSign_2(_cos_1(_b), _cos_1(_c)), _cos_1(_a)),
          1,
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\tb.cos + c.cos - a.cos - 1\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "brocardCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(
      _kimberlingCenter_2(_self, 182),
      _solidus_2(_brocardDiameter_1(_self), 2),
    );
  }, ["self"]),
  "{ :self |\n\t\tCircle(\n\t\t\tself.kimberlingCenter(182),\n\t\t\tself.brocardDiameter / 2\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "brocardDiameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _norm_1(
      _hyphenMinus_2(_symmedianPoint_1(_self), _circumcenter_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.symmedianPoint - self.circumcenter).norm\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "brocardMidpoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_a, _plusSign_2(_square_1(_b), _square_1(_c)));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\ta * (b.square + c.square)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "brocardPoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar5, 1);
    let _b = _at_2(__SplVar5, 2);
    let _c = _at_2(__SplVar5, 3);
    /* Statements */
    return [
      _fromTrilinearCoordinates_2(_self, [
        _solidus_2(_c, _b),
        _solidus_2(_a, _c),
        _solidus_2(_b, _a),
      ]),
      _fromTrilinearCoordinates_2(_self, [
        _solidus_2(_b, _c),
        _solidus_2(_c, _a),
        _solidus_2(_a, _b),
      ]),
      _triangleCentreL_2(
        _self,
        sl.annotateFunction(function (_a, _b, _c) {
          /* ArityCheck */
          if (arguments.length !== 3) {
            const errorMessage = "Arity: expected 3, _a, _b, _c";
            throw new Error(errorMessage);
          } /* Statements */
          return _circumflexAccent_2(_a, -3);
        }, ["a", "b", "c"]),
      ),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\t[\n\t\t\tself.fromTrilinearCoordinates([c / b, a / c, b / a]),\n\t\t\tself.fromTrilinearCoordinates([b / c, c / a, a / b]),\n\t\t\tself.triangleCentreL { :a :b :c |\n\t\t\t\ta ^ -3\n\t\t\t}\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _csc_1(_a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.csc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "cevianTriangle",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SplVar6, 1);
    let _beta = _at_2(__SplVar6, 2);
    let _gamma = _at_2(__SplVar6, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[0, _beta, _gamma], [
      _alpha,
      0,
      _gamma,
    ], [_alpha, _beta, 0]]);
  }, ["self", "p"]),
  "{ :self :p |\n\t\tlet [alpha, beta, gamma] = self.toTrilinearCoordinates(p);\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t0 beta gamma;\n\t\t\t\talpha 0 gamma;\n\t\t\t\talpha beta 0\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "circumcenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _cos_1(_a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.cos\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "circumcircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumcircle_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.circumcircle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "circumradius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_circumcircle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.circumcircle.radius\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "clawsonPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _tan_1(_a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.tan\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "contactTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cevianTriangle_2(_self, _gergonnePoint_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.cevianTriangle(self.gergonnePoint)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "cosineCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _sideLengths_1(_self);
    /* Statements */
    return _Circle_2(
      _symmedianPoint_1(_self),
      _solidus_2(_product_1(_l), _sum_1(_square_1(_l))),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet l = self.sideLengths;\n\t\tCircle(\n\t\t\tself.symmedianPoint,\n\t\t\tl.product / l.square.sum\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "deLongchampsPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_cos_1(_a), _asterisk_2(_cos_1(_b), _cos_1(_c)));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.cos - (b.cos * c.cos)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "equalDetourPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          1,
          _solidus_2(
            _asterisk_2(
              _cos_1(_asterisk_2(0.5, _b)),
              _cos_1(_asterisk_2(0.5, _c)),
            ),
            _cos_1(_asterisk_2(0.5, _a)),
          ),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t1 + (((0.5 * b).cos * (0.5 * c).cos) / (0.5 * a).cos)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "eulerInfinityPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(
          _cos_1(_a),
          _asterisk_2(_asterisk_2(2, _cos_1(_b)), _cos_1(_c)),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.cos - (2 * b.cos * c.cos)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "eulerTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SplVar7, 1);
    let _b = _at_2(__SplVar7, 2);
    let _c = _at_2(__SplVar7, 3);
    let _x = _tan_1(_a);
    let _y = _tan_1(_b);
    let _z = _tan_1(_c);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[
      _plusSign_2(_plusSign_2(_asterisk_2(2, _x), _y), _z),
      _asterisk_2(_sin_1(_a), _sec_1(_b)),
      _asterisk_2(_sin_1(_a), _sec_1(_c)),
    ], [
      _asterisk_2(_sin_1(_b), _sec_1(_a)),
      _plusSign_2(_plusSign_2(_x, _asterisk_2(2, _y)), _z),
      _asterisk_2(_sin_1(_b), _sec_1(_c)),
    ], [
      _asterisk_2(_sin_1(_c), _sec_1(_a)),
      _asterisk_2(_sin_1(_c), _sec_1(_b)),
      _plusSign_2(_plusSign_2(_x, _y), _asterisk_2(2, _z)),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.interiorAngles;\n\t\tlet x = a.tan;\n\t\tlet y = b.tan;\n\t\tlet z = c.tan;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[(2 * x) + y + z, a.sin * b.sec, a.sin * c.sec],\n\t\t\t\t[b.sin * a.sec, x + (2 * y) + z, b.sin * c.sec],\n\t\t\t\t[c.sin * a.sec, c.sin * b.sec, x + y + (2 * z)]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "excenters",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      [[-1, 1, 1], [1, -1, 1], [1, 1, -1]],
      sl.annotateFunction(function (_c) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromTrilinearCoordinates_2(_self, _c);
      }, ["c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\t[-1 1 1; 1 -1 1; 1 1 -1].collect { :c |\n\t\t\tself.fromTrilinearCoordinates(c)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "excentralTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[-1, 1, 1], [1, -1, 1], [
      1,
      1,
      -1,
    ]]);
  }, ["self"]),
  "{ :self |\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t-1 1 1;\n\t\t\t\t1 -1 1;\n\t\t\t\t1 1 -1\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "excircles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _excenters_1(_self);
    let _r = _exradii_1(_self);
    /* Statements */
    return _Circle_2(_c, _r);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.excenters;\n\t\tlet r = self.exradii;\n\t\tCircle(c, r)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "excirclesRadicalCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar8, 1);
    let _b = _at_2(__SplVar8, 2);
    let _c = _at_2(__SplVar8, 3);
    let _i = _plusSign_2(
      _plusSign_2(
        _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(
                _asterisk_2(_square_1(_a), _b),
                _asterisk_2(_a, _square_1(_b)),
              ),
              _asterisk_2(_square_1(_a), _c),
            ),
            _asterisk_2(_asterisk_2(_a, _b), _c),
          ),
          _asterisk_2(_square_1(_b), _c),
        ),
        _asterisk_2(_a, _square_1(_c)),
      ),
      _asterisk_2(_b, _square_1(_c)),
    );
    let _r = _solidus_2(
      _sqrt_1(_solidus_2(_i, _plusSign_2(_plusSign_2(_a, _b), _a))),
      2,
    );
    /* Statements */
    return _Circle_2(_spiekerCenter_1(_self), _r);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet i = (a.square * b) + (a * b.square) + (a.square * c) + (a * b * c) + (b.square * c) + (a * c.square) + (b * c.square);\n\t\tlet r = (i / (a + b + a)).sqrt / 2;\n\t\tCircle(\n\t\t\tself.spiekerCenter,\n\t\t\tr\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "exeterPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _a,
          _hyphenMinus_2(
            _plusSign_2(_circumflexAccent_2(_b, 4), _circumflexAccent_2(_c, 4)),
            _circumflexAccent_2(_a, 4),
          ),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\ta * ((b ^ 4) + (c ^ 4) - (a ^ 4))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "exradii",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _s = _semiperimeter_1(_self);
    let _l = _sideLengths_1(_self);
    let _f_1 = sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar9 = _assertIsOfSize_2(_x, 3);
      let _a = _at_2(__SplVar9, 1);
      let _b = _at_2(__SplVar9, 2);
      let _c = _at_2(__SplVar9, 3);
      /* Statements */
      return _sqrt_1(
        _solidus_2(
          _asterisk_2(
            _asterisk_2(_s, _hyphenMinus_2(_s, _b)),
            _hyphenMinus_2(_s, _c),
          ),
          _hyphenMinus_2(_s, _a),
        ),
      );
    }, ["x"]);
    /* Statements */
    return _collect_2(
      [0, 2, 1],
      sl.annotateFunction(function (_r) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _r";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_rotate_2(_l, _r));
      }, ["r"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet s = self.semiperimeter;\n\t\tlet l = self.sideLengths;\n\t\tlet f = { :x |\n\t\t\tlet [a, b, c] = x;\n\t\t\t((s * (s - b) * (s - c)) / (s - a)).sqrt\n\t\t};\n\t\t[0 2 1].collect { :r |\n\t\t\tl.rotate(r).f\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "extangentsTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_cos_1(_interiorAngles_1(_self)), 3);
    let _x = _at_2(__SplVar10, 1);
    let _y = _at_2(__SplVar10, 2);
    let _z = _at_2(__SplVar10, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[
      _hyphenMinus_2(0, _plusSign_2(_x, 1)),
      _plusSign_2(_x, _z),
      _plusSign_2(_x, _y),
    ], [
      _plusSign_2(_y, _z),
      _hyphenMinus_2(0, _plusSign_2(_y, 1)),
      _plusSign_2(_y, _x),
    ], [
      _plusSign_2(_z, _y),
      _plusSign_2(_z, _x),
      _hyphenMinus_2(0, _plusSign_2(_z, 1)),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y, z] = self.interiorAngles.cos;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[0 - (x + 1), x + z, x + y],\n\t\t\t\t[y + z, 0 - (y + 1), y + x],\n\t\t\t\t[z + y, z + x, 0 - (z + 1)]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "extouchTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cevianTriangle_2(_self, _nagelPoint_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.cevianTriangle(self.nagelPoint)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "faceCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "faceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_asList_1(_upOrDownTo_2(1, 3))];
  }, ["self"]),
  "{ :self |\n\t\t[[1 .. 3]]\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "farOutPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _a,
          _hyphenMinus_2(
            _hyphenMinus_2(
              _plusSign_2(
                _circumflexAccent_2(_b, 4),
                _circumflexAccent_2(_c, 4),
              ),
              _circumflexAccent_2(_a, 4),
            ),
            _asterisk_2(_circumflexAccent_2(_b, 2), _circumflexAccent_2(_c, 2)),
          ),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\ta * ((b ^ 4) + (c ^ 4) - (a ^ 4) - ((b ^ 2) * (c ^ 2)))\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "feuerbachPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(1, _cos_1(_hyphenMinus_2(_b, _c)));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t1 - (b - c).cos\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "firstBrocardPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar11 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar11, 1);
    let _b = _at_2(__SplVar11, 2);
    let _c = _at_2(__SplVar11, 3);
    /* Statements */
    return _fromTrilinearCoordinates_2(_self, [
      _solidus_2(_c, _b),
      _solidus_2(_a, _c),
      _solidus_2(_b, _a),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tself.fromTrilinearCoordinates([c / b, a / c, b / a])\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "firstBrocardTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar12 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar12, 1);
    let _b = _at_2(__SplVar12, 2);
    let _c = _at_2(__SplVar12, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [
      [_asterisk_2(_asterisk_2(_a, _b), _c), _cube_1(_c), _cube_1(_b)],
      [_cube_1(_c), _asterisk_2(_asterisk_2(_a, _b), _c), _cube_1(_a)],
      [_cube_1(_b), _cube_1(_a), _asterisk_2(_asterisk_2(_a, _b), _c)],
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[a * b * c, c.cube, b.cube],\n\t\t\t\t[c.cube, a * b * c, a.cube],\n\t\t\t\t[b.cube, a.cube, a * b * c]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "firstFermatPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _csc_1(_plusSign_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t(a + 1/3.pi).csc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "firstIsodynamicPoint",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _t,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _sin_1(_plusSign_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["t"]),
  "{ :t |\n\t\tt.triangleCentreA { :a :b :c |\n\t\t\t(a + 1/3.pi).sin\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "firstNapoleonPoint",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _t,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _csc_1(_plusSign_2(_a, _pi_1(_Fraction_2(1n, 6n))));
      }, ["a", "b", "c"]),
    );
  }, ["t"]),
  "{ :t |\n\t\tt.triangleCentreA { :a :b :c |\n\t\t\t(a + 1/6.pi).csc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "fromBarycentricCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_asterisk_2(_v, _lambda));
    }, ["lambda"]);
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\t{ :lambda |\n\t\t\t(v * lambda).sum\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "fromBarycentricCoordinates",
  ["self", "lambda"],
  sl.annotateFunction(function (_self, _lambda) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _lambda";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_fromBarycentricCoordinates_1(_self), _lambda);
  }, ["self", "lambda"]),
  "{ :self :lambda |\n\t\tself.fromBarycentricCoordinates.value(lambda)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "fromTrilinearCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _sideLengths_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_c) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _c";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _b = _normalizeSum_1(_asterisk_2(_c, _l));
      /* Statements */
      return _fromBarycentricCoordinates_2(_self, _b);
    }, ["c"]);
  }, ["self"]),
  "{ :self |\n\t\tlet l = self.sideLengths;\n\t\t{ :c |\n\t\t\tlet b = (c * l).normalizeSum;\n\t\t\tself.fromBarycentricCoordinates(b)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "fromTrilinearCoordinates",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_fromTrilinearCoordinates_1(_self), _c);
  }, ["self", "c"]),
  "{ :self :c |\n\t\tself.fromTrilinearCoordinates.value(c)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "fromTrilinearVertexMatrix",
  ["self", "matrix"],
  sl.annotateFunction(function (_self, _matrix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _matrix";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(_collect_2(_matrix, _fromTrilinearCoordinates_1(_self)));
  }, ["self", "matrix"]),
  "{ :self :matrix |\n\t\tmatrix.collect(\n\t\t\tself.fromTrilinearCoordinates\n\t\t).Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "gergonnePoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _asterisk_2(_b, _c),
          _hyphenMinus_2(_plusSign_2(_b, _c), _a),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\t(b * c) / (b + c - a)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "hasIsoperimetricPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _greaterThanSign_2(
      _perimeter_1(_self),
      _plusSign_2(_asterisk_2(4, _circumradius_1(_self)), _inradius_1(_self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.perimeter > ((4 * self.circumradius) + self.inradius)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "heronsFormula",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar13 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar13, 1);
    let _b = _at_2(__SplVar13, 2);
    let _c = _at_2(__SplVar13, 3);
    let _s = _asterisk_2(_plusSign_2(_plusSign_2(_a, _b), _c), 0.5);
    /* Statements */
    return _sqrt_1(
      _asterisk_2(
        _asterisk_2(
          _asterisk_2(_s, _hyphenMinus_2(_s, _a)),
          _hyphenMinus_2(_s, _b),
        ),
        _hyphenMinus_2(_s, _c),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet s = (a + b + c) * 0.5;\n\t\t(s * (s - a) * (s - b) * (s - c)).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "incenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\t1\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "incircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_incenter_1(_self), _inradius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tCircle(self.incenter, self.inradius)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "innerSoddyCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _area_1(_self);
    let _r1 = _inradius_1(_self);
    let _r2 = _circumradius_1(_self);
    let _s = _semiperimeter_1(_self);
    /* Statements */
    return _Circle_2(
      _equalDetourPoint_1(_self),
      _solidus_2(
        _a,
        _plusSign_2(_plusSign_2(_asterisk_2(4, _r2), _r1), _asterisk_2(2, _s)),
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.area;\n\t\tlet r1 = self.inradius;\n\t\tlet r2 = self.circumradius;\n\t\tlet s = self.semiperimeter;\n\t\tCircle(\n\t\t\tself.equalDetourPoint,\n\t\t\ta / ((4 * r2) + r1 + (2 * s))\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "inradius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar14 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar14, 1);
    let _b = _at_2(__SplVar14, 2);
    let _c = _at_2(__SplVar14, 3);
    let _s = _asterisk_2(_plusSign_2(_plusSign_2(_a, _b), _c), 0.5);
    /* Statements */
    return _sqrt_1(
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_s, _a), _hyphenMinus_2(_s, _b)),
          _hyphenMinus_2(_s, _c),
        ),
        _s,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet s = (a + b + c) * 0.5;\n\t\t(((s - a) * (s - b) * (s - c)) / s).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "interiorAngles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonInteriorAngles_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.polygonInteriorAngles\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isAcute",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _interiorAngles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _lessThanSign_2(_each, _pi_1(_Fraction_2(1n, 2n)));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.interiorAngles.allSatisfy { :each |\n\t\t\teach < 1/2.pi\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isEquilateral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(
      _interiorAngles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_each, _pi_1(_Fraction_2(1n, 3n)));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.interiorAngles.allSatisfy { :each |\n\t\t\teach.isVeryCloseTo(1/3.pi)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isHeronian",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _epsilon = 1E-9;
    /* Statements */
    return _ampersand_2(
      _allSatisfy_2(
        _sideLengths_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _isInteger_2(_each, _epsilon);
        }, ["each"]),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_2(_area_1(_self), _epsilon);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet epsilon = 1E-9;\n\t\tself.sideLengths.allSatisfy { :each |\n\t\t\teach.isInteger(epsilon)\n\t\t} & {\n\t\t\tself.area.isInteger(epsilon)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isIsosceles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(
      _size_1(_nubBy_2(_sideLengths_1(_self), _isVeryCloseTo_2)),
      2,
    );
  }, ["self"]),
  "{ :self |\n\t\tself.sideLengths.nubBy(isVeryCloseTo:/2).size <= 2\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isOblique",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isRight_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isRight.not\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isObtuse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _interiorAngles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_each, _pi_1(_Fraction_2(1n, 2n)));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.interiorAngles.anySatisfy { :each |\n\t\t\teach > 1/2.pi\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isRight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _anySatisfy_2(
      _interiorAngles_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _isVeryCloseTo_2(_each, _pi_1(_Fraction_2(1n, 2n)));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.interiorAngles.anySatisfy { :each |\n\t\t\teach.isVeryCloseTo(1/2.pi)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isScalene",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isIsosceles_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.isIsosceles.not\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isoperimetricPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _hasIsoperimetricPoint_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _triangleCentreA_2(
          _self,
          sl.annotateFunction(function (_a, _b, _c) {
            /* ArityCheck */
            if (arguments.length !== 3) {
              const errorMessage = "Arity: expected 3, _a, _b, _c";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              _asterisk_2(
                _asterisk_2(
                  _sec_1(_asterisk_2(0.5, _a)),
                  _cos_1(_asterisk_2(0.5, _b)),
                ),
                _cos_1(_asterisk_2(0.5, _c)),
              ),
              1,
            );
          }, ["a", "b", "c"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "isoperimetricPoint: no such point");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.hasIsoperimetricPoint.if {\n\t\t\tself.triangleCentreA { :a :b :c |\n\t\t\t\t((0.5 * a).sec * (0.5 * b).cos * (0.5 * c).cos) - 1\n\t\t\t}\n\t\t} {\n\t\t\tself.error('isoperimetricPoint: no such point')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "kimberlingCenter",
  ["self", "n"],
  sl.annotateFunction(function (_self, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_kimberlingCenter_1(_n), _self);
  }, ["self", "n"]),
  "{ :self :n |\n\t\tn.kimberlingCenter.value(self)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "medialTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(_medialTriangle_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.medialTriangle.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "mittenpunkt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _hyphenMinus_2(_plusSign_2(_b, _c), _a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\tb + c - a\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "nagelPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_hyphenMinus_2(_plusSign_2(_b, _c), _a), _a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\t(b + c - a) / a\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "ninePointCenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _cos_1(_hyphenMinus_2(_b, _c));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t(b - c).cos\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "ninePointCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ninePointCircle_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.ninePointCircle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "nobbsPoints",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar15 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar15, 1);
    let _b = _at_2(__SplVar15, 2);
    let _c = _at_2(__SplVar15, 3);
    /* Statements */
    return _collect_2(
      [[
        _asterisk_2(
          _asterisk_2(-1, _plusSign_2(_hyphenMinus_2(_a, _b), _c)),
          _b,
        ),
        _asterisk_2(
          _plusSign_2(_plusSign_2(_hyphenMinus_2(0, _a), _b), _c),
          _a,
        ),
        0,
      ], [
        0,
        _asterisk_2(
          _asterisk_2(-1, _hyphenMinus_2(_plusSign_2(_a, _b), _c)),
          _c,
        ),
        _asterisk_2(_plusSign_2(_hyphenMinus_2(_a, _b), _c), _b),
      ], [
        _asterisk_2(_hyphenMinus_2(_plusSign_2(_a, _b), _c), _c),
        0,
        _asterisk_2(
          _asterisk_2(-1, _a),
          _plusSign_2(_plusSign_2(_hyphenMinus_2(0, _a), _b), _c),
        ),
      ]],
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _fromTrilinearCoordinates_2(_self, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\t[\n\t\t\t[-1 * (a - b + c) * b, (0 - a + b + c) * a, 0],\n\t\t\t[0, -1 * (a + b - c) * c, (a - b + c) * b],\n\t\t\t[(a + b - c) * c, 0, -1 * a * (0 - a + b + c)]\n\t\t].collect { :each |\n\t\t\tself.fromTrilinearCoordinates(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "orthicTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar16 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SplVar16, 1);
    let _b = _at_2(__SplVar16, 2);
    let _c = _at_2(__SplVar16, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[0, _sec_1(_b), _sec_1(_c)], [
      _sec_1(_a),
      0,
      _sec_1(_c),
    ], [_sec_1(_a), _sec_1(_b), 0]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.interiorAngles;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[0, b.sec, c.sec],\n\t\t\t\t[a.sec, 0, c.sec],\n\t\t\t\t[a.sec, b.sec, 0]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "orthocenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _sec_1(_a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\ta.sec\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "outerSoddyCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _area_1(_self);
    let _r1 = _inradius_1(_self);
    let _r2 = _circumradius_1(_self);
    let _s = _semiperimeter_1(_self);
    let _r = _solidus_2(
      _a,
      _hyphenMinus_2(_plusSign_2(_asterisk_2(4, _r2), _r1), _asterisk_2(2, _s)),
    );
    let _c = _if_3(
      _greaterThanSign_2(_r, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalDetourPoint_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isoperimetricPoint_1(_self);
      }, []),
    );
    /* Statements */
    return _Circle_2(_c, _abs_1(_r));
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.area;\n\t\tlet r1 = self.inradius;\n\t\tlet r2 = self.circumradius;\n\t\tlet s = self.semiperimeter;\n\t\tlet r = a / ((4 * r2) + r1 - (2 * s));\n\t\tlet c = (r > 0).if {\n\t\t\tself.equalDetourPoint\n\t\t} {\n\t\t\tself.isoperimetricPoint\n\t\t};\n\t\tCircle(c, r.abs)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "pedalTriangle",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar17 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SplVar17, 1);
    let _b = _at_2(__SplVar17, 2);
    let _c = _at_2(__SplVar17, 3);
    let __SplVar18 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SplVar18, 1);
    let _beta = _at_2(__SplVar18, 2);
    let _gamma = _at_2(__SplVar18, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[
      0,
      _plusSign_2(_beta, _asterisk_2(_alpha, _cos_1(_c))),
      _plusSign_2(_gamma, _asterisk_2(_alpha, _cos_1(_b))),
    ], [
      _plusSign_2(_alpha, _asterisk_2(_beta, _cos_1(_c))),
      0,
      _plusSign_2(_gamma, _asterisk_2(_beta, _cos_1(_a))),
    ], [
      _plusSign_2(_alpha, _asterisk_2(_gamma, _cos_1(_b))),
      _plusSign_2(_beta, _asterisk_2(_gamma, _cos_1(_a))),
      0,
    ]]);
  }, ["self", "p"]),
  "{ :self :p |\n\t\tlet [a, b, c] = self.interiorAngles;\n\t\tlet [alpha, beta, gamma] = self.toTrilinearCoordinates(p);\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[0, beta + (alpha * c.cos), gamma + (alpha * b.cos)],\n\t\t\t\t[alpha + (beta * c.cos), 0, gamma + (beta * a.cos)],\n\t\t\t\t[alpha + (gamma * b.cos), beta + (gamma * a.cos), 0]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "perimeter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_sideLengths_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.sideLengths.sum\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "polarCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isObtuse_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Circle_2(
          _orthocenter_1(_self),
          _sqrt_1(
            _hyphenMinus_2(
              _asterisk_2(4, _square_1(_circumradius_1(_self))),
              _asterisk_2(0.5, _sum_1(_square_1(_sideLengths_1(_self)))),
            ),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "polarCircle: not obtuse");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isObtuse.if {\n\t\t\tCircle(\n\t\t\t\tself.orthocenter,\n\t\t\t\t((4 * self.circumradius.square) - (0.5 * self.sideLengths.square.sum)).sqrt\n\t\t\t)\n\t\t} {\n\t\t\tself.error('polarCircle: not obtuse')\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "powerCircles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar19 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar19, 1);
    let _b = _at_2(__SplVar19, 2);
    let _c = _at_2(__SplVar19, 3);
    let __SplVar20 = _assertIsOfSize_2(_medialTriangle_1([_a, _b, _c]), 3);
    let _p = _at_2(__SplVar20, 1);
    let _q = _at_2(__SplVar20, 2);
    let _r = _at_2(__SplVar20, 3);
    /* Statements */
    return _Circle_2([_p, _q, _r], [
      _norm_1(_hyphenMinus_2(_p, _a)),
      _norm_1(_hyphenMinus_2(_q, _b)),
      _norm_1(_hyphenMinus_2(_r, _c)),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.vertexCoordinates;\n\t\tlet [p, q, r] = [a, b, c].medialTriangle;\n\t\tCircle(\n\t\t\t[p, q, r],\n\t\t\t[(p - a).norm, (q - b).norm, (r - c).norm]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tself\n\t\t.vertexCoordinates\n\t\t.collect(projection.asUnaryBlock)\n\t\t.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "rotate",
  ["self", "theta", "center"],
  sl.annotateFunction(function (_self, _theta, _center) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _theta, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_rotate_3(_asPolygon_1(_self), _theta, _center)),
    );
  }, ["self", "theta", "center"]),
  "{ :self :theta :center |\n\t\tself.asPolygon.rotate(theta, center).vertexCoordinates.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "rotate",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_rotate_2(_asPolygon_1(_self), _theta)),
    );
  }, ["self", "theta"]),
  "{ :self :theta |\n\t\tself.asPolygon.rotate(theta).vertexCoordinates.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "scale",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(_vertexCoordinates_1(_scale_2(_asPolygon_1(_self), _m)));
  }, ["self", "m"]),
  "{ :self :m |\n\t\tself.asPolygon.scale(m).vertexCoordinates.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "schifflerPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(1, _hyphenMinus_2(_cos_1(_b), _cos_1(_c)));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t1 / (b.cos - c.cos)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "schouteCenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _a,
          _hyphenMinus_2(
            _hyphenMinus_2(_asterisk_2(2, _square_1(_a)), _square_1(_b)),
            _square_1(_c),
          ),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\ta * ((2 * a.square) - b.square - c.square)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "secondBrocardPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar21 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar21, 1);
    let _b = _at_2(__SplVar21, 2);
    let _c = _at_2(__SplVar21, 3);
    /* Statements */
    return _fromTrilinearCoordinates_2(_self, [
      _solidus_2(_b, _c),
      _solidus_2(_c, _a),
      _solidus_2(_a, _b),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tself.fromTrilinearCoordinates([b / c, c / a, a / b])\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "secondBrocardTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar22 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar22, 1);
    let _b = _at_2(__SplVar22, 2);
    let _c = _at_2(__SplVar22, 3);
    let __SplVar23 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _alpha = _at_2(__SplVar23, 1);
    let _beta = _at_2(__SplVar23, 2);
    let _gamma = _at_2(__SplVar23, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[
      _asterisk_2(_asterisk_2(_asterisk_2(2, _b), _c), _cos_1(_alpha)),
      _asterisk_2(_a, _b),
      _asterisk_2(_a, _c),
    ], [
      _asterisk_2(_a, _b),
      _asterisk_2(_asterisk_2(_asterisk_2(2, _a), _c), _cos_1(_beta)),
      _asterisk_2(_b, _c),
    ], [
      _asterisk_2(_a, _c),
      _asterisk_2(_b, _c),
      _asterisk_2(_asterisk_2(_asterisk_2(2, _a), _b), _cos_1(_gamma)),
    ]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet [alpha, beta, gamma] = self.interiorAngles;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[2 * b * c * alpha.cos, a * b, a * c],\n\t\t\t\t[a * b, 2 * a * c * beta.cos, b * c],\n\t\t\t\t[a * c, b * c, 2 * a * b * gamma.cos]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "secondFermatPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _csc_1(_hyphenMinus_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreA { :a :b :c |\n\t\t\t(a - 1/3.pi).csc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "secondIsodynamicPoint",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _t,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _sin_1(_hyphenMinus_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["t"]),
  "{ :t |\n\t\tt.triangleCentreA { :a :b :c |\n\t\t\t(a - 1/3.pi).sin\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "secondNapoleonPoint",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreA_2(
      _t,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _csc_1(_hyphenMinus_2(_a, _pi_1(_Fraction_2(1n, 6n))));
      }, ["a", "b", "c"]),
    );
  }, ["t"]),
  "{ :t |\n\t\tt.triangleCentreA { :a :b :c |\n\t\t\t(a - 1/6.pi).csc\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "semiperimeter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_perimeter_1(_self), 0.5);
  }, ["self"]),
  "{ :self |\n\t\tself.perimeter * 0.5\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "sideLengths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar24 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar24, 1);
    let _b = _at_2(__SplVar24, 2);
    let _c = _at_2(__SplVar24, 3);
    /* Statements */
    return [
      _euclideanDistance_2(_b, _c),
      _euclideanDistance_2(_c, _a),
      _euclideanDistance_2(_a, _b),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.vertexCoordinates;\n\t\t[\n\t\t\tb.euclideanDistance(c),\n\t\t\tc.euclideanDistance(a),\n\t\t\ta.euclideanDistance(b)\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "signedArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar25 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar25, 1);
    let _b = _at_2(__SplVar25, 2);
    let _c = _at_2(__SplVar25, 3);
    /* Statements */
    return _asterisk_2(
      _cross_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_c, _b)),
      0.5,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.vertexCoordinates;\n\t\t(b - a).cross(c - b) * 0.5\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "spiekerCenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_asterisk_2(_b, _c), _plusSign_2(_b, _c));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\tb * c * (b + c) /* eqv. (b + c) / a */\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "spiekerCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _incircle_1(_medialTriangle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.medialTriangle.incircle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "surfaceNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar26 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _p1 = _at_2(__SplVar26, 1);
    let _p2 = _at_2(__SplVar26, 2);
    let _p3 = _at_2(__SplVar26, 3);
    let _u = _hyphenMinus_2(_p2, _p1);
    let _v = _hyphenMinus_2(_p3, _p1);
    /* Statements */
    return _cross_2(_u, _v);
  }, ["self"]),
  "{ :self |\n\t\tlet [p1, p2, p3] = self.vertexCoordinates;\n\t\tlet u = p2 - p1;\n\t\tlet v = p3 - p1;\n\t\tu.cross(v)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(_asPolygon_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.asPolygon.svgFragment(options)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "symmedianPoint",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentreL_2(
      _self,
      sl.annotateFunction(function (_a, _b, _c) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _a, _b, _c";
          throw new Error(errorMessage);
        } /* Statements */
        return _a;
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.triangleCentreL { :a :b :c |\n\t\t\ta\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "symmedialTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar27 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar27, 1);
    let _b = _at_2(__SplVar27, 2);
    let _c = _at_2(__SplVar27, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[0, _b, _c], [_a, 0, _c], [
      _a,
      _b,
      0,
    ]]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t0 b c;\n\t\t\t\ta 0 c;\n\t\t\t\ta b 0\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "tangentCircles",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar28 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SplVar28, 1);
    let _b = _at_2(__SplVar28, 2);
    let _c = _at_2(__SplVar28, 3);
    let __SplVar29 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _p = _at_2(__SplVar29, 1);
    let _q = _at_2(__SplVar29, 2);
    let _r = _at_2(__SplVar29, 3);
    /* Statements */
    return [
      _Circle_2(
        _p,
        _solidus_2(_plusSign_2(_plusSign_2(_hyphenMinus_2(0, _a), _b), _c), 2),
      ),
      _Circle_2(_q, _solidus_2(_plusSign_2(_hyphenMinus_2(_a, _b), _c), 2)),
      _Circle_2(_r, _solidus_2(_hyphenMinus_2(_plusSign_2(_a, _b), _c), 2)),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.sideLengths;\n\t\tlet [p, q, r] = self.vertexCoordinates;\n\t\t[\n\t\t\tCircle(p, (0 - a + b + c) / 2),\n\t\t\tCircle(q, (a - b + c) / 2),\n\t\t\tCircle(r, (a + b - c) / 2)\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "tangentialTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar30 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SplVar30, 1);
    let _b = _at_2(__SplVar30, 2);
    let _c = _at_2(__SplVar30, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [
      [_hyphenMinus_2(0, _a), _b, _c],
      [_a, _hyphenMinus_2(0, _b), _c],
      [_a, _b, _hyphenMinus_2(0, _c)],
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.interiorAngles;\n\t\tself.fromTrilinearVertexMatrix(\n\t\t\t[\n\t\t\t\t[0 - a, b, c],\n\t\t\t\t[a, 0 - b, c],\n\t\t\t\t[a, b, 0 - c]\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "toBarycentricCoordinates",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_toBarycentricCoordinates_1(_self), _c);
  }, ["self", "c"]),
  "{ :self :c |\n\t\tself.toBarycentricCoordinates.value(c)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "toBarycentricCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar31 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar31, 1);
    let _b = _at_2(__SplVar31, 2);
    let _c = _at_2(__SplVar31, 3);
    /* Statements */
    return _toBarycentricCoordinates_3(_a, _b, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.vertexCoordinates;\n\t\ttoBarycentricCoordinates(a, b, c)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "toTrilinearCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar32 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar32, 1);
    let _b = _at_2(__SplVar32, 2);
    let _c = _at_2(__SplVar32, 3);
    let _v = _sideLengths_1(_self);
    let _f_1 = _toBarycentricCoordinates_3(_a, _b, _c);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_f_1(_x), _v);
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self.vertexCoordinates;\n\t\tlet v = self.sideLengths;\n\t\tlet f:/1 = toBarycentricCoordinates(a, b, c);\n\t\t{ :x |\n\t\t\tf(x) / v\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "toTrilinearCoordinates",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _value_2(_toTrilinearCoordinates_1(_self), _c);
  }, ["self", "c"]),
  "{ :self :c |\n\t\tself.toTrilinearCoordinates.value(c)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "translate",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_translate_2(_asPolygon_1(_self), _operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tself.asPolygon.translate(operand).vertexCoordinates.Triangle\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "triangleCentre",
  ["self", "p:/1", "f:/3"],
  sl.annotateFunction(function (_self, _p_1, _f_3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _p_1, _f_3";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar33 = _assertIsOfSize_2(_p_1(_self), 3);
    let _a = _at_2(__SplVar33, 1);
    let _b = _at_2(__SplVar33, 2);
    let _c = _at_2(__SplVar33, 3);
    let _alpha = _f_3(_a, _b, _c);
    let _beta = _f_3(_b, _c, _a);
    let _gamma = _f_3(_c, _a, _b);
    /* Statements */
    return _fromTrilinearCoordinates_2(_self, [_alpha, _beta, _gamma]);
  }, ["self", "p:/1", "f:/3"]),
  "{ :self :p:/1 :f:/3 |\n\t\tlet [a, b, c] = p(self);\n\t\tlet alpha = f(a, b, c);\n\t\tlet beta = f(b, c, a);\n\t\tlet gamma = f(c, a, b);\n\t\tself.fromTrilinearCoordinates([alpha, beta, gamma])\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "triangleCentreA",
  ["self", "f:/3"],
  sl.annotateFunction(function (_self, _f_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentre_3(_self, _interiorAngles_1, _f_3);
  }, ["self", "f:/3"]),
  "{ :self :f:/3 |\n\t\tself.triangleCentre(interiorAngles:/1, f:/3)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "triangleCentreL",
  ["self", "f:/3"],
  sl.annotateFunction(function (_self, _f_3) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _f_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _triangleCentre_3(_self, _sideLengths_1, _f_3);
  }, ["self", "f:/3"]),
  "{ :self :f:/3 |\n\t\tself.triangleCentre(sideLengths:/1, f:/3)\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  }, ["self"]),
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "unitNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _normalize_1(_surfaceNormal_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.surfaceNormal.normalize\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "angleBisector",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar34 = _assertIsOfSize_2(_self, 3);
    let __SplUnused41 = _at_2(__SplVar34, 1);
    let _p = _at_2(__SplVar34, 2);
    let __SplUnused42 = _at_2(__SplVar34, 3);
    let _a = _planarAngle_1(_self);
    /* Statements */
    return _InfiniteLine_2(_p, _fromPolarCoordinates_1([1, _solidus_2(_a, 2)]));
  }, ["self"]),
  "{ :self |\n\t\tlet [_, p, _] = self;\n\t\tlet a = self.planarAngle;\n\t\tInfiniteLine(p, [1, a / 2].fromPolarCoordinates)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "circumcircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar35 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar35, 1);
    let _b = _at_2(__SplVar35, 2);
    let _c = _at_2(__SplVar35, 3);
    let __SplVar36 = _assertIsOfSize_2(_a, 2);
    let _ax = _at_2(__SplVar36, 1);
    let _ay = _at_2(__SplVar36, 2);
    let __SplVar37 = _assertIsOfSize_2(_b, 2);
    let _bx = _at_2(__SplVar37, 1);
    let _by = _at_2(__SplVar37, 2);
    let __SplVar38 = _assertIsOfSize_2(_c, 2);
    let _cx = _at_2(__SplVar38, 1);
    let _cy = _at_2(__SplVar38, 2);
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
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\tlet [ax, ay] = a;\n\t\tlet [bx, by] = b;\n\t\tlet [cx, cy] = c;\n\t\tlet ad = (ax * ax) + (ay * ay);\n\t\tlet bd = (bx * bx) + (by * by);\n\t\tlet cd = (cx * cx) + (cy * cy);\n\t\tlet d = 2 * ((ax * (by - cy)) + (bx * (cy - ay)) + (cx * (ay - by)));\n\t\tlet center = [\n\t\t\t1 / d * ((ad * (by - cy)) + (bd * (cy - ay)) + (cd * (ay - by))),\n\t\t\t1 / d * ((ad * (cx - bx)) + (bd * (ax - cx)) + (cd * (bx - ax)))\n\t\t];\n\t\tlet radius = center.euclideanDistance(self.anyOne);\n\t\tCircle(center, radius)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "equilateralTriangle",
  ["center", "radius", "angle"],
  sl.annotateFunction(function (_center, _radius, _angle) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radius, _angle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = sl.annotateFunction(function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _center,
        _fromPolarCoordinates_1([
          _radius,
          _plusSign_2(_angle, _solidus_2(_asterisk_2(_pi_1(2), _n), 3)),
        ]),
      );
    }, ["n"]);
    /* Statements */
    return _Triangle_1([_f_1(0), _f_1(1), _f_1(2)]);
  }, ["center", "radius", "angle"]),
  "{ :center :radius :angle |\n\t\tlet f = { :n |\n\t\t\tcenter + [\n\t\t\t\tradius,\n\t\t\t\tangle + (2.pi * n / 3)\n\t\t\t].fromPolarCoordinates\n\t\t};\n\t\tTriangle([0.f 1.f 2.f])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "medialTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar39 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar39, 1);
    let _b = _at_2(__SplVar39, 2);
    let _c = _at_2(__SplVar39, 3);
    /* Statements */
    return [
      _midpoint_1([_b, _c]),
      _midpoint_1([_c, _a]),
      _midpoint_1([_a, _b]),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\t[\n\t\t\t[b c].midpoint,\n\t\t\t[c a].midpoint,\n\t\t\t[a b].midpoint\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "ninePointCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circleThrough_1(_medialTriangle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.medialTriangle.circleThrough\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "Triangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_size_1(_self), 3),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isMatrix_1(_self);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_2(_newTriangle_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Triangle: invalid matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\tself.size = 3 & {\n\t\t\t\tself.isMatrix\n\t\t\t}\n\t\t).if {\n\t\t\tnewTriangle().initializeSlots(self)\n\t\t} {\n\t\t\tself.error('Triangle: invalid matrix')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "Triangle",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1([_a, _b, _c]);
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\tTriangle([a b c])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Triangle",
  "aasTriangle",
  ["alpha", "beta", "a"],
  sl.annotateFunction(function (_alpha, _beta, _a) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _beta, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x2 = _asterisk_2(
      _asterisk_2(_a, _csc_1(_alpha)),
      _sin_1(_plusSign_2(_alpha, _beta)),
    );
    let _x3 = _asterisk_2(_asterisk_2(_a, _cot_1(_alpha)), _sin_1(_beta));
    let _y3 = _asterisk_2(_a, _sin_1(_beta));
    /* Statements */
    return _Triangle_1([[0, 0], [_x2, 0], [_x3, _y3]]);
  }, ["alpha", "beta", "a"]),
  "{ :alpha :beta :a |\n\t\tlet x2 = a * alpha.csc * (alpha + beta).sin;\n\t\tlet x3 = a * alpha.cot * beta.sin;\n\t\tlet y3 = a * beta.sin;\n\t\tTriangle([0 0; x2 0; x3 y3])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Triangle",
  "asaTriangle",
  ["alpha", "c", "beta"],
  sl.annotateFunction(function (_alpha, _c, _beta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _alpha, _c, _beta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _asterisk_2(
      _asterisk_2(_cos_1(_alpha), _csc_1(_plusSign_2(_alpha, _beta))),
      _sin_1(_beta),
    );
    let _y = _asterisk_2(
      _asterisk_2(_sin_1(_alpha), _csc_1(_plusSign_2(_alpha, _beta))),
      _sin_1(_beta),
    );
    /* Statements */
    return _Triangle_3([0, 0], [_c, 0], [
      _asterisk_2(_c, _x),
      _asterisk_2(_c, _y),
    ]);
  }, ["alpha", "c", "beta"]),
  "{ :alpha :c :beta |\n\t\tlet x = alpha.cos * (alpha + beta).csc * beta.sin;\n\t\tlet y = alpha.sin * (alpha + beta).csc * beta.sin;\n\t\tTriangle([0 0], [c 0], [c * x, c * y])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Triangle",
  "sasTriangle",
  ["a", "gamma", "b"],
  sl.annotateFunction(function (_a, _gamma, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _gamma, _b";
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
    return _Triangle_1([[0, 0], [_x, 0], [_y, _z]]);
  }, ["a", "gamma", "b"]),
  "{ :a :gamma :b |\n\t\tlet x = ((a ^ 2) + (b ^ 2) - (2 * a * b * gamma.cos)).sqrt;\n\t\tlet y = ((b ^ 2) - (a * b * gamma.cos)) / x;\n\t\tlet z = (a * b * gamma.sin) / x;\n\t\tTriangle([0 0; x 0; y z])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Triangle",
  "sssTriangle",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _plusSign_2(_plusSign_2(_a, _b), _c);
    let _m = _max_1([_a, _b, _c]);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_m, _hyphenMinus_2(_z, _m)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _solidus_2(
          _hyphenMinus_2(
            _plusSign_2(_circumflexAccent_2(_b, 2), _circumflexAccent_2(_c, 2)),
            _circumflexAccent_2(_a, 2),
          ),
          _asterisk_2(2, _c),
        );
        let _y = _solidus_2(
          _sqrt_1(
            _asterisk_2(
              _asterisk_2(
                _asterisk_2(
                  _hyphenMinus_2(_plusSign_2(_a, _b), _c),
                  _plusSign_2(_hyphenMinus_2(_a, _b), _c),
                ),
                _hyphenMinus_2(_plusSign_2(_b, _c), _a),
              ),
              _plusSign_2(_plusSign_2(_a, _b), _c),
            ),
          ),
          _asterisk_2(2, _c),
        );
        /* Statements */
        return _Triangle_3([0, 0], [_c, 0], [_x, _y]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2([_a, _b, _c], "sssTriangle: invalid triangle");
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\tlet z = a + b + c;\n\t\tlet m = [a, b, c].max;\n\t\t(m < (z - m)).if {\n\t\t\tlet x = ((b ^ 2) + (c ^ 2) - (a ^ 2)) / (2 * c);\n\t\t\tlet y = ((a + b - c) * (a - b + c) * (b + c - a) * (a + b + c)).sqrt / (2 * c);\n\t\t\tTriangle([0 0], [c 0], [x y])\n\t\t} {\n\t\t\t[a, b, c].error('sssTriangle: invalid triangle')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "sssTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar40 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SplVar40, 1);
    let _b = _at_2(__SplVar40, 2);
    let _c = _at_2(__SplVar40, 3);
    /* Statements */
    return _sssTriangle_3(_a, _b, _c);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c] = self;\n\t\tsssTriangle(a, b, c)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Triangle",
  "kimberlingCenter",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _caseOf_3(
        _n,
        [
          _hyphenMinusGreaterThanSign_2(
            1,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _incenter_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _centroid_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            3,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _circumcenter_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            4,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _orthocenter_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            5,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _ninePointCenter_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            6,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _symmedianPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            7,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _gergonnePoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            8,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _nagelPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            9,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _mittenpunkt_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            10,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _spiekerCenter_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            11,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _feuerbachPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            12,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _triangleCentreA_2(
                _t,
                sl.annotateFunction(function (_a, _b, _c) {
                  /* ArityCheck */
                  if (arguments.length !== 3) {
                    const errorMessage = "Arity: expected 3, _a, _b, _c";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(1, _cos_1(_hyphenMinus_2(_b, _c)));
                }, ["a", "b", "c"]),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            13,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _firstFermatPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            14,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _secondFermatPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            15,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _firstIsodynamicPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            16,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _secondIsodynamicPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            17,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _firstNapoleonPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            18,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _secondNapoleonPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            19,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _clawsonPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            20,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _deLongchampsPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            21,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _schifflerPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            22,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _exeterPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            23,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _farOutPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            30,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _eulerInfinityPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            39,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _brocardMidpoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            40,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _bevanPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            175,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _isoperimetricPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            176,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalDetourPoint_1(_t);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            182,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _triangleCentreL_2(
                _t,
                sl.annotateFunction(function (_a, _b, _c) {
                  /* ArityCheck */
                  if (arguments.length !== 3) {
                    const errorMessage = "Arity: expected 3, _a, _b, _c";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _solidus_2(
                    _hyphenMinus_2(
                      _plusSign_2(
                        _asterisk_2(
                          _square_1(_a),
                          _plusSign_2(_square_1(_b), _square_1(_c)),
                        ),
                        _asterisk_2(
                          _asterisk_2(2, _square_1(_b)),
                          _square_1(_c),
                        ),
                      ),
                      _circumflexAccent_2(_a, 4),
                    ),
                    _asterisk_2(_b, _c),
                  );
                }, ["a", "b", "c"]),
              );
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            187,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _schouteCenter_1(_t);
            }, []),
          ),
        ],
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _error_2(_n, "kimberlingCenter: unknown n");
        }, []),
      );
    }, ["t"]);
  }, ["n"]),
  "{ :n |\n\t\t{ :t |\n\t\t\tn.caseOf([\n\t\t\t\t1 -> { t.incenter },\n\t\t\t\t2 -> { t.centroid },\n\t\t\t\t3 -> { t.circumcenter },\n\t\t\t\t4 -> { t.orthocenter },\n\t\t\t\t5 -> { t.ninePointCenter },\n\t\t\t\t6 -> { t.symmedianPoint },\n\t\t\t\t7 -> { t.gergonnePoint },\n\t\t\t\t8 -> { t.nagelPoint },\n\t\t\t\t9 -> { t.mittenpunkt },\n\t\t\t\t10 -> { t.spiekerCenter },\n\t\t\t\t11 -> { t.feuerbachPoint },\n\t\t\t\t12 -> {\n\t\t\t\t\tt.triangleCentreA { :a :b :c |\n\t\t\t\t\t\t1 + (b - c).cos\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t13 -> { t.firstFermatPoint },\n\t\t\t\t14 -> { t.secondFermatPoint },\n\t\t\t\t15 -> { t.firstIsodynamicPoint },\n\t\t\t\t16 -> { t.secondIsodynamicPoint },\n\t\t\t\t17 -> { t.firstNapoleonPoint },\n\t\t\t\t18 -> { t.secondNapoleonPoint },\n\t\t\t\t19 -> { t.clawsonPoint },\n\t\t\t\t20 -> { t.deLongchampsPoint },\n\t\t\t\t21 -> { t.schifflerPoint },\n\t\t\t\t22 -> { t.exeterPoint },\n\t\t\t\t23 -> { t.farOutPoint },\n\t\t\t\t30 -> { t.eulerInfinityPoint },\n\t\t\t\t39 -> { t.brocardMidpoint },\n\t\t\t\t40 -> { t.bevanPoint },\n\t\t\t\t175 -> { t.isoperimetricPoint },\n\t\t\t\t176 -> { t.equalDetourPoint },\n\t\t\t\t182 -> {\n\t\t\t\t\tt.triangleCentreL { :a :b :c |\n\t\t\t\t\t\t((a.square * (b.square + c.square)) + (2 * b.square * c.square) - (a ^ 4)) / (b * c)\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t187 -> { t.schouteCenter }\n\t\t\t]) {\n\t\t\t\tn.error('kimberlingCenter: unknown n')\n\t\t\t}\n\t\t}\n\t}",
);
