sl.addType(
  false,
  "Annulus",
  "Annulus",
  ["Object", "Storeable", "Equatable", "Geometry"],
  ["center", "radii"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Annulus",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Annulus",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Annulus",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Annulus",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _r = _at_2(__SplVar1, 1);
    let _bigR = _at_2(__SplVar1, 2);
    /* Statements */
    return _asterisk_2(
      _asterisk_2(_pi_1(1), _plusSign_2(_bigR, _r)),
      _hyphenMinus_2(_bigR, _r),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [r, bigR] = self.radii;\n\t\t1.pi * (bigR + r) * (bigR - r)\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_outerCircle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.outerCircle.boundingBox\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_center_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.center.size\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "geometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _GeometryCollection_1([
      _innerCircle_1(_self),
      _outerCircle_1(_self),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tGeometryCollection(\n\t\t\t[\n\t\t\t\tself.innerCircle,\n\t\t\t\tself.outerCircle\n\t\t\t]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "innerCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _innerRadius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tCircle(self.center, self.innerRadius)\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "innerRadius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _r = _at_2(__SplVar2, 1);
    let __SplUnused13 = _at_2(__SplVar2, 2);
    /* Statements */
    return _r;
  }, ["self"]),
  "{ :self |\n\t\tlet [r, _] = self.radii;\n\t\tr\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "outerCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _outerRadius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tCircle(self.center, self.outerRadius)\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "outerRadius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_radii_1(_self), 2);
    let __SplUnused14 = _at_2(__SplVar3, 1);
    let _bigR = _at_2(__SplVar3, 2);
    /* Statements */
    return _bigR;
  }, ["self"]),
  "{ :self |\n\t\tlet [_, bigR] = self.radii;\n\t\tbigR\n\t}",
);

sl.addMethodToExistingType(
  "Annulus",
  "Annulus",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(_geometry_1(_self), _options);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.geometry.svgFragment(options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Annulus",
  "Annulus",
  ["center", "radii"],
  sl.annotateFunction(function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newAnnulus_0(), _center, _radii);
  }, ["center", "radii"]),
  "{ :center :radii |\n\t\tnewAnnulus().initializeSlots(center, radii)\n\t}",
);

sl.addType(
  false,
  "AnnulusSector",
  "Annulus",
  ["Object", "Storeable", "Equatable", "Geometry"],
  ["center", "radii", "angles"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AnnulusSector",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "AnnulusSector",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "AnnulusSector",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "AnnulusSector",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _r = _at_2(__SplVar4, 1);
    let _bigR = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SplVar5, 1);
    let _b = _at_2(__SplVar5, 2);
    /* Statements */
    return _asterisk_2(
      _solidus_2(_hyphenMinus_2(_b, _a), 2),
      _hyphenMinus_2(_square_1(_bigR), _square_1(_r)),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [r, bigR] = self.radii;\n\t\tlet [a, b] = self.angles;\n\t\t((b - a) / 2) * (bigR.square - r.square)\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
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
  "AnnulusSector",
  "Annulus",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_center_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.center.size\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "geometry",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a1 = _innerArc_1(_self);
    let _a2 = _outerArc_1(_self);
    let __SplVar6 = _assertIsOfSize_2(_vertexCoordinates_1(_a1), 3);
    let __SplUnused15 = _at_2(__SplVar6, 1);
    let _p1 = _at_2(__SplVar6, 2);
    let _q1 = _at_2(__SplVar6, 3);
    let __SplVar7 = _assertIsOfSize_2(_vertexCoordinates_1(_a2), 3);
    let __SplUnused16 = _at_2(__SplVar7, 1);
    let _p2 = _at_2(__SplVar7, 2);
    let _q2 = _at_2(__SplVar7, 3);
    /* Statements */
    return _GeometryCollection_1([
      _a1,
      _a2,
      _Line_1([_p1, _p2]),
      _Line_1([_q1, _q2]),
    ]);
  }, ["self"]),
  "{ :self |\n\t\tlet a1 = self.innerArc;\n\t\tlet a2 = self.outerArc;\n\t\tlet [_, p1, q1] = a1.vertexCoordinates;\n\t\tlet [_, p2, q2] = a2.vertexCoordinates;\n\t\tGeometryCollection(\n\t\t\t[a1, a2, Line([p1, p2]), Line([q1, q2])]\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "innerArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _innerRadius_1(_self);
    /* Statements */
    return _Arc_3(_center_1(_self), [_r, _r], _angles_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.innerRadius;\n\t\tArc(self.center, [r, r], self.angles)\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "innerRadius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar8 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _r = _at_2(__SplVar8, 1);
    let __SplUnused17 = _at_2(__SplVar8, 2);
    /* Statements */
    return _r;
  }, ["self"]),
  "{ :self |\n\t\tlet [r, _] = self.radii;\n\t\tr\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "outerArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _bigR = _outerRadius_1(_self);
    /* Statements */
    return _Arc_3(_center_1(_self), [_bigR, _bigR], _angles_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tlet bigR = self.outerRadius;\n\t\tArc(self.center, [bigR, bigR], self.angles)\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "outerRadius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar9 = _assertIsOfSize_2(_radii_1(_self), 2);
    let __SplUnused18 = _at_2(__SplVar9, 1);
    let _r = _at_2(__SplVar9, 2);
    /* Statements */
    return _r;
  }, ["self"]),
  "{ :self |\n\t\tlet [_, r] = self.radii;\n\t\tr\n\t}",
);

sl.addMethodToExistingType(
  "AnnulusSector",
  "Annulus",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SplVar10 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _r1 = _at_2(__SplVar10, 1);
    let _r2 = _at_2(__SplVar10, 2);
    let _a1 = _innerArc_1(_self);
    let _a2 = _outerArc_1(_self);
    let __SplVar11 = _assertIsOfSize_2(_vertexCoordinates_1(_a1), 3);
    let __SplUnused19 = _at_2(__SplVar11, 1);
    let _p1 = _at_2(__SplVar11, 2);
    let _q1 = _at_2(__SplVar11, 3);
    let __SplVar12 = _assertIsOfSize_2(_vertexCoordinates_1(_a2), 3);
    let __SplUnused20 = _at_2(__SplVar12, 1);
    let _p2 = _at_2(__SplVar12, 2);
    let _q2 = _at_2(__SplVar12, 3);
    /* Statements */
    return _format_2('<path d="M %,% % L %,% % Z" />', [
      _printStringToFixed_2(_at_2(_p1, 1), _precision),
      _printStringToFixed_2(_at_2(_p1, 2), _precision),
      _svgArcTo_8(
        _r1,
        _r1,
        0,
        _isMajorArc_1(_a1),
        true,
        _at_2(_q1, 1),
        _at_2(_q1, 2),
        _precision,
      ),
      _printStringToFixed_2(_at_2(_q2, 1), _precision),
      _printStringToFixed_2(_at_2(_q2, 2), _precision),
      _svgArcTo_8(
        _r2,
        _r2,
        0,
        _isMajorArc_1(_a2),
        false,
        _at_2(_p2, 1),
        _at_2(_p2, 2),
        _precision,
      ),
    ]);
  }, ["self", "options"]),
  "{ :self :options |\n\t\tlet precision = options['precision'];\n\t\tlet [r1, r2] = self.radii;\n\t\tlet a1 = self.innerArc;\n\t\tlet a2 = self.outerArc;\n\t\tlet [_, p1, q1] = a1.vertexCoordinates;\n\t\tlet [_, p2, q2] = a2.vertexCoordinates;\n\t\t'<path d=\"M %,% % L %,% % Z\" />'.format(\n\t\t\t[\n\t\t\t\tp1[1].printStringToFixed(precision),\n\t\t\t\tp1[2].printStringToFixed(precision),\n\t\t\t\tsvgArcTo(r1, r1, 0, a1.isMajorArc, true, q1[1], q1[2], precision),\n\t\t\t\tq2[1].printStringToFixed(precision),\n\t\t\t\tq2[2].printStringToFixed(precision),\n\t\t\t\tsvgArcTo(r2, r2, 0, a2.isMajorArc, false, p2[1], p2[2], precision)\n\t\t\t]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Annulus",
  "AnnulusSector",
  ["center", "radii", "angles"],
  sl.annotateFunction(function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newAnnulusSector_0(), _center, _radii, _angles);
  }, ["center", "radii", "angles"]),
  "{ :center :radii :angles |\n\t\tnewAnnulusSector().initializeSlots(center, radii, angles)\n\t}",
);
