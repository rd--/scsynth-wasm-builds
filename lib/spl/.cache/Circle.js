sl.addType(
  false,
  "Circle",
  "Circle",
  ["Object", "Geometry"],
  ["center", "radius"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Circle",
);

sl.copyTraitMethodsToType(
  "Geometry",
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
    return _hasEqualSlots_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlots(self,anObject) }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
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
    let __SPL116 = _assertIsOfSize_2(_center_1(_self), 2);
    let _r = _at_2(__SPL116, 1);
    let _i = _at_2(__SPL116, 2);
    let _alpha = _Complex_2(_negate_1(_r), _i);
    let _d = _hyphenMinus_2(
      _square_1(_abs_1(_alpha)),
      _square_1(_radius_1(_self)),
    );
    /* Statements */
    return _GeneralisedCircle_3(_c, _alpha, _d);
  }, ["self"]),
  "{ :self | let c = 1; let __SPL116 = assertIsOfSize(center(self), 2); let r = at(__SPL116, 1); let i = at(__SPL116, 2); let alpha = Complex(negate(r), i); let d = -(square(abs(alpha)), square(radius(self))); GeneralisedCircle(c, alpha, d) }",
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
    return _pi_1(_square_1(_radius_1(_self)));
  }, ["self"]),
  "{ :self | pi(square(radius(self))) }",
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
  "{ :self :p | <=(euclideanDistance(p,center(self)), radius(self)) }",
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
  "{ :self | /(1, radius(self)) }",
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
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return 1;
  }, ["unused"]),
  "{ :unused | 1 }",
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
  "{ :unused | 0 }",
);

sl.addMethodToExistingType(
  "Circle",
  "Circle",
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
  "{ :unused | 2 }",
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
    let __SPL117 = _assertIsOfSize_2(_center_1(_self), 2);
    let _a = _at_2(__SPL117, 1);
    let _b = _at_2(__SPL117, 2);
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
  "{ :self | let __SPL117 = assertIsOfSize(center(self), 2); let a = at(__SPL117, 1); let b = at(__SPL117, 2); let rSquared = square(radius(self)); { :x :y | -(+(square((-(x, a))), square((-(y, b)))), rSquared) } }",
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
  "{ :c1 :c2 | let a = radius(c1); let b = radius(c2); let c = norm((-(center(c2), center(c1)))); /((-(-(square(c), square(a)), square(b))), (*(*(2, a), b))) }",
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
  "{ :c1 :c2 | arcCosh(abs(inversiveDistance(c1,c2))) }",
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
  "{ :self :operand | let r1 = radius(self); let r2 = radius(operand); let c1 = center(self); let c2 = center(operand); isVeryCloseTo((+(square(r1), square(r2))),square(norm((-(c2, c1))))) }",
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
  "{ :self :m | Circle(center(self), *(radius(self), m)) }",
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
  "{ :self :factor | center(self, +(center(self), factor)) }",
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
              let __SPL118 = _assertIsOfSize_2(_self, 2);
              let _a = _at_2(__SPL118, 1);
              let _b = _at_2(__SPL118, 2);
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
              let __SPL119 = _assertIsOfSize_2(
                _collect_2(_self, _asComplex_1),
                3,
              );
              let _z1 = _at_2(__SPL119, 1);
              let _z2 = _at_2(__SPL119, 2);
              let _z3 = _at_2(__SPL119, 3);
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
  "{ :self | let k = size(self); if((|(<(k, 2), { >(k, 3) })), { error(self,'circleThrough') }, { caseOf(k,[->(2, { let __SPL118 = assertIsOfSize(self, 2); let a = at(__SPL118, 1); let b = at(__SPL118, 2); let c = /((+(a, b)), 2); let r = /(euclideanDistance(a,b), 2); Circle(c, r) }), ->(3, { let __SPL119 = assertIsOfSize(collect(self,asComplex:/1), 3); let z1 = at(__SPL119, 1); let z2 = at(__SPL119, 2); let z3 = at(__SPL119, 3); let w = /((-(z3, z1)), (-(z2, z1))); let c = +(/(*((-(z2, z1)), (-(w, (^(abs(w), 2))))), (*(Complex(0, 2), imaginary(w)))), z1); let r = abs((-(z1, c))); Circle(asList(c), r) })]) }) }",
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
  "{ :self | &(=(size(self), 4), { =((*(2, sum(square(self)))), square(sum(self))) }) }",
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
  "{ :p :r | if((|(isEmpty(p), { =(size(r), 3) })), { caseOf(size(r), [->(0, { Circle([0, 0], 0) }), ->(1, { Circle(at(r, 1), 0) })], { circleThrough(r) }) }, { let x = first(p); let c = welzlAlgorithm(allButFirst(p), copy(r)); if(containsPoint(c,x), { c }, { welzlAlgorithm(allButFirst(p), ++(r, [x])) }) }) }",
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
  "{ :self | let p = shuffled(self,system); welzlAlgorithm(p, []) }",
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
    let __SPL120 = _assertIsOfSize_2(_asList_1(_self), 2);
    let _h = _at_2(__SPL120, 1);
    let _k = _at_2(__SPL120, 2);
    let _r = _solidus_2(1, _asterisk_2(2, _square_1(_k)));
    /* Statements */
    return _Circle_2([_solidus_2(_h, _k), _r], _r);
  }, ["self"]),
  "{ :self | let __SPL120 = assertIsOfSize(asList(self), 2); let h = at(__SPL120, 1); let k = at(__SPL120, 2); let r = /(1, (*(2, square(k)))); Circle([/(h, k), r], r) }",
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
  "{ :self | collect(self,fordCircle:/1) }",
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
  "{ :self | let c = center(self); let r = radius(self); { :u | if(isVeryCloseTo(u,c), { Infinity }, { let v = -(u, c); let w = norm(v); +(c, (/((*(square(r), v)), square(w)))) }) } }",
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
    let __SPL121 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x = _at_2(__SPL121, 1);
    let _y = _at_2(__SPL121, 2);
    let _a = _radius_1(_self);
    let __SPL122 = _assertIsOfSize_2(_center_1(_reference), 2);
    let _x0 = _at_2(__SPL122, 1);
    let _y0 = _at_2(__SPL122, 2);
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
  "{ :self :reference | let __SPL121 = assertIsOfSize(center(self), 2); let x = at(__SPL121, 1); let y = at(__SPL121, 2); let a = radius(self); let __SPL122 = assertIsOfSize(center(reference), 2); let x0 = at(__SPL122, 1); let y0 = at(__SPL122, 2); let k = radius(reference); let s = /(square(k), (-(+(square((-(x, x0))), square((-(y, y0)))), square(a)))); Circle([+(x0, (*(s, (-(x, x0))))), +(y0, (*(s, (-(y, y0)))))], *(abs(s), a)) }",
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
  "{ :self | let c = center(self); let r = radius(self); { :u | -(square(norm((-(u, c)))), square(r)) } }",
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
  "{ :self :circle | let f:/1 = circleInversion(circle); if(isVector(self), { f(self) }, { collect(self,f:/1) }) }",
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
  "{ :self :circle | let f:/1 = circlePower(circle); if(isVector(self), { f(self) }, { collect(self,f:/1) }) }",
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
  "{ :n :c :r | let theta = /(pi(1), n); let rho = /((*(r, sin(theta))), (-(1, sin(theta)))); let rr = *(square((+(sec(theta), tan(theta)))), r); GeometryCollection([Circle(c, r), Circle(c, rr), collect(circlePoints(n,c, +(r, rho), 0), { :each | Circle(each, rho) })]) }",
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
  "{ :self :circle | if((=(self, Infinity)), { center(circle) }, { error(self,'circleInversion?') }) }",
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
  "{ :self :circle | asComplex(circleInversion(asList(self),circle)) }",
);
