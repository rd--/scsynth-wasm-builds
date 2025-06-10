sl.addType(
  false,
  "AxonometricProjection",
  "AxonometricProjection",
  ["Object"],
  ["xRadius", "xTheta", "yRadius", "yTheta", "zRadius", "zTheta"],
);

sl.copyTraitMethodsToType(
  "Object",
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
  "{ :self | [[*(xRadius(self), cos(xTheta(self))), *(yRadius(self), cos(yTheta(self))), *(zRadius(self), cos(zTheta(self)))], [*(xRadius(self), sin(xTheta(self))), *(yRadius(self), sin(yTheta(self))), *(zRadius(self), sin(zTheta(self)))], [0, 0, 0]] }",
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
      let __SPL35 = _assertIsOfSize_2(_dot_2(_matrix, _aVector), 3);
      let _x = _at_2(__SPL35, 1);
      let _y = _at_2(__SPL35, 2);
      let __genSym37 = _at_2(__SPL35, 3);
      /* Statements */
      return [_x, _y];
    }, ["aVector"]);
  }, ["self"]),
  "{ :self | let matrix = asTransformationMatrix(self); { :aVector | let __SPL35 = assertIsOfSize(dot(matrix,aVector), 3); let x = at(__SPL35, 1); let y = at(__SPL35, 2); let _ = at(__SPL35, 3); [x, y] } }",
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
  "{ :self | [[xRadius(self), xTheta(self)], [yRadius(self), yTheta(self)], [zRadius(self), zTheta(self)]] }",
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
  "{ :gamma :beta :alpha :z :y :x | initializeSlots(newAxonometricProjection(),x, -(pi(1), alpha), y, +(pi(0.5), beta), z, gamma) }",
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
    let __SPL36 = _assertIsOfSize_2(_self, 3);
    let _x = _at_2(__SPL36, 1);
    let _y = _at_2(__SPL36, 2);
    let _z = _at_2(__SPL36, 3);
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
  "{ :self | let __SPL36 = assertIsOfSize(self, 3); let x = at(__SPL36, 1); let y = at(__SPL36, 2); let z = at(__SPL36, 3); initializeSlots(newAxonometricProjection(),at(x, 1), at(x, 2), at(y, 1), at(y, 2), at(z, 1), at(z, 2)) }",
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
  "{ :self :alpha | caseOf(self, [->('CabinetOblique', { AxonometricProjection(alpha, 0, 0, /(1, 2), 1, 1) })], { error(self,'namedAxonometricProjection: alpha') }) }",
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
  "{ :self | caseOf(self, [->('CavalierOblique', { AxonometricProjection(pi(Fraction(1L, 4L)), 0, 0, 1, 1, 1) }), ->('Isometric', { AxonometricProjection(pi(Fraction(1L, 6L)), 0, pi(Fraction(1L, 6L)), 1, 1, 1) }), ->('Planometric', { AxonometricProjection(pi(Fraction(1L, 5L)), 0, pi(Fraction(1L, 4L)), 1, 1, 1) })], { error(self,'namedAxonometricProjection') }) }",
);
