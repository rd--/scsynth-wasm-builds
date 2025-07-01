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
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 | linearInterpolation(linearInterpolation(q11, q21, mu1), linearInterpolation(q12, q22, mu1), mu2) }",
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
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 | linearInterpolation(linearInterpolation(q11, q21, mu1), linearInterpolation(q12, q22, mu1), mu2) }",
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
  "{ :c000 :c100 :c010 :c110 :c001 :c101 :c011 :c111 :mu1 :mu2 :mu3 | linearInterpolation(bilinearInterpolation(c000, c100, c010, c110, mu1, mu2), bilinearInterpolation(c001, c101, c011, c111, mu1, mu2), mu3) }",
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
  "{ :c000 :c100 :c010 :c110 :c001 :c101 :c011 :c111 :mu1 :mu2 :mu3 | linearInterpolation(bilinearInterpolation(c000, c100, c010, c110, mu1, mu2), bilinearInterpolation(c001, c101, c011, c111, mu1, mu2), mu3) }",
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
  "{ :y1 :y2 :mu | blend(y1, y2, mu, { :y1 :y2 :mu | +(y1, (*(mu, (-(y2, y1))))) }) }",
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
  "{ :y1 :y2 :mu | blend(y1, y2, mu, { :y1 :y2 :mu | +(y1, (*(mu, (-(y2, y1))))) }) }",
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
  "{ :y1 :y2 :mu :aBlock:/3 | if(isList(mu), { collect(mu, { :each | blend(y1,y2, each, aBlock:/3) }) }, { aBlock(y1, y2, mu) }) }",
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
  "{ :y1 :y2 :mu :aBlock:/3 | if(isList(mu), { collect(mu, { :each | blend(y1,y2, each, aBlock:/3) }) }, { aBlock(y1, y2, mu) }) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let a0 = +(-(+((*(-0.5, y0)), (*(1.5, y1))), (*(1.5, y2))), (*(0.5, y3))); let a1 = -(+(-(y0, (*(2.5, y1))), (*(2, y2))), (*(0.5, y3))); let a2 = +((*(-0.5, y0)), (*(0.5, y2))); let a3 = y1; let mu2 = *(mu, mu); let mu3 = *(mu2, mu); +(+(+((*(a0, mu3)), (*(a1, mu2))), (*(a2, mu))), a3) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let a0 = +(-(+((*(-0.5, y0)), (*(1.5, y1))), (*(1.5, y2))), (*(0.5, y3))); let a1 = -(+(-(y0, (*(2.5, y1))), (*(2, y2))), (*(0.5, y3))); let a2 = +((*(-0.5, y0)), (*(0.5, y2))); let a3 = y1; let mu2 = *(mu, mu); let mu3 = *(mu2, mu); +(+(+((*(a0, mu3)), (*(a1, mu2))), (*(a2, mu))), a3) }",
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
  "{ :y1 :y2 :mu | let x = /((-(1, cos(pi(mu)))), 2); +((*(y1, (-(1, x)))), (*(y2, x))) }",
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
  "{ :y1 :y2 :mu | let x = /((-(1, cos(pi(mu)))), 2); +((*(y1, (-(1, x)))), (*(y2, x))) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let a0 = +(-(-(y3, y2), y0), y1); let a1 = -(-(y0, y1), a0); let a2 = -(y2, y0); let a3 = y1; let mu2 = *(mu, mu); let mu3 = *(mu2, mu); +(+(+((*(a0, mu3)), (*(a1, mu2))), (*(a2, mu))), a3) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let a0 = +(-(-(y3, y2), y0), y1); let a1 = -(-(y0, y1), a0); let a2 = -(y2, y0); let a3 = y1; let mu2 = *(mu, mu); let mu3 = *(mu2, mu); +(+(+((*(a0, mu3)), (*(a1, mu2))), (*(a2, mu))), a3) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let c0 = y1; let c1 = *(0.5, (-(y2, y0))); let c3 = +((*(1.5, (-(y1, y2)))), (*(0.5, (-(y3, y0))))); let c2 = -(+(-(y0, y1), c1), c3); +(*((+(*((+(*(c3, mu), c2)), mu), c1)), mu), c0) }",
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
  "{ :y0 :y1 :y2 :y3 :mu | let c0 = y1; let c1 = *(0.5, (-(y2, y0))); let c3 = +((*(1.5, (-(y1, y2)))), (*(0.5, (-(y3, y0))))); let c2 = -(+(-(y0, y1), c1), c3); +(*((+(*((+(*(c3, mu), c2)), mu), c1)), mu), c0) }",
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
  "{ :tension :bias | { :y0 :y1 :y2 :y3 :mu | hermiteInterpolation(y0, y1, y2, y3, mu, tension, bias) } }",
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
  "{ :tension :bias | { :y0 :y1 :y2 :y3 :mu | hermiteInterpolation(y0, y1, y2, y3, mu, tension, bias) } }",
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
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias | let mu2 = *(mu, mu); let mu3 = *(mu2, mu); let m0 = +((/(*(*((-(y1, y0)), (+(1, bias))), (-(1, tension))), 2)), (/(*(*((-(y2, y1)), (-(1, bias))), (-(1, tension))), 2))); let m1 = +((/(*(*((-(y2, y1)), (+(1, bias))), (-(1, tension))), 2)), (/(*(*((-(y3, y2)), (-(1, bias))), (-(1, tension))), 2))); let a0 = +(-((*(2, mu3)), (*(3, mu2))), 1); let a1 = +(-(mu3, (*(2, mu2))), mu); let a2 = -(mu3, mu2); let a3 = +((*(-2, mu3)), (*(3, mu2))); +(+(+((*(a0, y1)), (*(a1, m0))), (*(a2, m1))), (*(a3, y2))) }",
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
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias | let mu2 = *(mu, mu); let mu3 = *(mu2, mu); let m0 = +((/(*(*((-(y1, y0)), (+(1, bias))), (-(1, tension))), 2)), (/(*(*((-(y2, y1)), (-(1, bias))), (-(1, tension))), 2))); let m1 = +((/(*(*((-(y2, y1)), (+(1, bias))), (-(1, tension))), 2)), (/(*(*((-(y3, y2)), (-(1, bias))), (-(1, tension))), 2))); let a0 = +(-((*(2, mu3)), (*(3, mu2))), 1); let a1 = +(-(mu3, (*(2, mu2))), mu); let a2 = -(mu3, mu2); let a3 = +((*(-2, mu3)), (*(3, mu2))); +(+(+((*(a0, y1)), (*(a1, m0))), (*(a2, m1))), (*(a3, y2))) }",
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
  "{ :y1 :y2 :mu | +((*(y1, (-(1, mu)))), (*(y2, mu))) }",
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
  "{ :y1 :y2 :mu | +((*(y1, (-(1, mu)))), (*(y2, mu))) }",
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
  "{ :x :y | let n = -(size(x), 1); let differences = List(n); let weights = List(n); let firstDerivative = List(+(n, 1)); let epsilon = smallFloatEpsilon(1); let differentiateThreePoint = { :i :j1 :j2 :j3 | let x0 = at(y, j1); let x1 = at(y, j2); let x2 = at(y, j3); let t = -(at(x, i), at(x, j1)); let t1 = -(at(x, j2), at(x, j1)); let t2 = -(at(x, j3), at(x, j1)); let a = /((-(-(x2, x0), (*(/(t2, t1), (-(x1, x0)))))), (-((*(t2, t2)), (*(t1, t2))))); let b = /((-(-(x1, x0), (*(*(a, t1), t1)))), t1); +((*(*(2, a), t)), b) }; assertIsValidInterpolatorData(x, y, 5); toDo(1, n, { :i | atPut(differences, i, /((-(at(y, +(i, 1)), at(y, i))), (-(at(x, +(i, 1)), at(x, i))))) }); toDo(2, n, { :i | atPut(weights, i, abs(-(at(differences, i), at(differences, -(i, 1))))) }); toDo(3, -(n, 1), { :i | let wP = at(weights, +(i, 1)); let wM = at(weights, -(i, 1)); if((&(<(abs(wP), epsilon), { <(abs(wM), epsilon) })), { let xv = at(x, i); let xvP = at(x, +(i, 1)); let xvM = at(x, -(i, 1)); atPut(firstDerivative, i, (/(+((*((-(xvP, xv)), at(differences, -(i, 1)))), ((*((-(xv, xvM)), at(differences, i))))), (-(xvP, xvM))))) }, { atPut(firstDerivative, i, /((+((*(wP, at(differences, -(i, 1)))), (*(wM, at(differences, i))))), (+(wP, wM)))) }) }); atPut(firstDerivative, 1, differentiateThreePoint(1, 1, 2, 3)); atPut(firstDerivative, 2, differentiateThreePoint(2, 1, 2, 3)); atPut(firstDerivative, n, differentiateThreePoint(n, -(n, 1), n, +(n, 1))); atPut(firstDerivative, +(n, 1), differentiateThreePoint(+(n, 1), -(n, 1), n, +(n, 1))); hermiteInterpolatorCoefficientList(x, y, firstDerivative) }",
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
  "{ :x :y | let n = -(size(x), 1); let differences = List(n); let weights = List(n); let firstDerivative = List(+(n, 1)); let epsilon = smallFloatEpsilon(1); let differentiateThreePoint = { :i :j1 :j2 :j3 | let x0 = at(y, j1); let x1 = at(y, j2); let x2 = at(y, j3); let t = -(at(x, i), at(x, j1)); let t1 = -(at(x, j2), at(x, j1)); let t2 = -(at(x, j3), at(x, j1)); let a = /((-(-(x2, x0), (*(/(t2, t1), (-(x1, x0)))))), (-((*(t2, t2)), (*(t1, t2))))); let b = /((-(-(x1, x0), (*(*(a, t1), t1)))), t1); +((*(*(2, a), t)), b) }; assertIsValidInterpolatorData(x, y, 5); toDo(1, n, { :i | atPut(differences, i, /((-(at(y, +(i, 1)), at(y, i))), (-(at(x, +(i, 1)), at(x, i))))) }); toDo(2, n, { :i | atPut(weights, i, abs(-(at(differences, i), at(differences, -(i, 1))))) }); toDo(3, -(n, 1), { :i | let wP = at(weights, +(i, 1)); let wM = at(weights, -(i, 1)); if((&(<(abs(wP), epsilon), { <(abs(wM), epsilon) })), { let xv = at(x, i); let xvP = at(x, +(i, 1)); let xvM = at(x, -(i, 1)); atPut(firstDerivative, i, (/(+((*((-(xvP, xv)), at(differences, -(i, 1)))), ((*((-(xv, xvM)), at(differences, i))))), (-(xvP, xvM))))) }, { atPut(firstDerivative, i, /((+((*(wP, at(differences, -(i, 1)))), (*(wM, at(differences, i))))), (+(wP, wM)))) }) }); atPut(firstDerivative, 1, differentiateThreePoint(1, 1, 2, 3)); atPut(firstDerivative, 2, differentiateThreePoint(2, 1, 2, 3)); atPut(firstDerivative, n, differentiateThreePoint(n, -(n, 1), n, +(n, 1))); atPut(firstDerivative, +(n, 1), differentiateThreePoint(+(n, 1), -(n, 1), n, +(n, 1))); hermiteInterpolatorCoefficientList(x, y, firstDerivative) }",
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
  "{ :x :y | let c = akimaInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
  "{ :x :y | let c = akimaInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
      _tildeEqualsSign_2(_size_1(_x), _size_1(_y)),
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
  "{ :x :y :n | ifTrue((~=(size(x), size(y))), { error(x,'Interpolator: dimension mismatch') }); ifTrue((<(size(x), n)), { error(x,'Interpolator: number of points is too small') }); ifFalse(isStrictlyIncreasing(x), { error(x,'Interpolator: x not strictly increasing') }) }",
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
      _tildeEqualsSign_2(_size_1(_x), _size_1(_y)),
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
  "{ :x :y :n | ifTrue((~=(size(x), size(y))), { error(x,'Interpolator: dimension mismatch') }); ifTrue((<(size(x), n)), { error(x,'Interpolator: number of points is too small') }); ifFalse(isStrictlyIncreasing(x), { error(x,'Interpolator: x not strictly increasing') }) }",
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y | let n = -(size(x), 1); let h = List(n); let mu = List(n); let z = List(+(n, 1)); let b = List(n); let c = List(+(n, 1)); let d = List(n); assertIsValidInterpolatorData(x, y, 3); toDo(1, n, { :i | atPut(h, i, -(at(x, +(i, 1)), at(x, i))) }); atPut(mu, 1, 0); atPut(z, 1, 0); toDo(2, n, { :i | let g = -((*(2, (-(at(x, +(i, 1)), at(x, -(i, 1)))))), (*(at(h, -(i, 1)), at(mu, -(i, 1))))); atPut(mu, i, /(at(h, i), g)); atPut(z, i, /((-(/(*(3, (+(-((*(at(y, +(i, 1)), at(h, -(i, 1)))), (*(at(y, i), (-(at(x, +(i, 1)), at(x, -(i, 1))))))), (*(at(y, -(i, 1)), at(h, i)))))), (*(at(h, -(i, 1)), at(h, i)))), (*(at(h, -(i, 1)), at(z, -(i, 1)))))), g)) }); atPut(z, +(n, 1), 0); atPut(c, +(n, 1), 0); downToDo(n, 1, { :i | let dx = at(h, i); let dy = -(at(y, +(i, 1)), at(y, i)); atPut(c, i, -(at(z, i), (*(at(mu, i), at(c, +(i, 1)))))); atPut(b, i, -((/(dy, dx)), (/(*(dx, (+(at(c, +(i, 1)), (*(2, at(c, i)))))), 3)))); atPut(d, i, /((-(at(c, +(i, 1)), at(c, i))), (*(3, dx)))) }); collect(upOrDownTo(1, n), { :i | withoutTrailing([at(y, i), at(b, i), at(c, i), at(d, i)],isOrigin:/1) }) }",
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y | let n = -(size(x), 1); let h = List(n); let mu = List(n); let z = List(+(n, 1)); let b = List(n); let c = List(+(n, 1)); let d = List(n); assertIsValidInterpolatorData(x, y, 3); toDo(1, n, { :i | atPut(h, i, -(at(x, +(i, 1)), at(x, i))) }); atPut(mu, 1, 0); atPut(z, 1, 0); toDo(2, n, { :i | let g = -((*(2, (-(at(x, +(i, 1)), at(x, -(i, 1)))))), (*(at(h, -(i, 1)), at(mu, -(i, 1))))); atPut(mu, i, /(at(h, i), g)); atPut(z, i, /((-(/(*(3, (+(-((*(at(y, +(i, 1)), at(h, -(i, 1)))), (*(at(y, i), (-(at(x, +(i, 1)), at(x, -(i, 1))))))), (*(at(y, -(i, 1)), at(h, i)))))), (*(at(h, -(i, 1)), at(h, i)))), (*(at(h, -(i, 1)), at(z, -(i, 1)))))), g)) }); atPut(z, +(n, 1), 0); atPut(c, +(n, 1), 0); downToDo(n, 1, { :i | let dx = at(h, i); let dy = -(at(y, +(i, 1)), at(y, i)); atPut(c, i, -(at(z, i), (*(at(mu, i), at(c, +(i, 1)))))); atPut(b, i, -((/(dy, dx)), (/(*(dx, (+(at(c, +(i, 1)), (*(2, at(c, i)))))), 3)))); atPut(d, i, /((-(at(c, +(i, 1)), at(c, i))), (*(3, dx)))) }); collect(upOrDownTo(1, n), { :i | withoutTrailing([at(y, i), at(b, i), at(c, i), at(d, i)],isOrigin:/1) }) }",
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
  "{ :x :y | let c = cubicSplineInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
  "{ :x :y | let c = cubicSplineInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
  "{ :m | let k = size(m); let p = [collect(m,second:/1)]; let i = 1; whileTrue({ >((-(k, i)), 0) }, { let e = size(p); let z = []; toDo(1, -(k, i), { :j | let a = -(at(at(p, e), +(j, 1)), at(at(p, e), j)); let b = -(at(at(m, +(j, i)), 1), at(at(m, j), 1)); add(z,/(a, b)) }); add(p,z); i := +(i, 1) }); p }",
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
  "{ :m | let k = size(m); let p = [collect(m,second:/1)]; let i = 1; whileTrue({ >((-(k, i)), 0) }, { let e = size(p); let z = []; toDo(1, -(k, i), { :j | let a = -(at(at(p, e), +(j, 1)), at(at(p, e), j)); let b = -(at(at(m, +(j, i)), 1), at(at(m, j), 1)); add(z,/(a, b)) }); add(p,z); i := +(i, 1) }); p }",
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
  "{ :x :c :mu | let k = size(x); let i = -(binaryDetectIndex(k, { :each | >=(at(x, each), mu) }), 1); i := max(1,min(i,size(c))); evaluateUnivariatePolynomial(at(c, i),-(mu, at(x, i))) }",
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
  "{ :x :c :mu | let k = size(x); let i = -(binaryDetectIndex(k, { :each | >=(at(x, each), mu) }), 1); i := max(1,min(i,size(c))); evaluateUnivariatePolynomial(at(c, i),-(mu, at(x, i))) }",
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
      _tildeEqualsSign_2(_size_1(_x), _size_1(_firstDerivative)),
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y :firstDerivative | let n = -(size(x), 1); assertIsValidInterpolatorData(x, y, 2); ifTrue((~=(size(x), size(firstDerivative))), { error(x,'hermiteInterpolatorCoefficientList: firstDerivative list invalid') }); collect(upOrDownTo(1, n), { :i | let w = -(at(x, +(i, 1)), at(x, i)); let w2 = *(w, w); let yv = at(y, i); let yvP = at(y, +(i, 1)); let fd = at(firstDerivative, i); let fdP = at(firstDerivative, +(i, 1)); withoutTrailing([yv, at(firstDerivative, i), /((-(-(/(*(3, (-(yvP, yv))), w), (*(2, fd))), fdP)), w), /((+(+(/(*(2, (-(yv, yvP))), w), fd), fdP)), w2)],isOrigin:/1) }) }",
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
      _tildeEqualsSign_2(_size_1(_x), _size_1(_firstDerivative)),
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y :firstDerivative | let n = -(size(x), 1); assertIsValidInterpolatorData(x, y, 2); ifTrue((~=(size(x), size(firstDerivative))), { error(x,'hermiteInterpolatorCoefficientList: firstDerivative list invalid') }); collect(upOrDownTo(1, n), { :i | let w = -(at(x, +(i, 1)), at(x, i)); let w2 = *(w, w); let yv = at(y, i); let yvP = at(y, +(i, 1)); let fd = at(firstDerivative, i); let fdP = at(firstDerivative, +(i, 1)); withoutTrailing([yv, at(firstDerivative, i), /((-(-(/(*(3, (-(yvP, yv))), w), (*(2, fd))), fdP)), w), /((+(+(/(*(2, (-(yv, yvP))), w), fd), fdP)), w2)],isOrigin:/1) }) }",
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
        let _x = _asList_1(_upOrDownTo_2(1, _size_1(_y)));
        /* Statements */
        return _f_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL1 = _assertIsOfSize_2(_transposed_1(_self), 2);
        let _x = _at_2(__SPL1, 1);
        let _y = _at_2(__SPL1, 2);
        /* Statements */
        return _f_2(_x, _y);
      }, []),
    );
  }, ["self", "method"]),
  "{ :self :method | let f:/2 = namedInterpolatorFunction(method); if(isVector(self), { let y = self; let x = asList(upOrDownTo(1, size(y))); f(x, y) }, { let __SPL1 = assertIsOfSize(transposed(self), 2); let x = at(__SPL1, 1); let y = at(__SPL1, 2); f(x, y) }) }",
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
        let _x = _asList_1(_upOrDownTo_2(1, _size_1(_y)));
        /* Statements */
        return _f_2(_x, _y);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL1 = _assertIsOfSize_2(_transposed_1(_self), 2);
        let _x = _at_2(__SPL1, 1);
        let _y = _at_2(__SPL1, 2);
        /* Statements */
        return _f_2(_x, _y);
      }, []),
    );
  }, ["self", "method"]),
  "{ :self :method | let f:/2 = namedInterpolatorFunction(method); if(isVector(self), { let y = self; let x = asList(upOrDownTo(1, size(y))); f(x, y) }, { let __SPL1 = assertIsOfSize(transposed(self), 2); let x = at(__SPL1, 1); let y = at(__SPL1, 2); f(x, y) }) }",
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
  "{ :self | interpolation(self,'CubicSpline') }",
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
  "{ :self | interpolation(self,'CubicSpline') }",
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y | let n = -(size(x), 1); assertIsValidInterpolatorData(x, y, 2); collect(upOrDownTo(1, n), { :i | let dx = -(at(x, +(i, 1)), at(x, i)); let dy = -(at(y, +(i, 1)), at(y, i)); let m = /(dy, dx); withoutTrailing([at(y, i), m],isOrigin:/1) }) }",
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
    return _collect_2(
      _upOrDownTo_2(1, _n),
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
  "{ :x :y | let n = -(size(x), 1); assertIsValidInterpolatorData(x, y, 2); collect(upOrDownTo(1, n), { :i | let dx = -(at(x, +(i, 1)), at(x, i)); let dy = -(at(y, +(i, 1)), at(y, i)); let m = /(dy, dx); withoutTrailing([at(y, i), m],isOrigin:/1) }) }",
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
  "{ :x :y | let c = linearInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
  "{ :x :y | let c = linearInterpolatorCoefficientList(x,y); let xCopy = copy(x); { :mu | evaluateInterpolatorSegment(xCopy,c, mu) } }",
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
                    _fractionPart_1(_x),
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
                    _fractionPart_1(_x),
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
  "{ :self :aBlock | let k = size(self); caseOf(numArgs(aBlock), [->(3, { { :x | let i = integerPart(x); if((=(i, k)), { last(self) }, { aBlock . (at(self, i), at(self, +(i, 1)), fractionPart(x)) }) } }), ->(5, { { :x | let i = integerPart(x); if((=(i, k)), { last(self) }, { aBlock . (at(self, max((-(i, 1)),1)), at(self, i), at(self, +(i, 1)), at(self, min((+(i, 2)),k)), fractionPart(x)) }) } })], { error(self,'listInterpolation: not 3- or 5- argument block') }) }",
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
                    _fractionPart_1(_x),
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
                    _fractionPart_1(_x),
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
  "{ :self :aBlock | let k = size(self); caseOf(numArgs(aBlock), [->(3, { { :x | let i = integerPart(x); if((=(i, k)), { last(self) }, { aBlock . (at(self, i), at(self, +(i, 1)), fractionPart(x)) }) } }), ->(5, { { :x | let i = integerPart(x); if((=(i, k)), { last(self) }, { aBlock . (at(self, max((-(i, 1)),1)), at(self, i), at(self, +(i, 1)), at(self, min((+(i, 2)),k)), fractionPart(x)) }) } })], { error(self,'listInterpolation: not 3- or 5- argument block') }) }",
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
    let __SPL2 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SPL2, 1);
    let _n = _at_2(__SPL2, 2);
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
        _fractionPart_1(_x),
        _fractionPart_1(_y),
      );
    }, ["x", "y"]);
  }, ["self", "aBlock:/6"]),
  "{ :self :aBlock:/6 | let __SPL2 = assertIsOfSize([numberOfRows(self), numberOfColumns(self)], 2); let m = at(__SPL2, 1); let n = at(__SPL2, 2); { :x :y | let i1 = integerPart(x); let j1 = integerPart(y); let i2 = min(m,+(i1, 1)); let j2 = min(n,+(j1, 1)); aBlock(at(at(self, i1), j1), at(at(self, i2), j1), at(at(self, i1), j2), at(at(self, i2), j2), fractionPart(x), fractionPart(y)) } }",
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
    let __SPL2 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SPL2, 1);
    let _n = _at_2(__SPL2, 2);
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
        _fractionPart_1(_x),
        _fractionPart_1(_y),
      );
    }, ["x", "y"]);
  }, ["self", "aBlock:/6"]),
  "{ :self :aBlock:/6 | let __SPL2 = assertIsOfSize([numberOfRows(self), numberOfColumns(self)], 2); let m = at(__SPL2, 1); let n = at(__SPL2, 2); { :x :y | let i1 = integerPart(x); let j1 = integerPart(y); let i2 = min(m,+(i1, 1)); let j2 = min(n,+(j1, 1)); aBlock(at(at(self, i1), j1), at(at(self, i2), j1), at(at(self, i1), j2), at(at(self, i2), j2), fractionPart(x), fractionPart(y)) } }",
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
  "{ :x :y | let xCopy = copy(x); let yCopy = copy(y); let n = size(x); assertIsValidInterpolatorData(x, y, 1); if((=(n, 1)), { { :mu | at(yCopy, 1) } }, { { :mu | let i = binaryDetectIndex(n, { :each | >=(at(xCopy, each), mu) }); if((&(<=(i, n), { =(at(xCopy, i), mu) })), { at(yCopy, i) }, { if((=(i, 1)), { at(yCopy, 1) }, { if((>=(i, n)), { at(yCopy, n) }, { let d = -(mu, at(xCopy, -(i, 1))); let w = -(at(xCopy, i), at(xCopy, -(i, 1))); if((<(+(d, d), w)), { at(yCopy, -(i, 1)) }, { at(yCopy, i) }) }) }) }) } }) }",
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
  "{ :x :y | let xCopy = copy(x); let yCopy = copy(y); let n = size(x); assertIsValidInterpolatorData(x, y, 1); if((=(n, 1)), { { :mu | at(yCopy, 1) } }, { { :mu | let i = binaryDetectIndex(n, { :each | >=(at(xCopy, each), mu) }); if((&(<=(i, n), { =(at(xCopy, i), mu) })), { at(yCopy, i) }, { if((=(i, 1)), { at(yCopy, 1) }, { if((>=(i, n)), { at(yCopy, n) }, { let d = -(mu, at(xCopy, -(i, 1))); let w = -(at(xCopy, i), at(xCopy, -(i, 1))); if((<(+(d, d), w)), { at(yCopy, -(i, 1)) }, { at(yCopy, i) }) }) }) }) } }) }",
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
    let __SPL3 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SPL3, 1);
    let _n = _at_2(__SPL3, 2);
    let _o = _at_2(__SPL3, 3);
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
        _fractionPart_1(_x),
        _fractionPart_1(_y),
        _fractionPart_1(_z),
      );
    }, ["x", "y", "z"]);
  }, ["self", "aBlock:/11"]),
  "{ :self :aBlock:/11 | let __SPL3 = assertIsOfSize(shape(self), 3); let m = at(__SPL3, 1); let n = at(__SPL3, 2); let o = at(__SPL3, 3); { :x :y :z | let i1 = integerPart(x); let j1 = integerPart(y); let k1 = integerPart(z); let i2 = min(m,+(i1, 1)); let j2 = min(n,+(j1, 1)); let k2 = min(o,+(k1, 1)); aBlock(at(at(at(self, i1), j1), k1), at(at(at(self, i2), j1), k1), at(at(at(self, i1), j2), k1), at(at(at(self, i2), j2), k1), at(at(at(self, i1), j1), k2), at(at(at(self, i2), j1), k2), at(at(at(self, i1), j2), k2), at(at(at(self, i2), j2), k2), fractionPart(x), fractionPart(y), fractionPart(z)) } }",
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
    let __SPL3 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SPL3, 1);
    let _n = _at_2(__SPL3, 2);
    let _o = _at_2(__SPL3, 3);
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
        _fractionPart_1(_x),
        _fractionPart_1(_y),
        _fractionPart_1(_z),
      );
    }, ["x", "y", "z"]);
  }, ["self", "aBlock:/11"]),
  "{ :self :aBlock:/11 | let __SPL3 = assertIsOfSize(shape(self), 3); let m = at(__SPL3, 1); let n = at(__SPL3, 2); let o = at(__SPL3, 3); { :x :y :z | let i1 = integerPart(x); let j1 = integerPart(y); let k1 = integerPart(z); let i2 = min(m,+(i1, 1)); let j2 = min(n,+(j1, 1)); let k2 = min(o,+(k1, 1)); aBlock(at(at(at(self, i1), j1), k1), at(at(at(self, i2), j1), k1), at(at(at(self, i1), j2), k1), at(at(at(self, i2), j2), k1), at(at(at(self, i1), j1), k2), at(at(at(self, i2), j1), k2), at(at(at(self, i1), j2), k2), at(at(at(self, i2), j2), k2), fractionPart(x), fractionPart(y), fractionPart(z)) } }",
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
  "{ :self :threshold | <primitive: return sc.downsampleSteinarsson(_self, _threshold);>\n }",
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
      _thenTo_3(1, _plusSign_2(1, _anInteger), _size_1(_self)),
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
  "{ :self :anInteger | collect(thenTo(1, +(1, anInteger), size(self)), { :each | at(self, each) }) }",
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
          _transposed_1([_indices_1(_self), _self]),
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
  "{ :self :threshold | if(isVector(self), { basicDownsampleSteinarsson(transposed([indices(self), self]),threshold) }, { basicDownsampleSteinarsson(self,threshold) }) }",
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
    let __SPL4 = _assertIsOfSize_2([
      _numberOfRows_1(_self),
      _numberOfColumns_1(_self),
    ], 2);
    let _m = _at_2(__SPL4, 1);
    let _n = _at_2(__SPL4, 2);
    let __SPL5 = _assertIsOfSize_2(_shape, 2);
    let _p = _at_2(__SPL5, 1);
    let _q = _at_2(__SPL5, 2);
    let _i = _discretize_2(_hyphenMinusHyphenMinus_2(1, _m), _p);
    let _j = _discretize_2(_hyphenMinusHyphenMinus_2(1, _n), _q);
    /* Statements */
    return _table_3(
      _matrixInterpolation_2(_self, _bilinearInterpolation_6),
      _i,
      _j,
    );
  }, ["self", "shape"]),
  "{ :self :shape | let __SPL4 = assertIsOfSize([numberOfRows(self), numberOfColumns(self)], 2); let m = at(__SPL4, 1); let n = at(__SPL4, 2); let __SPL5 = assertIsOfSize(shape, 2); let p = at(__SPL5, 1); let q = at(__SPL5, 2); let i = discretize((--(1, m)),p); let j = discretize((--(1, n)),q); table(matrixInterpolation(self,bilinearInterpolation:/6),i, j) }",
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
  "{ :self :newSize | let factor = /((-(size(self), 1)), max((-(newSize, 1)),1)); collect(to(0,-(newSize, 1)), { :each | atBlend(self,+(1, (*(each, factor)))) }) }",
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
    _do_2(
      _to_2(0, _hyphenMinus_2(_size_1(_self), 1)),
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
  "{ :self :anInteger | let answer = List(*(size(self), anInteger), 0); do(to(0,-(size(self), 1)), { :each | atPut(answer, +((*(each, anInteger)), 1), at(self, +(each, 1))) }); answer }",
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
    let __SPL6 = _assertIsOfSize_2(_shape_1(_self), 3);
    let _m = _at_2(__SPL6, 1);
    let _n = _at_2(__SPL6, 2);
    let _o = _at_2(__SPL6, 3);
    let __SPL7 = _assertIsOfSize_2(_shape, 3);
    let _p = _at_2(__SPL7, 1);
    let _q = _at_2(__SPL7, 2);
    let _r = _at_2(__SPL7, 3);
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
  "{ :self :shape | let __SPL6 = assertIsOfSize(shape(self), 3); let m = at(__SPL6, 1); let n = at(__SPL6, 2); let o = at(__SPL6, 3); let __SPL7 = assertIsOfSize(shape, 3); let p = at(__SPL7, 1); let q = at(__SPL7, 2); let r = at(__SPL7, 3); let i = discretize((--(1, m)),p); let j = discretize((--(1, n)),q); let k = discretize((--(1, o)),r); table(volumeInterpolation(self,trilinearInterpolation:/11),i, j, k) }",
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
  "{ :x | -(0.5, sin((/(arcSin((-(1, (*(2, x))))), 3)))) }",
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
  "{ :x :m | let k = size(m); let p = [collect(m,second:/1)]; let i = 1; whileTrue({ >((-(k, i)), 0) }, { let e = size(p); let z = []; toDo(1, -(k, i), { :j | let a = *((-(x, at(at(m, j), 1))), at(at(p, e), +(j, 1))); let b = *((-(x, at(at(m, +(j, i)), 1))), at(at(p, e), j)); let c = -(at(at(m, +(j, i)), 1), at(at(m, j), 1)); add(z,/((-(a, b)), c)) }); add(p,z); i := +(i, 1) }); p }",
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
          let _p = _binomialPascal_2(_hyphenMinus_2(_negated_1(_n), 1), _i);
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
  "{ :n | { :x | let answer = 0; toDo(0, n, { :i | let p = binomialPascal(-(negated(n), 1), i); let q = binomialPascal(+(*(2, n), 1), -(n, i)); let r = ^(x, (+(+(n, i), 1))); answer := +(answer, (*(*(p, q), r))) }); answer } }",
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
          let _p = _binomialPascal_2(_hyphenMinus_2(_negated_1(_n), 1), _i);
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
  "{ :n | { :x | let answer = 0; toDo(0, n, { :i | let p = binomialPascal(-(negated(n), 1), i); let q = binomialPascal(+(*(2, n), 1), -(n, i)); let r = ^(x, (+(+(n, i), 1))); answer := +(answer, (*(*(p, q), r))) }); answer } }",
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
  "{ :x | *(*(x, x), (-(3, (*(2, x))))) }",
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
  "{ :x | *(*(x, x), (-(3, (*(2, x))))) }",
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
  "{ :x | *(*(*(x, x), x), (+(*(x, (-(*(6, x), 15))), 10))) }",
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
  "{ :x | *(*(*(x, x), x), (+(*(x, (-(*(6, x), 15))), 10))) }",
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
  "{ :x :y | let n = size(x); let sx = sum(x); let sy = sum(y); let sxx = sum((*(x, x))); let syy = sum((*(y, y))); let sxy = sum((*(x, y))); let xx = -(sxx, (/(*(sx, sx), n))); let yy = -(syy, (/(*(sy, sy), n))); let xy = -(sxy, (/(*(sx, sy), n))); if((|(<(n, 2), { =(abs(xx), 0) })), { error(x,'List>>simpleLinearRegression: too few points or infinite slope') }, { let b = /(xy, xx); let a = -((/(sy, n)), (/(*(b, sx), n))); let r = if((=(abs(yy), 0)), { 1 }, { /(xy, sqrt((*(xx, yy)))) }); [a, b, r] }) }",
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
        let _x = _asList_1(_upOrDownTo_2(1, _size_1(_self)));
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
        let __SPL8 = _assertIsOfSize_2(_transposed_1(_self), 2);
        let _x = _at_2(__SPL8, 1);
        let _y = _at_2(__SPL8, 2);
        /* Statements */
        return _simpleLinearRegression_2(_x, _y);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { let x = asList(upOrDownTo(1, size(self))); let y = self; simpleLinearRegression(x,y) }, { let __SPL8 = assertIsOfSize(transposed(self), 2); let x = at(__SPL8, 1); let y = at(__SPL8, 2); simpleLinearRegression(x,y) }) }",
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
                  _tildeEqualsSign_2(_x1, _x2),
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
          _median_1(
            _collect_2(
              _upOrDownTo_2(1, _k),
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
            ),
          ),
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
  "{ :x :y | if((=(size(x), size(y))), { let k = size(x); let slope = []; let count = 0; let m = nil; toDo(1, k, { :i | let x1 = at(x, i); let y1 = at(y, i); toDo((+(i, 1)), k, { :j | let x2 = at(x, j); let y2 = at(y, j); ifTrue((~=(x1, x2)), { add(slope,/((-(y2, y1)), (-(x2, x1)))); count := +(count, 1) }) }) }); m := median(slope); [median(collect(upOrDownTo(1, k), { :i | -(at(y, i), (*(m, at(x, i)))) })), m] }, { error(xList,'theilSenEstimator: invalid input') }) }",
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
          _asList_1(_upOrDownTo_2(1, _size_1(_self))),
          _self,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SPL9 = _assertIsOfSize_2(_transposed_1(_self), 2);
        let _x = _at_2(__SPL9, 1);
        let _y = _at_2(__SPL9, 2);
        /* Statements */
        return _theilSenEstimator_2(_x, _y);
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isVector(self), { theilSenEstimator(asList(upOrDownTo(1, size(self))), self) }, { let __SPL9 = assertIsOfSize(transposed(self), 2); let x = at(__SPL9, 1); let y = at(__SPL9, 2); theilSenEstimator(x, y) }) }",
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
  "{ :self | caseOf(self, [->('Akima', { akimaInterpolator:/2 }), ->('CubicSpline', { cubicSplineInterpolator:/2 }), ->('Linear', { linearInterpolator:/2 }), ->('NearestNeighbour', { nearestNeighbourInterpolator:/2 })], { error(self,'interpolatorFunction: unknown method') }) }",
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
  "{ :y :m :w | asList(uncheckedSavitzkyGolayFilter(y, m, w)) }",
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
  "{ :y :m :w | <primitive: function getHs(h, center, half, derivative) {\n\t\t\tlet hs = 0;\n\t\t\tlet count = 0;\n\t\t\tfor (let i = center - half; i < center + half; i++) {\n\t\t\t\tif (i >= 0 && i < h.length - 1) {\n\t\t\t\t\ths += h[i + 1] - h[i];\n\t\t\t\t\tcount++;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn (hs / count) ** derivative;\n\t\t}\n\t\tfunction gramPoly(i, m, k, s) {\n\t\t\tlet Grampoly = 0;\n\t\t\tif (k > 0) {\n\t\t\t\tGrampoly =\n\t\t\t\t((4 * k - 2) / (k * (2 * m - k + 1))) *\n\t\t\t\t(i * gramPoly(i, m, k - 1, s) + s * gramPoly(i, m, k - 1, s - 1)) -\n\t\t\t\t(((k - 1) * (2 * m + k)) / (k * (2 * m - k + 1))) *\n\t\t\t\tgramPoly(i, m, k - 2, s);\n\t\t\t} else if (k === 0 && s === 0) {\n\t\t\t\tGrampoly = 1;\n\t\t\t} else {\n\t\t\t\tGrampoly = 0;\n\t\t\t}\n\t\t\treturn Grampoly;\n\t\t}\n\t\tfunction genFact(a, b) {\n\t\t\tlet gf = 1;\n\t\t\tif (a >= b) {\n\t\t\t\tfor (let j = a - b + 1; j <= a; j++) {\n\t\t\t\t\tgf *= j;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn gf;\n\t\t}\n\t\tfunction weight(i, t, m, n, s) {\n\t\t\tlet sum = 0;\n\t\t\tfor (let k = 0; k <= n; k++) {\n\t\t\t\tsum +=\n\t\t\t\t(2 * k + 1) *\n\t\t\t\t(genFact(2 * m, k) / genFact(2 * m + k + 1, k + 1)) *\n\t\t\t\tgramPoly(i, m, k, 0) *\n\t\t\t\tgramPoly(t, m, k, s);\n\t\t\t}\n\t\t\treturn sum;\n\t\t}\n\t\tfunction fullWeights(m, n, s) {\n\t\t\tconst weights = new Array(m);\n\t\t\tconst np = Math.floor(m / 2);\n\t\t\tfor (let t = -np; t <= np; t++) {\n\t\t\t\tweights[t + np] = new Float64Array(m);\n\t\t\t\tfor (let j = -np; j <= np; j++) {\n\t\t\t\t\tweights[t + np][j + np] = weight(j, t, np, n, s);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn weights;\n\t\t}\n\t\tlet ys = _y;\n\t\tlet xs = 1;\n\t\tlet windowSize = _w;\n\t\tlet derivative = 0;\n\t\tlet polynomial = _m;\n\t\tconst half = Math.floor(windowSize / 2);\n\t\tconst np = ys.length;\n\t\tconst ans = new Float64Array(np);\n\t\tconst weights = fullWeights(windowSize, polynomial, derivative);\n\t\tlet hs = xs ** derivative;\n\t\tlet constantH = true;\n\t\tfor (let i = 0; i < half; i++) {\n\t\t\tconst wg1 = weights[half - i - 1];\n\t\t\tconst wg2 = weights[half + i + 1];\n\t\t\tlet d1 = 0;\n\t\t\tlet d2 = 0;\n\t\t\tfor (let l = 0; l < windowSize; l++) {\n\t\t\t\td1 += wg1[l] * ys[l];\n\t\t\t\td2 += wg2[l] * ys[np - windowSize + l];\n\t\t\t}\n\t\t\tif (constantH) {\n\t\t\t\tans[half - i - 1] = d1 / hs;\n\t\t\t\tans[np - half + i] = d2 / hs;\n\t\t\t} else {\n\t\t\t\ths = getHs(xs, half - i - 1, half, derivative);\n\t\t\t\tans[half - i - 1] = d1 / hs;\n\t\t\t\ths = getHs(xs, np - half + i, half, derivative);\n\t\t\t\tans[np - half + i] = d2 / hs;\n\t\t\t}\n\t\t}\n\t\tconst wg = weights[half];\n\t\tfor (let i = windowSize; i <= np; i++) {\n\t\t\tlet d = 0;\n\t\t\tfor (let l = 0; l < windowSize; l++) d += wg[l] * ys[l + i - windowSize];\n\t\t\tif (!constantH) {\n\t\t\t\ths = getHs(xs, i - half - 1, half, derivative);\n\t\t\t}\n\t\t\tans[i - half - 1] = d / hs;\n\t\t}\n\t\treturn ans>\n }",
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
  "{ :p :d :k :w :t | <primitive: let t = _t;\n\t\tlet degree = _d;\n\t\tlet points = _p;\n\t\tlet knots = _k\n\t\tlet weights = _w;\n\t\tlet n = points.length;\n\t\tlet d = points[0].length;\n\t\tif(degree < 1) {\n\t\t\tthrow new Error('degree must be at least 1 (linear)');\n\t\t}\n\t\tif(degree > (n-1)) {\n\t\t\tthrow new Error('degree must be less than or equal to point count - 1');\n\t\t}\n\t\tif(!weights) {\n\t\t\tweights = [];\n\t\t\tfor(let i=0; i<n; i++) {\n\t\t\t\tweights[i] = 1;\n\t\t\t}\n\t\t}\n\t\tif(!knots) {\n\t\t\tknots = [];\n\t\t\tfor(let i=0; i<n+degree+1; i++) {\n\t\t\t\tknots[i] = i;\n\t\t\t}\n\t\t} else {\n\t\t\tif(knots.length !== n+degree+1) {\n\t\t\t\tthrow new Error('bad knot vector length');\n\t\t\t}\n\t\t}\n\t\tlet domain = [\n\t\t\tdegree,\n\t\t\tknots.length-1 - degree\n\t\t];\n\t\tlet low  = knots[domain[0]];\n\t\tlet high = knots[domain[1]];\n\t\tt = t * (high - low) + low;\n\t\tif(t < low || t > high) {\n\t\t\tthrow new Error('out of bounds');\n\t\t}\n\t\tlet s = domain[0];\n\t\tfor(; s<domain[1]; s++) {\n\t\t\tif(t >= knots[s] && t <= knots[s+1]) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tlet v = [];\n\t\tfor(let i=0; i<n; i++) {\n\t\t\tv[i] = [];\n\t\t\tfor(let j=0; j<d; j++) {\n\t\t\t\tv[i][j] = points[i][j] * weights[i];\n\t\t\t}\n\t\t\tv[i][d] = weights[i];\n\t\t}\n\t\tfor(let l=1; l<=degree+1; l++) {\n\t\t\tfor(let i=s; i>s-degree-1+l; i--) {\n\t\t\t\tlet alpha = (t - knots[i]) / (knots[i+degree+1-l] - knots[i]);\n\t\t\t\tfor(let j=0; j<d+1; j++) {\n\t\t\t\t\tv[i][j] = (1 - alpha) * v[i-1][j] + alpha * v[i][j];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tlet result = [];\n\t\tfor(let i=0; i<d; i++) {\n\t\t\tresult[i] = v[s][i] / v[s][d];\n\t\t}\n\t\treturn result;>\n }",
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
        _numberSign_2(0, _d),
        _asList_1(_upOrDownTo_2(0, _m)),
      ),
      _numberSign_2(_m, _d),
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
  "{ :self :d | let n = size(self); let m = -(n, d); let k = ++(++((#(0, d)), asList(upOrDownTo(0, m))), (#(m, d))); { :t | bSplineFunctionPrimitive(self,d, k, nil, t) } }",
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
    let n = points.length;
    let d = points[0].length;
    let v = new Array(d);
    let knots = _knots;
    let derivative = false;
    let t = _t;
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
      let k0 = knots[i0];
      let k1 = knots[i1];
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
      let t2 = t * t;
      h00 = 6 * t2 - 6 * t;
      h10 = 3 * t2 - 4 * t + 1;
      h01 = -6 * t2 + 6 * t;
      h11 = 3 * t2 - 2 * t;
    } else {
      let t2 = t * t;
      let it = 1 - t;
      let it2 = it * it;
      let tt = 2 * t;
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
  "{ :points :tangents :knots :t | <primitive: let points = _points;\n\t\tlet tangents = _tangents;\n\t\tlet n = points.length;\n\t\tlet d = points[0].length;\n\t\tlet v = new Array(d);\n\t\tlet knots = _knots;\n\t\tlet derivative = false;\n\t\tlet t = _t;\n\t\tlet i0, i1, scale;\n\t\tif(knots) {\n\t\t\tfor(let i=0; i<n-1; i++) {\n\t\t\t\tif(t >= knots[i] && t <= knots[i+1]) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(i === n-1) {\n\t\t\t\tthrow new Error('out of bounds');\n\t\t\t}\n\t\t\ti0 = i;\n\t\t\ti1 = i + 1;\n\t\t\tlet k0 = knots[i0];\n\t\t\tlet k1 = knots[i1];\n\t\t\tscale = k1 - k0;\n\t\t\tt = (t - k0) / scale;\n\t\t} else {\n\t\t\tt = t * (n - 1);\n\t\t\ti0 = t|0;\n\t\t\ti1 = i0 + 1;\n\t\t\tif(i0 > n-1) {\n\t\t\t\tthrow new Error('out of bounds');\n\t\t\t}\n\t\t\tif(i0 === n-1) {\n\t\t\t\ti1 = i0;\n\t\t\t}\n\t\t\tscale = i1 - i0;\n\t\t\tt = (t - i0) / scale;\n\t\t}\n\t\tlet h00, h10, h01, h11;\n\t\tif(derivative) {\n\t\t\tlet t2 = t * t;\n\t\t\th00 = 6 * t2 - 6 * t;\n\t\t\th10 = 3 * t2 - 4 * t + 1;\n\t\t\th01 = - 6 * t2 + 6 * t;\n\t\t\th11 = 3 * t2 - 2 * t;\n\t\t} else {\n\t\t\tlet t2 = t * t;\n\t\t\tlet it = 1 - t;\n\t\t\tlet it2 = it * it;\n\t\t\tlet tt = 2 * t;\n\t\t\th00 = (1 + tt) * it2;\n\t\t\th10 = t * it2;\n\t\t\th01 = t2 * (3 - tt);\n\t\t\th11 = t2 * (t - 1);\n\t\t}\n\t\tfor(let i=0; i<d; i++) {\n\t\t\tv[i] = h00 * points[i0][i] +\n\t\t\th10 * tangents[i0][i] * scale +\n\t\t\th01 * points[i1][i] +\n\t\t\th11 * tangents[i1][i] * scale;\n\t\t}\n\t\treturn v;>\n }",
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
      return _cubicHermiteFunctionPrimitive_4(_self, _tangents, null, _t);
    }, ["t"]);
  }, ["self", "tangents"]),
  "{ :self :tangents | { :t | cubicHermiteFunctionPrimitive(self,tangents, nil, t) } }",
);
