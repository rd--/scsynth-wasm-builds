sl.addType(
  false,
  "Circle",
  "Circle",
  ["Object"],
  ["center", "radius"],
);

sl.copyTraitToType(
  "Object",
  "Circle",
);

sl.addMethod(
  "Circle",
  "Circle",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isCircle_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _ampersand_2(
        _equalsSign_2(_center_1(_self), _center_1(_anObject)),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_radius_1(_self), _radius_1(_anObject));
        },
      );
    });
  },
  "{ :self :anObject |\n\t\tanObject.isCircle & {\n\t\t\tself.center = anObject.center & {\n\t\t\t\tself.radius = anObject.radius\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "arcLength",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  },
  "{ :self |\n\t\tself.circumference\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_squared_1(_radius_1(_self)));
  },
  "{ :self |\n\t\tself.radius.squared.pi\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radius_1(_self)),
      _plusSign_2(_center_1(_self), _radius_1(_self)),
    ];
  },
  "{ :self |\n\t\t[\n\t\t\tself.center - self.radius,\n\t\t\tself.center + self.radius\n\t\t]\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "centroid",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _center_1(_self);
  },
  "{ :self |\n\t\tself.center\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "circumference",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _pi_1(_asterisk_2(_radius_1(_self), 2));
  },
  "{ :self |\n\t\t(self.radius * 2).pi\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "diameter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_radius_1(_self), 2);
  },
  "{ :self |\n\t\tself.radius * 2\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  },
  "{ :self |\n\t\t1\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
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
  '{ :self :options |\n\t\tlet precision = options::precision;\n\t\t\'<circle cx="%" cy="%" r="%" />\'.format([\n\t\t\tself.center[1].printStringToFixed(precision),\n\t\t\tself.center[2].printStringToFixed(precision),\n\t\t\tself.radius.printStringToFixed(precision)\n\t\t])\n\t}',
);

sl.addMethod(
  "Circle",
  "Circle",
  "perimeter",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumference_1(_self);
  },
  "{ :self |\n\t\tself.circumference\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "randomPoint",
  ["self", "rng", "shape"],
  function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
  "{ :self :rng :shape |\n\t\t{\n\t\t\tlet theta = rng.randomReal(0, 2.pi, []);\n\t\t\tself.center + [self.radius, theta].fromPolarCoordinates\n\t\t} ! shape\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
  "{ :self |\n\t\t[\n\t\t\t'Circle(',\n\t\t\tself.center.storeString,\n\t\t\t', ',\n\t\t\tself.radius.storeString,\n\t\t\t')'\n\t\t].join('')\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "translateBy",
  ["self", "factor"],
  function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  },
  "{ :self :factor |\n\t\tCircle(self.center + factor, self.radius)\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "x",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 1);
  },
  "{ :self |\n\t\tself.center[1]\n\t}",
);

sl.addMethod(
  "Circle",
  "Circle",
  "y",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_center_1(_self), 2);
  },
  "{ :self |\n\t\tself.center[2]\n\t}",
);

sl.addMethod(
  "List",
  "Circle",
  "Circle",
  ["center", "radius"],
  function (_center, _radius) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radius";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_center), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollect_3(_center, _nest_1(_radius), _Circle_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _initializeSlots_3(_newCircle_0(), _center, _radius);
    });
  },
  "{ :center :radius |\n\t\t(center.rank > 1).if {\n\t\t\tcenter.withCollect(radius.nest, Circle:/2)\n\t\t} {\n\t\t\tnewCircle().initializeSlots(center, radius)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Circle",
  "unitCircle",
  ["center"],
  function (_center) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _center";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center, 1);
  },
  "{ :center |\n\t\tCircle(center, 1)\n\t}",
);

sl.addType(
  false,
  "Ellipse",
  "Circle",
  ["Object"],
  ["center", "radii"],
);

sl.copyTraitToType(
  "Object",
  "Ellipse",
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym30 = _assertIsOfSize_2(_radii_1(_self), 2),
      _rx = _at_2(__genSym30, 1),
      _ry = _at_2(__genSym30, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  },
  "{ :self |\n\t\tlet [rx, ry] = self.radii;\n\t\t(rx * ry).pi\n\t}",
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  },
  "{ :self |\n\t\t[\n\t\t\tself.center - self.radii,\n\t\t\tself.center + self.radii\n\t\t]\n\t}",
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "eccentricity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym31 = _assertIsOfSize_2(_radii_1(_self), 2),
      _a = _at_2(__genSym31, 1),
      _b = _at_2(__genSym31, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _squared_1(_solidus_2(_b, _a))));
  },
  "{ :self |\n\t\tlet [a, b] = self.radii;\n\t\t(1 - (b / a).squared).sqrt\n\t}",
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __genSym32 = _assertIsOfSize_2(_center_1(_self), 2),
      _cx = _at_2(__genSym32, 1),
      _cy = _at_2(__genSym32, 2);
    let __genSym33 = _assertIsOfSize_2(_radii_1(_self), 2),
      _rx = _at_2(__genSym33, 1),
      _ry = _at_2(__genSym33, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  },
  '{ :self :options |\n\t\tlet precision = options::precision;\n\t\tlet [cx, cy] = self.center;\n\t\tlet [rx, ry] = self.radii;\n\t\t\'<ellipse cx="%" cy="%" rx="%" ry="%" />\'.format([\n\t\t\tcx.printStringToFixed(precision),\n\t\t\tcy.printStringToFixed(precision),\n\t\t\trx.printStringToFixed(precision),\n\t\t\try.printStringToFixed(precision)\n\t\t])\n\t}',
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "linearEccentricity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym34 = _assertIsOfSize_2(_radii_1(_self), 2),
      _a = _at_2(__genSym34, 1),
      _b = _at_2(__genSym34, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_squared_1(_a), _squared_1(_b)));
  },
  "{ :self |\n\t\tlet [a, b] = self.radii;\n\t\t(a.squared - b.squared).sqrt\n\t}",
);

sl.addMethod(
  "Ellipse",
  "Circle",
  "semiLatusRectum",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym35 = _assertIsOfSize_2(_radii_1(_self), 2),
      _a = _at_2(__genSym35, 1),
      _b = _at_2(__genSym35, 2);
    /* Statements */
    return _solidus_2(_squared_1(_b), _a);
  },
  "{ :self |\n\t\tlet [a, b] = self.radii;\n\t\tb.squared / a\n\t}",
);

sl.addMethod(
  "List",
  "Circle",
  "Ellipse",
  ["center", "radii"],
  function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_rank_1(_center), 1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _withCollect_3(_center, _radii, _Ellipse_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_equalsSign_2(_size_1(_radii), 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newEllipse_0(), _center, _radii);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("Sequence>>Ellipse: invalid radii");
      });
    });
  },
  "{ :center :radii |\n\t\t(center.rank > 1).if {\n\t\t\tcenter.withCollect(radii, Ellipse:/2)\n\t\t} {\n\t\t\t(radii.size = 2).if {\n\t\t\t\tnewEllipse().initializeSlots(center, radii)\n\t\t\t} {\n\t\t\t\t'Sequence>>Ellipse: invalid radii'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.addType(
  false,
  "Arc",
  "Circle",
  ["Object"],
  ["center", "radii", "angles"],
);

sl.copyTraitToType(
  "Object",
  "Arc",
);

sl.addMethod(
  "Arc",
  "Circle",
  "boundingBox",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  },
  "{ :self |\n\t\t[\n\t\t\tself.center - self.radii,\n\t\t\tself.center + self.radii\n\t\t]\n\t}",
);

sl.addMethod(
  "Arc",
  "Circle",
  "forSvg",
  ["self", "options"],
  function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __genSym36 = _assertIsOfSize_2(_center_1(_self), 2),
      _cx = _at_2(__genSym36, 1),
      _cy = _at_2(__genSym36, 2);
    let __genSym37 = _assertIsOfSize_2(_radii_1(_self), 2),
      _rx = _at_2(__genSym37, 1),
      _ry = _at_2(__genSym37, 2);
    let __genSym38 = _assertIsOfSize_2(_angles_1(_self), 2),
      _startAngle = _at_2(__genSym38, 1),
      _endAngle = _at_2(__genSym38, 2);
    let __genSym39 = _assertIsOfSize_2(
        _plusSign_2([_cx, _cy], [
          _asterisk_2(_rx, _cos_1(_startAngle)),
          _asterisk_2(_ry, _sin_1(_startAngle)),
        ]),
        2,
      ),
      _x1 = _at_2(__genSym39, 1),
      _y1 = _at_2(__genSym39, 2);
    let __genSym40 = _assertIsOfSize_2(
        _plusSign_2([_cx, _cy], [
          _asterisk_2(_rx, _cos_1(_endAngle)),
          _asterisk_2(_ry, _sin_1(_endAngle)),
        ]),
        2,
      ),
      _x2 = _at_2(__genSym40, 1),
      _y2 = _at_2(__genSym40, 2);
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
  "{ :self :options |\n\t\tlet precision = options::precision;\n\t\tlet [cx, cy] = self.center;\n\t\tlet [rx, ry] = self.radii;\n\t\tlet [startAngle, endAngle] = self.angles;\n\t\tlet [x1, y1] = [cx, cy] + [rx * startAngle.cos, ry * startAngle.sin];\n\t\tlet [x2, y2] = [cx, cy] + [rx * endAngle.cos, ry * endAngle.sin];\n\t\tlet largeArcFlag = (((endAngle - startAngle) % 2.pi) > 1.pi).boole;\n\t\t'<path d=\"M %,% A % % 0 % 1 %,%\" />'.format([\n\t\t\tx1.printStringToFixed(precision), y1.printStringToFixed(precision),\n\t\t\trx.printStringToFixed(precision), ry.printStringToFixed(precision),\n\t\t\tlargeArcFlag,\n\t\t\tx2.printStringToFixed(precision), y2.printStringToFixed(precision)\n\t\t])\n\t}",
);

sl.addMethod(
  "List",
  "Circle",
  "Arc",
  ["center", "radii", "angles"],
  function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newArc_0(), _center, _radii, _angles);
  },
  "{ :center :radii :angles |\n\t\tnewArc().initializeSlots(center, radii, angles)\n\t}",
);
