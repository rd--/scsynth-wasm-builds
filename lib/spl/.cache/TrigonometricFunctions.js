sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.acos(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.acos(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.asin(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.asin(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.atan(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.atan(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcTan",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_anObject, _self);
  }, ["self", "anObject"]),
  "{ :self :anObject | atan2(anObject,self) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "atan2",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Primitive */
    if (sl.isSmallFloat(_anObject)) {
      return Math.atan2(_self, _anObject);
    }
    /* Statements */
    return _adaptToNumberAndApply_3(_anObject, _self, _atan2_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | <primitive: if(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.atan2(_self, _anObject);\n\t\t}>\nadaptToNumberAndApply(anObject,self, atan2:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.cos(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.cos(_self);>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "cot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(1, _tan_1(_self));
  }, ["self"]),
  "{ :self | /(1, tan(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "csc",
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

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "sec",
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

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.sin(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.sin(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "sincHistorical",
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
        return 1;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_sin_1(_self), _self);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isZero(self), { 1 }, { /(sin(self), self) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "sincNormalized",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sincHistorical_1(_pi_1(_self));
  }, ["self"]),
  "{ :self | sincHistorical(pi(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Primitive */
    return Math.tan(_self);
  }, ["self"]),
  "{ :self | <primitive: return Math.tan(_self)>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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
          _square_1(_tmp),
          _square_1(_imaginary_1(_self)),
        );
        let _sh2y = _plusSign_2(_tmp, _sqrt_1(_delta));
        let _shy = _sqrt_1(_sh2y);
        let _ch2y = _plusSign_2(1, _sh2y);
        let _chy = _sqrt_1(_ch2y);
        /* Statements */
        return _j_2(
          _arcCos_1(_solidus_2(_real_1(_self), _chy)),
          _copySignTo_2(_imaginary_1(_self), _negate_1(_arcSinh_1(_shy))),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j(if((<(real(self), 0)), { pi }, { 0 }),copySignTo(real(self),arcCosh(abs(real(self))))) }, { j(arcCos(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(square(tmp), square(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcCos((/(real(self), chy))),copySignTo(imaginary(self),negate(arcSinh(shy)))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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
              _negate_1(
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
          _square_1(_tmp),
          _square_1(_imaginary_1(_self)),
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
  "{ :self | if((=(imaginary(self), 0)), { if((>(abs(real(self)), 1)), { j((*(pi(0.5), sign(real(self)))),negate(copySignTo(real(self),arcCosh(abs(real(self)))))) }, { j(arcSin(real(self)),0) }) }, { let tmp = /(-(squaredNorm(self), 1), 2); let delta = +(square(tmp), square(imaginary(self))); let sh2y = +(tmp, sqrt(delta)); let shy = sqrt(sh2y); let ch2y = +(1, sh2y); let chy = sqrt(ch2y); j(arcSin((/(real(self), chy))),copySignTo(imaginary(self),arcSinh(shy))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "csc",
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

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "sec",
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

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _negate_1(_i_1(_sinh_1(_i_1(_self))));
  }, ["self"]),
  "{ :self | negate(i(sinh(i(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
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

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcCot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcTan_1(_solidus_2(1, _self));
  }, ["self"]),
  "{ :self | arcTan((/(1, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "arcCot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _arcTan_1(_solidus_2(1, _self));
  }, ["self"]),
  "{ :self | arcTan((/(1, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "haversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(0.5, _hyphenMinus_2(1, _cos_1(_self)));
  }, ["self"]),
  "{ :self | *(0.5, (-(1, cos(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "haversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(0.5, _hyphenMinus_2(1, _cos_1(_self)));
  }, ["self"]),
  "{ :self | *(0.5, (-(1, cos(self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "inverseHaversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(2, _arcSin_1(_sqrt_1(_self)));
  }, ["self"]),
  "{ :self | *(2, arcSin(sqrt(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "inverseHaversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(2, _arcSin_1(_sqrt_1(_self)));
  }, ["self"]),
  "{ :self | *(2, arcSin(sqrt(self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "TrigonometricFunctions",
  "cosDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(
      _degreesToRadians_1(
        _hyphenMinus_2(
          90,
          _abs_1(
            _hyphenMinus_2(_percentSign_2(_plusSign_2(180, _self), 360), 180),
          ),
        ),
      ),
    );
  }, ["self"]),
  "{ :self | sin(degreesToRadians((-(90, abs((-(%(+(180, self), 360), 180))))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "TrigonometricFunctions",
  "sinDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosDegrees_1(_hyphenMinus_2(90, _self));
  }, ["self"]),
  "{ :self | cosDegrees((-(90, self))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "TrigonometricFunctions",
  "sobolevaModifiedTanh",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(
        _hyphenMinus_2(
          _exp_1(_asterisk_2(_a, _x)),
          _exp_1(_asterisk_2(_negate_1(_b), _x)),
        ),
        _plusSign_2(
          _exp_1(_asterisk_2(_c, _x)),
          _exp_1(_asterisk_2(_negate_1(_d), _x)),
        ),
      );
    }, ["x"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d | { :x | /((-(exp((*(a, x))), exp((*(negate(b), x))))), (+(exp((*(c, x))), exp((*(negate(d), x)))))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "cosecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _csc_1(1);
  }, ["self"]),
  "{ :self | csc(1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "cosecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _csc_1(1);
  }, ["self"]),
  "{ :self | csc(1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "secant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sec_1(1);
  }, ["self"]),
  "{ :self | sec(1) }",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "secant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sec_1(1);
  }, ["self"]),
  "{ :self | sec(1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCos_1);
  }, ["self"]),
  "{ :self | collect(self,arcCos:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcCot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCot_1);
  }, ["self"]),
  "{ :self | collect(self,arcCot:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcSin_1);
  }, ["self"]),
  "{ :self | collect(self,arcSin:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcTan_1);
  }, ["self"]),
  "{ :self | collect(self,arcTan:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cos_1);
  }, ["self"]),
  "{ :self | collect(self,cos:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "cosDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosDegrees_1);
  }, ["self"]),
  "{ :self | collect(self,cosDegrees:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "cot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cot_1);
  }, ["self"]),
  "{ :self | collect(self,cot:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "csc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _csc_1);
  }, ["self"]),
  "{ :self | collect(self,csc:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "haversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _haversine_1);
  }, ["self"]),
  "{ :self | collect(self,haversine:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "inverseHaversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _inverseHaversine_1);
  }, ["self"]),
  "{ :self | collect(self,inverseHaversine:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "sec",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sec_1);
  }, ["self"]),
  "{ :self | collect(self,sec:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sin_1);
  }, ["self"]),
  "{ :self | collect(self,sin:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "sinDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sinDegrees_1);
  }, ["self"]),
  "{ :self | collect(self,sinDegrees:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "sincHistorical",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sincHistorical_1);
  }, ["self"]),
  "{ :self | collect(self,sincHistorical:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "sincNormalized",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sincNormalized_1);
  }, ["self"]),
  "{ :self | collect(self,sincNormalized:/1) }",
);
