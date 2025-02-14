sl.addType(
  false,
  "HalfPlane",
  "HalfPlane",
  ["Object"],
  ["p", "v", "w"],
);

sl.copyTraitToType(
  "Object",
  "HalfPlane",
);

sl.addMethod(
  "List",
  "HalfPlane",
  "dihedralAngle",
  ["p", "v"],
  function (_p, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _v";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym47 = _assertIsOfSize_2(_p, 2),
      _p1 = _at_2(__genSym47, 1),
      _p2 = _at_2(__genSym47, 2);
    let __genSym48 = _assertIsOfSize_2(_v, 2),
      _v1 = _at_2(__genSym48, 1),
      _v2 = _at_2(__genSym48, 2);
    let _v0 = _hyphenMinus_2(_p2, _p1);
    let _c1 = _cross_2(_v0, _v1);
    let _c2 = _cross_2(_v0, _v2);
    /* Statements */
    return _arcCos_1(
      _solidus_2(_dot_2(_c1, _c2), _asterisk_2(_norm_1(_c1), _norm_1(_c2))),
    );
  },
  "{ :p :v |\n\t\tlet [p1, p2] = p;\n\t\tlet [v1, v2] = v;\n\t\tlet v0 = p2 - p1;\n\t\tlet c1 = v0.cross(v1);\n\t\tlet c2 = v0.cross(v2);\n\t\t(c1.dot(c2) / (c1.norm * c2.norm)).arcCos\n\t\t/* (v2.norm * v1).dot(c2).arcTan(c1.dot(c2)) */\n\t}",
);

sl.addMethod(
  "List",
  "HalfPlane",
  "HalfPlane",
  ["p", "v", "w"],
  function (_p, _v, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _v, _w";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHalfPlane_0(), _p, _v, _w);
  },
  "{ :p :v :w |\n\t\tnewHalfPlane().initializeSlots(p, v, w)\n\t}",
);
