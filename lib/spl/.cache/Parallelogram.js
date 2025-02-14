sl.addType(
  false,
  "Parallelogram",
  "Parallelogram",
  ["Object"],
  ["origin", "vectors"],
);

sl.copyTraitToType(
  "Object",
  "Parallelogram",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _b = _at_2(_at_2(_vectors_1(_self), 1), 1);
    let _h = _hyphenMinus_2(
      _at_2(_at_2(_vectors_1(_self), 2), 2),
      _at_2(_origin_1(_self), 2),
    );
    /* Statements */
    return _asterisk_2(_b, _h);
  },
  "{ :self |\n\t\tlet b = self.vectors[1][1];\n\t\tlet h = self.vectors[2][2] - self.origin[2];\n\t\tb * h\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "asPolygon",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Polygon_1(_vertexCoordinates_1(_self));
  },
  "{ :self |\n\t\tPolygon(self.vertexCoordinates)\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_asPolygon_1(_self));
  },
  "{ :self |\n\t\tself.asPolygon.boundingBox\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_origin_1(_self));
  },
  "{ :self |\n\t\tself.origin.size\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "height",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _at_2(_at_2(_vectors_1(_self), 2), 2),
      _at_2(_origin_1(_self), 2),
    );
  },
  "{ :self |\n\t\tself.vectors[2][2] - self.origin[2]\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _forSvg_2(_asPolygon_1(_self), _options);
  },
  "{ :self :options |\n\t\tself.asPolygon.forSvg(options)\n\t}",
);

sl.addMethod(
  "Parallelogram",
  "Parallelogram",
  "vertexCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _origin_1(_self);
    let _b = _plusSign_2(_a, _at_2(_vectors_1(_self), 1));
    let _c = _plusSign_2(_b, _at_2(_vectors_1(_self), 2));
    let _d = _plusSign_2(_a, _at_2(_vectors_1(_self), 2));
    /* Statements */
    return [_a, _b, _c, _d];
  },
  "{ :self |\n\t\tlet a = self.origin;\n\t\tlet b = a + self.vectors[1];\n\t\tlet c = b + self.vectors[2];\n\t\tlet d = a + self.vectors[2];\n\t\t[a b c d]\n\t}",
);

sl.addMethod(
  "List",
  "Parallelogram",
  "Parallelogram",
  ["self", "vectors"],
  function (_self, _vectors) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _vectors";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newParallelogram_0(), _self, _vectors);
  },
  "{ :self :vectors |\n\t\tnewParallelogram().initializeSlots(self, vectors)\n\t}",
);
