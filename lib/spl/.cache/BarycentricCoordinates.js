sl.addType(
  false,
  "BarycentricCoordinates",
  "BarycentricCoordinates",
  ["Object", "Equatable"],
  ["coordinates"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BarycentricCoordinates",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BarycentricCoordinates",
);

sl.addMethodToExistingType(
  "BarycentricCoordinates",
  "BarycentricCoordinates",
  "asCartesianCoordinates",
  ["self", "aSimplex"],
  sl.annotateFunction(function (_self, _aSimplex) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aSimplex";
      throw new Error(errorMessage);
    } /* Statements */
    return _CartesianCoordinates_1(
      _sum_1(_asterisk_2(_coordinates_1(_self), _coordinates_1(_aSimplex))),
    );
  }, ["self", "aSimplex"]),
  "{ :self :aSimplex | CartesianCoordinates(sum((*(coordinates(self), coordinates(aSimplex))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "BarycentricCoordinates",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBarycentricCoordinates_0(), _self);
  }, ["self"]),
  "{ :self | initializeSlots(newBarycentricCoordinates(),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "fromBarycentricCoordinates",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = [_a, _b, _c];
    /* Statements */
    return sl.annotateFunction(function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_asterisk_2(_lambda, _v));
    }, ["lambda"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | let v = [a, b, c]; { :lambda | sum((*(lambda, v))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "fromBarycentricCoordinates",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v = [_a, _b, _c, _d];
    /* Statements */
    return sl.annotateFunction(function (_lambda) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _lambda";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(_asterisk_2(_lambda, _v));
    }, ["lambda"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d | let v = [a, b, c, d]; { :lambda | sum((*(lambda, v))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "toBarycentricCoordinates",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _t = [[
      _hyphenMinus_2(_at_2(_a, 1), _at_2(_c, 1)),
      _hyphenMinus_2(_at_2(_b, 1), _at_2(_c, 1)),
    ], [
      _hyphenMinus_2(_at_2(_a, 2), _at_2(_c, 2)),
      _hyphenMinus_2(_at_2(_b, 2), _at_2(_c, 2)),
    ]];
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let __SplVar1 = _assertIsOfSize_2(
        _dot_2(_inverse_1(_t), _hyphenMinus_2(_p, _c)),
        2,
      );
      let _u = _at_2(__SplVar1, 1);
      let _v = _at_2(__SplVar1, 2);
      /* Statements */
      return [_u, _v, _hyphenMinus_2(_hyphenMinus_2(1, _u), _v)];
    }, ["p"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | let t = [[-(at(a, 1), at(c, 1)), -(at(b, 1), at(c, 1))], [-(at(a, 2), at(c, 2)), -(at(b, 2), at(c, 2))]]; { :p | let __SplVar1 = assertIsOfSize(dot(inverse(t),-(p, c)), 2); let u = at(__SplVar1, 1); let v = at(__SplVar1, 2); [u, v, -(-(1, u), v)] } }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "toBarycentricCoordinates",
  ["a", "b", "c", "d"],
  sl.annotateFunction(function (_a, _b, _c, _d) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _a, _b, _c, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_4 = sl.annotateFunction(function (_u, _v, _w, _x) {
      /* ArityCheck */
      if (arguments.length !== 4) {
        const errorMessage = "Arity: expected 4, _u, _v, _w, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _determinant_1(
        _transpose_1(_arrayPad_3([_u, _v, _w, _x], [[0, 0], [0, 1]], 1)),
      );
    }, ["u", "v", "w", "x"]);
    let _z = _f_4(_a, _b, _c, _d);
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _u = _solidus_2(_f_4(_p, _b, _c, _d), _z);
      let _v = _solidus_2(_f_4(_a, _p, _c, _d), _z);
      let _w = _solidus_2(_f_4(_a, _b, _p, _d), _z);
      /* Statements */
      return [
        _u,
        _v,
        _w,
        _hyphenMinus_2(_hyphenMinus_2(_hyphenMinus_2(1, _u), _v), _w),
      ];
    }, ["p"]);
  }, ["a", "b", "c", "d"]),
  "{ :a :b :c :d | let f = { :u :v :w :x | determinant(transpose(arrayPad([u, v, w, x],[[0, 0], [0, 1]], 1))) }; let z = f(a, b, c, d); { :p | let u = /(f(p, b, c, d), z); let v = /(f(a, p, c, d), z); let w = /(f(a, b, p, d), z); [u, v, w, -(-(-(1, u), v), w)] } }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "BarycentricCoordinates",
  "toBarycentricCoordinatesVertexApproach",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _v0 = _hyphenMinus_2(_b, _a);
    let _v1 = _hyphenMinus_2(_c, _a);
    let _d00 = _dot_2(_v0, _v0);
    let _d01 = _dot_2(_v0, _v1);
    let _d11 = _dot_2(_v1, _v1);
    let _m = _solidus_2(
      1,
      _hyphenMinus_2(_asterisk_2(_d00, _d11), _asterisk_2(_d01, _d01)),
    );
    /* Statements */
    return sl.annotateFunction(function (_p) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _p";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _v2 = _hyphenMinus_2(_p, _a);
      let _d20 = _dot_2(_v2, _v0);
      let _d21 = _dot_2(_v2, _v1);
      let _v = _asterisk_2(
        _hyphenMinus_2(_asterisk_2(_d11, _d20), _asterisk_2(_d01, _d21)),
        _m,
      );
      let _w = _asterisk_2(
        _hyphenMinus_2(_asterisk_2(_d00, _d21), _asterisk_2(_d01, _d20)),
        _m,
      );
      let _u = _hyphenMinus_2(_hyphenMinus_2(1, _v), _w);
      /* Statements */
      return [_u, _v, _w];
    }, ["p"]);
  }, ["a", "b", "c"]),
  "{ :a :b :c | let v0 = -(b, a); let v1 = -(c, a); let d00 = dot(v0, v0); let d01 = dot(v0, v1); let d11 = dot(v1, v1); let m = /(1, (-((*(d00, d11)), (*(d01, d01))))); { :p | let v2 = -(p, a); let d20 = dot(v2, v0); let d21 = dot(v2, v1); let v = *((-((*(d11, d20)), (*(d01, d21)))), m); let w = *((-((*(d00, d21)), (*(d01, d20)))), m); let u = -(-(1, v), w); [u, v, w] } }",
);
