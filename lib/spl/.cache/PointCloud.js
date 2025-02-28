sl.addType(
  false,
  "PointCloud",
  "PointCloud",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PointCloud",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(
      _collect_2(_Point_1(_vertexCoordinates_1(_self)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _forSvg_2(_each, _options);
      }),
    );
  },
  "{ :self :options | unlines(collect(Point(vertexCoordinates(self)), { :each | forSvg(each,options) })) }",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PointCloud_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  },
  "{ :self :projection | PointCloud(collect(vertexCoordinates(self),asUnaryBlock(projection))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PointCloud",
  "PointCloud",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPointCloud_0(), _self);
  },
  "{ :self | initializeSlots(newPointCloud(),self) }",
);
