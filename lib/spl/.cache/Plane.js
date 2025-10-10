sl.extendTypeOrTraitWithMethod(
  "List",
  "Plane",
  "pointPlaneDistance",
  ["plane", "point"],
  sl.annotateFunction(function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _plane, _point";
      throw new Error(errorMessage);
    } /* Statements */
    return _abs_1(_signedPointPlaneDistance_2(_plane, _point));
  }, ["plane", "point"]),
  "{ :plane :point |\n\t\tplane.signedPointPlaneDistance(point).abs\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Plane",
  "signedPointPlaneDistance",
  ["plane", "point"],
  sl.annotateFunction(function (_plane, _point) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _plane, _point";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_plane, 4);
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    let _c = _at_2(__SplVar1, 3);
    let _d = _at_2(__SplVar1, 4);
    let __SplVar2 = _assertIsOfSize_2(_point, 3);
    let _x = _at_2(__SplVar2, 1);
    let _y = _at_2(__SplVar2, 2);
    let _z = _at_2(__SplVar2, 3);
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
  }, ["plane", "point"]),
  "{ :plane :point |\n\t\tlet [a, b, c, d] = plane;\n\t\tlet [x, y, z] = point;\n\t\t((a * x) + (b * y) + (c * z) + d) / ((a * a) + (b * b) + (c * c)).sqrt\n\t}",
);
