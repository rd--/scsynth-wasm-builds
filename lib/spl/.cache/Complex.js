/*  Requires: List Number Object  */

sl.addType(
  false,
  "Complex",
  "Complex",
  ["Object", "Number"],
  ["real", "imaginary"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Complex",
);

sl.copyTraitMethodsToType(
  "Number",
  "Complex",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "equalsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | equalBy(self,anObject, =) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tilde",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | equalBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(
          _hyphenMinus_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
          _plusSign_2(_asterisk_2(_a, _d), _asterisk_2(_b, _c)),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _asterisk_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(-((*(a, c)), (*(b, d))), +((*(a, d)), (*(b, c)))) }, { adaptToComplexAndApply(anObject,self, *) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(_plusSign_2(_a, _c), _plusSign_2(_b, _d));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _plusSign_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(+(a, c), +(b, d)) }, { adaptToComplexAndApply(anObject,self, +) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(_hyphenMinus_2(_a, _c), _hyphenMinus_2(_b, _d));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _hyphenMinus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(-(a, c), -(b, d)) }, { adaptToComplexAndApply(anObject,self, -) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _real_1(_self);
        let _b = _imaginary_1(_self);
        let _c = _real_1(_anObject);
        let _d = _imaginary_1(_anObject);
        /* Statements */
        return _Complex_2(
          _solidus_2(
            _plusSign_2(_asterisk_2(_a, _c), _asterisk_2(_b, _d)),
            _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
          ),
          _solidus_2(
            _hyphenMinus_2(_asterisk_2(_b, _c), _asterisk_2(_a, _d)),
            _plusSign_2(_asterisk_2(_c, _c), _asterisk_2(_d, _d)),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _solidus_2);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(/((+((*(a, c)), (*(b, d)))), (+((*(c, c)), (*(d, d))))), /((-((*(b, c)), (*(a, d)))), (+((*(c, c)), (*(d, d)))))) }, { adaptToComplexAndApply(anObject,self, /) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "circumflexAccent",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _aNumber,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _circumflexAccent_2(_self, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _isInteger_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _raisedToInteger_2(_self, _aNumber);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _equalsSign_2(_aNumber, 0),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _one_1(_self);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _equalsSign_2(_aNumber, 1),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _self;
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _if_3(
                      _equalsSign_2(_self, 0),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _if_3(
                          _lessThanSign_2(_aNumber, 0),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _error_2(_self, "^: zero divide");
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Statements */
                            return _self;
                          }, []),
                        );
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _exp_1(_asterisk_2(_aNumber, _log_1(_self)));
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | if(isCollection(aNumber), { collect(aNumber, { :each | ^(self, each) }) }, { if(isInteger(aNumber), { raisedToInteger(self,aNumber) }, { if((=(aNumber, 0)), { one(self) }, { if((=(aNumber, 1)), { self }, { if((=(self, 0)), { if((<(aNumber, 0)), { error(self,'^: zero divide') }, { self }) }, { exp((*(aNumber, log(self)))) }) }) }) }) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_absSquared_1(_self));
  }, ["self"]),
  "{ :self | sqrt(absSquared(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absArg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_abs_1(_self), _arg_1(_self)];
  }, ["self"]),
  "{ :self | [abs(self), arg(self)] }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absSquared",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self | +((*(real(self), real(self))), (*(imaginary(self), imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aFraction), _self);
  }, ["self", "aFraction", "aBlock:/2"]),
  "{ :self :aFraction :aBlock:/2 | aBlock(asComplex(aFraction),self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aNumber), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | aBlock(asComplex(aNumber),self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_imaginary_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_abs_1(_real_1(_self)), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j_2(
              _if_3(
                _lessThanSign_2(_real_1(_self), 0),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _pi;
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return 0;
                }, []),
              ),
              _copySignTo_2(_real_1(_self), _arcCosh_1(_abs_1(_real_1(_self)))),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j_2(_arcCos_1(_real_1(_self)), 0);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tmp = _solidus_2(_hyphenMinus_2(_squaredNorm_1(_self), 1), 2);
        let _delta = _plusSign_2(
          _squared_1(_tmp),
          _squared_1(_imaginary_1(_self)),
        );
        let _sh2y = _plusSign_2(_tmp, _sqrt_1(_delta));
        let _shy = _sqrt_1(_sh2y);
        let _ch2y = _plusSign_2(1, _sh2y);
        let _chy = _sqrt_1(_ch2y);
        /* Statements */
        return _j_2(
          _arcCos_1(_solidus_2(_real_1(_self), _chy)),
          _copySignTo_2(_imaginary_1(_self), _negated_1(_arcSinh_1(_shy))),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j(if((<(real(self), 0)), { pi }, { 0 }),copySignTo(real(self),arcCosh(abs(real(self))))) }, { j(arcCos(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(squared(tmp), squared(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcCos((/(real(self), chy))),copySignTo(imaginary(self),negated(arcSinh(shy)))) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_imaginary_1(_self), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_abs_1(_real_1(_self)), 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j_2(
              _asterisk_2(_pi_1(0.5), _sign_1(_real_1(_self))),
              _negated_1(
                _copySignTo_2(
                  _real_1(_self),
                  _arcCosh_1(_abs_1(_real_1(_self))),
                ),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _j_2(_arcSin_1(_real_1(_self)), 0);
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tmp = _solidus_2(_hyphenMinus_2(_squaredNorm_1(_self), 1), 2);
        let _delta = _plusSign_2(
          _squared_1(_tmp),
          _squared_1(_imaginary_1(_self)),
        );
        let _sh2y = _plusSign_2(_tmp, _sqrt_1(_delta));
        let _shy = _sqrt_1(_sh2y);
        let _ch2y = _plusSign_2(1, _sh2y);
        let _chy = _sqrt_1(_ch2y);
        /* Statements */
        return _j_2(
          _arcSin_1(_solidus_2(_real_1(_self), _chy)),
          _copySignTo_2(_imaginary_1(_self), _arcSinh_1(_shy)),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j((*(pi(0.5), sign(real(self)))),negated(copySignTo(real(self),arcCosh(abs(real(self)))))) }, { j(arcSin(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(squared(tmp), squared(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcSin((/(real(self), chy))),copySignTo(imaginary(self),arcSinh(shy))) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcSinh",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(
      _plusSign_2(_z, _sqrt_1(_plusSign_2(_circumflexAccent_2(_z, 2), 1))),
    );
  }, ["z"]),
  "{ :z | log((+(z, sqrt((+((^(z, 2)), 1)))))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r2 = _squaredNorm_1(_self);
    /* Statements */
    return _Complex_2(
      _solidus_2(
        _arcTan_2(_hyphenMinus_2(1, _r2), _asterisk_2(_real_1(_self), 2)),
        2,
      ),
      _solidus_2(
        _log_1(
          _solidus_2(
            _plusSign_2(
              _plusSign_2(_r2, _asterisk_2(_imaginary_1(_self), 2)),
              1,
            ),
            _plusSign_2(
              _hyphenMinus_2(_r2, _asterisk_2(_imaginary_1(_self), 2)),
              1,
            ),
          ),
        ),
        4,
      ),
    );
  }, ["self"]),
  "{ :self | let r2 = squaredNorm(self); Complex(/(arcTan((-(1, r2)),*(real(self), 2)), 2), /(log((/((+(+(r2, (*(imaginary(self), 2))), 1)), (+(-(r2, (*(imaginary(self), 2))), 1))))), 4)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcTan",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
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
        return _if_3(
          _isZero_1(_aNumber),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Complex_2(0, 0);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _Complex_2(
              _solidus_2(_pi_1(1), _copySignTo_2(_real_1(_aNumber), 2)),
              0,
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = _arcTan_1(_solidus_2(_aNumber, _self));
        /* Statements */
        return _if_3(
          _lessThanSign_2(_real_1(_self), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_answer, _pi_1(1));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _greaterThanSign_2(_real_1(_answer), _pi_1(1)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _hyphenMinus_2(_answer, _pi_1(2));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _answer;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber | if(isZero(self), { if(isZero(aNumber), { Complex(0, 0) }, { Complex(/(pi(1), copySignTo(real(aNumber),2)), 0) }) }, { let answer = arcTan((/(aNumber, self))); if((<(real(self), 0)), { +(answer, pi(1)) }, { if((>(real(answer), pi(1))), { -(answer, pi(2)) }, { answer }) }) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arg",
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
        return _error_2(_self, "Zero has no argument");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcTan_2(_real_1(_self), _imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { error(self,'Zero has no argument') }, { arcTan(real(self),imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asComplex",
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
  "Complex",
  "Complex",
  "asGaussianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _j_2(_rounded_1(_real_1(_self)), _rounded_1(_imaginary_1(_self)));
  }, ["self"]),
  "{ :self | j(rounded(real(self)),rounded(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asList",
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
  "Complex",
  "Complex",
  "atRandom",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomComplex_3(_system, [_Complex_2(0, 0), _self], []);
  }, ["self"]),
  "{ :self | randomComplex(system,[Complex(0, 0), self], []) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "conjugated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_real_1(_self), _negated_1(_imaginary_1(_self)));
  }, ["self"]),
  "{ :self | Complex(real(self), negated(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosh_1(_i_1(_self));
  }, ["self"]),
  "{ :self | cosh(i(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cosecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sin_1(_self));
  }, ["self"]),
  "{ :self | /(1, sin(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _asterisk_2(_cosh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_sinh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  }, ["self"]),
  "{ :self | Complex(*(cosh(real(self)), cos(imaginary(self))), *(sinh(real(self)), sin(imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
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
          _isComplex_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _aBlock_2(_real_1(_self), _real_1(_anObject)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _aBlock_2(_imaginary_1(_self), _imaginary_1(_anObject));
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToComplexAndApply_3(_anObject, _self, _aBlock_2);
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
  "{ :self :anObject :aBlock:/2 | if(isNumber(anObject), { if(isComplex(anObject), { &(aBlock(real(self), real(anObject)), { aBlock(imaginary(self), imaginary(anObject)) }) }, { adaptToComplexAndApply(anObject,self, aBlock:/2) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _exp_1(_real_1(_self)),
      _plusSign_2(
        _cos_1(_imaginary_1(_self)),
        _i_1(_sin_1(_imaginary_1(_self))),
      ),
    );
  }, ["self"]),
  "{ :self | *(exp(real(self)), (+(cos(imaginary(self)), i(sin(imaginary(self)))))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "fractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _fractionPart_1(_real_1(_self)),
      _fractionPart_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self | Complex(fractionPart(real(self)), fractionPart(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_negated_1(_imaginary_1(_self)), _real_1(_self));
  }, ["self"]),
  "{ :self | Complex(negated(imaginary(self)), real(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _integerPart_1(_real_1(_self)),
      _integerPart_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self | Complex(integerPart(real(self)), integerPart(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  sl.annotateFunction(function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
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
          _isComplex_1(_anObject),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _isCloseToBy_3(_real_1(_self), _real_1(_anObject), _epsilon),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isCloseToBy_3(
                  _imaginary_1(_self),
                  _imaginary_1(_anObject),
                  _epsilon,
                );
              }, []),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _adaptToComplexAndApply_3(
              _anObject,
              _self,
              sl.annotateFunction(function (_p, _q) {
                /* ArityCheck */
                if (arguments.length !== 2) {
                  const errorMessage = "Arity: expected 2, _p, _q";
                  throw new Error(errorMessage);
                } /* Statements */
                return _isCloseToBy_3(_p, _q, _epsilon);
              }, ["p", "q"]),
            );
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
  }, ["self", "anObject", "epsilon"]),
  "{ :self :anObject :epsilon | if(isNumber(anObject), { if(isComplex(anObject), { &(isCloseToBy(real(self),real(anObject), epsilon), { isCloseToBy(imaginary(self),imaginary(anObject), epsilon) }) }, { adaptToComplexAndApply(anObject, self, { :p :q | isCloseToBy(p,q, epsilon) }) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.0001);
  }, ["self", "anObject"]),
  "{ :self :anObject | isCloseToBy(self,anObject, 0.0001) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isExact",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isExact_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isExact_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isExact(real(self)), { isExact(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isGaussianInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isInteger_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isInteger_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isInteger(real(self)), { isInteger(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isLiteral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["self"]),
  "{ :self | false }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isRational",
  ["unused"],
  sl.annotateFunction(function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  }, ["unused"]),
  "{ :unused | false }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_imaginary_1(_self));
  }, ["self"]),
  "{ :self | isZero(imaginary(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isVeryCloseTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.000000000001);
  }, ["self", "anObject"]),
  "{ :self :anObject | isCloseToBy(self,anObject, 0.000000000001) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _isZero_1(_real_1(_self)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _isZero_1(_imaginary_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | &(isZero(real(self)), { isZero(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_log_1(_abs_1(_self)), _i_1(_arg_1(_self)));
  }, ["self"]),
  "{ :self | +(log(abs(self)), i(arg(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_log_1(_self), _log_1(_aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber | /(log(self), log(aNumber)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _maxOn_3(_self, _anObject, _abs_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _max_1);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { maxOn(self,anObject, abs:/1) }, { adaptToComplexAndApply(anObject,self, max:/1) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplex_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _minOn_3(_self, _anObject, _abs_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _min_1);
      }, []),
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | if(isComplex(anObject), { minOn(self,anObject, abs:/1) }, { adaptToComplexAndApply(anObject,self, min:/1) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "negated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _negated_1(_real_1(_self)),
      _negated_1(_imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self | Complex(negated(real(self)), negated(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
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
  "Complex",
  "Complex",
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
        return _Complex_2(0, 0);
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
  "{ :self | if(isZero(self), { Complex(0, 0) }, { /(self, abs(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "one",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(1);
  }, ["self"]),
  "{ :self | asComplex(1) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _printString_1(_real_1(_self)),
      _printString_1(_imaginary_1(_self)),
    ], "J");
  }, ["self"]),
  "{ :self | stringIntercalate([printString(real(self)), printString(imaginary(self))],'J') }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printStringShowingDecimalPlaces",
  ["self", "places"],
  sl.annotateFunction(function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Statements */
    return _stringIntercalate_2([
      _printStringShowingDecimalPlaces_2(_real_1(_self), _places),
      _printStringShowingDecimalPlaces_2(_imaginary_1(_self), _places),
    ], "J");
  }, ["self", "places"]),
  "{ :self :places | stringIntercalate([printStringShowingDecimalPlaces(real(self),places), printStringShowingDecimalPlaces(imaginary(self),places)],'J') }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
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
  "Complex",
  "Complex",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_self, 0),
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
        return _solidus_2(1, _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(self, 0)), { error(self,'reciprocal: zero divide') }, { /(1, self) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "secant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _cos_1(_self));
  }, ["self"]),
  "{ :self | /(1, cos(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _abs_1(_self));
  }, ["self"]),
  "{ :self | /(self, abs(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_i_1(_sinh_1(_i_1(_self))));
  }, ["self"]),
  "{ :self | negated(i(sinh(i(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _asterisk_2(_sinh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_cosh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  }, ["self"]),
  "{ :self | Complex(*(sinh(real(self)), cos(imaginary(self))), *(cosh(real(self)), sin(imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _equalsSign_2(_imaginary_1(_self), 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_real_1(_self), 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asComplex_1(_sqrt_1(_real_1(_self)));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _sqrt_1(
          _solidus_2(_hyphenMinus_2(_abs_1(_self), _real_1(_self)), 2),
        );
        let _u = _solidus_2(_solidus_2(_imaginary_1(_self), 2), _v);
        /* Statements */
        return _Complex_2(_u, _v);
      }, []),
    );
  }, ["self"]),
  "{ :self | if((&(=(imaginary(self), 0), { >=(real(self), 0) })), { asComplex(sqrt(real(self))) }, { let v = sqrt((/(-(abs(self), real(self)), 2))); let u = /(/(imaginary(self), 2), v); Complex(u, v) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "squared",
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
  "Complex",
  "Complex",
  "squaredNorm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  }, ["self"]),
  "{ :self | +((*(real(self), real(self))), (*(imaginary(self), imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sin_1(_self), _cos_1(_self));
  }, ["self"]),
  "{ :self | /(sin(self), cos(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_i_1(_tan_1(_i_1(_self))));
  }, ["self"]),
  "{ :self | negated(i(tan(i(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
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
  "Complex",
  "Complex",
  "zero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(0);
  }, ["self"]),
  "{ :self | asComplex(0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aComplexNumber, _asComplex_1(_self));
  }, ["self", "aComplexNumber", "aBlock:/2"]),
  "{ :self :aComplexNumber :aBlock:/2 | aBlock(aComplexNumber,asComplex(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "asComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_self, _zero_1(_self));
  }, ["self"]),
  "{ :self | Complex(self, zero(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "Complex",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newComplex_0(), _real, _imaginary);
  }, ["real", "imaginary"]),
  "{ :real :imaginary | initializeSlots(newComplex(),real, imaginary) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "conjugated",
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

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_zero_1(_self), _self);
  }, ["self"]),
  "{ :self | Complex(zero(self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "isReal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  }, ["self"]),
  "{ :self | true }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "j",
  ["real", "imaginary"],
  sl.annotateFunction(function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_real, _imaginary);
  }, ["real", "imaginary"]),
  "{ :real :imaginary | Complex(real, imaginary) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
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
        return _aBlock_2(_aComplexNumber, _each);
      }, ["each"]),
    );
  }, ["self", "aComplexNumber", "aBlock:/2"]),
  "{ :self :aComplexNumber :aBlock:/2 | collect(self, { :each | aBlock(aComplexNumber,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Complex",
  "asComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL3 = _assertIsOfSize_2(_self, 2);
    let _a = _at_2(__SPL3, 1);
    let _b = _at_2(__SPL3, 2);
    /* Statements */
    return _j_2(_a, _b);
  }, ["self"]),
  "{ :self | let __SPL3 = assertIsOfSize(self, 2); let a = at(__SPL3, 1); let b = at(__SPL3, 2); j(a,b) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "isComplexString",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _parts = _splitBy_2(_self, "J");
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_size_1(_parts), 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _allSatisfy_2(_parts, _isFloatString_1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _not_1(_beginsWith_2(_at_2(_parts, 2), "-"));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let parts = splitBy(self,'J'); &(=(size(parts), 2), { &(allSatisfy(parts,isFloatString:/1), { not(beginsWith(at(parts, 2),'-')) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "parseComplex",
  ["self", "elseClause:/0"],
  sl.annotateFunction(function (_self, _elseClause_0) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _elseClause_0";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isComplexString_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL4 = _assertIsOfSize_2(_splitBy_2(_self, "J"), 2);
        let _real = _at_2(__SPL4, 1);
        let _imaginary = _at_2(__SPL4, 2);
        /* Statements */
        return _Complex_2(
          _parseNumber_2(_real, _elseClause_0),
          _parseNumber_2(_imaginary, _elseClause_0),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _elseClause_0();
      }, []),
    );
  }, ["self", "elseClause:/0"]),
  "{ :self :elseClause:/0 | if(isComplexString(self), { let __SPL4 = assertIsOfSize(splitBy(self,'J'), 2); let real = at(__SPL4, 1); let imaginary = at(__SPL4, 2); Complex(parseNumber(real,elseClause:/0), parseNumber(imaginary,elseClause:/0)) }, { elseClause() }) }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Complex",
  "parseComplex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _parseComplex_2(
      _self,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "parseComplex: invalid input");
      }, []),
    );
  }, ["self"]),
  "{ :self | parseComplex(self, { error(self,'parseComplex: invalid input') }) }",
);
