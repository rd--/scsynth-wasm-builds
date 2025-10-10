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
  "{ :self |\n\t\t<primitive: return Math.acos(_self)>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcCsc",
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
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcSin_1(_solidus_2(1, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tInfinity\n\t\t} {\n\t\t\t(1 / self).arcSin\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "TrigonometricFunctions",
  "arcSec",
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
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _arcCos_1(_solidus_2(1, _self));
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isZero.if {\n\t\t\tInfinity\n\t\t} {\n\t\t\t(1 / self).arcCos\n\t\t}\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.asin(_self)>\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.atan(_self)>\n\t}",
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
  "{ :self :anObject |\n\t\tanObject.atan2(self)\n\t}",
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
  "{ :self :anObject |\n\t\t<primitive:\n\t\tif(sl.isSmallFloat(_anObject)) {\n\t\t\treturn Math.atan2(_self, _anObject);\n\t\t}\n\t\t>\n\t\tanObject.adaptToNumberAndApply(self, atan2:/2)\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.cos(_self);>\n\t}",
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
  "{ :self |\n\t\t1 / self.tan\n\t}",
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
  "{ :self |\n\t\t1 / self.sin\n\t}",
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
  "{ :self |\n\t\t1 / self.cos\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.sin(_self)>\n\t}",
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
  "{ :self |\n\t\tself.isZero.if {\n\t\t\t1\n\t\t} {\n\t\t\tself.sin / self\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.pi.sincHistorical\n\t}",
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
  "{ :self |\n\t\t<primitive: return Math.tan(_self)>\n\t}",
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
  "{ :self |\n\t\t(self.imaginary = 0).if {\n\t\t\t(self.real.abs > 1).if {\n\t\t\t\t(self.real < 0).if {\n\t\t\t\t\tpi\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}.j(\n\t\t\t\t\tself.real.copySignTo(self.real.abs.arcCosh)\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.real.arcCos.j(0)\n\t\t\t}\n\t\t} {\n\t\t\tlet tmp = self.squaredNorm - 1 / 2;\n\t\t\tlet delta = tmp.square + self.imaginary.square;\n\t\t\tlet sh2y = tmp + delta.sqrt;\n\t\t\tlet shy = sh2y.sqrt;\n\t\t\tlet ch2y = 1 + sh2y;\n\t\t\tlet chy = ch2y.sqrt;\n\t\t\t(self.real / chy).arcCos.j(\n\t\t\t\tself.imaginary.copySignTo(shy.arcSinh.negate)\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "arcCsc",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Complex_2(0, -1),
      _log_1(
        _plusSign_2(
          _sqrt_1(_hyphenMinus_2(1, _solidus_2(1, _square_1(_z)))),
          _solidus_2(_Complex_2(0, 1), _z),
        ),
      ),
    );
  }, ["z"]),
  "{ :z |\n\t\t-1I * ((1 - (1 / z.square)).sqrt + (1I / z)).log\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "TrigonometricFunctions",
  "arcSec",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _Complex_2(0, -1),
      _hyphenMinus_2(
        _log_1(_plusSign_2(_sqrt_1(_hyphenMinus_2(1, _square_1(_z))), 1)),
        _log_1(_z),
      ),
    );
  }, ["z"]),
  "{ :z |\n\t\t-1I * (((1 - z.square).sqrt + 1).log - z.log)\n\t}",
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
  "{ :self |\n\t\t(self.imaginary = 0).if {\n\t\t\t(self.real.abs > 1).if {\n\t\t\t\t(0.5.pi * self.real.sign).j(\n\t\t\t\t\tself.real.copySignTo(self.real.abs.arcCosh).negate\n\t\t\t\t)\n\t\t\t} {\n\t\t\t\tself.real.arcSin.j(0)\n\t\t\t}\n\t\t} {\n\t\t\tlet tmp = self.squaredNorm - 1 / 2;\n\t\t\tlet delta = tmp.square + self.imaginary.square;\n\t\t\tlet sh2y = tmp + delta.sqrt;\n\t\t\tlet shy = sh2y.sqrt;\n\t\t\tlet ch2y = 1 + sh2y;\n\t\t\tlet chy = ch2y.sqrt;\n\t\t\t(self.real / chy).arcSin.j(\n\t\t\t\tself.imaginary.copySignTo(shy.arcSinh)\n\t\t\t)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tlet r2 = self.squaredNorm;\n\t\tComplex(\n\t\t\t(1 - r2).arcTan(self.real * 2) / 2,\n\t\t\t((r2 + (self.imaginary * 2) + 1) / (r2 - (self.imaginary * 2) + 1)).log / 4\n\t\t)\n\t}",
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
  "{ :self :aNumber |\n\t\tself.isZero.if {\n\t\t\taNumber.isZero.if {\n\t\t\t\tComplex(0, 0)\n\t\t\t} {\n\t\t\t\tComplex(1.pi / aNumber.real.copySignTo(2), 0)\n\t\t\t}\n\t\t} {\n\t\t\tlet answer = (aNumber / self).arcTan;\n\t\t\t(self.real < 0).if {\n\t\t\t\tanswer + 1.pi\n\t\t\t} {\n\t\t\t\t(answer.real > 1.pi).if {\n\t\t\t\t\tanswer - 2.pi\n\t\t\t\t} {\n\t\t\t\t\tanswer\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.i.cosh\n\t}",
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
  "{ :self |\n\t\t1 / self.sin\n\t}",
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
  "{ :self |\n\t\t1 / self.cos\n\t}",
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
  "{ :self |\n\t\tself.i.sinh.i.negate\n\t}",
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
  "{ :self |\n\t\tself.sin / self.cos\n\t}",
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
  "{ :self |\n\t\t(1 / self).arcTan\n\t}",
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
  "{ :self |\n\t\t(1 / self).arcTan\n\t}",
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
  "{ :self |\n\t\t0.5 * (1 - self.cos)\n\t}",
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
  "{ :self |\n\t\t0.5 * (1 - self.cos)\n\t}",
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
  "{ :self |\n\t\t2 * self.sqrt.arcSin\n\t}",
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
  "{ :self |\n\t\t2 * self.sqrt.arcSin\n\t}",
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
  "{ :self |\n\t\t(90 - (180 + self % 360 - 180).abs).degreesToRadians.sin\n\t}",
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
  "{ :self |\n\t\t(90 - self).cosDegrees\n\t}",
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
  "{ :a :b :c :d |\n\t\t{ :x |\n\t\t\t((a * x).exp - (b.negate * x).exp) / ((c * x).exp + (d.negate * x).exp)\n\t\t}\n\t}",
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
  "{ :self |\n\t\t1.csc\n\t}",
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
  "{ :self |\n\t\t1.csc\n\t}",
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
  "{ :self |\n\t\t1.sec\n\t}",
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
  "{ :self |\n\t\t1.sec\n\t}",
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
  "{ :self |\n\t\tself.collect(arcCos:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcCot:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcCsc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCsc_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(arcCsc:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "TrigonometricFunctions",
  "arcSec",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcSec_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(arcSec:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcSin:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(arcTan:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cos:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cosDegrees:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(cot:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(csc:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(haversine:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(inverseHaversine:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sec:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sin:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sinDegrees:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sincHistorical:/1)\n\t}",
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
  "{ :self |\n\t\tself.collect(sincNormalized:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TrigonometricFunctions",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cos_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.cos\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TrigonometricFunctions",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.sin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "TrigonometricFunctions",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tan_1(_asFloat_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.asFloat.tan\n\t}",
);
