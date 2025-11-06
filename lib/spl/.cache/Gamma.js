sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "beta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isCollection_1(_aNumber),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(
          _aNumber,
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _beta_2(_self, _each);
          }, ["each"]),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exp_1(_logBeta_2(_self, _aNumber));
      }, []),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\taNumber.isCollection.if {\n\t\t\taNumber.collect { :each |\n\t\t\t\tself.beta(each)\n\t\t\t}\n\t\t} {\n\t\t\tself.logBeta(aNumber).exp\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "betaRegularized",
  ["x", "a", "b"],
  sl.annotateFunction(function (_x, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _stop = 1E-8;
    let _tiny = 1E-30;
    /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _greaterThanSign_2(_x, 1);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return Infinity;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _greaterThanSign_2(
            _x,
            _solidus_2(_plusSign_2(_a, 1), _plusSign_2(_plusSign_2(_a, _b), 2)),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              1,
              _betaRegularized_3(_hyphenMinus_2(1, _x), _b, _a),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _lbetaAb = _hyphenMinus_2(
              _plusSign_2(_logGamma_1(_a), _logGamma_1(_b)),
              _logGamma_1(_plusSign_2(_a, _b)),
            );
            let _front = _solidus_2(
              _exp_1(
                _hyphenMinus_2(
                  _plusSign_2(
                    _asterisk_2(_log_1(_x), _a),
                    _asterisk_2(_log_1(_hyphenMinus_2(1, _x)), _b),
                  ),
                  _lbetaAb,
                ),
              ),
              _a,
            );
            let _f = 1;
            let _c = 1;
            let _d = 0;
            let _cd = _asterisk_2(_c, _d);
            let _i = 0;
            let _converged = false;
            /* Statements */
            _doWhileTrue_2(
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _m = _solidusSolidus_2(_i, 2);
                let _numerator = _if_3(
                  _equalsSign_2(_i, 0),
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
                      _equalsSign_2(_percentSign_2(_i, 2), 0),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _solidus_2(
                          _asterisk_2(
                            _asterisk_2(_m, _hyphenMinus_2(_b, _m)),
                            _x,
                          ),
                          _asterisk_2(
                            _hyphenMinus_2(
                              _plusSign_2(_a, _asterisk_2(2, _m)),
                              1,
                            ),
                            _plusSign_2(_a, _asterisk_2(2, _m)),
                          ),
                        );
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _solidus_2(
                          _hyphenMinus_1(
                            _asterisk_2(
                              _asterisk_2(
                                _plusSign_2(_a, _m),
                                _plusSign_2(_plusSign_2(_a, _b), _m),
                              ),
                              _x,
                            ),
                          ),
                          _asterisk_2(
                            _plusSign_2(_a, _asterisk_2(2, _m)),
                            _plusSign_2(_plusSign_2(_a, _asterisk_2(2, _m)), 1),
                          ),
                        );
                      }, []),
                    );
                  }, []),
                );
                /* Statements */
                _d = _plusSign_2(1, _asterisk_2(_numerator, _d));
                _ifTrue_2(
                  _lessThanSign_2(_abs_1(_d), _tiny),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _d = _tiny;
                  }, []),
                );
                _d = _solidus_2(1, _d);
                _c = _plusSign_2(1, _solidus_2(_numerator, _c));
                _ifTrue_2(
                  _lessThanSign_2(_abs_1(_c), _tiny),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _c = _tiny;
                  }, []),
                );
                _cd = _asterisk_2(_c, _d);
                _f = _asterisk_2(_f, _cd);
                _converged = _lessThanSign_2(
                  _abs_1(_hyphenMinus_2(1, _cd)),
                  _stop,
                );
                return _i = _plusSign_2(_i, 1);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _ampersand_2(
                  _lessThanSignEqualsSign_2(_i, 200),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _not_1(_converged);
                  }, []),
                );
              }, []),
            );
            return _if_3(
              _converged,
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(_front, _hyphenMinus_2(_f, 1));
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return Infinity;
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["x", "a", "b"]),
  "{ :x :a :b |\n\t\t/* https://codeplea.com/incomplete-beta-function-c */\n\t\tlet stop = 1E-8;\n\t\tlet tiny = 1E-30;\n\t\t(x < 0 | { x > 1 }).if {\n\t\t\tInfinity\n\t\t} {\n\t\t\t(x > ((a + 1) / (a + b + 2))).if {\n\t\t\t\t1 - betaRegularized(1 - x, b, a)\n\t\t\t} {\n\t\t\t\tlet lbetaAb = logGamma(a) + logGamma(b) - logGamma(a + b);\n\t\t\t\tlet front = ((x.log * a) + ((1 - x).log * b) - lbetaAb).exp / a;\n\t\t\t\tlet f = 1;\n\t\t\t\tlet c = 1;\n\t\t\t\tlet d = 0;\n\t\t\t\tlet cd = c * d;\n\t\t\t\tlet i = 0;\n\t\t\t\tlet converged = false;\n\t\t\t\t{\n\t\t\t\t\tlet m = i // 2;\n\t\t\t\t\tlet numerator = (i = 0).if {\n\t\t\t\t\t\t1\n\t\t\t\t\t} {\n\t\t\t\t\t\t(i % 2 = 0).if {\n\t\t\t\t\t\t\t(m * (b - m) * x) / ((a + (2 * m) - 1) * (a + (2 * m)))\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t((a + m) * (a + b + m) * x).- / ((a + (2 * m)) * (a + (2 * m) + 1))\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\td := 1 + (numerator * d);\n\t\t\t\t\t(d.abs < tiny).ifTrue {\n\t\t\t\t\t\td := tiny\n\t\t\t\t\t};\n\t\t\t\t\td := 1 / d;\n\t\t\t\t\tc := 1 + (numerator / c);\n\t\t\t\t\t(c.abs < tiny).ifTrue {\n\t\t\t\t\t\tc := tiny\n\t\t\t\t\t};\n\t\t\t\t\tcd := c * d;\n\t\t\t\t\tf := f * cd;\n\t\t\t\t\tconverged := (1 - cd).abs < stop;\n\t\t\t\t\ti := i + 1\n\t\t\t\t}.doWhileTrue {\n\t\t\t\t\ti <= 200 & {\n\t\t\t\t\t\tconverged.not\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t\tconverged.if {\n\t\t\t\t\tfront * (f - 1)\n\t\t\t\t} {\n\t\t\t\t\tInfinity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "digamma",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSignEqualsSign_2(_z, 0.000001),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _eulerMascheroni = 0.57721566490153286060;
        /* Statements */
        return _plusSign_2(
          _hyphenMinus_2(
            _hyphenMinus_2(0, _eulerMascheroni),
            _solidus_2(1, _z),
          ),
          _asterisk_2(1.6449340668482264365, _z),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _answer = 0;
        let _r = null;
        /* Statements */
        _whileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSign_2(_z, 8.5);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            _answer = _hyphenMinus_2(_answer, _solidus_2(1, _z));
            return _z = _plusSign_2(_z, 1);
          }, []),
        );
        _r = _solidus_2(1, _z);
        _answer = _hyphenMinus_2(
          _plusSign_2(_answer, _log_1(_z)),
          _asterisk_2(0.5, _r),
        );
        _r = _asterisk_2(_r, _r);
        return _hyphenMinus_2(
          _answer,
          _asterisk_2(
            _r,
            _hyphenMinus_2(
              _solidus_2(1, 12),
              _asterisk_2(
                _r,
                _hyphenMinus_2(
                  _solidus_2(1, 120),
                  _asterisk_2(
                    _r,
                    _hyphenMinus_2(
                      _solidus_2(1, 252),
                      _asterisk_2(
                        _r,
                        _hyphenMinus_2(
                          _solidus_2(1, 240),
                          _asterisk_2(_r, _solidus_2(1, 132)),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }, []),
    );
  }, ["z"]),
  "{ :z |\n\t\t/* Jose Bernardo, Algorithm AS 103, Applied Statistics 25/3, 1976 */\n\t\t(z <= 0.000001).if {\n\t\t\tlet eulerMascheroni = 0.57721566490153286060;\n\t\t\t0 - eulerMascheroni - (1 / z) + (1.6449340668482264365 * z)\n\t\t} {\n\t\t\tlet answer = 0;\n\t\t\tlet r = nil;\n\t\t\t{ z < 8.5 }.whileTrue {\n\t\t\t\tanswer := answer - (1 / z);\n\t\t\t\tz := z + 1\n\t\t\t};\n\t\t\tr := 1 / z;\n\t\t\tanswer := answer + z.log - (0.5 * r);\n\t\t\tr := r * r;\n\t\t\tanswer - (r * (1 / 12 - (r * (1 / 120 - (r * (1 / 252 - (r * (1 / 240 - (r * (1 / 132))))))))))\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gammaLanczosFormulaLeadingFactor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _z = _plusSign_2(_self, 5.5);
    /* Statements */
    return _hyphenMinus_2(_asterisk_2(_log_1(_z), _plusSign_2(_self, 0.5)), _z);
  }, ["self"]),
  "{ :self |\n\t\tlet z = self + 5.5;\n\t\tz.log * (self + 0.5) - z\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gammaLanczosFormulaSeries",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _term = _self;
    let _coefficients = [
      76.18009172947146,
      -86.50532032941677,
      24.01409824083091,
      -1.231739572450155,
      0.001208650973866179,
      -0.000005395239384953,
    ];
    /* Statements */
    return _injectInto_3(
      _coefficients,
      1.000000000190015,
      sl.annotateFunction(function (_sum, _each) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _sum, _each";
          throw new Error(errorMessage);
        } /* Statements */
        _term = _plusSign_2(_term, 1);
        return _plusSign_2(_solidus_2(_each, _term), _sum);
      }, ["sum", "each"]),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet term = self;\n\t\tlet coefficients = [\n\t\t\t76.18009172947146,\n\t\t\t-86.50532032941677,\n\t\t\t24.01409824083091,\n\t\t\t-1.231739572450155,\n\t\t\t0.001208650973866179,\n\t\t\t-0.000005395239384953\n\t\t];\n\t\tcoefficients.injectInto(1.000000000190015) { :sum :each |\n\t\t\tterm := term + 1;\n\t\t\teach / term + sum\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gammaLanczosFormula",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _solidus_2(
      _asterisk_2(
        _asterisk_2(_exp_1(_leadingFactor), _series),
        _sqrt_1(_pi_1(2)),
      ),
      _self,
    );
  }, ["self"]),
  "{ :self |\n\t\tlet leadingFactor = self.gammaLanczosFormulaLeadingFactor;\n\t\tlet series = self.gammaLanczosFormulaSeries;\n\t\t(leadingFactor.exp * series) * 2.pi.sqrt / self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isInteger_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return (_greaterThanSignEqualsSign_2(_self, 1));
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _factorial_1(_hyphenMinus_2(_self, 1));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_self, 0),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _pi_1(1),
              _asterisk_2(
                _sin_1(_pi_1(_self)),
                _gamma_1(_hyphenMinus_2(1, _self)),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _gammaLanczosFormula_1(_plusSign_2(_self, 1)),
              _self,
            );
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(\n\t\t\tself.isInteger & {\n\t\t\t\t(self >= 1)\n\t\t\t}\n\t\t).if {\n\t\t\t(self - 1).factorial\n\t\t} {\n\t\t\t(self < 0).if {\n\t\t\t\t1.pi / (self.pi.sin * (1 - self).gamma)\n\t\t\t} {\n\t\t\t\t(self + 1).gammaLanczosFormula / self\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gammaRegularized",
  ["a", "z"],
  sl.annotateFunction(function (_a, _z) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _last_1(_incompleteGamma_2(_z, _a)));
  }, ["a", "z"]),
  "{ :a :z |\n\t\t1 - incompleteGamma(z, a).last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "gammaRegularized",
  ["a", "b", "z"],
  sl.annotateFunction(function (_a, _b, _z) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _b, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_b, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _last_1(_incompleteGamma_2(_z, _a));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("gammaRegularized: b non-zero");
      }, []),
    );
  }, ["a", "b", "z"]),
  "{ :a :b :z |\n\t\t(b = 0).if {\n\t\t\tincompleteGamma(z, a).last\n\t\t} {\n\t\t\t'gammaRegularized: b non-zero'.error\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "hadjicostassFormula",
  ["s"],
  sl.annotateFunction(function (_s) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _gamma_1(_plusSign_2(_s, 2)),
      _hyphenMinus_2(
        _zeta_1(_plusSign_2(_s, 2)),
        _solidus_2(1, _plusSign_2(_s, 1)),
      ),
    );
  }, ["s"]),
  "{ :s |\n\t\tgamma(s + 2) * (zeta(s + 2) - (1 / (s + 1)))\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "incompleteGamma",
  ["x", "a"],
  sl.annotateFunction(function (_x, _a) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_a, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_1("incompleteGamma: a must be real and nonnegative");
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _ampersand_2(
            _equalsSign_2(_x, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _equalsSign_2(_a, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return [0, Infinity, 0];
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
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
                return [0, _gamma_1(_a), 0];
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _xam = _if_3(
                  _greaterThanSign_2(_x, 0),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _plusSign_2(
                      _hyphenMinus_1(_x),
                      _asterisk_2(_a, _log_1(_x)),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1("incompleteGamma: negative a");
                  }, []),
                );
                /* Statements */
                return _if_3(
                  _verticalLine_2(
                    _greaterThanSign_2(_abs_1(_xam), 700),
                    sl.annotateFunction(function () {
                      /* ArityCheck */
                      if (arguments.length !== 0) {
                        const errorMessage = "Arity: expected 0, ";
                        throw new Error(errorMessage);
                      } /* Statements */
                      return _greaterThanSign_2(_abs_1(_a), 170);
                    }, []),
                  ),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _error_1("incompleteGamma: x or a too large");
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _gin = 0;
                    let _gim = 0;
                    let _gip = 0;
                    let _ga = _gamma_1(_a);
                    /* Statements */
                    return _if_3(
                      _equalsSign_2(_x, 0),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        return _gim = _ga;
                      }, []),
                      sl.annotateFunction(function () {
                        /* ArityCheck */
                        if (arguments.length !== 0) {
                          const errorMessage = "Arity: expected 0, ";
                          throw new Error(errorMessage);
                        } /* Statements */
                        _if_3(
                          _lessThanSignEqualsSign_2(_x, _plusSign_2(1, _a)),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Temporaries */
                            let _s = _solidus_2(1, _a);
                            let _r = _s;
                            let _k = 1;
                            /* Statements */
                            _doWhileTrue_2(
                              sl.annotateFunction(function () {
                                /* ArityCheck */
                                if (arguments.length !== 0) {
                                  const errorMessage = "Arity: expected 0, ";
                                  throw new Error(errorMessage);
                                } /* Statements */
                                _r = _solidus_2(
                                  _asterisk_2(_r, _x),
                                  _plusSign_2(_a, _k),
                                );
                                _s = _plusSign_2(_s, _r);
                                return _k = _plusSign_2(_k, 1);
                              }, []),
                              sl.annotateFunction(function () {
                                /* ArityCheck */
                                if (arguments.length !== 0) {
                                  const errorMessage = "Arity: expected 0, ";
                                  throw new Error(errorMessage);
                                } /* Statements */
                                return _ampersand_2(
                                  _lessThanSignEqualsSign_2(_k, 60),
                                  sl.annotateFunction(function () {
                                    /* ArityCheck */
                                    if (arguments.length !== 0) {
                                      const errorMessage =
                                        "Arity: expected 0, ";
                                      throw new Error(errorMessage);
                                    } /* Temporaries */
                                    let _epsilon = 1E-15;
                                    /* Statements */
                                    return _greaterThanSign_2(
                                      _abs_1(_solidus_2(_r, _s)),
                                      _epsilon,
                                    );
                                  }, []),
                                );
                              }, []),
                            );
                            _gin = _asterisk_2(_exp_1(_xam), _s);
                            _gip = _solidus_2(_gin, _ga);
                            return _gim = _hyphenMinus_2(_ga, _gin);
                          }, []),
                          sl.annotateFunction(function () {
                            /* ArityCheck */
                            if (arguments.length !== 0) {
                              const errorMessage = "Arity: expected 0, ";
                              throw new Error(errorMessage);
                            } /* Temporaries */
                            let _t0 = 0;
                            /* Statements */
                            _downToDo_3(
                              60,
                              1,
                              sl.annotateFunction(function (_k) {
                                /* ArityCheck */
                                if (arguments.length !== 1) {
                                  const errorMessage = "Arity: expected 1, _k";
                                  throw new Error(errorMessage);
                                } /* Statements */
                                return _t0 = _solidus_2(
                                  _hyphenMinus_2(_k, _a),
                                  _plusSign_2(
                                    1,
                                    _solidus_2(_k, _plusSign_2(_x, _t0)),
                                  ),
                                );
                              }, ["k"]),
                            );
                            _gim = _solidus_2(
                              _exp_1(_xam),
                              _plusSign_2(_x, _t0),
                            );
                            _gin = _hyphenMinus_2(_ga, _gim);
                            return _gip = _hyphenMinus_2(
                              1,
                              _solidus_2(_gim, _ga),
                            );
                          }, []),
                        );
                        return [_gin, _gim, _gip];
                      }, []),
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["x", "a"]),
  "{ :x :a |\n\t\t(a < 0).if {\n\t\t\t'incompleteGamma: a must be real and nonnegative'.error\n\t\t} {\n\t\t\t(x = 0 & { a = 0 }).if {\n\t\t\t\t[0, Infinity, 0]\n\t\t\t} {\n\t\t\t\t(x = 0).if {\n\t\t\t\t\t[0, a.gamma, 0]\n\t\t\t\t} {\n\t\t\t\t\tlet xam = (x > 0).if {\n\t\t\t\t\t\tx.- + (a * x.log)\n\t\t\t\t\t} {\n\t\t\t\t\t\t'incompleteGamma: negative a'.error\n\t\t\t\t\t};\n\t\t\t\t\t(xam.abs > 700 | { a.abs > 170 } ).if {\n\t\t\t\t\t\t'incompleteGamma: x or a too large'.error\n\t\t\t\t\t} {\n\t\t\t\t\t\tlet gin = 0;\n\t\t\t\t\t\tlet gim = 0;\n\t\t\t\t\t\tlet gip = 0;\n\t\t\t\t\t\tlet ga = a.gamma;\n\t\t\t\t\t\t(x = 0).if {\n\t\t\t\t\t\t\tgim := ga\n\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t(x <= (1 + a)).if {\n\t\t\t\t\t\t\t\tlet s = 1 / a;\n\t\t\t\t\t\t\t\tlet r = s;\n\t\t\t\t\t\t\t\tlet k = 1;\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tr := r * x / (a + k);\n\t\t\t\t\t\t\t\t\ts := s + r;\n\t\t\t\t\t\t\t\t\tk := k + 1\n\t\t\t\t\t\t\t\t}.doWhileTrue {\n\t\t\t\t\t\t\t\t\tk <= 60 & {\n\t\t\t\t\t\t\t\t\t\tlet epsilon = 1E-15;\n\t\t\t\t\t\t\t\t\t\t(r / s).abs > epsilon\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\tgin := xam.exp * s;\n\t\t\t\t\t\t\t\tgip := gin / ga;\n\t\t\t\t\t\t\t\tgim := ga - gin\n\t\t\t\t\t\t\t} {\n\t\t\t\t\t\t\t\tlet t0 = 0;\n\t\t\t\t\t\t\t\t60.downToDo(1) { :k |\n\t\t\t\t\t\t\t\t\tt0 := (k - a) / (1 + (k / (x + t0)))\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t\tgim := xam.exp / (x + t0);\n\t\t\t\t\t\t\t\tgin := ga - gim;\n\t\t\t\t\t\t\t\tgip := 1 - (gim / ga)\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t[gin, gim, gip]\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "lanczosApproximation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _g = 7;
    let _n = 9;
    let _p = [
      0.99999999999980993,
      676.5203681218851,
      -1259.1392167224028,
      771.32342877765313,
      -176.61502916214059,
      12.507343278686905,
      -0.13857109526572012,
      9.9843695780195716E-6,
      1.5056327351493116E-7,
    ];
    let _epsilon = 1E-07;
    let _z = _asComplex_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(_real_1(_z), 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _chop_2(
          _solidus_2(
            _pi_1(1),
            _asterisk_2(
              _sin_1(_asterisk_2(_pi_1(1), _z)),
              _gamma_1(_hyphenMinus_2(1, _z)),
            ),
          ),
          _epsilon,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _x = _at_2(_p, 1);
        let _t = null;
        /* Statements */
        _z = _hyphenMinus_2(_z, 1);
        _toDo_3(
          2,
          _size_1(_p),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _x = _plusSign_2(
              _x,
              _solidus_2(_at_2(_p, _i), _hyphenMinus_2(_plusSign_2(_z, _i), 1)),
            );
          }, ["i"]),
        );
        _t = _plusSign_2(_plusSign_2(_z, _g), 0.5);
        return _chop_2(
          _asterisk_2(
            _asterisk_2(
              _asterisk_2(
                _sqrt_1(_pi_1(2)),
                _circumflexAccent_2(_t, _plusSign_2(_z, 0.5)),
              ),
              _exp_1(_hyphenMinus_2(0, _t)),
            ),
            _x,
          ),
          _epsilon,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet g = 7;\n\t\tlet n = 9;\n\t\tlet p = [\n\t\t\t0.99999999999980993,\n\t\t\t676.5203681218851,\n\t\t\t-1259.1392167224028,\n\t\t\t771.32342877765313,\n\t\t\t-176.61502916214059,\n\t\t\t12.507343278686905,\n\t\t\t-0.13857109526572012,\n\t\t\t9.9843695780195716E-6,\n\t\t\t1.5056327351493116E-7\n\t\t];\n\t\tlet epsilon = 1E-07;\n\t\tlet z = self.asComplex;\n\t\t(z.real < 0.5).if {\n\t\t\t(1.pi / (sin(1.pi * z) * gamma(1 - z))).chop(epsilon)\n\t\t} {\n\t\t\tlet x = p[1];\n\t\t\tlet t = nil;\n\t\t\tz := z - 1;\n\t\t\t2.toDo(p.size) { :i |\n\t\t\t\tx := x + (p[i] / (z + i - 1))\n\t\t\t};\n\t\t\tt := z + g + 0.5;\n\t\t\t(2.pi.sqrt * (t ^ (z + 0.5)) * exp(0 - t) * x).chop(epsilon)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "logBeta",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      _plusSign_2(_logGamma_1(_self), _logGamma_1(_aNumber)),
      _logGamma_1(_plusSign_2(_self, _aNumber)),
    );
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.logGamma + aNumber.logGamma - (self + aNumber).logGamma\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "logGammaLanczosFormula",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _sqrtTwoPi = _sqrt_1(_pi_1(2));
    let _leadingFactor = _gammaLanczosFormulaLeadingFactor_1(_self);
    let _series = _gammaLanczosFormulaSeries_1(_self);
    /* Statements */
    return _plusSign_2(
      _leadingFactor,
      _log_1(_solidus_2(_asterisk_2(_series, _sqrtTwoPi), _self)),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet sqrtTwoPi = 2.pi.sqrt;\n\t\tlet leadingFactor = self.gammaLanczosFormulaLeadingFactor;\n\t\tlet series = self.gammaLanczosFormulaSeries;\n\t\tleadingFactor + (series * sqrtTwoPi / self).log\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "logGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_self, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _logGammaLanczosFormula_1(_self);
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
            return _hyphenMinus_2(
              _logGammaLanczosFormula_1(_plusSign_2(_self, 1)),
              _log_1(_self),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _error_1("@Number>>logGamma: non-positive");
          }, []),
        );
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self > 1).if {\n\t\t\tself.logGammaLanczosFormula\n\t\t} {\n\t\t\t(self > 0).if {\n\t\t\t\t(self + 1).logGammaLanczosFormula - self.log\n\t\t\t} {\n\t\t\t\t'@Number>>logGamma: non-positive'.error\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "lowerIncompleteGamma",
  ["x", "s"],
  sl.annotateFunction(function (_x, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _last_1(_incompleteGamma_2(_x, _s));
  }, ["x", "s"]),
  "{ :x :s |\n\t\tincompleteGamma(x, s).last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "lowerIncompleteGamma",
  ["x", "s", "regularize"],
  sl.annotateFunction(function (_x, _s, _regularize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _s, _regularize";
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
        return 0;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _verticalLine_2(
            _lessThanSign_2(_x, 0),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _lessThanSignEqualsSign_2(_s, 0);
            }, []),
          ),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return NaN;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _ampersand_2(
                _greaterThanSign_2(_x, 1.1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _greaterThanSign_2(_x, _s);
                }, []),
              ),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _regularize,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      1,
                      _upperIncompleteGamma_3(_x, _s, _regularize),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      _gamma_1(_s),
                      _upperIncompleteGamma_3(_x, _s, _regularize),
                    );
                  }, []),
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _r = _s;
                let _c = 1;
                let _pws = 1;
                let _ft = _if_3(
                  _regularize,
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(
                      _hyphenMinus_2(_asterisk_2(_s, _log_1(_x)), _x),
                      _logGamma_1(_s),
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    return _hyphenMinus_2(_asterisk_2(_s, _log_1(_x)), _x);
                  }, []),
                );
                /* Statements */
                _ft = _exp_1(_ft);
                _doWhileTrue_2(
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _r = _plusSign_2(_r, 1);
                    _c = _asterisk_2(_c, _solidus_2(_x, _r));
                    return _pws = _plusSign_2(_pws, _c);
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Temporaries */
                    let _epsilon = 1E-12;
                    /* Statements */
                    return _greaterThanSign_2(_solidus_2(_c, _pws), _epsilon);
                  }, []),
                );
                return _solidus_2(_asterisk_2(_pws, _ft), _s);
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["x", "s", "regularize"]),
  "{ :x :s :regularize |\n\t\t(x = 0).if {\n\t\t\t0\n\t\t} {\n\t\t\t(x < 0 | { s <= 0 }).if {\n\t\t\t\tNaN\n\t\t\t} {\n\t\t\t\t(x > 1.1 & { x > s }).if {\n\t\t\t\t\tregularize.if {\n\t\t\t\t\t\t1 - upperIncompleteGamma(x, s, regularize)\n\t\t\t\t\t} {\n\t\t\t\t\t\tgamma(s) - upperIncompleteGamma(x, s, regularize)\n\t\t\t\t\t}\n\t\t\t\t} {\n\t\t\t\t\tlet r = s;\n\t\t\t\t\tlet c = 1;\n\t\t\t\t\tlet pws = 1;\n\t\t\t\t\tlet ft = regularize.if {\n\t\t\t\t\t\t(s * x.log) - x - logGamma(s)\n\t\t\t\t\t} {\n\t\t\t\t\t\t(s * x.log) - x\n\t\t\t\t\t};\n\t\t\t\t\tft := ft.exp;\n\t\t\t\t\t{\n\t\t\t\t\t\tr := r + 1;\n\t\t\t\t\t\tc := c * (x / r);\n\t\t\t\t\t\tpws := pws + c\n\t\t\t\t\t}.doWhileTrue {\n\t\t\t\t\t\tlet epsilon = 1E-12;\n\t\t\t\t\t\t(c / pws) > epsilon\n\t\t\t\t\t};\n\t\t\t\t\tpws * ft / s\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "upperIncompleteGamma",
  ["x", "s"],
  sl.annotateFunction(function (_x, _s) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _s";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(1, _last_1(_incompleteGamma_2(_x, _s)));
  }, ["x", "s"]),
  "{ :x :s |\n\t\t1 - incompleteGamma(x, s).last\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "upperIncompleteGamma",
  ["x", "s", "regularize"],
  sl.annotateFunction(function (_x, _s, _regularize) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _x, _s, _regularize";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _verticalLine_2(
        _lessThanSignEqualsSign_2(_x, 1.1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _lessThanSignEqualsSign_2(_x, _s);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _regularize,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              1,
              _lowerIncompleteGamma_3(_x, _s, _regularize),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _hyphenMinus_2(
              _gamma_1(_s),
              _lowerIncompleteGamma_3(_x, _s, _regularize),
            );
          }, []),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _f = _hyphenMinus_2(_plusSign_2(1, _x), _s);
        let _c = _f;
        let _d = 0;
        let _i = 1;
        let _chg = null;
        /* Statements */
        _doWhileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _a = _asterisk_2(_i, _hyphenMinus_2(_s, _i));
            let _b = _hyphenMinus_2(
              _plusSign_2(
                _plusSign_2(_lessThanSignLessThanSign_2(_i, 1), 1),
                _x,
              ),
              _s,
            );
            /* Statements */
            _d = _plusSign_2(_b, _asterisk_2(_a, _d));
            _c = _plusSign_2(_b, _solidus_2(_a, _c));
            _d = _solidus_2(1, _d);
            _chg = _asterisk_2(_c, _d);
            _f = _asterisk_2(_f, _chg);
            return _i = _plusSign_2(_i, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _ampersand_2(
              _lessThanSign_2(_i, 10000),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Temporaries */
                let _epsilon = 1E-12;
                /* Statements */
                return _greaterThanSign_2(_hyphenMinus_2(_chg, 1), _epsilon);
              }, []),
            );
          }, []),
        );
        return _if_3(
          _regularize,
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exp_1(
              _hyphenMinus_2(
                _hyphenMinus_2(
                  _hyphenMinus_2(_asterisk_2(_s, _log_1(_x)), _x),
                  _logGamma_1(_s),
                ),
                _log_1(_f),
              ),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _exp_1(
              _hyphenMinus_2(
                _hyphenMinus_2(_asterisk_2(_s, _log_1(_x)), _x),
                _log_1(_f),
              ),
            );
          }, []),
        );
      }, []),
    );
  }, ["x", "s", "regularize"]),
  "{ :x :s :regularize |\n\t\t(x <= 1.1 | { x <= s }).if {\n\t\t\tregularize.if {\n\t\t\t\t1 - lowerIncompleteGamma(x, s, regularize)\n\t\t\t} {\n\t\t\t\tgamma(s) - lowerIncompleteGamma(x, s, regularize)\n\t\t\t}\n\t\t} {\n\t\t\tlet f = 1 + x - s;\n\t\t\tlet c = f;\n\t\t\tlet d = 0;\n\t\t\tlet i = 1;\n\t\t\tlet chg = nil;\n\t\t\t{\n\t\t\t\tlet a = i * (s - i);\n\t\t\t\tlet b = (i << 1) + 1 + x - s;\n\t\t\t\td := b + (a * d);\n\t\t\t\tc := b + (a / c);\n\t\t\t\td := 1 / d;\n\t\t\t\tchg := c * d;\n\t\t\t\tf := f * chg;\n\t\t\t\ti := i + 1\n\t\t\t}.doWhileTrue {\n\t\t\t\ti < 10000 & {\n\t\t\t\t\tlet epsilon = 1E-12;\n\t\t\t\t\t(chg - 1) > epsilon\n\t\t\t\t}\n\t\t\t};\n\t\t\tregularize.if {\n\t\t\t\t((s * x.log) - x - logGamma(s) - f.log).exp\n\t\t\t} {\n\t\t\t\t((s * x.log) - x - f.log).exp\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Gamma",
  "gamma",
  ["z"],
  sl.annotateFunction(function (_z) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _z";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_imaginary_1(_z), 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _gamma_1(_real_1(_z));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_real_1(_z), 0.5),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _solidus_2(
              _solidus_2(_pi_1(1), _sin_1(_pi_1(_z))),
              _gamma_1(_hyphenMinus_2(1, _z)),
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _n = _hyphenMinus_2(_z, 1);
            let _gammaG = 4.7421875;
            let _gammaP = [
              0.99999999999999709182,
              57.156235665862923517,
              -59.597960355475491248,
              14.136097974741747174,
              -0.49191381609762019978,
              0.33994649984811888699E-4,
              0.46523628927048575665E-4,
              -0.98374475304879564677E-4,
              0.15808870322491248884E-3,
              -0.21026444172410488319E-3,
              0.21743961811521264320E-3,
              -0.16431810653676389022E-3,
              0.84418223983852743293E-4,
              -0.26190838401581408670E-4,
              0.36899182659531622704E-5,
            ];
            let _t = _plusSign_2(_plusSign_2(_n, _gammaG), 0.5);
            let _x = _Complex_2(_at_2(_gammaP, 1), 0);
            /* Statements */
            _toDo_3(
              2,
              _size_1(_gammaP),
              sl.annotateFunction(function (_i) {
                /* ArityCheck */
                if (arguments.length !== 1) {
                  const errorMessage = "Arity: expected 1, _i";
                  throw new Error(errorMessage);
                } /* Statements */
                return _x = _plusSign_2(
                  _x,
                  _solidus_2(
                    _at_2(_gammaP, _i),
                    _plusSign_2(_n, _hyphenMinus_2(_i, 1)),
                  ),
                );
              }, ["i"]),
            );
            return _asterisk_2(
              _asterisk_2(
                _asterisk_2(
                  _sqrt_1(_pi_1(2)),
                  _circumflexAccent_2(_t, _plusSign_2(_n, 0.5)),
                ),
                _exp_1(_hyphenMinus_2(0, _t)),
              ),
              _x,
            );
          }, []),
        );
      }, []),
    );
  }, ["z"]),
  "{ :z |\n\t\t(z.imaginary = 0).if {\n\t\t\tz.real.gamma\n\t\t} {\n\t\t\t(z.real < 0.5).if {\n\t\t\t\t1.pi / z.pi.sin / (1 - z).gamma\n\t\t\t} {\n\t\t\t\tlet n = z - 1;\n\t\t\t\tlet gammaG = 4.7421875;\n\t\t\t\tlet gammaP = [\n\t\t\t\t\t0.99999999999999709182,\n\t\t\t\t\t57.156235665862923517,\n\t\t\t\t\t-59.597960355475491248,\n\t\t\t\t\t14.136097974741747174,\n\t\t\t\t\t-0.49191381609762019978,\n\t\t\t\t\t0.33994649984811888699E-4,\n\t\t\t\t\t0.46523628927048575665E-4,\n\t\t\t\t\t-0.98374475304879564677E-4,\n\t\t\t\t\t0.15808870322491248884E-3,\n\t\t\t\t\t-0.21026444172410488319E-3,\n\t\t\t\t\t0.21743961811521264320E-3,\n\t\t\t\t\t-0.16431810653676389022E-3,\n\t\t\t\t\t0.84418223983852743293E-4,\n\t\t\t\t\t-0.26190838401581408670E-4,\n\t\t\t\t\t0.36899182659531622704E-5\n\t\t\t\t];\n\t\t\t\tlet t = n + gammaG + 0.5;\n\t\t\t\tlet x = Complex(gammaP[1], 0);\n\t\t\t\t2.toDo(gammaP.size) { :i |\n\t\t\t\t\tx := x + (gammaP[i] / (n + (i - 1)))\n\t\t\t\t};\n\t\t\t\t2.pi.sqrt * (t ^ (n + 0.5)) * (0 - t).exp * x\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Gamma",
  "pochhammer",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isInteger_1(_a),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isInteger_1(_n);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(_plusSign_2(_a, _to_2(0, _hyphenMinus_2(_n, 1))));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _gamma_1(_plusSign_2(_a, _n));
        let _q = _gamma_1(_a);
        /* Statements */
        return _solidus_2(_p, _q);
      }, []),
    );
  }, ["a", "n"]),
  "{ :a :n |\n\t\t(a.isInteger & { n.isInteger }).if {\n\t\t\t(a + 0.to(n - 1)).product\n\t\t} {\n\t\t\tlet p = gamma(a + n);\n\t\t\tlet q = gamma(a);\n\t\t\tp / q\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Complex",
  "Gamma",
  "pochhammer",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _ampersand_2(
        _isInteger_1(_a),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _isInteger_1(_n);
        }, []),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _product_1(_plusSign_2(_a, _to_2(0, _hyphenMinus_2(_n, 1))));
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _p = _gamma_1(_plusSign_2(_a, _n));
        let _q = _gamma_1(_a);
        /* Statements */
        return _solidus_2(_p, _q);
      }, []),
    );
  }, ["a", "n"]),
  "{ :a :n |\n\t\t(a.isInteger & { n.isInteger }).if {\n\t\t\t(a + 0.to(n - 1)).product\n\t\t} {\n\t\t\tlet p = gamma(a + n);\n\t\t\tlet q = gamma(a);\n\t\t\tp / q\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "qPochhammer",
  ["a", "q", "n"],
  sl.annotateFunction(function (_a, _q, _n) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _a, _q, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _product_2(
      _to_2(0, _hyphenMinus_2(_n, 1)),
      sl.annotateFunction(function (_k) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _k";
          throw new Error(errorMessage);
        } /* Statements */
        return (_hyphenMinus_2(
          1,
          _asterisk_2(_a, _circumflexAccent_2(_q, _k)),
        ));
      }, ["k"]),
    );
  }, ["a", "q", "n"]),
  "{ :a :q :n |\n\t\t0.to(n - 1).product { :k |\n\t\t\t(1 - (a * (q ^ k)))\n\t\t}\n\t}",
);
