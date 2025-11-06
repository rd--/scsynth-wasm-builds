sl.addType(
  false,
  "InfinitePlane",
  "InfinitePlane",
  ["Object", "Equatable"],
  ["a", "b", "c", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
  "InfinitePlane",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "InfinitePlane",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return Infinity;
  }, ["self"]),
  "{ :self |\n\t\tInfinity\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "dihedralAngle",
  ["self", "aPlane"],
  sl.annotateFunction(function (_self, _aPlane) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPlane";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcCos_1(_dot_2(_unitNormal_1(_self), _unitNormal_1(_aPlane)));
  }, ["self", "aPlane"]),
  "{ :self :aPlane |\n\t\tself.unitNormal.dot(aPlane.unitNormal).arcCos\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
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
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "distance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _second_1(_hessianNormalForm_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.hessianNormalForm.second\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "distance",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _signedPointPlaneDistance_2(
      _terms_1(_self),
      _coordinates_1(_aPoint),
    );
  }, ["self", "aPoint"]),
  "{ :self :aPoint |\n\t\tself.terms.signedPointPlaneDistance(aPoint.coordinates)\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 3;
  }, ["self"]),
  "{ :self |\n\t\t3\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "hessianNormalForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_terms_1(_self), 4);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
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
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b, c, d] = self.terms;\n\t\tlet z = ((a * a) + (b * b) + (c * c)).sqrt;\n\t\tlet n = [a b c] / z;\n\t\tlet p = d / z;\n\t\t[n, p]\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "includes",
  ["self", "aPoint"],
  sl.annotateFunction(function (_self, _aPoint) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aPoint";
      throw new Error(errorMessage);
    } /* Statements */
    return _isVeryCloseTo_2(_pointPlaneDistance_2(_terms_1(_self), _aPoint), 0);
  }, ["self", "aPoint"]),
  "{ :self :aPoint |\n\t\tself.terms.pointPlaneDistance(aPoint).isVeryCloseTo(0)\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "intercepts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _negate_1(_d_1(_self));
    /* Statements */
    return [
      _solidus_2(_n, _a_1(_self)),
      _solidus_2(_n, _b_1(_self)),
      _solidus_2(_n, _c_1(_self)),
    ];
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.d.negate;\n\t\t[\n\t\t\tn / self.a,\n\t\t\tn / self.b,\n\t\t\tn / self.c\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
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
  "{ :self |\n\t\tself.storeStringAsInitializeSlots\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "surfaceNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_a_1(_self), _b_1(_self), _c_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.a, self.b, self.c]\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "terms",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_a_1(_self), _b_1(_self), _c_1(_self), _d_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.a, self.b, self.c, self.d]\n\t}",
);

sl.addMethodToExistingType(
  "InfinitePlane",
  "InfinitePlane",
  "unitNormal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_1(_hessianNormalForm_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.hessianNormalForm.first\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "InfinitePlane",
  "InfinitePlane",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_5(_newInfinitePlane_0(), _a, _b, _c, _d);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d |\n\t\tnewInfinitePlane().initializeSlots(a, b, c, d)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "InfinitePlane",
  "asInfinitePlane",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_self), 4),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_self, 4);
        let _a = _at_2(__SplVar2, 1);
        let _b = _at_2(__SplVar2, 2);
        let _c = _at_2(__SplVar2, 3);
        let _d = _at_2(__SplVar2, 4);
        /* Statements */
        return _InfinitePlane_4(_a, _b, _c, _d);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_self), 3),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let __SplVar3 = _assertIsOfSize_2(_self, 3);
            let _p1 = _at_2(__SplVar3, 1);
            let _p2 = _at_2(__SplVar3, 2);
            let _p3 = _at_2(__SplVar3, 3);
            /* Statements */
            return _InfinitePlane_3(_p1, _p2, _p2);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2(_self, "List>>asInfinitePlane");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.size = 4).if {\n\t\t\tlet [a, b, c, d] = self;\n\t\t\tInfinitePlane(a, b, c, d)\n\t\t} {\n\t\t\t(self.size = 3).if {\n\t\t\t\tlet [p1, p2, p3] = self;\n\t\t\t\tInfinitePlane(p1, p2, p2)\n\t\t\t} {\n\t\t\t\tself.error('List>>asInfinitePlane')\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "InfinitePlane",
  "InfinitePlane",
  ["p1", "p2", "p3"],
  sl.annotateFunction(function (_p1, _p2, _p3) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p1, _p2, _p3";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_p1, 3);
    let _x1 = _at_2(__SplVar4, 1);
    let _y1 = _at_2(__SplVar4, 2);
    let _z1 = _at_2(__SplVar4, 3);
    let __SplVar5 = _assertIsOfSize_2(_p2, 3);
    let _x2 = _at_2(__SplVar5, 1);
    let _y2 = _at_2(__SplVar5, 2);
    let _z2 = _at_2(__SplVar5, 3);
    let __SplVar6 = _assertIsOfSize_2(_p3, 3);
    let _x3 = _at_2(__SplVar6, 1);
    let _y3 = _at_2(__SplVar6, 2);
    let _z3 = _at_2(__SplVar6, 3);
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
    let _d = _negate_1(_sum_1(_asterisk_2([_a, _b, _c], _p1)));
    /* Statements */
    _ifTrue_2(
      _allSatisfy_2([_a, _b, _c], _isInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _gcd_1([_a, _b, _c]);
        /* Statements */
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar7 = _solidus_2([_a, _b, _c, _d], _z);
          /* Statements */
          _a = _at_2(__SplVar7, 1);
          _b = _at_2(__SplVar7, 2);
          _c = _at_2(__SplVar7, 3);
          return _d = _at_2(__SplVar7, 4);
        }, [])());
      }, []),
    );
    _ifTrue_2(
      _allSatisfy_2([_a, _b, _c], _isNonPositive_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return (sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let __SplVar8 = _negate_1([_a, _b, _c, _d]);
          /* Statements */
          _a = _at_2(__SplVar8, 1);
          _b = _at_2(__SplVar8, 2);
          _c = _at_2(__SplVar8, 3);
          return _d = _at_2(__SplVar8, 4);
        }, [])());
      }, []),
    );
    return _InfinitePlane_4(_a, _b, _c, _d);
  }, ["p1", "p2", "p3"]),
  "{ :p1 :p2 :p3 |\n\t\tlet [x1, y1, z1] = p1;\n\t\tlet [x2, y2, z2] = p2;\n\t\tlet [x3, y3, z3] = p3;\n\t\tlet a = (y1 * (z2 - z3)) + (y2 * (z3 - z1)) + (y3 * (z1 - z2));\n\t\tlet b = (z1 * (x2 - x3)) + (z2 * (x3 - x1)) + (z3 * (x1 - x2));\n\t\tlet c = (x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2));\n\t\tlet d = ([a b c] * p1).sum.negate;\n\t\t[a b c].allSatisfy(isInteger:/1).ifTrue {\n\t\t\tlet z = [a b c].gcd;\n\t\t\t[a, b, c, d] := [a b c d] / z\n\t\t};\n\t\t[a b c].allSatisfy(isNonPositive:/1).ifTrue {\n\t\t\t[a, b, c, d] := [a b c d].negate\n\t\t};\n\t\tInfinitePlane(a, b, c, d)\n\t}",
);
