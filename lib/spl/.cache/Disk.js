sl.addType(
  false,
  "Disk",
  "Disk",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Disk",
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
  "{ :self :rng :shape | let c = center(self); let r = radius(self); let u = UnitDisk(); !({ +(*(randomPoint(u,rng), r), c) }, shape) }",
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
    return _initializeSlots_3(_newDisk_0(), _center, _radius);
  }, ["center", "radius"]),
  "{ :center :radius | initializeSlots(newDisk(),center, radius) }",
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
  "{ :self :r | var x1, x2;doWhileTrue({ x1 := -(*(nextRandomFloat(r), 2), 1); x2 := -(*(nextRandomFloat(r), 2), 1) }, { >(+((*(x1, x1)), (*(x2, x2))), 1) }); [x1, x2] }",
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
  "{ newUnitDisk() }",
);
