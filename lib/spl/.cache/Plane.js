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
  "{ :plane :point | abs(signedPointPlaneDistance(plane,point)) }",
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
    let __SPL228 = _assertIsOfSize_2(_plane, 4);
    let _a = _at_2(__SPL228, 1);
    let _b = _at_2(__SPL228, 2);
    let _c = _at_2(__SPL228, 3);
    let _d = _at_2(__SPL228, 4);
    let __SPL229 = _assertIsOfSize_2(_point, 3);
    let _x = _at_2(__SPL229, 1);
    let _y = _at_2(__SPL229, 2);
    let _z = _at_2(__SPL229, 3);
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
  "{ :plane :point | let __SPL228 = assertIsOfSize(plane, 4); let a = at(__SPL228, 1); let b = at(__SPL228, 2); let c = at(__SPL228, 3); let d = at(__SPL228, 4); let __SPL229 = assertIsOfSize(point, 3); let x = at(__SPL229, 1); let y = at(__SPL229, 2); let z = at(__SPL229, 3); /((+(+(+((*(a, x)), (*(b, y))), (*(c, z))), d)), sqrt((+(+((*(a, a)), (*(b, b))), (*(c, c)))))) }",
);
