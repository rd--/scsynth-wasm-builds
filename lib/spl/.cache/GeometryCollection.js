sl.addType(
  false,
  "GeometryCollection",
  "GeometryCollection",
  ["Object", "Equatable", "Geometry"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "GeometryCollection",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "GeometryCollection",
);

sl.copyTraitMethodsToType(
  "Geometry",
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
  "{ :self |\n\t\tself.contents.collect(arcLength:/1).sum\n\t}",
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
  "{ :self |\n\t\tself.contents.collect(area:/1).sum\n\t}",
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
  "{ :self |\n\t\tself.contents.collect(boundingBox:/1).boundingBoxMerging\n\t}",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "circleInversion",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Statements */
    return _GeometryCollection_1(
      _collect_2(
        _contents_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _circleInversion_2(_each, _circle);
        }, ["each"]),
      ),
    );
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\tself.contents.collect { :each |\n\t\t\teach.circleInversion(circle)\n\t\t}.GeometryCollection\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tGeometryCollection(\n\t\t\tself.contents.collect(aBlock:/1)\n\t\t)\n\t}",
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
  "{ :self :anInteger |\n\t\tself.collect { :each |\n\t\t\teach.downsample(anInteger)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(
      _nub_1(_collect_2(_contents_1(_self), _embeddingDimension_1)),
      1,
    );
    let _n = _at_2(__SplVar1, 1);
    /* Statements */
    return _n;
  }, ["self"]),
  "{ :self |\n\t\tlet [n] = self.contents.collect(embeddingDimension:/1).nub;\n\t\tn\n\t}",
);

sl.addMethodToExistingType(
  "GeometryCollection",
  "GeometryCollection",
  "svgFragment",
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
          return _svgFragment_2(_each, _options);
        }, ["each"]),
      ),
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.contents.collect { :each |\n\t\t\teach.svgFragment(options)\n\t\t}.unlines\n\t}",
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
  "{ :self :projection |\n\t\tlet projectionBlock = projection.asUnaryBlock;\n\t\tGeometryCollection(\n\t\t\tself.contents.collect { :each |\n\t\t\t\teach.project(projectionBlock)\n\t\t\t}\n\t\t)\n\t}",
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
  "{ :self |\n\t\tnewGeometryCollection().initializeSlots(\n\t\t\tself.flatten\n\t\t)\n\t}",
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
  "{ :self |\n\t\tself.collect(Line:/1).GeometryCollection\n\t}",
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
  "{ :self |\n\t\tself.collect(Polygon:/1).GeometryCollection\n\t}",
);
