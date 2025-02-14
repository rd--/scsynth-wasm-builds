/*  Requires: Graph LibraryItem  */

sl.addType(
  false,
  "CrystalStructure",
  "CrystalStructure",
  ["Object"],
  [
    "name",
    "description",
    "vertexCount",
    "edges",
    "vertexLabels",
    "vertexCoordinates",
  ],
);

sl.copyTraitToType(
  "Object",
  "CrystalStructure",
);

sl.addMethod(
  "CrystalStructure",
  "CrystalStructure",
  "asGraph",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Graph_2(_vertexList_1(_self), _edges_1(_self));
    /* Statements */
    _vertexLabels_2(_answer, _vertexLabels_1(_self));
    _vertexCoordinates_2(_answer, _vertexCoordinates_1(_self));
    return _answer;
  },
  "{ :self |\n\t\tlet answer = Graph(\n\t\t\tself.vertexList,\n\t\t\tself.edges\n\t\t);\n\t\tanswer.vertexLabels(self.vertexLabels);\n\t\tanswer.vertexCoordinates(self.vertexCoordinates);\n\t\tanswer\n\t}",
);

sl.addMethod(
  "CrystalStructure",
  "CrystalStructure",
  "asPerspectiveDrawing",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_2(_asGraph_1(_self), _projection);
  },
  "{ :self :projection |\n\t\tself.asGraph.asPerspectiveDrawing(projection)\n\t}",
);

sl.addMethod(
  "CrystalStructure",
  "CrystalStructure",
  "atoms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(
      _vertexLabels_1(_self),
      _vertexCoordinates_1(_self),
      function (_label, _coordinates) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _label, _coordinates";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return [_label, _coordinates];
      },
    );
  },
  "{ :self |\n\t\tself.vertexLabels.withCollect(\n\t\t\tself.vertexCoordinates\n\t\t) { :label :coordinates |\n\t\t\t[label, coordinates]\n\t\t}\n\t}",
);

sl.addMethod(
  "CrystalStructure",
  "CrystalStructure",
  "bonds",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _edges_1(_self);
  },
  "{ :self |\n\t\tself.edges\n\t}",
);

sl.addMethod(
  "CrystalStructure",
  "CrystalStructure",
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
  "Record",
  "CrystalStructure",
  "asCrystalStructure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_7(
      _newCrystalStructure_0(),
      _at_2(_self, "name"),
      _at_2(_self, "description"),
      _size_1(_at_2(_self, "vertexLabels")),
      _collect_2(_at_2(_self, "edges"), function (_edge) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _edge";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_edge, function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(_each, 1);
        });
      }),
      _at_2(_self, "vertexLabels"),
      _at_2(_self, "vertexCoordinates"),
    );
  },
  "{ :self |\n\t\tnewCrystalStructure().initializeSlots(\n\t\t\tself['name'],\n\t\t\tself['description'],\n\t\t\tself['vertexLabels'].size,\n\t\t\tself['edges'].collect { :edge |\n\t\t\t\tedge.collect { :each |\n\t\t\t\t\teach + 1\n\t\t\t\t}\n\t\t\t},\n\t\t\tself['vertexLabels'],\n\t\t\tself['vertexCoordinates']\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "CrystalStructure",
  "leitnerCrystalStructureCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "LeitnerCrystalStructureCatalogue");
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'LeitnerCrystalStructureCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "LeitnerCrystalStructureCatalogue"],
      ["category", "Chemistry/Crystallography"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/chemistry/json/cls.json",
      ],
      ["mimeType", "application/json"],
      ["parser", function (_libraryItem) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _libraryItem";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_libraryItem, _asCrystalStructure_1);
      }],
    ]),
  ),
);
