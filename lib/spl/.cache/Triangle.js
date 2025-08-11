/*  Requires: Polygon  */

sl.addType(
  false,
  "Triangle",
  "Triangle",
  ["Object", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Triangle",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Triangle",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
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
    let __SPL1 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SPL1, 1);
    let _b = _at_2(__SPL1, 2);
    let _c = _at_2(__SPL1, 3);
    let __SPL2 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _p = _at_2(__SPL2, 1);
    let _q = _at_2(__SPL2, 2);
    let _r = _at_2(__SPL2, 3);
    /* Statements */
    return [
      _asterisk_2(_b, _sin_1(_r)),
      _asterisk_2(_c, _sin_1(_p)),
      _asterisk_2(_a, _sin_1(_q)),
    ];
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(sideLengths(self), 3); let a = at(__SPL1, 1); let b = at(__SPL1, 2); let c = at(__SPL1, 3); let __SPL2 = assertIsOfSize(interiorAngles(self), 3); let p = at(__SPL2, 1); let q = at(__SPL2, 2); let r = at(__SPL2, 3); [*(b, sin(r)), *(c, sin(p)), *(a, sin(q))] }",
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
  "{ :self | antipedalTriangle(self,orthocenter(self)) }",
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
    let __SPL3 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SPL3, 1);
    let _b = _at_2(__SPL3, 2);
    let _c = _at_2(__SPL3, 3);
    let __SPL4 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SPL4, 1);
    let _beta = _at_2(__SPL4, 2);
    let _gamma = _at_2(__SPL4, 3);
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
  "{ :self :p | let __SPL3 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SPL3, 1); let b = at(__SPL3, 2); let c = at(__SPL3, 3); let __SPL4 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SPL4, 1); let beta = at(__SPL4, 2); let gamma = at(__SPL4, 3); fromTrilinearVertexMatrix(self,[[*(-(0, (+(beta, (*(alpha, cos(c)))))), (+(gamma, (*(alpha, cos(b)))))), *((+(gamma, (*(alpha, cos(b))))), (+(alpha, (*(beta, cos(c)))))), *((+(beta, (*(alpha, cos(c))))), (+(alpha, (*(gamma, cos(b))))))], [*((+(gamma, (*(beta, cos(a))))), (+(beta, (*(alpha, cos(c)))))), *(-(0, (+(gamma, (*(beta, cos(a)))))), (+(alpha, (*(beta, cos(c)))))), *((+(alpha, (*(beta, cos(c))))), (+(beta, (*(gamma, cos(a))))))], [*((+(beta, (*(gamma, cos(a))))), (+(gamma, (*(alpha, cos(b)))))), *((+(alpha, (*(gamma, cos(b))))), (+(gamma, (*(beta, cos(a)))))), *(-(0, (+(alpha, (*(gamma, cos(b)))))), (+(beta, (*(gamma, cos(a))))))]]) }",
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
  "{ :self | polygonArcLength(vertexCoordinates(self)) }",
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
  "{ :self | abs(shoelaceFormula(vertexCoordinates(self))) }",
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
  "{ :self | if((=(embeddingDimension(self), 2)), { Polygon(vertexCoordinates(self)) }, { error(self,'asPolygon: embeddingDimension not two') }) }",
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
  "{ :self | if((=(embeddingDimension(self), 3)), { Polyhedron(vertexCoordinates(self)) }, { error(self,'asPolyhedron: embeddingDimension not three') }) }",
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
  "{ :self | circumcircle(excentralTriangle(self)) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | -(-(+(cos(b), cos(c)), cos(a)), 1) }) }",
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
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
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
    return _polygonCentroid_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | polygonCentroid(vertexCoordinates(self)) }",
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
    let __SPL5 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SPL5, 1);
    let _beta = _at_2(__SPL5, 2);
    let _gamma = _at_2(__SPL5, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [[0, _beta, _gamma], [
      _alpha,
      0,
      _gamma,
    ], [_alpha, _beta, 0]]);
  }, ["self", "p"]),
  "{ :self :p | let __SPL5 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SPL5, 1); let beta = at(__SPL5, 2); let gamma = at(__SPL5, 3); fromTrilinearVertexMatrix(self,[[0, beta, gamma], [alpha, 0, gamma], [alpha, beta, 0]]) }",
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
  "{ :self | circumcircle(vertexCoordinates(self)) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | tan(a) }) }",
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
  "{ :self | cevianTriangle(self,gergonnePoint(self)) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | -(cos(a), (*(cos(b), cos(c)))) }) }",
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
  "{ :self | 2 }",
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
  "{ :self | size(anyOne(vertexCoordinates(self))) }",
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
  "{ :self | collect([[-1, 1, 1], [1, -1, 1], [1, 1, -1]], { :c | fromTrilinearCoordinates(self,c) }) }",
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
  "{ :self | fromTrilinearVertexMatrix(self,[[-1, 1, 1], [1, -1, 1], [1, 1, -1]]) }",
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
  "{ :self | let c = excenters(self); let r = exradii(self); Circle(c, r) }",
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
      let __SPL6 = _assertIsOfSize_2(_x, 3);
      let _a = _at_2(__SPL6, 1);
      let _b = _at_2(__SPL6, 2);
      let _c = _at_2(__SPL6, 3);
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
        return _f_1(_rotated_2(_l, _r));
      }, ["r"]),
    );
  }, ["self"]),
  "{ :self | let s = semiperimeter(self); let l = sideLengths(self); let f = { :x | let __SPL6 = assertIsOfSize(x, 3); let a = at(__SPL6, 1); let b = at(__SPL6, 2); let c = at(__SPL6, 3); sqrt((/((*(*(s, (-(s, b))), (-(s, c)))), (-(s, a))))) }; collect([0, 2, 1], { :r | f(rotated(l,r)) }) }",
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
    let __SPL7 = _assertIsOfSize_2(_cos_1(_interiorAngles_1(_self)), 3);
    let _x = _at_2(__SPL7, 1);
    let _y = _at_2(__SPL7, 2);
    let _z = _at_2(__SPL7, 3);
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
  "{ :self | let __SPL7 = assertIsOfSize(cos(interiorAngles(self)), 3); let x = at(__SPL7, 1); let y = at(__SPL7, 2); let z = at(__SPL7, 3); fromTrilinearVertexMatrix(self,[[-(0, (+(x, 1))), +(x, z), +(x, y)], [+(y, z), -(0, (+(y, 1))), +(y, x)], [+(z, y), +(z, x), -(0, (+(z, 1)))]]) }",
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
  "{ :self | cevianTriangle(self,nagelPoint(self)) }",
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
  "{ :self | 1 }",
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
  "{ :self | [asList(upOrDownTo(1, 3))] }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | -(1, cos((-(b, c)))) }) }",
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
        return _cosecant_1(_plusSign_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self | triangleCentreA(self, { :a :b :c | cosecant((+(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :self | let v = vertexCoordinates(self); { :lambda | sum((*(v, lambda))) } }",
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
  "{ :self :lambda | value(fromBarycentricCoordinates(self),lambda) }",
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
  "{ :self | let l = sideLengths(self); { :c | let b = normalizeSum((*(c, l))); fromBarycentricCoordinates(self,b) } }",
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
  "{ :self :c | value(fromTrilinearCoordinates(self),c) }",
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
  "{ :self :matrix | Triangle(collect(matrix,fromTrilinearCoordinates(self))) }",
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
        return _circumflexAccent_2(
          _asterisk_2(_a, _hyphenMinus_2(_plusSign_2(_b, _c), _a)),
          -1,
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self | triangleCentreL(self, { :a :b :c | ^((*(a, (-(+(b, c), a)))), -1) }) }",
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
    let __SPL8 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SPL8, 1);
    let _b = _at_2(__SPL8, 2);
    let _c = _at_2(__SPL8, 3);
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
  "{ :self | let __SPL8 = assertIsOfSize(sideLengths(self), 3); let a = at(__SPL8, 1); let b = at(__SPL8, 2); let c = at(__SPL8, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((*(*(*(s, (-(s, a))), (-(s, b))), (-(s, c))))) }",
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
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    let _l = _rotatedRight_2(_sideLengths_1(_self), 3);
    /* Statements */
    return _solidus_2(_sum_1(_asterisk_2(_v, _l)), _sum_1(_l));
  }, ["self"]),
  "{ :self | let v = vertexCoordinates(self); let l = rotatedRight(sideLengths(self),3); /(sum((*(v, l))), sum(l)) }",
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
  "{ :self | Circle(incenter(self), inradius(self)) }",
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
    let __SPL9 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SPL9, 1);
    let _b = _at_2(__SPL9, 2);
    let _c = _at_2(__SPL9, 3);
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
  "{ :self | let __SPL9 = assertIsOfSize(sideLengths(self), 3); let a = at(__SPL9, 1); let b = at(__SPL9, 2); let c = at(__SPL9, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((/((*(*((-(s, a)), (-(s, b))), (-(s, c)))), s))) }",
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
  "{ :self | polygonInteriorAngles(vertexCoordinates(self)) }",
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
  "{ :self | Triangle(medialTriangle(vertexCoordinates(self))) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | -(+(b, c), a) }) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | /((-(+(b, c), a)), a) }) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | cos((-(b, c))) }) }",
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
  "{ :self | ninePointCircle(vertexCoordinates(self)) }",
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
    let __SPL10 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SPL10, 1);
    let _b = _at_2(__SPL10, 2);
    let _c = _at_2(__SPL10, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [
      [0, _secant_1(_b), _secant_1(_c)],
      [_secant_1(_a), 0, _secant_1(_c)],
      [_secant_1(_a), _secant_1(_b), 0],
    ]);
  }, ["self"]),
  "{ :self | let __SPL10 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SPL10, 1); let b = at(__SPL10, 2); let c = at(__SPL10, 3); fromTrilinearVertexMatrix(self,[[0, secant(b), secant(c)], [secant(a), 0, secant(c)], [secant(a), secant(b), 0]]) }",
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
    } /* Temporaries */
    let _a = _interiorAngles_1(_self);
    let _c = _normalizeSum_1(_tan_1(_a));
    /* Statements */
    return _fromBarycentricCoordinates_2(_self, _c);
  }, ["self"]),
  "{ :self | let a = interiorAngles(self); let c = normalizeSum(tan(a)); fromBarycentricCoordinates(self,c) }",
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
    let __SPL11 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SPL11, 1);
    let _b = _at_2(__SPL11, 2);
    let _c = _at_2(__SPL11, 3);
    let __SPL12 = _assertIsOfSize_2(_toTrilinearCoordinates_2(_self, _p), 3);
    let _alpha = _at_2(__SPL12, 1);
    let _beta = _at_2(__SPL12, 2);
    let _gamma = _at_2(__SPL12, 3);
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
  "{ :self :p | let __SPL11 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SPL11, 1); let b = at(__SPL11, 2); let c = at(__SPL11, 3); let __SPL12 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SPL12, 1); let beta = at(__SPL12, 2); let gamma = at(__SPL12, 3); fromTrilinearVertexMatrix(self,[[0, +(beta, (*(alpha, cos(c)))), +(gamma, (*(alpha, cos(b))))], [+(alpha, (*(beta, cos(c)))), 0, +(gamma, (*(beta, cos(a))))], [+(alpha, (*(gamma, cos(b)))), +(beta, (*(gamma, cos(a)))), 0]]) }",
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
  "{ :self | sum(sideLengths(self)) }",
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
  "{ :self :projection | Triangle(collect(vertexCoordinates(self),asUnaryBlock(projection))) }",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "rotated",
  ["self", "theta", "center"],
  sl.annotateFunction(function (_self, _theta, _center) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _theta, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_rotated_3(_asPolygon_1(_self), _theta, _center)),
    );
  }, ["self", "theta", "center"]),
  "{ :self :theta :center | Triangle(vertexCoordinates(rotated(asPolygon(self),theta, center))) }",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "rotated",
  ["self", "theta"],
  sl.annotateFunction(function (_self, _theta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _theta";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_rotated_2(_asPolygon_1(_self), _theta)),
    );
  }, ["self", "theta"]),
  "{ :self :theta | Triangle(vertexCoordinates(rotated(asPolygon(self),theta))) }",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "scaled",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_scaled_2(_asPolygon_1(_self), _factor)),
    );
  }, ["self", "factor"]),
  "{ :self :factor | Triangle(vertexCoordinates(scaled(asPolygon(self),factor))) }",
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
        return _cosecant_1(_hyphenMinus_2(_a, _pi_1(_Fraction_2(1n, 3n))));
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self | triangleCentreA(self, { :a :b :c | cosecant((-(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :self | *(perimeter(self), 0.5) }",
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
    let __SPL13 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL13, 1);
    let _b = _at_2(__SPL13, 2);
    let _c = _at_2(__SPL13, 3);
    /* Statements */
    return [
      _euclideanDistance_2(_b, _c),
      _euclideanDistance_2(_c, _a),
      _euclideanDistance_2(_a, _b),
    ];
  }, ["self"]),
  "{ :self | let __SPL13 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL13, 1); let b = at(__SPL13, 2); let c = at(__SPL13, 3); [euclideanDistance(b,c), euclideanDistance(c,a), euclideanDistance(a,b)] }",
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
    let __SPL14 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL14, 1);
    let _b = _at_2(__SPL14, 2);
    let _c = _at_2(__SPL14, 3);
    /* Statements */
    return _asterisk_2(
      _cross_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_c, _b)),
      0.5,
    );
  }, ["self"]),
  "{ :self | let __SPL14 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL14, 1); let b = at(__SPL14, 2); let c = at(__SPL14, 3); *(cross((-(b, a)),-(c, b)), 0.5) }",
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
        return _solidus_2(_plusSign_2(_b, _c), _a);
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self | triangleCentreL(self, { :a :b :c | /((+(b, c)), a) }) }",
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
  "{ :self | incircle(medialTriangle(self)) }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
    let __SPL15 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _p1 = _at_2(__SPL15, 1);
    let _p2 = _at_2(__SPL15, 2);
    let _p3 = _at_2(__SPL15, 3);
    let _u = _hyphenMinus_2(_p2, _p1);
    let _v = _hyphenMinus_2(_p3, _p1);
    /* Statements */
    return _cross_2(_u, _v);
  }, ["self"]),
  "{ :self | let __SPL15 = assertIsOfSize(vertexCoordinates(self), 3); let p1 = at(__SPL15, 1); let p2 = at(__SPL15, 2); let p3 = at(__SPL15, 3); let u = -(p2, p1); let v = -(p3, p1); cross(u,v) }",
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
  "{ :self :options | svgFragment(asPolygon(self),options) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | a }) }",
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
    let __SPL16 = _assertIsOfSize_2(_interiorAngles_1(_self), 3);
    let _a = _at_2(__SPL16, 1);
    let _b = _at_2(__SPL16, 2);
    let _c = _at_2(__SPL16, 3);
    /* Statements */
    return _fromTrilinearVertexMatrix_2(_self, [
      [_hyphenMinus_2(0, _a), _b, _c],
      [_a, _hyphenMinus_2(0, _b), _c],
      [_a, _b, _hyphenMinus_2(0, _c)],
    ]);
  }, ["self"]),
  "{ :self | let __SPL16 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SPL16, 1); let b = at(__SPL16, 2); let c = at(__SPL16, 3); fromTrilinearVertexMatrix(self,[[-(0, a), b, c], [a, -(0, b), c], [a, b, -(0, c)]]) }",
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
  "{ :self :c | value(toBarycentricCoordinates(self),c) }",
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
    let __SPL17 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL17, 1);
    let _b = _at_2(__SPL17, 2);
    let _c = _at_2(__SPL17, 3);
    /* Statements */
    return _toBarycentricCoordinates_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL17 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL17, 1); let b = at(__SPL17, 2); let c = at(__SPL17, 3); toBarycentricCoordinates(a, b, c) }",
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
    let __SPL18 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL18, 1);
    let _b = _at_2(__SPL18, 2);
    let _c = _at_2(__SPL18, 3);
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
  "{ :self | let __SPL18 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL18, 1); let b = at(__SPL18, 2); let c = at(__SPL18, 3); let v = sideLengths(self); let f:/1 = toBarycentricCoordinates(a, b, c); { :x | /(f(x), v) } }",
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
  "{ :self :c | value(toTrilinearCoordinates(self),c) }",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "translated",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Statements */
    return _Triangle_1(
      _vertexCoordinates_1(_translated_2(_asPolygon_1(_self), _operand)),
    );
  }, ["self", "operand"]),
  "{ :self :operand | Triangle(vertexCoordinates(translated(asPolygon(self),operand))) }",
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
    let __SPL19 = _assertIsOfSize_2(_p_1(_self), 3);
    let _a = _at_2(__SPL19, 1);
    let _b = _at_2(__SPL19, 2);
    let _c = _at_2(__SPL19, 3);
    let _alpha = _f_3(_a, _b, _c);
    let _beta = _f_3(_b, _c, _a);
    let _gamma = _f_3(_c, _a, _b);
    /* Statements */
    return _fromTrilinearCoordinates_2(_self, [_alpha, _beta, _gamma]);
  }, ["self", "p:/1", "f:/3"]),
  "{ :self :p:/1 :f:/3 | let __SPL19 = assertIsOfSize(p(self), 3); let a = at(__SPL19, 1); let b = at(__SPL19, 2); let c = at(__SPL19, 3); let alpha = f(a, b, c); let beta = f(b, c, a); let gamma = f(c, a, b); fromTrilinearCoordinates(self,[alpha, beta, gamma]) }",
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
  "{ :self :f:/3 | triangleCentre(self,interiorAngles:/1, f:/3) }",
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
  "{ :self :f:/3 | triangleCentre(self,sideLengths:/1, f:/3) }",
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
  "{ :self | 3 }",
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
  "{ :self | normalize(surfaceNormal(self)) }",
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
    let __SPL20 = _assertIsOfSize_2(_self, 3);
    let __genSym27 = _at_2(__SPL20, 1);
    let _p = _at_2(__SPL20, 2);
    let __genSym28 = _at_2(__SPL20, 3);
    let _a = _planarAngle_1(_self);
    /* Statements */
    return _InfiniteLine_2(_p, _fromPolarCoordinates_1([1, _solidus_2(_a, 2)]));
  }, ["self"]),
  "{ :self | let __SPL20 = assertIsOfSize(self, 3); let _ = at(__SPL20, 1); let p = at(__SPL20, 2); let _ = at(__SPL20, 3); let a = planarAngle(self); InfiniteLine(p, fromPolarCoordinates([1, /(a, 2)])) }",
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
    let __SPL21 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL21, 1);
    let _b = _at_2(__SPL21, 2);
    let _c = _at_2(__SPL21, 3);
    let __SPL22 = _assertIsOfSize_2(_a, 2);
    let _ax = _at_2(__SPL22, 1);
    let _ay = _at_2(__SPL22, 2);
    let __SPL23 = _assertIsOfSize_2(_b, 2);
    let _bx = _at_2(__SPL23, 1);
    let _by = _at_2(__SPL23, 2);
    let __SPL24 = _assertIsOfSize_2(_c, 2);
    let _cx = _at_2(__SPL24, 1);
    let _cy = _at_2(__SPL24, 2);
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
  "{ :self | let __SPL21 = assertIsOfSize(self, 3); let a = at(__SPL21, 1); let b = at(__SPL21, 2); let c = at(__SPL21, 3); let __SPL22 = assertIsOfSize(a, 2); let ax = at(__SPL22, 1); let ay = at(__SPL22, 2); let __SPL23 = assertIsOfSize(b, 2); let bx = at(__SPL23, 1); let by = at(__SPL23, 2); let __SPL24 = assertIsOfSize(c, 2); let cx = at(__SPL24, 1); let cy = at(__SPL24, 2); let ad = +((*(ax, ax)), (*(ay, ay))); let bd = +((*(bx, bx)), (*(by, by))); let cd = +((*(cx, cx)), (*(cy, cy))); let d = *(2, (+(+((*(ax, (-(by, cy)))), (*(bx, (-(cy, ay))))), (*(cx, (-(ay, by))))))); let center = [*(/(1, d), (+(+((*(ad, (-(by, cy)))), (*(bd, (-(cy, ay))))), (*(cd, (-(ay, by))))))), *(/(1, d), (+(+((*(ad, (-(cx, bx)))), (*(bd, (-(ax, cx))))), (*(cd, (-(bx, ax)))))))]; let radius = euclideanDistance(center,anyOne(self)); Circle(center, radius) }",
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
  "{ :center :radius :angle | let f = { :n | +(center, fromPolarCoordinates([radius, +(angle, (/(*(pi(2), n), 3)))])) }; Triangle([f(0), f(1), f(2)]) }",
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
    let __SPL25 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL25, 1);
    let _b = _at_2(__SPL25, 2);
    let _c = _at_2(__SPL25, 3);
    /* Statements */
    return [
      _midpoint_1([_b, _c]),
      _midpoint_1([_c, _a]),
      _midpoint_1([_a, _b]),
    ];
  }, ["self"]),
  "{ :self | let __SPL25 = assertIsOfSize(self, 3); let a = at(__SPL25, 1); let b = at(__SPL25, 2); let c = at(__SPL25, 3); [midpoint([b, c]), midpoint([c, a]), midpoint([a, b])] }",
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
  "{ :self | circleThrough(medialTriangle(self)) }",
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
  "{ :self | if((&(=(size(self), 3), { isMatrix(self) })), { initializeSlots(newTriangle(),self) }, { error(self,'Triangle: invalid matrix') }) }",
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
  "{ :a :b :c | Triangle([a, b, c]) }",
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
      _asterisk_2(_a, _cosecant_1(_alpha)),
      _sin_1(_plusSign_2(_alpha, _beta)),
    );
    let _x3 = _asterisk_2(_asterisk_2(_a, _cotangent_1(_alpha)), _sin_1(_beta));
    let _y3 = _asterisk_2(_a, _sin_1(_beta));
    /* Statements */
    return _Triangle_1([[0, 0], [_x2, 0], [_x3, _y3]]);
  }, ["alpha", "beta", "a"]),
  "{ :alpha :beta :a | let x2 = *(*(a, cosecant(alpha)), sin((+(alpha, beta)))); let x3 = *(*(a, cotangent(alpha)), sin(beta)); let y3 = *(a, sin(beta)); Triangle([[0, 0], [x2, 0], [x3, y3]]) }",
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
  }, ["alpha", "c", "beta"]),
  "{ :alpha :c :beta | let x = *(*(cos(alpha), cosecant((+(alpha, beta)))), sin(beta)); let y = *(*(sin(alpha), cosecant((+(alpha, beta)))), sin(beta)); Triangle([0, 0], [c, 0], [*(c, x), *(c, y)]) }",
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
  "{ :a :gamma :b | let x = sqrt((-(+((^(a, 2)), (^(b, 2))), (*(*(*(2, a), b), cos(gamma)))))); let y = /((-((^(b, 2)), (*(*(a, b), cos(gamma))))), x); let z = /((*(*(a, b), sin(gamma))), x); Triangle([[0, 0], [x, 0], [y, z]]) }",
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
  "{ :a :b :c | let z = +(+(a, b), c); let m = max([a, b, c]); if((<(m, (-(z, m)))), { let x = /((-(+((^(b, 2)), (^(c, 2))), (^(a, 2)))), (*(2, c))); let y = /(sqrt((*(*(*((-(+(a, b), c)), (+(-(a, b), c))), (-(+(b, c), a))), (+(+(a, b), c))))), (*(2, c))); Triangle([0, 0], [c, 0], [x, y]) }, { error([a, b, c],'sssTriangle: invalid triangle') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Triangle",
  "circumcenter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_circumcircle_1(_self));
  }, ["self"]),
  "{ :self | center(circumcircle(self)) }",
);

sl.extendTypeOrTraitWithMethod(
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
    return _center_1(_circumcircle_1(_self));
  }, ["self"]),
  "{ :self | center(circumcircle(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
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
  "{ :self | radius(circumcircle(self)) }",
);

sl.extendTypeOrTraitWithMethod(
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
  "{ :self | radius(circumcircle(self)) }",
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
    let __SPL26 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL26, 1);
    let _b = _at_2(__SPL26, 2);
    let _c = _at_2(__SPL26, 3);
    /* Statements */
    return _sssTriangle_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL26 = assertIsOfSize(self, 3); let a = at(__SPL26, 1); let b = at(__SPL26, 2); let c = at(__SPL26, 3); sssTriangle(a, b, c) }",
);

sl.extendTypeOrTraitWithMethod(
  "Triangle",
  "Triangle",
  "sssTriangle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL26 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL26, 1);
    let _b = _at_2(__SPL26, 2);
    let _c = _at_2(__SPL26, 3);
    /* Statements */
    return _sssTriangle_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL26 = assertIsOfSize(self, 3); let a = at(__SPL26, 1); let b = at(__SPL26, 2); let c = at(__SPL26, 3); sssTriangle(a, b, c) }",
);
