sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self :aNumber | if(isCollection(aNumber), { collect(aNumber, { :each | beta(self,each) }) }, { exp(logBeta(self,aNumber)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :a :b | let stop = 1E-8; let tiny = 1E-30; if((|(<(x, 0), { >(x, 1) })), { Infinity }, { if((>(x, (/((+(a, 1)), (+(+(a, b), 2)))))), { -(1, betaRegularized(-(1, x), b, a)) }, { let lbetaAb = -(+(logGamma(a), logGamma(b)), logGamma(+(a, b))); let front = /(exp((-(+((*(log(x), a)), (*(log((-(1, x))), b))), lbetaAb))), a); let f = 1; let c = 1; let d = 0; let cd = *(c, d); let i = 0; let converged = false; doWhileTrue({ let m = //(i, 2); let numerator = if((=(i, 0)), { 1 }, { if((=(%(i, 2), 0)), { /((*(*(m, (-(b, m))), x)), (*((-(+(a, (*(2, m))), 1)), (+(a, (*(2, m))))))) }, { /(-((*(*((+(a, m)), (+(+(a, b), m))), x))), (*((+(a, (*(2, m)))), (+(+(a, (*(2, m))), 1))))) }) }); d := +(1, (*(numerator, d))); ifTrue((<(abs(d), tiny)), { d := tiny }); d := /(1, d); c := +(1, (/(numerator, c))); ifTrue((<(abs(c), tiny)), { c := tiny }); cd := *(c, d); f := *(f, cd); converged := <(abs((-(1, cd))), stop); i := +(i, 1) }, { &(<=(i, 200), { not(converged) }) }); if(converged, { *(front, (-(f, 1))) }, { Infinity }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self | let z = +(self, 5.5); -(*(log(z), (+(self, 0.5))), z) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self | let term = self; let coefficients = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -0.000005395239384953]; injectInto(coefficients, 1.000000000190015, { :sum :each | term := +(term, 1); +(/(each, term), sum) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Gamma",
  "gammaLanczosFormula",
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
    return _solidus_2(
      _asterisk_2(_asterisk_2(_exp_1(_leadingFactor), _series), _sqrtTwoPi),
      _self,
    );
  }, ["self"]),
  "{ :self | let sqrtTwoPi = sqrt(pi(2)); let leadingFactor = gammaLanczosFormulaLeadingFactor(self); let series = gammaLanczosFormulaSeries(self); /(*((*(exp(leadingFactor), series)), sqrtTwoPi), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self | if((&(isInteger(self), { (>=(self, 1)) })), { factorial((-(self, 1))) }, { if((<(self, 0)), { /(pi(1), (*(sin(pi(self)), gamma((-(1, self)))))) }, { /(gammaLanczosFormula((+(self, 1))), self) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :a :z | -(1, last(incompleteGamma(z, a))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :a :b :z | if((=(b, 0)), { last(incompleteGamma(z, a)) }, { error('gammaRegularized: b non-zero') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :a | if((<(a, 0)), { error('incompleteGamma: a must be real and nonnegative') }, { if((&(=(x, 0), { =(a, 0) })), { [0, Infinity, 0] }, { if((=(x, 0)), { [0, gamma(a), 0] }, { let xam = if((>(x, 0)), { +(-(x), (*(a, log(x)))) }, { error('incompleteGamma: negative a') }); if((|(>(abs(xam), 700), { >(abs(a), 170) })), { error('incompleteGamma: x or a too large') }, { let gin = 0; let gim = 0; let gip = 0; let ga = gamma(a); if((=(x, 0)), { gim := ga }, { if((<=(x, (+(1, a)))), { let s = /(1, a); let r = s; let k = 1; doWhileTrue({ r := /(*(r, x), (+(a, k))); s := +(s, r); k := +(k, 1) }, { &(<=(k, 60), { let epsilon = 1E-15; >(abs((/(r, s))), epsilon) }) }); gin := *(exp(xam), s); gip := /(gin, ga); gim := -(ga, gin) }, { let t0 = 0; downToDo(60, 1, { :k | t0 := /((-(k, a)), (+(1, (/(k, (+(x, t0))))))) }); gim := /(exp(xam), (+(x, t0))); gin := -(ga, gim); gip := -(1, (/(gim, ga))) }); [gin, gim, gip] }) }) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self :aNumber | -(+(logGamma(self), logGamma(aNumber)), logGamma((+(self, aNumber)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self | let sqrtTwoPi = sqrt(pi(2)); let leadingFactor = gammaLanczosFormulaLeadingFactor(self); let series = gammaLanczosFormulaSeries(self); +(leadingFactor, log((/(*(series, sqrtTwoPi), self)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :self | if((>(self, 1)), { logGammaLanczosFormula(self) }, { if((>(self, 0)), { -(logGammaLanczosFormula((+(self, 1))), log(self)) }, { error('@Number>>logGamma: non-positive') }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :s | last(incompleteGamma(x, s)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :s :regularize | if((=(x, 0)), { 0 }, { if((|(<(x, 0), { <=(s, 0) })), { NaN }, { if((&(>(x, 1.1), { >(x, s) })), { if(regularize, { -(1, upperIncompleteGamma(x, s, regularize)) }, { -(gamma(s), upperIncompleteGamma(x, s, regularize)) }) }, { let r = s; let c = 1; let pws = 1; let ft = if(regularize, { -(-((*(s, log(x))), x), logGamma(s)) }, { -((*(s, log(x))), x) }); ft := exp(ft); doWhileTrue({ r := +(r, 1); c := *(c, (/(x, r))); pws := +(pws, c) }, { let epsilon = 1E-12; >((/(c, pws)), epsilon) }); /(*(pws, ft), s) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :s | -(1, last(incompleteGamma(x, s))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
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
  "{ :x :s :regularize | if((|(<=(x, 1.1), { <=(x, s) })), { if(regularize, { -(1, lowerIncompleteGamma(x, s, regularize)) }, { -(gamma(s), lowerIncompleteGamma(x, s, regularize)) }) }, { let f = -(+(1, x), s); let c = f; let d = 0; let i = 1; let chg = nil; doWhileTrue({ let a = *(i, (-(s, i))); let b = -(+(+((<<(i, 1)), 1), x), s); d := +(b, (*(a, d))); c := +(b, (/(a, c))); d := /(1, d); chg := *(c, d); f := *(f, chg); i := +(i, 1) }, { &(<(i, 10000), { let epsilon = 1E-12; >((-(chg, 1)), epsilon) }) }); if(regularize, { exp((-(-(-((*(s, log(x))), x), logGamma(s)), log(f)))) }, { exp((-(-((*(s, log(x))), x), log(f)))) }) }) }",
);
