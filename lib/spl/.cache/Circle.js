sl.addType(
  false,
  "Circle",
  "Circle",
  ["Object", "Equatable", "Geometry"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Circle",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Circle",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "Circle",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "asGeneralisedCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = 1;
    let __SplVar1 = _assertIsOfSize_2(_center_1(_self), 2);
    let _r = _at_2(__SplVar1, 1);
    let _i = _at_2(__SplVar1, 2);
    let _alpha = _Complex_2(_negate_1(_r), _i);
    let _d = _hyphenMinus_2(
      _square_1(_abs_1(_alpha)),
      _square_1(_radius_1(_self)),
    );
    /* Statements */
    return _GeneralisedCircle_3(_c, _alpha, _d);
  }, ["self"]),
  "{ :self |\n\t\tlet c = 1;\n\t\tlet [r, i] = self.center;\n\t\tlet alpha = Complex(r.negate, i);\n\t\tlet d = alpha.abs.square - self.radius.square;\n\t\tGeneralisedCircle(c, alpha, d)\n\t}",
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
  "{ :self |\n\t\tself.circumference\n\t}",
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
    return _pi_1(_square_1(_radius_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.radius.square.pi\n\t}",
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
  "{ :self |\n\t\t[\n\t\t\tself.center - self.radius,\n\t\t\tself.center + self.radius\n\t\t]\n\t}",
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
  "{ :self |\n\t\tself.center\n\t}",
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
  "{ :self |\n\t\t(self.radius * 2).pi\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "containsPoint",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(
      _euclideanDistance_2(_p, _center_1(_self)),
      _radius_1(_self),
    );
  }, ["self", "p"]),
  "{ :self :p |\n\t\tp.euclideanDistance(self.center) <= self.radius\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "curvature",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _radius_1(_self));
  }, ["self"]),
  "{ :self |\n\t\t1 / self.radius\n\t}",
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
  "{ :self |\n\t\tself.radius * 2\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "dimension",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["unused"]),
  "{ :unused |\n\t\t1\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "eccentricity",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["unused"]),
  "{ :unused |\n\t\t0\n\t}",
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
    return _size_1(_center_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.center.size\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "implicitEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_center_1(_self), 2);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    let _rSquared = _square_1(_radius_1(_self));
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(
          _square_1(_hyphenMinus_2(_x, _a)),
          _square_1(_hyphenMinus_2(_y, _b)),
        ),
        _rSquared,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.center;\n\t\tlet rSquared = self.radius.square;\n\t\t{ :x :y |\n\t\t\t(x - a).square + (y - b).square - rSquared\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "inversiveDistance",
  ["c1", "c2"],
  sl.annotateFunction(function (_c1, _c2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c1, _c2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _radius_1(_c1);
    let _b = _radius_1(_c2);
    let _c = _norm_1(_hyphenMinus_2(_center_1(_c2), _center_1(_c1)));
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(
        _hyphenMinus_2(_square_1(_c), _square_1(_a)),
        _square_1(_b),
      ),
      _asterisk_2(_asterisk_2(2, _a), _b),
    );
  }, ["c1", "c2"]),
  "{ :c1 :c2 |\n\t\tlet a = c1.radius;\n\t\tlet b = c2.radius;\n\t\tlet c = (c2.center - c1.center).norm;\n\t\t(c.square - a.square - b.square) / (2 * a * b)\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "inversiveDistanceDelta",
  ["c1", "c2"],
  sl.annotateFunction(function (_c1, _c2) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c1, _c2";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcCosh_1(_abs_1(_inversiveDistance_2(_c1, _c2)));
  }, ["c1", "c2"]),
  "{ :c1 :c2 |\n\t\tc1.inversiveDistance(c2).abs.arcCosh\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "isOrthogonalCircle",
  ["self", "operand"],
  sl.annotateFunction(function (_self, _operand) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _operand";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r1 = _radius_1(_self);
    let _r2 = _radius_1(_operand);
    let _c1 = _center_1(_self);
    let _c2 = _center_1(_operand);
    /* Statements */
    return _isVeryCloseTo_2(
      _plusSign_2(_square_1(_r1), _square_1(_r2)),
      _square_1(_norm_1(_hyphenMinus_2(_c2, _c1))),
    );
  }, ["self", "operand"]),
  "{ :self :operand |\n\t\tlet r1 = self.radius;\n\t\tlet r2 = operand.radius;\n\t\tlet c1 = self.center;\n\t\tlet c2 = operand.center;\n\t\t(r1.square + r2.square).isVeryCloseTo(\n\t\t\t(c2 - c1).norm.square\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "svgFragment",
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
  '{ :self :options |\n\t\tlet precision = options[\'precision\'];\n\t\t\'<circle cx="%" cy="%" r="%" />\'.format([\n\t\t\tself.center[1].printStringToFixed(precision),\n\t\t\tself.center[2].printStringToFixed(precision),\n\t\t\tself.radius.printStringToFixed(precision)\n\t\t])\n\t}',
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
  "{ :self |\n\t\tself.circumference\n\t}",
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
  "{ :self :rng :shape |\n\t\tlet c = self.center;\n\t\tlet r = self.radius;\n\t\tlet u = UnitCircle();\n\t\t{\n\t\t\tu.randomPoint(rng) * r + c\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "scale",
  ["self", "m"],
  sl.annotateFunction(function (_self, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _asterisk_2(_radius_1(_self), _m));
  }, ["self", "m"]),
  "{ :self :m |\n\t\tCircle(self.center, self.radius * m)\n\t}",
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
  "{ :self |\n\t\t'Circle(%, %)'.format([\n\t\t\tself.center.storeString,\n\t\t\tself.radius.storeString\n\t\t])\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "translate",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _center_2(_self, _plusSign_2(_center_1(_self), _factor));
  }, ["self", "factor"]),
  "{ :self :factor |\n\t\tself.center := self.center + factor\n\t}",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "translate",
  ["self", "factor"],
  sl.annotateFunction(function (_self, _factor) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _factor";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_plusSign_2(_center_1(_self), _factor), _radius_1(_self));
  }, ["self", "factor"]),
  "{ :self :factor |\n\t\tCircle(self.center + factor, self.radius)\n\t}",
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
  "{ :self |\n\t\tself.center[1]\n\t}",
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
  "{ :self |\n\t\tself.center[2]\n\t}",
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
  "{ :center :radius |\n\t\t(center.rank > 1).if {\n\t\t\tcenter.withCollect(radius.nest, Circle:/2)\n\t\t} {\n\t\t\tnewCircle().initializeSlots(center, radius)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "circleThrough",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSign_2(_k, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_k, 3);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "circleThrough");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_2(_k, [
          _hyphenMinusGreaterThanSign_2(
            2,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar3 = _assertIsOfSize_2(_self, 2);
              let _a = _at_2(__SplVar3, 1);
              let _b = _at_2(__SplVar3, 2);
              let _c = _solidus_2(_plusSign_2(_a, _b), 2);
              let _r = _solidus_2(_euclideanDistance_2(_a, _b), 2);
              /* Statements */
              return _Circle_2(_c, _r);
            }, []),
          ),
          _hyphenMinusGreaterThanSign_2(
            3,
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Temporaries */
              let __SplVar4 = _assertIsOfSize_2(
                _collect_2(_self, _asComplex_1),
                3,
              );
              let _z1 = _at_2(__SplVar4, 1);
              let _z2 = _at_2(__SplVar4, 2);
              let _z3 = _at_2(__SplVar4, 3);
              let _w = _solidus_2(
                _hyphenMinus_2(_z3, _z1),
                _hyphenMinus_2(_z2, _z1),
              );
              let _c = _plusSign_2(
                _solidus_2(
                  _asterisk_2(
                    _hyphenMinus_2(_z2, _z1),
                    _hyphenMinus_2(_w, _circumflexAccent_2(_abs_1(_w), 2)),
                  ),
                  _asterisk_2(_Complex_2(0, 2), _imaginary_1(_w)),
                ),
                _z1,
              );
              let _r = _abs_1(_hyphenMinus_2(_z1, _c));
              /* Statements */
              return _Circle_2(_asList_1(_c), _r);
            }, []),
          ),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet k = self.size;\n\t\t(k < 2 | { k > 3 }).if {\n\t\t\tself.error('circleThrough')\n\t\t} {\n\t\t\tk.caseOf([\n\t\t\t\t2 -> {\n\t\t\t\t\tlet [a, b] = self;\n\t\t\t\t\tlet c = (a + b) / 2;\n\t\t\t\t\tlet r = a.euclideanDistance(b) / 2;\n\t\t\t\t\tCircle(c, r)\n\t\t\t\t},\n\t\t\t\t3 -> {\n\t\t\t\t\tlet [z1, z2, z3] = self.collect(asComplex:/1);\n\t\t\t\t\tlet w = (z3 - z1) / (z2 - z1);\n\t\t\t\t\tlet c = (z2 - z1) * (w - (w.abs ^ 2)) / (0J2 * w.imaginary) + z1;\n\t\t\t\t\tlet r = (z1 - c).abs;\n\t\t\t\t\tCircle(c.asList, r)\n\t\t\t\t}\n\t\t\t])\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "isDescartesQuadruple",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_self), 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _equalsSign_2(
          _asterisk_2(2, _sum_1(_square_1(_self))),
          _square_1(_sum_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.size = 4 & {\n\t\t\t(2 * self.square.sum) = self.sum.square\n\t\t}\n\t}",
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
  "{ :center |\n\t\tCircle(center, 1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "welzlAlgorithm",
  ["p", "r"],
  sl.annotateFunction(function (_p, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _isEmpty_1(_p),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_size_1(_r), 3);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _caseOf_3(
          _size_1(_r),
          [
            _hyphenMinusGreaterThanSign_2(
              0,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Circle_2([0, 0], 0);
              }, []),
            ),
            _hyphenMinusGreaterThanSign_2(
              1,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _Circle_2(_at_2(_r, 1), 0);
              }, []),
            ),
          ],
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _circleThrough_1(_r);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _first_1(_p);
        let _c = _welzlAlgorithm_2(_allButFirst_1(_p), _copy_1(_r));
        /* Statements */
        return _if_3(
          _containsPoint_2(_c, _x),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _welzlAlgorithm_2(
              _allButFirst_1(_p),
              _plusSignPlusSign_2(_r, [_x]),
            );
          }, []),
        );
      }, []),
    );
  }, ["p", "r"]),
  "{ :p :r |\n\t\t(p.isEmpty | { r.size = 3 }).if {\n\t\t\tr.size.caseOf([\n\t\t\t\t0 -> { Circle([0 0], 0) },\n\t\t\t\t1 -> { Circle(r[1], 0) }\n\t\t\t]) {\n\t\t\t\tr.circleThrough\n\t\t\t}\n\t\t} {\n\t\t\tlet x = p.first;\n\t\t\tlet c = welzlAlgorithm(p.allButFirst, r.copy);\n\t\t\tc.containsPoint(x).if {\n\t\t\t\tc\n\t\t\t} {\n\t\t\t\twelzlAlgorithm(p.allButFirst, r ++ [x])\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "welzlAlgorithm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _shuffled_2(_self, _system);
    /* Statements */
    return _welzlAlgorithm_2(_p, []);
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.shuffled(system);\n\t\twelzlAlgorithm(p, [])\n\t}",
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
  "{ :self :r |\n\t\tvar x1, x2, sum, z;\n\t\t{\n\t\t\tx1 := r.nextRandomFloat * 2 - 1;\n\t\t\tx2 := r.nextRandomFloat * 2 - 1;\n\t\t\tsum := (x1 * x1) + (x2 * x2)\n\t\t}.doWhileTrue {\n\t\t\tsum >= 1\n\t\t};\n\t\tz := (x1 * x1) - (x2 * x2);\n\t\t[\n\t\t\tz / sum,\n\t\t\t2 * x1 * x2 / sum\n\t\t]\n\t}",
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
  "{ :self :r :shape |\n\t\t{\n\t\t\tself.randomPoint(r)\n\t\t} ! shape\n\t}",
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
  "{\n\t\tnewUnitCircle()\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Circle",
  "fordCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar5 = _assertIsOfSize_2(_asList_1(_self), 2);
    let _h = _at_2(__SplVar5, 1);
    let _k = _at_2(__SplVar5, 2);
    let _r = _solidus_2(1, _asterisk_2(2, _square_1(_k)));
    /* Statements */
    return _Circle_2([_solidus_2(_h, _k), _r], _r);
  }, ["self"]),
  "{ :self |\n\t\tlet [h, k] = self.asList;\n\t\tlet r = 1 / (2 * k.square);\n\t\tCircle([h / k, r], r)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "fordCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fordCircle_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(fordCircle:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Circle",
  "Circle",
  "circleInversion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _isVeryCloseTo_2(_u, _c),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return Infinity;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _v = _hyphenMinus_2(_u, _c);
          let _w = _norm_1(_v);
          /* Statements */
          return _plusSign_2(
            _c,
            _solidus_2(_asterisk_2(_square_1(_r), _v), _square_1(_w)),
          );
        }, []),
      );
    }, ["u"]);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.center;\n\t\tlet r = self.radius;\n\t\t{ :u |\n\t\t\tu.isVeryCloseTo(c).if {\n\t\t\t\tInfinity\n\t\t\t} {\n\t\t\t\tlet v = u - c;\n\t\t\t\tlet w = v.norm;\n\t\t\t\tc + ((r.square * v) / w.square)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Circle",
  "Circle",
  "circleInversion",
  ["self", "reference"],
  sl.annotateFunction(function (_self, _reference) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _reference";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x = _at_2(__SplVar6, 1);
    let _y = _at_2(__SplVar6, 2);
    let _a = _radius_1(_self);
    let __SplVar7 = _assertIsOfSize_2(_center_1(_reference), 2);
    let _x0 = _at_2(__SplVar7, 1);
    let _y0 = _at_2(__SplVar7, 2);
    let _k = _radius_1(_reference);
    let _s = _solidus_2(
      _square_1(_k),
      _hyphenMinus_2(
        _plusSign_2(
          _square_1(_hyphenMinus_2(_x, _x0)),
          _square_1(_hyphenMinus_2(_y, _y0)),
        ),
        _square_1(_a),
      ),
    );
    /* Statements */
    return _Circle_2([
      _plusSign_2(_x0, _asterisk_2(_s, _hyphenMinus_2(_x, _x0))),
      _plusSign_2(_y0, _asterisk_2(_s, _hyphenMinus_2(_y, _y0))),
    ], _asterisk_2(_abs_1(_s), _a));
  }, ["self", "reference"]),
  "{ :self :reference |\n\t\tlet [x, y] = self.center;\n\t\tlet a = self.radius;\n\t\tlet [x0, y0] = reference.center;\n\t\tlet k = reference.radius;\n\t\tlet s = k.square / ((x - x0).square + (y - y0).square - a.square);\n\t\tCircle(\n\t\t\t[\n\t\t\t\tx0 + (s * (x - x0)),\n\t\t\t\ty0 + (s * (y - y0))\n\t\t\t],\n\t\t\ts.abs * a\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Circle",
  "Circle",
  "circlePower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _r = _radius_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_u) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _u";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _square_1(_norm_1(_hyphenMinus_2(_u, _c))),
        _square_1(_r),
      );
    }, ["u"]);
  }, ["self"]),
  "{ :self |\n\t\tlet c = self.center;\n\t\tlet r = self.radius;\n\t\t{ :u |\n\t\t\t(u - c).norm.square - r.square\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "circleInversion",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _circleInversion_1(_circle);
    /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _f_1);
      }, []),
    );
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\tlet f:/1 = circle.circleInversion;\n\t\tself.isVector.if {\n\t\t\tf(self)\n\t\t} {\n\t\t\tself.collect(f:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Circle",
  "circlePower",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _circlePower_1(_circle);
    /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _f_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _f_1);
      }, []),
    );
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\tlet f:/1 = circle.circlePower;\n\t\tself.isVector.if {\n\t\t\tf(self)\n\t\t} {\n\t\t\tself.collect(f:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Circle",
  "annularSteinerChain",
  ["n", "c", "r"],
  sl.annotateFunction(function (_n, _c, _r) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _c, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _solidus_2(_pi_1(1), _n);
    let _rho = _solidus_2(
      _asterisk_2(_r, _sin_1(_theta)),
      _hyphenMinus_2(1, _sin_1(_theta)),
    );
    let _rr = _asterisk_2(
      _square_1(_plusSign_2(_sec_1(_theta), _tan_1(_theta))),
      _r,
    );
    /* Statements */
    return _GeometryCollection_1([
      _Circle_2(_c, _r),
      _Circle_2(_c, _rr),
      _collect_2(
        _circlePoints_4(_n, _c, _plusSign_2(_r, _rho), 0),
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _Circle_2(_each, _rho);
        }, ["each"]),
      ),
    ]);
  }, ["n", "c", "r"]),
  "{ :n :c :r |\n\t\tlet theta = 1.pi / n;\n\t\tlet rho = (r * theta.sin) / (1 - theta.sin);\n\t\tlet rr = (theta.sec + theta.tan).square * r;\n\t\t[\n\t\t\tCircle(c, r),\n\t\t\tCircle(c, rr),\n\t\t\tn.circlePoints(c, r + rho, 0)\n\t\t\t.collect { :each |\n\t\t\t\tCircle(each, rho)\n\t\t\t}\n\t\t].GeometryCollection\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Circle",
  "circleInversion",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, Infinity),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _center_1(_circle);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "circleInversion?");
      }, []),
    );
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\t(self = Infinity).if {\n\t\t\tcircle.center\n\t\t} {\n\t\t\tself.error('circleInversion?')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Circle",
  "circleInversion",
  ["self", "circle"],
  sl.annotateFunction(function (_self, _circle) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _circle";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(_circleInversion_2(_asList_1(_self), _circle));
  }, ["self", "circle"]),
  "{ :self :circle |\n\t\tself.asList.circleInversion(circle).asComplex\n\t}",
);
