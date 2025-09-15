/*  CartesianCoordinates  */

sl.addType(
  false,
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["Object", "Magnitude", "Indexable", "CartesianCoordinates"],
  ["coordinates"],
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

sl.copyTraitMethodsToType(
  "CartesianCoordinates",
  "PlanarCoordinates",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _plusSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, +) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _hyphenMinus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, -) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _asterisk_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, *) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, /) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "solidusSolidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _solidusSolidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, //) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _percentSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, %) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1(_abs_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self | PlanarCoordinates(abs(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "abscissa",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_coordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(coordinates(self),1) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock:/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_PlanarCoordinates_1([_aNumber, _aNumber]), _self);
  }, ["self", "aNumber", "aBlock:/2"]),
  "{ :self :aNumber :aBlock:/2 | aBlock(PlanarCoordinates([aNumber, aNumber]), self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyUnaryOperator",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1(_collect_2(_coordinates_1(_self), _aBlock_1));
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 | PlanarCoordinates(collect(coordinates(self),aBlock:/1)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyBinaryOperator",
  ["self", "anObject", "aBlock:/2"],
  sl.annotateFunction(function (_self, _anObject, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPlanarCoordinates_1(_anObject),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _PlanarCoordinates_1(
          _withCollect_3(
            _coordinates_1(_self),
            _coordinates_1(_anObject),
            _aBlock_2,
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToPlanarCoordinatesAndApply_3(_anObject, _self, _aBlock_2);
      }, []),
    );
  }, ["self", "anObject", "aBlock:/2"]),
  "{ :self :anObject :aBlock:/2 | if(isPlanarCoordinates(anObject), { PlanarCoordinates(withCollect(coordinates(self),coordinates(anObject), aBlock:/2)) }, { adaptToPlanarCoordinatesAndApply(anObject,self, aBlock:/2) }) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_1([_radius_1(_self), _theta_1(_self)]);
  }, ["self"]),
  "{ :self | PolarCoordinates([radius(self), theta(self)]) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asRecord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)]]);
  }, ["self"]),
  "{ :self | Record([['x', x(self)], ['y', y(self)]]) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "asPlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "copy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1(_copy_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self | PlanarCoordinates(copy(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "inverse",
  ["self", "inversionCenter", "inversionRadius"],
  sl.annotateFunction(function (_self, _inversionCenter, _inversionRadius) {
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
    return _PlanarCoordinates_1([
      _plusSign_2(
        _x0,
        _solidus_2(
          _asterisk_2(_square_1(_k), _hyphenMinus_2(_x, _x0)),
          _plusSign_2(
            _square_1(_hyphenMinus_2(_x, _x0)),
            _square_1(_hyphenMinus_2(_y, _y0)),
          ),
        ),
      ),
      _plusSign_2(
        _y0,
        _solidus_2(
          _asterisk_2(_square_1(_k), _hyphenMinus_2(_y, _y0)),
          _plusSign_2(
            _square_1(_hyphenMinus_2(_x, _x0)),
            _square_1(_hyphenMinus_2(_y, _y0)),
          ),
        ),
      ),
    ]);
  }, ["self", "inversionCenter", "inversionRadius"]),
  "{ :self :inversionCenter :inversionRadius | let x = x(self); let y = y(self); let x0 = x(inversionCenter); let y0 = y(inversionCenter); let k = inversionRadius; PlanarCoordinates([+(x0, (/((*(square(k), (-(x, x0)))), (+(square((-(x, x0))), square((-(y, y0)))))))), +(y0, (/((*(square(k), (-(y, y0)))), (+(square((-(x, x0))), square((-(y, y0))))))))]) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _max_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, max:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _min_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, min:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyUnaryOperator_2(_self, _negate_1);
  }, ["self"]),
  "{ :self | applyUnaryOperator(self,negate:/1) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "normalize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_self, _norm_1(_self));
  }, ["self"]),
  "{ :self | /(self, norm(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "ordinate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _y_1(_self);
  }, ["self"]),
  "{ :self | y(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "phi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  }, ["self"]),
  "{ :self | atan2(y(self), x(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _quotient_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | applyBinaryOperator(self,anObject, quotient:/2) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_plusSign_2(_square_1(_x_1(_self)), _square_1(_y_1(_self))));
  }, ["self"]),
  "{ :self | sqrt((+(square(x(self)), square(y(self))))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "rho",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _radius_1(_self);
  }, ["self"]),
  "{ :self | radius(self) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
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
  "PlanarCoordinates",
  "PlanarCoordinates",
  "swapInPlace",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _coordinates_1(_self);
    let _x = _at_2(_c, 1);
    let _y = _at_2(_c, 2);
    /* Statements */
    _atPut_3(_c, 1, _y);
    return _atPut_3(_c, 2, _x);
  }, ["self"]),
  "{ :self | let c = coordinates(self); let x = at(c, 1); let y = at(c, 2); atPut(c, 1, y); atPut(c, 2, x) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "swapped",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1(_reverse_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self | PlanarCoordinates(reverse(coordinates(self))) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _atan2_2(_y_1(_self), _x_1(_self));
  }, ["self"]),
  "{ :self | atan2(y(self), x(self)) }",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "translate",
  ["self", "delta"],
  sl.annotateFunction(function (_self, _delta) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _delta";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_self, _delta);
  }, ["self", "delta"]),
  "{ :self :delta | +(self, delta) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlanarCoordinates",
  "adaptToPlanarCoordinatesAndApply",
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_operand, _PlanarCoordinates_1([_self, _self]));
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 | aBlock(operand, PlanarCoordinates([self, self])) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1(_self);
  }, ["self"]),
  "{ :self | PlanarCoordinates(self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isMatrix_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _PlanarCoordinates_1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL227 = _assertIsOfSize_2(_self, 2);
        let _x = _at_2(__SPL227, 1);
        let _y = _at_2(__SPL227, 2);
        /* Statements */
        return _initializeSlots_2(_newPlanarCoordinates_0(), [_x, _y]);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isMatrix(self), { collect(self,PlanarCoordinates:/1) }, { let __SPL227 = assertIsOfSize(self, 2); let x = at(__SPL227, 1); let y = at(__SPL227, 2); initializeSlots(newPlanarCoordinates(),[x, y]) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PlanarCoordinates",
  "asPlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_1([_at_2(_self, "x"), _at_2(_self, "y")]);
  }, ["self"]),
  "{ :self | PlanarCoordinates([at(self, 'x'), at(self, 'y')]) }",
);
