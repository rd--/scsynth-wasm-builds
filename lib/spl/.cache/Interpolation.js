sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "bilinearInterpolation",
  ["q11", "q21", "q12", "q22", "mu1", "mu2"],
  sl.annotateFunction(function (_q11, _q21, _q12, _q22, _mu1, _mu2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _q11, _q21, _q12, _q22, _mu1, _mu2";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolation_3(
      _linearInterpolation_3(_q11, _q21, _mu1),
      _linearInterpolation_3(_q12, _q22, _mu1),
      _mu2,
    );
  }, ["q11", "q21", "q12", "q22", "mu1", "mu2"]),
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 |\n\t\tlinearInterpolation(\n\t\t\tlinearInterpolation(q11, q21, mu1),\n\t\t\tlinearInterpolation(q12, q22, mu1),\n\t\t\tmu2\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "bilinearInterpolation",
  ["q11", "q21", "q12", "q22", "mu1", "mu2"],
  sl.annotateFunction(function (_q11, _q21, _q12, _q22, _mu1, _mu2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _q11, _q21, _q12, _q22, _mu1, _mu2";
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolation_3(
      _linearInterpolation_3(_q11, _q21, _mu1),
      _linearInterpolation_3(_q12, _q22, _mu1),
      _mu2,
    );
  }, ["q11", "q21", "q12", "q22", "mu1", "mu2"]),
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 |\n\t\tlinearInterpolation(\n\t\t\tlinearInterpolation(q11, q21, mu1),\n\t\t\tlinearInterpolation(q12, q22, mu1),\n\t\t\tmu2\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "trilinearInterpolation",
  [
    "c000",
    "c100",
    "c010",
    "c110",
    "c001",
    "c101",
    "c011",
    "c111",
    "mu1",
    "mu2",
    "mu3",
  ],
  sl.annotateFunction(
    function (
      _c000,
      _c100,
      _c010,
      _c110,
      _c001,
      _c101,
      _c011,
      _c111,
      _mu1,
      _mu2,
      _mu3,
    ) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _c000, _c100, _c010, _c110, _c001, _c101, _c011, _c111, _mu1, _mu2, _mu3";
        throw new Error(errorMessage);
      } /* Statements */
      return _linearInterpolation_3(
        _bilinearInterpolation_6(_c000, _c100, _c010, _c110, _mu1, _mu2),
        _bilinearInterpolation_6(_c001, _c101, _c011, _c111, _mu1, _mu2),
        _mu3,
      );
    },
    [
      "c000",
      "c100",
      "c010",
      "c110",
      "c001",
      "c101",
      "c011",
      "c111",
      "mu1",
      "mu2",
      "mu3",
    ],
  ),
  "{ :c000 :c100 :c010 :c110 :c001 :c101 :c011 :c111 :mu1 :mu2 :mu3 |\n\t\tlinearInterpolation(\n\t\t\tbilinearInterpolation(c000, c100, c010, c110, mu1, mu2),\n\t\t\tbilinearInterpolation(c001, c101, c011, c111, mu1, mu2),\n\t\t\tmu3\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "trilinearInterpolation",
  [
    "c000",
    "c100",
    "c010",
    "c110",
    "c001",
    "c101",
    "c011",
    "c111",
    "mu1",
    "mu2",
    "mu3",
  ],
  sl.annotateFunction(
    function (
      _c000,
      _c100,
      _c010,
      _c110,
      _c001,
      _c101,
      _c011,
      _c111,
      _mu1,
      _mu2,
      _mu3,
    ) {
      /* ArityCheck */
      if (arguments.length !== 11) {
        const errorMessage =
          "Arity: expected 11, _c000, _c100, _c010, _c110, _c001, _c101, _c011, _c111, _mu1, _mu2, _mu3";
        throw new Error(errorMessage);
      } /* Statements */
      return _linearInterpolation_3(
        _bilinearInterpolation_6(_c000, _c100, _c010, _c110, _mu1, _mu2),
        _bilinearInterpolation_6(_c001, _c101, _c011, _c111, _mu1, _mu2),
        _mu3,
      );
    },
    [
      "c000",
      "c100",
      "c010",
      "c110",
      "c001",
      "c101",
      "c011",
      "c111",
      "mu1",
      "mu2",
      "mu3",
    ],
  ),
  "{ :c000 :c100 :c010 :c110 :c001 :c101 :c011 :c111 :mu1 :mu2 :mu3 |\n\t\tlinearInterpolation(\n\t\t\tbilinearInterpolation(c000, c100, c010, c110, mu1, mu2),\n\t\t\tbilinearInterpolation(c001, c101, c011, c111, mu1, mu2),\n\t\t\tmu3\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _blend_4(
      _y1,
      _y2,
      _mu,
      sl.annotateFunction(function (_y1, _y2, _mu) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
      }, ["y1", "y2", "mu"]),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\ty1.blend(y2, mu) { :y1 :y2 :mu |\n\t\t\ty1 + (mu * (y2 - y1))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _blend_4(
      _y1,
      _y2,
      _mu,
      sl.annotateFunction(function (_y1, _y2, _mu) {
        /* ArityCheck */
        if (arguments.length !== 3) {
          const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
      }, ["y1", "y2", "mu"]),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\ty1.blend(y2, mu) { :y1 :y2 :mu |\n\t\t\ty1 + (mu * (y2 - y1))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu", "aBlock:/3"],
  sl.annotateFunction(function (_y1, _y2, _mu, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _y1, _y2, _mu, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_mu),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _mu,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _blend_4(_y1, _y2, _each, _aBlock_3);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_3(_y1, _y2, _mu);
      }, []),
    );
  }, ["y1", "y2", "mu", "aBlock:/3"]),
  "{ :y1 :y2 :mu :aBlock:/3 |\n\t\tmu.isList.if {\n\t\t\tmu.collect { :each |\n\t\t\t\ty1.blend(y2, each, aBlock:/3)\n\t\t\t}\n\t\t} {\n\t\t\taBlock(y1, y2, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu", "aBlock:/3"],
  sl.annotateFunction(function (_y1, _y2, _mu, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _y1, _y2, _mu, _aBlock_3";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isList_1(_mu),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _mu,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _blend_4(_y1, _y2, _each, _aBlock_3);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_3(_y1, _y2, _mu);
      }, []),
    );
  }, ["y1", "y2", "mu", "aBlock:/3"]),
  "{ :y1 :y2 :mu :aBlock:/3 |\n\t\tmu.isList.if {\n\t\t\tmu.collect { :each |\n\t\t\t\ty1.blend(y2, each, aBlock:/3)\n\t\t\t}\n\t\t} {\n\t\t\taBlock(y1, y2, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "catmullRomInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = _plusSign_2(
      _hyphenMinus_2(
        _plusSign_2(_asterisk_2(-0.5, _y0), _asterisk_2(1.5, _y1)),
        _asterisk_2(1.5, _y2),
      ),
      _asterisk_2(0.5, _y3),
    );
    let _a1 = _hyphenMinus_2(
      _plusSign_2(
        _hyphenMinus_2(_y0, _asterisk_2(2.5, _y1)),
        _asterisk_2(2, _y2),
      ),
      _asterisk_2(0.5, _y3),
    );
    let _a2 = _plusSign_2(_asterisk_2(-0.5, _y0), _asterisk_2(0.5, _y2));
    let _a3 = _y1;
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _mu3), _asterisk_2(_a1, _mu2)),
        _asterisk_2(_a2, _mu),
      ),
      _a3,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = (-0.5 * y0) + (1.5 * y1) - (1.5 * y2) + (0.5 * y3); /* -1 3 -3 1 */\n\t\tlet a1 = y0 - (2.5 * y1) + (2 * y2) - (0.5 * y3); /* 2 -5 4 -1 */\n\t\tlet a2 = (-0.5 * y0) + (0.5 * y2); /* -1 1 */\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "catmullRomInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = _plusSign_2(
      _hyphenMinus_2(
        _plusSign_2(_asterisk_2(-0.5, _y0), _asterisk_2(1.5, _y1)),
        _asterisk_2(1.5, _y2),
      ),
      _asterisk_2(0.5, _y3),
    );
    let _a1 = _hyphenMinus_2(
      _plusSign_2(
        _hyphenMinus_2(_y0, _asterisk_2(2.5, _y1)),
        _asterisk_2(2, _y2),
      ),
      _asterisk_2(0.5, _y3),
    );
    let _a2 = _plusSign_2(_asterisk_2(-0.5, _y0), _asterisk_2(0.5, _y2));
    let _a3 = _y1;
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _mu3), _asterisk_2(_a1, _mu2)),
        _asterisk_2(_a2, _mu),
      ),
      _a3,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = (-0.5 * y0) + (1.5 * y1) - (1.5 * y2) + (0.5 * y3); /* -1 3 -3 1 */\n\t\tlet a1 = y0 - (2.5 * y1) + (2 * y2) - (0.5 * y3); /* 2 -5 4 -1 */\n\t\tlet a2 = (-0.5 * y0) + (0.5 * y2); /* -1 1 */\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "cosineInterpolation",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _solidus_2(_hyphenMinus_2(1, _cos_1(_pi_1(_mu))), 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _x)),
      _asterisk_2(_y2, _x),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\tlet x = (1 - mu.pi.cos) / 2;\n\t\t(y1 * (1 - x)) + (y2 * x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cosineInterpolation",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _solidus_2(_hyphenMinus_2(1, _cos_1(_pi_1(_mu))), 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _x)),
      _asterisk_2(_y2, _x),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\tlet x = (1 - mu.pi.cos) / 2;\n\t\t(y1 * (1 - x)) + (y2 * x)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "cubicInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_y3, _y2), _y0), _y1);
    let _a1 = _hyphenMinus_2(_hyphenMinus_2(_y0, _y1), _a0);
    let _a2 = _hyphenMinus_2(_y2, _y0);
    let _a3 = _y1;
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _mu3), _asterisk_2(_a1, _mu2)),
        _asterisk_2(_a2, _mu),
      ),
      _a3,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = y3 - y2 - y0 + y1;\n\t\tlet a1 = y0 - y1 - a0;\n\t\tlet a2 = y2 - y0;\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cubicInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = _plusSign_2(_hyphenMinus_2(_hyphenMinus_2(_y3, _y2), _y0), _y1);
    let _a1 = _hyphenMinus_2(_hyphenMinus_2(_y0, _y1), _a0);
    let _a2 = _hyphenMinus_2(_y2, _y0);
    let _a3 = _y1;
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _mu3), _asterisk_2(_a1, _mu2)),
        _asterisk_2(_a2, _mu),
      ),
      _a3,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = y3 - y2 - y0 + y1;\n\t\tlet a1 = y0 - y1 - a0;\n\t\tlet a2 = y2 - y0;\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c0 = _y1;
    let _c1 = _asterisk_2(0.5, _hyphenMinus_2(_y2, _y0));
    let _c3 = _plusSign_2(
      _asterisk_2(1.5, _hyphenMinus_2(_y1, _y2)),
      _asterisk_2(0.5, _hyphenMinus_2(_y3, _y0)),
    );
    let _c2 = _hyphenMinus_2(_plusSign_2(_hyphenMinus_2(_y0, _y1), _c1), _c3);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _plusSign_2(
          _asterisk_2(_plusSign_2(_asterisk_2(_c3, _mu), _c2), _mu),
          _c1,
        ),
        _mu,
      ),
      _c0,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet c0 = y1;\n\t\tlet c1 = 0.5 * (y2 - y0);\n\t\tlet c3 = (1.5 * (y1 - y2)) + (0.5 * (y3 - y0));\n\t\tlet c2 = y0 - y1 + c1 - c3;\n\t\t((c3 * mu + c2) * mu + c1) * mu + c0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c0 = _y1;
    let _c1 = _asterisk_2(0.5, _hyphenMinus_2(_y2, _y0));
    let _c3 = _plusSign_2(
      _asterisk_2(1.5, _hyphenMinus_2(_y1, _y2)),
      _asterisk_2(0.5, _hyphenMinus_2(_y3, _y0)),
    );
    let _c2 = _hyphenMinus_2(_plusSign_2(_hyphenMinus_2(_y0, _y1), _c1), _c3);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(
        _plusSign_2(
          _asterisk_2(_plusSign_2(_asterisk_2(_c3, _mu), _c2), _mu),
          _c1,
        ),
        _mu,
      ),
      _c0,
    );
  }, ["y0", "y1", "y2", "y3", "mu"]),
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet c0 = y1;\n\t\tlet c1 = 0.5 * (y2 - y0);\n\t\tlet c3 = (1.5 * (y1 - y2)) + (0.5 * (y3 - y0));\n\t\tlet c2 = y0 - y1 + c1 - c3;\n\t\t((c3 * mu + c2) * mu + c1) * mu + c0\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["tension", "bias"],
  sl.annotateFunction(function (_tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tension, _bias";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _hermiteInterpolation_7(_y0, _y1, _y2, _y3, _mu, _tension, _bias);
    }, ["y0", "y1", "y2", "y3", "mu"]);
  }, ["tension", "bias"]),
  "{ :tension :bias |\n\t\t{ :y0 :y1 :y2 :y3 :mu |\n\t\t\thermiteInterpolation(y0, y1, y2, y3, mu, tension, bias)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["tension", "bias"],
  sl.annotateFunction(function (_tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tension, _bias";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _hermiteInterpolation_7(_y0, _y1, _y2, _y3, _mu, _tension, _bias);
    }, ["y0", "y1", "y2", "y3", "mu"]);
  }, ["tension", "bias"]),
  "{ :tension :bias |\n\t\t{ :y0 :y1 :y2 :y3 :mu |\n\t\t\thermiteInterpolation(y0, y1, y2, y3, mu, tension, bias)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu", "tension", "bias"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu, _tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _y0, _y1, _y2, _y3, _mu, _tension, _bias";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    let _m0 = _plusSign_2(
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y1, _y0), _plusSign_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y2, _y1), _hyphenMinus_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
    );
    let _m1 = _plusSign_2(
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y2, _y1), _plusSign_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y3, _y2), _hyphenMinus_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
    );
    let _a0 = _plusSign_2(
      _hyphenMinus_2(_asterisk_2(2, _mu3), _asterisk_2(3, _mu2)),
      1,
    );
    let _a1 = _plusSign_2(_hyphenMinus_2(_mu3, _asterisk_2(2, _mu2)), _mu);
    let _a2 = _hyphenMinus_2(_mu3, _mu2);
    let _a3 = _plusSign_2(_asterisk_2(-2, _mu3), _asterisk_2(3, _mu2));
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _y1), _asterisk_2(_a1, _m0)),
        _asterisk_2(_a2, _m1),
      ),
      _asterisk_2(_a3, _y2),
    );
  }, ["y0", "y1", "y2", "y3", "mu", "tension", "bias"]),
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias |\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\tlet m0 = ((y1 - y0) * (1 + bias) * (1 - tension) / 2) + ((y2 - y1) * (1 - bias) * (1 - tension) / 2);\n\t\tlet m1 = ((y2 - y1) * (1 + bias) * (1 - tension) / 2) + ((y3 - y2) * (1 - bias) * (1 - tension) / 2);\n\t\tlet a0 = (2 * mu3) - (3 * mu2) + 1;\n\t\tlet a1 = mu3 - (2 * mu2) + mu;\n\t\tlet a2 = mu3 - mu2;\n\t\tlet a3 = (-2 * mu3) + (3 * mu2);\n\t\t(a0 * y1) + (a1 * m0) + (a2 * m1) + (a3 * y2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu", "tension", "bias"],
  sl.annotateFunction(function (_y0, _y1, _y2, _y3, _mu, _tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _y0, _y1, _y2, _y3, _mu, _tension, _bias";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _mu2 = _asterisk_2(_mu, _mu);
    let _mu3 = _asterisk_2(_mu2, _mu);
    let _m0 = _plusSign_2(
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y1, _y0), _plusSign_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y2, _y1), _hyphenMinus_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
    );
    let _m1 = _plusSign_2(
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y2, _y1), _plusSign_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
      _solidus_2(
        _asterisk_2(
          _asterisk_2(_hyphenMinus_2(_y3, _y2), _hyphenMinus_2(1, _bias)),
          _hyphenMinus_2(1, _tension),
        ),
        2,
      ),
    );
    let _a0 = _plusSign_2(
      _hyphenMinus_2(_asterisk_2(2, _mu3), _asterisk_2(3, _mu2)),
      1,
    );
    let _a1 = _plusSign_2(_hyphenMinus_2(_mu3, _asterisk_2(2, _mu2)), _mu);
    let _a2 = _hyphenMinus_2(_mu3, _mu2);
    let _a3 = _plusSign_2(_asterisk_2(-2, _mu3), _asterisk_2(3, _mu2));
    /* Statements */
    return _plusSign_2(
      _plusSign_2(
        _plusSign_2(_asterisk_2(_a0, _y1), _asterisk_2(_a1, _m0)),
        _asterisk_2(_a2, _m1),
      ),
      _asterisk_2(_a3, _y2),
    );
  }, ["y0", "y1", "y2", "y3", "mu", "tension", "bias"]),
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias |\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\tlet m0 = ((y1 - y0) * (1 + bias) * (1 - tension) / 2) + ((y2 - y1) * (1 - bias) * (1 - tension) / 2);\n\t\tlet m1 = ((y2 - y1) * (1 + bias) * (1 - tension) / 2) + ((y3 - y2) * (1 - bias) * (1 - tension) / 2);\n\t\tlet a0 = (2 * mu3) - (3 * mu2) + 1;\n\t\tlet a1 = mu3 - (2 * mu2) + mu;\n\t\tlet a2 = mu3 - mu2;\n\t\tlet a3 = (-2 * mu3) + (3 * mu2);\n\t\t(a0 * y1) + (a1 * m0) + (a2 * m1) + (a3 * y2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "linearInterpolation",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _mu)),
      _asterisk_2(_y2, _mu),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\t(y1 * (1 - mu)) + (y2 * mu)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "linearInterpolation",
  ["y1", "y2", "mu"],
  sl.annotateFunction(function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _mu)),
      _asterisk_2(_y2, _mu),
    );
  }, ["y1", "y2", "mu"]),
  "{ :y1 :y2 :mu |\n\t\t(y1 * (1 - mu)) + (y2 * mu)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "akimaInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    let _differences = _List_1(_n);
    let _weights = _List_1(_n);
    let _firstDerivative = _List_1(_plusSign_2(_n, 1));
    let _epsilon = _smallFloatEpsilon_1(1);
    let _differentiateThreePoint_4 = sl.annotateFunction(
      function (_i, _j1, _j2, _j3) {
        /* ArityCheck */
        if (arguments.length !== 4) {
          const errorMessage = "Arity: expected 4, _i, _j1, _j2, _j3";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x0 = _at_2(_y, _j1);
        let _x1 = _at_2(_y, _j2);
        let _x2 = _at_2(_y, _j3);
        let _t = _hyphenMinus_2(_at_2(_x, _i), _at_2(_x, _j1));
        let _t1 = _hyphenMinus_2(_at_2(_x, _j2), _at_2(_x, _j1));
        let _t2 = _hyphenMinus_2(_at_2(_x, _j3), _at_2(_x, _j1));
        let _a = _solidus_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_x2, _x0),
            _asterisk_2(_solidus_2(_t2, _t1), _hyphenMinus_2(_x1, _x0)),
          ),
          _hyphenMinus_2(_asterisk_2(_t2, _t2), _asterisk_2(_t1, _t2)),
        );
        let _b = _solidus_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_x1, _x0),
            _asterisk_2(_asterisk_2(_a, _t1), _t1),
          ),
          _t1,
        );
        /* Statements */
        return _plusSign_2(_asterisk_2(_asterisk_2(2, _a), _t), _b);
      },
      ["i", "j1", "j2", "j3"],
    );
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 5);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _differences,
          _i,
          _solidus_2(
            _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i)),
            _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i)),
          ),
        );
      }, ["i"]),
    );
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _weights,
          _i,
          _abs_1(
            _hyphenMinus_2(
              _at_2(_differences, _i),
              _at_2(_differences, _hyphenMinus_2(_i, 1)),
            ),
          ),
        );
      }, ["i"]),
    );
    _toDo_3(
      3,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _wP = _at_2(_weights, _plusSign_2(_i, 1));
        let _wM = _at_2(_weights, _hyphenMinus_2(_i, 1));
        /* Statements */
        return _if_3(
          _ampersand_2(
            _lessThanSign_2(_abs_1(_wP), _epsilon),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_abs_1(_wM), _epsilon);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _xv = _at_2(_x, _i);
            let _xvP = _at_2(_x, _plusSign_2(_i, 1));
            let _xvM = _at_2(_x, _hyphenMinus_2(_i, 1));
            /* Statements */
            return _atPut_3(
              _firstDerivative,
              _i,
              _solidus_2(
                _plusSign_2(
                  _asterisk_2(
                    _hyphenMinus_2(_xvP, _xv),
                    _at_2(_differences, _hyphenMinus_2(_i, 1)),
                  ),
                  _asterisk_2(
                    _hyphenMinus_2(_xv, _xvM),
                    _at_2(_differences, _i),
                  ),
                ),
                _hyphenMinus_2(_xvP, _xvM),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _firstDerivative,
              _i,
              _solidus_2(
                _plusSign_2(
                  _asterisk_2(_wP, _at_2(_differences, _hyphenMinus_2(_i, 1))),
                  _asterisk_2(_wM, _at_2(_differences, _i)),
                ),
                _plusSign_2(_wP, _wM),
              ),
            );
          }, []),
        );
      }, ["i"]),
    );
    _atPut_3(_firstDerivative, 1, _differentiateThreePoint_4(1, 1, 2, 3));
    _atPut_3(_firstDerivative, 2, _differentiateThreePoint_4(2, 1, 2, 3));
    _atPut_3(
      _firstDerivative,
      _n,
      _differentiateThreePoint_4(
        _n,
        _hyphenMinus_2(_n, 1),
        _n,
        _plusSign_2(_n, 1),
      ),
    );
    _atPut_3(
      _firstDerivative,
      _plusSign_2(_n, 1),
      _differentiateThreePoint_4(
        _plusSign_2(_n, 1),
        _hyphenMinus_2(_n, 1),
        _n,
        _plusSign_2(_n, 1),
      ),
    );
    return _hermiteInterpolatorCoefficientList_3(_x, _y, _firstDerivative);
  }, ["x", "y"]),
  "{ :x :y |\n\t\t/* https://github.com/chdh/commons-math-interpolation */\n\t\tlet n = x.size - 1;\n\t\tlet differences = List(n);\n\t\tlet weights = List(n);\n\t\tlet firstDerivative = List(n + 1);\n\t\tlet epsilon = 1.smallFloatEpsilon;\n\t\tlet differentiateThreePoint = { :i :j1 :j2 :j3 |\n\t\t\tlet x0 = y[j1];\n\t\t\tlet x1 = y[j2];\n\t\t\tlet x2 = y[j3];\n\t\t\tlet t = x[i] - x[j1];\n\t\t\tlet t1 = x[j2] - x[j1];\n\t\t\tlet t2 = x[j3] - x[j1];\n\t\t\tlet a = (x2 - x0 - (t2 / t1 * (x1 - x0))) / ((t2 * t2) - (t1 * t2));\n\t\t\tlet b = (x1 - x0 - (a * t1 * t1)) / t1;\n\t\t\t(2 * a * t) + b\n\t\t};\n\t\tassertIsValidInterpolatorData(x, y, 5);\n\t\t1.toDo(n) { :i |\n\t\t\tdifferences[i] := (y[i + 1] - y[i]) / (x[i + 1] - x[i])\n\t\t};\n\t\t2.toDo(n) { :i |\n\t\t\tweights[i] := abs(differences[i] - differences[i - 1])\n\t\t};\n\t\t3.toDo(n - 1) { :i |\n\t\t\tlet wP = weights[i + 1];\n\t\t\tlet wM = weights[i - 1];\n\t\t\t(abs(wP) < epsilon & { abs(wM) < epsilon }).if {\n\t\t\t\tlet xv = x[i];\n\t\t\t\tlet xvP = x[i + 1];\n\t\t\t\tlet xvM = x[i - 1];\n\t\t\t\tfirstDerivative[i] := (((xvP - xv) * differences[i - 1]) + (((xv - xvM) * differences[i])) / (xvP - xvM))\n\t\t\t} {\n\t\t\t\tfirstDerivative[i] := ((wP * differences[i - 1]) + (wM * differences[i])) / (wP + wM)\n\t\t\t}\n\t\t};\n\t\tfirstDerivative[1] := differentiateThreePoint(1, 1, 2, 3);\n\t\tfirstDerivative[2] := differentiateThreePoint(2, 1, 2, 3);\n\t\tfirstDerivative[n] := differentiateThreePoint(n, n - 1, n, n + 1);\n\t\tfirstDerivative[n + 1] := differentiateThreePoint(n + 1, n - 1, n, n + 1);\n\t\thermiteInterpolatorCoefficientList(x, y, firstDerivative)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "akimaInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    let _differences = _List_1(_n);
    let _weights = _List_1(_n);
    let _firstDerivative = _List_1(_plusSign_2(_n, 1));
    let _epsilon = _smallFloatEpsilon_1(1);
    let _differentiateThreePoint_4 = sl.annotateFunction(
      function (_i, _j1, _j2, _j3) {
        /* ArityCheck */
        if (arguments.length !== 4) {
          const errorMessage = "Arity: expected 4, _i, _j1, _j2, _j3";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x0 = _at_2(_y, _j1);
        let _x1 = _at_2(_y, _j2);
        let _x2 = _at_2(_y, _j3);
        let _t = _hyphenMinus_2(_at_2(_x, _i), _at_2(_x, _j1));
        let _t1 = _hyphenMinus_2(_at_2(_x, _j2), _at_2(_x, _j1));
        let _t2 = _hyphenMinus_2(_at_2(_x, _j3), _at_2(_x, _j1));
        let _a = _solidus_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_x2, _x0),
            _asterisk_2(_solidus_2(_t2, _t1), _hyphenMinus_2(_x1, _x0)),
          ),
          _hyphenMinus_2(_asterisk_2(_t2, _t2), _asterisk_2(_t1, _t2)),
        );
        let _b = _solidus_2(
          _hyphenMinus_2(
            _hyphenMinus_2(_x1, _x0),
            _asterisk_2(_asterisk_2(_a, _t1), _t1),
          ),
          _t1,
        );
        /* Statements */
        return _plusSign_2(_asterisk_2(_asterisk_2(2, _a), _t), _b);
      },
      ["i", "j1", "j2", "j3"],
    );
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 5);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _differences,
          _i,
          _solidus_2(
            _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i)),
            _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i)),
          ),
        );
      }, ["i"]),
    );
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _weights,
          _i,
          _abs_1(
            _hyphenMinus_2(
              _at_2(_differences, _i),
              _at_2(_differences, _hyphenMinus_2(_i, 1)),
            ),
          ),
        );
      }, ["i"]),
    );
    _toDo_3(
      3,
      _hyphenMinus_2(_n, 1),
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _wP = _at_2(_weights, _plusSign_2(_i, 1));
        let _wM = _at_2(_weights, _hyphenMinus_2(_i, 1));
        /* Statements */
        return _if_3(
          _ampersand_2(
            _lessThanSign_2(_abs_1(_wP), _epsilon),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSign_2(_abs_1(_wM), _epsilon);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _xv = _at_2(_x, _i);
            let _xvP = _at_2(_x, _plusSign_2(_i, 1));
            let _xvM = _at_2(_x, _hyphenMinus_2(_i, 1));
            /* Statements */
            return _atPut_3(
              _firstDerivative,
              _i,
              _solidus_2(
                _plusSign_2(
                  _asterisk_2(
                    _hyphenMinus_2(_xvP, _xv),
                    _at_2(_differences, _hyphenMinus_2(_i, 1)),
                  ),
                  _asterisk_2(
                    _hyphenMinus_2(_xv, _xvM),
                    _at_2(_differences, _i),
                  ),
                ),
                _hyphenMinus_2(_xvP, _xvM),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _atPut_3(
              _firstDerivative,
              _i,
              _solidus_2(
                _plusSign_2(
                  _asterisk_2(_wP, _at_2(_differences, _hyphenMinus_2(_i, 1))),
                  _asterisk_2(_wM, _at_2(_differences, _i)),
                ),
                _plusSign_2(_wP, _wM),
              ),
            );
          }, []),
        );
      }, ["i"]),
    );
    _atPut_3(_firstDerivative, 1, _differentiateThreePoint_4(1, 1, 2, 3));
    _atPut_3(_firstDerivative, 2, _differentiateThreePoint_4(2, 1, 2, 3));
    _atPut_3(
      _firstDerivative,
      _n,
      _differentiateThreePoint_4(
        _n,
        _hyphenMinus_2(_n, 1),
        _n,
        _plusSign_2(_n, 1),
      ),
    );
    _atPut_3(
      _firstDerivative,
      _plusSign_2(_n, 1),
      _differentiateThreePoint_4(
        _plusSign_2(_n, 1),
        _hyphenMinus_2(_n, 1),
        _n,
        _plusSign_2(_n, 1),
      ),
    );
    return _hermiteInterpolatorCoefficientList_3(_x, _y, _firstDerivative);
  }, ["x", "y"]),
  "{ :x :y |\n\t\t/* https://github.com/chdh/commons-math-interpolation */\n\t\tlet n = x.size - 1;\n\t\tlet differences = List(n);\n\t\tlet weights = List(n);\n\t\tlet firstDerivative = List(n + 1);\n\t\tlet epsilon = 1.smallFloatEpsilon;\n\t\tlet differentiateThreePoint = { :i :j1 :j2 :j3 |\n\t\t\tlet x0 = y[j1];\n\t\t\tlet x1 = y[j2];\n\t\t\tlet x2 = y[j3];\n\t\t\tlet t = x[i] - x[j1];\n\t\t\tlet t1 = x[j2] - x[j1];\n\t\t\tlet t2 = x[j3] - x[j1];\n\t\t\tlet a = (x2 - x0 - (t2 / t1 * (x1 - x0))) / ((t2 * t2) - (t1 * t2));\n\t\t\tlet b = (x1 - x0 - (a * t1 * t1)) / t1;\n\t\t\t(2 * a * t) + b\n\t\t};\n\t\tassertIsValidInterpolatorData(x, y, 5);\n\t\t1.toDo(n) { :i |\n\t\t\tdifferences[i] := (y[i + 1] - y[i]) / (x[i + 1] - x[i])\n\t\t};\n\t\t2.toDo(n) { :i |\n\t\t\tweights[i] := abs(differences[i] - differences[i - 1])\n\t\t};\n\t\t3.toDo(n - 1) { :i |\n\t\t\tlet wP = weights[i + 1];\n\t\t\tlet wM = weights[i - 1];\n\t\t\t(abs(wP) < epsilon & { abs(wM) < epsilon }).if {\n\t\t\t\tlet xv = x[i];\n\t\t\t\tlet xvP = x[i + 1];\n\t\t\t\tlet xvM = x[i - 1];\n\t\t\t\tfirstDerivative[i] := (((xvP - xv) * differences[i - 1]) + (((xv - xvM) * differences[i])) / (xvP - xvM))\n\t\t\t} {\n\t\t\t\tfirstDerivative[i] := ((wP * differences[i - 1]) + (wM * differences[i])) / (wP + wM)\n\t\t\t}\n\t\t};\n\t\tfirstDerivative[1] := differentiateThreePoint(1, 1, 2, 3);\n\t\tfirstDerivative[2] := differentiateThreePoint(2, 1, 2, 3);\n\t\tfirstDerivative[n] := differentiateThreePoint(n, n - 1, n, n + 1);\n\t\tfirstDerivative[n + 1] := differentiateThreePoint(n + 1, n - 1, n, n + 1);\n\t\thermiteInterpolatorCoefficientList(x, y, firstDerivative)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "akimaInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _akimaInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.akimaInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "akimaInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _akimaInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.akimaInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "assertIsValidInterpolatorData",
  ["x", "y", "n"],
  sl.annotateFunction(function (_x, _y, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_x), _size_1(_y)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: dimension mismatch");
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_size_1(_x), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: number of points is too small");
      }, []),
    );
    return _ifFalse_2(
      _isStrictlyIncreasing_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: x not strictly increasing");
      }, []),
    );
  }, ["x", "y", "n"]),
  "{ :x :y :n |\n\t\t(x.size != y.size).ifTrue {\n\t\t\tx.error('Interpolator: dimension mismatch')\n\t\t};\n\t\t(x.size < n).ifTrue {\n\t\t\tx.error('Interpolator: number of points is too small')\n\t\t};\n\t\tx.isStrictlyIncreasing.ifFalse {\n\t\t\tx.error('Interpolator: x not strictly increasing')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "assertIsValidInterpolatorData",
  ["x", "y", "n"],
  sl.annotateFunction(function (_x, _y, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _n";
      throw new Error(errorMessage);
    } /* Statements */
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_x), _size_1(_y)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: dimension mismatch");
      }, []),
    );
    _ifTrue_2(
      _lessThanSign_2(_size_1(_x), _n),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: number of points is too small");
      }, []),
    );
    return _ifFalse_2(
      _isStrictlyIncreasing_1(_x),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_x, "Interpolator: x not strictly increasing");
      }, []),
    );
  }, ["x", "y", "n"]),
  "{ :x :y :n |\n\t\t(x.size != y.size).ifTrue {\n\t\t\tx.error('Interpolator: dimension mismatch')\n\t\t};\n\t\t(x.size < n).ifTrue {\n\t\t\tx.error('Interpolator: number of points is too small')\n\t\t};\n\t\tx.isStrictlyIncreasing.ifFalse {\n\t\t\tx.error('Interpolator: x not strictly increasing')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cubicSplineInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    let _h = _List_1(_n);
    let _mu = _List_1(_n);
    let _z = _List_1(_plusSign_2(_n, 1));
    let _b = _List_1(_n);
    let _c = _List_1(_plusSign_2(_n, 1));
    let _d = _List_1(_n);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 3);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _h,
          _i,
          _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i)),
        );
      }, ["i"]),
    );
    _atPut_3(_mu, 1, 0);
    _atPut_3(_z, 1, 0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _g = _hyphenMinus_2(
          _asterisk_2(
            2,
            _hyphenMinus_2(
              _at_2(_x, _plusSign_2(_i, 1)),
              _at_2(_x, _hyphenMinus_2(_i, 1)),
            ),
          ),
          _asterisk_2(
            _at_2(_h, _hyphenMinus_2(_i, 1)),
            _at_2(_mu, _hyphenMinus_2(_i, 1)),
          ),
        );
        /* Statements */
        _atPut_3(_mu, _i, _solidus_2(_at_2(_h, _i), _g));
        return _atPut_3(
          _z,
          _i,
          _solidus_2(
            _hyphenMinus_2(
              _solidus_2(
                _asterisk_2(
                  3,
                  _plusSign_2(
                    _hyphenMinus_2(
                      _asterisk_2(
                        _at_2(_y, _plusSign_2(_i, 1)),
                        _at_2(_h, _hyphenMinus_2(_i, 1)),
                      ),
                      _asterisk_2(
                        _at_2(_y, _i),
                        _hyphenMinus_2(
                          _at_2(_x, _plusSign_2(_i, 1)),
                          _at_2(_x, _hyphenMinus_2(_i, 1)),
                        ),
                      ),
                    ),
                    _asterisk_2(
                      _at_2(_y, _hyphenMinus_2(_i, 1)),
                      _at_2(_h, _i),
                    ),
                  ),
                ),
                _asterisk_2(_at_2(_h, _hyphenMinus_2(_i, 1)), _at_2(_h, _i)),
              ),
              _asterisk_2(
                _at_2(_h, _hyphenMinus_2(_i, 1)),
                _at_2(_z, _hyphenMinus_2(_i, 1)),
              ),
            ),
            _g,
          ),
        );
      }, ["i"]),
    );
    _atPut_3(_z, _plusSign_2(_n, 1), 0);
    _atPut_3(_c, _plusSign_2(_n, 1), 0);
    _downToDo_3(
      _n,
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _dx = _at_2(_h, _i);
        let _dy = _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i));
        /* Statements */
        _atPut_3(
          _c,
          _i,
          _hyphenMinus_2(
            _at_2(_z, _i),
            _asterisk_2(_at_2(_mu, _i), _at_2(_c, _plusSign_2(_i, 1))),
          ),
        );
        _atPut_3(
          _b,
          _i,
          _hyphenMinus_2(
            _solidus_2(_dy, _dx),
            _solidus_2(
              _asterisk_2(
                _dx,
                _plusSign_2(
                  _at_2(_c, _plusSign_2(_i, 1)),
                  _asterisk_2(2, _at_2(_c, _i)),
                ),
              ),
              3,
            ),
          ),
        );
        return _atPut_3(
          _d,
          _i,
          _solidus_2(
            _hyphenMinus_2(_at_2(_c, _plusSign_2(_i, 1)), _at_2(_c, _i)),
            _asterisk_2(3, _dx),
          ),
        );
      }, ["i"]),
    );
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _withoutTrailing_2([
          _at_2(_y, _i),
          _at_2(_b, _i),
          _at_2(_c, _i),
          _at_2(_d, _i),
        ], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t/* https://github.com/chdh/commons-math-interpolation */\n\t\tlet n = x.size - 1;\n\t\tlet h = List(n);\n\t\tlet mu = List(n);\n\t\tlet z = List(n + 1);\n\t\tlet b = List(n);\n\t\tlet c = List(n + 1);\n\t\tlet d = List(n);\n\t\tassertIsValidInterpolatorData(x, y, 3);\n\t\t1.toDo(n) { :i |\n\t\t\th[i] := x[i + 1] - x[i]\n\t\t};\n\t\tmu[1] := 0;\n\t\tz[1] := 0;\n\t\t2.toDo(n) { :i |\n\t\t\tlet g = (2 * (x[i + 1] - x[i - 1])) - (h[i - 1] * mu[i - 1]);\n\t\t\tmu[i] := h[i] / g;\n\t\t\tz[i] := (3 * ((y[i + 1] * h[i - 1]) - (y[i] * (x[i + 1] - x[i - 1])) + (y[i - 1] * h[i])) / (h[i - 1] * h[i]) - (h[i - 1] * z[i - 1])) / g\n\t\t};\n\t\tz[n + 1] := 0;\n\t\tc[n + 1] := 0;\n\t\tn.downToDo(1) { :i |\n\t\t\tlet dx = h[i];\n\t\t\tlet dy = y[i + 1] - y[i];\n\t\t\tc[i] := z[i] - (mu[i] * c[i + 1]);\n\t\t\tb[i] := (dy / dx) - (dx * (c[i + 1] + (2 * c[i])) / 3);\n\t\t\td[i] := (c[i + 1] - c[i]) / (3 * dx)\n\t\t};\n\t\t1.toCollect(n) { :i |\n\t\t\t[y[i], b[i], c[i], d[i]].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "cubicSplineInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    let _h = _List_1(_n);
    let _mu = _List_1(_n);
    let _z = _List_1(_plusSign_2(_n, 1));
    let _b = _List_1(_n);
    let _c = _List_1(_plusSign_2(_n, 1));
    let _d = _List_1(_n);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 3);
    _toDo_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _h,
          _i,
          _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i)),
        );
      }, ["i"]),
    );
    _atPut_3(_mu, 1, 0);
    _atPut_3(_z, 1, 0);
    _toDo_3(
      2,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _g = _hyphenMinus_2(
          _asterisk_2(
            2,
            _hyphenMinus_2(
              _at_2(_x, _plusSign_2(_i, 1)),
              _at_2(_x, _hyphenMinus_2(_i, 1)),
            ),
          ),
          _asterisk_2(
            _at_2(_h, _hyphenMinus_2(_i, 1)),
            _at_2(_mu, _hyphenMinus_2(_i, 1)),
          ),
        );
        /* Statements */
        _atPut_3(_mu, _i, _solidus_2(_at_2(_h, _i), _g));
        return _atPut_3(
          _z,
          _i,
          _solidus_2(
            _hyphenMinus_2(
              _solidus_2(
                _asterisk_2(
                  3,
                  _plusSign_2(
                    _hyphenMinus_2(
                      _asterisk_2(
                        _at_2(_y, _plusSign_2(_i, 1)),
                        _at_2(_h, _hyphenMinus_2(_i, 1)),
                      ),
                      _asterisk_2(
                        _at_2(_y, _i),
                        _hyphenMinus_2(
                          _at_2(_x, _plusSign_2(_i, 1)),
                          _at_2(_x, _hyphenMinus_2(_i, 1)),
                        ),
                      ),
                    ),
                    _asterisk_2(
                      _at_2(_y, _hyphenMinus_2(_i, 1)),
                      _at_2(_h, _i),
                    ),
                  ),
                ),
                _asterisk_2(_at_2(_h, _hyphenMinus_2(_i, 1)), _at_2(_h, _i)),
              ),
              _asterisk_2(
                _at_2(_h, _hyphenMinus_2(_i, 1)),
                _at_2(_z, _hyphenMinus_2(_i, 1)),
              ),
            ),
            _g,
          ),
        );
      }, ["i"]),
    );
    _atPut_3(_z, _plusSign_2(_n, 1), 0);
    _atPut_3(_c, _plusSign_2(_n, 1), 0);
    _downToDo_3(
      _n,
      1,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _dx = _at_2(_h, _i);
        let _dy = _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i));
        /* Statements */
        _atPut_3(
          _c,
          _i,
          _hyphenMinus_2(
            _at_2(_z, _i),
            _asterisk_2(_at_2(_mu, _i), _at_2(_c, _plusSign_2(_i, 1))),
          ),
        );
        _atPut_3(
          _b,
          _i,
          _hyphenMinus_2(
            _solidus_2(_dy, _dx),
            _solidus_2(
              _asterisk_2(
                _dx,
                _plusSign_2(
                  _at_2(_c, _plusSign_2(_i, 1)),
                  _asterisk_2(2, _at_2(_c, _i)),
                ),
              ),
              3,
            ),
          ),
        );
        return _atPut_3(
          _d,
          _i,
          _solidus_2(
            _hyphenMinus_2(_at_2(_c, _plusSign_2(_i, 1)), _at_2(_c, _i)),
            _asterisk_2(3, _dx),
          ),
        );
      }, ["i"]),
    );
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _withoutTrailing_2([
          _at_2(_y, _i),
          _at_2(_b, _i),
          _at_2(_c, _i),
          _at_2(_d, _i),
        ], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t/* https://github.com/chdh/commons-math-interpolation */\n\t\tlet n = x.size - 1;\n\t\tlet h = List(n);\n\t\tlet mu = List(n);\n\t\tlet z = List(n + 1);\n\t\tlet b = List(n);\n\t\tlet c = List(n + 1);\n\t\tlet d = List(n);\n\t\tassertIsValidInterpolatorData(x, y, 3);\n\t\t1.toDo(n) { :i |\n\t\t\th[i] := x[i + 1] - x[i]\n\t\t};\n\t\tmu[1] := 0;\n\t\tz[1] := 0;\n\t\t2.toDo(n) { :i |\n\t\t\tlet g = (2 * (x[i + 1] - x[i - 1])) - (h[i - 1] * mu[i - 1]);\n\t\t\tmu[i] := h[i] / g;\n\t\t\tz[i] := (3 * ((y[i + 1] * h[i - 1]) - (y[i] * (x[i + 1] - x[i - 1])) + (y[i - 1] * h[i])) / (h[i - 1] * h[i]) - (h[i - 1] * z[i - 1])) / g\n\t\t};\n\t\tz[n + 1] := 0;\n\t\tc[n + 1] := 0;\n\t\tn.downToDo(1) { :i |\n\t\t\tlet dx = h[i];\n\t\t\tlet dy = y[i + 1] - y[i];\n\t\t\tc[i] := z[i] - (mu[i] * c[i + 1]);\n\t\t\tb[i] := (dy / dx) - (dx * (c[i + 1] + (2 * c[i])) / 3);\n\t\t\td[i] := (c[i + 1] - c[i]) / (3 * dx)\n\t\t};\n\t\t1.toCollect(n) { :i |\n\t\t\t[y[i], b[i], c[i], d[i]].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cubicSplineInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _cubicSplineInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.cubicSplineInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "cubicSplineInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _cubicSplineInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.cubicSplineInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "dividedDifferences",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_m);
    let _p = [_collect_2(_m, _second_1)];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_hyphenMinus_2(_k, _i), 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _size_1(_p);
        let _z = [];
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_k, _i),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _hyphenMinus_2(
              _at_2(_at_2(_p, _e), _plusSign_2(_j, 1)),
              _at_2(_at_2(_p, _e), _j),
            );
            let _b = _hyphenMinus_2(
              _at_2(_at_2(_m, _plusSign_2(_j, _i)), 1),
              _at_2(_at_2(_m, _j), 1),
            );
            /* Statements */
            return _add_2(_z, _solidus_2(_a, _b));
          }, ["j"]),
        );
        _add_2(_p, _z);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _p;
  }, ["m"]),
  "{ :m |\n\t\tlet k = m.size;\n\t\tlet p = [m.collect(second:/1)];\n\t\tlet i = 1;\n\t\t{\n\t\t\t(k - i) > 0\n\t\t}.whileTrue {\n\t\t\tlet e = p.size;\n\t\t\tlet z = [];\n\t\t\t1.toDo(k - i) { :j |\n\t\t\t\tlet a = p[e][j + 1] - p[e][j];\n\t\t\t\tlet b = m[j + i][1] - m[j][1];\n\t\t\t\tz.add(a / b)\n\t\t\t};\n\t\t\tp.add(z);\n\t\t\ti := i + 1\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "dividedDifferences",
  ["m"],
  sl.annotateFunction(function (_m) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_m);
    let _p = [_collect_2(_m, _second_1)];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_hyphenMinus_2(_k, _i), 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _size_1(_p);
        let _z = [];
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_k, _i),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _hyphenMinus_2(
              _at_2(_at_2(_p, _e), _plusSign_2(_j, 1)),
              _at_2(_at_2(_p, _e), _j),
            );
            let _b = _hyphenMinus_2(
              _at_2(_at_2(_m, _plusSign_2(_j, _i)), 1),
              _at_2(_at_2(_m, _j), 1),
            );
            /* Statements */
            return _add_2(_z, _solidus_2(_a, _b));
          }, ["j"]),
        );
        _add_2(_p, _z);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _p;
  }, ["m"]),
  "{ :m |\n\t\tlet k = m.size;\n\t\tlet p = [m.collect(second:/1)];\n\t\tlet i = 1;\n\t\t{\n\t\t\t(k - i) > 0\n\t\t}.whileTrue {\n\t\t\tlet e = p.size;\n\t\t\tlet z = [];\n\t\t\t1.toDo(k - i) { :j |\n\t\t\t\tlet a = p[e][j + 1] - p[e][j];\n\t\t\t\tlet b = m[j + i][1] - m[j][1];\n\t\t\t\tz.add(a / b)\n\t\t\t};\n\t\t\tp.add(z);\n\t\t\ti := i + 1\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "evaluateInterpolatorSegment",
  ["x", "c", "mu"],
  sl.annotateFunction(function (_x, _c, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _c, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_x);
    let _i = _hyphenMinus_2(
      _binaryDetectIndex_2(
        _k,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_at_2(_x, _each), _mu);
        }, ["each"]),
      ),
      1,
    );
    /* Statements */
    _i = _max_2(1, _min_2(_i, _size_1(_c)));
    return _evaluateUnivariatePolynomial_2(
      _at_2(_c, _i),
      _hyphenMinus_2(_mu, _at_2(_x, _i)),
    );
  }, ["x", "c", "mu"]),
  "{ :x :c :mu |\n\t\tlet k = x.size;\n\t\tlet i = k.binaryDetectIndex { :each |\n\t\t\tx[each] >= mu\n\t\t} - 1;\n\t\ti := 1.max(i.min(c.size));\n\t\tc[i].evaluateUnivariatePolynomial(mu - x[i])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "evaluateInterpolatorSegment",
  ["x", "c", "mu"],
  sl.annotateFunction(function (_x, _c, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _c, _mu";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_x);
    let _i = _hyphenMinus_2(
      _binaryDetectIndex_2(
        _k,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_at_2(_x, _each), _mu);
        }, ["each"]),
      ),
      1,
    );
    /* Statements */
    _i = _max_2(1, _min_2(_i, _size_1(_c)));
    return _evaluateUnivariatePolynomial_2(
      _at_2(_c, _i),
      _hyphenMinus_2(_mu, _at_2(_x, _i)),
    );
  }, ["x", "c", "mu"]),
  "{ :x :c :mu |\n\t\tlet k = x.size;\n\t\tlet i = k.binaryDetectIndex { :each |\n\t\t\tx[each] >= mu\n\t\t} - 1;\n\t\ti := 1.max(i.min(c.size));\n\t\tc[i].evaluateUnivariatePolynomial(mu - x[i])\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "hermiteInterpolatorCoefficientList",
  ["x", "y", "firstDerivative"],
  sl.annotateFunction(function (_x, _y, _firstDerivative) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _firstDerivative";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 2);
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_x), _size_1(_firstDerivative)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _x,
          "hermiteInterpolatorCoefficientList: firstDerivative list invalid",
        );
      }, []),
    );
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _w = _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i));
        let _w2 = _asterisk_2(_w, _w);
        let _yv = _at_2(_y, _i);
        let _yvP = _at_2(_y, _plusSign_2(_i, 1));
        let _fd = _at_2(_firstDerivative, _i);
        let _fdP = _at_2(_firstDerivative, _plusSign_2(_i, 1));
        /* Statements */
        return _withoutTrailing_2([
          _yv,
          _at_2(_firstDerivative, _i),
          _solidus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(
                _solidus_2(_asterisk_2(3, _hyphenMinus_2(_yvP, _yv)), _w),
                _asterisk_2(2, _fd),
              ),
              _fdP,
            ),
            _w,
          ),
          _solidus_2(
            _plusSign_2(
              _plusSign_2(
                _solidus_2(_asterisk_2(2, _hyphenMinus_2(_yv, _yvP)), _w),
                _fd,
              ),
              _fdP,
            ),
            _w2,
          ),
        ], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y", "firstDerivative"]),
  "{ :x :y :firstDerivative |\n\t\tlet n = x.size - 1;\n\t\tassertIsValidInterpolatorData(x, y, 2);\n\t\t(x.size != firstDerivative.size).ifTrue {\n\t\t\tx.error('hermiteInterpolatorCoefficientList: firstDerivative list invalid')\n\t\t};\n\t\t1.toCollect(n) { :i |\n\t\t\tlet w = x[i + 1] - x[i];\n\t\t\tlet w2 = w * w;\n\t\t\tlet yv = y[i];\n\t\t\tlet yvP = y[i + 1];\n\t\t\tlet fd = firstDerivative[i];\n\t\t\tlet fdP = firstDerivative[i + 1];\n\t\t\t[\n\t\t\t\tyv,\n\t\t\t\tfirstDerivative[i],\n\t\t\t\t(3 * (yvP - yv) / w - (2 * fd) - fdP) / w,\n\t\t\t\t(2 * (yv - yvP) / w + fd + fdP) / w2\n\t\t\t].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "hermiteInterpolatorCoefficientList",
  ["x", "y", "firstDerivative"],
  sl.annotateFunction(function (_x, _y, _firstDerivative) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _y, _firstDerivative";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 2);
    _ifTrue_2(
      _exclamationMarkEqualsSign_2(_size_1(_x), _size_1(_firstDerivative)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _x,
          "hermiteInterpolatorCoefficientList: firstDerivative list invalid",
        );
      }, []),
    );
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _w = _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i));
        let _w2 = _asterisk_2(_w, _w);
        let _yv = _at_2(_y, _i);
        let _yvP = _at_2(_y, _plusSign_2(_i, 1));
        let _fd = _at_2(_firstDerivative, _i);
        let _fdP = _at_2(_firstDerivative, _plusSign_2(_i, 1));
        /* Statements */
        return _withoutTrailing_2([
          _yv,
          _at_2(_firstDerivative, _i),
          _solidus_2(
            _hyphenMinus_2(
              _hyphenMinus_2(
                _solidus_2(_asterisk_2(3, _hyphenMinus_2(_yvP, _yv)), _w),
                _asterisk_2(2, _fd),
              ),
              _fdP,
            ),
            _w,
          ),
          _solidus_2(
            _plusSign_2(
              _plusSign_2(
                _solidus_2(_asterisk_2(2, _hyphenMinus_2(_yv, _yvP)), _w),
                _fd,
              ),
              _fdP,
            ),
            _w2,
          ),
        ], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y", "firstDerivative"]),
  "{ :x :y :firstDerivative |\n\t\tlet n = x.size - 1;\n\t\tassertIsValidInterpolatorData(x, y, 2);\n\t\t(x.size != firstDerivative.size).ifTrue {\n\t\t\tx.error('hermiteInterpolatorCoefficientList: firstDerivative list invalid')\n\t\t};\n\t\t1.toCollect(n) { :i |\n\t\t\tlet w = x[i + 1] - x[i];\n\t\t\tlet w2 = w * w;\n\t\t\tlet yv = y[i];\n\t\t\tlet yvP = y[i + 1];\n\t\t\tlet fd = firstDerivative[i];\n\t\t\tlet fdP = firstDerivative[i + 1];\n\t\t\t[\n\t\t\t\tyv,\n\t\t\t\tfirstDerivative[i],\n\t\t\t\t(3 * (yvP - yv) / w - (2 * fd) - fdP) / w,\n\t\t\t\t(2 * (yv - yvP) / w + fd + fdP) / w2\n\t\t\t].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "interpolation",
  ["self", "method"],
  sl.annotateFunction(function (_self, _method) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _method";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _namedInterpolatorFunction_1(_method);
    /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _self;
        let _x = _asList_1(_nonemptyRange_3(1, _size_1(_y), 1));
        /* Statements */
        return _f_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        /* Statements */
        return _f_2(_x, _y);
      }, []),
    );
  }, ["self", "method"]),
  "{ :self :method |\n\t\tlet f:/2 = method.namedInterpolatorFunction;\n\t\tself.isVector.if {\n\t\t\tlet y = self;\n\t\t\tlet x = [1 .. y.size];\n\t\t\tf(x, y)\n\t\t} {\n\t\t\tlet [x, y] = self.transpose;\n\t\t\tf(x, y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "interpolation",
  ["self", "method"],
  sl.annotateFunction(function (_self, _method) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _method";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_2 = _namedInterpolatorFunction_1(_method);
    /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _self;
        let _x = _asList_1(_nonemptyRange_3(1, _size_1(_y), 1));
        /* Statements */
        return _f_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _x = _at_2(__SplVar1, 1);
        let _y = _at_2(__SplVar1, 2);
        /* Statements */
        return _f_2(_x, _y);
      }, []),
    );
  }, ["self", "method"]),
  "{ :self :method |\n\t\tlet f:/2 = method.namedInterpolatorFunction;\n\t\tself.isVector.if {\n\t\t\tlet y = self;\n\t\t\tlet x = [1 .. y.size];\n\t\t\tf(x, y)\n\t\t} {\n\t\t\tlet [x, y] = self.transpose;\n\t\t\tf(x, y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "interpolation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _interpolation_2(_self, "CubicSpline");
  }, ["self"]),
  "{ :self |\n\t\tself.interpolation('CubicSpline')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "interpolation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _interpolation_2(_self, "CubicSpline");
  }, ["self"]),
  "{ :self |\n\t\tself.interpolation('CubicSpline')\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "linearInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 2);
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _dx = _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i));
        let _dy = _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i));
        let _m = _solidus_2(_dy, _dx);
        /* Statements */
        return _withoutTrailing_2([_at_2(_y, _i), _m], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet n = x.size - 1;\n\t\tassertIsValidInterpolatorData(x, y, 2);\n\t\t1.toCollect(n) { :i |\n\t\t\tlet dx = x[i + 1] - x[i];\n\t\t\tlet dy = y[i + 1] - y[i];\n\t\t\tlet m = dy / dx;\n\t\t\t[y[i], m].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "linearInterpolatorCoefficientList",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _hyphenMinus_2(_size_1(_x), 1);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 2);
    return _toCollect_3(
      1,
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _dx = _hyphenMinus_2(_at_2(_x, _plusSign_2(_i, 1)), _at_2(_x, _i));
        let _dy = _hyphenMinus_2(_at_2(_y, _plusSign_2(_i, 1)), _at_2(_y, _i));
        let _m = _solidus_2(_dy, _dx);
        /* Statements */
        return _withoutTrailing_2([_at_2(_y, _i), _m], _isOrigin_1);
      }, ["i"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet n = x.size - 1;\n\t\tassertIsValidInterpolatorData(x, y, 2);\n\t\t1.toCollect(n) { :i |\n\t\t\tlet dx = x[i + 1] - x[i];\n\t\t\tlet dy = y[i + 1] - y[i];\n\t\t\tlet m = dy / dx;\n\t\t\t[y[i], m].withoutTrailing(isOrigin:/1)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "linearInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _linearInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.linearInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "linearInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _c = _linearInterpolatorCoefficientList_2(_x, _y);
    let _xCopy = _copy_1(_x);
    /* Statements */
    return sl.annotateFunction(function (_mu) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _mu";
        throw new Error(errorMessage);
      } /* Statements */
      return _evaluateInterpolatorSegment_3(_xCopy, _c, _mu);
    }, ["mu"]);
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet c = x.linearInterpolatorCoefficientList(y);\n\t\tlet xCopy = x.copy;\n\t\t{ :mu |\n\t\t\txCopy.evaluateInterpolatorSegment(c, mu)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "listInterpolation",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _caseOf_3(
      _numArgs_1(_aBlock),
      [
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _i = _integerPart_1(_x);
              /* Statements */
              return _if_3(
                _equalsSign_2(_i, _k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _last_1(_self);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _aBlock(
                    _at_2(_self, _i),
                    _at_2(_self, _plusSign_2(_i, 1)),
                    _fractionalPart_1(_x),
                  );
                }, []),
              );
            }, ["x"]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          5,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _i = _integerPart_1(_x);
              /* Statements */
              return _if_3(
                _equalsSign_2(_i, _k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _last_1(_self);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _aBlock(
                    _at_2(_self, _max_2(_hyphenMinus_2(_i, 1), 1)),
                    _at_2(_self, _i),
                    _at_2(_self, _plusSign_2(_i, 1)),
                    _at_2(_self, _min_2(_plusSign_2(_i, 2), _k)),
                    _fractionalPart_1(_x),
                  );
                }, []),
              );
            }, ["x"]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "listInterpolation: not 3- or 5- argument block",
        );
      }, []),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\tlet k = self.size;\n\t\taBlock.numArgs.caseOf([\n\t\t\t3 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tx.fractionalPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t5 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[(i - 1).max(1)],\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tself[(i + 2).min(k)],\n\t\t\t\t\t\t\tx.fractionalPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('listInterpolation: not 3- or 5- argument block')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "listInterpolation",
  ["self", "aBlock"],
  sl.annotateFunction(function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _caseOf_3(
      _numArgs_1(_aBlock),
      [
        _hyphenMinusGreaterThanSign_2(
          3,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _i = _integerPart_1(_x);
              /* Statements */
              return _if_3(
                _equalsSign_2(_i, _k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _last_1(_self);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _aBlock(
                    _at_2(_self, _i),
                    _at_2(_self, _plusSign_2(_i, 1)),
                    _fractionalPart_1(_x),
                  );
                }, []),
              );
            }, ["x"]);
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          5,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return sl.annotateFunction(function (_x) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _x";
                throw new Error(errorMessage);
              } /* Temporaries */
              let _i = _integerPart_1(_x);
              /* Statements */
              return _if_3(
                _equalsSign_2(_i, _k),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _last_1(_self);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _aBlock(
                    _at_2(_self, _max_2(_hyphenMinus_2(_i, 1), 1)),
                    _at_2(_self, _i),
                    _at_2(_self, _plusSign_2(_i, 1)),
                    _at_2(_self, _min_2(_plusSign_2(_i, 2), _k)),
                    _fractionalPart_1(_x),
                  );
                }, []),
              );
            }, ["x"]);
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "listInterpolation: not 3- or 5- argument block",
        );
      }, []),
    );
  }, ["self", "aBlock"]),
  "{ :self :aBlock |\n\t\tlet k = self.size;\n\t\taBlock.numArgs.caseOf([\n\t\t\t3 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tx.fractionalPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t5 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[(i - 1).max(1)],\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tself[(i + 2).min(k)],\n\t\t\t\t\t\t\tx.fractionalPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('listInterpolation: not 3- or 5- argument block')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "matrixInterpolation",
  ["self", "aBlock:/6"],
  sl.annotateFunction(function (_self, _aBlock_6) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_6";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _integerPart_1(_x);
      let _j1 = _integerPart_1(_y);
      let _i2 = _min_2(_m, _plusSign_2(_i1, 1));
      let _j2 = _min_2(_n, _plusSign_2(_j1, 1));
      /* Statements */
      return _aBlock_6(
        _at_2(_at_2(_self, _i1), _j1),
        _at_2(_at_2(_self, _i2), _j1),
        _at_2(_at_2(_self, _i1), _j2),
        _at_2(_at_2(_self, _i2), _j2),
        _fractionalPart_1(_x),
        _fractionalPart_1(_y),
      );
    }, ["x", "y"]);
  }, ["self", "aBlock:/6"]),
  "{ :self :aBlock:/6 |\n\t\tlet [m, n] = [self.numberOfRows, self.numberOfColumns];\n\t\t{ :x :y |\n\t\t\tlet i1 = x.integerPart;\n\t\t\tlet j1 = y.integerPart;\n\t\t\tlet i2 = m.min(i1 + 1);\n\t\t\tlet j2 = n.min(j1 + 1);\n\t\t\taBlock(\n\t\t\t\tself[i1][j1],\n\t\t\t\tself[i2][j1],\n\t\t\t\tself[i1][j2],\n\t\t\t\tself[i2][j2],\n\t\t\t\tx.fractionalPart,\n\t\t\t\ty.fractionalPart\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "matrixInterpolation",
  ["self", "aBlock:/6"],
  sl.annotateFunction(function (_self, _aBlock_6) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_6";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar2 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SplVar2, 1);
    let _n = _at_2(__SplVar2, 2);
    /* Statements */
    return sl.annotateFunction(function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _integerPart_1(_x);
      let _j1 = _integerPart_1(_y);
      let _i2 = _min_2(_m, _plusSign_2(_i1, 1));
      let _j2 = _min_2(_n, _plusSign_2(_j1, 1));
      /* Statements */
      return _aBlock_6(
        _at_2(_at_2(_self, _i1), _j1),
        _at_2(_at_2(_self, _i2), _j1),
        _at_2(_at_2(_self, _i1), _j2),
        _at_2(_at_2(_self, _i2), _j2),
        _fractionalPart_1(_x),
        _fractionalPart_1(_y),
      );
    }, ["x", "y"]);
  }, ["self", "aBlock:/6"]),
  "{ :self :aBlock:/6 |\n\t\tlet [m, n] = [self.numberOfRows, self.numberOfColumns];\n\t\t{ :x :y |\n\t\t\tlet i1 = x.integerPart;\n\t\t\tlet j1 = y.integerPart;\n\t\t\tlet i2 = m.min(i1 + 1);\n\t\t\tlet j2 = n.min(j1 + 1);\n\t\t\taBlock(\n\t\t\t\tself[i1][j1],\n\t\t\t\tself[i2][j1],\n\t\t\t\tself[i1][j2],\n\t\t\t\tself[i2][j2],\n\t\t\t\tx.fractionalPart,\n\t\t\t\ty.fractionalPart\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "nearestNeighbourInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xCopy = _copy_1(_x);
    let _yCopy = _copy_1(_y);
    let _n = _size_1(_x);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 1);
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_mu) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _mu";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_yCopy, 1);
        }, ["mu"]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_mu) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _mu";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _binaryDetectIndex_2(
            _n,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(_at_2(_xCopy, _each), _mu);
            }, ["each"]),
          );
          /* Statements */
          return _if_3(
            _ampersand_2(
              _lessThanSignEqualsSign_2(_i, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_xCopy, _i), _mu);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_yCopy, _i);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _equalsSign_2(_i, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _at_2(_yCopy, 1);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _greaterThanSignEqualsSign_2(_i, _n),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _at_2(_yCopy, _n);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _d = _hyphenMinus_2(
                        _mu,
                        _at_2(_xCopy, _hyphenMinus_2(_i, 1)),
                      );
                      let _w = _hyphenMinus_2(
                        _at_2(_xCopy, _i),
                        _at_2(_xCopy, _hyphenMinus_2(_i, 1)),
                      );
                      /* Statements */
                      return _if_3(
                        _lessThanSign_2(_plusSign_2(_d, _d), _w),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _at_2(_yCopy, _hyphenMinus_2(_i, 1));
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _at_2(_yCopy, _i);
                        }, []),
                      );
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, ["mu"]);
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet xCopy = x.copy;\n\t\tlet yCopy = y.copy;\n\t\tlet n = x.size;\n\t\tassertIsValidInterpolatorData(x, y, 1);\n\t\t(n = 1).if {\n\t\t\t{ :mu |\n\t\t\t\tyCopy[1]\n\t\t\t}\n\t\t} {\n\t\t\t{ :mu |\n\t\t\t\tlet i = n.binaryDetectIndex { :each |\n\t\t\t\t\txCopy[each] >= mu\n\t\t\t\t};\n\t\t\t\t(i <= n & { xCopy[i] = mu }).if {\n\t\t\t\t\tyCopy[i]\n\t\t\t\t} {\n\t\t\t\t\t(i = 1).if {\n\t\t\t\t\t\tyCopy[1]\n\t\t\t\t\t} {\n\t\t\t\t\t\t(i >= n).if {\n\t\t\t\t\t\t\tyCopy[n]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tlet d = mu - xCopy[i - 1];\n\t\t\t\t\t\t\tlet w = xCopy[i] - xCopy[i - 1];\n\t\t\t\t\t\t\t(d + d < w).if {\n\t\t\t\t\t\t\t\tyCopy[i - 1]\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tyCopy[i]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "nearestNeighbourInterpolator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _xCopy = _copy_1(_x);
    let _yCopy = _copy_1(_y);
    let _n = _size_1(_x);
    /* Statements */
    _assertIsValidInterpolatorData_3(_x, _y, 1);
    return _if_3(
      _equalsSign_2(_n, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_mu) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _mu";
            throw new Error(errorMessage);
          } /* Statements */
          return _at_2(_yCopy, 1);
        }, ["mu"]);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return sl.annotateFunction(function (_mu) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _mu";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _binaryDetectIndex_2(
            _n,
            sl.annotateFunction(function (_each) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _each";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(_at_2(_xCopy, _each), _mu);
            }, ["each"]),
          );
          /* Statements */
          return _if_3(
            _ampersand_2(
              _lessThanSignEqualsSign_2(_i, _n),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _equalsSign_2(_at_2(_xCopy, _i), _mu);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _at_2(_yCopy, _i);
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _equalsSign_2(_i, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _at_2(_yCopy, 1);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _if_3(
                    _greaterThanSignEqualsSign_2(_i, _n),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _at_2(_yCopy, _n);
                    }, []),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Temporaries */
                      let _d = _hyphenMinus_2(
                        _mu,
                        _at_2(_xCopy, _hyphenMinus_2(_i, 1)),
                      );
                      let _w = _hyphenMinus_2(
                        _at_2(_xCopy, _i),
                        _at_2(_xCopy, _hyphenMinus_2(_i, 1)),
                      );
                      /* Statements */
                      return _if_3(
                        _lessThanSign_2(_plusSign_2(_d, _d), _w),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _at_2(_yCopy, _hyphenMinus_2(_i, 1));
                        }, []),
                        sl.annotateFunction(function () {
                          /* ArityCheck */
                          if (arguments.length !== 0) {
                            const errorMessage = "Arity: expected 0, ";
                            throw new Error(errorMessage);
                          } /* Statements */
                          return _at_2(_yCopy, _i);
                        }, []),
                      );
                    }, []),
                  );
                }, []),
              );
            }, []),
          );
        }, ["mu"]);
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet xCopy = x.copy;\n\t\tlet yCopy = y.copy;\n\t\tlet n = x.size;\n\t\tassertIsValidInterpolatorData(x, y, 1);\n\t\t(n = 1).if {\n\t\t\t{ :mu |\n\t\t\t\tyCopy[1]\n\t\t\t}\n\t\t} {\n\t\t\t{ :mu |\n\t\t\t\tlet i = n.binaryDetectIndex { :each |\n\t\t\t\t\txCopy[each] >= mu\n\t\t\t\t};\n\t\t\t\t(i <= n & { xCopy[i] = mu }).if {\n\t\t\t\t\tyCopy[i]\n\t\t\t\t} {\n\t\t\t\t\t(i = 1).if {\n\t\t\t\t\t\tyCopy[1]\n\t\t\t\t\t} {\n\t\t\t\t\t\t(i >= n).if {\n\t\t\t\t\t\t\tyCopy[n]\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\tlet d = mu - xCopy[i - 1];\n\t\t\t\t\t\t\tlet w = xCopy[i] - xCopy[i - 1];\n\t\t\t\t\t\t\t(d + d < w).if {\n\t\t\t\t\t\t\t\tyCopy[i - 1]\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tyCopy[i]\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "volumeInterpolation",
  ["self", "aBlock:/11"],
  sl.annotateFunction(function (_self, _aBlock_11) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_11";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SplVar3, 1);
    let _n = _at_2(__SplVar3, 2);
    let _o = _at_2(__SplVar3, 3);
    /* Statements */
    return sl.annotateFunction(function (_x, _y, _z) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _x, _y, _z";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _integerPart_1(_x);
      let _j1 = _integerPart_1(_y);
      let _k1 = _integerPart_1(_z);
      let _i2 = _min_2(_m, _plusSign_2(_i1, 1));
      let _j2 = _min_2(_n, _plusSign_2(_j1, 1));
      let _k2 = _min_2(_o, _plusSign_2(_k1, 1));
      /* Statements */
      return _aBlock_11(
        _at_2(_at_2(_at_2(_self, _i1), _j1), _k1),
        _at_2(_at_2(_at_2(_self, _i2), _j1), _k1),
        _at_2(_at_2(_at_2(_self, _i1), _j2), _k1),
        _at_2(_at_2(_at_2(_self, _i2), _j2), _k1),
        _at_2(_at_2(_at_2(_self, _i1), _j1), _k2),
        _at_2(_at_2(_at_2(_self, _i2), _j1), _k2),
        _at_2(_at_2(_at_2(_self, _i1), _j2), _k2),
        _at_2(_at_2(_at_2(_self, _i2), _j2), _k2),
        _fractionalPart_1(_x),
        _fractionalPart_1(_y),
        _fractionalPart_1(_z),
      );
    }, ["x", "y", "z"]);
  }, ["self", "aBlock:/11"]),
  "{ :self :aBlock:/11 |\n\t\tlet [m, n, o] = self.shape;\n\t\t{ :x :y :z |\n\t\t\tlet i1 = x.integerPart;\n\t\t\tlet j1 = y.integerPart;\n\t\t\tlet k1 = z.integerPart;\n\t\t\tlet i2 = m.min(i1 + 1);\n\t\t\tlet j2 = n.min(j1 + 1);\n\t\t\tlet k2 = o.min(k1 + 1);\n\t\t\taBlock(\n\t\t\t\tself[i1][j1][k1],\n\t\t\t\tself[i2][j1][k1],\n\t\t\t\tself[i1][j2][k1],\n\t\t\t\tself[i2][j2][k1],\n\t\t\t\tself[i1][j1][k2],\n\t\t\t\tself[i2][j1][k2],\n\t\t\t\tself[i1][j2][k2],\n\t\t\t\tself[i2][j2][k2],\n\t\t\t\tx.fractionalPart,\n\t\t\t\ty.fractionalPart,\n\t\t\t\tz.fractionalPart\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Range",
  "Interpolation",
  "volumeInterpolation",
  ["self", "aBlock:/11"],
  sl.annotateFunction(function (_self, _aBlock_11) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_11";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SplVar3, 1);
    let _n = _at_2(__SplVar3, 2);
    let _o = _at_2(__SplVar3, 3);
    /* Statements */
    return sl.annotateFunction(function (_x, _y, _z) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _x, _y, _z";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _i1 = _integerPart_1(_x);
      let _j1 = _integerPart_1(_y);
      let _k1 = _integerPart_1(_z);
      let _i2 = _min_2(_m, _plusSign_2(_i1, 1));
      let _j2 = _min_2(_n, _plusSign_2(_j1, 1));
      let _k2 = _min_2(_o, _plusSign_2(_k1, 1));
      /* Statements */
      return _aBlock_11(
        _at_2(_at_2(_at_2(_self, _i1), _j1), _k1),
        _at_2(_at_2(_at_2(_self, _i2), _j1), _k1),
        _at_2(_at_2(_at_2(_self, _i1), _j2), _k1),
        _at_2(_at_2(_at_2(_self, _i2), _j2), _k1),
        _at_2(_at_2(_at_2(_self, _i1), _j1), _k2),
        _at_2(_at_2(_at_2(_self, _i2), _j1), _k2),
        _at_2(_at_2(_at_2(_self, _i1), _j2), _k2),
        _at_2(_at_2(_at_2(_self, _i2), _j2), _k2),
        _fractionalPart_1(_x),
        _fractionalPart_1(_y),
        _fractionalPart_1(_z),
      );
    }, ["x", "y", "z"]);
  }, ["self", "aBlock:/11"]),
  "{ :self :aBlock:/11 |\n\t\tlet [m, n, o] = self.shape;\n\t\t{ :x :y :z |\n\t\t\tlet i1 = x.integerPart;\n\t\t\tlet j1 = y.integerPart;\n\t\t\tlet k1 = z.integerPart;\n\t\t\tlet i2 = m.min(i1 + 1);\n\t\t\tlet j2 = n.min(j1 + 1);\n\t\t\tlet k2 = o.min(k1 + 1);\n\t\t\taBlock(\n\t\t\t\tself[i1][j1][k1],\n\t\t\t\tself[i2][j1][k1],\n\t\t\t\tself[i1][j2][k1],\n\t\t\t\tself[i2][j2][k1],\n\t\t\t\tself[i1][j1][k2],\n\t\t\t\tself[i2][j1][k2],\n\t\t\t\tself[i1][j2][k2],\n\t\t\t\tself[i2][j2][k2],\n\t\t\t\tx.fractionalPart,\n\t\t\t\ty.fractionalPart,\n\t\t\t\tz.fractionalPart\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "basicDownsampleSteinarsson",
  ["self", "threshold"],
  sl.annotateFunction(function (_self, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _threshold";
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.downsampleSteinarsson(_self, _threshold);
  }, ["self", "threshold"]),
  "{ :self :threshold |\n\t\t<primitive: return sc.downsampleSteinarsson(_self, _threshold);>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "downsample",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _toBy_3(1, _size_1(_self), _anInteger),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _each);
      }, ["each"]),
    );
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\t1.toBy(self.size, anInteger).collect { :each |\n\t\t\tself[each]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "downsampleSteinarsson",
  ["self", "threshold"],
  sl.annotateFunction(function (_self, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _threshold";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicDownsampleSteinarsson_2(
          _transpose_1([_indices_1(_self), _self]),
          _threshold,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _basicDownsampleSteinarsson_2(_self, _threshold);
      }, []),
    );
  }, ["self", "threshold"]),
  "{ :self :threshold |\n\t\tself.isVector.if {\n\t\t\t[self.indices, self].transpose.basicDownsampleSteinarsson(threshold)\n\t\t} {\n\t\t\tself.basicDownsampleSteinarsson(threshold)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "matrixResample",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar4 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SplVar4, 1);
    let _n = _at_2(__SplVar4, 2);
    let __SplVar5 = _assertIsOfSize_2(_shape, 2);
    let _p = _at_2(__SplVar5, 1);
    let _q = _at_2(__SplVar5, 2);
    let _i = _discretize_2(_hyphenMinusHyphenMinus_2(1, _m), _p);
    let _j = _discretize_2(_hyphenMinusHyphenMinus_2(1, _n), _q);
    /* Statements */
    return _table_3(
      _matrixInterpolation_2(_self, _bilinearInterpolation_6),
      _i,
      _j,
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tlet [m, n] = [self.numberOfRows, self.numberOfColumns];\n\t\tlet [p, q] = shape;\n\t\tlet i = (1 -- m).discretize(p);\n\t\tlet j = (1 -- n).discretize(q);\n\t\tself.matrixInterpolation(\n\t\t\tbilinearInterpolation:/6\n\t\t).table(i, j)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "resample",
  ["self", "newSize"],
  sl.annotateFunction(function (_self, _newSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newSize";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _factor = _solidus_2(
      _hyphenMinus_2(_size_1(_self), 1),
      _max_2(_hyphenMinus_2(_newSize, 1), 1),
    );
    /* Statements */
    return _collect_2(
      _to_2(0, _hyphenMinus_2(_newSize, 1)),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atBlend_2(_self, _plusSign_2(1, _asterisk_2(_each, _factor)));
      }, ["each"]),
    );
  }, ["self", "newSize"]),
  "{ :self :newSize |\n\t\tlet factor = (self.size - 1) / (newSize - 1).max(1);\n\t\t0.to(newSize - 1).collect { :each |\n\t\t\tself.atBlend(1 + (each * factor))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "upsample",
  ["self", "anInteger"],
  sl.annotateFunction(function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_asterisk_2(_size_1(_self), _anInteger), 0);
    /* Statements */
    _toDo_3(
      0,
      _hyphenMinus_2(_size_1(_self), 1),
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _atPut_3(
          _answer,
          _plusSign_2(_asterisk_2(_each, _anInteger), 1),
          _at_2(_self, _plusSign_2(_each, 1)),
        );
      }, ["each"]),
    );
    return _answer;
  }, ["self", "anInteger"]),
  "{ :self :anInteger |\n\t\tlet answer = List(self.size * anInteger, 0);\n\t\t0.toDo(self.size - 1) { :each |\n\t\t\tanswer[(each * anInteger) + 1] := self[each + 1]\n\t\t};\n\t\tanswer\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "volumeResample",
  ["self", "shape"],
  sl.annotateFunction(function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar6 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SplVar6, 1);
    let _n = _at_2(__SplVar6, 2);
    let _o = _at_2(__SplVar6, 3);
    let __SplVar7 = _assertIsOfSize_2(_shape, 3);
    let _p = _at_2(__SplVar7, 1);
    let _q = _at_2(__SplVar7, 2);
    let _r = _at_2(__SplVar7, 3);
    let _i = _discretize_2(_hyphenMinusHyphenMinus_2(1, _m), _p);
    let _j = _discretize_2(_hyphenMinusHyphenMinus_2(1, _n), _q);
    let _k = _discretize_2(_hyphenMinusHyphenMinus_2(1, _o), _r);
    /* Statements */
    return _table_4(
      _volumeInterpolation_2(_self, _trilinearInterpolation_11),
      _i,
      _j,
      _k,
    );
  }, ["self", "shape"]),
  "{ :self :shape |\n\t\tlet [m, n, o] = self.shape;\n\t\tlet [p, q, r] = shape;\n\t\tlet i = (1 -- m).discretize(p);\n\t\tlet j = (1 -- n).discretize(q);\n\t\tlet k = (1 -- o).discretize(r);\n\t\tself.volumeInterpolation(\n\t\t\ttrilinearInterpolation:/11\n\t\t).table(i, j, k)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "inverseSmoothStep",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      0.5,
      _sin_1(_solidus_2(_arcSin_1(_hyphenMinus_2(1, _asterisk_2(2, _x))), 3)),
    );
  }, ["x"]),
  "{ :x |\n\t\t0.5 - ((1 - (2 * x)).arcSin / 3).sin\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "nevillesAlgorithm",
  ["x", "m"],
  sl.annotateFunction(function (_x, _m) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _m";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_m);
    let _p = [_collect_2(_m, _second_1)];
    let _i = 1;
    /* Statements */
    _whileTrue_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _greaterThanSign_2(_hyphenMinus_2(_k, _i), 0);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _e = _size_1(_p);
        let _z = [];
        /* Statements */
        _toDo_3(
          1,
          _hyphenMinus_2(_k, _i),
          sl.annotateFunction(function (_j) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _j";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _asterisk_2(
              _hyphenMinus_2(_x, _at_2(_at_2(_m, _j), 1)),
              _at_2(_at_2(_p, _e), _plusSign_2(_j, 1)),
            );
            let _b = _asterisk_2(
              _hyphenMinus_2(_x, _at_2(_at_2(_m, _plusSign_2(_j, _i)), 1)),
              _at_2(_at_2(_p, _e), _j),
            );
            let _c = _hyphenMinus_2(
              _at_2(_at_2(_m, _plusSign_2(_j, _i)), 1),
              _at_2(_at_2(_m, _j), 1),
            );
            /* Statements */
            return _add_2(_z, _solidus_2(_hyphenMinus_2(_a, _b), _c));
          }, ["j"]),
        );
        _add_2(_p, _z);
        return _i = _plusSign_2(_i, 1);
      }, []),
    );
    return _p;
  }, ["x", "m"]),
  "{ :x :m |\n\t\tlet k = m.size;\n\t\tlet p = [m.collect(second:/1)];\n\t\tlet i = 1;\n\t\t{\n\t\t\t(k - i) > 0\n\t\t}.whileTrue {\n\t\t\tlet e = p.size;\n\t\t\tlet z = [];\n\t\t\t1.toDo(k - i) { :j |\n\t\t\t\tlet a = (x - m[j][1]) * p[e][j + 1];\n\t\t\t\tlet b = (x - m[j + i][1]) * p[e][j];\n\t\t\t\tlet c = m[j + i][1] - m[j][1];\n\t\t\t\tz.add((a - b) / c)\n\t\t\t};\n\t\t\tp.add(z);\n\t\t\ti := i + 1\n\t\t};\n\t\tp\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "smoothStepFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = 0;
      /* Statements */
      _toDo_3(
        0,
        _n,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _p = _binomialPascal_2(_hyphenMinus_2(_negate_1(_n), 1), _i);
          let _q = _binomialPascal_2(
            _plusSign_2(_asterisk_2(2, _n), 1),
            _hyphenMinus_2(_n, _i),
          );
          let _r = _circumflexAccent_2(_x, _plusSign_2(_plusSign_2(_n, _i), 1));
          /* Statements */
          return _answer = _plusSign_2(
            _answer,
            _asterisk_2(_asterisk_2(_p, _q), _r),
          );
        }, ["i"]),
      );
      return _answer;
    }, ["x"]);
  }, ["n"]),
  "{ :n |\n\t\t{ :x |\n\t\t\tlet answer = 0;\n\t\t\t0.toDo(n) { :i |\n\t\t\t\tlet p = binomialPascal(n.negate - 1, i);\n\t\t\t\tlet q = binomialPascal(2 * n + 1, n - i);\n\t\t\t\tlet r = x ^ (n + i + 1);\n\t\t\t\tanswer := answer + (p * q * r)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Interpolation",
  "smoothStepFunction",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = 0;
      /* Statements */
      _toDo_3(
        0,
        _n,
        sl.annotateFunction(function (_i) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _i";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _p = _binomialPascal_2(_hyphenMinus_2(_negate_1(_n), 1), _i);
          let _q = _binomialPascal_2(
            _plusSign_2(_asterisk_2(2, _n), 1),
            _hyphenMinus_2(_n, _i),
          );
          let _r = _circumflexAccent_2(_x, _plusSign_2(_plusSign_2(_n, _i), 1));
          /* Statements */
          return _answer = _plusSign_2(
            _answer,
            _asterisk_2(_asterisk_2(_p, _q), _r),
          );
        }, ["i"]),
      );
      return _answer;
    }, ["x"]);
  }, ["n"]),
  "{ :n |\n\t\t{ :x |\n\t\t\tlet answer = 0;\n\t\t\t0.toDo(n) { :i |\n\t\t\t\tlet p = binomialPascal(n.negate - 1, i);\n\t\t\t\tlet q = binomialPascal(2 * n + 1, n - i);\n\t\t\t\tlet r = x ^ (n + i + 1);\n\t\t\t\tanswer := answer + (p * q * r)\n\t\t\t};\n\t\t\tanswer\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "smoothStep",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_x, _x),
      _hyphenMinus_2(3, _asterisk_2(2, _x)),
    );
  }, ["x"]),
  "{ :x |\n\t\tx * x * (3 - (2 * x))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Interpolation",
  "smoothStep",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_x, _x),
      _hyphenMinus_2(3, _asterisk_2(2, _x)),
    );
  }, ["x"]),
  "{ :x |\n\t\tx * x * (3 - (2 * x))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Interpolation",
  "smootherStep",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(_x, _x), _x),
      _plusSign_2(_asterisk_2(_x, _hyphenMinus_2(_asterisk_2(6, _x), 15)), 10),
    );
  }, ["x"]),
  "{ :x |\n\t\tx * x * x * (x * (6 * x - 15) + 10)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Interpolation",
  "smootherStep",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(_x, _x), _x),
      _plusSign_2(_asterisk_2(_x, _hyphenMinus_2(_asterisk_2(6, _x), 15)), 10),
    );
  }, ["x"]),
  "{ :x |\n\t\tx * x * x * (x * (6 * x - 15) + 10)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "simpleLinearRegression",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_x);
    let _sx = _sum_1(_x);
    let _sy = _sum_1(_y);
    let _sxx = _sum_1(_asterisk_2(_x, _x));
    let _syy = _sum_1(_asterisk_2(_y, _y));
    let _sxy = _sum_1(_asterisk_2(_x, _y));
    let _xx = _hyphenMinus_2(_sxx, _solidus_2(_asterisk_2(_sx, _sx), _n));
    let _yy = _hyphenMinus_2(_syy, _solidus_2(_asterisk_2(_sy, _sy), _n));
    let _xy = _hyphenMinus_2(_sxy, _solidus_2(_asterisk_2(_sx, _sy), _n));
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSign_2(_n, 2),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _equalsSign_2(_abs_1(_xx), 0);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _x,
          "List>>simpleLinearRegression: too few points or infinite slope",
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _b = _solidus_2(_xy, _xx);
        let _a = _hyphenMinus_2(
          _solidus_2(_sy, _n),
          _solidus_2(_asterisk_2(_b, _sx), _n),
        );
        let _r = _if_3(
          _equalsSign_2(_abs_1(_yy), 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 1;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(_xy, _sqrt_1(_asterisk_2(_xx, _yy)));
          }, []),
        );
        /* Statements */
        return [_a, _b, _r];
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tlet n = x.size;\n\t\tlet sx = x.sum;\n\t\tlet sy = y.sum;\n\t\tlet sxx = (x * x).sum;\n\t\tlet syy = (y * y).sum;\n\t\tlet sxy = (x * y).sum;\n\t\tlet xx = sxx - (sx * sx / n);\n\t\tlet yy = syy - (sy * sy / n);\n\t\tlet xy = sxy - (sx * sy / n);\n\t\t(n < 2 | { xx.abs = 0 }).if {\n\t\t\tx.error('List>>simpleLinearRegression: too few points or infinite slope')\n\t\t} {\n\t\t\tlet b = xy / xx;\n\t\t\tlet a = (sy / n) - (b * sx / n);\n\t\t\tlet r = (yy.abs = 0).if {\n\t\t\t\t1\n\t\t\t} {\n\t\t\t\txy / (xx * yy).sqrt\n\t\t\t};\n\t\t\t[a, b, r]\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "simpleLinearRegression",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _asList_1(_nonemptyRange_3(1, _size_1(_self), 1));
        let _y = _self;
        /* Statements */
        return _simpleLinearRegression_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar8 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _x = _at_2(__SplVar8, 1);
        let _y = _at_2(__SplVar8, 2);
        /* Statements */
        return _simpleLinearRegression_2(_x, _y);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\tlet x = [1 .. self.size];\n\t\t\tlet y = self;\n\t\t\tx.simpleLinearRegression(y)\n\t\t} {\n\t\t\tlet [x, y] = self.transpose;\n\t\t\tx.simpleLinearRegression(y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "theilSenEstimator",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_size_1(_x), _size_1(_y)),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _k = _size_1(_x);
        let _slope = [];
        let _count = 0;
        let _m = null;
        /* Statements */
        _toDo_3(
          1,
          _k,
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _x1 = _at_2(_x, _i);
            let _y1 = _at_2(_y, _i);
            /* Statements */
            return _toDo_3(
              _plusSign_2(_i, 1),
              _k,
              sl.annotateFunction(function (_j) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _j";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _x2 = _at_2(_x, _j);
                let _y2 = _at_2(_y, _j);
                /* Statements */
                return _ifTrue_2(
                  _exclamationMarkEqualsSign_2(_x1, _x2),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _add_2(
                      _slope,
                      _solidus_2(
                        _hyphenMinus_2(_y2, _y1),
                        _hyphenMinus_2(_x2, _x1),
                      ),
                    );
                    return _count = _plusSign_2(_count, 1);
                  }, []),
                );
              }, ["j"]),
            );
          }, ["i"]),
        );
        _m = _median_1(_slope);
        return [
          _median_1(_collect_2(
            _to_2(1, _k),
            sl.annotateFunction(function (_i) {
              /* ArityCheck */
              if (arguments.length !== 1) {
                const errorMessage = "Arity: expected 1, _i";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinus_2(
                _at_2(_y, _i),
                _asterisk_2(_m, _at_2(_x, _i)),
              );
            }, ["i"]),
          )),
          _m,
        ];
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_xList, "theilSenEstimator: invalid input");
      }, []),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\t(x.size = y.size).if {\n\t\t\tlet k = x.size;\n\t\t\tlet slope = [];\n\t\t\tlet count = 0;\n\t\t\tlet m = nil;\n\t\t\t1.toDo(k) { :i |\n\t\t\t\tlet x1 = x[i];\n\t\t\t\tlet y1 = y[i];\n\t\t\t\t(i + 1).toDo(k) { :j |\n\t\t\t\t\tlet x2 = x[j];\n\t\t\t\t\tlet y2 = y[j];\n\t\t\t\t\t(x1 != x2).ifTrue {\n\t\t\t\t\t\tslope.add(\n\t\t\t\t\t\t\t(y2 - y1) / (x2 - x1)\n\t\t\t\t\t\t);\n\t\t\t\t\t\tcount := count + 1\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\t\t\tm := slope.median;\n\t\t\t[\n\t\t\t\t1.to(k).collect { :i | y[i] - (m * x[i]) }.median,\n\t\t\t\tm\n\t\t\t]\n\t\t} {\n\t\t\txList.error('theilSenEstimator: invalid input')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "theilSenEstimator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _theilSenEstimator_2(
          _asList_1(_nonemptyRange_3(1, _size_1(_self), 1)),
          _self,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar9 = _assertIsOfSize_2(_transpose_1(_self), 2);
        let _x = _at_2(__SplVar9, 1);
        let _y = _at_2(__SplVar9, 2);
        /* Statements */
        return _theilSenEstimator_2(_x, _y);
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.isVector.if {\n\t\t\ttheilSenEstimator([1 .. self.size], self)\n\t\t} {\n\t\t\tlet [x, y] = self.transpose;\n\t\t\ttheilSenEstimator(x, y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "Interpolation",
  "namedInterpolatorFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_3(
      _self,
      [
        _hyphenMinusGreaterThanSign_2(
          "Akima",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _akimaInterpolator_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "CubicSpline",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _cubicSplineInterpolator_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "Linear",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _linearInterpolator_2;
          }, []),
        ),
        _hyphenMinusGreaterThanSign_2(
          "NearestNeighbour",
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nearestNeighbourInterpolator_2;
          }, []),
        ),
      ],
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "interpolatorFunction: unknown method");
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tself.caseOf([\n\t\t\t'Akima' -> { akimaInterpolator:/2 },\n\t\t\t'CubicSpline' -> { cubicSplineInterpolator:/2 },\n\t\t\t'Linear' -> { linearInterpolator:/2 },\n\t\t\t'NearestNeighbour' -> { nearestNeighbourInterpolator:/2 }\n\t\t]) {\n\t\t\tself.error('interpolatorFunction: unknown method')\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "savitzkyGolayFilter",
  ["y", "m", "w"],
  sl.annotateFunction(function (_y, _m, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y, _m, _w";
      throw new Error(errorMessage);
    } /* Statements */
    return _asList_1(_uncheckedSavitzkyGolayFilter_3(_y, _m, _w));
  }, ["y", "m", "w"]),
  "{ :y :m :w |\n\t\tuncheckedSavitzkyGolayFilter(y, m, w).asList\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "uncheckedSavitzkyGolayFilter",
  ["y", "m", "w"],
  sl.annotateFunction(function (_y, _m, _w) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y, _m, _w";
      throw new Error(errorMessage);
    } /* Primitive */
    function getHs(h, center, half, derivative) {
      let hs = 0;
      let count = 0;
      for (let i = center - half; i < center + half; i++) {
        if (i >= 0 && i < h.length - 1) {
          hs += h[i + 1] - h[i];
          count++;
        }
      }
      return (hs / count) ** derivative;
    }
    function gramPoly(i, m, k, s) {
      let Grampoly = 0;
      if (k > 0) {
        Grampoly = ((4 * k - 2) / (k * (2 * m - k + 1))) *
            (i * gramPoly(i, m, k - 1, s) + s * gramPoly(i, m, k - 1, s - 1)) -
          (((k - 1) * (2 * m + k)) / (k * (2 * m - k + 1))) *
            gramPoly(i, m, k - 2, s);
      } else if (k === 0 && s === 0) {
        Grampoly = 1;
      } else {
        Grampoly = 0;
      }
      return Grampoly;
    }
    function genFact(a, b) {
      let gf = 1;
      if (a >= b) {
        for (let j = a - b + 1; j <= a; j++) {
          gf *= j;
        }
      }
      return gf;
    }
    function weight(i, t, m, n, s) {
      let sum = 0;
      for (let k = 0; k <= n; k++) {
        sum += (2 * k + 1) *
          (genFact(2 * m, k) / genFact(2 * m + k + 1, k + 1)) *
          gramPoly(i, m, k, 0) *
          gramPoly(t, m, k, s);
      }
      return sum;
    }
    function fullWeights(m, n, s) {
      const weights = new Array(m);
      const np = Math.floor(m / 2);
      for (let t = -np; t <= np; t++) {
        weights[t + np] = new Float64Array(m);
        for (let j = -np; j <= np; j++) {
          weights[t + np][j + np] = weight(j, t, np, n, s);
        }
      }
      return weights;
    }
    let ys = _y;
    let xs = 1;
    let windowSize = _w;
    let derivative = 0;
    let polynomial = _m;
    const half = Math.floor(windowSize / 2);
    const np = ys.length;
    const ans = new Float64Array(np);
    const weights = fullWeights(windowSize, polynomial, derivative);
    let hs = xs ** derivative;
    let constantH = true;
    for (let i = 0; i < half; i++) {
      const wg1 = weights[half - i - 1];
      const wg2 = weights[half + i + 1];
      let d1 = 0;
      let d2 = 0;
      for (let l = 0; l < windowSize; l++) {
        d1 += wg1[l] * ys[l];
        d2 += wg2[l] * ys[np - windowSize + l];
      }
      if (constantH) {
        ans[half - i - 1] = d1 / hs;
        ans[np - half + i] = d2 / hs;
      } else {
        hs = getHs(xs, half - i - 1, half, derivative);
        ans[half - i - 1] = d1 / hs;
        hs = getHs(xs, np - half + i, half, derivative);
        ans[np - half + i] = d2 / hs;
      }
    }
    const wg = weights[half];
    for (let i = windowSize; i <= np; i++) {
      let d = 0;
      for (let l = 0; l < windowSize; l++) d += wg[l] * ys[l + i - windowSize];
      if (!constantH) {
        hs = getHs(xs, i - half - 1, half, derivative);
      }
      ans[i - half - 1] = d / hs;
    }
    return ans;
  }, ["y", "m", "w"]),
  "{ :y :m :w |\n\t\t/* https://github.com/mljs/savitzky-golay-generalized */\n\t\t<primitive:\n\t\tfunction getHs(h, center, half, derivative) {\n\t\t\tlet hs = 0;\n\t\t\tlet count = 0;\n\t\t\tfor (let i = center - half; i < center + half; i++) {\n\t\t\t\tif (i >= 0 && i < h.length - 1) {\n\t\t\t\t\ths += h[i + 1] - h[i];\n\t\t\t\t\tcount++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn (hs / count) ** derivative;\n\t\t}\n\t\tfunction gramPoly(i, m, k, s) {\n\t\t\tlet Grampoly = 0;\n\t\t\tif (k > 0) {\n\t\t\t\tGrampoly =\n\t\t\t\t((4 * k - 2) / (k * (2 * m - k + 1))) *\n\t\t\t\t(i * gramPoly(i, m, k - 1, s) + s * gramPoly(i, m, k - 1, s - 1)) -\n\t\t\t\t(((k - 1) * (2 * m + k)) / (k * (2 * m - k + 1))) *\n\t\t\t\tgramPoly(i, m, k - 2, s);\n\t\t\t} else if (k === 0 && s === 0) {\n\t\t\t\tGrampoly = 1;\n\t\t\t} else {\n\t\t\t\tGrampoly = 0;\n\t\t\t}\n\t\t\treturn Grampoly;\n\t\t}\n\t\tfunction genFact(a, b) {\n\t\t\tlet gf = 1;\n\t\t\tif (a >= b) {\n\t\t\t\tfor (let j = a - b + 1; j <= a; j++) {\n\t\t\t\t\tgf *= j;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn gf;\n\t\t}\n\t\tfunction weight(i, t, m, n, s) {\n\t\t\tlet sum = 0;\n\t\t\tfor (let k = 0; k <= n; k++) {\n\t\t\t\tsum +=\n\t\t\t\t(2 * k + 1) *\n\t\t\t\t(genFact(2 * m, k) / genFact(2 * m + k + 1, k + 1)) *\n\t\t\t\tgramPoly(i, m, k, 0) *\n\t\t\t\tgramPoly(t, m, k, s);\n\t\t\t}\n\t\t\treturn sum;\n\t\t}\n\t\tfunction fullWeights(m, n, s) {\n\t\t\tconst weights = new Array(m);\n\t\t\tconst np = Math.floor(m / 2);\n\t\t\tfor (let t = -np; t <= np; t++) {\n\t\t\t\tweights[t + np] = new Float64Array(m);\n\t\t\t\tfor (let j = -np; j <= np; j++) {\n\t\t\t\t\tweights[t + np][j + np] = weight(j, t, np, n, s);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn weights;\n\t\t}\n\t\tlet ys = _y;\n\t\tlet xs = 1;\n\t\tlet windowSize = _w;\n\t\tlet derivative = 0;\n\t\tlet polynomial = _m;\n\t\tconst half = Math.floor(windowSize / 2);\n\t\tconst np = ys.length;\n\t\tconst ans = new Float64Array(np);\n\t\tconst weights = fullWeights(windowSize, polynomial, derivative);\n\t\tlet hs = xs ** derivative;\n\t\tlet constantH = true;\n\t\tfor (let i = 0; i < half; i++) {\n\t\t\tconst wg1 = weights[half - i - 1];\n\t\t\tconst wg2 = weights[half + i + 1];\n\t\t\tlet d1 = 0;\n\t\t\tlet d2 = 0;\n\t\t\tfor (let l = 0; l < windowSize; l++) {\n\t\t\t\td1 += wg1[l] * ys[l];\n\t\t\t\td2 += wg2[l] * ys[np - windowSize + l];\n\t\t\t}\n\t\t\tif (constantH) {\n\t\t\t\tans[half - i - 1] = d1 / hs;\n\t\t\t\tans[np - half + i] = d2 / hs;\n\t\t\t} else {\n\t\t\t\ths = getHs(xs, half - i - 1, half, derivative);\n\t\t\t\tans[half - i - 1] = d1 / hs;\n\t\t\t\ths = getHs(xs, np - half + i, half, derivative);\n\t\t\t\tans[np - half + i] = d2 / hs;\n\t\t\t}\n\t\t}\n\t\tconst wg = weights[half];\n\t\tfor (let i = windowSize; i <= np; i++) {\n\t\t\tlet d = 0;\n\t\t\tfor (let l = 0; l < windowSize; l++) d += wg[l] * ys[l + i - windowSize];\n\t\t\tif (!constantH) {\n\t\t\t\ths = getHs(xs, i - half - 1, half, derivative);\n\t\t\t}\n\t\t\tans[i - half - 1] = d / hs;\n\t\t}\n\t\treturn ans\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "bSplineFunctionPrimitive",
  ["p", "d", "k", "w", "t"],
  sl.annotateFunction(function (_p, _d, _k, _w, _t) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _p, _d, _k, _w, _t";
      throw new Error(errorMessage);
    } /* Primitive */
    let t = _t;
    let degree = _d;
    let points = _p;
    let knots = _k;
    let weights = _w;
    let n = points.length;
    let d = points[0].length;
    if (degree < 1) {
      throw new Error("degree must be at least 1 (linear)");
    }
    if (degree > (n - 1)) {
      throw new Error("degree must be less than or equal to point count - 1");
    }
    if (!weights) {
      weights = [];
      for (let i = 0; i < n; i++) {
        weights[i] = 1;
      }
    }
    if (!knots) {
      knots = [];
      for (let i = 0; i < n + degree + 1; i++) {
        knots[i] = i;
      }
    } else {
      if (knots.length !== n + degree + 1) {
        throw new Error("bad knot vector length");
      }
    }
    let domain = [
      degree,
      knots.length - 1 - degree,
    ];
    let low = knots[domain[0]];
    let high = knots[domain[1]];
    t = t * (high - low) + low;
    if (t < low || t > high) {
      throw new Error("out of bounds");
    }
    let s = domain[0];
    for (; s < domain[1]; s++) {
      if (t >= knots[s] && t <= knots[s + 1]) {
        break;
      }
    }
    let v = [];
    for (let i = 0; i < n; i++) {
      v[i] = [];
      for (let j = 0; j < d; j++) {
        v[i][j] = points[i][j] * weights[i];
      }
      v[i][d] = weights[i];
    }
    for (let l = 1; l <= degree + 1; l++) {
      for (let i = s; i > s - degree - 1 + l; i--) {
        let alpha = (t - knots[i]) / (knots[i + degree + 1 - l] - knots[i]);
        for (let j = 0; j < d + 1; j++) {
          v[i][j] = (1 - alpha) * v[i - 1][j] + alpha * v[i][j];
        }
      }
    }
    let result = [];
    for (let i = 0; i < d; i++) {
      result[i] = v[s][i] / v[s][d];
    }
    return result;
  }, ["p", "d", "k", "w", "t"]),
  "{ :p :d :k :w :t |\n\t\t<primitive:\n\t\t/* https://github.com/thibauts/b-spline/ */\n\t\tlet t = _t;\n\t\tlet degree = _d;\n\t\tlet points = _p;\n\t\tlet knots = _k\n\t\tlet weights = _w;\n\t\tlet n = points.length;\n\t\tlet d = points[0].length;\n\t\tif(degree < 1) {\n\t\t\tthrow new Error('degree must be at least 1 (linear)');\n\t\t}\n\t\tif(degree > (n-1)) {\n\t\t\tthrow new Error('degree must be less than or equal to point count - 1');\n\t\t}\n\t\tif(!weights) {\n\t\t\tweights = [];\n\t\t\tfor(let i=0; i<n; i++) {\n\t\t\t\tweights[i] = 1;\n\t\t\t}\n\t\t}\n\t\tif(!knots) {\n\t\t\tknots = [];\n\t\t\tfor(let i=0; i<n+degree+1; i++) {\n\t\t\t\tknots[i] = i;\n\t\t\t}\n\t\t} else {\n\t\t\tif(knots.length !== n+degree+1) {\n\t\t\t\tthrow new Error('bad knot vector length');\n\t\t\t}\n\t\t}\n\t\tlet domain = [\n\t\t\tdegree,\n\t\t\tknots.length-1 - degree\n\t\t];\n\t\tlet low  = knots[domain[0]];\n\t\tlet high = knots[domain[1]];\n\t\tt = t * (high - low) + low;\n\t\tif(t < low || t > high) {\n\t\t\tthrow new Error('out of bounds');\n\t\t}\n\t\tlet s = domain[0];\n\t\tfor(; s<domain[1]; s++) {\n\t\t\tif(t >= knots[s] && t <= knots[s+1]) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tlet v = [];\n\t\tfor(let i=0; i<n; i++) {\n\t\t\tv[i] = [];\n\t\t\tfor(let j=0; j<d; j++) {\n\t\t\t\tv[i][j] = points[i][j] * weights[i];\n\t\t\t}\n\t\t\tv[i][d] = weights[i];\n\t\t}\n\t\tfor(let l=1; l<=degree+1; l++) {\n\t\t\tfor(let i=s; i>s-degree-1+l; i--) {\n\t\t\t\tlet alpha = (t - knots[i]) / (knots[i+degree+1-l] - knots[i]);\n\t\t\t\tfor(let j=0; j<d+1; j++) {\n\t\t\t\t\tv[i][j] = (1 - alpha) * v[i-1][j] + alpha * v[i][j];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tlet result = [];\n\t\tfor(let i=0; i<d; i++) {\n\t\t\tresult[i] = v[s][i] / v[s][d];\n\t\t}\n\t\treturn result;\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "bSplineFunction",
  ["self", "d"],
  sl.annotateFunction(function (_self, _d) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _d";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _size_1(_self);
    let _m = _hyphenMinus_2(_n, _d);
    let _k = _plusSignPlusSign_2(
      _plusSignPlusSign_2(
        _List_2(_d, 0),
        _asList_1(_nonemptyRange_3(0, _m, 1)),
      ),
      _List_2(_d, _m),
    );
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _bSplineFunctionPrimitive_5(_self, _d, _k, null, _t);
    }, ["t"]);
  }, ["self", "d"]),
  "{ :self :d |\n\t\tlet n = self.size;\n\t\tlet m = n - d;\n\t\tlet k = List(d, 0) ++ [0 .. m] ++ List(d, m);\n\t\t{ :t |\n\t\t\tself.bSplineFunctionPrimitive(d, k, nil, t)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cubicHermiteFunctionPrimitive",
  ["points", "tangents", "knots", "t"],
  sl.annotateFunction(function (_points, _tangents, _knots, _t) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _points, _tangents, _knots, _t";
      throw new Error(errorMessage);
    } /* Primitive */
    let points = _points;
    let tangents = _tangents;
    let knots = _knots;
    let t = _t;
    const derivative = false;
    const n = points.length;
    const d = points[0].length;
    const v = new Array(d);
    let i0, i1, scale;
    if (knots) {
      for (let i = 0; i < n - 1; i++) {
        if (t >= knots[i] && t <= knots[i + 1]) {
          break;
        }
      }
      if (i === n - 1) {
        throw new Error("out of bounds");
      }
      i0 = i;
      i1 = i + 1;
      const k0 = knots[i0];
      const k1 = knots[i1];
      scale = k1 - k0;
      t = (t - k0) / scale;
    } else {
      t = t * (n - 1);
      i0 = t | 0;
      i1 = i0 + 1;
      if (i0 > n - 1) {
        throw new Error("out of bounds");
      }
      if (i0 === n - 1) {
        i1 = i0;
      }
      scale = i1 - i0;
      t = (t - i0) / scale;
    }
    let h00, h10, h01, h11;
    if (derivative) {
      const t2 = t * t;
      h00 = 6 * t2 - 6 * t;
      h10 = 3 * t2 - 4 * t + 1;
      h01 = -6 * t2 + 6 * t;
      h11 = 3 * t2 - 2 * t;
    } else {
      const t2 = t * t;
      const it = 1 - t;
      const it2 = it * it;
      const tt = 2 * t;
      h00 = (1 + tt) * it2;
      h10 = t * it2;
      h01 = t2 * (3 - tt);
      h11 = t2 * (t - 1);
    }
    for (let i = 0; i < d; i++) {
      v[i] = h00 * points[i0][i] +
        h10 * tangents[i0][i] * scale +
        h01 * points[i1][i] +
        h11 * tangents[i1][i] * scale;
    }
    return v;
  }, ["points", "tangents", "knots", "t"]),
  "{ :points :tangents :knots :t |\n\t\t<primitive:\n\t\t/* https://github.com/thibauts/cubic-hermite-spline */\n\t\tlet points = _points;\n\t\tlet tangents = _tangents;\n\t\tlet knots = _knots;\n\t\tlet t = _t;\n\t\tconst derivative = false;\n\t\tconst n = points.length;\n\t\tconst d = points[0].length;\n\t\tconst v = new Array(d);\n\t\tlet i0, i1, scale;\n\t\tif(knots) {\n\t\t\tfor(let i=0; i<n-1; i++) {\n\t\t\t\tif(t >= knots[i] && t <= knots[i+1]) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(i === n-1) {\n\t\t\t\tthrow new Error('out of bounds');\n\t\t\t}\n\t\t\ti0 = i;\n\t\t\ti1 = i + 1;\n\t\t\tconst k0 = knots[i0];\n\t\t\tconst k1 = knots[i1];\n\t\t\tscale = k1 - k0;\n\t\t\tt = (t - k0) / scale;\n\t\t} else {\n\t\t\tt = t * (n - 1);\n\t\t\ti0 = t|0;\n\t\t\ti1 = i0 + 1;\n\t\t\tif(i0 > n-1) {\n\t\t\t\tthrow new Error('out of bounds');\n\t\t\t}\n\t\t\tif(i0 === n-1) {\n\t\t\t\ti1 = i0;\n\t\t\t}\n\t\t\tscale = i1 - i0;\n\t\t\tt = (t - i0) / scale;\n\t\t}\n\t\tlet h00, h10, h01, h11;\n\t\tif(derivative) {\n\t\t\tconst t2 = t * t;\n\t\t\th00 = 6 * t2 - 6 * t;\n\t\t\th10 = 3 * t2 - 4 * t + 1;\n\t\t\th01 = - 6 * t2 + 6 * t;\n\t\t\th11 = 3 * t2 - 2 * t;\n\t\t} else {\n\t\t\tconst t2 = t * t;\n\t\t\tconst it = 1 - t;\n\t\t\tconst it2 = it * it;\n\t\t\tconst tt = 2 * t;\n\t\t\th00 = (1 + tt) * it2;\n\t\t\th10 = t * it2;\n\t\t\th01 = t2 * (3 - tt);\n\t\t\th11 = t2 * (t - 1);\n\t\t}\n\t\tfor(let i=0; i<d; i++) {\n\t\t\tv[i] = h00 * points[i0][i] +\n\t\t\th10 * tangents[i0][i] * scale +\n\t\t\th01 * points[i1][i] +\n\t\t\th11 * tangents[i1][i] * scale;\n\t\t}\n\t\treturn v;\n\t\t>\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Interpolation",
  "cubicHermiteFunction",
  ["self", "tangents"],
  sl.annotateFunction(function (_self, _tangents) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _tangents";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSignEqualsSign_2(_t, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _last_1(_self);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _cubicHermiteFunctionPrimitive_4(_self, _tangents, null, _t);
        }, []),
      );
    }, ["t"]);
  }, ["self", "tangents"]),
  "{ :self :tangents |\n\t\t{ :t |\n\t\t\t(t >= 1).if {\n\t\t\t\tself.last\n\t\t\t} {\n\t\t\t\tself.cubicHermiteFunctionPrimitive(tangents, nil, t)\n\t\t\t}\n\t\t}\n\n\t}",
);
