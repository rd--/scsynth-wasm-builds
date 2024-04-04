sl.addType(
  false,
  "RectangularCoordinate",
  "RectangularCoordinate",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y"],
);

sl.copyTraitToType(
  "Object",
  "RectangularCoordinate",
);

sl.copyTraitToType(
  "Magnitude",
  "RectangularCoordinate",
);

sl.copyTraitToType(
  "Indexable",
  "RectangularCoordinate",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "equalsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _equalsSign_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, =)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "tilde",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _equalBy_3(_self, _anObject, _tilde_2);
  },
  "{ :self :anObject |\n\t\tself.equalBy(anObject, ~)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _lessThanSign_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, <)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _lessThanSignEqualsSign_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, <=)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _plusSign_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, +)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, -)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _asterisk_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, *)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidus_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, /)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidusSolidus_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, //)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _percentSign_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, %)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_abs_1(_x_1(_self)), _abs_1(_y_1(_self)));
  },
  "{ :self |\n\t\tRectangularCoordinate(self.x.abs, self.y.abs)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_RectangularCoordinate_2(_aNumber, _aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(RectangularCoordinate(aNumber, aNumber), self)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "applyUnaryOperator",
  ["self", "aBlock:/1"],
  function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(
      _aBlock_1(_x_1(_self)),
      _aBlock_1(_y_1(_self)),
    );
  },
  "{ :self :aBlock:/1 |\n\t\tRectangularCoordinate(self.x.aBlock, self.y.aBlock)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "applyBinaryOperator",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isRectangularCoordinate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _RectangularCoordinate_2(
        _aBlock_2(_x_1(_self), _x_1(_anObject)),
        _aBlock_2(_y_1(_self), _y_1(_anObject)),
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToRectangularCoordinateAndApply_3(
        _anObject,
        _self,
        _aBlock_2,
      );
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isRectangularCoordinate.if {\n\t\t\tRectangularCoordinate(aBlock(self.x, anObject.x), aBlock(self.y, anObject.y))\n\t\t} {\n\t\t\tanObject.adaptToRectangularCoordinateAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "asList",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return [_x_1(_self), _y_1(_self)];
  },
  "{ :self |\n\t\t[self.x, self.y]\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "asPolarCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PolarCoordinate_2(_r_1(_self), _theta_1(_self));
  },
  "{ :self |\n\t\tPolarCoordinate(self.r, self.theta)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "asRecord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return Object.fromEntries([["x", _x_1(_self)], ["y", _y_1(_self)]]);
  },
  "{ :self |\n\t\t(x: self.x, y: self.y)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "asTuple",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asTuple_1([_x_1(_self), _y_1(_self)]);
  },
  "{ :self |\n\t\t(self.x, self.y)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "at",
  ["self", "index"],
  function (_self, _index) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _index";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _x_1(_self);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _y_1(_self);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(_self, "RectangularCoordinate>>at: index out of range");
    });
  },
  "{ :self :index |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x },\n\t\t\t2 -> { self.y }\n\t\t]) {\n\t\t\tself.error('RectangularCoordinate>>at: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "atPut",
  ["self", "index", "value"],
  function (_self, _index, _value) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _index, _value";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _caseOfOtherwise_3(_index, [
      _hyphenMinusGreaterThanSign_2(1, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _x_2(_self, _value);
      }),
      _hyphenMinusGreaterThanSign_2(2, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _y_2(_self, _value);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _error_2(
        _self,
        "RectangularCoordinate>>atPut: index out of range",
      );
    });
  },
  "{ :self :index :value |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x := value },\n\t\t\t2 -> { self.y := value }\n\t\t]) {\n\t\t\tself.error('RectangularCoordinate>>atPut: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "closeTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _closeTo_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, closeTo:/2)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "compareBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _aBlock_2(_y_1(_self), _y_1(_anObject));
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\taBlock(self.x, anObject.x) & {\n\t\t\taBlock(self.y, anObject.y)\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "distance",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _dx = _hyphenMinus_2(_x_1(_anObject), _x_1(_self));
    let _dy = _hyphenMinus_2(_y_1(_anObject), _y_1(_self));
    /* Statements */
    return _sqrt_1(_plusSign_2(_asterisk_2(_dx, _dx), _asterisk_2(_dy, _dy)));
  },
  "{ :self :anObject |\n\t\tlet dx = anObject.x - self.x;\n\t\tlet dy = anObject.y - self.y;\n\t\t((dx * dx) + (dy * dy)).sqrt\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "dotProduct",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_x_1(_self), _x_1(_anObject)),
      _asterisk_2(_y_1(_self), _y_1(_anObject)),
    );
  },
  "{ :self :anObject |\n\t\t(self.x * anObject.x) + (self.y * anObject.y)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "equalBy",
  ["self", "anObject", "aBlock:/2"],
  function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isRectangularCoordinate_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _ampersand_2(_aBlock_2(_x_1(_self), _x_1(_anObject)), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _aBlock_2(_y_1(_self), _y_1(_anObject));
      });
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isRectangularCoordinate & {\n\t\t\taBlock(self.x, anObject.x) & {\n\t\t\t\taBlock(self.y, anObject.y)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "first",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _x_1(_self);
  },
  "{ :self |\n\t\tself.x\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "inverse",
  ["self", "inversionCenter", "inversionRadius"],
  function (_self, _inversionCenter, _inversionRadius) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _inversionCenter, _inversionRadius";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _x0 = _x_1(_inversionCenter);
    let _y0 = _y_1(_inversionCenter);
    let _k = _inversionRadius;
    /* Statements */
    return _RectangularCoordinate_2(
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
  "{ :self :inversionCenter :inversionRadius |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet x0 = inversionCenter.x;\n\t\tlet y0 = inversionCenter.y;\n\t\tlet k = inversionRadius;\n\t\tRectangularCoordinate(\n\t\t\tx0 + ((k.squared * (x - x0)) / ((x - x0).squared + (y - y0).squared)),\n\t\t\ty0 + ((k.squared * (y - y0)) / ((x - x0).squared + (y - y0).squared))\n\t\t)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "isRectangularCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return true;
  },
  "{ :self |\n\t\ttrue\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "isZero",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _ampersand_2(_isZero_1(_x_1(_self)), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _isZero_1(_y_1(_self));
    });
  },
  "{ :self |\n\t\tself.x.isZero & {\n\t\t\tself.y.isZero\n\t\t}\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _max_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, max:/2)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _min_2);
  },
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, min:/2)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "negate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    _x_2(_self, _negated_1(_x_1(_self)));
    return _y_2(_self, _negated_1(_x_1(_self)));
  },
  "{ :self |\n\t\tself.x := self.x.negated;\n\t\tself.y := self.x.negated\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _applyUnaryOperator_2(_self, _negated_1);
  },
  "{ :self |\n\t\tself.applyUnaryOperator(negated:/1)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "norm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
    );
  },
  "{ :self |\n\t\t(self.x.squared + self.y.squared).sqrt\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "normalized",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(_self, _norm_1(_self));
  },
  "{ :self |\n\t\tself / self.norm\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "r",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sqrt_1(
      _plusSign_2(_squared_1(_x_1(_self)), _squared_1(_y_1(_self))),
    );
  },
  "{ :self |\n\t\t{- r = radius = rho -}\n\t\t(self.x.squared + self.y.squared).sqrt\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "second",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _y_1(_self);
  },
  "{ :self |\n\t\tself.y\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "size",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 2;
  },
  "{ :self |\n\t\t2\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "storeString",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _join_1([
      "RectangularCoordinate(",
      _storeString_1(_x_1(_self)),
      ", ",
      _storeString_1(_y_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'RectangularCoordinate(',\n\t\t\t\tself.x.storeString,\n\t\t\t\t', ',\n\t\t\t\tself.y.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "swapInPlace",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    /* Statements */
    _x_2(_self, _y);
    return _y_2(_self, _x);
  },
  "{ :self |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tself.x := y;\n\t\tself.y := x\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "swapped",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_y_1(_self), _x_1(_self));
  },
  "{ :self |\n\t\tRectangularCoordinate(self.y, self.x)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "theta",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  },
  "{ :self |\n\t\tatan2(self.y, self.x)\n\t}",
);

sl.addMethod(
  "RectangularCoordinate",
  "RectangularCoordinate",
  "translateBy",
  ["self", "delta"],
  function (_self, _delta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _plusSign_2(_self, _delta);
  },
  "{ :self :delta |\n\t\tself + delta\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "RectangularCoordinate",
  "adaptToRectangularCoordinateAndApply",
  ["self", "aRectangularCoordinate", "aBlock:/2"],
  function (_self, _aRectangularCoordinate, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aRectangularCoordinate, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(
      _aRectangularCoordinate,
      _RectangularCoordinate_2(_self, _self),
    );
  },
  "{ :self :aRectangularCoordinate :aBlock:/2 |\n\t\taBlock(aRectangularCoordinate, RectangularCoordinate(self, self))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "RectangularCoordinate",
  "RectangularCoordinate",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newRectangularCoordinate_0(), _x, _y);
  },
  "{ :x :y |\n\t\tnewRectangularCoordinate().initializeSlots(x, y)\n\t}",
);

sl.addMethod(
  "List",
  "RectangularCoordinate",
  "asRectangularCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym18 = _assertIsOfSize_2(_self, 2),
      _x = _at_2(__genSym18, 1),
      _y = _at_2(__genSym18, 2);
    /* Statements */
    return _RectangularCoordinate_2(_x, _y);
  },
  "{ :self |\n\t\tlet [x, y] = self;\n\t\tRectangularCoordinate(x, y)\n\t}",
);

sl.addMethod(
  "Tuple",
  "RectangularCoordinate",
  "asRectangularCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym18 = _assertIsOfSize_2(_self, 2),
      _x = _at_2(__genSym18, 1),
      _y = _at_2(__genSym18, 2);
    /* Statements */
    return _RectangularCoordinate_2(_x, _y);
  },
  "{ :self |\n\t\tlet [x, y] = self;\n\t\tRectangularCoordinate(x, y)\n\t}",
);

sl.addMethod(
  "Record",
  "RectangularCoordinate",
  "asRectangularCoordinate",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _RectangularCoordinate_2(_at_2(_self, "x"), _at_2(_self, "y"));
  },
  "{ :self |\n\t\tRectangularCoordinate(self::x, self::y)\n\t}",
);
