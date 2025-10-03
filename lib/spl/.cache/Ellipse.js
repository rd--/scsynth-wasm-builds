sl.addType(
  false,
  "Ellipse",
  "Ellipse",
  ["Object", "Equatable", "Geometry"],
  ["center", "radii"],
);

sl.copyTraitMethodsToType(
  "Object",
  "Ellipse",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "Ellipse",
);

sl.copyTraitMethodsToType(
  "Geometry",
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
    let __SPL19 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL19, 1);
    let _ry = _at_2(__SPL19, 2);
    /* Statements */
    return _pi_1(_asterisk_2(_rx, _ry));
  }, ["self"]),
  "{ :self | let __SPL19 = assertIsOfSize(radii(self), 2); let rx = at(__SPL19, 1); let ry = at(__SPL19, 2); pi((*(rx, ry))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "axisAlignedBoundingBox",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let __SPL20 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL20, 1);
    let _b = _at_2(__SPL20, 2);
    let _u = [_a, 0];
    let _v = [0, _b];
    /* Statements */
    return _ellipseAxisAlignedBoundingBox_3(_c, _u, _v);
  }, ["self"]),
  "{ :self | let c = center(self); let __SPL20 = assertIsOfSize(radii(self), 2); let a = at(__SPL20, 1); let b = at(__SPL20, 2); let u = [a, 0]; let v = [0, b]; ellipseAxisAlignedBoundingBox(c, u, v) }",
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
  "coVertex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | at(vertexCoordinates(self),2) }",
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
    let __SPL21 = _assertIsOfSize_2(_majorMinorAxes_1(_self), 2);
    let _a = _at_2(__SPL21, 1);
    let _b = _at_2(__SPL21, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(1, _square_1(_solidus_2(_b, _a))));
  }, ["self"]),
  "{ :self | let __SPL21 = assertIsOfSize(majorMinorAxes(self), 2); let a = at(__SPL21, 1); let b = at(__SPL21, 2); sqrt((-(1, square((/(b, a)))))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "foci",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _center_1(_self);
    let _e = _linearEccentricity_1(_self);
    let _f1 = _plusSign_2(_c, [_e, 0]);
    let _f2 = _hyphenMinus_2(_c, [_e, 0]);
    /* Statements */
    return [_f1, _f2];
  }, ["self"]),
  "{ :self | let c = center(self); let e = linearEccentricity(self); let f1 = +(c, [e, 0]); let f2 = -(c, [e, 0]); [f1, f2] }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "implicitEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL22 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x0 = _at_2(__SPL22, 1);
    let _y0 = _at_2(__SPL22, 2);
    let __SPL23 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL23, 1);
    let _b = _at_2(__SPL23, 2);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        _plusSign_2(
          _solidus_2(_square_1(_hyphenMinus_2(_x, _x0)), _square_1(_a)),
          _solidus_2(_square_1(_hyphenMinus_2(_y, _y0)), _square_1(_b)),
        ),
        1,
      );
    }, ["x", "y"]);
  }, ["self"]),
  "{ :self | let __SPL22 = assertIsOfSize(center(self), 2); let x0 = at(__SPL22, 1); let y0 = at(__SPL22, 2); let __SPL23 = assertIsOfSize(radii(self), 2); let a = at(__SPL23, 1); let b = at(__SPL23, 2); { :x :y | -(+((/(square((-(x, x0))), square(a))), (/(square((-(y, y0))), square(b)))), 1) } }",
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
    let __SPL24 = _assertIsOfSize_2(_majorMinorAxes_1(_self), 2);
    let _a = _at_2(__SPL24, 1);
    let _b = _at_2(__SPL24, 2);
    /* Statements */
    return _sqrt_1(_hyphenMinus_2(_square_1(_a), _square_1(_b)));
  }, ["self"]),
  "{ :self | let __SPL24 = assertIsOfSize(majorMinorAxes(self), 2); let a = at(__SPL24, 1); let b = at(__SPL24, 2); sqrt((-(square(a), square(b)))) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "majorMinorAxes",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL25 = _assertIsOfSize_2(_sorted_1(_radii_1(_self)), 2);
    let _b = _at_2(__SPL25, 1);
    let _a = _at_2(__SPL25, 2);
    /* Statements */
    return [_a, _b];
  }, ["self"]),
  "{ :self | let __SPL25 = assertIsOfSize(sorted(radii(self)), 2); let b = at(__SPL25, 1); let a = at(__SPL25, 2); [a, b] }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "parametricEquation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _ellipseCurve_3(_center_1(_self), _radii_1(_self), 0);
  }, ["self"]),
  "{ :self | ellipseCurve(center(self), radii(self), 0) }",
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
    let __SPL26 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL26, 1);
    let _b = _at_2(__SPL26, 2);
    /* Statements */
    return _solidus_2(_square_1(_b), _a);
  }, ["self"]),
  "{ :self | let __SPL26 = assertIsOfSize(radii(self), 2); let a = at(__SPL26, 1); let b = at(__SPL26, 2); /(square(b), a) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "svgFragment",
  ["self", "options"],
  sl.annotateFunction(function (_self, _options) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _options";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _precision = _at_2(_options, "precision");
    let __SPL27 = _assertIsOfSize_2(_center_1(_self), 2);
    let _cx = _at_2(__SPL27, 1);
    let _cy = _at_2(__SPL27, 2);
    let __SPL28 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _rx = _at_2(__SPL28, 1);
    let _ry = _at_2(__SPL28, 2);
    /* Statements */
    return _format_2('<ellipse cx="%" cy="%" rx="%" ry="%" />', [
      _printStringToFixed_2(_cx, _precision),
      _printStringToFixed_2(_cy, _precision),
      _printStringToFixed_2(_rx, _precision),
      _printStringToFixed_2(_ry, _precision),
    ]);
  }, ["self", "options"]),
  '{ :self :options | let precision = at(options, \'precision\'); let __SPL27 = assertIsOfSize(center(self), 2); let cx = at(__SPL27, 1); let cy = at(__SPL27, 2); let __SPL28 = assertIsOfSize(radii(self), 2); let rx = at(__SPL28, 1); let ry = at(__SPL28, 2); format(\'<ellipse cx="%" cy="%" rx="%" ry="%" />\',[printStringToFixed(cx,precision), printStringToFixed(cy,precision), printStringToFixed(rx,precision), printStringToFixed(ry,precision)]) }',
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _at_2(_vertexCoordinates_1(_self), 1);
  }, ["self"]),
  "{ :self | at(vertexCoordinates(self),1) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertices",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _first_2(_vertexCoordinates_1(_self), 2);
  }, ["self"]),
  "{ :self | first(vertexCoordinates(self),2) }",
);

sl.addMethodToExistingType(
  "Ellipse",
  "Ellipse",
  "vertexCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL29 = _assertIsOfSize_2(_center_1(_self), 2);
    let _x = _at_2(__SPL29, 1);
    let _y = _at_2(__SPL29, 2);
    let __SPL30 = _assertIsOfSize_2(_radii_1(_self), 2);
    let _a = _at_2(__SPL30, 1);
    let _b = _at_2(__SPL30, 2);
    /* Statements */
    return [[_plusSign_2(_x, _a), _y], [_x, _plusSign_2(_y, _b)], [
      _hyphenMinus_2(_x, _a),
      _y,
    ], [_x, _hyphenMinus_2(_y, _b)]];
  }, ["self"]),
  "{ :self | let __SPL29 = assertIsOfSize(center(self), 2); let x = at(__SPL29, 1); let y = at(__SPL29, 2); let __SPL30 = assertIsOfSize(radii(self), 2); let a = at(__SPL30, 1); let b = at(__SPL30, 2); [[+(x, a), y], [x, +(y, b)], [-(x, a), y], [x, -(y, b)]] }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Ellipse",
  "ellipseAxisAlignedBoundingBox",
  ["c", "u", "v"],
  sl.annotateFunction(function (_c, _u, _v) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _c, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _e = _sqrt_1(_plusSign_2(_dot_2(_u, _u), _dot_2(_v, _v)));
    /* Statements */
    return [_hyphenMinus_2(_c, _e), _plusSign_2(_c, _e)];
  }, ["c", "u", "v"]),
  "{ :c :u :v | let e = sqrt((+(dot(u,u), dot(v,v)))); [-(c, e), +(c, e)] }",
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
