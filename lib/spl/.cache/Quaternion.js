/*  Requires: Complex  */

sl.addType(
  false,
  "Quaternion",
  "Quaternion",
  ["Object", "Equatable", "Number"],
  ["contents"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Quaternion",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Quaternion",
);

sl.copyTraitMethodsToType(
  "Number",
  "Quaternion",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_contents_1(_self), 4);
        let _a = _at_2(__SplVar1, 1);
        let _b = _at_2(__SplVar1, 2);
        let _c = _at_2(__SplVar1, 3);
        let _d = _at_2(__SplVar1, 4);
        let __SplVar2 = _assertIsOfSize_2(_contents_1(_anObject), 4);
        let _p = _at_2(__SplVar2, 1);
        let _q = _at_2(__SplVar2, 2);
        let _r = _at_2(__SplVar2, 3);
        let _s = _at_2(__SplVar2, 4);
        /* Statements */
        return _Quaternion_1([
          _hyphenMinus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(_asterisk_2(_a, _p), _asterisk_2(_b, _q)),
              _asterisk_2(_c, _r),
            ),
            _asterisk_2(_d, _s),
          ),
          _hyphenMinus_2(
            _plusSign_2(
              _plusSign_2(_asterisk_2(_a, _q), _asterisk_2(_b, _p)),
              _asterisk_2(_c, _s),
            ),
            _asterisk_2(_d, _r),
          ),
          _plusSign_2(
            _plusSign_2(
              _hyphenMinus_2(_asterisk_2(_a, _r), _asterisk_2(_b, _s)),
              _asterisk_2(_c, _p),
            ),
            _asterisk_2(_d, _q),
          ),
          _plusSign_2(
            _hyphenMinus_2(
              _plusSign_2(_asterisk_2(_a, _s), _asterisk_2(_b, _r)),
              _asterisk_2(_c, _q),
            ),
            _asterisk_2(_d, _p),
          ),
        ]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isQuaternion(anObject), { let __SplVar1 = assertIsOfSize(contents(self), 4); let a = at(__SplVar1, 1); let b = at(__SplVar1, 2); let c = at(__SplVar1, 3); let d = at(__SplVar1, 4); let __SplVar2 = assertIsOfSize(contents(anObject), 4); let p = at(__SplVar2, 1); let q = at(__SplVar2, 2); let r = at(__SplVar2, 3); let s = at(__SplVar2, 4); Quaternion([(-(-(-((*(a, p)), (*(b, q))), (*(c, r))), (*(d, s)))), (-(+(+((*(a, q)), (*(b, p))), (*(c, s))), (*(d, r)))), (+(+(-((*(a, r)), (*(b, s))), (*(c, p))), (*(d, q)))), (+(-(+((*(a, s)), (*(b, r))), (*(c, q))), (*(d, p))))]) }, { adaptToQuaternionAndApply(anObject,self, *) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quaternion_1(
          _plusSign_2(_contents_1(_self), _contents_1(_anObject)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isQuaternion(anObject), { Quaternion(+(contents(self), contents(anObject))) }, { adaptToQuaternionAndApply(anObject,self, +) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quaternion_1(
          _plusSign_2(_contents_1(_self), _contents_1(_anObject)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isQuaternion(anObject), { Quaternion(+(contents(self), contents(anObject))) }, { adaptToQuaternionAndApply(anObject,self, -) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isQuaternion_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_self, _reciprocal_1(_anObject));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToQuaternionAndApply_3(_anObject, _self, _solidus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isQuaternion(anObject), { *(self, reciprocal(anObject)) }, { adaptToQuaternionAndApply(anObject,self, /) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_absSquare_1(_self));
  }, ["self"]),
  "{ :self | sqrt(absSquare(self)) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_square_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | sum(square(contents(self))) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asQuaternion_1(_aFraction), _self);
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 | aBlock(asQuaternion(aFraction),self) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asQuaternion_1(_aNumber), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | aBlock(asQuaternion(aNumber),self) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asQuaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  }, ["self"]),
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asList",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | copy(contents(self)) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "asMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_contents_1(_self), 4);
    let _a = _at_2(__SplVar3, 1);
    let _b = _at_2(__SplVar3, 2);
    let _c = _at_2(__SplVar3, 3);
    let _d = _at_2(__SplVar3, 4);
    /* Statements */
    return [[_j_2(_a, _b), _j_2(_c, _d)], [
      _j_2(_hyphenMinus_1(_c), _d),
      _j_2(_a, _hyphenMinus_1(_b)),
    ]];
  }, ["self"]),
  "{ :self | let __SplVar3 = assertIsOfSize(contents(self), 4); let a = at(__SplVar3, 1); let b = at(__SplVar3, 2); let c = at(__SplVar3, 3); let d = at(__SplVar3, 4); [[j(a,b), j(c,d)], [j(-(c),d), j(a,-(b))]] }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2(_contents_1(_self), 4);
    let _a = _at_2(__SplVar4, 1);
    let _b = _at_2(__SplVar4, 2);
    let _c = _at_2(__SplVar4, 3);
    let _d = _at_2(__SplVar4, 4);
    /* Statements */
    return _Quaternion_1([
      _a,
      _hyphenMinus_1(_b),
      _hyphenMinus_1(_c),
      _hyphenMinus_1(_d),
    ]);
  }, ["self"]),
  "{ :self | let __SplVar4 = assertIsOfSize(contents(self), 4); let a = at(__SplVar4, 1); let b = at(__SplVar4, 2); let c = at(__SplVar4, 3); let d = at(__SplVar4, 4); Quaternion([a, -(b), -(c), -(d)]) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isQuaternion_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_contents_1(_self), _contents_1(_anObject));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToQuaternionAndApply_3(_anObject, _self, _aBlock_2);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return false;
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | if(isNumber(anObject), { if(isQuaternion(anObject), { aBlock(contents(self), contents(anObject)) }, { adaptToQuaternionAndApply(anObject,self, aBlock:/2) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copyFromTo_3(_contents_1(_self), 2, 4);
  }, ["self"]),
  "{ :self | copyFromTo(contents(self),2, 4) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  sl.annotateFunction(function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(
      _contents_1(_self),
      _contents_1(_asQuaternion_1(_anObject)),
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseToBy_3(_a, _b, _epsilon);
      }, ["a", "b"]),
    );
  }, ["self", "anObject", "epsilon"]),
  "{ :self :anObject :epsilon | equalBy(contents(self), contents(asQuaternion(anObject)), { :a :b | isCloseToBy(a,b, epsilon) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isHamiltonianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _allSatisfy_2(_contents_1(_self), _isInteger_1);
  }, ["self"]),
  "{ :self | allSatisfy(contents(self),isInteger:/1) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOrigin_1(_imaginary_1(_self));
  }, ["self"]),
  "{ :self | isOrigin(imaginary(self)) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isOrigin_1(_contents_1(_self));
  }, ["self"]),
  "{ :self | isOrigin(contents(self)) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quaternion_1(_negate_1(_contents_1(_self)));
  }, ["self"]),
  "{ :self | Quaternion(negate(contents(self))) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "norm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_self);
  }, ["self"]),
  "{ :self | abs(self) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _zero_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_self, _abs_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { zero(self) }, { /(self, abs(self)) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asQuaternion_1(1);
  }, ["self"]),
  "{ :self | asQuaternion(1) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "reciprocal: zero divide");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _conjugate_1(_self),
          _solidus_2(1, _absSquare_1(_self)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { error(self,'reciprocal: zero divide') }, { *(conjugate(self), (/(1, absSquare(self)))) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "real",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_contents_1(_self), 1);
  }, ["self"]),
  "{ :self | at(contents(self),1) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  }, ["self"]),
  "{ :self | [real(self), imaginary(self)] }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOrigin_1(_contents_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Quaternion_1(_solidus_2(_contents_1(_self), _norm_1(_self)));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isOrigin(contents(self)), { 0 }, { Quaternion(/(contents(self), norm(self))) }) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  }, ["self"]),
  "{ :self | *(self, self) }",
);

sl.addMethodToExistingType(
  "Quaternion",
  "Quaternion",
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
  "Quaternion",
  "Quaternion",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asQuaternion_1(0);
  }, ["self"]),
  "{ :self | asQuaternion(0) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Quaternion",
  "Quaternion",
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
        } /* Statements */
        return _initializeSlots_2(_newQuaternion_0(), _self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Quaternion");
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(size(self), 4)), { initializeSlots(newQuaternion(),self) }, { error(self,'Quaternion') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "adaptToQuaternionAndApply",
  ["self", "aQuaternion", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aQuaternion, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aQuaternion, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aQuaternion, _asQuaternion_1(_self));
  }, ["self", "aQuaternion", "aBlock:/2"]),
  "{ :self :aQuaternion :aBlock:/2 | aBlock(aQuaternion,asQuaternion(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "asQuaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _zero = _zero_1(_self);
    /* Statements */
    return _Quaternion_1([_self, _zero, _zero, _zero]);
  }, ["self"]),
  "{ :self | let zero = zero(self); Quaternion([self, zero, zero, zero]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Quaternion",
  "isHamiltonianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isInteger_1(_self);
  }, ["self"]),
  "{ :self | isInteger(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Quaternion",
  "adaptToQuaternionAndApply",
  ["self", "aQuaternion", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aQuaternion, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aQuaternion, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_2(_aQuaternion, _each);
      }, ["each"]),
    );
  }, ["self", "aQuaternion", "aBlock:/2"]),
  "{ :self :aQuaternion :aBlock:/2 | collect(self, { :each | aBlock(aQuaternion,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Quaternion",
  "asQuaternion",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Quaternion_1([_real_1(_self), _imaginary_1(_self), 0, 0]);
  }, ["self"]),
  "{ :self | Quaternion([real(self), imaginary(self), 0, 0]) }",
);
