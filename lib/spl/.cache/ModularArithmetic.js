sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "ModularArithmetic",
  "modularDistance",
  ["i", "j", "m"],
  sl.annotateFunction(function (_i, _j, _m) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _i, _j, _m";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_2(
      _abs_1(_hyphenMinus_2(_i, _j)),
      _hyphenMinus_2(_m, _abs_1(_hyphenMinus_2(_i, _j))),
    );
  }, ["i", "j", "m"]),
  "{ :i :j :m |\n\t\t(i - j).abs.min(m - (i - j).abs)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ModularArithmetic",
  "isErdosDeep",
  ["a", "m"],
  sl.annotateFunction(function (_a, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_a), 1);
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _modularDistanceMultiset_2(_a, _m);
        let _k = _keys_1(_sortedCounts_1(_d));
        /* Statements */
        return _equalsSign_2(
          _k,
          _asList_1(_nonemptyThenTo_3(_n, _hyphenMinus_2(_n, 1), 1)),
        );
      }, []),
    );
  }, ["a", "m"]),
  "{ :a :m |\n\t\tlet n = a.size - 1;\n\t\tn > 0 & {\n\t\t\tlet d = a.modularDistanceMultiset(m);\n\t\t\tlet k = d.sortedCounts.keys;\n\t\t\tk = [n, n - 1 .. 1]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ModularArithmetic",
  "isWinogradDeep",
  ["a", "m"],
  sl.annotateFunction(function (_a, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _solidusSolidus_2(_m, 2);
    /* Statements */
    return _ampersand_2(
      _greaterThanSign_2(_n, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _d = _modularDistanceMultiset_2(_a, _m);
        let _k = _keys_1(_sortedCounts_1(_d));
        /* Statements */
        return _equalsSign_2(
          _k,
          _asList_1(_nonemptyThenTo_3(_n, _hyphenMinus_2(_n, 1), 1)),
        );
      }, []),
    );
  }, ["a", "m"]),
  "{ :a :m |\n\t\tlet n = m // 2;\n\t\tn > 0 & {\n\t\t\tlet d = a.modularDistanceMultiset(m);\n\t\t\tlet k = d.sortedCounts.keys;\n\t\t\tk = [n, n - 1 .. 1]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "ModularArithmetic",
  "modularDistanceMultiset",
  ["a", "m"],
  sl.annotateFunction(function (_a, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_a);
    let _d = _List_0();
    /* Statements */
    _do_2(
      _a,
      sl.annotateFunction(function (_p) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _p";
          throw new Error(errorMessage);
        } /* Statements */
        return _do_2(
          _a,
          sl.annotateFunction(function (_q) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _q";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _lessThanSign_2(_p, _q),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _add_2(_d, _modularDistance_3(_p, _q, _m));
              }, []),
            );
          }, ["q"]),
        );
      }, ["p"]),
    );
    return _Multiset_1(_d);
  }, ["a", "m"]),
  "{ :a :m |\n\t\tlet k = a.size;\n\t\tlet d = List();\n\t\ta.do { :p |\n\t\t\ta.do { :q |\n\t\t\t\t(p < q).ifTrue {\n\t\t\t\t\td.add(p.modularDistance(q, m))\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\td.Multiset\n\t}",
);
