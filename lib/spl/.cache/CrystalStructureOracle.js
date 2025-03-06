sl.addType(
  false,
  "CrystalStructureOracle",
  "CrystalStructureOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "CrystalStructureOracle",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "CrystalStructureOracle",
);

sl.addMethodToExistingType(
  "CrystalStructureOracle",
  "CrystalStructureOracle",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "LeitnerCrystalStructureCatalogue"),
      sl.annotateFunction(function (_leitnerCatalogue) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _leitnerCatalogue";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _cls = _atRandom_1(_leitnerCatalogue);
        let _prj_1 = _asUnaryBlock_1(
          _namedAxonometricProjection_2(
            "CabinetOblique",
            _pi_1(_Fraction_2(1n, 6n)),
          ),
        );
        /* Statements */
        return _SvgViewer_4(
          _smallKansas,
          _plusSignPlusSign_2("Cls - ", _name_1(_cls)),
          _asSvgElement_3(
            _cls,
            12,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _first_2(_prj_1(_each), 2);
            }, ["each"]),
          ),
          _event,
        );
      }, ["leitnerCatalogue"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'LeitnerCrystalStructureCatalogue'), { :leitnerCatalogue | let cls = atRandom(leitnerCatalogue); let prj:/1 = asUnaryBlock(namedAxonometricProjection('CabinetOblique',pi(Fraction(1L, 6L)))); SvgViewer(smallKansas,++('Cls - ', name(cls)), asSvgElement(cls, 12, { :each | first(prj(each),2) }), event) }) }",
);
