sl.extendTraitWithMethod(
  "Cache",
  "SuperColliderProgramOracle",
  "superColliderProgramOracle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "superColliderProgramOracle",
        "https://rohandrape.net/sw/jssc3/text/SmallHoursOracle.text",
        "text/plain",
        _SuperColliderProgramIndex_1,
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'superColliderProgramOracle',\n\t\t\t\t'https://rohandrape.net/sw/jssc3/text/SmallHoursOracle.text',\n\t\t\t\t'text/plain',\n\t\t\t\tSuperColliderProgramIndex:/1\n\t\t\t)\n\t\t)\n\t}",
);

sl.addType(
  false,
  "SuperColliderProgramOracle",
  "SuperColliderProgramOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "SuperColliderProgramOracle",
);

sl.copyTraitToType(
  "SmallKansan",
  "SuperColliderProgramOracle",
);

sl.addMethod(
  "SuperColliderProgramOracle",
  "SuperColliderProgramOracle",
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
    return _then_2(
      _superColliderProgramIndex_1(_smallKansas),
      function (_superColliderProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage =
            "Arity: expected 1, _superColliderProgramIndex"; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _then_2(
          _superColliderProgramOracle_1(_smallKansas),
          function (_superColliderProgramOracle) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _superColliderProgramOracle"; /* console.error(errorMessage); */
              throw new Error(errorMessage);
            }
            /* Statements */
            return _addFrame_3(
              _smallKansas,
              _SuperColliderProgramBrowser_3(
                _smallKansas,
                _superColliderProgramIndex,
                _atRandom_1(_superColliderProgramOracle),
              ),
              _event,
            );
          },
        );
      },
    );
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.superColliderProgramIndex.then { :superColliderProgramIndex |\n\t\t\tsmallKansas.superColliderProgramOracle.then { :superColliderProgramOracle |\n\t\t\t\tsmallKansas.addFrame(\n\t\t\t\t\tsmallKansas.SuperColliderProgramBrowser(\n\t\t\t\t\t\tsuperColliderProgramIndex,\n\t\t\t\t\t\tsuperColliderProgramOracle.atRandom\n\t\t\t\t\t),\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);
