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
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject | equalBy(self,anObject, =) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | equalBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _asterisk_2);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(-((*(a, c)), (*(b, d))), +((*(a, d)), (*(b, c)))) }, { adaptToComplexAndApply(anObject,self, *) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _plusSign_2);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(+(a, c), +(b, d)) }, { adaptToComplexAndApply(anObject,self, +) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _hyphenMinus_2);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(-(a, c), -(b, d)) }, { adaptToComplexAndApply(anObject,self, -) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _solidus_2);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { let a = real(self); let b = imaginary(self); let c = real(anObject); let d = imaginary(anObject); Complex(/((+((*(a, c)), (*(b, d)))), (+((*(c, c)), (*(d, d))))), /((-((*(b, c)), (*(a, d)))), (+((*(c, c)), (*(d, d)))))) }, { adaptToComplexAndApply(anObject,self, /) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "circumflexAccent",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCollection_1(_aNumber), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_aNumber, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_self, _each);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isInteger_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _raisedToInteger_2(_self, _aNumber);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_aNumber, 0), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _one_1(_self);
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_equalsSign_2(_aNumber, 1), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _self;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(_equalsSign_2(_self, 0), function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(_lessThanSign_2(_aNumber, 0), function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _error_2(_self, "^: zero divide");
              }, function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _self;
              });
            }, function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _exp_1(_asterisk_2(_aNumber, _log_1(_self)));
            });
          });
        });
      });
    });
  },
  "{ :self :aNumber | if(isCollection(aNumber), { collect(aNumber, { :each | ^(self, each) }) }, { if(isInteger(aNumber), { raisedToInteger(self,aNumber) }, { if((=(aNumber, 0)), { one(self) }, { if((=(aNumber, 1)), { self }, { if((=(self, 0)), { if((<(aNumber, 0)), { error(self,'^: zero divide') }, { self }) }, { exp((*(aNumber, log(self)))) }) }) }) }) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_absSquared_1(_self));
  },
  "{ :self | sqrt(absSquared(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_abs_1(_self), _arg_1(_self)];
  },
  "{ :self | [abs(self), arg(self)] }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "absSquared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  },
  "{ :self | +((*(real(self), real(self))), (*(imaginary(self), imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToFractionAndApply",
  ["self", "aFraction", "aBlock:/2"],
  function (_self, _aFraction, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aFraction, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aFraction), _self);
  },
  "{ :self :aFraction :aBlock:/2 | aBlock(asComplex(aFraction),self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_asComplex_1(_aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 | aBlock(asComplex(aNumber),self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_imaginary_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_abs_1(_real_1(_self)), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _j_2(
          _if_3(_lessThanSign_2(_real_1(_self), 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _pi;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }),
          _copySignTo_2(_real_1(_self), _arcCosh_1(_abs_1(_real_1(_self)))),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _j_2(_arcCos_1(_real_1(_self)), 0);
      });
    }, function () {
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
    });
  },
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j(if((<(real(self), 0)), { pi }, { 0 }),copySignTo(real(self),arcCosh(abs(real(self))))) }, { j(arcCos(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(squared(tmp), squared(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcCos((/(real(self), chy))),copySignTo(imaginary(self),negated(arcSinh(shy)))) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_imaginary_1(_self), 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_abs_1(_real_1(_self)), 1), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _j_2(
          _asterisk_2(_pi_1(0.5), _sign_1(_real_1(_self))),
          _negated_1(
            _copySignTo_2(_real_1(_self), _arcCosh_1(_abs_1(_real_1(_self)))),
          ),
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _j_2(_arcSin_1(_real_1(_self)), 0);
      });
    }, function () {
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
    });
  },
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j((*(pi(0.5), sign(real(self)))),negated(copySignTo(real(self),arcCosh(abs(real(self)))))) }, { j(arcSin(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(squared(tmp), squared(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcSin((/(real(self), chy))),copySignTo(imaginary(self),arcSinh(shy))) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcTan",
  ["self"],
  function (_self) {
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
  },
  "{ :self | let r2 = squaredNorm(self); Complex(/(arcTan((-(1, r2)),*(real(self), 2)), 2), /(log((/((+(+(r2, (*(imaginary(self), 2))), 1)), (+(-(r2, (*(imaginary(self), 2))), 1))))), 4)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arcTan",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isZero_1(_aNumber), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(0, 0);
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Complex_2(
          _solidus_2(_pi_1(1), _copySignTo_2(_real_1(_aNumber), 2)),
          0,
        );
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = _arcTan_1(_solidus_2(_aNumber, _self));
      /* Statements */
      return _if_3(_lessThanSign_2(_real_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_answer, _pi_1(1));
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_real_1(_answer), _pi_1(1)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(_answer, _pi_1(2));
          },
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer;
          },
        );
      });
    });
  },
  "{ :self :aNumber | if(isZero(self), { if(isZero(aNumber), { Complex(0, 0) }, { Complex(/(pi(1), copySignTo(real(aNumber),2)), 0) }) }, { let answer = arcTan((/(aNumber, self))); if((<(real(self), 0)), { +(answer, pi(1)) }, { if((>(real(answer), pi(1))), { -(answer, pi(2)) }, { answer }) }) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "arg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "Zero has no argument");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _arcTan_2(_real_1(_self), _imaginary_1(_self));
    });
  },
  "{ :self | if(isZero(self), { error(self,'Zero has no argument') }, { arcTan(real(self),imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asGaussianInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _j_2(_rounded_1(_real_1(_self)), _rounded_1(_imaginary_1(_self)));
  },
  "{ :self | j(rounded(real(self)),rounded(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  },
  "{ :self | [real(self), imaginary(self)] }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "atRandom",
  ["self", "shape", "rng"],
  function (_self, _shape, _rng) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _shape, _rng";
      throw new Error(errorMessage);
    } /* Statements */
    return _randomComplex_4(_rng, _Complex_2(0, 0), _self, _shape);
  },
  "{ :self :shape :rng | randomComplex(rng,Complex(0, 0), self, shape) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "conjugated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_real_1(_self), _negated_1(_imaginary_1(_self)));
  },
  "{ :self | Complex(real(self), negated(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosh_1(_i_1(_self));
  },
  "{ :self | cosh(i(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cosecant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _sin_1(_self));
  },
  "{ :self | /(1, sin(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _asterisk_2(_cosh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_sinh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  },
  "{ :self | Complex(*(cosh(real(self)), cos(imaginary(self))), *(sinh(real(self)), sin(imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _aBlock_2(_real_1(_self), _real_1(_anObject)),
          function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock_2(_imaginary_1(_self), _imaginary_1(_anObject));
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, _aBlock_2);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :anObject :aBlock:/2 | if(isNumber(anObject), { if(isComplex(anObject), { &(aBlock(real(self), real(anObject)), { aBlock(imaginary(self), imaginary(anObject)) }) }, { adaptToComplexAndApply(anObject,self, aBlock:/2) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "exp",
  ["self"],
  function (_self) {
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
  },
  "{ :self | *(exp(real(self)), (+(cos(imaginary(self)), i(sin(imaginary(self)))))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _fractionPart_1(_real_1(_self)),
      _fractionPart_1(_imaginary_1(_self)),
    );
  },
  "{ :self | Complex(fractionPart(real(self)), fractionPart(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_negated_1(_imaginary_1(_self)), _real_1(_self));
  },
  "{ :self | Complex(negated(imaginary(self)), real(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _integerPart_1(_real_1(_self)),
      _integerPart_1(_imaginary_1(_self)),
    );
  },
  "{ :self | Complex(integerPart(real(self)), integerPart(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isNumber_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isComplex_1(_anObject), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _ampersand_2(
          _isCloseToBy_3(_real_1(_self), _real_1(_anObject), _epsilon),
          function () {
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
          },
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToComplexAndApply_3(_anObject, _self, function (_p, _q) {
          /* ArityCheck */
          if (arguments.length !== 2) {
            const errorMessage = "Arity: expected 2, _p, _q";
            throw new Error(errorMessage);
          } /* Statements */
          return _isCloseToBy_3(_p, _q, _epsilon);
        });
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return false;
    });
  },
  "{ :self :anObject :epsilon | if(isNumber(anObject), { if(isComplex(anObject), { &(isCloseToBy(real(self),real(anObject), epsilon), { isCloseToBy(imaginary(self),imaginary(anObject), epsilon) }) }, { adaptToComplexAndApply(anObject, self, { :p :q | isCloseToBy(p,q, epsilon) }) }) }, { false }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.0001);
  },
  "{ :self :anObject | isCloseToBy(self,anObject, 0.0001) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isExact",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isExact_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isExact_1(_imaginary_1(_self));
    });
  },
  "{ :self | &(isExact(real(self)), { isExact(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isGaussianInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isInteger_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isInteger_1(_imaginary_1(_self));
    });
  },
  "{ :self | &(isInteger(real(self)), { isInteger(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isLiteral",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isRational",
  ["unused"],
  function (_unused) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _unused";
      throw new Error(errorMessage);
    } /* Statements */
    return false;
  },
  "{ :unused | false }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isReal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _isZero_1(_imaginary_1(_self));
  },
  "{ :self | isZero(imaginary(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isVeryCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _isCloseToBy_3(_self, _anObject, 0.000000000001);
  },
  "{ :self :anObject | isCloseToBy(self,anObject, 0.000000000001) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isZero_1(_real_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isZero_1(_imaginary_1(_self));
    });
  },
  "{ :self | &(isZero(real(self)), { isZero(imaginary(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_log_1(_abs_1(_self)), _i_1(_arg_1(_self)));
  },
  "{ :self | +(log(abs(self)), i(arg(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "log",
  ["self", "aNumber"],
  function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_log_1(_self), _log_1(_aNumber));
  },
  "{ :self :aNumber | /(log(self), log(aNumber)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _maxBy_3(_self, _anObject, _abs_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _max_1);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { maxBy(self,anObject, abs:/1) }, { adaptToComplexAndApply(anObject,self, max:/1) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isComplex_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _minBy_3(_self, _anObject, _abs_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToComplexAndApply_3(_anObject, _self, _min_1);
    });
  },
  "{ :self :anObject | if(isComplex(anObject), { minBy(self,anObject, abs:/1) }, { adaptToComplexAndApply(anObject,self, min:/1) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _negated_1(_real_1(_self)),
      _negated_1(_imaginary_1(_self)),
    );
  },
  "{ :self | Complex(negated(real(self)), negated(imaginary(self))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "norm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_self);
  },
  "{ :self | abs(self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "normalize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isZero_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _Complex_2(0, 0);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_self, _abs_1(_self));
    });
  },
  "{ :self | if(isZero(self), { Complex(0, 0) }, { /(self, abs(self)) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "one",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(1);
  },
  "{ :self | asComplex(1) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _printString_1(_real_1(_self)),
      _printString_1(_imaginary_1(_self)),
    ], "J");
  },
  "{ :self | join([printString(real(self)), printString(imaginary(self))],'J') }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "printStringShowingDecimalPlaces",
  ["self", "places"],
  function (_self, _places) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _places";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      _printStringShowingDecimalPlaces_2(_real_1(_self), _places),
      _printStringShowingDecimalPlaces_2(_imaginary_1(_self), _places),
    ], "J");
  },
  "{ :self :places | join([printStringShowingDecimalPlaces(real(self),places), printStringShowingDecimalPlaces(imaginary(self),places)],'J') }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "realImaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_real_1(_self), _imaginary_1(_self)];
  },
  "{ :self | [real(self), imaginary(self)] }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "reciprocal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_self, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "reciprocal: zero divide");
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(1, _self);
    });
  },
  "{ :self | if((=(self, 0)), { error(self,'reciprocal: zero divide') }, { /(1, self) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _abs_1(_self));
  },
  "{ :self | /(self, abs(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_i_1(_sinh_1(_i_1(_self))));
  },
  "{ :self | negated(i(sinh(i(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(
      _asterisk_2(_sinh_1(_real_1(_self)), _cos_1(_imaginary_1(_self))),
      _asterisk_2(_cosh_1(_real_1(_self)), _sin_1(_imaginary_1(_self))),
    );
  },
  "{ :self | Complex(*(sinh(real(self)), cos(imaginary(self))), *(cosh(real(self)), sin(imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(_equalsSign_2(_imaginary_1(_self), 0), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignEqualsSign_2(_real_1(_self), 0);
      }),
      function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asComplex_1(_sqrt_1(_real_1(_self)));
      },
      function () {
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
      },
    );
  },
  "{ :self | if((&(=(imaginary(self), 0), { >=(real(self), 0) })), { asComplex(sqrt(real(self))) }, { let v = sqrt((/(-(abs(self), real(self)), 2))); let u = /(/(imaginary(self), 2), v); Complex(u, v) }) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _self);
  },
  "{ :self | *(self, self) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "squaredNorm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_real_1(_self), _real_1(_self)),
      _asterisk_2(_imaginary_1(_self), _imaginary_1(_self)),
    );
  },
  "{ :self | +((*(real(self), real(self))), (*(imaginary(self), imaginary(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_sin_1(_self), _cos_1(_self));
  },
  "{ :self | /(sin(self), cos(self)) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negated_1(_i_1(_tan_1(_i_1(_self))));
  },
  "{ :self | negated(i(tan(i(self)))) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "Complex(",
      _storeString_1(_real_1(_self)),
      ", ",
      _storeString_1(_imaginary_1(_self)),
      ")",
    ], "");
  },
  "{ :self | join(['Complex(', storeString(real(self)), ', ', storeString(imaginary(self)), ')'],'') }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "weierstrassFunction",
  ["x", "a", "m"],
  function (_x, _a, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_to_2(1, _m), function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _exp_1(
          _asterisk_2(
            _asterisk_2(_pi_1(_Complex_2(0, 1)), _circumflexAccent_2(_k, _a)),
            _x,
          ),
        ),
        _pi_1(_circumflexAccent_2(_k, _a)),
      );
    }));
  },
  "{ :x :a :m | sum(collect(to(1, m), { :k | /(exp((*(*(pi(Complex(0, 1)), (^(k, a))), x))), pi((^(k, a)))) })) }",
);

sl.addMethodToExistingType(
  "Complex",
  "Complex",
  "zero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asComplex_1(0);
  },
  "{ :self | asComplex(0) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aComplexNumber, _asComplex_1(_self));
  },
  "{ :self :aComplexNumber :aBlock:/2 | aBlock(aComplexNumber,asComplex(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_self, _zero_1(_self));
  },
  "{ :self | Complex(self, zero(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "Complex",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newComplex_0(), _real, _imaginary);
  },
  "{ :real :imaginary | initializeSlots(newComplex(),real, imaginary) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "conjugated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _self;
  },
  "{ :self | self }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_zero_1(_self), _self);
  },
  "{ :self | Complex(zero(self), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "isReal",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return true;
  },
  "{ :self | true }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Complex",
  "j",
  ["real", "imaginary"],
  function (_real, _imaginary) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _real, _imaginary";
      throw new Error(errorMessage);
    } /* Statements */
    return _Complex_2(_real, _imaginary);
  },
  "{ :real :imaginary | Complex(real, imaginary) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Complex",
  "adaptToComplexAndApply",
  ["self", "aComplexNumber", "aBlock:/2"],
  function (_self, _aComplexNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aComplexNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_aComplexNumber, _each);
    });
  },
  "{ :self :aComplexNumber :aBlock:/2 | collect(self, { :each | aBlock(aComplexNumber,each) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Complex",
  "asComplex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL8 = _assertIsOfSize_2(_self, 2);
    let _a = _at_2(__SPL8, 1);
    let _b = _at_2(__SPL8, 2);
    /* Statements */
    return _j_2(_a, _b);
  },
  "{ :self | let __SPL8 = assertIsOfSize(self, 2); let a = at(__SPL8, 1); let b = at(__SPL8, 2); j(a,b) }",
);
