sl.extendTypeOrTraitWithMethod(
  "List",
  "VectorFunctions",
  "cross",
  ["u"],
  sl.annotateFunction(function (_u) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _u";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar1 = _assertIsOfSize_2(_u, 2);
    let _x = _at_2(__SplVar1, 1);
    let _y = _at_2(__SplVar1, 2);
    /* Statements */
    return [_hyphenMinus_1(_y), _x];
  }, ["u"]),
  "{ :u |\n\t\tlet [x, y] = u;\n\t\t[y.-, x]\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "VectorFunctions",
  "cross",
  ["u", "v"],
  sl.annotateFunction(function (_u, _v) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _u, _v";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_u);
    /* Statements */
    return _if_3(
      _equalsSign_2(_k, 2),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar2 = _assertIsOfSize_2(_u, 2);
        let _ux = _at_2(__SplVar2, 1);
        let _uy = _at_2(__SplVar2, 2);
        let __SplVar3 = _assertIsOfSize_2(_v, 2);
        let _vx = _at_2(__SplVar3, 1);
        let _vy = _at_2(__SplVar3, 2);
        /* Statements */
        return _hyphenMinus_2(_asterisk_2(_ux, _vy), _asterisk_2(_uy, _vx));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar4 = _assertIsOfSize_2(_u, 3);
        let _ux = _at_2(__SplVar4, 1);
        let _uy = _at_2(__SplVar4, 2);
        let _uz = _at_2(__SplVar4, 3);
        let __SplVar5 = _assertIsOfSize_2(_v, 3);
        let _vx = _at_2(__SplVar5, 1);
        let _vy = _at_2(__SplVar5, 2);
        let _vz = _at_2(__SplVar5, 3);
        /* Statements */
        return [
          _hyphenMinus_2(_asterisk_2(_uy, _vz), _asterisk_2(_uz, _vy)),
          _hyphenMinus_2(_asterisk_2(_uz, _vx), _asterisk_2(_ux, _vz)),
          _hyphenMinus_2(_asterisk_2(_ux, _vy), _asterisk_2(_uy, _vx)),
        ];
      }, []),
    );
  }, ["u", "v"]),
  "{ :u :v |\n\t\tlet k = u.size;\n\t\t(k = 2).if {\n\t\t\tlet [ux, uy] = u;\n\t\t\tlet [vx, vy] = v;\n\t\t\t(ux * vy) - (uy * vx)\n\t\t} {\n\t\t\tlet [ux, uy, uz] = u;\n\t\t\tlet [vx, vy, vz] = v;\n\t\t\t[\n\t\t\t\t(uy * vz) - (uz * vy),\n\t\t\t\t(uz * vx) - (ux * vz),\n\t\t\t\t(ux * vy) - (uy * vx)\n\t\t\t]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "VectorFunctions",
  "crossedMultiply",
  ["self", "aList"],
  sl.annotateFunction(function (_self, _aList) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aList";
      throw new Error(errorMessage);
    } /* Statements */
    return _withCollectCrossed_3(_self, _aList, _asterisk_2);
  }, ["self", "aList"]),
  "{ :self :aList |\n\t\tself.withCollectCrossed(aList, *)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "VectorFunctions",
  "scalarTripleProduct",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _dot_2(_a, _cross_2(_b, _c));
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\ta.dot(b.cross(c))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "VectorFunctions",
  "vectorTripleProduct",
  ["a", "b", "c"],
  sl.annotateFunction(function (_a, _b, _c) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _cross_2(_a, _cross_2(_b, _c));
  }, ["a", "b", "c"]),
  "{ :a :b :c |\n\t\ta.cross(b.cross(c))\n\t}",
);
