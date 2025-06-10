sl.addType(
  false,
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  ["Object"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeodeticCoordinates",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "elevation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 3);
  }, ["self"]),
  "{ :self | at(coordinates(self), 3) }",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "h",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 3);
  }, ["self"]),
  "{ :self | at(coordinates(self), 3) }",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "lambda",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | at(coordinates(self), 2) }",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "latitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self), 1) }",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "longitude",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | at(coordinates(self), 2) }",
);

sl.addMethodToExistingType(
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  "phi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GeodeticCoordinates",
  "GeodeticCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _copy_1(_self);
    /* Statements */
    _ifTrue_2(
      _equalsSign_2(_size_1(_c), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _addLast_2(_c, 0);
      }, []),
    );
    return _initializeSlots_2(_newGeodeticCoordinates_0(), _c);
  }, ["self"]),
  "{ :self | let c = copy(self); ifTrue((=(size(c), 2)), { addLast(c,0) }); initializeSlots(newGeodeticCoordinates(),c) }",
);
