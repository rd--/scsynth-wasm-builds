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
  "{ :self |\n\t\tLineDrawing([self])\n\t}",
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
  "{ :self :projection |\n\t\tPerspectiveDrawing(\n\t\t\t[self],\n\t\t\t(\n\t\t\t\tprojection: projection,\n\t\t\t\theight: 100\n\t\t\t)\n\t\t)\n\t}",
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
  "{ :self |\n\t\tPerspectiveDrawing([self])\n\t}",
);

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "boundingBox");
  }, ["self"]),
  "{ :self |\n\t\tself.typeResponsibility('boundingBox')\n\t}",
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

sl.addMethodToExistingTrait(
  "Geometry",
  "Geometry",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _typeResponsibility_2(_self, "svgFragment");
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.typeResponsibility('svgFragment')\n\t}",
);

sl.addType(
  false,
  "AnnotatedGeometry",
  "Geometry",
  ["Object", "Geometry"],
  ["geometry", "annotation"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AnnotatedGeometry",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "AnnotatedGeometry",
);

sl.addMethodToExistingType(
  "AnnotatedGeometry",
  "Geometry",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_geometry_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.geometry.boundingBox\n\t}",
);

sl.addMethodToExistingType(
  "AnnotatedGeometry",
  "Geometry",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _embeddingDimension_1(_geometry_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.geometry.embeddingDimension\n\t}",
);

sl.addMethodToExistingType(
  "AnnotatedGeometry",
  "Geometry",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2('<g fill="%">%</g>', [
      _rgbString_1(_at_2(_annotation_1(_self), "fillColour")),
      _svgFragment_2(_geometry_1(_self), _options),
    ]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\t'<g fill=\"%\">%</g>'.format(\n\t\t\t[\n\t\t\t\tself.annotation.at('fillColour').rgbString,\n\t\t\t\tself.geometry.svgFragment(options)\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Geometry",
  "Geometry",
  "AnnotatedGeometry",
  ["self", "annotation"],
  sl.annotateFunction(function (_self, _annotation) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _annotation";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newAnnotatedGeometry_0(), _self, _annotation);
  }, ["self", "annotation"]),
  "{ :self :annotation |\n\t\tnewAnnotatedGeometry().initializeSlots(self, annotation)\n\t}",
);
