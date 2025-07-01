sl.addType(
  false,
  "Parallelogram",
  "Parallelogram",
  ["Object", "Geometry"],
  ["origin", "vectors"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Parallelogram",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Parallelogram",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _at_2(_at_2(_vectors_1(_self), 1), 1);
    let _h = _hyphenMinus_2(
      _at_2(_at_2(_vectors_1(_self), 2), 2),
      _at_2(_origin_1(_self), 2),
    );
    /* Statements */
    return _asterisk_2(_b, _h);
  }, ["self"]),
  "{ :self | let b = at(at(vectors(self), 1), 1); let h = -(at(at(vectors(self), 2), 2), at(origin(self), 2)); *(b, h) }",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
  "asPolygon",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | Polygon(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_asPolygon_1(_self));
  }, ["self"]),
  "{ :self | boundingBox(asPolygon(self)) }",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
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
  "Parallelogram",
  "Parallelogram",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_origin_1(_self));
  }, ["self"]),
  "{ :self | size(origin(self)) }",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _at_2(_at_2(_vectors_1(_self), 2), 2),
      _at_2(_origin_1(_self), 2),
    );
  }, ["self"]),
  "{ :self | -(at(at(vectors(self), 2), 2), at(origin(self), 2)) }",
);

sl.addMethodToExistingType(
  "Parallelogram",
  "Parallelogram",
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
  "Parallelogram",
  "Parallelogram",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _origin_1(_self);
    let _b = _plusSign_2(_a, _at_2(_vectors_1(_self), 1));
    let _c = _plusSign_2(_b, _at_2(_vectors_1(_self), 2));
    let _d = _plusSign_2(_a, _at_2(_vectors_1(_self), 2));
    /* Statements */
    return [_a, _b, _c, _d];
  }, ["self"]),
  "{ :self | let a = origin(self); let b = +(a, at(vectors(self), 1)); let c = +(b, at(vectors(self), 2)); let d = +(a, at(vectors(self), 2)); [a, b, c, d] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Parallelogram",
  "Parallelogram",
  ["self", "vectors"],
  sl.annotateFunction(function (_self, _vectors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vectors";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newParallelogram_0(), _self, _vectors);
  }, ["self", "vectors"]),
  "{ :self :vectors | initializeSlots(newParallelogram(),self, vectors) }",
);
