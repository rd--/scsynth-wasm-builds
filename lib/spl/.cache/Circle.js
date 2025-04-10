sl.addType(
  false,
  "Circle",
  "Circle",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Circle",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isCircle_1(_anObject),
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
  "{ :self :anObject | &(isCircle(anObject), { &(=(center(self), center(anObject)), { =(radius(self), radius(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "arcLength",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  }, ["self"]),
  "{ :self | circumference(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_squared_1(_radius_1(_self)));
  }, ["self"]),
  "{ :self | pi(squared(radius(self))) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radius_1(_self)),
      _plusSign_2(_center_1(_self), _radius_1(_self)),
    ];
  }, ["self"]),
  "{ :self | [-(center(self), radius(self)), +(center(self), radius(self))] }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "centroid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_self);
  }, ["self"]),
  "{ :self | center(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "circumference",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_asterisk_2(_radius_1(_self), 2));
  }, ["self"]),
  "{ :self | pi((*(radius(self), 2))) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
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
  "Circle",
  "Circle",
  "dimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["self"]),
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "embeddingDimension",
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
  "Circle",
  "Circle",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    /* Statements */
    return _format_2('<circle cx="%" cy="%" r="%" />', [
      _printStringToFixed_2(_at_2(_center_1(_self), 1), _precision),
      _printStringToFixed_2(_at_2(_center_1(_self), 2), _precision),
      _printStringToFixed_2(_radius_1(_self), _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); format(\'<circle cx="%" cy="%" r="%" />\',[printStringToFixed(at(center(self), 1),precision), printStringToFixed(at(center(self), 2),precision), printStringToFixed(radius(self),precision)]) }',
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "perimeter",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  }, ["self"]),
  "{ :self | circumference(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
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
    let _u = _UnitCircle_0();
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
  "{ :self :rng :shape | let c = center(self); let r = radius(self); let u = UnitCircle(); !({ +(*(randomPoint(u,rng), r), c) }, shape) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "storeString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _format_2("Circle(%, %)", [
      _storeString_1(_center_1(_self)),
      _storeString_1(_radius_1(_self)),
    ]);
  }, ["self"]),
  "{ :self | format('Circle(%, %)',[storeString(center(self)), storeString(radius(self))]) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "translateBy",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  }, ["self", "factor"]),
  "{ :self :factor | Circle(+(center(self), factor), radius(self)) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
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
  "Circle",
  "Circle",
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

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Circle",
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
        return _withCollect_3(_center, _nest_1(_radius), _Circle_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newCircle_0(), _center, _radius);
      }, []),
    );
  }, ["center", "radius"]),
  "{ :center :radius | if((>(rank(center), 1)), { withCollect(center,nest(radius), Circle:/2) }, { initializeSlots(newCircle(),center, radius) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "unitCircle",
  ["center"],
  sl.annotateFunction(function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center, 1);
  }, ["center"]),
  "{ :center | Circle(center, 1) }",
);

sl.addType(
  false,
  "UnitCircle",
  "Circle",
  ["Object"],
  [],
);

sl.copyTraitMethodsToType(
  "Object",
  "UnitCircle",
);

sl.addMethodToExistingType(
  "UnitCircle",
  "Circle",
  "randomPoint",
  ["self", "r"],
  sl.annotateFunction(function (_self, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1, _x2, _sum, _z;
    /* Statements */
    _doWhileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _x1 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
        _x2 = _hyphenMinus_2(_asterisk_2(_nextRandomFloat_1(_r), 2), 1);
        return _sum = _plusSign_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_sum, 1);
      }, []),
    );
    _z = _hyphenMinus_2(_asterisk_2(_x1, _x1), _asterisk_2(_x2, _x2));
    return [
      _solidus_2(_z, _sum),
      _solidus_2(_asterisk_2(_asterisk_2(2, _x1), _x2), _sum),
    ];
  }, ["self", "r"]),
  "{ :self :r | var x1, x2, sum, z;doWhileTrue({ x1 := -(*(nextRandomFloat(r), 2), 1); x2 := -(*(nextRandomFloat(r), 2), 1); sum := +((*(x1, x1)), (*(x2, x2))) }, { >=(sum, 1) }); z := -((*(x1, x1)), (*(x2, x2))); [/(z, sum), /(*(*(2, x1), x2), sum)] }",
);

sl.addMethodToExistingType(
  "UnitCircle",
  "Circle",
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
  "Circle",
  "UnitCircle",
  [],
  sl.annotateFunction(function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      throw new Error(errorMessage);
    } /* Statements */
    return _newUnitCircle_0();
  }, []),
  "{ newUnitCircle() }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Circle",
  "epitrochoid",
  ["b", "a", "h"],
  sl.annotateFunction(function (_b, _a, _h) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _b, _a, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _plusSign_2(_a, _b);
      let _q = _solidus_2(_p, _b);
      /* Statements */
      return [
        _hyphenMinus_2(
          _asterisk_2(_p, _cos_1(_theta)),
          _asterisk_2(_h, _cos_1(_asterisk_2(_q, _theta))),
        ),
        _hyphenMinus_2(
          _asterisk_2(_p, _sin_1(_theta)),
          _asterisk_2(_h, _sin_1(_asterisk_2(_q, _theta))),
        ),
      ];
    }, ["theta"]);
  }, ["b", "a", "h"]),
  "{ :b :a :h | { :theta | let p = +(a, b); let q = /(p, b); [-((*(p, cos(theta))), (*(h, cos((*(q, theta)))))), -((*(p, sin(theta))), (*(h, sin((*(q, theta))))))] } }",
);
