sl.addType(
  false,
  "PerspectiveDrawing",
  "PerspectiveDrawing",
  ["Object"],
  ["contents", "metadata"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PerspectiveDrawing",
);

sl.addMethodToExistingType(
  "PerspectiveDrawing",
  "PerspectiveDrawing",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _projection = _at_2(_metadata_1(_self), "projection");
    /* Statements */
    return _LineDrawing_2(
      _collect_2(
        _contents_1(_self),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _project_2(_each, _projection);
        }, ["each"]),
      ),
      _metadata_1(_self),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet projection = self.metadata['projection'];\n\t\tLineDrawing(\n\t\t\tself.contents.collect { :each |\n\t\t\t\teach.project(projection)\n\t\t\t},\n\t\t\tself.metadata\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "PerspectiveDrawing",
  "PerspectiveDrawing",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _drawing_1(_asLineDrawing_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asLineDrawing.drawing\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PerspectiveDrawing",
  "PerspectiveDrawing",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(
      _newPerspectiveDrawing_0(),
      _flatten_1(_self),
      _options,
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tnewPerspectiveDrawing().initializeSlots(\n\t\t\tself.flatten,\n\t\t\toptions\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PerspectiveDrawing",
  "PerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      _self,
      _Record_1([[
        "projection",
        _AxonometricProjection_6(_pi_1(_Fraction_2(1n, 6n)), 0, 0, 0.5, 1, -1),
      ], ["height", 100]]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.PerspectiveDrawing(\n\t\t\tprojection: AxonometricProjection(\n\t\t\t\t1/6.pi, 0, 0,\n\t\t\t\t0.5, 1, -1\n\t\t\t),\n\t\t\theight: 100\n\t\t)\n\t}",
);
