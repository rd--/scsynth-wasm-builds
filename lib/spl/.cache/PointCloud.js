sl.addType(
  false,
  "PointCloud",
  "PointCloud",
  ["Object", "Geometry"],
  ["vertexCoordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
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
    let _i = _rounded_1(_asterisk_2(_q, _k));
    let __SPL198 = _assertIsOfSize_2(_max_1(_i), 2);
    let _w = _at_2(__SPL198, 1);
    let _h = _at_2(__SPL198, 2);
    let _a = _collect_2(
      _i,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL199 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SPL199, 1);
        let _y = _at_2(__SPL199, 2);
        /* Statements */
        return _hyphenMinusGreaterThanSign_2([_hyphenMinus_2(_h, _y), _x], 1);
      }, ["each"]),
    );
    /* Statements */
    return _Bitmap_1(_normal_1(_SparseArray_3(_a, [_h, _w], 0)));
  }, ["self", "k"]),
  "{ :self :k | let p = vertexCoordinates(self); let q = rescale((-(p, [min(p)]))); let i = rounded((*(q, k))); let __SPL198 = assertIsOfSize(max(i), 2); let w = at(__SPL198, 1); let h = at(__SPL198, 2); let a = collect(i, { :each | let __SPL199 = assertIsOfSize(each, 2); let x = at(__SPL199, 1); let y = at(__SPL199, 2); ->([-(h, y), x], 1) }); Bitmap(normal(SparseArray(a, [h, w], 0))) }",
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
  "{ :self | coordinateBoundingBox(vertexCoordinates(self)) }",
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
  "{ :self | size(anyOne(vertexCoordinates(self))) }",
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
  "{ :self :projection | PointCloud(collect(vertexCoordinates(self),asUnaryBlock(projection))) }",
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
  "{ :self :options | unlines(collect(Point(vertexCoordinates(self)), { :each | svgFragment(each,options) })) }",
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
  "{ :self | initializeSlots(newPointCloud(),self) }",
);
