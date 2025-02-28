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
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isCircle_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_center_1(_self), _center_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_radius_1(_self), _radius_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject | &(isCircle(anObject), { &(=(center(self), center(anObject)), { =(radius(self), radius(anObject)) }) }) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  },
  "{ :self | circumference(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_squared_1(_radius_1(_self)));
  },
  "{ :self | pi(squared(radius(self))) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radius_1(_self)),
      _plusSign_2(_center_1(_self), _radius_1(_self)),
    ];
  },
  "{ :self | [-(center(self), radius(self)), +(center(self), radius(self))] }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_self);
  },
  "{ :self | center(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "circumference",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_asterisk_2(_radius_1(_self), 2));
  },
  "{ :self | pi((*(radius(self), 2))) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "diameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_radius_1(_self), 2);
  },
  "{ :self | *(radius(self), 2) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self | 1 }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
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
  },
  '{ :self :options | let precision = at(options, \'precision\'); format(\'<circle cx="%" cy="%" r="%" />\',[printStringToFixed(at(center(self), 1),precision), printStringToFixed(at(center(self), 2),precision), printStringToFixed(radius(self),precision)]) }',
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "perimeter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  },
  "{ :self | circumference(self) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "randomPoint",
  ["self", "rng", "shape"],
  function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
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
    }, _shape);
  },
  "{ :self :rng :shape | !({ let theta = randomReal(rng,0, pi(2), []); +(center(self), fromPolarCoordinates([radius(self), theta])) }, shape) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "Circle(",
      _storeString_1(_center_1(_self)),
      ", ",
      _storeString_1(_radius_1(_self)),
      ")",
    ], "");
  },
  "{ :self | join(['Circle(', storeString(center(self)), ', ', storeString(radius(self)), ')'],'') }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  },
  "{ :self :factor | Circle(+(center(self), factor), radius(self)) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 1);
  },
  "{ :self | at(center(self), 1) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 2);
  },
  "{ :self | at(center(self), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Circle",
  ["center", "radius"],
  function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_center), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollect_3(_center, _nest_1(_radius), _Circle_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_3(_newCircle_0(), _center, _radius);
    });
  },
  "{ :center :radius | if((>(rank(center), 1)), { withCollect(center,nest(radius), Circle:/2) }, { initializeSlots(newCircle(),center, radius) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "unitCircle",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center, 1);
  },
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL59 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL59, 1);
    let _ry = _at_2(__SPL59, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  },
  "{ :self | let __SPL59 = assertIsOfSize(radii(self), 2); let rx = at(__SPL59, 1); let ry = at(__SPL59, 2); pi((*(rx, ry))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  },
  "{ :self | [-(center(self), radii(self)), +(center(self), radii(self))] }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "eccentricity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL60 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL60, 1);
    let _b = _at_2(__SPL60, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _squared_1(_solidus_2(_b, _a))));
  },
  "{ :self | let __SPL60 = assertIsOfSize(radii(self), 2); let a = at(__SPL60, 1); let b = at(__SPL60, 2); sqrt((-(1, squared((/(b, a)))))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL61 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL61, 1);
    let _cy = _at_2(__SPL61, 2);
    let __SPL62 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL62, 1);
    let _ry = _at_2(__SPL62, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  },
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL61 = assertIsOfSize(center(self), 2); let cx = at(__SPL61, 1); let cy = at(__SPL61, 2); let __SPL62 = assertIsOfSize(radii(self), 2); let rx = at(__SPL62, 1); let ry = at(__SPL62, 2); format(\'<ellipse cx="%" cy="%" rx="%" ry="%" />\',[printStringToFixed(cx,precision), printStringToFixed(cy,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision)]) }',
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "linearEccentricity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL63 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL63, 1);
    let _b = _at_2(__SPL63, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_squared_1(_a), _squared_1(_b)));
  },
  "{ :self | let __SPL63 = assertIsOfSize(radii(self), 2); let a = at(__SPL63, 1); let b = at(__SPL63, 2); sqrt((-(squared(a), squared(b)))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Circle",
  "semiLatusRectum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL64 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL64, 1);
    let _b = _at_2(__SPL64, 2);
    /* Statements */
    return _solidus_2(_squared_1(_b), _a);
  },
  "{ :self | let __SPL64 = assertIsOfSize(radii(self), 2); let a = at(__SPL64, 1); let b = at(__SPL64, 2); /(squared(b), a) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Ellipse",
  ["center", "radii"],
  function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_center), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollect_3(_center, _radii, _Ellipse_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_size_1(_radii), 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newEllipse_0(), _center, _radii);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Sequence>>Ellipse: invalid radii");
      });
    });
  },
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
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  },
  "{ :self | [-(center(self), radii(self)), +(center(self), radii(self))] }",
);

sl.addMethodToExistingType(
  "Arc",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL65 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL65, 1);
    let _cy = _at_2(__SPL65, 2);
    let __SPL66 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL66, 1);
    let _ry = _at_2(__SPL66, 2);
    let __SPL67 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SPL67, 1);
    let _endAngle = _at_2(__SPL67, 2);
    let __SPL68 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SPL68, 1);
    let _y1 = _at_2(__SPL68, 2);
    let __SPL69 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SPL69, 1);
    let _y2 = _at_2(__SPL69, 2);
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
  },
  "{ :self :options | let precision = at(options, 'precision'); let __SPL65 = assertIsOfSize(center(self), 2); let cx = at(__SPL65, 1); let cy = at(__SPL65, 2); let __SPL66 = assertIsOfSize(radii(self), 2); let rx = at(__SPL66, 1); let ry = at(__SPL66, 2); let __SPL67 = assertIsOfSize(angles(self), 2); let startAngle = at(__SPL67, 1); let endAngle = at(__SPL67, 2); let __SPL68 = assertIsOfSize(+([cx, cy], [*(rx, cos(startAngle)), *(ry, sin(startAngle))]), 2); let x1 = at(__SPL68, 1); let y1 = at(__SPL68, 2); let __SPL69 = assertIsOfSize(+([cx, cy], [*(rx, cos(endAngle)), *(ry, sin(endAngle))]), 2); let x2 = at(__SPL69, 1); let y2 = at(__SPL69, 2); let largeArcFlag = boole((>((%((-(endAngle, startAngle)), pi(2))), pi(1)))); format('<path d=\"M %,% A % % 0 % 1 %,%\" />',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision), largeArcFlag, printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "Arc",
  ["center", "radii", "angles"],
  function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newArc_0(), _center, _radii, _angles);
  },
  "{ :center :radii :angles | initializeSlots(newArc(),center, radii, angles) }",
);
