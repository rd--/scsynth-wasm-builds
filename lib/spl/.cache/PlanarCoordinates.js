/*  CartesianCoordinates  */

sl.addType(
  false,
  "PlanarCoordinates",
  "PlanarCoordinates",
  [
    "@Object",
    "@Copy",
    "@Store",
    "@Equal",
    "@Compare",
    "@At",
    "@Indices",
    "@Put",
    "@CartesianCoordinates",
  ],
  ["x", "y"],
);

sl.copyTraitMethodsToType(
  "@Object",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Copy",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Store",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Equal",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Compare",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@At",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Indices",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@Put",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "@CartesianCoordinates",
  "PlanarCoordinates",
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
    return _x_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.x\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "absoluteValue",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_abs_1(_x_1(_self)), _abs_1(_y_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tPlanarCoordinates(self.x.abs, self.y.abs)\n\t}",
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
    return _PlanarCoordinates_2(_abs_1(_x_1(_self)), _abs_1(_y_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tPlanarCoordinates(self.x.abs, self.y.abs)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "adaptToNumberAndApply",
  ["self", "aNumber", "aBlock/2"],
  sl.annotateFunction(function (_self, _aNumber, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _aNumber, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_PlanarCoordinates_2(_aNumber, _aNumber), _self);
  }, ["self", "aNumber", "aBlock/2"]),
  "{ :self :aNumber :aBlock/2 |\n\t\taBlock(PlanarCoordinates(aNumber, aNumber), self)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyUnaryOperator",
  ["self", "aBlock/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_aBlock_1(_x_1(_self)), _aBlock_1(_y_1(_self)));
  }, ["self", "aBlock/1"]),
  "{ :self :aBlock/1 |\n\t\tPlanarCoordinates(aBlock(self.x), aBlock(self.y))\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "applyBinaryOperator",
  ["self", "anObject", "aBlock/2"],
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
        return _PlanarCoordinates_2(
          _aBlock_2(_x_1(_self), _x_1(_anObject)),
          _aBlock_2(_y_1(_self), _y_1(_anObject)),
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
  }, ["self", "anObject", "aBlock/2"]),
  "{ :self :anObject :aBlock/2 |\n\t\tanObject.isPlanarCoordinates.if {\n\t\t\tPlanarCoordinates(\n\t\t\t\taBlock(self.x, anObject.x),\n\t\t\t\taBlock(self.y, anObject.y)\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToPlanarCoordinatesAndApply(self, aBlock/2)\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "coordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [_x_1(_self), _y_1(_self)];
  }, ["self"]),
  "{ :self |\n\t\t[self.x, self.y]\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "divide",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _divide_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, divide/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _divide_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, divide/2)\n\t}",
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
    } /* Statements */
    let _x = _x_1(_self);
    let _y = _y_1(_self);
    let _x0 = _x_1(_inversionCenter);
    let _y0 = _y_1(_inversionCenter);
    let _k = _inversionRadius;
    return _PlanarCoordinates_2(
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
    );
  }, ["self", "inversionCenter", "inversionRadius"]),
  "{ :self :inversionCenter :inversionRadius |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet x0 = inversionCenter.x;\n\t\tlet y0 = inversionCenter.y;\n\t\tlet k = inversionRadius;\n\t\tPlanarCoordinates(\n\t\t\tx0 + ((k.square * (x - x0)) / ((x - x0).square + (y - y0).square)),\n\t\t\ty0 + ((k.square * (y - y0)) / ((x - x0).square + (y - y0).square))\n\t\t)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "maximum",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _max_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, max/2)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, max/2)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "minimum",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _min_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, min/2)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, min/2)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "mod",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _mod_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, mod/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _mod_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, mod/2)\n\t}",
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
  "{ :self |\n\t\tself.applyUnaryOperator(negate/1)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyUnaryOperator_2(_self, _negate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.applyUnaryOperator(negate/1)\n\t}",
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
  "{ :self |\n\t\tself / self.norm\n\t}",
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
  "{ :self |\n\t\tself.y\n\t}",
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
  "{ :self |\n\t\tatan2(self.y, self.x)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _copy_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.copy\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "plus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _plus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, plus/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _plus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, plus/2)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "PolarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PolarCoordinates_2(_rho_1(_self), _phi_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPolarCoordinates(\n\t\t\tself.rho,\n\t\t\tself.phi\n\t\t)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, quotient/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _quotient_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, quotient/2)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "Record",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Record_1([["x", _x_1(_self)], ["y", _y_1(_self)]]);
  }, ["self"]),
  "{ :self |\n\t\t(x: self.x, y: self.y)\n\t}",
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
    return _sqrt_1(_plusSign_2(_square_1(_x_1(_self)), _square_1(_y_1(_self))));
  }, ["self"]),
  "{ :self |\n\t\t(self.x.square + self.y.square).sqrt\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "subtract",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _subtract_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, subtract/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _subtract_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, subtract/2)\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "swap",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _PlanarCoordinates_2(_y_1(_self), _x_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tPlanarCoordinates(self.y, self.x)\n\t}",
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
    } /* Statements */
    let __SplVar1 = _assertIsOfSize_2(_coordinates_1(_self), 2);
    let _x = _at_2(__SplVar1, 1);
    let _y = _at_2(__SplVar1, 2);
    _xMutateInPlace_2(_self, _y);
    _yMutateInPlace_2(_self, _x);
    return null;
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y] = self.coordinates;\n\t\tself.x := y;\n\t\tself.y := x;\n\t\tnil\n\t}",
);

sl.addMethodToExistingType(
  "PlanarCoordinates",
  "PlanarCoordinates",
  "times",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _applyBinaryOperator_3(_self, _anObject, _times_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, times/2)\n\t}",
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
    return _applyBinaryOperator_3(_self, _anObject, _times_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, times/2)\n\t}",
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
  "{ :self :delta |\n\t\tself + delta\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlanarCoordinates",
  "adaptToPlanarCoordinatesAndApply",
  ["self", "operand", "aBlock/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_operand, _PlanarCoordinates_2(_self, _self));
  }, ["self", "operand", "aBlock/2"]),
  "{ :self :operand :aBlock/2 |\n\t\taBlock(operand, PlanarCoordinates(self, self))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isNumber_1(_y),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _initializeSlots_3(_newPlanarCoordinates_0(), _x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _adaptToNumberAndApply_3(_y, _x, _PlanarCoordinates_2);
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\ty.isNumber.if {\n\t\t\tnewPlanarCoordinates().initializeSlots(x, y)\n\t\t} {\n\t\t\ty.adaptToNumberAndApply(x, PlanarCoordinates/2)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_y, _x, _PlanarCoordinates_2);
  }, ["x", "y"]),
  "{ :x :y |\n\t\ty.adaptToCollectionAndApply(x, PlanarCoordinates/2)\n\t}",
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
    return _atVectorOrElementwise_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        let __SplVar2 = _assertIsOfSize_2(_each, 2);
        let _x = _at_2(__SplVar2, 1);
        let _y = _at_2(__SplVar2, 2);
        return _initializeSlots_3(_newPlanarCoordinates_0(), _x, _y);
      }, ["each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.atVectorOrElementwise { :each |\n\t\t\tlet [x, y] = each;\n\t\t\tnewPlanarCoordinates().initializeSlots(x, y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Record",
  "PlanarCoordinates",
  "PlanarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    let __SplVar3 = _assertIsOfSize_2(_self, 2);
    let _x = _at_2(__SplVar3, "x");
    let _y = _at_2(__SplVar3, "y");
    return _PlanarCoordinates_2(_x, _y);
  }, ["self"]),
  "{ :self |\n\t\tlet (x: x, y: y) = self;\n\t\tPlanarCoordinates(x, y)\n\t}",
);
