sl.addType(
  false,
  "Parallelepiped",
  "Parallelepiped",
  ["Object", "Geometry"],
  ["origin", "vectorList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Parallelepiped",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Parallelepiped",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_1(_asPolyhedron_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asPolyhedron.asPerspectiveDrawing\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "asPolyhedron",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(_vertexCoordinates_1(_self), _faceIndices_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPolyhedron(\n\t\t\tself.vertexCoordinates,\n\t\t\tself.faceIndices\n\t\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vectorList_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vectorList.size\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
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
  "Parallelepiped",
  "Parallelepiped",
  "faceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [[4, 3, 2, 1], [1, 2, 5, 6], [2, 3, 8, 5], [3, 4, 7, 8], [
      4,
      1,
      6,
      7,
    ], [6, 5, 8, 7]];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\t4 3 2 1;\n\t\t\t1 2 5 6;\n\t\t\t2 3 8 5;\n\t\t\t3 4 7 8;\n\t\t\t4 1 6 7;\n\t\t\t6 5 8 7\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _project_2(_asPolyhedron_1(_self), _projection);
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tself.asPolyhedron.project(projection)\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _o = _origin_1(_self);
    let __SplVar1 = _assertIsOfSize_2(_vectorList_1(_self), 3);
    let _v1 = _at_2(__SplVar1, 1);
    let _v2 = _at_2(__SplVar1, 2);
    let _v3 = _at_2(__SplVar1, 3);
    /* Statements */
    return _plusSign_2([
      [0, 0, 0],
      _v1,
      _plusSign_2(_v1, _v2),
      _v2,
      _plusSign_2(_v1, _v3),
      _v3,
      _plusSign_2(_v2, _v3),
      _plusSign_2(_plusSign_2(_v1, _v2), _v3),
    ], [_o]);
  }, ["self"]),
  "{ :self |\n\t\tlet o = self.origin;\n\t\tlet [v1, v2, v3] = self.vectorList;\n\t\t[\n\t\t\t[0 0 0],\n\t\t\tv1, v1 + v2,\n\t\t\tv2, v1 + v3,\n\t\t\tv3, v2 + v3,\n\t\t\tv1 + v2 + v3\n\t\t] + [o]\n\t}",
);

sl.addMethodToExistingType(
  "Parallelepiped",
  "Parallelepiped",
  "volume",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_determinant_1(_vectorList_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vectorList.determinant.abs\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Parallelepiped",
  "Parallelepiped",
  ["origin", "vectorList"],
  sl.annotateFunction(function (_origin, _vectorList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _origin, _vectorList";
      throw new Error(errorMessage);
    } /* Statements */
    _assertIsOfSize_2(_origin, 3);
    _assertIsOfShape_2(_vectorList, [3, 3]);
    return _initializeSlots_3(_newParallelepiped_0(), _origin, _vectorList);
  }, ["origin", "vectorList"]),
  "{ :origin :vectorList |\n\t\torigin.assertIsOfSize(3);\n\t\tvectorList.assertIsOfShape([3 3]);\n\t\tnewParallelepiped().initializeSlots(origin, vectorList)\n\t}",
);
