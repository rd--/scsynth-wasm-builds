sl.addTrait("PolygonMesh", "PolygonMesh");

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_self);
  },
  "{ :self | embeddingDimension(self) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_collect_2(_faceIndices_1(_self), _size_1)), 2);
  },
  "{ :self | /(sum(collect(faceIndices(self),size:/1)), 2) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeLengths",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_edgeCoordinates_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _arcLength_1(_Line_1(_each));
    });
  },
  "{ :self | collect(edgeCoordinates(self), { :each | arcLength(Line(each)) }) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    /* Statements */
    _do_2(_faceIndices_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _toDo_3(1, _size_1(_each), function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _add_2(
          _answer,
          _sort_1([_at_2(_each, _i), _atWrap_2(_each, _plusSign_2(_i, 1))]),
        );
      });
    });
    return _nub_1(_answer);
  },
  "{ :self | let answer = []; do(faceIndices(self), { :each | toDo(1, size(each), { :i | add(answer,sort([at(each,i), atWrap(each,+(i, 1))])) }) }); nub(answer) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "edgeCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _collect_2(_edgeList_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _atAll_2(_vertexCoordinates, _each);
    });
  },
  "{ :self | let vertexCoordinates = vertexCoordinates(self); collect(edgeList(self), { :each | atAll(vertexCoordinates,each) }) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  },
  "{ :self | size(anyOne(vertexCoordinates(self))) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "faceCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_faceIndices_1(_self));
  },
  "{ :self | size(faceIndices(self)) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "faceDegreeCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_collect_2(_faceIndices_1(_self), _size_1));
  },
  "{ :self | sortedElements(collect(faceIndices(self),size:/1)) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "graph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Graph_2(_vertexList_1(_self), _edgeList_1(_self));
    /* Statements */
    _vertexCoordinates_2(_answer, _vertexCoordinates_1(_self));
    return _answer;
  },
  "{ :self | let answer = Graph(vertexList(self), edgeList(self)); vertexCoordinates(answer, vertexCoordinates(self)); answer }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "vertexCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_vertexCoordinates_1(_self));
  },
  "{ :self | size(vertexCoordinates(self)) }",
);

sl.addMethodToExistingTrait(
  "PolygonMesh",
  "PolygonMesh",
  "vertexList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_upOrDownTo_2(1, _vertexCount_1(_self)));
  },
  "{ :self | asList(upOrDownTo(1, vertexCount(self))) }",
);

sl.addType(
  false,
  "PolygonMesh",
  "PolygonMesh",
  ["Object", "PolygonMesh"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = _vertexCoordinates_1(_self);
    let _w = _sort_1(_nub_1(_v));
    /* Statements */
    return _PolygonMesh_2(
      _w,
      _sort_1(
        _nub_1(_reject_2(
          _collect_2(_faceIndices_1(_self), function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _deleteAdjacentDuplicates_1(
              _lexicographicallyLeastRotation_1(
                _collect_2(_each, function (_i) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _i";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _indexOf_2(_w, _at_2(_v, _i));
                }),
              ),
            );
          }),
          function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_size_1(_each), 2);
          },
        )),
      ),
    );
  },
  "{ :self | let v = vertexCoordinates(self); let w = sort(nub(v)); PolygonMesh(w, sort(nub(reject(collect(faceIndices(self), { :each | deleteAdjacentDuplicates(lexicographicallyLeastRotation(collect(each, { :i | indexOf(w,at(v, i)) }))) }), { :each | <=(size(each), 2) })))) }",
);

sl.addMethodToExistingType(
  "PolygonMesh",
  "PolygonMesh",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _unlines_1(_collect_2(_faceIndices_1(_self), function (_each) {
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
    }));
  },
  "{ :self :options | let vertexCoordinates = vertexCoordinates(self); unlines(collect(faceIndices(self), { :each | format('<polygon points=\"%\" />',[asSvgPointList(atAll(vertexCoordinates(self),each),options)]) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PolygonMesh",
  "PolygonMesh",
  ["vertexCoordinates", "faceIndices"],
  function (_vertexCoordinates, _faceIndices) {
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
  },
  "{ :vertexCoordinates :faceIndices | initializeSlots(newPolygonMesh(),vertexCoordinates, faceIndices) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarConvexPolytopeGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarConvexPolytopeGraphCatalogue");
  },
  "{ :self | requireLibraryItem(self,'PlanarConvexPolytopeGraphCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "planarGraphCatalogue", function () {
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
    });
  },
  "{ :self | cached(self, 'planarGraphCatalogue', { dictionaryJoin([planarConvexPolytopeGraphCatalogue(self), planarNonHamiltonianGraphCatalogue(self), planarQuadrangulationsCatalogue(self), planarRegularGraphCatalogue(self)]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarNonHamiltonianGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarNonHamiltonianGraphCatalogue");
  },
  "{ :self | requireLibraryItem(self,'PlanarNonHamiltonianGraphCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarQuadrangulationsCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarQuadrangulationsCatalogue");
  },
  "{ :self | requireLibraryItem(self,'PlanarQuadrangulationsCatalogue') }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "PolygonMesh",
  "planarRegularGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarRegularGraphCatalogue");
  },
  "{ :self | requireLibraryItem(self,'PlanarRegularGraphCatalogue') }",
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _PolygonMesh_2(
            _at_2(_each, "vertexCoordinates"),
            _plusSign_2(_at_2(_each, "faceIndices"), 1),
          );
        });
      }],
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _PolygonMesh_2(
            _at_2(_each, "vertexCoordinates"),
            _plusSign_2(_at_2(_each, "faceIndices"), 1),
          );
        });
      }],
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _PolygonMesh_2(
            _at_2(_each, "vertexCoordinates"),
            _plusSign_2(_at_2(_each, "faceIndices"), 1),
          );
        });
      }],
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
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _PolygonMesh_2(
            _at_2(_each, "vertexCoordinates"),
            _plusSign_2(_at_2(_each, "faceIndices"), 1),
          );
        });
      }],
    ]),
  ),
);
