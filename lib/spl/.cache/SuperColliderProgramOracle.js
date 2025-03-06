sl.addType(
  false,
  "SuperColliderProgramOracle",
  "SuperColliderProgramOracle",
  ["Object", "SmallKansan"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "SuperColliderProgramOracle",
);

sl.copyTraitMethodsToType(
  "SmallKansan",
  "SuperColliderProgramOracle",
);

sl.addMethodToExistingType(
  "SuperColliderProgramOracle",
  "SuperColliderProgramOracle",
  "openIn",
  ["self", "smallKansas", "event"],
  sl.annotateFunction(function (_self, _smallKansas, _event) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _smallKansas, _event";
      throw new Error(errorMessage);
    } /* Statements */
    return _then_2(
      _requestLibraryItem_2(_system, "SuperColliderProgramIndex"),
      sl.annotateFunction(function (_superColliderProgramIndex) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _superColliderProgramIndex";
          throw new Error(errorMessage);
        } /* Statements */
        return _then_2(
          _requestLibraryItem_2(_system, "SuperColliderProgramOracle"),
          sl.annotateFunction(function (_superColliderProgramOracle) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage =
                "Arity: expected 1, _superColliderProgramOracle";
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
          }, ["superColliderProgramOracle"]),
        );
      }, ["superColliderProgramIndex"]),
    );
  }, ["self", "smallKansas", "event"]),
  "{ :self :smallKansas :event | then(requestLibraryItem(system,'SuperColliderProgramIndex'), { :superColliderProgramIndex | then(requestLibraryItem(system,'SuperColliderProgramOracle'), { :superColliderProgramOracle | addFrame(smallKansas,SuperColliderProgramBrowser(smallKansas,superColliderProgramIndex, atRandom(superColliderProgramOracle)), event) }) }) }",
);
