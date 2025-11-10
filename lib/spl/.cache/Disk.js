sl.addType(
  false,
  "Disk",
  "Disk",
  ["Object", "Equatable", "Geometry"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Disk",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Disk",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Disk",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "asCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _radius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tCircle(self.center, self.radius)\n\t}",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _boundingBox_1(_asCircle_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asCircle.boundingBox\n\t}",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "dimension",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["unused"]),
  "{ :unused |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "embeddingDimension",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["unused"]),
  "{ :unused |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "randomPoint",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    let _u = _UnitDisk_0();
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_randomPoint_2(_u, _rng), _r), _c);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet c = self.center;\n\t\tlet r = self.radius;\n\t\tlet u = UnitDisk();\n\t\t{\n\t\t\tu.randomPoint(rng) * r + c\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "Disk",
  "Disk",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Statements */
    return _svgFragment_2(
      _AnnotatedGeometry_2(
        _asCircle_1(_self),
        _Record_1([["fillColour", _RgbColour_2([0, 0, 0], 1)]]),
      ),
      _options,
    );
  }, ["self", "options"]),
  "{ :self :options |\n\t\tself.asCircle.AnnotatedGeometry(\n\t\t\tfillColour: RgbColour([0 0 0], 1)\n\t\t).svgFragment(options)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Disk",
  "Disk",
  ["center", "radius"],
  sl.annotateFunction(function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_center), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_center, _nest_1(_radius), _Disk_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newDisk_0(), _center, _radius);
      }, []),
    );
  }, ["center", "radius"]),
  "{ :center :radius |\n\t\t(center.rank > 1).if {\n\t\t\tcenter.withCollect(radius.nest, Disk:/2)\n\t\t} {\n\t\t\tnewDisk().initializeSlots(center, radius)\n\t\t}\n\t}",
);

sl.addType(
  false,
  "UnitDisk",
  "Disk",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnitDisk",
);

sl.addMethodToExistingType(
  "UnitDisk",
  "Disk",
  "randomPoint",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1, _x2;
    /* Statements */
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x1 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
        return _x2 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(
          _plusSign_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2)),
          1,
        );
      }, []),
    );
    return [_x1, _x2];
  }, ["self", "r"]),
  "{ :self :r |\n\t\tvar x1, x2;\n\t\t{\n\t\t\tx1 := r.nextRandomFloat * 2 - 1;\n\t\t\tx2 := r.nextRandomFloat * 2 - 1\n\t\t}.doWhileTrue {\n\t\t\t(x1 * x1) + (x2 * x2) > 1\n\t\t};\n\t\t[x1 x2]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Disk",
  "UnitDisk",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newUnitDisk_0();
  }, []),
  "{\n\t\tnewUnitDisk()\n\t}",
);
