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
    let __SPL99 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL99, 1);
    let _ry = _at_2(__SPL99, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  }, ["self"]),
  "{ :self | let __SPL99 = assertIsOfSize(radii(self), 2); let rx = at(__SPL99, 1); let ry = at(__SPL99, 2); pi((*(rx, ry))) }",
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
    let __SPL100 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL100, 1);
    let _b = _at_2(__SPL100, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _squared_1(_solidus_2(_b, _a))));
  }, ["self"]),
  "{ :self | let __SPL100 = assertIsOfSize(radii(self), 2); let a = at(__SPL100, 1); let b = at(__SPL100, 2); sqrt((-(1, squared((/(b, a)))))) }",
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
    let __SPL101 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL101, 1);
    let _cy = _at_2(__SPL101, 2);
    let __SPL102 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL102, 1);
    let _ry = _at_2(__SPL102, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL101 = assertIsOfSize(center(self), 2); let cx = at(__SPL101, 1); let cy = at(__SPL101, 2); let __SPL102 = assertIsOfSize(radii(self), 2); let rx = at(__SPL102, 1); let ry = at(__SPL102, 2); format(\'<ellipse cx="%" cy="%" rx="%" ry="%" />\',[printStringToFixed(cx,precision), printStringToFixed(cy,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision)]) }',
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
    let __SPL103 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL103, 1);
    let _b = _at_2(__SPL103, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_squared_1(_a), _squared_1(_b)));
  }, ["self"]),
  "{ :self | let __SPL103 = assertIsOfSize(radii(self), 2); let a = at(__SPL103, 1); let b = at(__SPL103, 2); sqrt((-(squared(a), squared(b)))) }",
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
    let __SPL104 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL104, 1);
    let _b = _at_2(__SPL104, 2);
    /* Statements */
    return _solidus_2(_squared_1(_b), _a);
  }, ["self"]),
  "{ :self | let __SPL104 = assertIsOfSize(radii(self), 2); let a = at(__SPL104, 1); let b = at(__SPL104, 2); /(squared(b), a) }",
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
