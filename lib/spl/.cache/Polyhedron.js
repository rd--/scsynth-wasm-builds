/*  Requires: PolygonMesh  */

sl.addType(
  false,
  "Polyhedron",
  "Polyhedron",
  ["Object", "PolygonMesh"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Polyhedron",
);

sl.copyTraitMethodsToType(
  "PolygonMesh",
  "Polyhedron",
);

sl.addMethodToExistingType(
  "Polyhedron",
  "Polyhedron",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolygonMesh_2(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
      _faceIndices_1(_self),
    );
  }, ["self", "projection"]),
  "{ :self :projection | PolygonMesh(collect(vertexCoordinates(self),asUnaryBlock(projection)), faceIndices(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "Cuboid",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _hyphenMinus_2(_q, _p);
    let _c = _unitCube_1([0.5, 0.5, 0.5]);
    /* Statements */
    return _Polyhedron_2(
      _collect_2(
        _vertexCoordinates_1(_c),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_asterisk_2(_each, _m), _p);
        }, ["each"]),
      ),
      _faceIndices_1(_c),
    );
  }, ["p", "q"]),
  "{ :p :q | let m = -(q, p); let c = unitCube([0.5, 0.5, 0.5]); Polyhedron(collect(vertexCoordinates(c), { :each | +((*(each, m)), p) }), faceIndices(c)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "Polyhedron",
  ["vertexCoordinates", "faceIndices"],
  sl.annotateFunction(function (_vertexCoordinates, _faceIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _vertexCoordinates, _faceIndices";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPolyhedron_0(),
      _vertexCoordinates,
      _faceIndices,
    );
  }, ["vertexCoordinates", "faceIndices"]),
  "{ :vertexCoordinates :faceIndices | initializeSlots(newPolyhedron(),vertexCoordinates, faceIndices) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "unitCube",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(
      _plusSign_2(
        _hyphenMinus_2([
          [0, 0, 0],
          [1, 0, 0],
          [1, 1, 0],
          [0, 1, 0],
          [0, 0, 1],
          [1, 0, 1],
          [1, 1, 1],
          [0, 1, 1],
        ], 0.5),
        _center,
      ),
      _plusSign_2([[0, 1, 2, 3], [4, 5, 6, 7], [2, 3, 7, 6], [0, 1, 5, 4], [
        0,
        4,
        7,
        3,
      ], [1, 2, 6, 5]], 1),
    );
  }, ["center"]),
  "{ :center | Polyhedron(+(-([[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], 0.5), center), +([[0, 1, 2, 3], [4, 5, 6, 7], [2, 3, 7, 6], [0, 1, 5, 4], [0, 4, 7, 3], [1, 2, 6, 5]], 1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "unitDodecahedron",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(
      _plusSign_2([
        [-1.37638, 0, 0.262866],
        [1.37638, 0, -0.262866],
        [-0.425325, -1.30902, 0.262866],
        [-0.425325, 1.30902, 0.262866],
        [1.11352, -0.809017, 0.262866],
        [1.11352, 0.809017, 0.262866],
        [-0.262866, -0.809017, 1.11352],
        [-0.262866, 0.809017, 1.11352],
        [-0.688191, -0.5, -1.11352],
        [-0.688191, 0.5, -1.11352],
        [0.688191, -0.5, 1.11352],
        [0.688191, 0.5, 1.11352],
        [0.850651, 0, -1.11352],
        [-1.11352, -0.809017, -0.262866],
        [-1.11352, 0.809017, -0.262866],
        [-0.850651, 0, 1.11352],
        [0.262866, -0.809017, -1.11352],
        [0.262866, 0.809017, -1.11352],
        [0.425325, -1.30902, -0.262866],
        [0.425325, 1.30902, -0.262866],
      ], _center),
      [
        [15, 10, 9, 14, 1],
        [2, 6, 12, 11, 5],
        [5, 11, 7, 3, 19],
        [11, 12, 8, 16, 7],
        [12, 6, 20, 4, 8],
        [6, 2, 13, 18, 20],
        [2, 5, 19, 17, 13],
        [4, 20, 18, 10, 15],
        [18, 13, 17, 9, 10],
        [17, 19, 3, 14, 9],
        [3, 7, 16, 1, 14],
        [16, 8, 4, 15, 1],
      ],
    );
  }, ["center"]),
  "{ :center | Polyhedron(+([[-1.37638, 0, 0.262866], [1.37638, 0, -0.262866], [-0.425325, -1.30902, 0.262866], [-0.425325, 1.30902, 0.262866], [1.11352, -0.809017, 0.262866], [1.11352, 0.809017, 0.262866], [-0.262866, -0.809017, 1.11352], [-0.262866, 0.809017, 1.11352], [-0.688191, -0.5, -1.11352], [-0.688191, 0.5, -1.11352], [0.688191, -0.5, 1.11352], [0.688191, 0.5, 1.11352], [0.850651, 0, -1.11352], [-1.11352, -0.809017, -0.262866], [-1.11352, 0.809017, -0.262866], [-0.850651, 0, 1.11352], [0.262866, -0.809017, -1.11352], [0.262866, 0.809017, -1.11352], [0.425325, -1.30902, -0.262866], [0.425325, 1.30902, -0.262866]], center), [[15, 10, 9, 14, 1], [2, 6, 12, 11, 5], [5, 11, 7, 3, 19], [11, 12, 8, 16, 7], [12, 6, 20, 4, 8], [6, 2, 13, 18, 20], [2, 5, 19, 17, 13], [4, 20, 18, 10, 15], [18, 13, 17, 9, 10], [17, 19, 3, 14, 9], [3, 7, 16, 1, 14], [16, 8, 4, 15, 1]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "unitIcosahedron",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2([
      [0, 0, -0.951057],
      [0, 0, 0.951057],
      [-0.850651, 0, -0.425325],
      [0.850651, 0, 0.425325],
      [0.688191, -0.5, -0.425325],
      [0.688191, 0.5, -0.425325],
      [-0.688191, -0.5, 0.425325],
      [-0.688191, 0.5, 0.425325],
      [-0.262866, -0.809017, -0.425325],
      [-0.262866, 0.809017, -0.425325],
      [0.262866, -0.809017, 0.425325],
      [0.262866, 0.809017, 0.425325],
    ], [
      [2, 12, 8],
      [2, 8, 7],
      [2, 7, 11],
      [2, 11, 4],
      [2, 4, 12],
      [5, 9, 1],
      [6, 5, 1],
      [10, 6, 1],
      [3, 10, 1],
      [9, 3, 1],
      [12, 10, 8],
      [8, 3, 7],
      [7, 9, 11],
      [11, 5, 4],
      [4, 6, 12],
      [5, 11, 9],
      [6, 4, 5],
      [10, 12, 6],
      [3, 8, 10],
      [9, 7, 3],
    ]);
  }, ["center"]),
  "{ :center | Polyhedron([[0, 0, -0.951057], [0, 0, 0.951057], [-0.850651, 0, -0.425325], [0.850651, 0, 0.425325], [0.688191, -0.5, -0.425325], [0.688191, 0.5, -0.425325], [-0.688191, -0.5, 0.425325], [-0.688191, 0.5, 0.425325], [-0.262866, -0.809017, -0.425325], [-0.262866, 0.809017, -0.425325], [0.262866, -0.809017, 0.425325], [0.262866, 0.809017, 0.425325]], [[2, 12, 8], [2, 8, 7], [2, 7, 11], [2, 11, 4], [2, 4, 12], [5, 9, 1], [6, 5, 1], [10, 6, 1], [3, 10, 1], [9, 3, 1], [12, 10, 8], [8, 3, 7], [7, 9, 11], [11, 5, 4], [4, 6, 12], [5, 11, 9], [6, 4, 5], [10, 12, 6], [3, 8, 10], [9, 7, 3]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "unitOctahedron",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(
      _plusSign_2(
        _asterisk_2([[-1, 0, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [0, -1, 0], [
          1,
          0,
          0,
        ]], 0.707107),
        _center,
      ),
      [[4, 5, 6], [4, 6, 2], [4, 2, 1], [4, 1, 5], [5, 1, 3], [5, 3, 6], [
        3,
        1,
        2,
      ], [6, 3, 2]],
    );
  }, ["center"]),
  "{ :center | Polyhedron(+(*([[-1, 0, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [0, -1, 0], [1, 0, 0]], 0.707107), center), [[4, 5, 6], [4, 6, 2], [4, 2, 1], [4, 1, 5], [5, 1, 3], [5, 3, 6], [3, 1, 2], [6, 3, 2]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Polyhedron",
  "unitTetrahedron",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(
      _plusSign_2([[0, 0, 0.612372], [-0.288675, -0.5, -0.204124], [
        -0.288675,
        0.5,
        -0.204124,
      ], [0.57735, 0, -0.204124]], _center),
      [[2, 3, 4], [3, 2, 1], [4, 1, 2], [1, 4, 3]],
    );
  }, ["center"]),
  "{ :center | Polyhedron(+([[0, 0, 0.612372], [-0.288675, -0.5, -0.204124], [-0.288675, 0.5, -0.204124], [0.57735, 0, -0.204124]], center), [[2, 3, 4], [3, 2, 1], [4, 1, 2], [1, 4, 3]]) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Polyhedron",
  "fradinPolyhedraCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "FradinPolyhedraCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'FradinPolyhedraCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Polyhedron",
  "holmesPolyhedraCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "HolmesPolyhedraCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'HolmesPolyhedraCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Polyhedron",
  "levskayaPolyhedraCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "LevskayaPolyhedraCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'LevskayaPolyhedraCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "Polyhedron",
  "mcClurePolyhedraCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "McClurePolyhedraCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'McClurePolyhedraCatalogue') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "FradinPolyhedraCatalogue"],
      ["category", "Geometry/Polyhedron"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/fradin/FradinPolyhedraCatalogue.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _Polyhedron_2(
                _at_2(_each, "vertex"),
                _plusSign_2(_catenate_1(_at_2(_each, "face")), 1),
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "HolmesPolyhedraCatalogue"],
      ["category", "Geometry/Polyhedron"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/holmes/HolmesPolyhedraCatalogue.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _Polyhedron_2(
                _at_2(_each, "vertexCoordinates"),
                _plusSign_2(_at_2(_each, "faceIndices"), 1),
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "LevskayaPolyhedraCatalogue"],
      ["category", "Geometry/Polyhedron"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/levskaya/LevskayaPolyhedraCatalogue.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _Polyhedron_2(
                _at_2(_each, "vertexCoordinates"),
                _plusSign_2(_at_2(_each, "faceIndices"), 1),
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "McClurePolyhedraCatalogue"],
      ["category", "Geometry/Polyhedron"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/mclure/mcClurePolyhedraCatalogue.json",
      ],
      ["mimeType", "application/json"],
      [
        "parser",
        sl.annotateFunction(function (_libraryItem) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _libraryItem";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _libraryItem,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _Polyhedron_2(
                _at_2(_each, "vertexCoordinates"),
                _plusSign_2(_at_2(_each, "faceIndices"), 1),
              );
            }, ["each"]),
          );
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
