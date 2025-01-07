sl.addType(
  false,
  "Polyhedron",
  "Polyhedron",
  ["Object"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitToType(
  "Object",
  "Polyhedron",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "asGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Graph_2(_vertexList_1(_self), _edgeList_1(_self));
    /* Statements */
    _vertexCoordinates_2(_answer, _vertexCoordinates_1(_self));
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Graph(self.vertexList, self.edgeList);\n\t\tanswer.vertexCoordinates := self.vertexCoordinates;\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "asPerspectiveDrawing",
  ["self", "projection:/1"],
  function (_self, _projection_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection_1";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_2(_asGraph_1(_self), _projection_1);
  },
  "{ :self :projection:/1 |\n\t\tself.asGraph.asPerspectiveDrawing(projection:/1)\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_faceIndices_1(_self), _size_1));
  },
  "{ :self |\n\t\tself.faceIndices.collect(size:/1).sum\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "edgeLengths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_edgeCoordinates_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _arcLength_1(_Line_1(_each));
    });
  },
  "{ :self |\n\t\tself.edgeCoordinates.collect { :each |\n\t\t\teach.Line.arcLength\n\t\t}\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_faceIndices_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _size_1(_each), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(_answer, [
          _at_2(_each, _i),
          _atWrap_2(_each, _plusSign_2(_i, 1)),
        ]);
      });
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.faceIndices.do { :each |\n\t\t\t1.toDo(each.size) { :i |\n\t\t\t\tanswer.add(\n\t\t\t\t\t[\n\t\t\t\t\t\teach.at(i),\n\t\t\t\t\t\teach.atWrap(i + 1)\n\t\t\t\t\t]\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "edgeCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atAll_2(_vertexCoordinates, _each);
    });
  },
  "{ :self |\n\t\tlet vertexCoordinates = self.vertexCoordinates;\n\t\tself.edgeList.collect { :each |\n\t\t\tvertexCoordinates.atAll(each)\n\t\t}\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "faceCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_faceIndices_1(_self));
  },
  "{ :self |\n\t\tself.faceIndices.size\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
);

sl.addMethod(
  "Polyhedron",
  "Polyhedron",
  "vertexList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _vertexCount_1(_self)));
  },
  "{ :self |\n\t\t[1 .. self.vertexCount]\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "unitCube",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
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
  },
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 0;\n\t\t\t\t1 0 0;\n\t\t\t\t1 1 0;\n\t\t\t\t0 1 0;\n\t\t\t\t0 0 1;\n\t\t\t\t1 0 1;\n\t\t\t\t1 1 1;\n\t\t\t\t0 1 1\n\t\t\t] - 0.5 + center,\n\t\t\t[\n\t\t\t\t0 1 2 3;\n\t\t\t\t4 5 6 7;\n\t\t\t\t2 3 7 6;\n\t\t\t\t0 1 5 4;\n\t\t\t\t0 4 7 3;\n\t\t\t\t1 2 6 5\n\t\t\t] + 1\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "unitDodecahedron",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
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
  },
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t-1.37638 0 0.262866;\n\t\t\t\t1.37638 0 -0.262866;\n\t\t\t\t-0.425325 -1.30902 0.262866;\n\t\t\t\t-0.425325 1.30902 0.262866;\n\t\t\t\t1.11352 -0.809017 0.262866;\n\t\t\t\t1.11352 0.809017 0.262866;\n\t\t\t\t-0.262866 -0.809017 1.11352;\n\t\t\t\t-0.262866 0.809017 1.11352;\n\t\t\t\t-0.688191 -0.5 -1.11352;\n\t\t\t\t-0.688191 0.5 -1.11352;\n\t\t\t\t0.688191 -0.5 1.11352;\n\t\t\t\t0.688191 0.5 1.11352;\n\t\t\t\t0.850651 0 -1.11352;\n\t\t\t\t-1.11352 -0.809017 -0.262866;\n\t\t\t\t-1.11352 0.809017 -0.262866;\n\t\t\t\t-0.850651 0 1.11352;\n\t\t\t\t0.262866 -0.809017 -1.11352;\n\t\t\t\t0.262866 0.809017 -1.11352;\n\t\t\t\t0.425325 -1.30902 -0.262866;\n\t\t\t\t0.425325 1.30902 -0.262866\n\t\t\t] + center,\n\t\t\t[\n\t\t\t\t15 10 9 14 1;\n\t\t\t\t2 6 12 11 5;\n\t\t\t\t5 11 7 3 19;\n\t\t\t\t11 12 8 16 7;\n\t\t\t\t12 6 20 4 8;\n\t\t\t\t6 2 13 18 20;\n\t\t\t\t2 5 19 17 13;\n\t\t\t\t4 20 18 10 15;\n\t\t\t\t18 13 17 9 10;\n\t\t\t\t17 19 3 14 9;\n\t\t\t\t3 7 16 1 14;\n\t\t\t\t16 8 4 15 1\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "unitIcosahedron",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
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
  },
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 -0.951057;\n\t\t\t\t0 0 0.951057;\n\t\t\t\t-0.850651 0 -0.425325;\n\t\t\t\t0.850651 0 0.425325;\n\t\t\t\t0.688191 -0.5 -0.425325;\n\t\t\t\t0.688191 0.5 -0.425325;\n\t\t\t\t-0.688191 -0.5 0.425325;\n\t\t\t\t-0.688191 0.5 0.425325;\n\t\t\t\t-0.262866 -0.809017 -0.425325;\n\t\t\t\t-0.262866 0.809017 -0.425325;\n\t\t\t\t0.262866 -0.809017 0.425325;\n\t\t\t\t0.262866 0.809017 0.425325\n\t\t\t],\n\t\t\t[\n\t\t\t\t2 12 8;\n\t\t\t\t2 8 7;\n\t\t\t\t2 7 11;\n\t\t\t\t2 11 4;\n\t\t\t\t2 4 12;\n\t\t\t\t5 9 1;\n\t\t\t\t6 5 1;\n\t\t\t\t10 6 1;\n\t\t\t\t3 10 1;\n\t\t\t\t9 3 1;\n\t\t\t\t12 10 8;\n\t\t\t\t8 3 7;\n\t\t\t\t7 9 11;\n\t\t\t\t11 5 4;\n\t\t\t\t4 6 12;\n\t\t\t\t5 11 9;\n\t\t\t\t6 4 5;\n\t\t\t\t10 12 6;\n\t\t\t\t3 8 10;\n\t\t\t\t9 7 3\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "unitOctahedron",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
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
  },
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t-1 0  0;\n\t\t\t\t0  1  0;\n\t\t\t\t0  0 -1;\n\t\t\t\t0  0  1;\n\t\t\t\t0 -1  0;\n\t\t\t\t1  0  0\n\t\t\t] * 0.707107 + center,\n\t\t\t[\n\t\t\t\t4 5 6;\n\t\t\t\t4 6 2;\n\t\t\t\t4 2 1;\n\t\t\t\t4 1 5;\n\t\t\t\t5 1 3;\n\t\t\t\t5 3 6;\n\t\t\t\t3 1 2;\n\t\t\t\t6 3 2\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "unitTetrahedron",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
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
  },
  "{ :center |\n\t\tPolyhedron(\n\t\t\t[\n\t\t\t\t0 0 0.612372;\n\t\t\t\t-0.288675 -0.5 -0.204124;\n\t\t\t\t-0.288675 0.5 -0.204124;\n\t\t\t\t0.57735 0 -0.204124\n\t\t\t] + center,\n\t\t\t[\n\t\t\t\t2 3 4;\n\t\t\t\t3 2 1;\n\t\t\t\t4 1 2;\n\t\t\t\t1 4 3\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Polyhedron",
  "Polyhedron",
  ["vertexCoordinates", "faceIndices"],
  function (_vertexCoordinates, _faceIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _vertexCoordinates, _faceIndices";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPolyhedron_0(),
      _vertexCoordinates,
      _faceIndices,
    );
  },
  "{ :vertexCoordinates :faceIndices |\n\t\tnewPolyhedron().initializeSlots(vertexCoordinates, faceIndices)\n\t}",
);
