sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "bilinearInterpolation",
  ["q11", "q21", "q12", "q22", "mu1", "mu2"],
  function (_q11, _q21, _q12, _q22, _mu1, _mu2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _q11, _q21, _q12, _q22, _mu1, _mu2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolation_3(
      _linearInterpolation_3(_q11, _q21, _mu1),
      _linearInterpolation_3(_q12, _q22, _mu1),
      _mu2,
    );
  },
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 |\n\t\tlinearInterpolation(\n\t\t\tlinearInterpolation(q11, q21, mu1),\n\t\t\tlinearInterpolation(q12, q22, mu1),\n\t\t\tmu2\n\t\t)\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "bilinearInterpolation",
  ["q11", "q21", "q12", "q22", "mu1", "mu2"],
  function (_q11, _q21, _q12, _q22, _mu1, _mu2) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage =
        "Arity: expected 6, _q11, _q21, _q12, _q22, _mu1, _mu2";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _linearInterpolation_3(
      _linearInterpolation_3(_q11, _q21, _mu1),
      _linearInterpolation_3(_q12, _q22, _mu1),
      _mu2,
    );
  },
  "{ :q11 :q21 :q12 :q22 :mu1 :mu2 |\n\t\tlinearInterpolation(\n\t\t\tlinearInterpolation(q11, q21, mu1),\n\t\t\tlinearInterpolation(q12, q22, mu1),\n\t\t\tmu2\n\t\t)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _blend_4(_y1, _y2, _mu, function (_y1, _y2, _mu) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
    });
  },
  "{ :y1 :y2 :mu |\n\t\ty1.blend(y2, mu) { :y1 :y2 :mu |\n\t\t\ty1 + (mu * (y2 - y1))\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _blend_4(_y1, _y2, _mu, function (_y1, _y2, _mu) {
      /* ArityCheck */
      if (arguments.length !== 3) {
        const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(_y1, _asterisk_2(_mu, _hyphenMinus_2(_y2, _y1)));
    });
  },
  "{ :y1 :y2 :mu |\n\t\ty1.blend(y2, mu) { :y1 :y2 :mu |\n\t\t\ty1 + (mu * (y2 - y1))\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu", "aBlock:/3"],
  function (_y1, _y2, _mu, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _y1, _y2, _mu, _aBlock_3";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSequence_1(_mu), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_mu, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _blend_4(_y1, _y2, _each, _aBlock_3);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_3(_y1, _y2, _mu);
    });
  },
  "{ :y1 :y2 :mu :aBlock:/3 |\n\t\tmu.isSequence.if {\n\t\t\tmu.collect { :each |\n\t\t\t\ty1.blend(y2, each, aBlock:/3)\n\t\t\t}\n\t\t} {\n\t\t\taBlock(y1, y2, mu)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "blend",
  ["y1", "y2", "mu", "aBlock:/3"],
  function (_y1, _y2, _mu, _aBlock_3) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _y1, _y2, _mu, _aBlock_3";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isSequence_1(_mu), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _collect_2(_mu, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _blend_4(_y1, _y2, _each, _aBlock_3);
      });
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _aBlock_3(_y1, _y2, _mu);
    });
  },
  "{ :y1 :y2 :mu :aBlock:/3 |\n\t\tmu.isSequence.if {\n\t\t\tmu.collect { :each |\n\t\t\t\ty1.blend(y2, each, aBlock:/3)\n\t\t\t}\n\t\t} {\n\t\t\taBlock(y1, y2, mu)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "catmullRomInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = (-0.5 * y0) + (1.5 * y1) - (1.5 * y2) + (0.5 * y3);\n\t\tlet a1 = y0 - (2.5 * y1) + (2 * y2) - (0.5 * y3);\n\t\tlet a2 = (-0.5 * y0) + (0.5 * y2);\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "catmullRomInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = (-0.5 * y0) + (1.5 * y1) - (1.5 * y2) + (0.5 * y3);\n\t\tlet a1 = y0 - (2.5 * y1) + (2 * y2) - (0.5 * y3);\n\t\tlet a2 = (-0.5 * y0) + (0.5 * y2);\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "cosineInterpolation",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _solidus_2(_hyphenMinus_2(1, _cos_1(_pi_1(_mu))), 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _x)),
      _asterisk_2(_y2, _x),
    );
  },
  "{ :y1 :y2 :mu |\n\t\tlet x = (1 - mu.pi.cos) / 2;\n\t\t(y1 * (1 - x)) + (y2 * x)\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "cosineInterpolation",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x = _solidus_2(_hyphenMinus_2(1, _cos_1(_pi_1(_mu))), 2);
    /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _x)),
      _asterisk_2(_y2, _x),
    );
  },
  "{ :y1 :y2 :mu |\n\t\tlet x = (1 - mu.pi.cos) / 2;\n\t\t(y1 * (1 - x)) + (y2 * x)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "cubicInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = y3 - y2 - y0 + y1;\n\t\tlet a1 = y0 - y1 - a0;\n\t\tlet a2 = y2 - y0;\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "cubicInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet a0 = y3 - y2 - y0 + y1;\n\t\tlet a1 = y0 - y1 - a0;\n\t\tlet a2 = y2 - y0;\n\t\tlet a3 = y1;\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\t(a0 * mu3) + (a1 * mu2) + (a2 * mu) + a3\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet c0 = y1;\n\t\tlet c1 = 0.5 * (y2 - y0);\n\t\tlet c3 = (1.5 * (y1 - y2)) + (0.5 * (y3 - y0));\n\t\tlet c2 = y0 - y1 + c1 - c3;\n\t\t((c3 * mu + c2) * mu + c1) * mu + c0\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu"],
  function (_y0, _y1, _y2, _y3, _mu) {
    /* ArityCheck */
    if (arguments.length !== 5) {
      const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu |\n\t\tlet c0 = y1;\n\t\tlet c1 = 0.5 * (y2 - y0);\n\t\tlet c3 = (1.5 * (y1 - y2)) + (0.5 * (y3 - y0));\n\t\tlet c2 = y0 - y1 + c1 - c3;\n\t\t((c3 * mu + c2) * mu + c1) * mu + c0\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["tension", "bias"],
  function (_tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tension, _bias";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_y0, _y1, _y2, _y3, _mu) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hermiteInterpolation_7(_y0, _y1, _y2, _y3, _mu, _tension, _bias);
    });
  },
  "{ :tension :bias |\n\t\t{ :y0 :y1 :y2 :y3 :mu |\n\t\t\thermiteInterpolation(y0, y1, y2, y3, mu, tension, bias)\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["tension", "bias"],
  function (_tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _tension, _bias";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return (function (_y0, _y1, _y2, _y3, _mu) {
      /* ArityCheck */
      if (arguments.length !== 5) {
        const errorMessage = "Arity: expected 5, _y0, _y1, _y2, _y3, _mu";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _hermiteInterpolation_7(_y0, _y1, _y2, _y3, _mu, _tension, _bias);
    });
  },
  "{ :tension :bias |\n\t\t{ :y0 :y1 :y2 :y3 :mu |\n\t\t\thermiteInterpolation(y0, y1, y2, y3, mu, tension, bias)\n\t\t}\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu", "tension", "bias"],
  function (_y0, _y1, _y2, _y3, _mu, _tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _y0, _y1, _y2, _y3, _mu, _tension, _bias";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias |\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\tlet m0 = ((y1 - y0) * (1 + bias) * (1 - tension) / 2) + ((y2 - y1) * (1 - bias) * (1 - tension) / 2);\n\t\tlet m1 = ((y2 - y1) * (1 + bias) * (1 - tension) / 2) + ((y3 - y2) * (1 - bias) * (1 - tension) / 2);\n\t\tlet a0 = (2 * mu3) - (3 * mu2) + 1;\n\t\tlet a1 = mu3 - (2 * mu2) + mu;\n\t\tlet a2 = mu3 - mu2;\n\t\tlet a3 = (-2 * mu3) + (3 * mu2);\n\t\t(a0 * y1) + (a1 * m0) + (a2 * m1) + (a3 * y2)\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "hermiteInterpolation",
  ["y0", "y1", "y2", "y3", "mu", "tension", "bias"],
  function (_y0, _y1, _y2, _y3, _mu, _tension, _bias) {
    /* ArityCheck */
    if (arguments.length !== 7) {
      const errorMessage =
        "Arity: expected 7, _y0, _y1, _y2, _y3, _mu, _tension, _bias";
      /* console.error(errorMessage); */
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
  },
  "{ :y0 :y1 :y2 :y3 :mu :tension :bias |\n\t\tlet mu2 = mu * mu;\n\t\tlet mu3 = mu2 * mu;\n\t\tlet m0 = ((y1 - y0) * (1 + bias) * (1 - tension) / 2) + ((y2 - y1) * (1 - bias) * (1 - tension) / 2);\n\t\tlet m1 = ((y2 - y1) * (1 + bias) * (1 - tension) / 2) + ((y3 - y2) * (1 - bias) * (1 - tension) / 2);\n\t\tlet a0 = (2 * mu3) - (3 * mu2) + 1;\n\t\tlet a1 = mu3 - (2 * mu2) + mu;\n\t\tlet a2 = mu3 - mu2;\n\t\tlet a3 = (-2 * mu3) + (3 * mu2);\n\t\t(a0 * y1) + (a1 * m0) + (a2 * m1) + (a3 * y2)\n\t}",
);

sl.addMethod(
  "SmallFloat",
  "Interpolation",
  "linearInterpolation",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _mu)),
      _asterisk_2(_y2, _mu),
    );
  },
  "{ :y1 :y2 :mu |\n\t\t(y1 * (1 - mu)) + (y2 * mu)\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "linearInterpolation",
  ["y1", "y2", "mu"],
  function (_y1, _y2, _mu) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _y1, _y2, _mu";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(
      _asterisk_2(_y1, _hyphenMinus_2(1, _mu)),
      _asterisk_2(_y2, _mu),
    );
  },
  "{ :y1 :y2 :mu |\n\t\t(y1 * (1 - mu)) + (y2 * mu)\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "listInterpolation",
  ["self", "aBlock"],
  function (_self, _aBlock) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _size_1(_self);
    /* Statements */
    return _caseOfOtherwise_3(_numArgs_1(_aBlock), [
      _hyphenMinusGreaterThanSign_2(3, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return (function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _integerPart_1(_x);
          /* Statements */
          return _if_3(_equalsSign_2(_i, _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _last_1(_self);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock(
              _at_2(_self, _i),
              _at_2(_self, _plusSign_2(_i, 1)),
              _fractionPart_1(_x),
            );
          });
        });
      }),
      _hyphenMinusGreaterThanSign_2(5, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return (function (_x) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _x";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Temporaries */
          let _i = _integerPart_1(_x);
          /* Statements */
          return _if_3(_equalsSign_2(_i, _k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _last_1(_self);
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              /* console.error(errorMessage); */
              throw new Error(errorMessage);
            } /* Statements */
            return _aBlock(
              _at_2(_self, _max_2(_hyphenMinus_2(_i, 1), 1)),
              _at_2(_self, _i),
              _at_2(_self, _plusSign_2(_i, 1)),
              _at_2(_self, _min_2(_plusSign_2(_i, 2), _k)),
              _fractionPart_1(_x),
            );
          });
        });
      }),
    ], function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "listInterpolation: not 3- or 5- argument block");
    });
  },
  "{ :self :aBlock |\n\t\tlet k = self.size;\n\t\taBlock.numArgs.caseOfOtherwise([\n\t\t\t3 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tx.fractionPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t},\n\t\t\t5 -> {\n\t\t\t\t{ :x |\n\t\t\t\t\tlet i = x.integerPart;\n\t\t\t\t\t(i = k).if {\n\t\t\t\t\t\tself.last\n\t\t\t\t\t} {\n\t\t\t\t\t\taBlock . (\n\t\t\t\t\t\t\tself[(i - 1).max(1)],\n\t\t\t\t\t\t\tself[i],\n\t\t\t\t\t\t\tself[i + 1],\n\t\t\t\t\t\t\tself[(i + 2).min(k)],\n\t\t\t\t\t\t\tx.fractionPart\n\t\t\t\t\t\t)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t]) {\n\t\t\tself.error('listInterpolation: not 3- or 5- argument block')\n\t\t}\n\t}",
);

sl.addMethod(
  "List",
  "Interpolation",
  "matrixInterpolation",
  ["self", "aBlock:/6"],
  function (_self, _aBlock_6) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_6";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym146 = _assertIsOfSize_2([
        _numberOfRows_1(_self),
        _numberOfColumns_1(_self),
      ], 2),
      _m = _at_2(__genSym146, 1),
      _n = _at_2(__genSym146, 2);
    /* Statements */
    return (function (_x, _y) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _x, _y";
        /* console.error(errorMessage); */
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
    });
  },
  "{ :self :aBlock:/6 |\n\t\tlet [m, n] = [self.numberOfRows, self.numberOfColumns];\n\t\t{ :x :y |\n\t\t\tlet i1 = x.integerPart;\n\t\t\tlet j1 = y.integerPart;\n\t\t\tlet i2 = m.min(i1 + 1);\n\t\t\tlet j2 = n.min(j1 + 1);\n\t\t\taBlock(\n\t\t\t\tself[i1][j1],\n\t\t\t\tself[i2][j1],\n\t\t\t\tself[i1][j2],\n\t\t\t\tself[i2][j2],\n\t\t\t\tx.fractionPart,\n\t\t\t\ty.fractionPart\n\t\t\t)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "basicDownsampleSteinarsson",
  ["self", "threshold"],
  function (_self, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _threshold";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Primitive */
    return sc.downsampleSteinarsson(_self, _threshold);
  },
  "{ :self :threshold |\n\t\t<primitive: return sc.downsampleSteinarsson(_self, _threshold);>\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "downsample",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _thenTo_3(1, _plusSign_2(1, _anInteger), _size_1(_self)),
      function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _at_2(_self, _each);
      },
    );
  },
  "{ :self :anInteger |\n\t\t(1, 1 + anInteger .. self.size).collect { :each |\n\t\t\tself[each]\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "downsampleSteinarsson",
  ["self", "threshold"],
  function (_self, _threshold) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _threshold";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isVector_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicDownsampleSteinarsson_2(
        _transposed_1([_indices_1(_self), _self]),
        _threshold,
      );
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _basicDownsampleSteinarsson_2(_self, _threshold);
    });
  },
  "{ :self :threshold |\n\t\tself.isVector.if {\n\t\t\t[self.indices, self].transposed.basicDownsampleSteinarsson(threshold)\n\t\t} {\n\t\t\tself.basicDownsampleSteinarsson(threshold)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "matrixResample",
  ["self", "shape"],
  function (_self, _shape) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _shape";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym147 = _assertIsOfSize_2([
        _numberOfRows_1(_self),
        _numberOfColumns_1(_self),
      ], 2),
      _m = _at_2(__genSym147, 1),
      _n = _at_2(__genSym147, 2);
    let __genSym148 = _assertIsOfSize_2(_shape, 2),
      _p = _at_2(__genSym148, 1),
      _q = _at_2(__genSym148, 2);
    let _i = _discretize_2(_hyphenMinusHyphenMinus_2(1, _m), _p);
    let _j = _discretize_2(_hyphenMinusHyphenMinus_2(1, _n), _q);
    /* Statements */
    return _table_3(
      _matrixInterpolation_2(_self, _bilinearInterpolation_6),
      _i,
      _j,
    );
  },
  "{ :self :shape |\n\t\tlet [m, n] = [self.numberOfRows, self.numberOfColumns];\n\t\tlet [p, q] = shape;\n\t\tlet i = (1 -- m).discretize(p);\n\t\tlet j = (1 -- n).discretize(q);\n\t\tself.matrixInterpolation(\n\t\t\tbilinearInterpolation:/6\n\t\t).table(i, j)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "resample",
  ["self", "newSize"],
  function (_self, _newSize) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _newSize";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _factor = _solidus_2(
      _hyphenMinus_2(_size_1(_self), 1),
      _max_2(_hyphenMinus_2(_newSize, 1), 1),
    );
    /* Statements */
    return _collect_2(_to_2(0, _hyphenMinus_2(_newSize, 1)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atBlend_2(_self, _plusSign_2(1, _asterisk_2(_each, _factor)));
    });
  },
  "{ :self :newSize |\n\t\tlet factor = (self.size - 1) / (newSize - 1).max(1);\n\t\t0.to(newSize - 1).collect { :each |\n\t\t\tself.atBlend(1 + (each * factor))\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Interpolation",
  "upsample",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = _List_2(_asterisk_2(_size_1(_self), _anInteger), 0);
    /* Statements */
    _do_2(_to_2(0, _hyphenMinus_2(_size_1(_self), 1)), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _atPut_3(
        _answer,
        _plusSign_2(_asterisk_2(_each, _anInteger), 1),
        _at_2(_self, _plusSign_2(_each, 1)),
      );
    });
    return _answer;
  },
  "{ :self :anInteger |\n\t\tlet answer = List(self.size * anInteger, 0);\n\t\t0.to(self.size - 1).do { :each |\n\t\t\tanswer[(each * anInteger) + 1] := self[each + 1]\n\t\t};\n\t\tanswer\n\t}",
);
