/*  Requires: Interval  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(1, _asterisk_2(2, _self));
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(1, _asterisk_2(2, _self));
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(self  > 0).if {\n\t\t\t\t1 - (2 * self)\n\t\t\t} {\n\t\t\t\t1 + (2 * self)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bartlettHannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.62;
        let _a1 = 0.48;
        let _a2 = 0.38;
        /* Statements */
        return _plusSign_2(
          _hyphenMinus_2(_a0, _asterisk_2(_a1, _abs_1(_self))),
          _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(2), _self))),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tlet a0 = 0.62;\n\t\t\tlet a1 = 0.48;\n\t\t\tlet a2 = 0.38;\n\t\t\ta0 - (a1 * self.abs) + (a2 * (2.pi * self).cos)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanNuttallWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [0.3635819, 0.4891775, 0.1365995, 0.0106411];
    /* Statements */
    return _generalCosineWindow_2(_x, _a);
  }, ["x"]),
  "{ :x |\n\t\tlet a = [0.3635819 0.4891775 0.1365995 0.0106411];\n\t\tgeneralCosineWindow(x, a)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a0 = 0.42;
    let _a1 = 0.5;
    let _a2 = 0.08;
    /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _plusSign_2(_a0, _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x)))),
          _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\tlet a0 = 0.42;\n\t\tlet a1 = 0.5;\n\t\tlet a2 = 0.08;\n\t\t(x.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\ta0 + (a1 * (2.pi * x).cos) + (a2 * (4.pi * x).cos)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.35875;
        let _a1 = 0.48829;
        let _a2 = 0.14128;
        let _a3 = 0.01168;
        /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _a0,
              _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x))),
            ),
            _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
          ),
          _asterisk_2(_a3, _cos_1(_asterisk_2(_pi_1(6), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tlet a0 = 0.35875;\n\t\t\tlet a1 = 0.48829;\n\t\t\tlet a2 = 0.14128;\n\t\t\tlet a3 = 0.01168;\n\t\t\ta0 + (a1 * (2.pi * x).cos) + (a2 * (4.pi * x).cos) + (a3 * (6.pi * x).cos)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "bohmanWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _m = _sign_1(_x);
        let _a = _asterisk_2(_m, _sin_1(_asterisk_2(_pi_1(2), _x)));
        let _b = _asterisk_2(
          _asterisk_2(_asterisk_2(_m, _pi_1(2)), _x),
          _cos_1(_asterisk_2(_pi_1(2), _x)),
        );
        let _c = _asterisk_2(_pi_1(1), _cos_1(_asterisk_2(_pi_1(2), _x)));
        /* Statements */
        return _solidus_2(_plusSign_2(_hyphenMinus_2(_a, _b), _c), _pi_1(1));
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs > 0.5).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet m = x.sign;\n\t\t\tlet a = m * (2.pi * x).sin;\n\t\t\tlet b = m * 2.pi * x * (2.pi * x).cos;\n\t\t\tlet c = 1.pi * (2.pi * x).cos;\n\t\t\t(a - b + c) / 1.pi\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _circumflexAccent_2(_cos_1(_pi_1(_self)), _alpha);
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tself.pi.cos ^ alpha\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "cosineWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _cosineWindow_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.cosineWindow(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t1\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "flatTopWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _a0 = 0.21557895;
        let _a1 = 0.41663158;
        let _a2 = 0.277263158;
        let _a3 = 0.083578947;
        let _a4 = 0.006947368;
        /* Statements */
        return _plusSign_2(
          _plusSign_2(
            _plusSign_2(
              _plusSign_2(
                _a0,
                _asterisk_2(_a1, _cos_1(_asterisk_2(_pi_1(2), _x))),
              ),
              _asterisk_2(_a2, _cos_1(_asterisk_2(_pi_1(4), _x))),
            ),
            _asterisk_2(_a3, _cos_1(_asterisk_2(_pi_1(6), _x))),
          ),
          _asterisk_2(_a4, _cos_1(_asterisk_2(_pi_1(8), _x))),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x.abs > 0.5).if {\n\t\t\t0\n\t\t} {\n\t\t\tlet a0 = 0.21557895;\n\t\t\tlet a1 = 0.41663158;\n\t\t\tlet a2 = 0.277263158;\n\t\t\tlet a3 = 0.083578947;\n\t\t\tlet a4 = 0.006947368;\n\t\t\ta0 + (a1 * (2.pi * x).cos) + (a2 * (4.pi * x).cos) + (a3 * (6.pi * x).cos) + (a4 * (8.pi * x).cos)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  sl.annotateFunction(function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exp_1(
          _negate_1(
            _solidus_2(_square_1(_self), _asterisk_2(2, _square_1(_sigma))),
          ),
        );
      }, []),
    );
  }, ["self", "sigma"]),
  "{ :self :sigma |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t} {\n\t\t\t(self.square / (2 * sigma.square)).negate.exp\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _gaussianWindow_2(_self, _solidus_2(3, 10));
  }, ["self"]),
  "{ :self |\n\t\tself.gaussianWindow(3 / 10)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "generalCosineWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _y = _at_2(_a, 1);
        /* Statements */
        _toDo_3(
          2,
          _size_1(_a),
          sl.annotateFunction(function (_k) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _k";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _asterisk_2(_hyphenMinus_2(_k, 1), 2);
            /* Statements */
            return _y = _plusSign_2(
              _y,
              _asterisk_2(_at_2(_a, _k), _cos_1(_asterisk_2(_pi_1(_n), _x))),
            );
          }, ["k"]),
        );
        return _y;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a |\n\t\t(x.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tlet y = a[1];\n\t\t\t2.toDo(a.size) { :k |\n\t\t\t\tlet n = (k - 1) * 2;\n\t\t\t\ty := y + (a[k] * (n.pi * x).cos)\n\t\t\t};\n\t\t\ty\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(_solidus_2(21, 46), _cos_1(_asterisk_2(_pi_1(2), _self))),
          _solidus_2(25, 46),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(21 / 46) * (2.pi * self).cos + (25 / 46)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _c = _cos_1(_asterisk_2(_pi_1(2), _self));
        /* Statements */
        return _plusSign_2(_hyphenMinus_2(_alpha, _asterisk_2(_alpha, _c)), _c);
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\tlet c = (2.pi * self).cos;\n\t\t\talpha - (alpha * c) + c\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "hannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  }, ["self"]),
  "{ :self |\n\t\tself.hannWindow(0.5)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _besselI_2(
            0,
            _asterisk_2(
              _asterisk_2(
                _sqrt_1(_hyphenMinus_2(1, _asterisk_2(2, _x))),
                _sqrt_1(_plusSign_2(1, _asterisk_2(2, _x))),
              ),
              _a,
            ),
          ),
          _besselI_2(0, _a),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a |\n\t\t(x.abs <= 0.5).if {\n\t\t\t0.besselI((1 - (2 * x)).sqrt * (1 + (2 * x)).sqrt * a) / 0.besselI(a)\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "kaiserWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _kaiserWindow_2(_x, 3);
  }, ["x"]),
  "{ :x |\n\t\tx.kaiserWindow(3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "lanczosWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_x, 0),
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
        return _if_3(
          _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _z = _asterisk_2(_pi_1(2), _x);
            /* Statements */
            return _solidus_2(_sin_1(_z), _z);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, []),
        );
      }, []),
    );
  }, ["x"]),
  "{ :x |\n\t\t(x = 0).if {\n\t\t\t1\n\t\t} {\n\t\t\t(x.abs <= 0.5).if {\n\t\t\t\tlet z = 2.pi * x;\n\t\t\t\tz.sin / z\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "nuttallWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = [0.355768, 0.487396, 0.144232, 0.012604];
    /* Statements */
    return _generalCosineWindow_2(_x, _a);
  }, ["x"]),
  "{ :x |\n\t\tlet a = [0.355768, 0.487396, 0.144232, 0.012604];\n\t\tgeneralCosineWindow(x, a)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "parzenWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_abs_1(_x), 0.5);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(0.25, 0.5));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            -2,
            _cube_1(_hyphenMinus_2(_asterisk_2(2, _x), 1)),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(-0.5, -0.25));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(2, _cube_1(_plusSign_2(_asterisk_2(2, _x), 1)));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(-0.25, 0));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _hyphenMinus_2(
              _hyphenMinus_2(0, _asterisk_2(48, _cube_1(_x))),
              _asterisk_2(24, _square_1(_x)),
            ),
            1,
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _between_2(_x, _hyphenMinusHyphenMinus_2(0, 0.25));
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _hyphenMinus_2(
              _asterisk_2(48, _cube_1(_x)),
              _asterisk_2(24, _square_1(_x)),
            ),
            1,
          );
        }, []),
      ),
    ]);
  }, ["x"]),
  "{ :x |\n\t\t[\n\t\t\t{ x.abs > 0.5 } -> {\n\t\t\t\t0\n\t\t\t},\n\t\t\t{ x.between(0.25 -- 0.5) } -> {\n\t\t\t\t-2 * ((2 * x) - 1).cube\n\t\t\t},\n\t\t\t{ x.between(-0.5 -- -0.25) } -> {\n\t\t\t\t2 * ((2 * x) + 1).cube\n\t\t\t},\n\t\t\t{ x.between(-0.25 -- 0) } -> {\n\t\t\t\t0 - (48 * x.cube) - (24 * x.square) + 1\n\t\t\t},\n\t\t\t{ x.between(0 -- 0.25) } -> {\n\t\t\t\t(48 * x.cube) - (24 * x.square) + 1\n\t\t\t}\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "planckTaperWindow",
  ["x", "epsilon"],
  sl.annotateFunction(function (_x, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _epsilon";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _x1 = -0.5;
    let _x2 = _asterisk_2(-0.5, _hyphenMinus_2(1, _asterisk_2(2, _epsilon)));
    let _x3 = _asterisk_2(0.5, _hyphenMinus_2(1, _asterisk_2(2, _epsilon)));
    let _x4 = 0.5;
    /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _x1);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_x, _x2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _z = _plusSign_2(
            _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_x, _x1)),
            _solidus_2(_hyphenMinus_2(_x2, _x1), _hyphenMinus_2(_x, _x2)),
          );
          /* Statements */
          return _solidus_2(1, _plusSign_2(_exp_1(_z), 1));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _x3);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSign_2(_x, _x4);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _z = _plusSign_2(
            _solidus_2(_hyphenMinus_2(_x3, _x4), _hyphenMinus_2(_x, _x3)),
            _solidus_2(_hyphenMinus_2(_x3, _x4), _hyphenMinus_2(_x, _x4)),
          );
          /* Statements */
          return _solidus_2(1, _plusSign_2(_exp_1(_z), 1));
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
    ]);
  }, ["x", "epsilon"]),
  "{ :x :epsilon |\n\t\tlet x1 = -0.5;\n\t\tlet x2 = -0.5 * (1 - (2 * epsilon));\n\t\tlet x3 = 0.5 * (1 - (2 * epsilon));\n\t\tlet x4 = 0.5;\n\t\t[\n\t\t\t{ x <= x1 } -> { 0 },\n\t\t\t{ x < x2 } -> {\n\t\t\t\tlet z = ((x2 - x1) / (x - x1)) + ((x2 - x1) / (x - x2));\n\t\t\t\t1 / (z.exp + 1)\n\t\t\t},\n\t\t\t{ x <= x3 } -> { 1 },\n\t\t\t{ x < x4 } -> {\n\t\t\t\tlet z = ((x3 - x4) / (x - x3)) + ((x3 - x4) / (x - x4));\n\t\t\t\t1 / (z.exp + 1)\n\t\t\t},\n\t\t\t{ true } -> { 0 }\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "raisedCosinePulse",
  ["alpha"],
  sl.annotateFunction(function (_alpha) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _sincNormalized_1(_x),
        _solidus_2(
          _cos_1(_asterisk_2(_pi_1(_alpha), _x)),
          _hyphenMinus_2(
            1,
            _circumflexAccent_2(_asterisk_2(_asterisk_2(2, _alpha), _x), 2),
          ),
        ),
      );
    }, ["x"]);
  }, ["alpha"]),
  "{ :alpha |\n\t\t{ :x |\n\t\t\tx.sincNormalized * ((alpha.pi * x).cos / (1 - ((2 * alpha * x) ^ 2)))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "sincWindow",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_abs_1(_x), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _sincNormalized_1(_asterisk_2(_asterisk_2(_x, _a), 2));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a |\n\t\t(x.abs <= 0.5).if {\n\t\t\t(x * a * 2).sincNormalized\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "tukeyWindow",
  ["x", "alpha"],
  sl.annotateFunction(function (_x, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _which_1([
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_abs_1(_x), 0.5);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 0;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_alpha, 0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSignEqualsSign_2(_alpha, 1.0);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hannWindow_1(_x);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(
              _hyphenMinus_2(_hyphenMinus_2(_alpha, _asterisk_2(2, _x)), 1),
              0,
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _greaterThanSignEqualsSign_2(_x, -0.5);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            0.5,
            _plusSign_2(
              _cos_1(
                _solidus_2(
                  _asterisk_2(
                    _pi_1(2),
                    _plusSign_2(
                      _plusSign_2(_hyphenMinus_2(0, _solidus_2(_alpha, 2)), _x),
                      0.5,
                    ),
                  ),
                  _alpha,
                ),
              ),
              1,
            ),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(
            _greaterThanSign_2(
              _hyphenMinus_2(_plusSign_2(_alpha, _asterisk_2(2, _x)), 1),
              0,
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_x, 0.5);
            }, []),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            0.5,
            _plusSign_2(
              _cos_1(
                _solidus_2(
                  _asterisk_2(
                    _pi_1(2),
                    _hyphenMinus_2(_plusSign_2(_solidus_2(_alpha, 2), _x), 0.5),
                  ),
                  _alpha,
                ),
              ),
              1,
            ),
          );
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return true;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, []),
      ),
    ]);
  }, ["x", "alpha"]),
  "{ :x :alpha |\n\t\t[\n\t\t\t{ x.abs > 0.5 } -> {\n\t\t\t\t0\n\t\t\t},\n\t\t\t{ alpha <= 0 } -> {\n\t\t\t\t1\n\t\t\t},\n\t\t\t{ alpha >= 1.0 } -> {\n\t\t\t\tx.hannWindow\n\t\t\t},\n\t\t\t{ (alpha - (2 * x) - 1) > 0 & { x >= -0.5 } } -> {\n\t\t\t\t0.5 * (((2.pi * (0 - (alpha / 2) + x + 0.5)) / alpha).cos + 1)\n\t\t\t},\n\t\t\t{ (alpha + (2 * x) - 1) > 0 & { x <= 0.5 } } -> {\n\t\t\t\t0.5 * (((2.pi * ((alpha / 2) + x - 0.5)) / alpha).cos + 1)\n\t\t\t},\n\t\t\t{ true } -> {\n\t\t\t\t1\n\t\t\t}\n\t\t].which\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "tukeyWindow",
  ["x"],
  sl.annotateFunction(function (_x) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _x";
      throw new Error(errorMessage);
    } /* Statements */
    return _tukeyWindow_2(_x, _solidus_2(2, 3));
  }, ["x"]),
  "{ :x |\n\t\ttukeyWindow(x, 2 / 3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_abs_1(_self), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(_square_1(_alpha), _asterisk_2(4, _square_1(_self))),
          _square_1(_alpha),
        );
      }, []),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\t(self.abs > 0.5).if {\n\t\t\t0\n\t\t}  {\n\t\t\t(alpha.square - (4 * self.square)) / alpha.square\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "WindowFunction",
  "welchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _welchWindow_2(_self, 1);
  }, ["self"]),
  "{ :self |\n\t\tself.welchWindow(1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bartlettWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bartlettWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(bartlettWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bartlettHannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bartlettHannWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(bartlettHannWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(blackmanWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanHarrisWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanHarrisWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(blackmanHarrisWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "blackmanNuttallWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _blackmanNuttallWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(blackmanNuttallWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "bohmanWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bohmanWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(bohmanWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "cosineWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _cosineWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.cosineWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "dirichletWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _dirichletWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(dirichletWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self", "sigma"],
  sl.annotateFunction(function (_self, _sigma) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _sigma";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _gaussianWindow_2(_each, _sigma);
      }, ["each"]),
    );
  }, ["self", "sigma"]),
  "{ :self :sigma |\n\t\tself.collect { :each |\n\t\t\teach.gaussianWindow(sigma)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "gaussianWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _gaussianWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(gaussianWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hammingWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hammingWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(hammingWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _hannWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.hannWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "hannWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hannWindow_2(_self, 0.5);
  }, ["self"]),
  "{ :self |\n\t\tself.hannWindow(0.5)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "kaiserWindow",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _kaiserWindow_2(_each, _a);
      }, ["each"]),
    );
  }, ["self", "a"]),
  "{ :self :a |\n\t\tself.collect { :each |\n\t\t\teach.kaiserWindow(a)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "lanczosWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _lanczosWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(lanczosWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "nuttallWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _nuttallWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(nuttallWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "parzenWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _parzenWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(parzenWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "planckTaperWindow",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _planckTaperWindow_2(_x, _epsilon);
      }, ["x"]),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tself.collect { :x |\n\t\t\tx.planckTaperWindow(epsilon)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "sincWindow",
  ["self", "a"],
  sl.annotateFunction(function (_self, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _sincWindow_2(_each, _a);
      }, ["each"]),
    );
  }, ["self", "a"]),
  "{ :self :a |\n\t\tself.collect { :each |\n\t\t\teach.sincWindow(a)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "tukeyWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tukeyWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.tukeyWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "tukeyWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tukeyWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(tukeyWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self", "alpha"],
  sl.annotateFunction(function (_self, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _welchWindow_2(_each, _alpha);
      }, ["each"]),
    );
  }, ["self", "alpha"]),
  "{ :self :alpha |\n\t\tself.collect { :each |\n\t\t\teach.welchWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "WindowFunction",
  "welchWindow",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _welchWindow_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(welchWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hammingWindowTable",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(_n, _hammingWindow_1);
  }, ["n"]),
  "{ :n |\n\t\tn.windowTable(hammingWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "hannWindowTable",
  ["n"],
  sl.annotateFunction(function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(_n, _hannWindow_1);
  }, ["n"]),
  "{ :n |\n\t\tn.windowTable(hannWindow:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "kaiserWindowTable",
  ["n", "alpha"],
  sl.annotateFunction(function (_n, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(
      _n,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _kaiserWindow_2(_x, _alpha);
      }, ["x"]),
    );
  }, ["n", "alpha"]),
  "{ :n :alpha |\n\t\tn.windowTable { :x |\n\t\t\tx.kaiserWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "welchWindowTable",
  ["n", "alpha"],
  sl.annotateFunction(function (_n, _alpha) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _alpha";
      throw new Error(errorMessage);
    } /* Statements */
    return _windowTable_2(
      _n,
      sl.annotateFunction(function (_x) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _x";
          throw new Error(errorMessage);
        } /* Statements */
        return _welchWindow_2(_x, _alpha);
      }, ["x"]),
    );
  }, ["n", "alpha"]),
  "{ :n :alpha |\n\t\tn.windowTable { :x |\n\t\t\tx.welchWindow(alpha)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "WindowFunction",
  "windowTable",
  ["n", "f:/1"],
  sl.annotateFunction(function (_n, _f_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _f_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _discretize_3(_Interval_2(-0.5, 0.5), _n, _f_1);
  }, ["n", "f:/1"]),
  "{ :n :f:/1 |\n\t\tInterval(-0.5, 0.5).discretize(n, f:/1)\n\t}",
);
