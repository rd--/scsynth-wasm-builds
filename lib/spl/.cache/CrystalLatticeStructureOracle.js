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
      const errorMessage =
        "Arity: expected 3, _self, _smallKansas, _event"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _then_2(_clsLeitner_1(_smallKansas), function (_clsLeitner) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage =
          "Arity: expected 1, _clsLeitner"; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _cls = _atRandom_1(_clsLeitner);
      let _mtx = _asMatrix_1(_chinese_1(_Projection3_0()));
      /* Statements */
      return _addFrame_3(
        _smallKansas,
        _SvgViewer_2(
          _plusSignPlusSign_2("Cls - ", _name_1(_cls)),
          _drawing_3(_cls, 0.25, function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _each"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _asterisk_2(_first_2(_dot_2(_mtx, _each), 2), 50);
          }),
        ),
        _event,
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.clsLeitner.then { :clsLeitner |\n\t\t\tlet cls = clsLeitner.atRandom;\n\t\t\tlet mtx = Projection3().chinese.asMatrix;\n\t\t\tsmallKansas.addFrame(SvgViewer(\n\t\t\t\t'Cls - ' ++ cls.name,\n\t\t\t\tcls.drawing(0.25) { :each |\n\t\t\t\t\tmtx.dot(each).first(2) * 50\n\t\t\t\t}),\n\t\t\t\tevent\n\t\t\t)\n\t\t}\n\t}",
);
