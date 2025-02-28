sl.addType(
  false,
  "GeometryCollection",
  "GeometryCollection",
  ["Object"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeometryCollection",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBoxMerging_1(
      _collect_2(_contents_1(_self), _boundingBox_1),
    );
  },
  "{ :self | boundingBoxMerging(collect(contents(self),boundingBox:/1)) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(_collect_2(_contents_1(_self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _forSvg_2(_each, _options);
    }));
  },
  "{ :self :options | unlines(collect(contents(self), { :each | forSvg(each,options) })) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "project",
  ["self", "projection"],
  function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projectionBlock = _asUnaryBlock_1(_projection);
    /* Statements */
    return _GeometryCollection_1(
      _collect_2(_contents_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _project_2(_each, _projectionBlock);
      }),
    );
  },
  "{ :self :projection | let projectionBlock = asUnaryBlock(projection); GeometryCollection(collect(contents(self), { :each | project(each,projectionBlock) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GeometryCollection",
  "GeometryCollection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeometryCollection_0(), _flatten_1(_self));
  },
  "{ :self | initializeSlots(newGeometryCollection(),flatten(self)) }",
);
