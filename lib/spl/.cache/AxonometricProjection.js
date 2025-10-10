sl.addType(
  false,
  "AxonometricProjection",
  "AxonometricProjection",
  ["Object", "Equatable"],
  ["xRadius", "xTheta", "yRadius", "yTheta", "zRadius", "zTheta"],
);

sl.copyTraitMethodsToType(
  "Object",
  "AxonometricProjection",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "AxonometricProjection",
);

sl.addMethodToExistingType(
  "AxonometricProjection",
  "AxonometricProjection",
  "asTransformationMatrix",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [[
      _asterisk_2(_xRadius_1(_self), _cos_1(_xTheta_1(_self))),
      _asterisk_2(_yRadius_1(_self), _cos_1(_yTheta_1(_self))),
      _asterisk_2(_zRadius_1(_self), _cos_1(_zTheta_1(_self))),
    ], [
      _asterisk_2(_xRadius_1(_self), _sin_1(_xTheta_1(_self))),
      _asterisk_2(_yRadius_1(_self), _sin_1(_yTheta_1(_self))),
      _asterisk_2(_zRadius_1(_self), _sin_1(_zTheta_1(_self))),
    ], [0, 0, 0]];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\t[\n\t\t\t\tself.xRadius * self.xTheta.cos,\n\t\t\t\tself.yRadius * self.yTheta.cos,\n\t\t\t\tself.zRadius * self.zTheta.cos\n\t\t\t],\n\t\t\t[\n\t\t\t\tself.xRadius * self.xTheta.sin,\n\t\t\t\tself.yRadius * self.yTheta.sin,\n\t\t\t\tself.zRadius * self.zTheta.sin\n\t\t\t],\n\t\t\t[\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t]\n\t\t]\n\t}",
);

sl.addMethodToExistingType(
  "AxonometricProjection",
  "AxonometricProjection",
  "asUnaryBlock",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _asTransformationMatrix_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_aVector) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aVector";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(_dot_2(_matrix, _aVector), 3);
      let _x = _at_2(__SplVar1, 1);
      let _y = _at_2(__SplVar1, 2);
      let __SplUnused3 = _at_2(__SplVar1, 3);
      /* Statements */
      return [_x, _y];
    }, ["aVector"]);
  }, ["self"]),
  "{ :self |\n\t\tlet matrix = self.asTransformationMatrix;\n\t\t{ :aVector |\n\t\t\tlet [x, y, _] = matrix.dot(aVector);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "AxonometricProjection",
  "AxonometricProjection",
  "polarCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return [[_xRadius_1(_self), _xTheta_1(_self)], [
      _yRadius_1(_self),
      _yTheta_1(_self),
    ], [_zRadius_1(_self), _zTheta_1(_self)]];
  }, ["self"]),
  "{ :self |\n\t\t[\n\t\t\tself.xRadius self.xTheta;\n\t\t\tself.yRadius self.yTheta;\n\t\t\tself.zRadius self.zTheta\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "AxonometricProjection",
  "AxonometricProjection",
  ["gamma", "beta", "alpha", "z", "y", "x"],
  sl.annotateFunction(function (_gamma, _beta, _alpha, _z, _y, _x) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _gamma, _beta, _alpha, _z, _y, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_7(
      _newAxonometricProjection_0(),
      _x,
      _hyphenMinus_2(_pi_1(1), _alpha),
      _y,
      _plusSign_2(_pi_1(0.5), _beta),
      _z,
      _gamma,
    );
  }, ["gamma", "beta", "alpha", "z", "y", "x"]),
  "{ :gamma :beta :alpha :z :y :x |\n\t\tnewAxonometricProjection()\n\t\t.initializeSlots(\n\t\t\tx, 1.pi - alpha,\n\t\t\ty, 0.5.pi + beta,\n\t\t\tz, gamma\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "AxonometricProjection",
  "asAxonometricProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SplVar2, 1);
    let _y = _at_2(__SplVar2, 2);
    let _z = _at_2(__SplVar2, 3);
    /* Statements */
    return _initializeSlots_7(
      _newAxonometricProjection_0(),
      _at_2(_x, 1),
      _at_2(_x, 2),
      _at_2(_y, 1),
      _at_2(_y, 2),
      _at_2(_z, 1),
      _at_2(_z, 2),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tnewAxonometricProjection()\n\t\t.initializeSlots(\n\t\t\tx[1], x[2],\n\t\t\ty[1], y[2],\n\t\t\tz[1], z[2]\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "AxonometricProjection",
  "namedAxonometricProjection",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [_hyphenMinusGreaterThanSign_2(
        "CabinetOblique",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _AxonometricProjection_6(_alpha, 0, 0, _solidus_2(1, 2), 1, 1);
        }, []),
      )],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedAxonometricProjection: alpha");
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tself.caseOf([\n\t\t\t'CabinetOblique' -> { AxonometricProjection(alpha, 0, 0, 1 / 2, 1, 1) }\n\t\t]) {\n\t\t\tself.error('namedAxonometricProjection: alpha')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "AxonometricProjection",
  "namedAxonometricProjection",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          "CavalierOblique",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _AxonometricProjection_6(
              _pi_1(_Fraction_2(1n, 4n)),
              0,
              0,
              1,
              1,
              1,
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Isometric",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _AxonometricProjection_6(
              _pi_1(_Fraction_2(1n, 6n)),
              0,
              _pi_1(_Fraction_2(1n, 6n)),
              1,
              1,
              1,
            );
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Planometric",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _AxonometricProjection_6(
              _pi_1(_Fraction_2(1n, 5n)),
              0,
              _pi_1(_Fraction_2(1n, 4n)),
              1,
              1,
              1,
            );
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "namedAxonometricProjection");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.caseOf([\n\t\t\t'CavalierOblique' -> { AxonometricProjection(1/4.pi, 0, 0, 1, 1, 1) },\n\t\t\t'Isometric' -> { AxonometricProjection(1/6.pi, 0, 1/6.pi, 1, 1, 1) },\n\t\t\t'Planometric' -> { AxonometricProjection(1/5.pi, 0, 1/4.pi, 1, 1, 1) }\n\t\t]) {\n\t\t\tself.error('namedAxonometricProjection')\n\t\t}\n\t}",
);
