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
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_contents_1(_self), _arcLength_1));
  }, ["self"]),
  "{ :self | sum(collect(contents(self),arcLength:/1)) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_contents_1(_self), _area_1));
  }, ["self"]),
  "{ :self | sum(collect(contents(self),area:/1)) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBoxMerging_1(
      _collect_2(_contents_1(_self), _boundingBox_1),
    );
  }, ["self"]),
  "{ :self | boundingBoxMerging(collect(contents(self),boundingBox:/1)) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "collect",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _GeometryCollection_1(_collect_2(_contents_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | GeometryCollection(collect(contents(self),aBlock:/1)) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "downsample",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _downsample_2(_each, _anInteger);
      }, ["each"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger | collect(self, { :each | downsample(each,anInteger) }) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _unlines_1(
      _collect_2(
        _contents_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _forSvg_2(_each, _options);
        }, ["each"]),
      ),
    );
  }, ["self", "options"]),
  "{ :self :options | unlines(collect(contents(self), { :each | forSvg(each,options) })) }",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projectionBlock = _asUnaryBlock_1(_projection);
    /* Statements */
    return _GeometryCollection_1(
      _collect_2(
        _contents_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _project_2(_each, _projectionBlock);
        }, ["each"]),
      ),
    );
  }, ["self", "projection"]),
  "{ :self :projection | let projectionBlock = asUnaryBlock(projection); GeometryCollection(collect(contents(self), { :each | project(each,projectionBlock) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GeometryCollection",
  "GeometryCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newGeometryCollection_0(), _flatten_1(_self));
  }, ["self"]),
  "{ :self | initializeSlots(newGeometryCollection(),flatten(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GeometryCollection",
  "lineCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _GeometryCollection_1(_collect_2(_self, _Line_1));
  }, ["self"]),
  "{ :self | GeometryCollection(collect(self,Line:/1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "GeometryCollection",
  "polygonCollection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _GeometryCollection_1(_collect_2(_self, _Polygon_1));
  }, ["self"]),
  "{ :self | GeometryCollection(collect(self,Polygon:/1)) }",
);
