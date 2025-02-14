sl.addType(
  false,
  "GeometryCollection",
  "GeometryCollection",
  ["Object"],
  ["contents"],
);

sl.copyTraitToType(
  "Object",
  "GeometryCollection",
);

sl.addMethod(
  "GeometryCollection",
  "GeometryCollection",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBoxMerging_1(
      _collect_2(_contents_1(_self), _boundingBox_1),
    );
  },
  "{ :self |\n\t\tself.contents.collect(boundingBox:/1).boundingBoxMerging\n\t}",
);

sl.addMethod(
  "GeometryCollection",
  "GeometryCollection",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(_collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _forSvg_2(_each, _options);
    }));
  },
  "{ :self :options |\n\t\tself.contents.collect { :each |\n\t\t\teach.forSvg(options)\n\t\t}.unlines\n\t}",
);

sl.addMethod(
  "GeometryCollection",
  "GeometryCollection",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projectionBlock = _asUnaryBlock_1(_projection);
    /* Statements */
    return _GeometryCollection_1(
      _collect_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _project_2(_each, _projectionBlock);
      }),
    );
  },
  "{ :self :projection |\n\t\tlet projectionBlock = projection.asUnaryBlock;\n\t\tGeometryCollection(\n\t\t\tself.contents.collect { :each |\n\t\t\t\teach.project(projectionBlock)\n\t\t\t}\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "GeometryCollection",
  "GeometryCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeometryCollection_0(), _flatten_1(_self));
  },
  "{ :self |\n\t\tnewGeometryCollection().initializeSlots(\n\t\t\tself.flatten\n\t\t)\n\t}",
);
