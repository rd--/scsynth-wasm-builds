sl.addType(
  false,
  "CrystalLatticeStructureOracle",
  "CrystalLatticeStructureOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CrystalLatticeStructureOracle",
);

sl.copyTraitToType(
  "SmallKansan",
  "CrystalLatticeStructureOracle",
);

sl.addMethod(
  "CrystalLatticeStructureOracle",
  "CrystalLatticeStructureOracle",
  "openIn",
  ["self", "smallKansas", "event"],
  function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(
        _system,
        "Chemistry/CrystalLatticeStructure/LeitnerCatalogue",
      ),
      function (_leitnerCatalogue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leitnerCatalogue";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _cls = _atRandom_1(_leitnerCatalogue);
        let _matrix = _asMatrix_1(_AxonometricProjection_1("Chinese"));
        /* Statements */
        return _SvgViewer_4(
          _smallKansas,
          _plusSignPlusSign_2("Cls - ", _name_1(_cls)),
          _asSvgElement_3(_cls, 12, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _first_2(_dot_2(_matrix, _each), 2);
          }),
          _event,
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'Chemistry/CrystalLatticeStructure/LeitnerCatalogue'\n\t\t).then { :leitnerCatalogue |\n\t\t\tlet cls = leitnerCatalogue.atRandom;\n\t\t\tlet matrix = AxonometricProjection('Chinese').asMatrix;\n\t\t\tsmallKansas.SvgViewer(\n\t\t\t\t'Cls - ' ++ cls.name,\n\t\t\t\tcls.asSvgElement(12) { :each |\n\t\t\t\t\tmatrix.dot(each).first(2)\n\t\t\t\t},\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
