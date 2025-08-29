sl.addType(
  false,
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  ["Object"],
  ["vertexCoordinates", "triangulation"],
);

sl.copyTraitMethodsToType(
  "Object",
  "DelaunayTriangulation",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    /* Statements */
    return _LineDrawing_1([
      _PointCloud_1(_v),
      _collect_2(
        _edgeList_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _Line_1(_atAll_2(_v, _each));
        }, ["each"]),
      ),
    ]);
  }, ["self"]),
  "{ :self | let v = vertexCoordinates(self); LineDrawing([PointCloud(v), collect(edgeList(self), { :each | Line(atAll(v,each)) })]) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return _self.triangulation.coords;
  }, ["self"]),
  "{ :self | <primitive: return _self.triangulation.coords;>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicConvexHullIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.hull);
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self.triangulation.hull);>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  }, ["self"]),
  "{ :self | <primitive: const delauny = _self.triangulation;\n\t\tconst answer = [];\n\t\tfor (let e = 0; e < delauny.triangles.length; e++) {\n\t\t\tif (e > delauny.halfedges[e]) {\n\t\t\t\tconst p = delauny.triangles[e];\n\t\t\t\tconst q = delauny.triangles[(e % 3 === 2) ? e - 2 : e + 1];\n\t\t\t\tanswer.push([p, q]);\n\t\t\t};\n\t\t};\n\t\treturn answer;>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicHalfEdges",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.halfedges);
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self.triangulation.halfedges);>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicFaceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Array.from(_self.triangulation.triangles);
  }, ["self"]),
  "{ :self | <primitive: return Array.from(_self.triangulation.triangles);>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "basicVoronoiEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  }, ["self"]),
  "{ :self | <primitive: const delaunay = _self.triangulation;\n\t\tconst answer = [];\n\t\tfor (let e = 0; e < delaunay.triangles.length; e++) {\n\t\t\tif (e < delaunay.halfedges[e]) {\n\t\t\t\tconst p = Math.floor(e / 3);;\n\t\t\t\tconst q = Math.floor(delaunay.halfedges[e] / 3);\n\t\t\t\tanswer.push([p, q]);\n\t\t\t}\n\t\t};\n\t\treturn answer;>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "convexHull",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_vertexCoordinates_1(_self), _convexHullIndices_1(_self));
  }, ["self"]),
  "{ :self | atAll(vertexCoordinates(self),convexHullIndices(self)) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "convexHullIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicConvexHullIndices_1(_self), 1);
  }, ["self"]),
  "{ :self | +(basicConvexHullIndices(self), 1) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
  }, ["self"]),
  "{ :self | let halfEdges = basicHalfEdges(self); let boundaryEdgeCount = occurrencesOf(halfEdges,-1); let interiorEdgeCount = /((-(size(halfEdges), boundaryEdgeCount)), 2); +(boundaryEdgeCount, interiorEdgeCount) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicEdgeList_1(_self), 1);
  }, ["self"]),
  "{ :self | +(basicEdgeList(self), 1) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "faceCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return (_self.triangulation.triangles.length / 3);
  }, ["self"]),
  "{ :self | <primitive: return (_self.triangulation.triangles.length / 3);>\n }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "faceIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _indicesVector = _basicFaceIndices_1(_self);
    let _answer = [];
    let _index = 0;
    /* Statements */
    _timesRepeat_2(
      _solidus_2(_size_1(_indicesVector), 3),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
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
      }, []),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let indicesVector = basicFaceIndices(self); let answer = []; let index = 0; timesRepeat((/(size(indicesVector), 3)), { add(answer,+(atAll(indicesVector,+(index, [1, 2, 3])), 1)); index := +(index, 3) }); answer }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "graph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Graph_2(_vertexList_1(_self), _edgeList_1(_self));
    /* Statements */
    _vertexCoordinates_2(_answer, _vertexCoordinates_1(_self));
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Graph(vertexList(self), edgeList(self)); vertexCoordinates(answer, vertexCoordinates(self)); answer }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "polygonMesh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolygonMesh_2(_vertexCoordinates_1(_self), _faceIndices_1(_self));
  }, ["self"]),
  "{ :self | PolygonMesh(vertexCoordinates(self), faceIndices(self)) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "vertexCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self | size(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _vertexCount_1(_self)));
  }, ["self"]),
  "{ :self | asList(upOrDownTo(1, vertexCount(self))) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiEdgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_basicVoronoiEdgeList_1(_self), 1);
  }, ["self"]),
  "{ :self | +(basicVoronoiEdgeList(self), 1) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiVertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertices = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(
      _faceIndices_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumcenter_1(_Triangle_1(_atAll_2(_vertices, _each)));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | let vertices = vertexCoordinates(self); collect(faceIndices(self), { :each | circumcenter(Triangle(atAll(vertices,each))) }) }",
);

sl.addMethodToExistingType(
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  "voronoiExteriorCellRays",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
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
    _toDo_3(
      1,
      _size_1(_hull),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
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
      }, ["i"]),
    );
    return _answer;
  }, ["self"]),
  "{ :self | let answer = zeros([vertexCount(self), 2]); let hull = convexHullIndices(self); let coord = basicCoordinates(self); let h = last(hull); let p1 = h; let x1 = at(coord, +(*(2, h), 1)); let y1 = at(coord, +(*(2, h), 2)); toDo(1, size(hull), { :i | var p0, x0, y0, x, y;h := at(hull, i); p0 := p1; x0 := x1; y0 := y1; p1 := h; x1 := at(coord, +(*(2, h), 1)); y1 := at(coord, +(*(2, h), 2)); x := -(x1, x0); y := -(y0, y1); atPut(answer, +(p0, 1), atPut(answer, p1, [y, x])) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DelaunayTriangulation",
  "convexHull",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atAll_2(_self, _convexHullIndices_1(_self));
  }, ["self"]),
  "{ :self | atAll(self,convexHullIndices(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DelaunayTriangulation",
  "convexHullIndices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _convexHullIndices_1(_DelaunayTriangulation_1(_self));
  }, ["self"]),
  "{ :self | convexHullIndices(DelaunayTriangulation(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DelaunayTriangulation",
  "delaunayMesh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _polygonMesh_1(_DelaunayTriangulation_1(_self));
  }, ["self"]),
  "{ :self | polygonMesh(DelaunayTriangulation(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "DelaunayTriangulation",
  "DelaunayTriangulation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL128 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SPL128, 1);
    let _n = _at_2(__SPL128, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_n, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _coordinateVector = _Float64Array_1(_asterisk_2(_size_1(_self), 2));
        let _index = 1;
        /* Statements */
        _do_2(
          _self,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SPL129 = _assertIsOfSize_2(_each, 2);
            let _x = _at_2(__SPL129, 1);
            let _y = _at_2(__SPL129, 2);
            /* Statements */
            _atPut_3(_coordinateVector, _index, _x);
            _atPut_3(_coordinateVector, _plusSign_2(_index, 1), _y);
            return _index = _plusSign_2(_index, 2);
          }, ["each"]),
        );
        return _initializeSlots_3(
          _newDelaunayTriangulation_0(),
          _self,
          _basicDelaunayTriangulation_1(_coordinateVector),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "DelaunayTriangulation: not two column matrix");
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL128 = assertIsOfSize(shape(self), 2); let m = at(__SPL128, 1); let n = at(__SPL128, 2); if((=(n, 2)), { let coordinateVector = Float64Array(*(size(self), 2)); let index = 1; do(self, { :each | let __SPL129 = assertIsOfSize(each, 2); let x = at(__SPL129, 1); let y = at(__SPL129, 2); atPut(coordinateVector, index, x); atPut(coordinateVector, +(index, 1), y); index := +(index, 2) }); initializeSlots(newDelaunayTriangulation(),self, basicDelaunayTriangulation(coordinateVector)) }, { error(self,'DelaunayTriangulation: not two column matrix') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Float64Array",
  "DelaunayTriangulation",
  "basicDelaunayTriangulation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return new sl.Delaunator(_self);
  }, ["self"]),
  "{ :self | <primitive: return new sl.Delaunator(_self);>\n }",
);
