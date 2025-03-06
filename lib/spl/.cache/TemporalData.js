sl.addType(
  false,
  "TemporalData",
  "TemporalData",
  ["Object"],
  ["pathList"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TemporalData",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "discretePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretePlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | discretePlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "linePlot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _linePlot_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | linePlot(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "pathCount",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_pathList_1(_self));
  }, ["self"]),
  "{ :self | size(pathList(self)) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "timeList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _pathList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _first_1(_transposed_1(_each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(pathList(self), { :each | first(transposed(each)) }) }",
);

sl.addMethodToExistingType(
  "TemporalData",
  "TemporalData",
  "valueList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _pathList_1(_self),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _second_1(_transposed_1(_each));
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self | collect(pathList(self), { :each | second(transposed(each)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "TemporalData",
  "TemporalData",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newTemporalData_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newTemporalData(),self) }",
);
