sl.addType(
  false,
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Magnitude",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Indexable",
  "PlanarCoordinates",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _hasEqualSlotsBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject | hasEqualSlotsBy(self,anObject, ~) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compareBy_3(_self, _anObject, _lessThanSign_2);
  },
  "{ :self :anObject | compareBy(self,anObject, <) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compareBy_3(_self, _anObject, _lessThanSignEqualsSign_2);
  },
  "{ :self :anObject | compareBy(self,anObject, <=) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _plusSign_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, +) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _hyphenMinus_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, -) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _asterisk_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, *) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidus_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, /) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidusSolidus_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, //) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _percentSign_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, %) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_abs_1(_x_1(_self)), _abs_1(_y_1(_self)));
  },
  "{ :self | PlanarCoordinates(abs(x(self)), abs(y(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "abscissa",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x_1(_self);
  },
  "{ :self | x(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_PlanarCoordinates_2(_aNumber, _aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 | aBlock(PlanarCoordinates(aNumber, aNumber), self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyUnaryOperator",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_aBlock_1(_x_1(_self)), _aBlock_1(_y_1(_self)));
  },
  "{ :self :aBlock:/1 | PlanarCoordinates(aBlock(x(self)), aBlock(y(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyBinaryOperator",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isPlanarCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _PlanarCoordinates_2(
        _aBlock_2(_x_1(_self), _x_1(_anObject)),
        _aBlock_2(_y_1(_self), _y_1(_anObject)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToPlanarCoordinatesAndApply_3(_anObject, _self, _aBlock_2);
    });
  },
  "{ :self :anObject :aBlock:/2 | if(isPlanarCoordinates(anObject), { PlanarCoordinates(aBlock(x(self), x(anObject)), aBlock(y(self), y(anObject))) }, { adaptToPlanarCoordinatesAndApply(anObject,self, aBlock:/2) }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_x_1(_self), _y_1(_self)];
  },
  "{ :self | [x(self), y(self)] }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_2(_radius_1(_self), _theta_1(_self));
  },
  "{ :self | PolarCoordinates(radius(self), theta(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)]]);
  },
  "{ :self | Record([['x', x(self)], ['y', y(self)]]) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _y_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "PlanarCoordinates>>at: index out of range");
    });
  },
  "{ :self :index | caseOfOtherwise(index, [->({ 1 }, { x(self) }), ->({ 2 }, { y(self) })], { error(self,'PlanarCoordinates>>at: index out of range') }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _x_2(_self, _value);
      }),
      _hyphenMinusGreaterThanSign_2(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 2;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _y_2(_self, _value);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "PlanarCoordinates>>atPut: index out of range");
    });
  },
  "{ :self :index :value | caseOfOtherwise(index, [->({ 1 }, { x(self, value) }), ->({ 2 }, { y(self, value) })], { error(self,'PlanarCoordinates>>atPut: index out of range') }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "compareBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_2(_y_1(_self), _y_1(_anObject));
    });
  },
  "{ :self :anObject :aBlock:/2 | &(aBlock(x(self), x(anObject)), { aBlock(y(self), y(anObject)) }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  },
  "{ :self | 0 }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "distance",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _dx = _hyphenMinus_2(_x_1(_anObject), _x_1(_self));
    let _dy = _hyphenMinus_2(_y_1(_anObject), _y_1(_self));
    /* Statements */
    return _sqrt_1(_plusSign_2(_asterisk_2(_dx, _dx), _asterisk_2(_dy, _dy)));
  },
  "{ :self :anObject | let dx = -(x(anObject), x(self)); let dy = -(y(anObject), y(self)); sqrt((+((*(dx, dx)), (*(dy, dy))))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "dotProduct",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_x_1(_self), _x_1(_anObject)),
      _asterisk_2(_y_1(_self), _y_1(_anObject)),
    );
  },
  "{ :self :anObject | +((*(x(self), x(anObject))), (*(y(self), y(anObject)))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "embeddingDimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _x_1(_self);
  },
  "{ :self | x(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "inverse",
  ["self", "inversionCenter", "inversionRadius"],
  function (_self, _inversionCenter, _inversionRadius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _inversionCenter, _inversionRadius";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _x0 = _x_1(_inversionCenter);
    let _y0 = _y_1(_inversionCenter);
    let _k = _inversionRadius;
    /* Statements */
    return _PlanarCoordinates_2(
      _plusSign_2(
        _x0,
        _solidus_2(
          _asterisk_2(_squared_1(_k), _hyphenMinus_2(_x, _x0)),
          _plusSign_2(
            _squared_1(_hyphenMinus_2(_x, _x0)),
            _squared_1(_hyphenMinus_2(_y, _y0)),
          ),
        ),
      ),
      _plusSign_2(
        _y0,
        _solidus_2(
          _asterisk_2(_squared_1(_k), _hyphenMinus_2(_y, _y0)),
          _plusSign_2(
            _squared_1(_hyphenMinus_2(_x, _x0)),
            _squared_1(_hyphenMinus_2(_y, _y0)),
          ),
        ),
      ),
    );
  },
  "{ :self :inversionCenter :inversionRadius | let x = x(self); let y = y(self); let x0 = x(inversionCenter); let y0 = y(inversionCenter); let k = inversionRadius; PlanarCoordinates(+(x0, (/((*(squared(k), (-(x, x0)))), (+(squared((-(x, x0))), squared((-(y, y0)))))))), +(y0, (/((*(squared(k), (-(y, y0)))), (+(squared((-(x, x0))), squared((-(y, y0))))))))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _compareBy_3(_self, _anObject, _isCloseTo_2);
  },
  "{ :self :anObject | compareBy(self,anObject, isCloseTo:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "isPlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(_isZero_1(_x_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _isZero_1(_y_1(_self));
    });
  },
  "{ :self | &(isZero(x(self)), { isZero(y(self)) }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _max_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, max:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _min_2);
  },
  "{ :self :anObject | applyBinaryOperator(self,anObject, min:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "negate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _x_2(_self, _negated_1(_x_1(_self)));
    return _y_2(_self, _negated_1(_x_1(_self)));
  },
  "{ :self | x(self, negated(x(self))); y(self, negated(x(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyUnaryOperator_2(_self, _negated_1);
  },
  "{ :self | applyUnaryOperator(self,negated:/1) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "norm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
    );
  },
  "{ :self | sqrt((+(squared(x(self)), squared(y(self))))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "normalized",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _norm_1(_self));
  },
  "{ :self | /(self, norm(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "ordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _y_1(_self);
  },
  "{ :self | y(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "phi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  },
  "{ :self | atan2(y(self), x(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
    );
  },
  "{ :self | sqrt((+(squared(x(self)), squared(y(self))))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "rho",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_self);
  },
  "{ :self | radius(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _y_1(_self);
  },
  "{ :self | y(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 2;
  },
  "{ :self | 2 }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _join_2([
      "PlanarCoordinates(",
      _storeString_1(_x_1(_self)),
      ", ",
      _storeString_1(_y_1(_self)),
      ")",
    ], "");
  },
  "{ :self | join(['PlanarCoordinates(', storeString(x(self)), ', ', storeString(y(self)), ')'],'') }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "swapInPlace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    /* Statements */
    _x_2(_self, _y);
    return _y_2(_self, _x);
  },
  "{ :self | let x = x(self); let y = y(self); x(self, y); y(self, x) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "swapped",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_y_1(_self), _x_1(_self));
  },
  "{ :self | PlanarCoordinates(y(self), x(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  },
  "{ :self | atan2(y(self), x(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "translateBy",
  ["self", "delta"],
  function (_self, _delta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _delta);
  },
  "{ :self :delta | +(self, delta) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlanarCoordinates",
  "adaptToPlanarCoordinatesAndApply",
  ["self", "aPlanarCoordinates", "aBlock:/2"],
  function (_self, _aPlanarCoordinates, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aPlanarCoordinates, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_aPlanarCoordinates, _PlanarCoordinates_2(_self, _self));
  },
  "{ :self :aPlanarCoordinates :aBlock:/2 | aBlock(aPlanarCoordinates, PlanarCoordinates(self, self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newPlanarCoordinates_0(), _x, _y);
  },
  "{ :x :y | initializeSlots(newPlanarCoordinates(),x, y) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_self, _asPlanarCoordinates_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SPL5 = _assertIsOfSize_2(_self, 2);
      let _x = _at_2(__SPL5, 1);
      let _y = _at_2(__SPL5, 2);
      /* Statements */
      return _PlanarCoordinates_2(_x, _y);
    });
  },
  "{ :self | if(isMatrix(self), { collect(self,asPlanarCoordinates:/1) }, { let __SPL5 = assertIsOfSize(self, 2); let x = at(__SPL5, 1); let y = at(__SPL5, 2); PlanarCoordinates(x, y) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollect_3(_x, _y, _PlanarCoordinates_2);
  },
  "{ :x :y | withCollect(x,y, PlanarCoordinates:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_at_2(_self, "x"), _at_2(_self, "y"));
  },
  "{ :self | PlanarCoordinates(at(self, 'x'), at(self, 'y')) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "PlanarCoordinates",
  "circlePoints",
  ["n", "o", "r", "theta"],
  function (_n, _o, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _n, _o, _r, _theta";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _m = _solidus_2(_pi_1(2), _n);
    /* Statements */
    return _collect_2(_to_2(0, _hyphenMinus_2(_n, 1)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _o,
        _fromPolarCoordinates_1([_r, _plusSign_2(_theta, _asterisk_2(_i, _m))]),
      );
    });
  },
  "{ :n :o :r :theta | let m = /(pi(2), n); collect(to(0,-(n, 1)), { :i | +(o, fromPolarCoordinates([r, +(theta, (*(i, m)))])) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "PlanarCoordinates",
  "circlePoints",
  ["n", "r"],
  function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _theta = _hyphenMinus_2(
      _pi_1(_solidus_2(1, _n)),
      _pi_1(_solidus_2(1, 2)),
    );
    /* Statements */
    return _circlePoints_4(_n, [0, 0], _r, _theta);
  },
  "{ :n :r | let theta = -(pi((/(1, n))), pi((/(1, 2)))); circlePoints(n,[0, 0], r, theta) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "PlanarCoordinates",
  "spherePoints",
  ["n", "r"],
  function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _solidus_2(_asterisk_2(_pi_1(4), _squared_1(_r)), _n);
    let _d = _sqrt_1(_a);
    let _mTheta = _rounded_1(_solidus_2(_pi_1(1), _d));
    let _dTheta = _solidus_2(_pi_1(1), _mTheta);
    let _dPhi = _solidus_2(_a, _dTheta);
    let _answer = [];
    /* Statements */
    _do_2(_upOrDownTo_2(0, _hyphenMinus_2(_mTheta, 1)), function (_m) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _m";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _theta = _solidus_2(_pi_1(_plusSign_2(_m, 0.5)), _mTheta);
      let _mPhi = _rounded_1(
        _solidus_2(_asterisk_2(_pi_1(2), _sin_1(_theta)), _dPhi),
      );
      /* Statements */
      return _do_2(_upOrDownTo_2(0, _hyphenMinus_2(_mPhi, 1)), function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _phi = _solidus_2(_asterisk_2(_pi_1(2), _n), _mPhi);
        /* Statements */
        return _add_2(
          _answer,
          _asterisk_2([
            _asterisk_2(_sin_1(_theta), _cos_1(_phi)),
            _asterisk_2(_sin_1(_theta), _sin_1(_phi)),
            _cos_1(_theta),
          ], _r),
        );
      });
    });
    return _answer;
  },
  "{ :n :r | let a = /((*(pi(4), squared(r))), n); let d = sqrt(a); let mTheta = rounded((/(pi(1), d))); let dTheta = /(pi(1), mTheta); let dPhi = /(a, dTheta); let answer = []; do(upOrDownTo(0, -(mTheta, 1)), { :m | let theta = /(pi((+(m, 0.5))), mTheta); let mPhi = rounded((/(*(pi(2), sin(theta)), dPhi))); do(upOrDownTo(0, -(mPhi, 1)), { :n | let phi = /((*(pi(2), n)), mPhi); add(answer,*([*(sin(theta), cos(phi)), *(sin(theta), sin(phi)), cos(theta)], r)) }) }); answer }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "PlanarCoordinates",
  "spherePointsFibonacci",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = [];
    let _phi = _pi_1(_hyphenMinus_2(_sqrt_1(5), 1));
    /* Statements */
    _toDo_3(0, _hyphenMinus_2(_n, 1), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _y = _hyphenMinus_2(
        1,
        _asterisk_2(_solidus_2(_i, _hyphenMinus_2(_n, 1)), 2),
      );
      let _radius = _sqrt_1(_hyphenMinus_2(1, _asterisk_2(_y, _y)));
      let _theta = _asterisk_2(_phi, _i);
      let _x = _asterisk_2(_cos_1(_theta), _radius);
      let _z = _asterisk_2(_sin_1(_theta), _radius);
      /* Statements */
      return _add_2(_answer, [_x, _y, _z]);
    });
    return _answer;
  },
  "{ :n | let answer = []; let phi = pi((-(sqrt(5), 1))); toDo(0, -(n, 1), { :i | let y = -(1, (*((/(i, (-(n, 1)))), 2))); let radius = sqrt((-(1, (*(y, y))))); let theta = *(phi, i); let x = *(cos(theta), radius); let z = *(sin(theta), radius); add(answer,[x, y, z]) }); answer }",
);
