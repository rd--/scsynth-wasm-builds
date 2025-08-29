sl.addType(
  false,
  "HalfPlane",
  "HalfPlane",
  ["Object"],
  ["p", "v", "w"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HalfPlane",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HalfPlane",
  "dihedralAngle",
  ["p", "v"],
  sl.annotateFunction(function (_p, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL162 = _assertIsOfSize_2(_p, 2);
    let _p1 = _at_2(__SPL162, 1);
    let _p2 = _at_2(__SPL162, 2);
    let __SPL163 = _assertIsOfSize_2(_v, 2);
    let _v1 = _at_2(__SPL163, 1);
    let _v2 = _at_2(__SPL163, 2);
    let _v0 = _hyphenMinus_2(_p2, _p1);
    let _c1 = _cross_2(_v0, _v1);
    let _c2 = _cross_2(_v0, _v2);
    /* Statements */
    return _arcCos_1(
      _solidus_2(_dot_2(_c1, _c2), _asterisk_2(_norm_1(_c1), _norm_1(_c2))),
    );
  }, ["p", "v"]),
  "{ :p :v | let __SPL162 = assertIsOfSize(p, 2); let p1 = at(__SPL162, 1); let p2 = at(__SPL162, 2); let __SPL163 = assertIsOfSize(v, 2); let v1 = at(__SPL163, 1); let v2 = at(__SPL163, 2); let v0 = -(p2, p1); let c1 = cross(v0,v1); let c2 = cross(v0,v2); arcCos((/(dot(c1,c2), (*(norm(c1), norm(c2)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "HalfPlane",
  "HalfPlane",
  ["p", "v", "w"],
  sl.annotateFunction(function (_p, _v, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _p, _v, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHalfPlane_0(), _p, _v, _w);
  }, ["p", "v", "w"]),
  "{ :p :v :w | initializeSlots(newHalfPlane(),p, v, w) }",
);
