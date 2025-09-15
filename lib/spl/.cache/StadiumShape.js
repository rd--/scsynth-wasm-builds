sl.addType(
  false,
  "StadiumShape",
  "StadiumShape",
  ["Object", "Geometry"],
  ["c", "r"],
);

sl.copyTraitMethodsToType(
  "Object",
  "StadiumShape",
);

sl.copyTraitMethodsToType(
  "Geometry",
  "StadiumShape",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "a",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL44 = _assertIsOfSize_2(_c_1(_self), 2);
    let _p = _at_2(__SPL44, 1);
    let _q = _at_2(__SPL44, 2);
    let __SPL45 = _assertIsOfSize_2(
      _toPolarCoordinates_1(_hyphenMinus_2(_q, _p)),
      2,
    );
    let _r = _at_2(__SPL45, 1);
    let __genSym52 = _at_2(__SPL45, 2);
    /* Statements */
    return _r;
  }, ["self"]),
  "{ :self | let __SPL44 = assertIsOfSize(c(self), 2); let p = at(__SPL44, 1); let q = at(__SPL44, 2); let __SPL45 = assertIsOfSize(toPolarCoordinates((-(q, p))), 2); let r = at(__SPL45, 1); let _ = at(__SPL45, 2); r }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "area",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _r_1(_self);
    let _a = _a_1(_self);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_pi_1(1), _square_1(_r)),
      _asterisk_2(_asterisk_2(2, _r), _a),
    );
  }, ["self"]),
  "{ :self | let r = r(self); let a = a(self); +((*(pi(1), square(r))), (*(*(2, r), a))) }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "boundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL46 = _assertIsOfSize_2(_c_1(_self), 2);
    let _p = _at_2(__SPL46, 1);
    let _q = _at_2(__SPL46, 2);
    let _r = _r_1(_self);
    let _w = _sqrt_1(_asterisk_2(_square_1(_r), 2));
    let _theta = _theta_1(_self);
    let _a = _plusSign_2(
      _p,
      _fromPolarCoordinates_1([
        _w,
        _hyphenMinus_2(_theta, _pi_1(_Fraction_2(3n, 4n))),
      ]),
    );
    let _b = _plusSign_2(
      _q,
      _fromPolarCoordinates_1([
        _w,
        _hyphenMinus_2(_theta, _pi_1(_Fraction_2(1n, 4n))),
      ]),
    );
    let _c = _plusSign_2(
      _q,
      _fromPolarCoordinates_1([
        _w,
        _plusSign_2(_theta, _pi_1(_Fraction_2(1n, 4n))),
      ]),
    );
    let _d = _plusSign_2(
      _p,
      _fromPolarCoordinates_1([
        _w,
        _plusSign_2(_theta, _pi_1(_Fraction_2(3n, 4n))),
      ]),
    );
    /* Statements */
    return _boundingBox_1(_Polygon_1([_a, _b, _c, _d]));
  }, ["self"]),
  "{ :self | let __SPL46 = assertIsOfSize(c(self), 2); let p = at(__SPL46, 1); let q = at(__SPL46, 2); let r = r(self); let w = sqrt((*(square(r), 2))); let theta = theta(self); let a = +(p, fromPolarCoordinates([w, -(theta, pi(Fraction(3L, 4L)))])); let b = +(q, fromPolarCoordinates([w, -(theta, pi(Fraction(1L, 4L)))])); let c = +(q, fromPolarCoordinates([w, +(theta, pi(Fraction(1L, 4L)))])); let d = +(p, fromPolarCoordinates([w, +(theta, pi(Fraction(3L, 4L)))])); boundingBox(Polygon([a, b, c, d])) }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "embeddingDimension",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL47 = _assertIsOfSize_2(_c_1(_self), 2);
    let _p = _at_2(__SPL47, 1);
    let _q = _at_2(__SPL47, 2);
    /* Statements */
    return _size_1(_p);
  }, ["self"]),
  "{ :self | let __SPL47 = assertIsOfSize(c(self), 2); let p = at(__SPL47, 1); let q = at(__SPL47, 2); size(p) }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _r = _r_1(_self);
    let __SPL48 = _assertIsOfSize_2(_vertexCoordinates_1(_self), 4);
    let _a = _at_2(__SPL48, 1);
    let _b = _at_2(__SPL48, 2);
    let _c = _at_2(__SPL48, 3);
    let _d = _at_2(__SPL48, 4);
    let _precision = _at_2(_options, "precision");
    /* Statements */
    return _format_2('<path d="M %,% L %,% % L %,% %" />', [
      _at_2(_a, 1),
      _at_2(_a, 2),
      _at_2(_b, 1),
      _at_2(_b, 2),
      _svgArcTo_8(
        _r,
        _r,
        0,
        false,
        true,
        _at_2(_c, 1),
        _at_2(_c, 2),
        _precision,
      ),
      _at_2(_d, 1),
      _at_2(_d, 2),
      _svgArcTo_8(
        _r,
        _r,
        0,
        false,
        true,
        _at_2(_a, 1),
        _at_2(_a, 2),
        _precision,
      ),
    ]);
  }, ["self", "options"]),
  "{ :self :options | let r = r(self); let __SPL48 = assertIsOfSize(vertexCoordinates(self), 4); let a = at(__SPL48, 1); let b = at(__SPL48, 2); let c = at(__SPL48, 3); let d = at(__SPL48, 4); let precision = at(options, 'precision'); format('<path d=\"M %,% L %,% % L %,% %\" />',[at(a, 1), at(a, 2), at(b, 1), at(b, 2), svgArcTo(r, r, 0, false, true, at(c, 1), at(c, 2), precision), at(d, 1), at(d, 2), svgArcTo(r, r, 0, false, true, at(a, 1), at(a, 2), precision)]) }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "theta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL49 = _assertIsOfSize_2(_c_1(_self), 2);
    let _p = _at_2(__SPL49, 1);
    let _q = _at_2(__SPL49, 2);
    let __SPL50 = _assertIsOfSize_2(
      _toPolarCoordinates_1(_hyphenMinus_2(_q, _p)),
      2,
    );
    let __genSym53 = _at_2(__SPL50, 1);
    let _theta = _at_2(__SPL50, 2);
    /* Statements */
    return _theta;
  }, ["self"]),
  "{ :self | let __SPL49 = assertIsOfSize(c(self), 2); let p = at(__SPL49, 1); let q = at(__SPL49, 2); let __SPL50 = assertIsOfSize(toPolarCoordinates((-(q, p))), 2); let _ = at(__SPL50, 1); let theta = at(__SPL50, 2); theta }",
);

sl.addMethodToExistingType(
  "StadiumShape",
  "StadiumShape",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL51 = _assertIsOfSize_2(_c_1(_self), 2);
    let _p = _at_2(__SPL51, 1);
    let _q = _at_2(__SPL51, 2);
    let _r = _r_1(_self);
    let _theta = _theta_1(_self);
    let _a = _plusSign_2(
      _p,
      _fromPolarCoordinates_1([
        _r,
        _hyphenMinus_2(_theta, _pi_1(_Fraction_2(1n, 2n))),
      ]),
    );
    let _b = _plusSign_2(
      _q,
      _fromPolarCoordinates_1([
        _r,
        _hyphenMinus_2(_theta, _pi_1(_Fraction_2(1n, 2n))),
      ]),
    );
    let _c = _plusSign_2(
      _q,
      _fromPolarCoordinates_1([
        _r,
        _plusSign_2(_theta, _pi_1(_Fraction_2(1n, 2n))),
      ]),
    );
    let _d = _plusSign_2(
      _p,
      _fromPolarCoordinates_1([
        _r,
        _plusSign_2(_theta, _pi_1(_Fraction_2(1n, 2n))),
      ]),
    );
    /* Statements */
    return [_a, _b, _c, _d];
  }, ["self"]),
  "{ :self | let __SPL51 = assertIsOfSize(c(self), 2); let p = at(__SPL51, 1); let q = at(__SPL51, 2); let r = r(self); let theta = theta(self); let a = +(p, fromPolarCoordinates([r, -(theta, pi(Fraction(1L, 2L)))])); let b = +(q, fromPolarCoordinates([r, -(theta, pi(Fraction(1L, 2L)))])); let c = +(q, fromPolarCoordinates([r, +(theta, pi(Fraction(1L, 2L)))])); let d = +(p, fromPolarCoordinates([r, +(theta, pi(Fraction(1L, 2L)))])); [a, b, c, d] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "StadiumShape",
  "StadiumShape",
  ["c", "r"],
  sl.annotateFunction(function (_c, _r) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _c, _r";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newStadiumShape_0(), _c, _r);
  }, ["c", "r"]),
  "{ :c :r | initializeSlots(newStadiumShape(),c, r) }",
);
