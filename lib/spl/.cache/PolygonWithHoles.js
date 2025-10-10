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
  "{ :self |\n\t\tlet o = self.outerVertexCoordinates.shoelaceFormula;\n\t\tlet i = self.innerVertexCoordinatesList.collect(shoelaceFormula:/1);\n\t\to + i.sum\n\t}",
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
  "{ :self |\n\t\tself.outerVertexCoordinates.coordinateBoundingBox\n\t}",
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
  "{ :self |\n\t\tself.outerVertexCoordinates.anyOne.size\n\t}",
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
  "{ :self :options |\n\t\tGeometryCollection(\n\t\t\tself.vertexCoordinatesList.collect(Polygon:/1)\n\t\t).svgFragment(options)\n\t}",
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
  "{ :self |\n\t\tself.innerVertexCoordinatesList.collect(Polygon:/1)\n\t}",
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
  "{ :self |\n\t\tPolygon(self.outerVertexCoordinates)\n\t}",
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
  "{ :self :projection |\n\t\tlet f:/1 = projection.asUnaryBlock;\n\t\tPolygonWithHoles(\n\t\t\tself.outerVertexCoordinates.collect(f:/1),\n\t\t\tself.innerVertexCoordinatesList.collect { :each |\n\t\t\t\teach.collect(f:/1)\n\t\t\t}\n\t\t)\n\t}",
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
  "{ :self |\n\t\t[self.outerVertexCoordinates] ++ self.innerVertexCoordinatesList\n\t}",
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
  "{ :o :i |\n\t\tnewPolygonWithHoles().initializeSlots(o, i)\n\t}",
);
