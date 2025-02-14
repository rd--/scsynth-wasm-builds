sl.addType(
  false,
  "CrystalStructureOracle",
  "CrystalStructureOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "CrystalStructureOracle",
);

sl.copyTraitToType(
  "SmallKansan",
  "CrystalStructureOracle",
);

sl.addMethod(
  "CrystalStructureOracle",
  "CrystalStructureOracle",
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
      _requestLibraryItem_2(_system, "LeitnerCrystalStructureCatalogue"),
      function (_leitnerCatalogue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leitnerCatalogue";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Temporaries */
        let _cls = _atRandom_1(_leitnerCatalogue);
        let _prj_1 = _asUnaryBlock_1(
          _namedAxonometricProjection_2(
            "CabinetOblique",
            _pi_1(_Fraction_2(
              1n,
              6n,
            )),
          ),
        );
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
            return _first_2(_prj_1(_each), 2);
          }),
          _event,
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'LeitnerCrystalStructureCatalogue'\n\t\t).then { :leitnerCatalogue |\n\t\t\tlet cls = leitnerCatalogue.atRandom;\n\t\t\tlet prj:/1 = 'CabinetOblique'.namedAxonometricProjection(1/6.pi).asUnaryBlock;\n\t\t\tsmallKansas.SvgViewer(\n\t\t\t\t'Cls - ' ++ cls.name,\n\t\t\t\tcls.asSvgElement(12) { :each |\n\t\t\t\t\tprj(each).first(2)\n\t\t\t\t},\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
