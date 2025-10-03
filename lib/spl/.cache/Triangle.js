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
  "{ :self | let __SplVar1 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar1, 1); let b = at(__SplVar1, 2); let c = at(__SplVar1, 3); let __SplVar2 = assertIsOfSize(interiorAngles(self), 3); let p = at(__SplVar2, 1); let q = at(__SplVar2, 2); let r = at(__SplVar2, 3); [*(b, sin(r)), *(c, sin(p)), *(a, sin(q))] }",
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
  "{ :self :p | let __SplVar3 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SplVar3, 1); let b = at(__SplVar3, 2); let c = at(__SplVar3, 3); let __SplVar4 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SplVar4, 1); let beta = at(__SplVar4, 2); let gamma = at(__SplVar4, 3); fromTrilinearVertexMatrix(self,[[*(-(0, (+(beta, (*(alpha, cos(c)))))), (+(gamma, (*(alpha, cos(b)))))), *((+(gamma, (*(alpha, cos(b))))), (+(alpha, (*(beta, cos(c)))))), *((+(beta, (*(alpha, cos(c))))), (+(alpha, (*(gamma, cos(b))))))], [*((+(gamma, (*(beta, cos(a))))), (+(beta, (*(alpha, cos(c)))))), *(-(0, (+(gamma, (*(beta, cos(a)))))), (+(alpha, (*(beta, cos(c)))))), *((+(alpha, (*(beta, cos(c))))), (+(beta, (*(gamma, cos(a))))))], [*((+(beta, (*(gamma, cos(a))))), (+(gamma, (*(alpha, cos(b)))))), *((+(alpha, (*(gamma, cos(b))))), (+(gamma, (*(beta, cos(a)))))), *(-(0, (+(alpha, (*(gamma, cos(b)))))), (+(beta, (*(gamma, cos(a))))))]]) }",
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
  "{ :self | Circle(kimberlingCenter(self,182), /(brocardDiameter(self), 2)) }",
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
  "{ :self | norm((-(symmedianPoint(self), circumcenter(self)))) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | *(a, (+(square(b), square(c)))) }) }",
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
  "{ :self | let __SplVar5 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar5, 1); let b = at(__SplVar5, 2); let c = at(__SplVar5, 3); [fromTrilinearCoordinates(self,[/(c, b), /(a, c), /(b, a)]), fromTrilinearCoordinates(self,[/(b, c), /(c, a), /(a, b)]), triangleCentreL(self, { :a :b :c | ^(a, -3) })] }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | csc(a) }) }",
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
  "{ :self :p | let __SplVar6 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SplVar6, 1); let beta = at(__SplVar6, 2); let gamma = at(__SplVar6, 3); fromTrilinearVertexMatrix(self,[[0, beta, gamma], [alpha, 0, gamma], [alpha, beta, 0]]) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | cos(a) }) }",
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
  "{ :self | let l = sideLengths(self); Circle(symmedianPoint(self), /(product(l), sum(square(l)))) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | +(1, (/((*(cos((*(0.5, b))), cos((*(0.5, c))))), cos((*(0.5, a)))))) }) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | -(cos(a), (*(*(2, cos(b)), cos(c)))) }) }",
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
  "{ :self | let __SplVar7 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SplVar7, 1); let b = at(__SplVar7, 2); let c = at(__SplVar7, 3); let x = tan(a); let y = tan(b); let z = tan(c); fromTrilinearVertexMatrix(self,[[+(+((*(2, x)), y), z), *(sin(a), sec(b)), *(sin(a), sec(c))], [*(sin(b), sec(a)), +(+(x, (*(2, y))), z), *(sin(b), sec(c))], [*(sin(c), sec(a)), *(sin(c), sec(b)), +(+(x, y), (*(2, z)))]]) }",
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
  "{ :self | let __SplVar8 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar8, 1); let b = at(__SplVar8, 2); let c = at(__SplVar8, 3); let i = +(+(+(+(+(+((*(square(a), b)), (*(a, square(b)))), (*(square(a), c))), (*(*(a, b), c))), (*(square(b), c))), (*(a, square(c)))), (*(b, square(c)))); let r = /(sqrt((/(i, (+(+(a, b), a))))), 2); Circle(spiekerCenter(self), r) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | *(a, (-(+((^(b, 4)), (^(c, 4))), (^(a, 4))))) }) }",
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
  "{ :self | let s = semiperimeter(self); let l = sideLengths(self); let f = { :x | let __SplVar9 = assertIsOfSize(x, 3); let a = at(__SplVar9, 1); let b = at(__SplVar9, 2); let c = at(__SplVar9, 3); sqrt((/((*(*(s, (-(s, b))), (-(s, c)))), (-(s, a))))) }; collect([0, 2, 1], { :r | f(rotate(l,r)) }) }",
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
  "{ :self | let __SplVar10 = assertIsOfSize(cos(interiorAngles(self)), 3); let x = at(__SplVar10, 1); let y = at(__SplVar10, 2); let z = at(__SplVar10, 3); fromTrilinearVertexMatrix(self,[[-(0, (+(x, 1))), +(x, z), +(x, y)], [+(y, z), -(0, (+(y, 1))), +(y, x)], [+(z, y), +(z, x), -(0, (+(z, 1)))]]) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | *(a, (-(-(+((^(b, 4)), (^(c, 4))), (^(a, 4))), (*((^(b, 2)), (^(c, 2))))))) }) }",
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
  "{ :self | let __SplVar11 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar11, 1); let b = at(__SplVar11, 2); let c = at(__SplVar11, 3); fromTrilinearCoordinates(self,[/(c, b), /(a, c), /(b, a)]) }",
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
  "{ :self | let __SplVar12 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar12, 1); let b = at(__SplVar12, 2); let c = at(__SplVar12, 3); fromTrilinearVertexMatrix(self,[[*(*(a, b), c), cube(c), cube(b)], [cube(c), *(*(a, b), c), cube(a)], [cube(b), cube(a), *(*(a, b), c)]]) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | csc((+(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :t | triangleCentreA(t, { :a :b :c | sin((+(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :t | triangleCentreA(t, { :a :b :c | csc((+(a, pi(Fraction(1L, 6L))))) }) }",
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
        return _solidus_2(
          _asterisk_2(_b, _c),
          _hyphenMinus_2(_plusSign_2(_b, _c), _a),
        );
      }, ["a", "b", "c"]),
    );
  }, ["self"]),
  "{ :self | triangleCentreL(self, { :a :b :c | /((*(b, c)), (-(+(b, c), a))) }) }",
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
  "{ :self | >(perimeter(self), (+((*(4, circumradius(self))), inradius(self)))) }",
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
  "{ :self | let __SplVar13 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar13, 1); let b = at(__SplVar13, 2); let c = at(__SplVar13, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((*(*(*(s, (-(s, a))), (-(s, b))), (-(s, c))))) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | 1 }) }",
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
  "{ :self | let a = area(self); let r1 = inradius(self); let r2 = circumradius(self); let s = semiperimeter(self); Circle(equalDetourPoint(self), /(a, (+(+((*(4, r2)), r1), (*(2, s)))))) }",
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
  "{ :self | let __SplVar14 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar14, 1); let b = at(__SplVar14, 2); let c = at(__SplVar14, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((/((*(*((-(s, a)), (-(s, b))), (-(s, c)))), s))) }",
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
  "{ :self | allSatisfy(interiorAngles(self), { :each | <(each, pi(Fraction(1L, 2L))) }) }",
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
  "{ :self | allSatisfy(interiorAngles(self), { :each | isVeryCloseTo(each,pi(Fraction(1L, 3L))) }) }",
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
  "{ :self | let epsilon = 1E-9; &(allSatisfy(sideLengths(self), { :each | isInteger(each,epsilon) }), { isInteger(area(self),epsilon) }) }",
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
  "{ :self | <=(size(nubBy(sideLengths(self),isVeryCloseTo:/2)), 2) }",
);

sl.addMethodToExistingType(
  "Triangle",
  "Triangle",
  "isOlique",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _not_1(_isRight_1(_self));
  }, ["self"]),
  "{ :self | not(isRight(self)) }",
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
  "{ :self | anySatisfy(interiorAngles(self), { :each | >(each, pi(Fraction(1L, 2L))) }) }",
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
  "{ :self | anySatisfy(interiorAngles(self), { :each | isVeryCloseTo(each,pi(Fraction(1L, 2L))) }) }",
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
  "{ :self | not(isIsosceles(self)) }",
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
  "{ :self | if(hasIsoperimetricPoint(self), { triangleCentreA(self, { :a :b :c | -((*(*(sec((*(0.5, a))), cos((*(0.5, b)))), cos((*(0.5, c))))), 1) }) }, { error(self,'isoperimetricPoint: no such point') }) }",
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
  "{ :self :n | value(kimberlingCenter(n),self) }",
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
  "{ :self | let __SplVar15 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar15, 1); let b = at(__SplVar15, 2); let c = at(__SplVar15, 3); collect([[*(*(-1, (+(-(a, b), c))), b), *((+(+(-(0, a), b), c)), a), 0], [0, *(*(-1, (-(+(a, b), c))), c), *((+(-(a, b), c)), b)], [*((-(+(a, b), c)), c), 0, *(*(-1, a), (+(+(-(0, a), b), c)))]], { :each | fromTrilinearCoordinates(self,each) }) }",
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
  "{ :self | let __SplVar16 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SplVar16, 1); let b = at(__SplVar16, 2); let c = at(__SplVar16, 3); fromTrilinearVertexMatrix(self,[[0, sec(b), sec(c)], [sec(a), 0, sec(c)], [sec(a), sec(b), 0]]) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | sec(a) }) }",
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
  "{ :self | let a = area(self); let r1 = inradius(self); let r2 = circumradius(self); let s = semiperimeter(self); let r = /(a, (-(+((*(4, r2)), r1), (*(2, s))))); let c = if((>(r, 0)), { equalDetourPoint(self) }, { isoperimetricPoint(self) }); Circle(c, abs(r)) }",
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
  "{ :self :p | let __SplVar17 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SplVar17, 1); let b = at(__SplVar17, 2); let c = at(__SplVar17, 3); let __SplVar18 = assertIsOfSize(toTrilinearCoordinates(self,p), 3); let alpha = at(__SplVar18, 1); let beta = at(__SplVar18, 2); let gamma = at(__SplVar18, 3); fromTrilinearVertexMatrix(self,[[0, +(beta, (*(alpha, cos(c)))), +(gamma, (*(alpha, cos(b))))], [+(alpha, (*(beta, cos(c)))), 0, +(gamma, (*(beta, cos(a))))], [+(alpha, (*(gamma, cos(b)))), +(beta, (*(gamma, cos(a)))), 0]]) }",
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
  "{ :self | if(isObtuse(self), { Circle(orthocenter(self), sqrt((-((*(4, square(circumradius(self)))), (*(0.5, sum(square(sideLengths(self))))))))) }, { error(self,'polarCircle: not obtuse') }) }",
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
  "{ :self | let __SplVar19 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SplVar19, 1); let b = at(__SplVar19, 2); let c = at(__SplVar19, 3); let __SplVar20 = assertIsOfSize(medialTriangle([a, b, c]), 3); let p = at(__SplVar20, 1); let q = at(__SplVar20, 2); let r = at(__SplVar20, 3); Circle([p, q, r], [norm((-(p, a))), norm((-(q, b))), norm((-(r, c)))]) }",
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
  "{ :self :theta :center | Triangle(vertexCoordinates(rotate(asPolygon(self),theta, center))) }",
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
  "{ :self :theta | Triangle(vertexCoordinates(rotate(asPolygon(self),theta))) }",
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
  "{ :self :m | Triangle(vertexCoordinates(scale(asPolygon(self),m))) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | /(1, (-(cos(b), cos(c)))) }) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | *(a, (-(-((*(2, square(a))), square(b)), square(c)))) }) }",
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
  "{ :self | let __SplVar21 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar21, 1); let b = at(__SplVar21, 2); let c = at(__SplVar21, 3); fromTrilinearCoordinates(self,[/(b, c), /(c, a), /(a, b)]) }",
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
  "{ :self | let __SplVar22 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar22, 1); let b = at(__SplVar22, 2); let c = at(__SplVar22, 3); let __SplVar23 = assertIsOfSize(interiorAngles(self), 3); let alpha = at(__SplVar23, 1); let beta = at(__SplVar23, 2); let gamma = at(__SplVar23, 3); fromTrilinearVertexMatrix(self,[[*(*(*(2, b), c), cos(alpha)), *(a, b), *(a, c)], [*(a, b), *(*(*(2, a), c), cos(beta)), *(b, c)], [*(a, c), *(b, c), *(*(*(2, a), b), cos(gamma))]]) }",
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
  "{ :self | triangleCentreA(self, { :a :b :c | csc((-(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :t | triangleCentreA(t, { :a :b :c | sin((-(a, pi(Fraction(1L, 3L))))) }) }",
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
  "{ :t | triangleCentreA(t, { :a :b :c | csc((-(a, pi(Fraction(1L, 6L))))) }) }",
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
  "{ :self | let __SplVar24 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SplVar24, 1); let b = at(__SplVar24, 2); let c = at(__SplVar24, 3); [euclideanDistance(b,c), euclideanDistance(c,a), euclideanDistance(a,b)] }",
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
  "{ :self | let __SplVar25 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SplVar25, 1); let b = at(__SplVar25, 2); let c = at(__SplVar25, 3); *(cross((-(b, a)),-(c, b)), 0.5) }",
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
  "{ :self | triangleCentreL(self, { :a :b :c | *(*(b, c), (+(b, c))) }) }",
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
    let __SplVar26 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _p1 = _at_2(__SplVar26, 1);
    let _p2 = _at_2(__SplVar26, 2);
    let _p3 = _at_2(__SplVar26, 3);
    let _u = _hyphenMinus_2(_p2, _p1);
    let _v = _hyphenMinus_2(_p3, _p1);
    /* Statements */
    return _cross_2(_u, _v);
  }, ["self"]),
  "{ :self | let __SplVar26 = assertIsOfSize(vertexCoordinates(self), 3); let p1 = at(__SplVar26, 1); let p2 = at(__SplVar26, 2); let p3 = at(__SplVar26, 3); let u = -(p2, p1); let v = -(p3, p1); cross(u,v) }",
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
  "{ :self | let __SplVar27 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar27, 1); let b = at(__SplVar27, 2); let c = at(__SplVar27, 3); fromTrilinearVertexMatrix(self,[[0, b, c], [a, 0, c], [a, b, 0]]) }",
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
  "{ :self | let __SplVar28 = assertIsOfSize(sideLengths(self), 3); let a = at(__SplVar28, 1); let b = at(__SplVar28, 2); let c = at(__SplVar28, 3); let __SplVar29 = assertIsOfSize(vertexCoordinates(self), 3); let p = at(__SplVar29, 1); let q = at(__SplVar29, 2); let r = at(__SplVar29, 3); [Circle(p, /((+(+(-(0, a), b), c)), 2)), Circle(q, /((+(-(a, b), c)), 2)), Circle(r, /((-(+(a, b), c)), 2))] }",
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
  "{ :self | let __SplVar30 = assertIsOfSize(interiorAngles(self), 3); let a = at(__SplVar30, 1); let b = at(__SplVar30, 2); let c = at(__SplVar30, 3); fromTrilinearVertexMatrix(self,[[-(0, a), b, c], [a, -(0, b), c], [a, b, -(0, c)]]) }",
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
    let __SplVar31 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SplVar31, 1);
    let _b = _at_2(__SplVar31, 2);
    let _c = _at_2(__SplVar31, 3);
    /* Statements */
    return _toBarycentricCoordinates_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SplVar31 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SplVar31, 1); let b = at(__SplVar31, 2); let c = at(__SplVar31, 3); toBarycentricCoordinates(a, b, c) }",
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
  "{ :self | let __SplVar32 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SplVar32, 1); let b = at(__SplVar32, 2); let c = at(__SplVar32, 3); let v = sideLengths(self); let f:/1 = toBarycentricCoordinates(a, b, c); { :x | /(f(x), v) } }",
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
  "{ :self :operand | Triangle(vertexCoordinates(translate(asPolygon(self),operand))) }",
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
  "{ :self :p:/1 :f:/3 | let __SplVar33 = assertIsOfSize(p(self), 3); let a = at(__SplVar33, 1); let b = at(__SplVar33, 2); let c = at(__SplVar33, 3); let alpha = f(a, b, c); let beta = f(b, c, a); let gamma = f(c, a, b); fromTrilinearCoordinates(self,[alpha, beta, gamma]) }",
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
    let __SplVar34 = _assertIsOfSize_2(_self, 3);
    let __SplUnused41 = _at_2(__SplVar34, 1);
    let _p = _at_2(__SplVar34, 2);
    let __SplUnused42 = _at_2(__SplVar34, 3);
    let _a = _planarAngle_1(_self);
    /* Statements */
    return _InfiniteLine_2(_p, _fromPolarCoordinates_1([1, _solidus_2(_a, 2)]));
  }, ["self"]),
  "{ :self | let __SplVar34 = assertIsOfSize(self, 3); let _ = at(__SplVar34, 1); let p = at(__SplVar34, 2); let _ = at(__SplVar34, 3); let a = planarAngle(self); InfiniteLine(p, fromPolarCoordinates([1, /(a, 2)])) }",
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
  "{ :self | let __SplVar35 = assertIsOfSize(self, 3); let a = at(__SplVar35, 1); let b = at(__SplVar35, 2); let c = at(__SplVar35, 3); let __SplVar36 = assertIsOfSize(a, 2); let ax = at(__SplVar36, 1); let ay = at(__SplVar36, 2); let __SplVar37 = assertIsOfSize(b, 2); let bx = at(__SplVar37, 1); let by = at(__SplVar37, 2); let __SplVar38 = assertIsOfSize(c, 2); let cx = at(__SplVar38, 1); let cy = at(__SplVar38, 2); let ad = +((*(ax, ax)), (*(ay, ay))); let bd = +((*(bx, bx)), (*(by, by))); let cd = +((*(cx, cx)), (*(cy, cy))); let d = *(2, (+(+((*(ax, (-(by, cy)))), (*(bx, (-(cy, ay))))), (*(cx, (-(ay, by))))))); let center = [*(/(1, d), (+(+((*(ad, (-(by, cy)))), (*(bd, (-(cy, ay))))), (*(cd, (-(ay, by))))))), *(/(1, d), (+(+((*(ad, (-(cx, bx)))), (*(bd, (-(ax, cx))))), (*(cd, (-(bx, ax)))))))]; let radius = euclideanDistance(center,anyOne(self)); Circle(center, radius) }",
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
  "{ :self | let __SplVar39 = assertIsOfSize(self, 3); let a = at(__SplVar39, 1); let b = at(__SplVar39, 2); let c = at(__SplVar39, 3); [midpoint([b, c]), midpoint([c, a]), midpoint([a, b])] }",
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
      _asterisk_2(_a, _csc_1(_alpha)),
      _sin_1(_plusSign_2(_alpha, _beta)),
    );
    let _x3 = _asterisk_2(_asterisk_2(_a, _cot_1(_alpha)), _sin_1(_beta));
    let _y3 = _asterisk_2(_a, _sin_1(_beta));
    /* Statements */
    return _Triangle_1([[0, 0], [_x2, 0], [_x3, _y3]]);
  }, ["alpha", "beta", "a"]),
  "{ :alpha :beta :a | let x2 = *(*(a, csc(alpha)), sin((+(alpha, beta)))); let x3 = *(*(a, cot(alpha)), sin(beta)); let y3 = *(a, sin(beta)); Triangle([[0, 0], [x2, 0], [x3, y3]]) }",
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
  "{ :alpha :c :beta | let x = *(*(cos(alpha), csc((+(alpha, beta)))), sin(beta)); let y = *(*(sin(alpha), csc((+(alpha, beta)))), sin(beta)); Triangle([0, 0], [c, 0], [*(c, x), *(c, y)]) }",
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
  "{ :self | let __SplVar40 = assertIsOfSize(self, 3); let a = at(__SplVar40, 1); let b = at(__SplVar40, 2); let c = at(__SplVar40, 3); sssTriangle(a, b, c) }",
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
  "{ :n | { :t | caseOf(n, [->(1, { incenter(t) }), ->(2, { centroid(t) }), ->(3, { circumcenter(t) }), ->(4, { orthocenter(t) }), ->(5, { ninePointCenter(t) }), ->(6, { symmedianPoint(t) }), ->(7, { gergonnePoint(t) }), ->(8, { nagelPoint(t) }), ->(9, { mittenpunkt(t) }), ->(10, { spiekerCenter(t) }), ->(11, { feuerbachPoint(t) }), ->(12, { triangleCentreA(t, { :a :b :c | +(1, cos((-(b, c)))) }) }), ->(13, { firstFermatPoint(t) }), ->(14, { secondFermatPoint(t) }), ->(15, { firstIsodynamicPoint(t) }), ->(16, { secondIsodynamicPoint(t) }), ->(17, { firstNapoleonPoint(t) }), ->(18, { secondNapoleonPoint(t) }), ->(19, { clawsonPoint(t) }), ->(20, { deLongchampsPoint(t) }), ->(21, { schifflerPoint(t) }), ->(22, { exeterPoint(t) }), ->(23, { farOutPoint(t) }), ->(30, { eulerInfinityPoint(t) }), ->(39, { brocardMidpoint(t) }), ->(40, { bevanPoint(t) }), ->(175, { isoperimetricPoint(t) }), ->(176, { equalDetourPoint(t) }), ->(182, { triangleCentreL(t, { :a :b :c | /((-(+((*(square(a), (+(square(b), square(c))))), (*(*(2, square(b)), square(c)))), (^(a, 4)))), (*(b, c))) }) }), ->(187, { schouteCenter(t) })], { error(n,'kimberlingCenter: unknown n') }) } }",
);
