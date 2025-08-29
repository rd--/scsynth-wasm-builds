sl.addType(
  false,
  "Arc",
  "Arc",
  ["Object"],
  ["center", "radii", "angles"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Arc",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _coordinateBoundingBox_1(
      _discretize_3(
        _hyphenMinusHyphenMinus_2(0, 1),
        50,
        _parametricEquation_1(_self),
      ),
    );
  }, ["self"]),
  "{ :self | coordinateBoundingBox(discretize((--(0, 1)),50, parametricEquation(self))) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "circle",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Circle_2(_center_1(_self), _radius_1(_self));
  }, ["self"]),
  "{ :self | Circle(center(self), radius(self)) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "ellipse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Ellipse_2(_center_1(_self), _radii_1(_self));
  }, ["self"]),
  "{ :self | Ellipse(center(self), radii(self)) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "parametricEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = _rescaleBlock_2([0, 1], _angles_1(_self));
    let _g_1 = _ellipseCurve_3(_center_1(_self), _radii_1(_self), 0);
    /* Statements */
    return sl.annotateFunction(function (_theta) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _theta";
        throw new Error(errorMessage);
      } /* Statements */
      return _g_1(_f_1(_theta));
    }, ["theta"]);
  }, ["self"]),
  "{ :self | let f:/1 = rescaleBlock([0, 1], angles(self)); let g:/1 = ellipseCurve(center(self), radii(self), 0); { :theta | g(f(theta)) } }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "radius",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL1 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL1, 1);
    let _ry = _at_2(__SPL1, 2);
    /* Statements */
    return _if_3(
      _equalsSign_2(_rx, _ry),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _rx;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "Arc>>radius: unequal radii");
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL1 = assertIsOfSize(radii(self), 2); let rx = at(__SPL1, 1); let ry = at(__SPL1, 2); if((=(rx, ry)), { rx }, { error(self,'Arc>>radius: unequal radii') }) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "sectorArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_square_1(_radius_1(_self)), _theta_1(_self)),
      0.5,
    );
  }, ["self"]),
  "{ :self | *(*(square(radius(self)), theta(self)), 0.5) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "segmentArea",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(
        _square_1(_radius_1(_self)),
        _hyphenMinus_2(_theta_1(_self), _sin_1(_theta_1(_self))),
      ),
      0.5,
    );
  }, ["self"]),
  "{ :self | *(*(square(radius(self)), (-(theta(self), sin(theta(self))))), 0.5) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL2 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL2, 1);
    let _cy = _at_2(__SPL2, 2);
    let __SPL3 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL3, 1);
    let _ry = _at_2(__SPL3, 2);
    let __SPL4 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SPL4, 1);
    let _endAngle = _at_2(__SPL4, 2);
    let __SPL5 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SPL5, 1);
    let _y1 = _at_2(__SPL5, 2);
    let __SPL6 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SPL6, 1);
    let _y2 = _at_2(__SPL6, 2);
    let _largeArcFlag = _boole_1(
      _greaterThanSign_2(
        _percentSign_2(_hyphenMinus_2(_endAngle, _startAngle), _pi_1(2)),
        _pi_1(1),
      ),
    );
    /* Statements */
    return _format_2('<path d="M %,% A % % 0 % 1 %,%" />', [
      _printStringToFixed_2(_x1, _precision),
      _printStringToFixed_2(_y1, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
      _largeArcFlag,
      _printStringToFixed_2(_x2, _precision),
      _printStringToFixed_2(_y2, _precision),
    ]);
  }, ["self", "options"]),
  "{ :self :options | let precision = at(options, 'precision'); let __SPL2 = assertIsOfSize(center(self), 2); let cx = at(__SPL2, 1); let cy = at(__SPL2, 2); let __SPL3 = assertIsOfSize(radii(self), 2); let rx = at(__SPL3, 1); let ry = at(__SPL3, 2); let __SPL4 = assertIsOfSize(angles(self), 2); let startAngle = at(__SPL4, 1); let endAngle = at(__SPL4, 2); let __SPL5 = assertIsOfSize(+([cx, cy], [*(rx, cos(startAngle)), *(ry, sin(startAngle))]), 2); let x1 = at(__SPL5, 1); let y1 = at(__SPL5, 2); let __SPL6 = assertIsOfSize(+([cx, cy], [*(rx, cos(endAngle)), *(ry, sin(endAngle))]), 2); let x2 = at(__SPL6, 1); let y2 = at(__SPL6, 2); let largeArcFlag = boole((>((%((-(endAngle, startAngle)), pi(2))), pi(1)))); format('<path d=\"M %,% A % % 0 % 1 %,%\" />',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision), largeArcFlag, printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }",
);

sl.addMethodToExistingType(
  "Arc",
  "Arc",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL7 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _a = _at_2(__SPL7, 1);
    let _b = _at_2(__SPL7, 2);
    /* Statements */
    return _abs_1(_hyphenMinus_2(_b, _a));
  }, ["self"]),
  "{ :self | let __SPL7 = assertIsOfSize(angles(self), 2); let a = at(__SPL7, 1); let b = at(__SPL7, 2); abs((-(b, a))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Arc",
  "Arc",
  ["center", "radii", "angles"],
  sl.annotateFunction(function (_center, _radii, _angles) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _center, _radii, _angles";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newArc_0(), _center, _radii, _angles);
  }, ["center", "radii", "angles"]),
  "{ :center :radii :angles | initializeSlots(newArc(),center, radii, angles) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Arc",
  "poincareDiskArc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL8 = _assertIsOfSize_2(_self, 2);
    let _theta1 = _at_2(__SPL8, 1);
    let _theta2 = _at_2(__SPL8, 2);
    let _dTheta = _solidus_2(_abs_1(_hyphenMinus_2(_theta1, _theta2)), 2);
    /* Statements */
    return _if_3(
      _isVeryCloseTo_2(_dTheta, _pi_1(_Fraction_2(1n, 2n))),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _Line_1(
          _collect_2([[1, _theta1], [1, _theta2]], _fromPolarCoordinates_1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _theta = _solidus_2(_plusSign_2(_theta1, _theta2), 2);
        let _r = _tan_1(_dTheta);
        let _y = _asterisk_2(_sin_1(_dTheta), _r);
        let _bigR = _sec_1(_dTheta);
        let _phi = _arcSin_1(_cos_1(_dTheta));
        let _cx = _asterisk_2(_bigR, _cos_1(_theta));
        let _cy = _asterisk_2(_bigR, _sin_1(_theta));
        let _c = [_cx, _cy];
        let _a = _fromPolarCoordinates_1([1, _theta2]);
        let _b = _planarAngle_1(
          _hyphenMinusGreaterThanSign_2(_c, [_plusSign_2(_c, [1, 0]), _a]),
        );
        /* Statements */
        return _Arc_3(_c, [_r, _r], [
          _b,
          _plusSign_2(_b, _asterisk_2(2, _phi)),
        ]);
      }, []),
    );
  }, ["self"]),
  "{ :self | let __SPL8 = assertIsOfSize(self, 2); let theta1 = at(__SPL8, 1); let theta2 = at(__SPL8, 2); let dTheta = /(abs((-(theta1, theta2))), 2); if(isVeryCloseTo(dTheta,pi(Fraction(1L, 2L))), { Line(collect([[1, theta1], [1, theta2]],fromPolarCoordinates:/1)) }, { let theta = /((+(theta1, theta2)), 2); let r = tan(dTheta); let y = *(sin(dTheta), r); let bigR = sec(dTheta); let phi = arcSin(cos(dTheta)); let cx = *(bigR, cos(theta)); let cy = *(bigR, sin(theta)); let c = [cx, cy]; let a = fromPolarCoordinates([1, theta2]); let b = planarAngle((->(c, [+(c, [1, 0]), a]))); Arc(c, [r, r], [b, +(b, (*(2, phi)))]) }) }",
);
