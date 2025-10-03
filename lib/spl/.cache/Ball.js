sl.addType(
  false,
  "Ball",
  "Ball",
  ["Object", "Equatable"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ball",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Ball",
);

sl.addMethodToExistingType(
  "Ball",
  "Ball",
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
  "{ :self | 3 }",
);

sl.addMethodToExistingType(
  "Ball",
  "Ball",
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
  "{ :self | size(center(self)) }",
);

sl.addMethodToExistingType(
  "Ball",
  "Ball",
  "randomPoint",
  ["self", "aRandom", "shape"],
  sl.annotateFunction(function (_self, _aRandom, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aRandom, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    let _u = _UnitBall_0();
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_asterisk_2(_randomPoint_2(_u, _aRandom), _r), _c);
      }, []),
      _shape,
    );
  }, ["self", "aRandom", "shape"]),
  "{ :self :aRandom :shape | let c = center(self); let r = radius(self); let u = UnitBall(); !({ +(*(randomPoint(u,aRandom), r), c) }, shape) }",
);

sl.addMethodToExistingType(
  "Ball",
  "Ball",
  "volume",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_solidus_2(_asterisk_2(_cube_1(_radius_1(_self)), 4), 3));
  }, ["self"]),
  "{ :self | pi((/(*(cube(radius(self)), 4), 3))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ball",
  "Ball",
  ["center", "radius"],
  sl.annotateFunction(function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newBall_0(), _center, _radius);
  }, ["center", "radius"]),
  "{ :center :radius | initializeSlots(newBall(),center, radius) }",
);

sl.addType(
  false,
  "UnitBall",
  "Ball",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnitBall",
);

sl.addMethodToExistingType(
  "UnitBall",
  "Ball",
  "randomPoint",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
    let _x2 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
    let _x3 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
    /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(
        _plusSign_2(
          _plusSign_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2)),
          _asterisk_2(_x3, _x3),
        ),
        1,
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [_x1, _x2, _x3];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPoint_2(_self, _r);
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r | let x1 = -(*(nextRandomFloat(r), 2), 1); let x2 = -(*(nextRandomFloat(r), 2), 1); let x3 = -(*(nextRandomFloat(r), 2), 1); if((<=(+(+((*(x1, x1)), (*(x2, x2))), (*(x3, x3))), 1)), { [x1, x2, x3] }, { randomPoint(self,r) }) }",
);

sl.addMethodToExistingType(
  "UnitBall",
  "Ball",
  "randomPoint",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPoint_2(_self, _r);
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | !({ randomPoint(self,r) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Void",
  "Ball",
  "UnitBall",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newUnitBall_0();
  }, []),
  "{ newUnitBall() }",
);
