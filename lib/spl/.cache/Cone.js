sl.addType(
  false,
  "Cone",
  "Cone",
  ["Object", "Storeable", "Equatable", "Geometry"],
  ["coordinates", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Cone",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "Cone",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Cone",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Cone",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "baseArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    /* Statements */
    return _pi_1(_square_1(_r));
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tr.square.pi\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  }, ["self"]),
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_anyOne_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates.anyOne.size\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "height",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    /* Statements */
    return _euclideanDistance_2(_a, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.coordinates;\n\t\ta.euclideanDistance(b)\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "lateralSurfaceArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    let _l = _slantHeight_1(_self);
    /* Statements */
    return _asterisk_2(_pi_1(_r), _l);
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tlet l = self.slantHeight;\n\t\tr.pi * l\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "slantHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _radius_1(_self);
    let _h = _height_1(_self);
    /* Statements */
    return _sqrt_1(_plusSign_2(_square_1(_r), _square_1(_h)));
  }, ["self"]),
  "{ :self |\n\t\tlet r = self.radius;\n\t\tlet h = self.height;\n\t\t(r.square + h.square).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "Cone",
  "Cone",
  "volume",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _baseArea_1(_self);
    let _h = _height_1(_self);
    /* Statements */
    return _solidus_2(_asterisk_2(_a, _h), 3);
  }, ["self"]),
  "{ :self |\n\t\tlet a = self.baseArea;\n\t\tlet h = self.height;\n\t\t(a * h) / 3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Cone",
  "Cone",
  ["coordinates", "radius"],
  sl.annotateFunction(function (_coordinates, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _coordinates, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newCone_0(), _coordinates, _radius);
  }, ["coordinates", "radius"]),
  "{ :coordinates :radius |\n\t\tnewCone().initializeSlots(coordinates, radius)\n\t}",
);
