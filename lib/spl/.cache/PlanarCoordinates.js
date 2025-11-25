/*  CartesianCoordinates  */

sl.addType(
  false,
  "PlanarCoordinates",
  "PlanarCoordinates",
  [
    "Object",
    "Storeable",
    "Copyable",
    "Equatable",
    "Comparable",
    "Indexable",
    "CartesianCoordinates",
  ],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Storeable",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Copyable",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "PlanarCoordinates",
);

sl.copyTraitMethodsToType(
  "Comparable",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, +)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, -)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, *)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, /)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, //)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, %)\n\t}",
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
  "{ :self |\n\t\tPlanarCoordinates(self.coordinates.abs)\n\t}",
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
  "{ :self |\n\t\tself.coordinates.at(1)\n\t}",
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
  "{ :self :aNumber :aBlock:/2 |\n\t\taBlock(PlanarCoordinates([aNumber, aNumber]), self)\n\t}",
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
  "{ :self :aBlock:/1 |\n\t\tPlanarCoordinates(self.coordinates.collect(aBlock:/1))\n\t}",
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
  "{ :self :anObject :aBlock:/2 |\n\t\tanObject.isPlanarCoordinates.if {\n\t\t\tPlanarCoordinates(\n\t\t\t\tself.coordinates.withCollect(\n\t\t\t\t\tanObject.coordinates,\n\t\t\t\t\taBlock:/2\n\t\t\t\t)\n\t\t\t)\n\t\t} {\n\t\t\tanObject.adaptToPlanarCoordinatesAndApply(self, aBlock:/2)\n\t\t}\n\t}",
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
  "{ :self |\n\t\tPolarCoordinates([self.radius, self.theta])\n\t}",
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
  "{ :self |\n\t\t(x: self.x, y: self.y)\n\t}",
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
  "{ :self |\n\t\tself\n\t}",
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
  "{ :self :inversionCenter :inversionRadius |\n\t\tlet x = self.x;\n\t\tlet y = self.y;\n\t\tlet x0 = inversionCenter.x;\n\t\tlet y0 = inversionCenter.y;\n\t\tlet k = inversionRadius;\n\t\tPlanarCoordinates(\n\t\t\t[\n\t\t\t\tx0 + ((k.square * (x - x0)) / ((x - x0).square + (y - y0).square)),\n\t\t\t\ty0 + ((k.square * (y - y0)) / ((x - x0).square + (y - y0).square))\n\t\t\t]\n\t\t)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, max:/2)\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, min:/2)\n\t}",
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
  "{ :self |\n\t\tself.applyUnaryOperator(negate:/1)\n\t}",
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
  "postCopy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinates_2(_self, _copy_1(_coordinates_1(_self)));
  }, ["self"]),
  "{ :self |\n\t\tself.coordinates := self.coordinates.copy\n\t}",
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
  "{ :self :anObject |\n\t\tself.applyBinaryOperator(anObject, quotient:/2)\n\t}",
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
  "{ :self |\n\t\t(self.x.square + self.y.square).sqrt\n\t}",
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
  "{ :self |\n\t\tself.radius\n\t}",
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
  "{ :self |\n\t\tlet c = self.coordinates;\n\t\tlet x = c[1];\n\t\tlet y = c[2];\n\t\tc[1] := y;\n\t\tc[2] := x\n\t}",
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
  "{ :self |\n\t\tPlanarCoordinates(self.coordinates.reverse)\n\t}",
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
  "{ :self |\n\t\tatan2(self.y, self.x)\n\t}",
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
  ["self", "operand", "aBlock:/2"],
  sl.annotateFunction(function (_self, _operand, _aBlock_2) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _operand, _aBlock_2";
      throw new Error(errorMessage);
    } /* Statements */
    return _aBlock_2(_operand, _PlanarCoordinates_1([_self, _self]));
  }, ["self", "operand", "aBlock:/2"]),
  "{ :self :operand :aBlock:/2 |\n\t\taBlock(operand, PlanarCoordinates([self, self]))\n\t}",
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
  "{ :self |\n\t\tPlanarCoordinates(self)\n\t}",
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
        let __SplVar1 = _assertIsOfSize_2(_self, 2);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        /* Statements */
        return _initializeSlots_2(_newPlanarCoordinates_0(), [_x, _y]);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isMatrix.if {\n\t\t\tself.collect(PlanarCoordinates:/1)\n\t\t} {\n\t\t\tlet [x, y] = self;\n\t\t\tnewPlanarCoordinates().initializeSlots([x, y])\n\t\t}\n\t}",
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
  "{ :self |\n\t\tPlanarCoordinates([self['x'], self['y']])\n\t}",
);
