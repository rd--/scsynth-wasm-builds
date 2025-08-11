sl.addType(
  false,
  "InfinitePlane",
  "InfinitePlane",
  ["Object"],
  ["a", "b", "c", "d"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | Infinity }",
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
  "{ :self :aPlane | arcCos(dot(unitNormal(self),unitNormal(aPlane))) }",
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
  "{ :self | 2 }",
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
  "{ :self | second(hessianNormalForm(self)) }",
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
    return _signedPointPlaneDistance_2(_terms_1(_self), _asList_1(_aPoint));
  }, ["self", "aPoint"]),
  "{ :self :aPoint | signedPointPlaneDistance(terms(self),asList(aPoint)) }",
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
  "{ :self | 3 }",
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
    let __SPL147 = _assertIsOfSize_2(_terms_1(_self), 4);
    let _a = _at_2(__SPL147, 1);
    let _b = _at_2(__SPL147, 2);
    let _c = _at_2(__SPL147, 3);
    let _d = _at_2(__SPL147, 4);
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
  "{ :self | let __SPL147 = assertIsOfSize(terms(self), 4); let a = at(__SPL147, 1); let b = at(__SPL147, 2); let c = at(__SPL147, 3); let d = at(__SPL147, 4); let z = sqrt((+(+((*(a, a)), (*(b, b))), (*(c, c))))); let n = /([a, b, c], z); let p = /(d, z); [n, p] }",
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
  "{ :self :aPoint | isVeryCloseTo(pointPlaneDistance(terms(self),aPoint),0) }",
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
    let _n = _negated_1(_d_1(_self));
    /* Statements */
    return [
      _solidus_2(_n, _a_1(_self)),
      _solidus_2(_n, _b_1(_self)),
      _solidus_2(_n, _c_1(_self)),
    ];
  }, ["self"]),
  "{ :self | let n = negated(d(self)); [/(n, a(self)), /(n, b(self)), /(n, c(self))] }",
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
  "{ :self | storeStringAsInitializeSlots(self) }",
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
  "{ :self | [a(self), b(self), c(self)] }",
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
  "{ :self | [a(self), b(self), c(self), d(self)] }",
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
  "{ :self | first(hessianNormalForm(self)) }",
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
  "{ :a :b :c :d | initializeSlots(newInfinitePlane(),a, b, c, d) }",
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
        let __SPL148 = _assertIsOfSize_2(_self, 4);
        let _a = _at_2(__SPL148, 1);
        let _b = _at_2(__SPL148, 2);
        let _c = _at_2(__SPL148, 3);
        let _d = _at_2(__SPL148, 4);
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
            let __SPL149 = _assertIsOfSize_2(_self, 3);
            let _p1 = _at_2(__SPL149, 1);
            let _p2 = _at_2(__SPL149, 2);
            let _p3 = _at_2(__SPL149, 3);
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
  "{ :self | if((=(size(self), 4)), { let __SPL148 = assertIsOfSize(self, 4); let a = at(__SPL148, 1); let b = at(__SPL148, 2); let c = at(__SPL148, 3); let d = at(__SPL148, 4); InfinitePlane(a, b, c, d) }, { if((=(size(self), 3)), { let __SPL149 = assertIsOfSize(self, 3); let p1 = at(__SPL149, 1); let p2 = at(__SPL149, 2); let p3 = at(__SPL149, 3); InfinitePlane(p1, p2, p2) }, { error(self,'List>>asInfinitePlane') }) }) }",
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
    let __SPL150 = _assertIsOfSize_2(_p1, 3);
    let _x1 = _at_2(__SPL150, 1);
    let _y1 = _at_2(__SPL150, 2);
    let _z1 = _at_2(__SPL150, 3);
    let __SPL151 = _assertIsOfSize_2(_p2, 3);
    let _x2 = _at_2(__SPL151, 1);
    let _y2 = _at_2(__SPL151, 2);
    let _z2 = _at_2(__SPL151, 3);
    let __SPL152 = _assertIsOfSize_2(_p3, 3);
    let _x3 = _at_2(__SPL152, 1);
    let _y3 = _at_2(__SPL152, 2);
    let _z3 = _at_2(__SPL152, 3);
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
          let __SPL153 = _solidus_2([_a, _b, _c, _d], _z);
          /* Statements */
          _a = _at_2(__SPL153, 1);
          _b = _at_2(__SPL153, 2);
          _c = _at_2(__SPL153, 3);
          return _d = _at_2(__SPL153, 4);
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
          let __SPL154 = _negated_1([_a, _b, _c, _d]);
          /* Statements */
          _a = _at_2(__SPL154, 1);
          _b = _at_2(__SPL154, 2);
          _c = _at_2(__SPL154, 3);
          return _d = _at_2(__SPL154, 4);
        }, [])());
      }, []),
    );
    return _InfinitePlane_4(_a, _b, _c, _d);
  }, ["p1", "p2", "p3"]),
  "{ :p1 :p2 :p3 | let __SPL150 = assertIsOfSize(p1, 3); let x1 = at(__SPL150, 1); let y1 = at(__SPL150, 2); let z1 = at(__SPL150, 3); let __SPL151 = assertIsOfSize(p2, 3); let x2 = at(__SPL151, 1); let y2 = at(__SPL151, 2); let z2 = at(__SPL151, 3); let __SPL152 = assertIsOfSize(p3, 3); let x3 = at(__SPL152, 1); let y3 = at(__SPL152, 2); let z3 = at(__SPL152, 3); let a = +(+((*(y1, (-(z2, z3)))), (*(y2, (-(z3, z1))))), (*(y3, (-(z1, z2))))); let b = +(+((*(z1, (-(x2, x3)))), (*(z2, (-(x3, x1))))), (*(z3, (-(x1, x2))))); let c = +(+((*(x1, (-(y2, y3)))), (*(x2, (-(y3, y1))))), (*(x3, (-(y1, y2))))); let d = negated(sum((*([a, b, c], p1)))); ifTrue(allSatisfy([a, b, c],isInteger:/1), { let z = gcd([a, b, c]); ({ let __SPL153 = /([a, b, c, d], z); a := at(__SPL153, 1); b := at(__SPL153, 2); c := at(__SPL153, 3); d := at(__SPL153, 4) } . ()) }); ifTrue(allSatisfy([a, b, c],isNonPositive:/1), { ({ let __SPL154 = negated([a, b, c, d]); a := at(__SPL154, 1); b := at(__SPL154, 2); c := at(__SPL154, 3); d := at(__SPL154, 4) } . ()) }); InfinitePlane(a, b, c, d) }",
);
