sl.addType(
  false,
  "Parallelogram",
  "Parallelogram",
  ["Object", "Equatable", "Geometry"],
  ["origin", "vectors"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Parallelogram",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
    let _o = _origin_1(_self);
    let __SPL1 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let _u = _at_2(__SPL1, 1);
    let _v = _at_2(__SPL1, 2);
    let _b = _at_2(_u, 1);
    let _h = _hyphenMinus_2(_at_2(_v, 2), _at_2(_o, 2));
    /* Statements */
    return _asterisk_2(_b, _h);
  }, ["self"]),
  "{ :self | let o = origin(self); let __SPL1 = assertIsOfSize(vectors(self), 2); let u = at(__SPL1, 1); let v = at(__SPL1, 2); let b = at(u, 1); let h = -(at(v, 2), at(o, 2)); *(b, h) }",
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
    } /* Temporaries */
    let _o = _origin_1(_self);
    let __SPL2 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let __genSym4 = _at_2(__SPL2, 1);
    let _v = _at_2(__SPL2, 2);
    /* Statements */
    return _hyphenMinus_2(_at_2(_v, 2), _at_2(_o, 2));
  }, ["self"]),
  "{ :self | let o = origin(self); let __SPL2 = assertIsOfSize(vectors(self), 2); let _ = at(__SPL2, 1); let v = at(__SPL2, 2); -(at(v, 2), at(o, 2)) }",
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
    let _o = _origin_1(_self);
    let __SPL3 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let _u = _at_2(__SPL3, 1);
    let _v = _at_2(__SPL3, 2);
    let _a = _o;
    let _b = _plusSign_2(_a, _u);
    let _c = _plusSign_2(_b, _v);
    let _d = _plusSign_2(_a, _v);
    /* Statements */
    return [_a, _b, _c, _d];
  }, ["self"]),
  "{ :self | let o = origin(self); let __SPL3 = assertIsOfSize(vectors(self), 2); let u = at(__SPL3, 1); let v = at(__SPL3, 2); let a = o; let b = +(a, u); let c = +(b, v); let d = +(a, v); [a, b, c, d] }",
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
