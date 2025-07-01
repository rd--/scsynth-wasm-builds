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
