/*  Requires: Polygon  */

sl.addType(
  false,
  "Triangle",
  "Triangle",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _forSvg_2(_asPolygon_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options | forSvg(asPolygon(self),options) }",
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
  "heronsFormula",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL166 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SPL166, 1);
    let _b = _at_2(__SPL166, 2);
    let _c = _at_2(__SPL166, 3);
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
  "{ :self | let __SPL166 = assertIsOfSize(sideLengths(self), 3); let a = at(__SPL166, 1); let b = at(__SPL166, 2); let c = at(__SPL166, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((*(*(*(s, (-(s, a))), (-(s, b))), (-(s, c))))) }",
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
    let __SPL167 = _assertIsOfSize_2(_sideLengths_1(_self), 3);
    let _a = _at_2(__SPL167, 1);
    let _b = _at_2(__SPL167, 2);
    let _c = _at_2(__SPL167, 3);
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
  "{ :self | let __SPL167 = assertIsOfSize(sideLengths(self), 3); let a = at(__SPL167, 1); let b = at(__SPL167, 2); let c = at(__SPL167, 3); let s = *((+(+(a, b), c)), 0.5); sqrt((/((*(*((-(s, a)), (-(s, b))), (-(s, c)))), s))) }",
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
    let __SPL168 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL168, 1);
    let _b = _at_2(__SPL168, 2);
    let _c = _at_2(__SPL168, 3);
    /* Statements */
    return [
      _euclideanDistance_2(_b, _c),
      _euclideanDistance_2(_c, _a),
      _euclideanDistance_2(_a, _b),
    ];
  }, ["self"]),
  "{ :self | let __SPL168 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL168, 1); let b = at(__SPL168, 2); let c = at(__SPL168, 3); [euclideanDistance(b,c), euclideanDistance(c,a), euclideanDistance(a,b)] }",
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
    let __SPL169 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL169, 1);
    let _b = _at_2(__SPL169, 2);
    let _c = _at_2(__SPL169, 3);
    /* Statements */
    return _asterisk_2(
      _cross_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_c, _b)),
      0.5,
    );
  }, ["self"]),
  "{ :self | let __SPL169 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL169, 1); let b = at(__SPL169, 2); let c = at(__SPL169, 3); *(cross((-(b, a)),-(c, b)), 0.5) }",
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
    let __SPL170 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _p1 = _at_2(__SPL170, 1);
    let _p2 = _at_2(__SPL170, 2);
    let _p3 = _at_2(__SPL170, 3);
    let _u = _hyphenMinus_2(_p2, _p1);
    let _v = _hyphenMinus_2(_p3, _p1);
    /* Statements */
    return _cross_2(_u, _v);
  }, ["self"]),
  "{ :self | let __SPL170 = assertIsOfSize(vertexCoordinates(self), 3); let p1 = at(__SPL170, 1); let p2 = at(__SPL170, 2); let p3 = at(__SPL170, 3); let u = -(p2, p1); let v = -(p3, p1); cross(u,v) }",
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
    let __SPL171 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 3);
    let _a = _at_2(__SPL171, 1);
    let _b = _at_2(__SPL171, 2);
    let _c = _at_2(__SPL171, 3);
    /* Statements */
    return _toBarycentricCoordinates_3(_a, _b, _c);
  }, ["self"]),
  "{ :self | let __SPL171 = assertIsOfSize(vertexCoordinates(self), 3); let a = at(__SPL171, 1); let b = at(__SPL171, 2); let c = at(__SPL171, 3); toBarycentricCoordinates(a, b, c) }",
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
  "circumcircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL172 = _assertIsOfSize_2(_self, 3);
    let _a = _at_2(__SPL172, 1);
    let _b = _at_2(__SPL172, 2);
    let _c = _at_2(__SPL172, 3);
    let __SPL173 = _assertIsOfSize_2(_a, 2);
    let _ax = _at_2(__SPL173, 1);
    let _ay = _at_2(__SPL173, 2);
    let __SPL174 = _assertIsOfSize_2(_b, 2);
    let _bx = _at_2(__SPL174, 1);
    let _by = _at_2(__SPL174, 2);
    let __SPL175 = _assertIsOfSize_2(_c, 2);
    let _cx = _at_2(__SPL175, 1);
    let _cy = _at_2(__SPL175, 2);
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
  "{ :self | let __SPL172 = assertIsOfSize(self, 3); let a = at(__SPL172, 1); let b = at(__SPL172, 2); let c = at(__SPL172, 3); let __SPL173 = assertIsOfSize(a, 2); let ax = at(__SPL173, 1); let ay = at(__SPL173, 2); let __SPL174 = assertIsOfSize(b, 2); let bx = at(__SPL174, 1); let by = at(__SPL174, 2); let __SPL175 = assertIsOfSize(c, 2); let cx = at(__SPL175, 1); let cy = at(__SPL175, 2); let ad = +((*(ax, ax)), (*(ay, ay))); let bd = +((*(bx, bx)), (*(by, by))); let cd = +((*(cx, cx)), (*(cy, cy))); let d = *(2, (+(+((*(ax, (-(by, cy)))), (*(bx, (-(cy, ay))))), (*(cx, (-(ay, by))))))); let center = [*(/(1, d), (+(+((*(ad, (-(by, cy)))), (*(bd, (-(cy, ay))))), (*(cd, (-(ay, by))))))), *(/(1, d), (+(+((*(ad, (-(cx, bx)))), (*(bd, (-(ax, cx))))), (*(cd, (-(bx, ax)))))))]; let radius = euclideanDistance(center,anyOne(self)); Circle(center, radius) }",
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
  }, ["a", "b", "c"]),
  "{ :a :b :c | let y = /((+(+(negated((^(a, 2))), (^(b, 2))), (^(c, 2)))), (*(2, c))); let z = /(sqrt((*(*(*((-(+(a, b), c)), (+(-(a, b), c))), (+(+(negated(a), b), c))), (+(+(a, b), c))))), (*(2, c))); Triangle([0, 0], [c, 0], [y, z]) }",
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
