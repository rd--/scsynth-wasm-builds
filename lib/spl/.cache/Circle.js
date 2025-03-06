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
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _randomReal_4(_rng, 0, _pi_1(2), []);
        /* Statements */
        return _plusSign_2(
          _center_1(_self),
          _fromPolarCoordinates_1([_radius_1(_self), _theta]),
        );
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | !({ let theta = randomReal(rng,0, pi(2), []); +(center(self), fromPolarCoordinates([radius(self), theta])) }, shape) }",
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
  "Ellipse",
  "Circle",
  ["Object"],
  ["center", "radii"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ellipse",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL1, 1);
    let _ry = _at_2(__SPL1, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(radii(self), 2); let rx = at(__SPL1, 1); let ry = at(__SPL1, 2); pi((*(rx, ry))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
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
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  }, ["self"]),
  "{ :self | [-(center(self), radii(self)), +(center(self), radii(self))] }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "eccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL2 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL2, 1);
    let _b = _at_2(__SPL2, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _squared_1(_solidus_2(_b, _a))));
  }, ["self"]),
  "{ :self | let __SPL2 = assertIsOfSize(radii(self), 2); let a = at(__SPL2, 1); let b = at(__SPL2, 2); sqrt((-(1, squared((/(b, a)))))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
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
    let __SPL3 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL3, 1);
    let _cy = _at_2(__SPL3, 2);
    let __SPL4 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL4, 1);
    let _ry = _at_2(__SPL4, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL3 = assertIsOfSize(center(self), 2); let cx = at(__SPL3, 1); let cy = at(__SPL3, 2); let __SPL4 = assertIsOfSize(radii(self), 2); let rx = at(__SPL4, 1); let ry = at(__SPL4, 2); format(\'<ellipse cx="%" cy="%" rx="%" ry="%" />\',[printStringToFixed(cx,precision), printStringToFixed(cy,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision)]) }',
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "linearEccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL5 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL5, 1);
    let _b = _at_2(__SPL5, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_squared_1(_a), _squared_1(_b)));
  }, ["self"]),
  "{ :self | let __SPL5 = assertIsOfSize(radii(self), 2); let a = at(__SPL5, 1); let b = at(__SPL5, 2); sqrt((-(squared(a), squared(b)))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "semiLatusRectum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL6 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL6, 1);
    let _b = _at_2(__SPL6, 2);
    /* Statements */
    return _solidus_2(_squared_1(_b), _a);
  }, ["self"]),
  "{ :self | let __SPL6 = assertIsOfSize(radii(self), 2); let a = at(__SPL6, 1); let b = at(__SPL6, 2); /(squared(b), a) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Ellipse",
  ["center", "radii"],
  sl.annotateFunction(function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
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
        return _withCollect_3(_center, _radii, _Ellipse_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_radii), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _initializeSlots_3(_newEllipse_0(), _center, _radii);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Sequence>>Ellipse: invalid radii");
          }, []),
        );
      }, []),
    );
  }, ["center", "radii"]),
  "{ :center :radii | if((>(rank(center), 1)), { withCollect(center,radii, Ellipse:/2) }, { if((=(size(radii), 2)), { initializeSlots(newEllipse(),center, radii) }, { error('Sequence>>Ellipse: invalid radii') }) }) }",
);

sl.addType(
  false,
  "Arc",
  "Circle",
  ["Object"],
  ["center", "radii", "angles"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Arc",
);

sl.addMethodToExistingType(
  "Arc",
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
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  }, ["self"]),
  "{ :self | [-(center(self), radii(self)), +(center(self), radii(self))] }",
);

sl.addMethodToExistingType(
  "Arc",
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
    let __SPL7 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL7, 1);
    let _cy = _at_2(__SPL7, 2);
    let __SPL8 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL8, 1);
    let _ry = _at_2(__SPL8, 2);
    let __SPL9 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SPL9, 1);
    let _endAngle = _at_2(__SPL9, 2);
    let __SPL10 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SPL10, 1);
    let _y1 = _at_2(__SPL10, 2);
    let __SPL11 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SPL11, 1);
    let _y2 = _at_2(__SPL11, 2);
    let _largeArcFlag = _boole_1(
      _greaterThanSign_2(
        _percentSign_2(_hyphenMinus_2(_endAngle, _startAngle), _pi_1(2)),
        _pi_1(1),
      ),
    );
    /* Statements */
    return _format_2('<path d="M %,% A % % 0 % 1 %,%" />', [
      _printStringToFixed_2(_x1, _precision),
      _printStringToFixed_2(_y1, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
      _largeArcFlag,
      _printStringToFixed_2(_x2, _precision),
      _printStringToFixed_2(_y2, _precision),
    ]);
  }, ["self", "options"]),
  "{ :self :options | let precision = at(options, 'precision'); let __SPL7 = assertIsOfSize(center(self), 2); let cx = at(__SPL7, 1); let cy = at(__SPL7, 2); let __SPL8 = assertIsOfSize(radii(self), 2); let rx = at(__SPL8, 1); let ry = at(__SPL8, 2); let __SPL9 = assertIsOfSize(angles(self), 2); let startAngle = at(__SPL9, 1); let endAngle = at(__SPL9, 2); let __SPL10 = assertIsOfSize(+([cx, cy], [*(rx, cos(startAngle)), *(ry, sin(startAngle))]), 2); let x1 = at(__SPL10, 1); let y1 = at(__SPL10, 2); let __SPL11 = assertIsOfSize(+([cx, cy], [*(rx, cos(endAngle)), *(ry, sin(endAngle))]), 2); let x2 = at(__SPL11, 1); let y2 = at(__SPL11, 2); let largeArcFlag = boole((>((%((-(endAngle, startAngle)), pi(2))), pi(1)))); format('<path d=\"M %,% A % % 0 % 1 %,%\" />',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision), largeArcFlag, printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Arc",
  ["center", "radii", "angles"],
  sl.annotateFunction(function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newArc_0(), _center, _radii, _angles);
  }, ["center", "radii", "angles"]),
  "{ :center :radii :angles | initializeSlots(newArc(),center, radii, angles) }",
);

sl.addType(
  false,
  "Superellipse",
  "Circle",
  ["Object"],
  ["center", "a", "b", "n"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Superellipse",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Circle",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(4, _a_1(_self)), _b_1(_self)),
      _solidus_2(
        _circumflexAccent_2(
          _gamma_1(_plusSign_2(1, _solidus_2(1, _n_1(_self)))),
          2,
        ),
        _gamma_1(_plusSign_2(1, _solidus_2(2, _n_1(_self)))),
      ),
    );
  }, ["self"]),
  "{ :self | *(*(*(4, a(self)), b(self)), (/((^(gamma((+(1, (/(1, n(self)))))), 2)), gamma((+(1, (/(2, n(self))))))))) }",
);

sl.addMethodToExistingType(
  "Superellipse",
  "Circle",
  "atAll",
  ["self", "tList"],
  sl.annotateFunction(function (_self, _tList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tList";
      throw new Error(errorMessage);
    } /* Statements */
    return (_each_1(_plusSign_2)(
      _collect_2(
        _tList,
        _superellipseFunction_3(_a_1(_self), _b_1(_self), _n_1(_self)),
      ),
      _center_1(_self),
    ));
  }, ["self", "tList"]),
  "{ :self :tList | (each(+) . (collect(tList,superellipseFunction(a(self), b(self), n(self))), center(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Superellipse",
  ["center", "a", "b", "n"],
  sl.annotateFunction(function (_center, _a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _center, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newSuperellipse_0(), _center, _a, _b, _n);
  }, ["center", "a", "b", "n"]),
  "{ :center :a :b :n | initializeSlots(newSuperellipse(),center, a, b, n) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Circle",
  "superellipseFunction",
  ["a", "b", "n"],
  sl.annotateFunction(function (_a, _b, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _m = _solidus_2(2, _n);
      let _c = _cos_1(_t);
      let _s = _sin_1(_t);
      let _x = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_c), _m), _a),
        _sign_1(_c),
      );
      let _y = _asterisk_2(
        _asterisk_2(_circumflexAccent_2(_abs_1(_s), _m), _b),
        _sign_1(_s),
      );
      /* Statements */
      return [_x, _y];
    }, ["t"]);
  }, ["a", "b", "n"]),
  "{ :a :b :n | { :t | let m = /(2, n); let c = cos(t); let s = sin(t); let x = *(*((^(abs(c), m)), a), sign(c)); let y = *(*((^(abs(s), m)), b), sign(s)); [x, y] } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Circle",
  "superformulaFunction",
  ["a", "b", "m", "n1", "n2", "n3"],
  sl.annotateFunction(function (_a, _b, _m, _n1, _n2, _n3) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _a, _b, _m, _n1, _n2, _n3";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _circumflexAccent_2(
        _abs_1(_solidus_2(_cos_1(_solidus_2(_asterisk_2(_m, _u), 4)), _a)),
        _n2,
      );
      let _q = _circumflexAccent_2(
        _abs_1(_solidus_2(_sin_1(_solidus_2(_asterisk_2(_m, _u), 4)), _b)),
        _n3,
      );
      let _r = _circumflexAccent_2(_plusSign_2(_p, _q), _solidus_2(-1, _n1));
      let _x = _asterisk_2(_r, _cos_1(_u));
      let _y = _asterisk_2(_r, _sin_1(_u));
      /* Statements */
      return [_x, _y];
    }, ["u"]);
  }, ["a", "b", "m", "n1", "n2", "n3"]),
  "{ :a :b :m :n1 :n2 :n3 | { :u | let p = ^(abs((/(cos((/(*(m, u), 4))), a))), n2); let q = ^(abs((/(sin((/(*(m, u), 4))), b))), n3); let r = ^((+(p, q)), (/(-1, n1))); let x = *(r, cos(u)); let y = *(r, sin(u)); [x, y] } }",
);
