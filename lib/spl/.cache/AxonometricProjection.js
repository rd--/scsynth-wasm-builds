sl.addType(
  false,
  "AxonometricProjection",
  "AxonometricProjection",
  ["Object"],
  ["xRadius", "xTheta", "yRadius", "yTheta", "zRadius", "zTheta"],
);

sl.copyTraitToType(
  "Object",
  "AxonometricProjection",
);

sl.addMethod(
  "AxonometricProjection",
  "AxonometricProjection",
  "asTransformationMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
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
  },
  "{ :self |\n\t\t[\n\t\t\t[\n\t\t\t\tself.xRadius * self.xTheta.cos,\n\t\t\t\tself.yRadius * self.yTheta.cos,\n\t\t\t\tself.zRadius * self.zTheta.cos\n\t\t\t],\n\t\t\t[\n\t\t\t\tself.xRadius * self.xTheta.sin,\n\t\t\t\tself.yRadius * self.yTheta.sin,\n\t\t\t\tself.zRadius * self.zTheta.sin\n\t\t\t],\n\t\t\t[\n\t\t\t\t0,\n\t\t\t\t0,\n\t\t\t\t0\n\t\t\t]\n\t\t]\n\t}",
);

sl.addMethod(
  "AxonometricProjection",
  "AxonometricProjection",
  "asUnaryBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _asTransformationMatrix_1(_self);
    /* Statements */
    return (function (_aVector) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aVector";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym24 = _assertIsOfSize_2(_dot_2(_matrix, _aVector), 3),
        _x = _at_2(__genSym24, 1),
        _y = _at_2(__genSym24, 2),
        __genSym23 = _at_2(__genSym24, 3);
      /* Statements */
      return [_x, _y];
    });
  },
  "{ :self |\n\t\tlet matrix = self.asTransformationMatrix;\n\t\t{ :aVector |\n\t\t\tlet [x, y, _] = matrix.dot(aVector);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.addMethod(
  "AxonometricProjection",
  "AxonometricProjection",
  "polarCoordinates",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [[_xRadius_1(_self), _xTheta_1(_self)], [
      _yRadius_1(_self),
      _yTheta_1(_self),
    ], [_zRadius_1(_self), _zTheta_1(_self)]];
  },
  "{ :self |\n\t\t[\n\t\t\tself.xRadius self.xTheta;\n\t\t\tself.yRadius self.yTheta;\n\t\t\tself.zRadius self.zTheta\n\t\t]\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "AxonometricProjection",
  "AxonometricProjection",
  ["gamma", "beta", "alpha", "z", "y", "x"],
  function (_gamma, _beta, _alpha, _z, _y, _x) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _gamma, _beta, _alpha, _z, _y, _x";
      /* console.error(errorMessage); */
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
  },
  "{ :gamma :beta :alpha :z :y :x |\n\t\tnewAxonometricProjection()\n\t\t.initializeSlots(\n\t\t\tx, 1.pi - alpha,\n\t\t\ty, 0.5.pi + beta,\n\t\t\tz, gamma\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "AxonometricProjection",
  "asAxonometricProjection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym25 = _assertIsOfSize_2(_self, 3),
      _x = _at_2(__genSym25, 1),
      _y = _at_2(__genSym25, 2),
      _z = _at_2(__genSym25, 3);
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
  },
  "{ :self |\n\t\tlet [x, y, z] = self;\n\t\tnewAxonometricProjection()\n\t\t.initializeSlots(\n\t\t\tx[1], x[2],\n\t\t\ty[1], y[2],\n\t\t\tz[1], z[2]\n\t\t)\n\t}",
);

sl.addMethod(
  "String",
  "AxonometricProjection",
  "namedAxonometricProjection",
  ["self", "alpha"],
  function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_self, [
      _hyphenMinusGreaterThanSign_2("CabinetOblique", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_6(_alpha, 0, 0, _solidus_2(1, 2), 1, 1);
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "namedAxonometricProjection: alpha");
    });
  },
  "{ :self :alpha |\n\t\tself.caseOfOtherwise([\n\t\t\t'CabinetOblique' -> { AxonometricProjection(alpha, 0, 0, 1 / 2, 1, 1) }\n\t\t]) {\n\t\t\tself.error('namedAxonometricProjection: alpha')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "AxonometricProjection",
  "namedAxonometricProjection",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOfOtherwise_3(_self, [
      _hyphenMinusGreaterThanSign_2("CavalierOblique", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_6(
          _pi_1(_Fraction_2(
            1n,
            4n,
          )),
          0,
          0,
          1,
          1,
          1,
        );
      }),
      _hyphenMinusGreaterThanSign_2("Isometric", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_6(
          _pi_1(_Fraction_2(
            1n,
            6n,
          )),
          0,
          _pi_1(_Fraction_2(
            1n,
            6n,
          )),
          1,
          1,
          1,
        );
      }),
      _hyphenMinusGreaterThanSign_2("Planometric", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_6(
          _pi_1(_Fraction_2(
            1n,
            5n,
          )),
          0,
          _pi_1(_Fraction_2(
            1n,
            4n,
          )),
          1,
          1,
          1,
        );
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "namedAxonometricProjection");
    });
  },
  "{ :self |\n\t\tself.caseOfOtherwise([\n\t\t\t'CavalierOblique' -> { AxonometricProjection(1/4.pi, 0, 0, 1, 1, 1) },\n\t\t\t'Isometric' -> { AxonometricProjection(1/6.pi, 0, 1/6.pi, 1, 1, 1) },\n\t\t\t'Planometric' -> { AxonometricProjection(1/5.pi, 0, 1/4.pi, 1, 1, 1) }\n\t\t]) {\n\t\t\tself.error('namedAxonometricProjection')\n\t\t}\n\t}",
);
