sl.addType(
  false,
  "Ellipse",
  "Ellipse",
  ["Object"],
  ["center", "radii"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ellipse",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL106 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL106, 1);
    let _ry = _at_2(__SPL106, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  }, ["self"]),
  "{ :self | let __SPL106 = assertIsOfSize(radii(self), 2); let rx = at(__SPL106, 1); let ry = at(__SPL106, 2); pi((*(rx, ry))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
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
  "Ellipse",
  "Ellipse",
  "eccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL107 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL107, 1);
    let _b = _at_2(__SPL107, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _squared_1(_solidus_2(_b, _a))));
  }, ["self"]),
  "{ :self | let __SPL107 = assertIsOfSize(radii(self), 2); let a = at(__SPL107, 1); let b = at(__SPL107, 2); sqrt((-(1, squared((/(b, a)))))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "forSvg",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL108 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL108, 1);
    let _cy = _at_2(__SPL108, 2);
    let __SPL109 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL109, 1);
    let _ry = _at_2(__SPL109, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL108 = assertIsOfSize(center(self), 2); let cx = at(__SPL108, 1); let cy = at(__SPL108, 2); let __SPL109 = assertIsOfSize(radii(self), 2); let rx = at(__SPL109, 1); let ry = at(__SPL109, 2); format(\'<ellipse cx="%" cy="%" rx="%" ry="%" />\',[printStringToFixed(cx,precision), printStringToFixed(cy,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision)]) }',
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "linearEccentricity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL110 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL110, 1);
    let _b = _at_2(__SPL110, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_squared_1(_a), _squared_1(_b)));
  }, ["self"]),
  "{ :self | let __SPL110 = assertIsOfSize(radii(self), 2); let a = at(__SPL110, 1); let b = at(__SPL110, 2); sqrt((-(squared(a), squared(b)))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "semiLatusRectum",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL111 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL111, 1);
    let _b = _at_2(__SPL111, 2);
    /* Statements */
    return _solidus_2(_squared_1(_b), _a);
  }, ["self"]),
  "{ :self | let __SPL111 = assertIsOfSize(radii(self), 2); let a = at(__SPL111, 1); let b = at(__SPL111, 2); /(squared(b), a) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ellipse",
  "Ellipse",
  ["center", "radii"],
  sl.annotateFunction(function (_center, _radii) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _center, _radii";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_rank_1(_center), 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _withCollect_3(_center, _radii, _Ellipse_2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _equalsSign_2(_size_1(_radii), 2),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _initializeSlots_3(_newEllipse_0(), _center, _radii);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("Sequence>>Ellipse: invalid radii");
          }, []),
        );
      }, []),
    );
  }, ["center", "radii"]),
  "{ :center :radii | if((>(rank(center), 1)), { withCollect(center,radii, Ellipse:/2) }, { if((=(size(radii), 2)), { initializeSlots(newEllipse(),center, radii) }, { error('Sequence>>Ellipse: invalid radii') }) }) }",
);
