sl.addType(
  false,
  "PolygonWithHoles",
  "PolygonWithHoles",
  ["Object", "Equatable", "Geometry"],
  ["outerVertexCoordinates", "innerVertexCoordinatesList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PolygonWithHoles",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PolygonWithHoles",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "PolygonWithHoles",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _o = _shoelaceFormula_1(_outerVertexCoordinates_1(_self));
    let _i = _collect_2(
      _innerVertexCoordinatesList_1(_self),
      _shoelaceFormula_1,
    );
    /* Statements */
    return _plusSign_2(_o, _sum_1(_i));
  }, ["self"]),
  "{ :self | let o = shoelaceFormula(outerVertexCoordinates(self)); let i = collect(innerVertexCoordinatesList(self),shoelaceFormula:/1); +(o, sum(i)) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_outerVertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | coordinateBoundingBox(outerVertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_outerVertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self | size(anyOne(outerVertexCoordinates(self))) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(
      _GeometryCollection_1(
        _collect_2(_vertexCoordinatesList_1(_self), _Polygon_1),
      ),
      _options,
    );
  }, ["self", "options"]),
  "{ :self :options | svgFragment(GeometryCollection(collect(vertexCoordinatesList(self),Polygon:/1)),options) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "innerPolygons",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_innerVertexCoordinatesList_1(_self), _Polygon_1);
  }, ["self"]),
  "{ :self | collect(innerVertexCoordinatesList(self),Polygon:/1) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "outerPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_outerVertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | Polygon(outerVertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _asUnaryBlock_1(_projection);
    /* Statements */
    return _PolygonWithHoles_2(
      _collect_2(_outerVertexCoordinates_1(_self), _f_1),
      _collect_2(
        _innerVertexCoordinatesList_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(_each, _f_1);
        }, ["each"]),
      ),
    );
  }, ["self", "projection"]),
  "{ :self :projection | let f:/1 = asUnaryBlock(projection); PolygonWithHoles(collect(outerVertexCoordinates(self),f:/1), collect(innerVertexCoordinatesList(self), { :each | collect(each,f:/1) })) }",
);

sl.addMethodToExistingType(
  "PolygonWithHoles",
  "PolygonWithHoles",
  "vertexCoordinatesList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSignPlusSign_2(
      [_outerVertexCoordinates_1(_self)],
      _innerVertexCoordinatesList_1(_self),
    );
  }, ["self"]),
  "{ :self | ++([outerVertexCoordinates(self)], innerVertexCoordinatesList(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolygonWithHoles",
  "PolygonWithHoles",
  ["o", "i"],
  sl.annotateFunction(function (_o, _i) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _o, _i";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPolygonWithHoles_0(), _o, _i);
  }, ["o", "i"]),
  "{ :o :i | initializeSlots(newPolygonWithHoles(),o, i) }",
);
