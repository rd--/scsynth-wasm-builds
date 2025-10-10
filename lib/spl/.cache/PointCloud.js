sl.addType(
  false,
  "PointCloud",
  "PointCloud",
  ["Object", "Equatable", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PointCloud",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PointCloud",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "PointCloud",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "asBitmap",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _vertexCoordinates_1(_self);
    let _q = _rescale_1(_hyphenMinus_2(_p, [_min_1(_p)]));
    let _i = _round_1(_asterisk_2(_q, _k));
    let __SplVar1 = _assertIsOfSize_2(_max_1(_i), 2);
    let _w = _at_2(__SplVar1, 1);
    let _h = _at_2(__SplVar1, 2);
    let _a = _collect_2(
      _i,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SplVar2, 1);
        let _y = _at_2(__SplVar2, 2);
        /* Statements */
        return _hyphenMinusGreaterThanSign_2([_hyphenMinus_2(_h, _y), _x], 1);
      }, ["each"]),
    );
    /* Statements */
    return _Bitmap_1(_normal_1(_SparseArray_3(_a, [_h, _w], 0)));
  }, ["self", "k"]),
  "{ :self :k |\n\t\tlet p = self.vertexCoordinates;\n\t\tlet q = (p - [p.min]).rescale;\n\t\tlet i = (q * k).round;\n\t\tlet [w, h] = i.max;\n\t\tlet a = i.collect { :each |\n\t\t\tlet [x, y] = each;\n\t\t\t[h - y, x] -> 1\n\t\t};\n\t\tSparseArray(a, [h, w], 0).normal.Bitmap\n\t}",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(_vertexCoordinates_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.coordinateBoundingBox\n\t}",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_vertexCoordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.vertexCoordinates.anyOne.size\n\t}",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
  "project",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PointCloud_1(
      _collect_2(_vertexCoordinates_1(_self), _asUnaryBlock_1(_projection)),
    );
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\tPointCloud(\n\t\t\tself.vertexCoordinates.collect(projection.asUnaryBlock)\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "PointCloud",
  "PointCloud",
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
        _Point_1(_vertexCoordinates_1(_self)),
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
  "{ :self :options |\n\t\tself.vertexCoordinates.Point.collect { :each |\n\t\t\teach.svgFragment(options)\n\t\t}.unlines\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PointCloud",
  "PointCloud",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newPointCloud_0(), _self);
  }, ["self"]),
  "{ :self |\n\t\tnewPointCloud().initializeSlots(self)\n\t}",
);
