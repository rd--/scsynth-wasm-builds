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
  "hasUniqueModularDistanceCounts",
  ["a", "m", "n"],
  sl.annotateFunction(function (_a, _m, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
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
  }, ["a", "m", "n"]),
  "{ :a :m :n |\n\t\tn > 0 & {\n\t\t\tlet d = a.modularDistanceMultiset(m);\n\t\t\tlet k = d.sortedCounts.keys;\n\t\t\tk = [n, n - 1 .. 1]\n\t\t}\n\t}",
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
    } /* Statements */
    return _hasUniqueModularDistanceCounts_3(
      _a,
      _m,
      _hyphenMinus_2(_size_1(_a), 1),
    );
  }, ["a", "m"]),
  "{ :a :m |\n\t\ta.hasUniqueModularDistanceCounts(m, a.size - 1)\n\t}",
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
    } /* Statements */
    return _hasUniqueModularDistanceCounts_3(_a, _m, _solidusSolidus_2(_m, 2));
  }, ["a", "m"]),
  "{ :a :m |\n\t\ta.hasUniqueModularDistanceCounts(m, m // 2)\n\t}",
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

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ModularArithmetic",
  "isPerfectDifferenceSet",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _hyphenMinus_2(_size_1(_self), 1);
    /* Statements */
    return _ampersand_2(
      _equalsSign_2(_modulus, _plusSign_2(_plusSign_2(_square_1(_k), _k), 1)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a = _select_2(
          _tuples_2(_self, 2),
          sl.annotateFunction(function (_t) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _t";
              throw new Error(errorMessage);
            } /* Statements */
            return _exclamationMarkEqualsSign_2(_at_2(_t, 1), _at_2(_t, 2));
          }, ["t"]),
        );
        let _b = _sort_1(_collect_2(
          _a,
          sl.annotateFunction(function (_t) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _t";
              throw new Error(errorMessage);
            } /* Statements */
            return _percentSign_2(
              _hyphenMinus_2(_at_2(_t, 1), _at_2(_t, 2)),
              _modulus,
            );
          }, ["t"]),
        ));
        /* Statements */
        return _equalsSign_2(
          _b,
          _asList_1(_nonemptyRange_3(1, _hyphenMinus_2(_modulus, 1), 1)),
        );
      }, []),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tlet k = self.size - 1;\n\t\t(modulus = (k.square + k + 1)) & {\n\t\t\tlet a = self.tuples(2).select { :t | t[1] != t[2] };\n\t\t\tlet b = a.collect { :t | t[1] - t[2] % modulus }.sort;\n\t\t\tb = [1 .. modulus - 1]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "ModularArithmetic",
  "perfectDifferenceSetGraph",
  ["self", "modulus"],
  sl.annotateFunction(function (_self, _modulus) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _modulus";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isPerfectDifferenceSet_2(_self, _modulus),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _v = _asList_1(_nonemptyRange_3(1, _modulus, 1));
        let _e = _select_2(
          _tuples_2(_v, 2),
          sl.annotateFunction(function (_t) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _t";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSign_2(_at_2(_t, 1), _at_2(_t, 2)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _d = _percentSign_2(
                  _plusSign_2(_at_2(_t, 1), _at_2(_t, 2)),
                  _modulus,
                );
                /* Statements */
                return _includes_2(_self, _d);
              }, []),
            );
          }, ["t"]),
        );
        let _g = _Graph_2(_v, _e);
        /* Statements */
        return _g;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "perfectDifferenceSetGraph");
      }, []),
    );
  }, ["self", "modulus"]),
  "{ :self :modulus |\n\t\tself.isPerfectDifferenceSet(modulus).if {\n\t\t\tlet v = [1 .. modulus];\n\t\t\tlet e = v.tuples(2).select { :t |\n\t\t\t\tt[1] < t[2] & {\n\t\t\t\t\tlet d = t[1] + t[2] % modulus;\n\t\t\t\t\tself.includes(d)\n\t\t\t\t}\n\t\t\t};\n\t\t\tlet g = Graph(v, e);\n\t\t\t/* g.vertexLabels := v % modulus; */\n\t\t\tg\n\t\t} {\n\t\t\tself.error('perfectDifferenceSetGraph')\n\t\t}\n\t}",
);
