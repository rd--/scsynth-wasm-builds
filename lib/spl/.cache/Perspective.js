sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Perspective",
  "glFrustum",
  ["left", "right", "bottom", "top", "nearVal", "farVal"],
  sl.annotateFunction(
    function (_left, _right, _bottom, _top, _nearVal, _farVal) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _left, _right, _bottom, _top, _nearVal, _farVal";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _x = _solidus_2(
        _asterisk_2(2, _nearVal),
        _hyphenMinus_2(_right, _left),
      );
      let _y = _solidus_2(
        _asterisk_2(2, _nearVal),
        _hyphenMinus_2(_top, _bottom),
      );
      let _a = _solidus_2(
        _plusSign_2(_right, _left),
        _hyphenMinus_2(_right, _left),
      );
      let _b = _solidus_2(
        _plusSign_2(_top, _bottom),
        _hyphenMinus_2(_top, _bottom),
      );
      let _c = _solidus_2(
        _hyphenMinus_1(_plusSign_2(_farVal, _nearVal)),
        _hyphenMinus_2(_farVal, _nearVal),
      );
      let _d = _solidus_2(
        _hyphenMinus_1(_asterisk_2(_asterisk_2(2, _farVal), _nearVal)),
        _hyphenMinus_2(_farVal, _nearVal),
      );
      /* Statements */
      return [[_x, 0, 0, 0], [0, _y, 0, 0], [_a, _b, _c, -1], [_a, 0, _d, 0]];
    },
    ["left", "right", "bottom", "top", "nearVal", "farVal"],
  ),
  "{ :left :right :bottom :top :nearVal :farVal |\n\t\tlet x = (2 * nearVal) / (right - left);\n\t\tlet y = (2 * nearVal) / (top - bottom);\n\t\tlet a = (right + left) / (right - left);\n\t\tlet b = (top + bottom) / (top - bottom);\n\t\tlet c = -(farVal + nearVal) / (farVal - nearVal);\n\t\tlet d = -(2 * farVal * nearVal) / (farVal - nearVal);\n\t\t[x 0 0 0; 0 y 0 0; a b c -1; a 0 d 0]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Perspective",
  "glOrtho",
  ["left", "right", "bottom", "top", "nearVal", "farVal"],
  sl.annotateFunction(
    function (_left, _right, _bottom, _top, _nearVal, _farVal) {
      /* ArityCheck */
      if (arguments.length !== 6) {
        const errorMessage =
          "Arity: expected 6, _left, _right, _bottom, _top, _nearVal, _farVal";
        throw new Error(errorMessage);
      } /* Statements */
      return [
        [_solidus_2(2, _hyphenMinus_2(_right, _left)), 0, 0, 0],
        [0, _solidus_2(2, _hyphenMinus_2(_top, _bottom)), 0, 0],
        [0, 0, _solidus_2(-2, _hyphenMinus_2(_farVal, _nearVal)), 0],
        [
          _solidus_2(
            _negate_1(_plusSign_2(_right, _left)),
            _hyphenMinus_2(_right, _left),
          ),
          _solidus_2(
            _negate_1(_plusSign_2(_top, _bottom)),
            _hyphenMinus_2(_top, _bottom),
          ),
          _solidus_2(
            _plusSign_2(_farVal, _negate_1(_nearVal)),
            _hyphenMinus_2(_farVal, _nearVal),
          ),
          1,
        ],
      ];
    },
    ["left", "right", "bottom", "top", "nearVal", "farVal"],
  ),
  "{ :left :right :bottom :top :nearVal :farVal |\n\t\t[\n\t\t\t[2 / (right - left), 0, 0, 0],\n\t\t\t[0, 2 / (top - bottom), 0, 0],\n\t\t\t[0, 0, -2 / (farVal - nearVal), 0],\n\t\t\t[\n\t\t\t\t(right + left).negate / (right - left),\n\t\t\t\t(top + bottom).negate / (top - bottom),\n\t\t\t\t(farVal + nearVal.negate) / (farVal - nearVal),\n\t\t\t\t1\n\t\t\t]\n\t\t]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Perspective",
  "gluPerspective",
  ["fovy", "aspect", "zNear", "zFar"],
  sl.annotateFunction(function (_fovy, _aspect, _zNear, _zFar) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _fovy, _aspect, _zNear, _zFar";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _ymax = _asterisk_2(_zNear, _tan_1(_solidus_2(_pi_1(_fovy), 360)));
    let _ymin = _negate_1(_ymax);
    let _xmin = _asterisk_2(_ymin, _aspect);
    let _xmax = _asterisk_2(_ymax, _aspect);
    /* Statements */
    return _glFrustum_6(_xmin, _xmax, _ymin, _ymax, _zNear, _zFar);
  }, ["fovy", "aspect", "zNear", "zFar"]),
  "{ :fovy :aspect :zNear :zFar |\n\t\tlet ymax = zNear * (fovy.pi / 360).tan;\n\t\tlet ymin = ymax.negate;\n\t\tlet xmin = ymin * aspect;\n\t\tlet xmax = ymax * aspect;\n\t\tglFrustum(xmin, xmax, ymin, ymax, zNear, zFar)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Perspective",
  "gluLookAt",
  ["eye", "center", "up"],
  sl.annotateFunction(function (_eye, _center, _up) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _eye, _center, _up";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _normalize_1(_hyphenMinus_2(_eye, _center));
    let _x = _cross_2(_up, _z);
    let _y = _cross_2(_z, _x);
    let __SplVar1 = _assertIsOfSize_2(_normalize_1(_x), 3);
    let _x1 = _at_2(__SplVar1, 1);
    let _x2 = _at_2(__SplVar1, 2);
    let _x3 = _at_2(__SplVar1, 3);
    let __SplVar2 = _assertIsOfSize_2(_normalize_1(_y), 3);
    let _y1 = _at_2(__SplVar2, 1);
    let _y2 = _at_2(__SplVar2, 2);
    let _y3 = _at_2(__SplVar2, 3);
    let __SplVar3 = _assertIsOfSize_2(_z, 3);
    let _z1 = _at_2(__SplVar3, 1);
    let _z2 = _at_2(__SplVar3, 2);
    let _z3 = _at_2(__SplVar3, 3);
    let __SplVar4 = _assertIsOfSize_2(_negate_1(_eye), 3);
    let _w1 = _at_2(__SplVar4, 1);
    let _w2 = _at_2(__SplVar4, 2);
    let _w3 = _at_2(__SplVar4, 3);
    /* Statements */
    return [[_x1, _y1, _z1, _w1], [_x2, _y2, _z2, _w2], [_x3, _y3, _z3, _w3], [
      0,
      0,
      0,
      1,
    ]];
  }, ["eye", "center", "up"]),
  "{ :eye :center :up |\n\t\tlet z = (eye - center).normalize;\n\t\tlet x = up.cross(z);\n\t\tlet y = z.cross(x);\n\t\tlet [x1, x2, x3] = x.normalize;\n\t\tlet [y1, y2, y3] = y.normalize;\n\t\tlet [z1, z2, z3] = z;\n\t\tlet [w1, w2, w3] = eye.negate;\n\t\t[x1 y1 z1 w1; x2 y2 z2 w2; x3 y3 z3 w3; 0 0 0 1]\n\t}",
);
