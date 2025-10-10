/*  Requires: PolygonMesh  */

sl.addType(
  false,
  "Polyhedron",
  "Polyhedron",
  ["Object", "Equatable", "Geometry", "PolygonMesh"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Polyhedron",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Polyhedron",
);

sl.copyTraitMethodsToType(
  "Geometry",
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
  "{ :self :projection |\n\t\tPolygonMesh(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock),\n\t\t\tself.faceIndices\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Polyhedron",
  "Polyhedron",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "Polyhedron",
  "Polyhedron",
  "translate",
  ["self", "v"],
  sl.annotateFunction(function (_self, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _v";
      throw new Error(errorMessage);
    } /* Statements */
    return _Polyhedron_2(
      _collect_2(
        _vertexCoordinates_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_each, _v);
        }, ["each"]),
      ),
      _faceIndices_1(_self),
    );
  }, ["self", "v"]),
  "{ :self :v |\n\t\tPolyhedron(\n\t\t\tself.vertexCoordinates.collect { :each | each + v },\n\t\t\tself.faceIndices\n\t\t)\n\t}",
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
  "{ :p :q |\n\t\tlet m = q - p;\n\t\tlet c = [0.5 0.5 0.5].unitCube;\n\t\tPolyhedron(\n\t\t\tc.vertexCoordinates.collect { :each |\n\t\t\t\t(each * m) + p\n\t\t\t},\n\t\t\tc.faceIndices\n\t\t)\n\t}",
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
  "{ :vertexCoordinates :faceIndices |\n\t\tnewPolyhedron().initializeSlots(vertexCoordinates, faceIndices)\n\t}",
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
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 0;\n\t\t\t\t1 0 0;\n\t\t\t\t1 1 0;\n\t\t\t\t0 1 0;\n\t\t\t\t0 0 1;\n\t\t\t\t1 0 1;\n\t\t\t\t1 1 1;\n\t\t\t\t0 1 1\n\t\t\t] - 0.5 + center,\n\t\t\t[\n\t\t\t\t0 1 2 3;\n\t\t\t\t4 5 6 7;\n\t\t\t\t2 3 7 6;\n\t\t\t\t0 1 5 4;\n\t\t\t\t0 4 7 3;\n\t\t\t\t1 2 6 5\n\t\t\t] + 1\n\t\t)\n\t}",
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
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t-1.37638 0 0.262866;\n\t\t\t\t1.37638 0 -0.262866;\n\t\t\t\t-0.425325 -1.30902 0.262866;\n\t\t\t\t-0.425325 1.30902 0.262866;\n\t\t\t\t1.11352 -0.809017 0.262866;\n\t\t\t\t1.11352 0.809017 0.262866;\n\t\t\t\t-0.262866 -0.809017 1.11352;\n\t\t\t\t-0.262866 0.809017 1.11352;\n\t\t\t\t-0.688191 -0.5 -1.11352;\n\t\t\t\t-0.688191 0.5 -1.11352;\n\t\t\t\t0.688191 -0.5 1.11352;\n\t\t\t\t0.688191 0.5 1.11352;\n\t\t\t\t0.850651 0 -1.11352;\n\t\t\t\t-1.11352 -0.809017 -0.262866;\n\t\t\t\t-1.11352 0.809017 -0.262866;\n\t\t\t\t-0.850651 0 1.11352;\n\t\t\t\t0.262866 -0.809017 -1.11352;\n\t\t\t\t0.262866 0.809017 -1.11352;\n\t\t\t\t0.425325 -1.30902 -0.262866;\n\t\t\t\t0.425325 1.30902 -0.262866\n\t\t\t] + center,\n\t\t\t[\n\t\t\t\t15 10 9 14 1;\n\t\t\t\t2 6 12 11 5;\n\t\t\t\t5 11 7 3 19;\n\t\t\t\t11 12 8 16 7;\n\t\t\t\t12 6 20 4 8;\n\t\t\t\t6 2 13 18 20;\n\t\t\t\t2 5 19 17 13;\n\t\t\t\t4 20 18 10 15;\n\t\t\t\t18 13 17 9 10;\n\t\t\t\t17 19 3 14 9;\n\t\t\t\t3 7 16 1 14;\n\t\t\t\t16 8 4 15 1\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 -0.951057;\n\t\t\t\t0 0 0.951057;\n\t\t\t\t-0.850651 0 -0.425325;\n\t\t\t\t0.850651 0 0.425325;\n\t\t\t\t0.688191 -0.5 -0.425325;\n\t\t\t\t0.688191 0.5 -0.425325;\n\t\t\t\t-0.688191 -0.5 0.425325;\n\t\t\t\t-0.688191 0.5 0.425325;\n\t\t\t\t-0.262866 -0.809017 -0.425325;\n\t\t\t\t-0.262866 0.809017 -0.425325;\n\t\t\t\t0.262866 -0.809017 0.425325;\n\t\t\t\t0.262866 0.809017 0.425325\n\t\t\t],\n\t\t\t[\n\t\t\t\t2 12 8;\n\t\t\t\t2 8 7;\n\t\t\t\t2 7 11;\n\t\t\t\t2 11 4;\n\t\t\t\t2 4 12;\n\t\t\t\t5 9 1;\n\t\t\t\t6 5 1;\n\t\t\t\t10 6 1;\n\t\t\t\t3 10 1;\n\t\t\t\t9 3 1;\n\t\t\t\t12 10 8;\n\t\t\t\t8 3 7;\n\t\t\t\t7 9 11;\n\t\t\t\t11 5 4;\n\t\t\t\t4 6 12;\n\t\t\t\t5 11 9;\n\t\t\t\t6 4 5;\n\t\t\t\t10 12 6;\n\t\t\t\t3 8 10;\n\t\t\t\t9 7 3\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t-1 0  0;\n\t\t\t\t0  1  0;\n\t\t\t\t0  0 -1;\n\t\t\t\t0  0  1;\n\t\t\t\t0 -1  0;\n\t\t\t\t1  0  0\n\t\t\t] * 0.707107 + center,\n\t\t\t[\n\t\t\t\t4 5 6;\n\t\t\t\t4 6 2;\n\t\t\t\t4 2 1;\n\t\t\t\t4 1 5;\n\t\t\t\t5 1 3;\n\t\t\t\t5 3 6;\n\t\t\t\t3 1 2;\n\t\t\t\t6 3 2\n\t\t\t]\n\t\t)\n\t}",
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
    } /* Temporaries */
    let _a = 1;
    let _halfA = _solidus_2(_a, 2);
    let _negativeHalfA = _hyphenMinus_2(0, _halfA);
    let _x = _asterisk_2(_asterisk_2(_Fraction_2(1n, 3n), _sqrt_1(3)), _a);
    let _r = _asterisk_2(_asterisk_2(_Fraction_2(1n, 12n), _sqrt_1(6)), _a);
    let _negativeR = _hyphenMinus_2(0, _r);
    let _capitalR = _asterisk_2(
      _asterisk_2(_Fraction_2(1n, 4n), _sqrt_1(6)),
      _a,
    );
    let _d = _asterisk_2(_asterisk_2(_Fraction_2(1n, 6n), _sqrt_1(3)), _a);
    let _negativeD = _hyphenMinus_2(0, _d);
    /* Statements */
    return _Polyhedron_2(
      _plusSign_2([
        [0, 0, _capitalR],
        [_negativeD, _negativeHalfA, _negativeR],
        [_negativeD, _halfA, _negativeR],
        [_x, 0, _negativeR],
      ], _center),
      [[2, 3, 4], [3, 2, 1], [4, 1, 2], [1, 4, 3]],
    );
  }, ["center"]),
  "{ :center |\n\t\tlet a = 1;\n\t\tlet halfA = a / 2;\n\t\tlet negativeHalfA = 0 - halfA;\n\t\tlet x = 1/3 * 3.sqrt * a;\n\t\tlet r = 1/12 * 6.sqrt * a;\n\t\tlet negativeR = 0 - r;\n\t\tlet capitalR = 1/4 * 6.sqrt * a;\n\t\tlet d = 1/6 * 3.sqrt * a;\n\t\tlet negativeD = 0 - d;\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 capitalR;\n\t\t\t\tnegativeD negativeHalfA negativeR;\n\t\t\t\tnegativeD halfA negativeR;\n\t\t\t\tx 0 negativeR\n\t\t\t] + center,\n\t\t\t[\n\t\t\t\t2 3 4;\n\t\t\t\t3 2 1;\n\t\t\t\t4 1 2;\n\t\t\t\t1 4 3\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'FradinPolyhedraCatalogue'\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'HolmesPolyhedraCatalogue'\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'LevskayaPolyhedraCatalogue'\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'McClurePolyhedraCatalogue'\n\t\t)\n\t}",
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
