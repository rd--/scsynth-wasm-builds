sl.addType(
  false,
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  ["Object"],
  ["vertexCoordinates", "triangulation"],
);

sl.copyTraitToType(
  "Object",
  "DelaunayTriangulation",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "asLineDrawing",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    /* Statements */
    return _LineDrawing_1([
      _PointCloud_1(_v),
      _collect_2(_edgeList_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1(_atAll_2(_v, _each));
      }),
    ]);
  },
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\t[\n\t\t\tv.PointCloud,\n\t\t\tself.edgeList.collect { :each |\n\t\t\t\tv.atAll(each).Line\n\t\t\t}\n\t\t].LineDrawing\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.triangulation.coords;
  },
  "{ :self |\n\t\t<primitive: return _self.triangulation.coords;>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicConvexHullIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.hull);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.triangulation.hull);>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const delauny = _self.triangulation;
    const answer = [];
    for (let e = 0; e < delauny.triangles.length; e++) {
      if (e > delauny.halfedges[e]) {
        const p = delauny.triangles[e];
        const q = delauny.triangles[(e % 3 === 2) ? e - 2 : e + 1];
        answer.push([p, q]);
      }
    }
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst delauny = _self.triangulation;\n\t\tconst answer = [];\n\t\tfor (let e = 0; e < delauny.triangles.length; e++) {\n\t\t\tif (e > delauny.halfedges[e]) {\n\t\t\t\tconst p = delauny.triangles[e];\n\t\t\t\tconst q = delauny.triangles[(e % 3 === 2) ? e - 2 : e + 1];\n\t\t\t\tanswer.push([p, q]);\n\t\t\t};\n\t\t};\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicHalfEdges",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.halfedges);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.triangulation.halfedges);>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicFaceIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.triangles);
  },
  "{ :self |\n\t\t<primitive: return Array.from(_self.triangulation.triangles);>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicVoronoiEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    const delaunay = _self.triangulation;
    const answer = [];
    for (let e = 0; e < delaunay.triangles.length; e++) {
      if (e < delaunay.halfedges[e]) {
        const p = Math.floor(e / 3);
        const q = Math.floor(delaunay.halfedges[e] / 3);
        answer.push([p, q]);
      }
    }
    return answer;
  },
  "{ :self |\n\t\t<primitive:\n\t\tconst delaunay = _self.triangulation;\n\t\tconst answer = [];\n\t\tfor (let e = 0; e < delaunay.triangles.length; e++) {\n\t\t\tif (e < delaunay.halfedges[e]) {\n\t\t\t\tconst p = Math.floor(e / 3);;\n\t\t\t\tconst q = Math.floor(delaunay.halfedges[e] / 3);\n\t\t\t\tanswer.push([p, q]);\n\t\t\t}\n\t\t};\n\t\treturn answer;\n\t\t>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "convexHull",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_vertexCoordinates_1(_self), _convexHullIndices_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.atAll(self.convexHullIndices)\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "convexHullIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicConvexHullIndices_1(_self), 1);
  },
  "{ :self |\n\t\tself.basicConvexHullIndices + 1\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _halfEdges = _basicHalfEdges_1(_self);
    let _boundaryEdgeCount = _occurrencesOf_2(_halfEdges, -1);
    let _interiorEdgeCount = _solidus_2(
      _hyphenMinus_2(_size_1(_halfEdges), _boundaryEdgeCount),
      2,
    );
    /* Statements */
    return _plusSign_2(_boundaryEdgeCount, _interiorEdgeCount);
  },
  "{ :self |\n\t\tlet halfEdges = self.basicHalfEdges;\n\t\tlet boundaryEdgeCount = halfEdges.occurrencesOf(-1);\n\t\tlet interiorEdgeCount = (halfEdges.size - boundaryEdgeCount) / 2;\n\t\tboundaryEdgeCount + interiorEdgeCount\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicEdgeList_1(_self), 1);
  },
  "{ :self |\n\t\tself.basicEdgeList + 1\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "faceCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return (_self.triangulation.triangles.length / 3);
  },
  "{ :self |\n\t\t<primitive: return (_self.triangulation.triangles.length / 3);>\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "faceIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indicesVector = _basicFaceIndices_1(_self);
    let _answer = [];
    let _index = 0;
    /* Statements */
    _timesRepeat_2(_solidus_2(_size_1(_indicesVector), 3), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      _add_2(
        _answer,
        _plusSign_2(
          _atAll_2(_indicesVector, _plusSign_2(_index, [1, 2, 3])),
          1,
        ),
      );
      return _index = _plusSign_2(_index, 3);
    });
    return _answer;
  },
  "{ :self |\n\t\tlet indicesVector = self.basicFaceIndices;\n\t\tlet answer = [];\n\t\tlet index = 0;\n\t\t(indicesVector.size / 3).timesRepeat {\n\t\t\tanswer.add(indicesVector.atAll(index + [1 2 3]) + 1);\n\t\t\tindex := index + 3\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "graph",
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
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "polygonMesh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PolygonMesh_2(_vertexCoordinates_1(_self), _faceIndices_1(_self));
  },
  "{ :self |\n\t\tPolygonMesh(\n\t\t\tself.vertexCoordinates,\n\t\t\tself.faceIndices\n\t\t)\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
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
  "DelaunayTriangulation",
  "DelaunayTriangulation",
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
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiEdgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicVoronoiEdgeList_1(_self), 1);
  },
  "{ :self |\n\t\tself.basicVoronoiEdgeList + 1\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiVertexCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertices = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(_faceIndices_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _circumcenter_1(_atAll_2(_vertices, _each));
    });
  },
  "{ :self |\n\t\tlet vertices = self.vertexCoordinates;\n\t\tself.faceIndices.collect { :each |\n\t\t\tvertices.atAll(each).circumcenter\n\t\t}\n\t}",
);

sl.addMethod(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiExteriorCellRays",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _zeros_1([_vertexCount_1(_self), 2]);
    let _hull = _convexHullIndices_1(_self);
    let _coord = _basicCoordinates_1(_self);
    let _h = _last_1(_hull);
    let _p1 = _h;
    let _x1 = _at_2(_coord, _plusSign_2(_asterisk_2(2, _h), 1));
    let _y1 = _at_2(_coord, _plusSign_2(_asterisk_2(2, _h), 2));
    /* Statements */
    _toDo_3(1, _size_1(_hull), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p0, _x0, _y0, _x, _y;
      /* Statements */
      _h = _at_2(_hull, _i);
      _p0 = _p1;
      _x0 = _x1;
      _y0 = _y1;
      _p1 = _h;
      _x1 = _at_2(_coord, _plusSign_2(_asterisk_2(2, _h), 1));
      _y1 = _at_2(_coord, _plusSign_2(_asterisk_2(2, _h), 2));
      _x = _hyphenMinus_2(_x1, _x0);
      _y = _hyphenMinus_2(_y0, _y1);
      return _atPut_3(
        _answer,
        _plusSign_2(_p0, 1),
        _atPut_3(_answer, _p1, [_y, _x]),
      );
    });
    return _answer;
  },
  "{ :self |\n\t\tlet answer = [self.vertexCount, 2].zeros;\n\t\tlet hull = self.convexHullIndices;\n\t\tlet coord = self.basicCoordinates;\n\t\tlet h = hull.last;\n\t\tlet p1 = h;\n\t\tlet x1 = coord[2 * h + 1];\n\t\tlet y1 = coord[2 * h + 2];\n\t\t1.toDo(hull.size) { :i |\n\t\t\tvar p0, x0, y0, x, y;\n\t\t\th := hull[i];\n\t\t\tp0 := p1;\n\t\t\tx0 := x1;\n\t\t\ty0 := y1;\n\t\t\tp1 := h;\n\t\t\tx1 := coord[2 * h + 1];\n\t\t\ty1 := coord[2 * h + 2];\n\t\t\tx := x1 - x0;\n\t\t\ty := y0 - y1;\n\t\t\tanswer[p0 + 1] := answer[p1] := [y, x]\n\t\t};\n\t\tanswer\n\t}",
);

sl.addMethod(
  "List",
  "DelaunayTriangulation",
  "convexHull",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_self, _convexHullIndices_1(_self));
  },
  "{ :self |\n\t\tself.atAll(\n\t\t\tself.convexHullIndices\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "DelaunayTriangulation",
  "convexHullIndices",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _convexHullIndices_1(_DelaunayTriangulation_1(_self));
  },
  "{ :self |\n\t\tself.DelaunayTriangulation.convexHullIndices\n\t}",
);

sl.addMethod(
  "List",
  "DelaunayTriangulation",
  "delaunayMesh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonMesh_1(_DelaunayTriangulation_1(_self));
  },
  "{ :self |\n\t\tself\n\t\t.DelaunayTriangulation\n\t\t.polygonMesh\n\t}",
);

sl.addMethod(
  "List",
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym44 = _assertIsOfSize_2(_shape_1(_self), 2),
      _m = _at_2(__genSym44, 1),
      _n = _at_2(__genSym44, 2);
    /* Statements */
    return _if_3(_equalsSign_2(_n, 2), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _coordinateVector = _Float64Array_1(_asterisk_2(_size_1(_self), 2));
      let _index = 1;
      /* Statements */
      _do_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let __genSym45 = _assertIsOfSize_2(_each, 2),
          _x = _at_2(__genSym45, 1),
          _y = _at_2(__genSym45, 2);
        /* Statements */
        _atPut_3(_coordinateVector, _index, _x);
        _atPut_3(_coordinateVector, _plusSign_2(_index, 1), _y);
        return _index = _plusSign_2(_index, 2);
      });
      return _initializeSlots_3(
        _newDelaunayTriangulation_0(),
        _self,
        _basicDelaunayTriangulation_1(_coordinateVector),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "DelaunayTriangulation: not two column matrix");
    });
  },
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\t(n = 2).if {\n\t\t\tlet coordinateVector = Float64Array(self.size * 2);\n\t\t\tlet index = 1;\n\t\t\tself.do { :each |\n\t\t\t\tlet [x, y] = each;\n\t\t\t\tcoordinateVector[index] := x;\n\t\t\t\tcoordinateVector[index + 1] := y;\n\t\t\t\tindex := index + 2\n\t\t\t};\n\t\t\tnewDelaunayTriangulation()\n\t\t\t.initializeSlots(\n\t\t\t\tself,\n\t\t\t\tcoordinateVector.basicDelaunayTriangulation\n\t\t\t)\n\t\t} {\n\t\t\tself.error('DelaunayTriangulation: not two column matrix')\n\t\t}\n\t}",
);

sl.addMethod(
  "Float64Array",
  "DelaunayTriangulation",
  "basicDelaunayTriangulation",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return new sl.Delaunator(_self);
  },
  "{ :self |\n\t\t<primitive: return new sl.Delaunator(_self);>\n\t}",
);
