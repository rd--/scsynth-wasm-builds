sl.addType(
  false,
  "Sphere",
  "Sphere",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Sphere",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isSphere_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _equalsSign_2(_center_1(_self), _center_1(_anObject)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _equalsSign_2(_radius_1(_self), _radius_1(_anObject));
          }, []),
        );
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | &(isSphere(anObject), { &(=(center(self), center(anObject)), { =(radius(self), radius(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_asterisk_2(_squared_1(_radius_1(_self)), 4));
  }, ["self"]),
  "{ :self | pi((*(squared(radius(self)), 4))) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "diameter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_radius_1(_self), 2);
  }, ["self"]),
  "{ :self | *(radius(self), 2) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  }, ["self"]),
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
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
  "Sphere",
  "Sphere",
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
    let _u = _UnitSphere_0();
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
  "{ :self :aRandom :shape | let c = center(self); let r = radius(self); let u = UnitSphere(); !({ +(*(randomPoint(u,aRandom), r), c) }, shape) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  }, ["self"]),
  "{ :self | storeStringAsInitializeSlots(self) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "translateBy",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Sphere_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  }, ["self", "factor"]),
  "{ :self :factor | Sphere(+(center(self), factor), radius(self)) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "x",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 1);
  }, ["self"]),
  "{ :self | at(center(self), 1) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "y",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 2);
  }, ["self"]),
  "{ :self | at(center(self), 2) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "z",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 3);
  }, ["self"]),
  "{ :self | at(center(self), 3) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Sphere",
  "Sphere",
  ["center", "radius"],
  sl.annotateFunction(function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newSphere_0(), _center, _radius);
  }, ["center", "radius"]),
  "{ :center :radius | initializeSlots(newSphere(),center, radius) }",
);

sl.addType(
  false,
  "UnitSphere",
  "Sphere",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnitSphere",
);

sl.addMethodToExistingType(
  "UnitSphere",
  "Sphere",
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
    let _sum = _plusSign_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2));
    /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_sum, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomPoint_2(_self, _r);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _asterisk_2(2, _sqrt_1(_hyphenMinus_2(1, _sum)));
        /* Statements */
        return [
          _asterisk_2(_x1, _z),
          _asterisk_2(_x2, _z),
          _hyphenMinus_2(1, _asterisk_2(2, _sum)),
        ];
      }, []),
    );
  }, ["self", "r"]),
  "{ :self :r | let x1 = -(*(nextRandomFloat(r), 2), 1); let x2 = -(*(nextRandomFloat(r), 2), 1); let sum = +((*(x1, x1)), (*(x2, x2))); if((>=(sum, 1)), { randomPoint(self,r) }, { let z = *(2, sqrt((-(1, sum)))); [*(x1, z), *(x2, z), -(1, (*(2, sum)))] }) }",
);

sl.addMethodToExistingType(
  "UnitSphere",
  "Sphere",
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
  "Sphere",
  "UnitSphere",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newUnitSphere_0();
  }, []),
  "{ newUnitSphere() }",
);
