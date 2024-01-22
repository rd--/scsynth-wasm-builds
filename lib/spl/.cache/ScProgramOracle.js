sl.extendTraitWithMethod(
  "Cache",
  "ScProgramOracle",
  "scProgramOracle",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw Error(errorMessage);
    }
    /* Statements */
    return _useLibraryItem_2(
      _self,
      _LibraryItem_4(
        "scProgramOracle",
        "https://rohandrape.net/sw/jssc3/text/smallhours-oracle.text",
        "text/plain",
        _ScProgramIndex_1,
      ),
    );
  },
  "{ :self |\n\t\tself.useLibraryItem(\n\t\t\tLibraryItem(\n\t\t\t\t'scProgramOracle',\n\t\t\t\t'https://rohandrape.net/sw/jssc3/text/smallhours-oracle.text',\n\t\t\t\t'text/plain',\n\t\t\t\tScProgramIndex:/1\n\t\t\t)\n\t\t)\n\t}",
);

sl.addType(
  false,
  "ScProgramOracle",
  "ScProgramOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitToType(
  "Object",
  "ScProgramOracle",
);

sl.copyTraitToType(
  "SmallKansan",
  "ScProgramOracle",
);

sl.addMethod(
  "ScProgramOracle",
  "ScProgramOracle",
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
    return _then_2(_scProgramIndex_1(_smallKansas), function (_scProgramIndex) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _scProgramIndex";
        console.error(errorMessage);
        throw Error(errorMessage);
      }
      /* Statements */
      return _then_2(
        _scProgramOracle_1(_smallKansas),
        function (_scProgramOracle) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _scProgramOracle";
            console.error(errorMessage);
            throw Error(errorMessage);
          }
          /* Statements */
          return _addFrame_3(
            _smallKansas,
            _ScProgramBrowser_3(
              _smallKansas,
              _scProgramIndex,
              _atRandom_1(_scProgramOracle),
            ),
            _event,
          );
        },
      );
    });
  },
  "{ :self :smallKansas :event |\n\t\tsmallKansas.scProgramIndex.then { :scProgramIndex |\n\t\t\tsmallKansas.scProgramOracle.then { :scProgramOracle |\n\t\t\t\tsmallKansas.addFrame(\n\t\t\t\t\tsmallKansas.ScProgramBrowser(\n\t\t\t\t\t\tscProgramIndex,\n\t\t\t\t\t\tscProgramOracle.atRandom\n\t\t\t\t\t),\n\t\t\t\t\tevent\n\t\t\t\t)\n\t\t\t}\n\t\t}\n\t}",
);
