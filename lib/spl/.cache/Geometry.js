sl.addTrait("Geometry", "Geometry");

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "asLineDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _LineDrawing_1([_self]);
  }, ["self"]),
  "{ :self |\n\t\t[self].LineDrawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "asPerspectiveDrawing",
  ["self", "projection"],
  sl.annotateFunction(function (_self, _projection) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _projection";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_2(
      [_self],
      _Record_1([["projection", _projection], ["height", 100]]),
    );
  }, ["self", "projection"]),
  "{ :self :projection |\n\t\t[self].PerspectiveDrawing(\n\t\t\tprojection: projection,\n\t\t\theight: 100\n\t\t)\n\t}",
);

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "asPerspectiveDrawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PerspectiveDrawing_1([_self]);
  }, ["self"]),
  "{ :self |\n\t\t[self].PerspectiveDrawing\n\t}",
);

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "drawing",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _d = _embeddingDimension_1(_self);
    /* Statements */
    return _if_3(
      _equalsSign_2(_d, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawing_1(_asLineDrawing_1(_self));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _drawing_1(_asPerspectiveDrawing_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet d = self.embeddingDimension;\n\t\t(d = 2).if {\n\t\t\tself.asLineDrawing.drawing\n\t\t} {\n\t\t\tself.asPerspectiveDrawing.drawing\n\t\t}\n\t}",
);

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "embeddingDimension");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('embeddingDimension')\n\t}",
);
