/*  Requires: Graph LibraryItem  */

sl.addType(
  false,
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
);

sl.addMethod(
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
  "CrystalLatticeStructure",
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
  "CrystalLatticeStructure",
  "asCrystalLatticeStructure",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_7(
      _newCrystalLatticeStructure_0(),
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
  "{ :self |\n\t\tnewCrystalLatticeStructure().initializeSlots(\n\t\t\tself['name'],\n\t\t\tself['description'],\n\t\t\tself['vertexLabels'].size,\n\t\t\tself['edges'].collect { :edge |\n\t\t\t\tedge.collect { :each |\n\t\t\t\t\teach + 1\n\t\t\t\t}\n\t\t\t},\n\t\t\tself['vertexLabels'],\n\t\t\tself['vertexCoordinates']\n\t\t)\n\t}",
);

sl.addMethod(
  "System",
  "CrystalLatticeStructure",
  "leitnerCatalogue",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(
      _self,
      "Chemistry/CrystalLatticeStructure/LeitnerCatalogue",
    );
  },
  "{ :self |\n\t\tself.requireLibraryItem(\n\t\t\t'Chemistry/CrystalLatticeStructure/LeitnerCatalogue'\n\t\t)\n\t}",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    Object.fromEntries([
      ["name", "Chemistry/CrystalLatticeStructure/LeitnerCatalogue"],
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
        return _collect_2(_libraryItem, _asCrystalLatticeStructure_1);
      }],
    ]),
  ),
);
