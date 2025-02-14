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
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "SuperColliderProgramIndex"),
      function (_superColliderProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _superColliderProgramIndex";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _requestLibraryItem_2(_system, "SuperColliderProgramOracle"),
          function (_superColliderProgramOracle) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _superColliderProgramOracle";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
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
  "{ :self :smallKansas :event |\n\t\tsystem.requestLibraryItem(\n\t\t\t'SuperColliderProgramIndex'\n\t\t).then { :superColliderProgramIndex |\n\t\t\tsystem.requestLibraryItem(\n\t\t\t\t'SuperColliderProgramOracle'\n\t\t\t).then { :superColliderProgramOracle |\n\t\t\t\tsmallKansas.addFrame(\n\t\t\t\t\tsmallKansas.SuperColliderProgramBrowser(\n\t\t\t\t\t\tsuperColliderProgramIndex,\n\t\t\t\t\t\tsuperColliderProgramOracle.atRandom\n\t\t\t\t\t),\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);
