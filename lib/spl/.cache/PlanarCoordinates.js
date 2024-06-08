sl.addType(
  false,
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["Object", "Magnitude", "Indexable"],
  ["x", "y"],
);

sl.copyTraitToType(
  "Object",
  "PlanarCoordinates",
);

sl.copyTraitToType(
  "Magnitude",
  "PlanarCoordinates",
);

sl.copyTraitToType(
  "Indexable",
  "PlanarCoordinates",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _PlanarCoordinates_2(_abs_1(_x_1(_self)), _abs_1(_y_1(_self)));
  },
  "{ :self |\n\t\tPlanarCoordinates(self.x.abs, self.y.abs)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "abscissa",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _aBlock_2(_PlanarCoordinates_2(_aNumber, _aNumber), _self);
  },
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(PlanarCoordinates(aNumber, aNumber), self)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _PlanarCoordinates_2(_aBlock_1(_x_1(_self)), _aBlock_1(_y_1(_self)));
  },
  "{ :self :aBlock:/1 |\n\t\tPlanarCoordinates(self.x.aBlock, self.y.aBlock)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _if_3(_isPlanarCoordinates_1(_anObject), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _PlanarCoordinates_2(
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
      return _adaptToPlanarCoordinatesAndApply_3(_anObject, _self, _aBlock_2);
    });
  },
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isPlanarCoordinates.if {\n\t\t\tPlanarCoordinates(aBlock(self.x, anObject.x), aBlock(self.y, anObject.y))\n\t\t} {\n\t\t\tanObject.adaptToPlanarCoordinatesAndApply(self, aBlock:/2)\n\t\t}\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPolarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PolarCoordinates_2(_r_1(_self), _theta_1(_self));
  },
  "{ :self |\n\t\tPolarCoordinates(self.r, self.theta)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _self;
  },
  "{ :self |\n\t\tself\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
      return _error_2(_self, "PlanarCoordinates>>at: index out of range");
    });
  },
  "{ :self :index |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x },\n\t\t\t2 -> { self.y }\n\t\t]) {\n\t\t\tself.error('PlanarCoordinates>>at: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
      return _error_2(_self, "PlanarCoordinates>>atPut: index out of range");
    });
  },
  "{ :self :index :value |\n\t\tindex.caseOfOtherwise([\n\t\t\t1 -> { self.x := value },\n\t\t\t2 -> { self.y := value }\n\t\t]) {\n\t\t\tself.error('PlanarCoordinates>>atPut: index out of range')\n\t\t}\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "dimension",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return 0;
  },
  "{ :self |\n\t\t0\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "embeddingDimension",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _ampersand_2(_isPlanarCoordinates_1(_anObject), function () {
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isPlanarCoordinates & {\n\t\t\taBlock(self.x, anObject.x) & {\n\t\t\t\taBlock(self.y, anObject.y)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "{ :self :inversionCenter :inversionRadius |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet x0 = inversionCenter.x;\n\t\tlet y0 = inversionCenter.y;\n\t\tlet k = inversionRadius;\n\t\tPlanarCoordinates(\n\t\t\tx0 + ((k.squared * (x - x0)) / ((x - x0).squared + (y - y0).squared)),\n\t\t\ty0 + ((k.squared * (y - y0)) / ((x - x0).squared + (y - y0).squared))\n\t\t)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "isCloseTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _compareBy_3(_self, _anObject, _isCloseTo_2);
  },
  "{ :self :anObject |\n\t\tself.compareBy(anObject, isCloseTo:/2)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "isPlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "ordinate",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "phi",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "{ :self |\n\t\t(self.x.squared + self.y.squared).sqrt\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "radius",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _r_1(_self);
  },
  "{ :self |\n\t\tself.r\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "rho",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _r_1(_self);
  },
  "{ :self |\n\t\tself.r\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
      "PlanarCoordinates(",
      _storeString_1(_x_1(_self)),
      ", ",
      _storeString_1(_y_1(_self)),
      ")",
    ]);
  },
  "{ :self |\n\t\t[\n\t\t\t'PlanarCoordinates(',\n\t\t\tself.x.storeString,\n\t\t\t', ',\n\t\t\tself.y.storeString,\n\t\t\t')'\n\t\t].join\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
    return _PlanarCoordinates_2(_y_1(_self), _x_1(_self));
  },
  "{ :self |\n\t\tPlanarCoordinates(self.y, self.x)\n\t}",
);

sl.addMethod(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "adaptToPlanarCoordinatesAndApply",
  ["self", "aPlanarCoordinates", "aBlock:/2"],
  function (_self, _aPlanarCoordinates, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage =
        "Arity: expected 3, _self, _aPlanarCoordinates, _aBlock_2";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _aBlock_2(_aPlanarCoordinates, _PlanarCoordinates_2(_self, _self));
  },
  "{ :self :aPlanarCoordinates :aBlock:/2 |\n\t\taBlock(aPlanarCoordinates, PlanarCoordinates(self, self))\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _initializeSlots_3(_newPlanarCoordinates_0(), _x, _y);
  },
  "{ :x :y |\n\t\tnewPlanarCoordinates().initializeSlots(x, y)\n\t}",
);

sl.addMethod(
  "List",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _asPlanarCoordinates_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym10 = _assertIsOfSize_2(_self, 2),
        _x = _at_2(__genSym10, 1),
        _y = _at_2(__genSym10, 2);
      /* Statements */
      return _PlanarCoordinates_2(_x, _y);
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tself.collect(asPlanarCoordinates:/1)\n\t\t} {\n\t\t\tlet [x, y] = self;\n\t\t\tPlanarCoordinates(x, y)\n\t\t}\n\t}",
);

sl.addMethod(
  "Tuple",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isMatrix_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _collect_2(_self, _asPlanarCoordinates_1);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Temporaries */
      let __genSym10 = _assertIsOfSize_2(_self, 2),
        _x = _at_2(__genSym10, 1),
        _y = _at_2(__genSym10, 2);
      /* Statements */
      return _PlanarCoordinates_2(_x, _y);
    });
  },
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tself.collect(asPlanarCoordinates:/1)\n\t\t} {\n\t\t\tlet [x, y] = self;\n\t\t\tPlanarCoordinates(x, y)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_y, _x, _PlanarCoordinates_2);
  },
  "{ :x :y |\n\t\ty.adaptToCollectionAndApply(x, PlanarCoordinates:/2)\n\t}",
);

sl.addMethod(
  "Tuple",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_y, _x, _PlanarCoordinates_2);
  },
  "{ :x :y |\n\t\ty.adaptToCollectionAndApply(x, PlanarCoordinates:/2)\n\t}",
);

sl.addMethod(
  "Record",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _PlanarCoordinates_2(_at_2(_self, "x"), _at_2(_self, "y"));
  },
  "{ :self |\n\t\tPlanarCoordinates(self::x, self::y)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "PlanarCoordinates",
  "circlePoints",
  ["n", "r", "theta"],
  function (_n, _r, _theta) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _r, _theta";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _m = _solidus_2(_pi_1(2), _n);
    /* Statements */
    return _collect_2(_to_2(0, _hyphenMinus_2(_n, 1)), function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _fromPolarCoordinates_1([
        _r,
        _plusSign_2(_theta, _asterisk_2(_i, _m)),
      ]);
    });
  },
  "{ :n :r :theta |\n\t\tlet m = 2.pi / n;\n\t\t0.to(n - 1).collect { :i |\n\t\t\t[r, theta + (i * m)].fromPolarCoordinates\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "PlanarCoordinates",
  "circlePoints",
  ["n", "r"],
  function (_n, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _r";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _theta = _hyphenMinus_2(_solidus_2(_pi, _n), _solidus_2(_pi, 2));
    /* Statements */
    return _circlePoints_3(_n, _r, _theta);
  },
  "{ :n :r |\n\t\tlet theta = (pi / n) - (pi / 2);\n\t\tn.circlePoints(r, theta)\n\t}",
);
