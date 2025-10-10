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
    let __SplVar1 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let _u = _at_2(__SplVar1, 1);
    let _v = _at_2(__SplVar1, 2);
    let _b = _at_2(_u, 1);
    let _h = _hyphenMinus_2(_at_2(_v, 2), _at_2(_o, 2));
    /* Statements */
    return _asterisk_2(_b, _h);
  }, ["self"]),
  "{ :self |\n\t\tlet o = self.origin;\n\t\tlet [u, v] = self.vectors;\n\t\tlet b = u[1];\n\t\tlet h = v[2] - o[2];\n\t\tb * h\n\t}",
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
  "{ :self |\n\t\tPolygon(self.vertexCoordinates)\n\t}",
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
  "{ :self |\n\t\tself.asPolygon.boundingBox\n\t}",
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
  "{ :self |\n\t\t2\n\t}",
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
  "{ :self |\n\t\tself.origin.size\n\t}",
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
    let __SplVar2 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let __SplUnused4 = _at_2(__SplVar2, 1);
    let _v = _at_2(__SplVar2, 2);
    /* Statements */
    return _hyphenMinus_2(_at_2(_v, 2), _at_2(_o, 2));
  }, ["self"]),
  "{ :self |\n\t\tlet o = self.origin;\n\t\tlet [_, v] = self.vectors;\n\t\tv[2] - o[2]\n\t}",
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
  "{ :self :options |\n\t\tself.asPolygon.svgFragment(options)\n\t}",
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
    let __SplVar3 = _assertIsOfSize_2(_vectors_1(_self), 2);
    let _u = _at_2(__SplVar3, 1);
    let _v = _at_2(__SplVar3, 2);
    let _a = _o;
    let _b = _plusSign_2(_a, _u);
    let _c = _plusSign_2(_b, _v);
    let _d = _plusSign_2(_a, _v);
    /* Statements */
    return [_a, _b, _c, _d];
  }, ["self"]),
  "{ :self |\n\t\tlet o = self.origin;\n\t\tlet [u, v] = self.vectors;\n\t\tlet a = o;\n\t\tlet b = a + u;\n\t\tlet c = b + v;\n\t\tlet d = a + v;\n\t\t[a, b, c, d]\n\t}",
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
  "{ :self :vectors |\n\t\tnewParallelogram().initializeSlots(self, vectors)\n\t}",
);
