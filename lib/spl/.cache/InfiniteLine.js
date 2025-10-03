sl.addType(
  false,
  "InfiniteLine",
  "InfiniteLine",
  ["Object", "Equatable"],
  ["point", "vector"],
);

sl.copyTraitMethodsToType(
  "Object",
  "InfiniteLine",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "InfiniteLine",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "asGeneralisedCircle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_lineEquation_1(_self), 3);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    /* Statements */
    return _GeneralisedCircle_3(
      0,
      _Complex_2(_a, _asterisk_2(-1, _b)),
      _asterisk_2(2, _c),
    );
  }, ["self"]),
  "{ :self | let __SplVar1 = assertIsOfSize(lineEquation(self), 3); let a = at(__SplVar1, 1); let b = at(__SplVar1, 2); let c = at(__SplVar1, 3); GeneralisedCircle(0, Complex(a, *(-1, b)), *(2, c)) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
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
  "InfiniteLine",
  "InfiniteLine",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_point_1(_self));
  }, ["self"]),
  "{ :self | size(point(self)) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "implicitEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_lineEquation_1(_self), 3);
    let _a = _at_2(__SplVar2, 1);
    let _b = _at_2(__SplVar2, 2);
    let _c = _at_2(__SplVar2, 3);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
        _c,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self | let __SplVar2 = assertIsOfSize(lineEquation(self), 3); let a = at(__SplVar2, 1); let b = at(__SplVar2, 2); let c = at(__SplVar2, 3); { :x :y | +(+((*(a, x)), (*(b, y))), c) } }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "lineEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 2);
    let _p = _at_2(__SplVar3, 1);
    let _q = _at_2(__SplVar3, 2);
    /* Statements */
    return _lineEquation_2(_p, _q);
  }, ["self"]),
  "{ :self | let __SplVar3 = assertIsOfSize(vertexCoordinates(self), 2); let p = at(__SplVar3, 1); let q = at(__SplVar3, 2); lineEquation(p, q) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "polynomial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_point_1(_self), 2);
    let _x = _at_2(__SplVar4, 1);
    let _y = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(_vector_1(_self), 2);
    let _i = _at_2(__SplVar5, 1);
    let _j = _at_2(__SplVar5, 2);
    let _m = _solidus_2(_j, _i);
    let _c = _hyphenMinus_2(_y, _asterisk_2(_m, _x));
    /* Statements */
    return _UnivariatePolynomial_1([_c, _m]);
  }, ["self"]),
  "{ :self | let __SplVar4 = assertIsOfSize(point(self), 2); let x = at(__SplVar4, 1); let y = at(__SplVar4, 2); let __SplVar5 = assertIsOfSize(vector(self), 2); let i = at(__SplVar5, 1); let j = at(__SplVar5, 2); let m = /(j, i); let c = -(y, (*(m, x))); UnivariatePolynomial([c, m]) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "slope",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_vector_1(_self), 2);
    let _x = _at_2(__SplVar6, 1);
    let _y = _at_2(__SplVar6, 2);
    /* Statements */
    return _solidus_2(_y, _x);
  }, ["self"]),
  "{ :self | let __SplVar6 = assertIsOfSize(vector(self), 2); let x = at(__SplVar6, 1); let y = at(__SplVar6, 2); /(y, x) }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "slopeInterceptForm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar7 = _assertIsOfSize_2(_point_1(_self), 2);
    let _x = _at_2(__SplVar7, 1);
    let _y = _at_2(__SplVar7, 2);
    let __SplVar8 = _assertIsOfSize_2(_vector_1(_self), 2);
    let _i = _at_2(__SplVar8, 1);
    let _j = _at_2(__SplVar8, 2);
    let _m = _solidus_2(_j, _i);
    let _c = _hyphenMinus_2(_y, _asterisk_2(_m, _x));
    /* Statements */
    return [_m, _c];
  }, ["self"]),
  "{ :self | let __SplVar7 = assertIsOfSize(point(self), 2); let x = at(__SplVar7, 1); let y = at(__SplVar7, 2); let __SplVar8 = assertIsOfSize(vector(self), 2); let i = at(__SplVar8, 1); let j = at(__SplVar8, 2); let m = /(j, i); let c = -(y, (*(m, x))); [m, c] }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
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
  "InfiniteLine",
  "InfiniteLine",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar9 = _assertIsOfSize_2(
      _toPolarCoordinates_1(_vector_1(_self)),
      2,
    );
    let __SplUnused11 = _at_2(__SplVar9, 1);
    let _theta = _at_2(__SplVar9, 2);
    /* Statements */
    return _theta;
  }, ["self"]),
  "{ :self | let __SplVar9 = assertIsOfSize(toPolarCoordinates(vector(self)), 2); let _ = at(__SplVar9, 1); let theta = at(__SplVar9, 2); theta }",
);

sl.addMethodToExistingType(
  "InfiniteLine",
  "InfiniteLine",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _point_1(_self);
    let _q = _plusSign_2(_p, _vector_1(_self));
    /* Statements */
    return [_p, _q];
  }, ["self"]),
  "{ :self | let p = point(self); let q = +(p, vector(self)); [p, q] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "InfiniteLine",
  "InfiniteLine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar10 = _assertIsOfSize_2(_self, 2);
    let _p1 = _at_2(__SplVar10, 1);
    let _p2 = _at_2(__SplVar10, 2);
    /* Statements */
    return _InfiniteLine_2(_p1, _hyphenMinus_2(_p2, _p1));
  }, ["self"]),
  "{ :self | let __SplVar10 = assertIsOfSize(self, 2); let p1 = at(__SplVar10, 1); let p2 = at(__SplVar10, 2); InfiniteLine(p1, -(p2, p1)) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "InfiniteLine",
  "InfiniteLine",
  ["aPoint", "aVector"],
  sl.annotateFunction(function (_aPoint, _aVector) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _aPoint, _aVector";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newInfiniteLine_0(), _aPoint, _aVector);
  }, ["aPoint", "aVector"]),
  "{ :aPoint :aVector | initializeSlots(newInfiniteLine(),aPoint, aVector) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "InfiniteLine",
  "InfiniteLine",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_a, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_b, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_2([_a, _b, _c], "a=b=0");
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _y = _solidus_2(_hyphenMinus_1(_c), _b);
            /* Statements */
            return _InfiniteLine_1([[0, _y], [1, _y]]);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_b, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x = _solidus_2(_hyphenMinus_1(_c), _a);
            /* Statements */
            return _InfiniteLine_1([[_x, 0], [_x, 1]]);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _y1 = _solidus_2(_hyphenMinus_1(_c), _b);
            let _y2 = _solidus_2(_hyphenMinus_2(_hyphenMinus_1(_c), _a), _b);
            /* Statements */
            return _InfiniteLine_1([[0, _y1], [1, _y2]]);
          }, []),
        );
      }, []),
    );
  }, ["a", "b", "c"]),
  "{ :a :b :c | if((=(a, 0)), { if((=(b, 0)), { error([a, b, c],'a=b=0') }, { let y = /(-(c), b); InfiniteLine([[0, y], [1, y]]) }) }, { if((=(b, 0)), { let x = /(-(c), a); InfiniteLine([[x, 0], [x, 1]]) }, { let y1 = /(-(c), b); let y2 = /((-(-(c), a)), b); InfiniteLine([[0, y1], [1, y2]]) }) }) }",
);
