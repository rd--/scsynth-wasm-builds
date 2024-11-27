sl.addType(
  false,
  "HalfPlane",
  "Plane",
  ["Object"],
  [],
);

sl.copyTraitToType(
  "Object",
  "HalfPlane",
);

sl.addType(
  false,
  "InfinitePlane",
  "Plane",
  ["Object"],
  ["a", "b", "c", "d"],
);

sl.copyTraitToType(
  "Object",
  "InfinitePlane",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _anObject"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _hasEqualSlots_2(_self, _anObject);
  },
  "{ :self :anObject |\n\t\tself.hasEqualSlots(anObject)\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "area",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _inf;
  },
  "{ :self |\n\t\tinf\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "distance",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _second_1(_hessianNormalForm_1(_self));
  },
  "{ :self |\n\t\tself.hessianNormalForm.second\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "distance",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aPoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _signedPointPlaneDistance_2(_terms_1(_self), _asList_1(_aPoint));
  },
  "{ :self :aPoint |\n\t\tself.terms.signedPointPlaneDistance(aPoint.asList)\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return 3;
  },
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "hessianNormalForm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym26 = _assertIsOfSize_2(_terms_1(_self), 4),
      _a = _at_2(__genSym26, 1),
      _b = _at_2(__genSym26, 2),
      _c = _at_2(__genSym26, 3),
      _d = _at_2(__genSym26, 4);
    let _z = _sqrt_1(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
        _asterisk_2(_c, _c),
      ),
    );
    let _n = _solidus_2([_a, _b, _c], _z);
    let _p = _solidus_2(_d, _z);
    /* Statements */
    return [_n, _p];
  },
  "{ :self |\n\t\tlet [a, b, c, d] = self.terms;\n\t\tlet z = ((a * a) + (b * b) + (c * c)).sqrt;\n\t\tlet n = [a b c] / z;\n\t\tlet p = d / z;\n\t\t[n, p]\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "includes",
  ["self", "aPoint"],
  function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _self, _aPoint"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _isVeryCloseTo_2(_pointPlaneDistance_2(_terms_1(_self), _aPoint), 0);
  },
  "{ :self :aPoint |\n\t\tself.terms.pointPlaneDistance(aPoint).isVeryCloseTo(0)\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "intercepts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _n = _negated_1(_d_1(_self));
    /* Statements */
    return [
      _solidus_2(_n, _a_1(_self)),
      _solidus_2(_n, _b_1(_self)),
      _solidus_2(_n, _c_1(_self)),
    ];
  },
  "{ :self |\n\t\tlet n = self.d.negated;\n\t\t[\n\t\t\tn / self.a,\n\t\t\tn / self.b,\n\t\t\tn / self.c\n\t\t]\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _storeStringAsInitializeSlots_1(_self);
  },
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "terms",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_a_1(_self), _b_1(_self), _c_1(_self), _d_1(_self)];
  },
  "{ :self |\n\t\t[self.a, self.b, self.c, self.d]\n\t}",
);

sl.addMethod(
  "InfinitePlane",
  "Plane",
  "unitNormal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _first_1(_hessianNormalForm_1(_self));
  },
  "{ :self |\n\t\tself.hessianNormalForm.first\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Plane",
  "InfinitePlane",
  ["a", "b", "c", "d"],
  function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage =
        "Arity: expected 4, _a, _b, _c, _d"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_5(_newInfinitePlane_0(), _a, _b, _c, _d);
  },
  "{ :a :b :c :d |\n\t\tnewInfinitePlane().initializeSlots(a, b, c, d)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plane",
  "asInfinitePlane",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage =
        "Arity: expected 1, _self"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_equalsSign_2(_size_1(_self), 4), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym27 = _assertIsOfSize_2(_self, 4),
        _a = _at_2(__genSym27, 1),
        _b = _at_2(__genSym27, 2),
        _c = _at_2(__genSym27, 3),
        _d = _at_2(__genSym27, 4);
      /* Statements */
      return _InfinitePlane_4(_a, _b, _c, _d);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_equalsSign_2(_size_1(_self), 3), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Temporaries */
        let __genSym28 = _assertIsOfSize_2(_self, 3),
          _p1 = _at_2(__genSym28, 1),
          _p2 = _at_2(__genSym28, 2),
          _p3 = _at_2(__genSym28, 3);
        /* Statements */
        return _InfinitePlane_3(_p1, _p2, _p2);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage =
            "Arity: expected 0, "; /* console.error(errorMessage); */
          throw new Error(errorMessage);
        }
        /* Statements */
        return _error_2(_self, "@Sequence>>asInfinitePlane");
      });
    });
  },
  "{ :self |\n\t\t(self.size = 4).if {\n\t\t\tlet [a, b, c, d] = self;\n\t\t\tInfinitePlane(a, b, c, d)\n\t\t} {\n\t\t\t(self.size = 3).if {\n\t\t\t\tlet [p1, p2, p3] = self;\n\t\t\t\tInfinitePlane(p1, p2, p2)\n\t\t\t} {\n\t\t\t\tself.error('@Sequence>>asInfinitePlane')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plane",
  "InfinitePlane",
  ["p1", "p2", "p3"],
  function (_p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _p1, _p2, _p3"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym29 = _assertIsOfSize_2(_p1, 3),
      _x1 = _at_2(__genSym29, 1),
      _y1 = _at_2(__genSym29, 2),
      _z1 = _at_2(__genSym29, 3);
    let __genSym30 = _assertIsOfSize_2(_p2, 3),
      _x2 = _at_2(__genSym30, 1),
      _y2 = _at_2(__genSym30, 2),
      _z2 = _at_2(__genSym30, 3);
    let __genSym31 = _assertIsOfSize_2(_p3, 3),
      _x3 = _at_2(__genSym31, 1),
      _y3 = _at_2(__genSym31, 2),
      _z3 = _at_2(__genSym31, 3);
    let _a = _plusSign_2(
      _plusSign_2(
        _asterisk_2(_y1, _hyphenMinus_2(_z2, _z3)),
        _asterisk_2(_y2, _hyphenMinus_2(_z3, _z1)),
      ),
      _asterisk_2(_y3, _hyphenMinus_2(_z1, _z2)),
    );
    let _b = _plusSign_2(
      _plusSign_2(
        _asterisk_2(_z1, _hyphenMinus_2(_x2, _x3)),
        _asterisk_2(_z2, _hyphenMinus_2(_x3, _x1)),
      ),
      _asterisk_2(_z3, _hyphenMinus_2(_x1, _x2)),
    );
    let _c = _plusSign_2(
      _plusSign_2(
        _asterisk_2(_x1, _hyphenMinus_2(_y2, _y3)),
        _asterisk_2(_x2, _hyphenMinus_2(_y3, _y1)),
      ),
      _asterisk_2(_x3, _hyphenMinus_2(_y1, _y2)),
    );
    let _d = _negated_1(_sum_1(_asterisk_2([_a, _b, _c], _p1)));
    /* Statements */
    _ifTrue_2(_allSatisfy_2([_a, _b, _c], _isInteger_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let _z = _gcd_1([_a, _b, _c]);
      /* Statements */
      return /* List Assignment */ (function () {
        const __genSym32 = _solidus_2([_a, _b, _c, _d], _z);
        _a = _at_2(__genSym32, 1);
        _b = _at_2(__genSym32, 2);
        _c = _at_2(__genSym32, 3);
        _d = _at_2(__genSym32, 4);
      })();
    });
    _ifTrue_2(_allSatisfy_2([_a, _b, _c], _isNonPositive_1), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage =
          "Arity: expected 0, "; /* console.error(errorMessage); */
        throw new Error(errorMessage);
      }
      /* Statements */
      return /* List Assignment */ (function () {
        const __genSym33 = _negated_1([_a, _b, _c, _d]);
        _a = _at_2(__genSym33, 1);
        _b = _at_2(__genSym33, 2);
        _c = _at_2(__genSym33, 3);
        _d = _at_2(__genSym33, 4);
      })();
    });
    return _InfinitePlane_4(_a, _b, _c, _d);
  },
  "{ :p1 :p2 :p3 |\n\t\tlet [x1, y1, z1] = p1;\n\t\tlet [x2, y2, z2] = p2;\n\t\tlet [x3, y3, z3] = p3;\n\t\tlet a = (y1 * (z2 - z3)) + (y2 * (z3 - z1)) + (y3 * (z1 - z2));\n\t\tlet b = (z1 * (x2 - x3)) + (z2 * (x3 - x1)) + (z3 * (x1 - x2));\n\t\tlet c = (x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2));\n\t\tlet d = ([a b c] * p1).sum.negated;\n\t\t[a b c].allSatisfy(isInteger:/1).ifTrue {\n\t\t\tlet z = [a b c].gcd;\n\t\t\t[a, b, c, d] := [a b c d] / z\n\t\t};\n\t\t[a b c].allSatisfy(isNonPositive:/1).ifTrue {\n\t\t\t[a, b, c, d] := [a b c d].negated\n\t\t};\n\t\tInfinitePlane(a, b, c, d)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plane",
  "pointPlaneDistance",
  ["plane", "point"],
  function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _plane, _point"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Statements */
    return _abs_1(_signedPointPlaneDistance_2(_plane, _point));
  },
  "{ :plane :point |\n\t\tplane.signedPointPlaneDistance(point).abs\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Plane",
  "signedPointPlaneDistance",
  ["plane", "point"],
  function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage =
        "Arity: expected 2, _plane, _point"; /* console.error(errorMessage); */
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym34 = _assertIsOfSize_2(_plane, 4),
      _a = _at_2(__genSym34, 1),
      _b = _at_2(__genSym34, 2),
      _c = _at_2(__genSym34, 3),
      _d = _at_2(__genSym34, 4);
    let __genSym35 = _assertIsOfSize_2(_point, 3),
      _x = _at_2(__genSym35, 1),
      _y = _at_2(__genSym35, 2),
      _z = _at_2(__genSym35, 3);
    /* Statements */
    return _solidus_2(
      _plusSign_2(
        _plusSign_2(
          _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
          _asterisk_2(_c, _z),
        ),
        _d,
      ),
      _sqrt_1(
        _plusSign_2(
          _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
          _asterisk_2(_c, _c),
        ),
      ),
    );
  },
  "{ :plane :point |\n\t\tlet [a, b, c, d] = plane;\n\t\tlet [x, y, z] = point;\n\t\t((a * x) + (b * y) + (c * z) + d) / ((a * a) + (b * b) + (c * c)).sqrt\n\t}",
);
