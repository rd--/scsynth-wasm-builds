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

sl.copyTraitMethodsToType(
  "Object",
  "CrystalStructure",
);

sl.addMethodToExistingType(
  "CrystalStructure",
  "CrystalStructure",
  "asGraph",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _Graph_2(_vertexList_1(_self), _edges_1(_self));
    /* Statements */
    _vertexLabels_2(_answer, _vertexLabels_1(_self));
    _vertexCoordinates_2(_answer, _vertexCoordinates_1(_self));
    return _answer;
  }, ["self"]),
  "{ :self | let answer = Graph(vertexList(self), edges(self)); vertexLabels(answer,vertexLabels(self)); vertexCoordinates(answer,vertexCoordinates(self)); answer }",
);

sl.addMethodToExistingType(
  "CrystalStructure",
  "CrystalStructure",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _asPerspectiveDrawing_2(_asGraph_1(_self), _projection);
  }, ["self", "projection"]),
  "{ :self :projection | asPerspectiveDrawing(asGraph(self),projection) }",
);

sl.addMethodToExistingType(
  "CrystalStructure",
  "CrystalStructure",
  "atoms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(
      _vertexLabels_1(_self),
      _vertexCoordinates_1(_self),
      sl.annotateFunction(function (_label, _coordinates) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _label, _coordinates";
          throw new Error(errorMessage);
        } /* Statements */
        return [_label, _coordinates];
      }, ["label", "coordinates"]),
    );
  }, ["self"]),
  "{ :self | withCollect(vertexLabels(self), vertexCoordinates(self), { :label :coordinates | [label, coordinates] }) }",
);

sl.addMethodToExistingType(
  "CrystalStructure",
  "CrystalStructure",
  "bonds",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _edges_1(_self);
  }, ["self"]),
  "{ :self | edges(self) }",
);

sl.addMethodToExistingType(
  "CrystalStructure",
  "CrystalStructure",
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

sl.extendTypeOrTraitWithMethod(
  "Record",
  "CrystalStructure",
  "asCrystalStructure",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_7(
      _newCrystalStructure_0(),
      _at_2(_self, "name"),
      _at_2(_self, "description"),
      _size_1(_at_2(_self, "vertexLabels")),
      _collect_2(
        _at_2(_self, "edges"),
        sl.annotateFunction(function (_edge) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _edge";
            throw new Error(errorMessage);
          } /* Statements */
          return _collect_2(
            _edge,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _plusSign_2(_each, 1);
            }, ["each"]),
          );
        }, ["edge"]),
      ),
      _at_2(_self, "vertexLabels"),
      _at_2(_self, "vertexCoordinates"),
    );
  }, ["self"]),
  "{ :self | initializeSlots(newCrystalStructure(),at(self, 'name'), at(self, 'description'), size(at(self, 'vertexLabels')), collect(at(self, 'edges'), { :edge | collect(edge, { :each | +(each, 1) }) }), at(self, 'vertexLabels'), at(self, 'vertexCoordinates')) }",
);

sl.extendTypeOrTraitWithMethod(
  "System",
  "CrystalStructure",
  "leitnerCrystalStructureCatalogue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _requireLibraryItem_2(_self, "LeitnerCrystalStructureCatalogue");
  }, ["self"]),
  "{ :self | requireLibraryItem(self,'LeitnerCrystalStructureCatalogue') }",
);

_addLibraryItem_2(
  _system,
  _asLibraryItem_1(
    _Record_1([
      ["name", "LeitnerCrystalStructureCatalogue"],
      ["category", "Chemistry/Crystallography"],
      [
        "url",
        "https://rohandrape.net/sw/hsc3-data/data/chemistry/json/cls.json",
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
          return _collect_2(_libraryItem, _asCrystalStructure_1);
        }, ["libraryItem"]),
      ],
    ]),
  ),
);
