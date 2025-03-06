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
    return _surfaceArea_1(_self);
  }, ["self"]),
  "{ :self | surfaceArea(self) }",
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
  "randomSurfacePoint",
  ["self", "aRandom"],
  sl.annotateFunction(function (_self, _aRandom) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aRandom";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    let _z = _randomReal_4(_aRandom, _negated_1(_r), _r, []);
    let _phi = _randomReal_4(_aRandom, 0, _pi_1(2), []);
    let _m = _sqrt_1(_hyphenMinus_2(_squared_1(_r), _squared_1(_z)));
    let _x = _asterisk_2(_m, _cos_1(_phi));
    let _y = _asterisk_2(_m, _sin_1(_phi));
    /* Statements */
    return _plusSign_2([_x, _y, _z], _c);
  }, ["self", "aRandom"]),
  "{ :self :aRandom | let c = center(self); let r = radius(self); let z = randomReal(aRandom,negated(r), r, []); let phi = randomReal(aRandom,0, pi(2), []); let m = sqrt((-(squared(r), squared(z)))); let x = *(m, cos(phi)); let y = *(m, sin(phi)); +([x, y, z], c) }",
);

sl.addMethodToExistingType(
  "Sphere",
  "Sphere",
  "randomSurfacePoint",
  ["self", "aRandom", "shape"],
  sl.annotateFunction(function (_self, _aRandom, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aRandom, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _randomSurfacePoint_2(_self, _aRandom);
      }, []),
      _shape,
    );
  }, ["self", "aRandom", "shape"]),
  "{ :self :aRandom :shape | !({ randomSurfacePoint(self,aRandom) }, shape) }",
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
  "surfaceArea",
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
  "volume",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_solidus_2(_asterisk_2(_cubed_1(_radius_1(_self)), 4), 3));
  }, ["self"]),
  "{ :self | pi((/(*(cubed(radius(self)), 4), 3))) }",
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
