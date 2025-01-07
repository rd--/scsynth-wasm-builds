sl.addType(
  false,
  "AxonometricProjection",
  "AxonometricProjection",
  ["Object"],
  ["alpha", "beta", "x", "y", "z"],
);

sl.copyTraitToType(
  "Object",
  "AxonometricProjection",
);

sl.addMethod(
  "AxonometricProjection",
  "AxonometricProjection",
  "asBlock",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _matrix = _asMatrix_1(_self);
    /* Statements */
    return (function (_aVector) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _aVector";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let __genSym27 = _assertIsOfSize_2(_dot_2(_matrix, _aVector), 3),
        _x = _at_2(__genSym27, 1),
        _y = _at_2(__genSym27, 2),
        __genSym26 = _at_2(__genSym27, 3);
      /* Statements */
      return [_x, _y];
    });
  },
  "{ :self |\n\t\tlet matrix = self.asMatrix;\n\t\t{ :aVector |\n\t\t\tlet [x, y, _] = matrix.dot(aVector);\n\t\t\t[x, y]\n\t\t}\n\t}",
);

sl.addMethod(
  "AxonometricProjection",
  "AxonometricProjection",
  "asMatrix",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return [[
      _asterisk_2(_x_1(_self), _negated_1(_cos_1(_beta_1(_self)))),
      0,
      _asterisk_2(_z_1(_self), _cos_1(_alpha_1(_self))),
    ], [
      _asterisk_2(_x_1(_self), _sin_1(_beta_1(_self))),
      _y_1(_self),
      _asterisk_2(_z_1(_self), _sin_1(_alpha_1(_self))),
    ], [0, 0, 0]];
  },
  "{ :self |\n\t\t[\n\t\t\t[self.x * self.beta.cos.negated, 0, self.z * self.alpha.cos],\n\t\t\t[self.x * self.beta.sin, self.y , self.z * self.alpha.sin],\n\t\t\t[0, 0, 0]\n\t\t]\n\t}",
);

sl.addMethod(
  "Void",
  "AxonometricProjection",
  "AxonometricProjection",
  [],
  function () {
    /* ArityCheck */
    if (arguments.length !== 0) {
      const errorMessage = "Arity: expected 0, ";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _AxonometricProjection_5(0, 0, 1, 1, 1);
  },
  "{\n\t\tAxonometricProjection(0, 0, 1, 1, 1)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "AxonometricProjection",
  "AxonometricProjection",
  ["alpha", "beta", "x", "y", "z"],
  function (_alpha, _beta, _x, _y, _z) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _alpha, _beta, _x, _y, _z";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_6(
      _newAxonometricProjection_0(),
      _alpha,
      _beta,
      _x,
      _y,
      _z,
    );
  },
  "{ :alpha :beta :x :y :z |\n\t\tnewAxonometricProjection().initializeSlots(alpha, beta, x, y, z)\n\t}",
);

sl.addMethod(
  "String",
  "AxonometricProjection",
  "AxonometricProjection",
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
        return _AxonometricProjection_5(_alpha, 0, 1, 1, _solidus_2(1, 2));
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "AxonometricProjection: alpha");
    });
  },
  "{ :self :alpha |\n\t\tself.caseOfOtherwise([\n\t\t\t'CabinetOblique' -> { AxonometricProjection(alpha, 0, 1, 1, 1 / 2) }\n\t\t]) {\n\t\t\tself.error('AxonometricProjection: alpha')\n\t\t}\n\t}",
);

sl.addMethod(
  "String",
  "AxonometricProjection",
  "AxonometricProjection",
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
        return _AxonometricProjection_5(_solidus_2(_pi, 4), 0, 1, 1, 1);
      }),
      _hyphenMinusGreaterThanSign_2("Chinese", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_5(
          _solidus_2(_pi, 6),
          0,
          1,
          1,
          _solidus_2(1, 2),
        );
      }),
      _hyphenMinusGreaterThanSign_2("Isometric", function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _AxonometricProjection_5(
          _solidus_2(_pi, 6),
          _solidus_2(_pi, 6),
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
        return _AxonometricProjection_5(
          _solidus_2(_pi, 4),
          _solidus_2(_pi, 4),
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
      return _error_2(_self, "AxonometricProjection");
    });
  },
  "{ :self |\n\t\tself.caseOfOtherwise([\n\t\t\t'CavalierOblique' -> { AxonometricProjection(pi / 4, 0, 1, 1, 1) },\n\t\t\t'Chinese' -> { AxonometricProjection(pi / 6, 0, 1, 1, 1 / 2) },\n\t\t\t'Isometric' -> { AxonometricProjection(pi / 6, pi / 6, 1, 1, 1) },\n\t\t\t'Planometric' -> { AxonometricProjection(pi / 4, pi / 4, 1, 1, 1) }\n\t\t]) {\n\t\t\tself.error('AxonometricProjection')\n\t\t}\n\t}",
);
