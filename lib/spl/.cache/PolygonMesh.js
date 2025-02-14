sl.addTrait("PolygonMesh", "PolygonMesh");

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_self);
  },
  "{ :self |\n\t\tself.embeddingDimension\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
  "edgeCount",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sum_1(_collect_2(_faceIndices_1(_self), _size_1)), 2);
  },
  "{ :self |\n\t\tself.faceIndices.collect(size:/1).sum / 2\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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
        return _add_2(
          _answer,
          _sort_1([_at_2(_each, _i), _atWrap_2(_each, _plusSign_2(_i, 1))]),
        );
      });
    });
    return _nub_1(_answer);
  },
  "{ :self |\n\t\tlet answer = [];\n\t\tself.faceIndices.do { :each |\n\t\t\t1.toDo(each.size) { :i |\n\t\t\t\tanswer.add(\n\t\t\t\t\t[\n\t\t\t\t\t\teach.at(i),\n\t\t\t\t\t\teach.atWrap(i + 1)\n\t\t\t\t\t].sort\n\t\t\t\t)\n\t\t\t}\n\t\t};\n\t\tanswer.nub\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  },
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
  "faceDegreeCounts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sortedElements_1(_collect_2(_faceIndices_1(_self), _size_1));
  },
  "{ :self |\n\t\tself.faceIndices.collect(size:/1).sortedElements\n\t}",
);

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addTraitMethod(
  "PolygonMesh",
  "PolygonMesh",
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

sl.addType(
  false,
  "PolygonMesh",
  "PolygonMesh",
  ["Object", "PolygonMesh"],
  ["vertexCoordinates", "faceIndices"],
);

sl.copyTraitToType(
  "Object",
  "PolygonMesh",
);

sl.copyTraitToType(
  "PolygonMesh",
  "PolygonMesh",
);

sl.addMethod(
  "PolygonMesh",
  "PolygonMesh",
  "canonicalForm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _deleteAdjacentDuplicates_1(
              _lexicographicallyLeastRotation_1(
                _collect_2(_each, function (_i) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _i";
                    /* console.error(errorMessage); */
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
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_size_1(_each), 2);
          },
        )),
      ),
    );
  },
  "{ :self |\n\t\tlet v = self.vertexCoordinates;\n\t\tlet w = v.nub.sort;\n\t\tPolygonMesh(\n\t\t\tw,\n\t\t\tself.faceIndices.collect { :each |\n\t\t\t\teach.collect { :i |\n\t\t\t\t\tw.indexOf(v[i])\n\t\t\t\t}.lexicographicallyLeastRotation.deleteAdjacentDuplicates\n\t\t\t}.reject { :each |\n\t\t\t\teach.size <= 2\n\t\t\t}.nub.sort\n\t\t)\n\t}",
);

sl.addMethod(
  "PolygonMesh",
  "PolygonMesh",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _vertexCoordinates = _vertexCoordinates_1(_self);
    /* Statements */
    return _unlines_1(_collect_2(_faceIndices_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
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
  "{ :self :options |\n\t\tlet vertexCoordinates = self.vertexCoordinates;\n\t\tself.faceIndices.collect { :each |\n\t\t\t'<polygon points=\"%\" />'.format([\n\t\t\t\tself.vertexCoordinates.atAll(each).asSvgPointList(options)\n\t\t\t])\n\t\t}.unlines\n\t}",
);

sl.addMethod(
  "List",
  "PolygonMesh",
  "PolygonMesh",
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
      _newPolygonMesh_0(),
      _vertexCoordinates,
      _faceIndices,
    );
  },
  "{ :vertexCoordinates :faceIndices |\n\t\tnewPolygonMesh().initializeSlots(vertexCoordinates, faceIndices)\n\t}",
);

sl.addMethod(
  "System",
  "PolygonMesh",
  "planarConvexPolytopeGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarConvexPolytopeGraphCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarConvexPolytopeGraphCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "PolygonMesh",
  "planarGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _cached_3(_self, "planarGraphCatalogue", function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
  "{ :self |\n\t\tself.cached('planarGraphCatalogue') {\n\t\t\t[\n\t\t\t\tself.planarConvexPolytopeGraphCatalogue,\n\t\t\t\tself.planarNonHamiltonianGraphCatalogue,\n\t\t\t\tself.planarQuadrangulationsCatalogue,\n\t\t\t\tself.planarRegularGraphCatalogue\n\t\t\t].dictionaryJoin\n\t\t}\n\t}",
);

sl.addMethod(
  "System",
  "PolygonMesh",
  "planarNonHamiltonianGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarNonHamiltonianGraphCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarNonHamiltonianGraphCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "PolygonMesh",
  "planarQuadrangulationsCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarQuadrangulationsCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarQuadrangulationsCatalogue'\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "PolygonMesh",
  "planarRegularGraphCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "PlanarRegularGraphCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'PlanarRegularGraphCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
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
    Object.fromEntries([
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
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
    Object.fromEntries([
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
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
    Object.fromEntries([
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
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
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
