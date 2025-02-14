sl.addType(
  false,
  "PointCloud",
  "PointCloud",
  ["Object"],
  ["vertexCoordinates"],
);

sl.copyTraitToType(
  "Object",
  "PointCloud",
);

sl.addMethod(
  "PointCloud",
  "PointCloud",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethod(
  "PointCloud",
  "PointCloud",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(
      _collect_2(_Point_1(_vertexCoordinates_1(_self)), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _forSvg_2(_each, _options);
      }),
    );
  },
  "{ :self :options |\n\t\tself.vertexCoordinates.Point.collect { :each |\n\t\t\teach.forSvg(options)\n\t\t}.unlines\n\t}",
);

sl.addMethod(
  "PointCloud",
  "PointCloud",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _PointCloud_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  },
  "{ :self :projection |\n\t\tPointCloud(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "PointCloud",
  "PointCloud",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPointCloud_0(), _self);
  },
  "{ :self |\n\t\tnewPointCloud().initializeSlots(self)\n\t}",
);
