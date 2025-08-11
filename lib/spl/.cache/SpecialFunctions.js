sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erfAbramowitzStegun",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = 0.47047;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.3480242, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.0958798, _t), _t);
        let _a3 = _asterisk_2(_asterisk_2(_asterisk_2(0.7478556, _t), _t), _t);
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(_plusSign_2(_a1, _a2), _a3),
            _exp_1(_negated_1(_squared_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negated_1(_erf_1(_negated_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>=(x, 0)), { let p = 0.47047; let t = /(1, (+(1, (*(p, x))))); let a1 = *(0.3480242, t); let a2 = *(*(-0.0958798, t), t); let a3 = *(*(*(0.7478556, t), t), t); -(1, (*((+(+(a1, a2), a3)), exp(negated(squared(x)))))) }, { negated(erf(negated(x))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erf",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSignEqualsSign_2(_x, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = 0.3275911;
        let _t = _solidus_2(1, _plusSign_2(1, _asterisk_2(_p, _x)));
        let _a1 = _asterisk_2(0.254829592, _t);
        let _a2 = _asterisk_2(_asterisk_2(-0.284496736, _t), _t);
        let _a3 = _asterisk_2(
          _asterisk_2(_asterisk_2(1.421413741, _t), _t),
          _t,
        );
        let _a4 = _asterisk_2(
          _asterisk_2(_asterisk_2(_asterisk_2(-1.453152027, _t), _t), _t),
          _t,
        );
        let _a5 = _asterisk_2(
          _asterisk_2(
            _asterisk_2(_asterisk_2(_asterisk_2(1.061405429, _t), _t), _t),
            _t,
          ),
          _t,
        );
        /* Statements */
        return _hyphenMinus_2(
          1,
          _asterisk_2(
            _plusSign_2(
              _plusSign_2(_plusSign_2(_plusSign_2(_a1, _a2), _a3), _a4),
              _a5,
            ),
            _exp_1(_negated_1(_squared_1(_x))),
          ),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _negated_1(_erf_1(_negated_1(_x)));
      }, []),
    );
  }, ["x"]),
  "{ :x | if((>=(x, 0)), { let p = 0.3275911; let t = /(1, (+(1, (*(p, x))))); let a1 = *(0.254829592, t); let a2 = *(*(-0.284496736, t), t); let a3 = *(*(*(1.421413741, t), t), t); let a4 = *(*(*(*(-1.453152027, t), t), t), t); let a5 = *(*(*(*(*(1.061405429, t), t), t), t), t); -(1, (*((+(+(+(+(a1, a2), a3), a4), a5)), exp(negated(squared(x)))))) }, { negated(erf(negated(x))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "erfc",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _erf_1(_x));
  }, ["x"]),
  "{ :x | -(1, erf(x)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnel",
  ["x", "k", "n"],
  sl.annotateFunction(function (_x, _k, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _k, _n";
      throw new Error(errorMessage);
    } /* Primitive */
    let x = _x;
    let n = _n;
    let f = (_k === "C") ? Math.cos : Math.sin;
    const pi = Math.PI;
    const dx = x / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const t = i * dx;
      const u = (i + 1) * dx;
      sum += (f(pi * (t ** 2) / 2) + f(pi * (u ** 2) / 2)) / 2 * dx;
    }
    return sum;
  }, ["x", "k", "n"]),
  "{ :x :k :n | <primitive: let x = _x;\n\t\tlet n = _n;\n\t\tlet f = (_k === 'C') ? Math.cos : Math.sin;\n\t\tconst pi = Math.PI;\n\t\tconst dx = x / n;\n\t\tlet sum = 0;\n\t\tfor (let i = 0; i < n; i++) {\n\t\t\tconst t = i * dx;\n\t\t\tconst u = (i + 1) * dx;\n\t\t\tsum += (f(pi * (t ** 2) / 2) + f(pi * (u ** 2) / 2)) / 2 * dx;\n\t\t}\n\t\treturn sum;>\n }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnelC",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _fresnel_3(_z, "C", 2000);
  }, ["z"]),
  "{ :z | fresnel(z, 'C', 2000) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "fresnelS",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _fresnel_3(_z, "S", 2000);
  }, ["z"]),
  "{ :z | fresnel(z, 'S', 2000) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "SpecialFunctions",
  "lambertW",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _hyphenMinus_1(_exp_1(-1));
    /* Statements */
    return _if_3(
      _lessThanSign_2(_x, _z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "lambertW: undefined");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _max_2(4, _ceiling_1(_solidus_2(_log10_1(_x), 3)));
        let _w = _solidus_2(_asterisk_2(3, _log_1(_plusSign_2(_x, 1))), 4);
        /* Statements */
        _timesRepeat_2(
          _k,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _e = _exp_1(_w);
            /* Statements */
            return _w = _hyphenMinus_2(
              _w,
              _solidus_2(
                _hyphenMinus_2(_asterisk_2(_w, _e), _x),
                _hyphenMinus_2(
                  _asterisk_2(_e, _plusSign_2(_w, 1)),
                  _solidus_2(
                    _asterisk_2(
                      _plusSign_2(_w, 2),
                      _hyphenMinus_2(_asterisk_2(_w, _e), _x),
                    ),
                    _plusSign_2(_asterisk_2(2, _w), 2),
                  ),
                ),
              ),
            );
          }, []),
        );
        return _w;
      }, []),
    );
  }, ["x"]),
  "{ :x | let z = -(exp(-1)); if((<(x, z)), { error(x,'lambertW: undefined') }, { let k = max(4, ceiling(/(log10(x), 3))); let w = /(*(3, log(+(x, 1))), 4); timesRepeat(k, { let e = exp(w); w := -(w, (/((-((*(w, e)), x)), (-((*(e, (+(w, 1)))), (/((*((+(w, 2)), (-((*(w, e)), x)))), (+((*(2, w)), 2))))))))) }); w }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SpecialFunctions",
  "riemannXi",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isZero_1(_z),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0.5;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _isSmallFloat_1(_z),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_z, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _riemannXi_1(_hyphenMinus_2(1, _z));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _asterisk_2(
                _asterisk_2(
                  _asterisk_2(_asterisk_2(0.5, _z), _hyphenMinus_2(_z, 1)),
                  _circumflexAccent_2(
                    _pi_1(1),
                    _asterisk_2(_hyphenMinus_2(0, _z), 0.5),
                  ),
                ),
                _zeta_1(_z),
              ),
              _gamma_1(_asterisk_2(0.5, _z)),
            );
          }, []),
        );
      }, []),
    );
  }, ["z"]),
  "{ :z | if(isZero(z), { 0.5 }, { if((&(isSmallFloat(z), { <(z, 0) })), { riemannXi(-(1, z)) }, { *(*(*(*(*(0.5, z), (-(z, 1))), (^(pi(1), (*((-(0, z)), 0.5))))), zeta(z)), gamma(*(0.5, z))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "SpecialFunctions",
  "zeta",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = 8;
    let _n = _rounded_1(
      _plusSign_2(
        _asterisk_2(1.3, _p),
        _asterisk_2(0.9, _abs_1(_imaginary_1(_s))),
      ),
    );
    let _e_1 = sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_2(
        _upOrDownTo_2(_k, _n),
        sl.annotateFunction(function (_j) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _j";
            throw new Error(errorMessage);
          } /* Statements */
          return _binomial_2(_n, _j);
        }, ["j"]),
      );
    }, ["k"]);
    let _a = _solidus_2(
      1,
      _hyphenMinus_2(1, _circumflexAccent_2(2, _hyphenMinus_2(1, _s))),
    );
    let _b = _sum_2(
      _upOrDownTo_2(1, _n),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _circumflexAccent_2(-1, _hyphenMinus_2(_k, 1)),
          _circumflexAccent_2(_k, _s),
        );
      }, ["k"]),
    );
    let _c = _solidus_2(1, _circumflexAccent_2(2, _n));
    let _d = _sum_2(
      _upOrDownTo_2(_plusSign_2(_n, 1), _asterisk_2(2, _n)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _asterisk_2(
            _circumflexAccent_2(-1, _hyphenMinus_2(_k, 1)),
            _e_1(_hyphenMinus_2(_k, _n)),
          ),
          _circumflexAccent_2(_k, _s),
        );
      }, ["k"]),
    );
    /* Statements */
    return _asterisk_2(_a, _plusSign_2(_b, _asterisk_2(_c, _d)));
  }, ["s"]),
  "{ :s | let p = 8; let n = rounded((+((*(1.3, p)), (*(0.9, abs(imaginary(s))))))); let e = { :k | sum(upOrDownTo(k, n), { :j | binomial(n, j) }) }; let a = /(1, (-(1, (^(2, (-(1, s))))))); let b = sum(upOrDownTo(1, n), { :k | /((^(-1, (-(k, 1)))), (^(k, s))) }); let c = /(1, (^(2, n))); let d = sum(upOrDownTo(+(n, 1), *(2, n)), { :k | /((*((^(-1, (-(k, 1)))), e(-(k, n)))), (^(k, s))) }); *(a, (+(b, (*(c, d))))) }",
);
