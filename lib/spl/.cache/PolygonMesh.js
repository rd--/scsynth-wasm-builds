sl.addTrait("PolygonMesh", "PolygonMesh");

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.embeddingDimension\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_collect_2(_faceIndices_1(_self), _size_1)), 2);
  }, ["self"]),
  "{ :self |\n\t\tself.faceIndices.collect(size:/1).sum / 2\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeLengths",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _edgeCoordinates_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcLength_1(_Line_1(_each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.edgeCoordinates.collect { :each |\n\t\t\teach.Line.arcLength\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(
      _faceIndices_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _toDo_3(
          1,
          _size_1(_each),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _add_2(
              _answer,
              _sortBy_2([
                _at_2(_each, _i),
                _atWrap_2(_each, _plusSign_2(_i, 1)),
              ], _lessThanSignEqualsSign_2),
            );
          }, ["i"]),
        );
      }, ["each"]),
    );
    return _nub_1(_answer);
  }, ["self"]),
  "{ :self |\n\t\tlet answer = [];\n\t\tself.faceIndices.do { :each |\n\t\t\t1.toDo(each.size) { :i |\n\t\t\t\tanswer.add(\n\t\t\t\t\t[\n\t\t\t\t\t\teach.at(i),\n\t\t\t\t\t\teach.atWrap(i + 1)\n\t\t\t\t\t].sortBy(<=)\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer.nub\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(
      _edgeList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atAll_2(_vertexCoordinates, _each);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet vertexCoordinates = self.vertexCoordinates;\n\t\tself.edgeList.collect { :each |\n\t\t\tvertexCoordinates.atAll(each)\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "faceCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_faceIndices_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.faceIndices.size\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "faceDegreeCounts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _counts_1(_collect_2(_faceIndices_1(_self), _size_1));
  }, ["self"]),
  "{ :self |\n\t\tself.faceIndices.collect(size:/1).counts\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
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
  "{ :self |\n\t\tlet answer = Graph(self.vertexList, self.edgeList);\n\t\tanswer.vertexCoordinates := self.vertexCoordinates;\n\t\tanswer\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
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
  "{ :self |\n\t\tself.vertexCoordinates.size\n\t}",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "vertexList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_nonemptyRange_3(1, _vertexCount_1(_self), 1));
  }, ["self"]),
  "{ :self |\n\t\t[1 .. self.vertexCount]\n\t}",
);

sl.addType(
  false,
  "PolygonMesh",
  "PolygonMesh",
  ["Object", "Storeable", "Equatable", "Geometry", "PolygonMesh"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PolygonMesh",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "PolygonMesh",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PolygonMesh",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "PolygonMesh",
);

sl.copyTraitMethodsToType(
  "PolygonMesh",
  "PolygonMesh",
);

sl.addMethodToExistingType(
  "PolygonMesh",
  "PolygonMesh",
  "canonicalForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    let _w = _sortBy_2(_nub_1(_v), _lessThanSignEqualsSign_2);
    /* Statements */
    return _PolygonMesh_2(
      _w,
      _sortBy_2(
        _nub_1(
          _reject_2(
            _collect_2(
              _faceIndices_1(_self),
              sl.annotateFunction(function (_each) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _each";
                  throw new Error(errorMessage);
                } /* Statements */
                return _deleteAdjacentDuplicates_1(
                  _lexicographicallyLeastRotation_1(
                    _collect_2(
                      _each,
                      sl.annotateFunction(function (_i) {
                        /* ArityCheck */
                        if (arguments.length !== 1) {
                          const errorMessage = "Arity: expected 1, _i";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _indexOf_2(_w, _at_2(_v, _i));
                      }, ["i"]),
                    ),
                  ),
                );
              }, ["each"]),
            ),
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_size_1(_each), 2);
            }, ["each"]),
          ),
        ),
        _lessThanSignEqualsSign_2,
      ),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\tlet w = v.nub.sortBy(<=);\n\t\tPolygonMesh(\n\t\t\tw,\n\t\t\tself.faceIndices.collect { :each |\n\t\t\t\teach.collect { :i |\n\t\t\t\t\tw.indexOf(v[i])\n\t\t\t\t}.lexicographicallyLeastRotation.deleteAdjacentDuplicates\n\t\t\t}.reject { :each |\n\t\t\t\teach.size <= 2\n\t\t\t}.nub.sortBy(<=)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "PolygonMesh",
  "PolygonMesh",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _unlines_1(
      _collect_2(
        _faceIndices_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _format_2('<polygon points="%" />', [
            _asSvgPointList_2(
              _atAll_2(_vertexCoordinates_1(_self), _each),
              _options,
            ),
          ]);
        }, ["each"]),
      ),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet vertexCoordinates = self.vertexCoordinates;\n\t\tself.faceIndices.collect { :each |\n\t\t\t'<polygon points=\"%\" />'.format([\n\t\t\t\tself.vertexCoordinates.atAll(each).asSvgPointList(options)\n\t\t\t])\n\t\t}.unlines\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolygonMesh",
  "PolygonMesh",
  ["vertexCoordinates", "faceIndices"],
  sl.annotateFunction(function (_vertexCoordinates, _faceIndices) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _vertexCoordinates, _faceIndices";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPolygonMesh_0(),
      _vertexCoordinates,
      _faceIndices,
    );
  }, ["vertexCoordinates", "faceIndices"]),
  "{ :vertexCoordinates :faceIndices |\n\t\tnewPolygonMesh().initializeSlots(vertexCoordinates, faceIndices)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolygonMesh",
  "arrayMesh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_shape_1(_self), 2);
    let _m = _at_2(__SplVar1, 1);
    let _n = _at_2(__SplVar1, 2);
    let _vertexList = [];
    let _faceList = [];
    let _zeroIndexedCellVertices_2 = sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return [[_x, _y], [_plusSign_2(_x, 1), _y], [
        _plusSign_2(_x, 1),
        _plusSign_2(_y, 1),
      ], [_x, _plusSign_2(_y, 1)]];
    }, ["x", "y"]);
    let _vertexIndex_1 = sl.annotateFunction(function (_v) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _v";
        throw new Error(errorMessage);
      } /* Statements */
      return _indexOf_2(_vertexList, _v);
    }, ["v"]);
    /* Statements */
    _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _ifTrue_2(
          _isNonZero_1(_at_2(_at_2(_self, _i), _j)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _v = _zeroIndexedCellVertices_2(
              _hyphenMinus_2(_j, 1),
              _hyphenMinus_2(_m, _i),
            );
            /* Statements */
            _addAllIfNotPresent_2(_vertexList, _v);
            return _add_2(_faceList, _collect_2(_v, _vertexIndex_1));
          }, []),
        );
      }, ["i", "j"]),
      _rangeOrRelativeRange_3(1, _m, 1),
      _rangeOrRelativeRange_3(1, _n, 1),
    );
    return _AnnotatedGeometry_2(
      _PolygonMesh_2(_vertexList, _faceList),
      _Record_1([["strokeColour", _greyLevel_2(0.25, 0.25)], [
        "fillColour",
        _greyLevel_2(0.5, 0.5),
      ]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [m, n] = self.shape;\n\t\tlet vertexList = [];\n\t\tlet faceList = [];\n\t\tlet zeroIndexedCellVertices = { :x :y |\n\t\t\t[[x, y], [x + 1, y], [x + 1, y + 1], [x, y + 1]]\n\t\t};\n\t\tlet vertexIndex = { :v |\n\t\t\tvertexList.indexOf(v)\n\t\t};\n\t\t{ :i :j |\n\t\t\tself[i][j].isNonZero.ifTrue {\n\t\t\t\tlet v = zeroIndexedCellVertices(j - 1, m - i);\n\t\t\t\tvertexList.addAllIfNotPresent(v);\n\t\t\t\tfaceList.add(v.collect(vertexIndex:/1))\n\t\t\t}\n\t\t}.table(1:m, 1:n);\n\t\tAnnotatedGeometry(\n\t\t\tPolygonMesh(vertexList, faceList),\n\t\t\t(\n\t\t\t\tstrokeColour: 0.25.greyLevel(0.25),\n\t\t\t\tfillColour: 0.5.greyLevel(0.5)\n\t\t\t)\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarConvexPolytopeGraphCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarConvexPolytopeGraphCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarConvexPolytopeGraphCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarGraphCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(
      _self,
      "planarGraphCatalogue",
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _dictionaryJoin_1([
          _planarConvexPolytopeGraphCatalogue_1(_self),
          _planarNonHamiltonianGraphCatalogue_1(_self),
          _planarQuadrangulationsCatalogue_1(_self),
          _planarRegularGraphCatalogue_1(_self),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.cached('planarGraphCatalogue') {\n\t\t\t[\n\t\t\t\tself.planarConvexPolytopeGraphCatalogue,\n\t\t\t\tself.planarNonHamiltonianGraphCatalogue,\n\t\t\t\tself.planarQuadrangulationsCatalogue,\n\t\t\t\tself.planarRegularGraphCatalogue\n\t\t\t].dictionaryJoin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarNonHamiltonianGraphCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarNonHamiltonianGraphCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarNonHamiltonianGraphCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarQuadrangulationsCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarQuadrangulationsCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarQuadrangulationsCatalogue'\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarRegularGraphCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarRegularGraphCatalogue");
  }, ["self"]),
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarRegularGraphCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "PlanarRegularGraphCatalogue"],
      ["category", "Geometry/Graph"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/planar/PlanarRegularGraphCatalogue.json",
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
              return _PolygonMesh_2(
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
      ["name", "PlanarNonHamiltonianGraphCatalogue"],
      ["category", "Geometry/Graph"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/planar/PlanarNonHamiltonianGraphCatalogue.json",
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
              return _PolygonMesh_2(
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
      ["name", "PlanarConvexPolytopeGraphCatalogue"],
      ["category", "Geometry/Graph"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/planar/PlanarConvexPolytopeGraphCatalogue.json",
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
              return _PolygonMesh_2(
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
      ["name", "PlanarQuadrangulationsCatalogue"],
      ["category", "Geometry/Graph"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/geometry/planar/PlanarQuadrangulationsCatalogue.json",
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
              return _PolygonMesh_2(
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
