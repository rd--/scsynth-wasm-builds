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
    return [
      _hyphenMinus_2(_center_1(_self), _radii_1(_self)),
      _plusSign_2(_center_1(_self), _radii_1(_self)),
    ];
  }, ["self"]),
  "{ :self | [-(center(self), radii(self)), +(center(self), radii(self))] }",
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
    let __SPL1 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL1, 1);
    let _cy = _at_2(__SPL1, 2);
    let __SPL2 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL2, 1);
    let _ry = _at_2(__SPL2, 2);
    let __SPL3 = _assertIsOfSize_2(_angles_1(_self), 2);
    let _startAngle = _at_2(__SPL3, 1);
    let _endAngle = _at_2(__SPL3, 2);
    let __SPL4 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_startAngle)),
        _asterisk_2(_ry, _sin_1(_startAngle)),
      ]),
      2,
    );
    let _x1 = _at_2(__SPL4, 1);
    let _y1 = _at_2(__SPL4, 2);
    let __SPL5 = _assertIsOfSize_2(
      _plusSign_2([_cx, _cy], [
        _asterisk_2(_rx, _cos_1(_endAngle)),
        _asterisk_2(_ry, _sin_1(_endAngle)),
      ]),
      2,
    );
    let _x2 = _at_2(__SPL5, 1);
    let _y2 = _at_2(__SPL5, 2);
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
  "{ :self :options | let precision = at(options, 'precision'); let __SPL1 = assertIsOfSize(center(self), 2); let cx = at(__SPL1, 1); let cy = at(__SPL1, 2); let __SPL2 = assertIsOfSize(radii(self), 2); let rx = at(__SPL2, 1); let ry = at(__SPL2, 2); let __SPL3 = assertIsOfSize(angles(self), 2); let startAngle = at(__SPL3, 1); let endAngle = at(__SPL3, 2); let __SPL4 = assertIsOfSize(+([cx, cy], [*(rx, cos(startAngle)), *(ry, sin(startAngle))]), 2); let x1 = at(__SPL4, 1); let y1 = at(__SPL4, 2); let __SPL5 = assertIsOfSize(+([cx, cy], [*(rx, cos(endAngle)), *(ry, sin(endAngle))]), 2); let x2 = at(__SPL5, 1); let y2 = at(__SPL5, 2); let largeArcFlag = boole((>((%((-(endAngle, startAngle)), pi(2))), pi(1)))); format('<path d=\"M %,% A % % 0 % 1 %,%\" />',[printStringToFixed(x1,precision), printStringToFixed(y1,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision), largeArcFlag, printStringToFixed(x2,precision), printStringToFixed(y2,precision)]) }",
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
    let __SPL6 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL6, 1);
    let _ry = _at_2(__SPL6, 2);
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
  "{ :self | let __SPL6 = assertIsOfSize(radii(self), 2); let rx = at(__SPL6, 1); let ry = at(__SPL6, 2); if((=(rx, ry)), { rx }, { error(self,'Arc>>radius: unequal radii') }) }",
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
      _asterisk_2(_squared_1(_radius_1(_self)), _theta_1(_self)),
      0.5,
    );
  }, ["self"]),
  "{ :self | *(*(squared(radius(self)), theta(self)), 0.5) }",
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
        _squared_1(_radius_1(_self)),
        _hyphenMinus_2(_theta_1(_self), _sin_1(_theta_1(_self))),
      ),
      0.5,
    );
  }, ["self"]),
  "{ :self | *(*(squared(radius(self)), (-(theta(self), sin(theta(self))))), 0.5) }",
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
