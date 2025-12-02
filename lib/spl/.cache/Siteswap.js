sl.extendTypeOrTraitWithMethod(
  "List",
  "Siteswap",
  "isSiteswap",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _ampersand_2(
      _allSatisfy_2(_t, _isNonNegativeInteger_1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _size_1(_t);
        /* Statements */
        return _isDuplicateFree_1(
          _collect_2(
            _to_2(1, _n),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _percentSign_2(_plusSign_2(_i, _at_2(_t, _i)), _n);
            }, ["i"]),
          ),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t |\n\t\tt.allSatisfy(isNonNegativeInteger:/1) & {\n\t\t\tlet n = t.size;\n\t\t\t1.to(n).collect { :i |\n\t\t\t\t(i + t[i]) % n\n\t\t\t}.isDuplicateFree\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Siteswap",
  "siteswapState",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_t);
    /* Statements */
    return _withoutTrailingZeroes_1(
      _collect_2(
        _to_2(1, _max_1(_t)),
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Statements */
          return _boole_1(
            _anySatisfy_2(
              _to_2(1, _n),
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _k = _hyphenMinus_2(_plusSign_2(_j, _at_2(_t, _j)), _i);
                /* Statements */
                return _ampersand_2(
                  _greaterThanSign_2(_k, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _divisible_2(_k, _n);
                  }, []),
                );
              }, ["j"]),
            ),
          );
        }, ["i"]),
      ),
    );
  }, ["t"]),
  "{ :t |\n\t\tlet n = t.size;\n\t\t1.to(t.max).collect { :i |\n\t\t\t1.to(n).anySatisfy { :j |\n\t\t\t\tlet k = (j + t[j] - i);\n\t\t\t\t(k > 0) & { k.divisible(n) }\n\t\t\t}.boole\n\t\t}.withoutTrailingZeroes\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Siteswap",
  "siteswapStateAllowedTransitions",
  ["sigma"],
  sl.annotateFunction(function (_sigma) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _sigma";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_sigma);
    /* Statements */
    return _if_3(
      _equalsSign_2(_at_2(_sigma, 1), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return [0];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _select_2(
          _to_2(1, _n),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Statements */
            return _verticalLine_2(
              _equalsSign_2(_j, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_sigma, _plusSign_2(_j, 1)), 0);
              }, []),
            );
          }, ["j"]),
        );
      }, []),
    );
  }, ["sigma"]),
  "{ :sigma |\n\t\tlet n = sigma.size;\n\t\t(sigma[1] = 0).if {\n\t\t\t[0]\n\t\t} {\n\t\t\t1.to(n).select { :j |\n\t\t\t\t(j = n) | {\n\t\t\t\t\tsigma[j + 1] = 0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Siteswap",
  "siteswapStateTransition",
  ["sigma", "j"],
  sl.annotateFunction(function (_sigma, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _sigma, _j";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_sigma);
    let _m = _max_2(_n, _j);
    let _r = _List_2(_m, 0);
    /* Statements */
    _if_3(
      _equalsSign_2(_j, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _to_2(1, _hyphenMinus_2(_n, 1)),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(_r, _k, _at_2(_sigma, _plusSign_2(_k, 1)));
          }, ["k"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _atPut_3(_r, _j, 1);
        return _collect_2(
          _to_2(1, _hyphenMinus_2(_n, 1)),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Statements */
            return _ifTrue_2(
              _exclamationMarkEqualsSign_2(_k, _j),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _atPut_3(_r, _k, _at_2(_sigma, _plusSign_2(_k, 1)));
              }, []),
            );
          }, ["k"]),
        );
      }, []),
    );
    return _r;
  }, ["sigma", "j"]),
  "{ :sigma :j |\n\t\tlet n = sigma.size;\n\t\tlet m = n.max(j);\n\t\tlet r = List(m, 0);\n\t\t(j = 0).if {\n\t\t\t1.to(n - 1).collect { :k |\n\t\t\t\tr[k] := sigma[k + 1]\n\t\t\t}\n\t\t} {\n\t\t\tr[j] := 1;\n\t\t\t1.to(n - 1).collect { :k |\n\t\t\t\t(k != j).ifTrue {\n\t\t\t\t\tr[k] := sigma[k + 1]\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tr\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Siteswap",
  "siteswapStateAllowedTransitions",
  ["sigma", "h"],
  sl.annotateFunction(function (_sigma, _h) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _sigma, _h";
      throw new Error(errorMessage);
    } /* Statements */
    return _siteswapStateAllowedTransitions_1(
      _reverse_1(_integerDigits_3(_sigma, 2, _h)),
    );
  }, ["sigma", "h"]),
  "{ :sigma :h |\n\t\tsigma.integerDigits(2, h).reverse.siteswapStateAllowedTransitions\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Siteswap",
  "siteswapStateTransition",
  ["sigma", "j"],
  sl.annotateFunction(function (_sigma, _j) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _sigma, _j";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_j, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSignGreaterThanSign_2(_sigma, 1);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(
            _bitXor_2(_sigma, _lessThanSignLessThanSign_2(1, _j)),
            1,
          ),
          2,
        );
      }, []),
    );
  }, ["sigma", "j"]),
  "{ :sigma :j |\n\t\t(j = 0).if {\n\t\t\tsigma >> 1\n\t\t} {\n\t\t\tsigma.bitXor(1 << j) - 1 / 2\n\t\t}\n\t}",
);
