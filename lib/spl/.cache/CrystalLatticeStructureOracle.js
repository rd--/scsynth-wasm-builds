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
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _then_2(_clsLeitner_1(_smallKansas), function (_clsLeitner) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _clsLeitner";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Temporaries */
      let _cls = _atRandom_1(_clsLeitner);
      let _mtx = _asMatrix33_1(_chinese_1(_Projection3_0()));
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _SvgViewer_2(
          _plusPlus_2("Cls - ", _name_1(_cls)),
          _drawing_3(_cls, 0.25, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              console.error(errorMessage);
              throw Error(errorMessage);
            }
            /* Statements */
            return _times_2(_xy_1(_applyTo_2(_mtx, _each)), 50);
          }),
        ),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.clsLeitner.then { :clsLeitner |\n\t\t\tlet cls = clsLeitner.atRandom;\n\t\t\tlet mtx = Projection3().chinese.asMatrix33;\n\t\t\tsmallKansas.addFrame(SvgViewer(\n\t\t\t\t'Cls - ' ++ cls.name,\n\t\t\t\tcls.drawing(0.25) { :each |\n\t\t\t\t\tmtx.applyTo(each).xy * 50\n\t\t\t\t}),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
