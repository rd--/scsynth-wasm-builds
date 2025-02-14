sl.addMethod(
  "List",
  "Plane",
  "pointPlaneDistance",
  ["plane", "point"],
  function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _plane, _point";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_signedPointPlaneDistance_2(_plane, _point));
  },
  "{ :plane :point |\n\t\tplane.signedPointPlaneDistance(point).abs\n\t}",
);

sl.addMethod(
  "List",
  "Plane",
  "signedPointPlaneDistance",
  ["plane", "point"],
  function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _plane, _point";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym73 = _assertIsOfSize_2(_plane, 4),
      _a = _at_2(__genSym73, 1),
      _b = _at_2(__genSym73, 2),
      _c = _at_2(__genSym73, 3),
      _d = _at_2(__genSym73, 4);
    let __genSym74 = _assertIsOfSize_2(_point, 3),
      _x = _at_2(__genSym74, 1),
      _y = _at_2(__genSym74, 2),
      _z = _at_2(__genSym74, 3);
    /* Statements */
    return _solidus_2(
      _plusSign_2(
        _plusSign_2(
          _plusSign_2(_asterisk_2(_a, _x), _asterisk_2(_b, _y)),
          _asterisk_2(_c, _z),
        ),
        _d,
      ),
      _sqrt_1(
        _plusSign_2(
          _plusSign_2(_asterisk_2(_a, _a), _asterisk_2(_b, _b)),
          _asterisk_2(_c, _c),
        ),
      ),
    );
  },
  "{ :plane :point |\n\t\tlet [a, b, c, d] = plane;\n\t\tlet [x, y, z] = point;\n\t\t((a * x) + (b * y) + (c * z) + d) / ((a * a) + (b * b) + (c * c)).sqrt\n\t}",
);
