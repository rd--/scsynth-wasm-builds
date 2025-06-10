sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeNone",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _t;
  }, ["t"]),
  "{ :t | t }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInQuadratic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_t, _t);
  }, ["t"]),
  "{ :t | *(t, t) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutQuadratic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_hyphenMinus_2(0, _t), _hyphenMinus_2(_t, 2));
  }, ["t"]),
  "{ :t | *((-(0, t)), (-(t, 2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutQuadratic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _asterisk_2(_t, 2);
    return _if_3(
      _lessThanSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_asterisk_2(0.5, _t), _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          -0.5,
          _hyphenMinus_2(
            _asterisk_2(_hyphenMinus_2(_t, 1), _hyphenMinus_2(_t, 3)),
            1,
          ),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | t := *(t, 2); if(<(t, 1), { *(*(0.5, t), t) }, { *(-0.5, (-(*(-(t, 1), (-(t, 3))), 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInQuadratic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_easeOutQuadratic_1(_asterisk_2(_t, 2)), 0.5);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _asterisk_2(
            _easeInQuadratic_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)),
            0.5,
          ),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { *(easeOutQuadratic(*(t, 2)), 0.5) }, { +(*(easeInQuadratic(-(*(2, t), 1)), 0.5), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInCubic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_t, _t), _t);
  }, ["t"]),
  "{ :t | *(*(t, t), t) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutCubic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _hyphenMinus_2(_t, 1);
    return _plusSign_2(_asterisk_2(_asterisk_2(_t, _t), _t), 1);
  }, ["t"]),
  "{ :t | t := -(t, 1); +((*(*(t, t), t)), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutCubic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _asterisk_2(_t, 2);
    return _if_3(
      _lessThanSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(_asterisk_2(_asterisk_2(0.5, _t), _t), _t);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        _t = _hyphenMinus_2(_t, 2);
        return _asterisk_2(
          0.5,
          _plusSign_2(_asterisk_2(_asterisk_2(_t, _t), _t), 2),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | t := *(t, 2); if(<(t, 1), { *(*(*(0.5, t), t), t) }, { t := -(t, 2); *(0.5, (+(*(*(t, t), t), 2))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInCubic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutCubic_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(_easeInCubic_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)), 2),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutCubic(*(2, t)), 2) }, { +(/(easeInCubic(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInQuartic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_asterisk_2(_asterisk_2(_t, _t), _t), _t);
  }, ["t"]),
  "{ :t | *(*(*(t, t), t), t) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutQuartic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _hyphenMinus_2(_t, 1);
    return _hyphenMinus_2(
      0,
      _hyphenMinus_2(_asterisk_2(_asterisk_2(_asterisk_2(_t, _t), _t), _t), 1),
    );
  }, ["t"]),
  "{ :t | t := -(t, 1); -(0, (-(*(*(*(t, t), t), t), 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutQuartic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _asterisk_2(_t, 2);
    return _if_3(
      _lessThanSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(_asterisk_2(_asterisk_2(0.5, _t), _t), _t),
          _t,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _hyphenMinus_2(_t, 2);
        /* Statements */
        return _asterisk_2(
          -0.5,
          _hyphenMinus_2(
            _asterisk_2(_asterisk_2(_asterisk_2(_z, _z), _z), _z),
            2,
          ),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | t := *(t, 2); if(<(t, 1), { *(*(*(*(0.5, t), t), t), t) }, { let z = -(t, 2); *(-0.5, (-(*(*(*(z, z), z), z), 2))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInQuartic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutQuartic_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(
            _easeInQuartic_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)),
            2,
          ),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutQuartic(*(2, t)), 2) }, { +(/(easeInQuartic(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInQuintic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _asterisk_2(_asterisk_2(_asterisk_2(_t, _t), _t), _t),
      _t,
    );
  }, ["t"]),
  "{ :t | *(*(*(*(t, t), t), t), t) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutQuintic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _hyphenMinus_2(_t, 1);
    return _plusSign_2(
      _asterisk_2(_asterisk_2(_asterisk_2(_asterisk_2(_t, _t), _t), _t), _t),
      1,
    );
  }, ["t"]),
  "{ :t | t := -(t, 1); +(*(*(*(*(t, t), t), t), t), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutQuintic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _asterisk_2(_t, 2);
    return _if_3(
      _lessThanSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _asterisk_2(
            _asterisk_2(_asterisk_2(_asterisk_2(0.5, _t), _t), _t),
            _t,
          ),
          _t,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _hyphenMinus_2(_t, 2);
        /* Statements */
        return _asterisk_2(
          0.5,
          _plusSign_2(
            _asterisk_2(
              _asterisk_2(_asterisk_2(_asterisk_2(_z, _z), _z), _z),
              _z,
            ),
            2,
          ),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | t := *(t, 2); if(<(t, 1), { *(*(*(*(*(0.5, t), t), t), t), t) }, { let z = -(t, 2); *(0.5, (+(*(*(*(*(z, z), z), z), z), 2))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInQuintic",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutQuintic_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(
            _easeInQuintic_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)),
            2,
          ),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutQuintic(*(2, t)), 2) }, { +(/(easeInQuintic(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInSine",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_hyphenMinus_2(0, _cos_1(_solidus_2(_pi_1(_t), 2))), 1);
  }, ["t"]),
  "{ :t | +(-(0, cos(/(pi(t), 2))), 1) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutSine",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _sin_1(_solidus_2(_pi_1(_t), 2));
  }, ["t"]),
  "{ :t | sin(/(pi(t), 2)) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutSine",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(-0.5, _hyphenMinus_2(_cos_1(_pi_1(_t)), 1));
  }, ["t"]),
  "{ :t | *(-0.5, (-(cos(pi(t)), 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInSine",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutSine_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(_easeInSine_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)), 2),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutSine(*(2, t)), 2) }, { +(/(easeInSine(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInExponential",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(2, _asterisk_2(10, _hyphenMinus_2(_t, 1)));
  }, ["t"]),
  "{ :t | ^(2, (*(10, (-(t, 1))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutExponential",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_t, 1),
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
        return _plusSign_2(
          _hyphenMinus_2(0, _circumflexAccent_2(2, _asterisk_2(-10, _t))),
          1,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(=(t, 1), { 1 }, { +(-(0, (^(2, (*(-10, t))))), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutExponential",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_t, 0),
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
          _equalsSign_2(_t, 1),
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
            _t = _asterisk_2(_t, 2);
            return _if_3(
              _lessThanSign_2(_t, 1),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _asterisk_2(
                  0.5,
                  _circumflexAccent_2(
                    2,
                    _asterisk_2(10, _hyphenMinus_2(_t, 1)),
                  ),
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
                    _hyphenMinus_2(
                      0,
                      _circumflexAccent_2(
                        2,
                        _asterisk_2(-10, _hyphenMinus_2(_t, 1)),
                      ),
                    ),
                    2,
                  ),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(=(t, 0), { 0 }, { if(=(t, 1), { 1 }, { t := *(t, 2); if(<(t, 1), { *(0.5, (^(2, (*(10, (-(t, 1))))))) }, { *(0.5, (+(-(0, (^(2, (*(-10, (-(t, 1))))))), 2))) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInExponential",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutExponential_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(
            _easeInExponential_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)),
            2,
          ),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutExponential(*(2, t)), 2) }, { +(/(easeInExponential(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInCircular",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(
      0,
      _hyphenMinus_2(_sqrt_1(_hyphenMinus_2(1, _asterisk_2(_t, _t))), 1),
    );
  }, ["t"]),
  "{ :t | -(0, (-(sqrt(-(1, (*(t, t)))), 1))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutCircular",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _hyphenMinus_2(_t, 1);
    return _sqrt_1(_hyphenMinus_2(1, _asterisk_2(_t, _t)));
  }, ["t"]),
  "{ :t | t := -(t, 1); sqrt(-(1, (*(t, t)))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutCircular",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    _t = _asterisk_2(_t, 2);
    return _if_3(
      _lessThanSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          -0.5,
          _hyphenMinus_2(_sqrt_1(_hyphenMinus_2(1, _asterisk_2(_t, _t))), 1),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _z = _hyphenMinus_2(_t, 2);
        /* Statements */
        return _asterisk_2(
          0.5,
          _plusSign_2(_sqrt_1(_hyphenMinus_2(1, _asterisk_2(_z, _z))), 1),
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | t := *(t, 2); if(<(t, 1), { *(-0.5, (-(sqrt(-(1, (*(t, t)))), 1))) }, { let z = -(t, 2); *(0.5, (+(sqrt(-(1, (*(z, z)))), 1))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInCircular",
  ["t"],
  sl.annotateFunction(function (_t) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _lessThanSign_2(_t, 0.5),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(_easeOutCircular_1(_asterisk_2(2, _t)), 2);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _solidus_2(
            _easeInCircular_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)),
            2,
          ),
          0.5,
        );
      }, []),
    );
  }, ["t"]),
  "{ :t | if(<(t, 0.5), { /(easeOutCircular(*(2, t)), 2) }, { +(/(easeInCircular(-(*(2, t), 1)), 2), 0.5) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeBounceFunction",
  ["t", "c", "a"],
  sl.annotateFunction(function (_t, _c, _a) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _t, _c, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_t, 1),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _c;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(
          _lessThanSign_2(_t, _solidus_2(4, 11)),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(_asterisk_2(_asterisk_2(_c, 7.5625), _t), _t);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _if_3(
              _lessThanSign_2(_t, _solidus_2(8, 11)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _t = _hyphenMinus_2(_t, _solidus_2(6, 11));
                return _plusSign_2(
                  _asterisk_2(
                    _hyphenMinus_2(0, _a),
                    _hyphenMinus_2(
                      1,
                      _plusSign_2(
                        _asterisk_2(_asterisk_2(7.5625, _t), _t),
                        0.75,
                      ),
                    ),
                  ),
                  _c,
                );
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _if_3(
                  _lessThanSign_2(_t, _solidus_2(10, 11)),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _t = _hyphenMinus_2(_t, _solidus_2(9, 11));
                    return _plusSign_2(
                      _asterisk_2(
                        _hyphenMinus_2(0, _a),
                        _hyphenMinus_2(
                          1,
                          _plusSign_2(
                            _asterisk_2(_asterisk_2(7.5625, _t), _t),
                            0.9375,
                          ),
                        ),
                      ),
                      _c,
                    );
                  }, []),
                  sl.annotateFunction(function () {
                    /* ArityCheck */
                    if (arguments.length !== 0) {
                      const errorMessage = "Arity: expected 0, ";
                      throw new Error(errorMessage);
                    } /* Statements */
                    _t = _hyphenMinus_2(_t, _solidus_2(21, 22));
                    return _plusSign_2(
                      _asterisk_2(
                        _hyphenMinus_2(0, _a),
                        _hyphenMinus_2(
                          1,
                          _plusSign_2(
                            _asterisk_2(_asterisk_2(7.5625, _t), _t),
                            0.984375,
                          ),
                        ),
                      ),
                      _c,
                    );
                  }, []),
                );
              }, []),
            );
          }, []),
        );
      }, []),
    );
  }, ["t", "c", "a"]),
  "{ :t :c :a | if(=(t, 1), { c }, { if(<(t, (/(4, 11))), { *(*(*(c, 7.5625), t), t) }, { if(<(t, (/(8, 11))), { t := -(t, (/(6, 11))); +(*((-(0, a)), (-(1, (+(*(*(7.5625, t), t), 0.75))))), c) }, { if(<(t, (/(10, 11))), { t := -(t, (/(9, 11))); +(*((-(0, a)), (-(1, (+(*(*(7.5625, t), t), 0.9375))))), c) }, { t := -(t, (/(21, 22))); +(*((-(0, a)), (-(1, (+(*(*(7.5625, t), t), 0.984375))))), c) }) }) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInBounce",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _hyphenMinus_2(
        1,
        _easeBounceFunction_3(_hyphenMinus_2(1, _t), 1, _a),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | -(1, easeBounceFunction(-(1, t), 1, a)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutBounce",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _easeBounceFunction_3(_t, 1, _a);
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | easeBounceFunction(t, 1, a) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutBounce",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _in_1 = _easeInBounce_1(_a);
    let _out_1 = _easeOutBounce_1(_a);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_t, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_in_1(_asterisk_2(2, _t)), 2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_t, 1),
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
              return _plusSign_2(
                _solidus_2(_out_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)), 2),
                0.5,
              );
            }, []),
          );
        }, []),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | let in:/1 = easeInBounce(a); let out:/1 = easeOutBounce(a); { :t | if(<(t, 0.5), { /(in(*(2, t)), 2) }, { if(=(t, 1), { 1 }, { +(/(out(-(*(2, t), 1)), 2), 0.5) }) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInBounce",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_t, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeBounceFunction_3(_asterisk_2(_t, 2), 0.5, _a);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(
            1,
            _easeBounceFunction_3(
              _hyphenMinus_2(2, _asterisk_2(2, _t)),
              0.5,
              _a,
            ),
          );
        }, []),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | if(<(t, 0.5), { easeBounceFunction(*(t, 2), 0.5, a) }, { -(1, easeBounceFunction(-(2, (*(2, t))), 0.5, a)) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInBack",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _asterisk_2(_t, _t),
        _hyphenMinus_2(_asterisk_2(_plusSign_2(_a, 1), _t), _a),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | *(*(t, t), (-(*((+(a, 1)), t), a))) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutBack",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      _t = _hyphenMinus_2(_t, 1);
      return _plusSign_2(
        _asterisk_2(
          _asterisk_2(_t, _t),
          _plusSign_2(_asterisk_2(_plusSign_2(_a, 1), _t), _a),
        ),
        1,
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | t := -(t, 1); +(*(*(t, t), (+(*((+(a, 1)), t), a))), 1) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutBack",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _a2 = _asterisk_2(_a, 1.525);
      /* Statements */
      _t = _asterisk_2(_t, 2);
      return _if_3(
        _lessThanSign_2(_t, 1),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            0.5,
            _asterisk_2(
              _asterisk_2(_t, _t),
              _hyphenMinus_2(_asterisk_2(_plusSign_2(_a2, 1), _t), _a2),
            ),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Temporaries */
          let _t2 = _hyphenMinus_2(_t, 2);
          /* Statements */
          return _asterisk_2(
            0.5,
            _plusSign_2(
              _asterisk_2(
                _asterisk_2(_t2, _t2),
                _plusSign_2(_asterisk_2(_plusSign_2(_a2, 1), _t2), _a2),
              ),
              2,
            ),
          );
        }, []),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | let a2 = *(a, 1.525); t := *(t, 2); if(<(t, 1), { *(0.5, (*(*(t, t), (-(*((+(a2, 1)), t), a2))))) }, { let t2 = -(t, 2); *(0.5, (+(*(*(t2, t2), (+(*((+(a2, 1)), t2), a2))), 2))) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInBack",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _in_1 = _easeInBack_1(_a);
    let _out_1 = _easeOutBack_1(_a);
    /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_t, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(_out_1(_asterisk_2(2, _t)), 2);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _plusSign_2(
            _solidus_2(_in_1(_hyphenMinus_2(_asterisk_2(2, _t), 1)), 2),
            0.5,
          );
        }, []),
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | let in:/1 = easeInBack(a); let out:/1 = easeOutBack(a); { :t | if(<(t, 0.5), { /(out(*(2, t)), 2) }, { +(/(in(-(*(2, t), 1)), 2), 0.5) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInElastic",
  ["t", "b", "c", "d", "a", "p"],
  sl.annotateFunction(function (_t, _b, _c, _d, _a, _p) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _t, _b, _c, _d, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_t, 0),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _b;
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _tAdj = _solidus_2(_t, _d);
        /* Statements */
        return _if_3(
          _equalsSign_2(_tAdj, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(_b, _c);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = null;
            /* Statements */
            _if_3(
              _lessThanSign_2(_a, _abs_1(_c)),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _a = _c;
                return _s = _solidus_2(_p, 4);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _s = _asterisk_2(
                  _solidus_2(_p, _pi_1(2)),
                  _arcSin_1(_solidus_2(_c, _a)),
                );
              }, []),
            );
            _tAdj = _hyphenMinus_2(_tAdj, 1);
            return _plusSign_2(
              _hyphenMinus_2(
                0,
                _asterisk_2(
                  _asterisk_2(
                    _a,
                    _circumflexAccent_2(2, _asterisk_2(10, _tAdj)),
                  ),
                  _sin_1(
                    _solidus_2(
                      _asterisk_2(
                        _hyphenMinus_2(_asterisk_2(_tAdj, _d), _s),
                        _pi_1(2),
                      ),
                      _p,
                    ),
                  ),
                ),
              ),
              _b,
            );
          }, []),
        );
      }, []),
    );
  }, ["t", "b", "c", "d", "a", "p"]),
  "{ :t :b :c :d :a :p | if(=(t, 0), { b }, { let tAdj = /(t, d); if(=(tAdj, 1), { +(b, c) }, { let s = nil; if(<(a, abs(c)), { a := c; s := /(p, 4) }, { s := *(/(p, pi(2)), arcSin(/(c, a))) }); tAdj := -(tAdj, 1); +(-(0, (*(*(a, (^(2, (*(10, tAdj))))), sin(/(*((-(*(tAdj, d), s)), pi(2)), p))))), b) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInElastic",
  ["a", "p"],
  sl.annotateFunction(function (_a, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _easeInElastic_6(_t, 0, 1, 1, _a, _p);
    }, ["t"]);
  }, ["a", "p"]),
  "{ :a :p | { :t | easeInElastic(t, 0, 1, 1, a, p) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutElastic",
  ["t", "b", "c", "d", "a", "p"],
  sl.annotateFunction(function (_t, _b, _c, _d, _a, _p) {
    /* ArityCheck */
    if (arguments.length !== 6) {
      const errorMessage = "Arity: expected 6, _t, _b, _c, _d, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _equalsSign_2(_t, 0),
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
          _equalsSign_2(_t, 1),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _c;
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _s = null;
            /* Statements */
            _if_3(
              _lessThanSign_2(_a, _c),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _a = _c;
                return _s = _solidus_2(_p, 4);
              }, []),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _s = _asterisk_2(
                  _solidus_2(_p, _pi_1(2)),
                  _arcSin_1(_solidus_2(_c, _a)),
                );
              }, []),
            );
            return _plusSign_2(
              _asterisk_2(
                _asterisk_2(_a, _circumflexAccent_2(2, _asterisk_2(-10, _t))),
                _sin_1(
                  _solidus_2(_asterisk_2(_hyphenMinus_2(_t, _s), _pi_1(2)), _p),
                ),
              ),
              _c,
            );
          }, []),
        );
      }, []),
    );
  }, ["t", "b", "c", "d", "a", "p"]),
  "{ :t :b :c :d :a :p | if(=(t, 0), { 0 }, { if(=(t, 1), { c }, { let s = nil; if(<(a, c), { a := c; s := /(p, 4) }, { s := *(/(p, pi(2)), arcSin(/(c, a))) }); +(*(*(a, (^(2, (*(-10, t))))), sin(/(*((-(t, s)), pi(2)), p))), c) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutElastic",
  ["a", "p"],
  sl.annotateFunction(function (_a, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _easeOutElastic_6(_t, 0, 1, 1, _a, _p);
    }, ["t"]);
  }, ["a", "p"]),
  "{ :a :p | { :t | easeOutElastic(t, 0, 1, 1, a, p) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutElastic",
  ["a", "p"],
  sl.annotateFunction(function (_a, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _equalsSign_2(_t, 0),
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
          _t = _asterisk_2(_t, 2);
          return _if_3(
            _equalsSign_2(_t, 2),
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
              } /* Temporaries */
              let _s = null;
              /* Statements */
              _if_3(
                _lessThanSign_2(_a, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  _a = 1;
                  return _s = _solidus_2(_p, 4);
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _s = _asterisk_2(
                    _solidus_2(_p, _pi_1(2)),
                    _arcSin_1(_solidus_2(1, _a)),
                  );
                }, []),
              );
              return _if_3(
                _lessThanSign_2(_t, 1),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _asterisk_2(
                    -0.5,
                    _asterisk_2(
                      _asterisk_2(
                        _a,
                        _circumflexAccent_2(
                          2,
                          _asterisk_2(10, _hyphenMinus_2(_t, 1)),
                        ),
                      ),
                      _sin_1(
                        _solidus_2(
                          _asterisk_2(
                            _hyphenMinus_2(_hyphenMinus_2(_t, 1), _s),
                            _pi_1(2),
                          ),
                          _p,
                        ),
                      ),
                    ),
                  );
                }, []),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _plusSign_2(
                    _asterisk_2(
                      _asterisk_2(
                        _asterisk_2(
                          _a,
                          _circumflexAccent_2(
                            2,
                            _asterisk_2(-10, _hyphenMinus_2(_t, 1)),
                          ),
                        ),
                        _sin_1(
                          _solidus_2(
                            _asterisk_2(
                              _hyphenMinus_2(_hyphenMinus_2(_t, 1), _s),
                              _pi_1(2),
                            ),
                            _p,
                          ),
                        ),
                      ),
                      0.5,
                    ),
                    1,
                  );
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["t"]);
  }, ["a", "p"]),
  "{ :a :p | { :t | if(=(t, 0), { 0 }, { t := *(t, 2); if(=(t, 2), { 1 }, { let s = nil; if(<(a, 1), { a := 1; s := /(p, 4) }, { s := *(/(p, pi(2)), arcSin(/(1, a))) }); if(<(t, 1), { *(-0.5, (*(*(a, (^(2, (*(10, (-(t, 1))))))), sin(/(*((-(-(t, 1), s)), pi(2)), p))))) }, { +(*(*(*(a, (^(2, (*(-10, (-(t, 1))))))), sin(/(*((-(-(t, 1), s)), pi(2)), p))), 0.5), 1) }) }) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutInElastic",
  ["a", "p"],
  sl.annotateFunction(function (_a, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_t, 0.5),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutElastic_6(_asterisk_2(_t, 2), 0, 0.5, 1, _a, _p);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInElastic_6(
            _hyphenMinus_2(_asterisk_2(2, _t), 1),
            0.5,
            0.5,
            1,
            _a,
            _p,
          );
        }, []),
      );
    }, ["t"]);
  }, ["a", "p"]),
  "{ :a :p | { :t | if(<(t, 0.5), { easeOutElastic(*(t, 2), 0, 0.5, 1, a, p) }, { easeInElastic(-(*(2, t), 1), 0.5, 0.5, 1, a, p) }) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInArcTan",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _solidus_2(
          _arcTan_1(_asterisk_2(_hyphenMinus_2(_t, 1), _a)),
          _arcTan_1(_a),
        ),
        1,
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | +(/(arcTan(*((-(t, 1)), a)), arcTan(a)), 1) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeOutArcTan",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(_arcTan_1(_asterisk_2(_t, _a)), _arcTan_1(_a));
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | /(arcTan(*(t, a)), arcTan(a)) } }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "EasingFunctions",
  "easeInOutArcTan",
  ["a"],
  sl.annotateFunction(function (_a) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _a";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_t) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _t";
        throw new Error(errorMessage);
      } /* Statements */
      return _plusSign_2(
        _solidus_2(
          _arcTan_1(_asterisk_2(_hyphenMinus_2(_t, 0.5), _a)),
          _asterisk_2(2, _arcTan_1(_asterisk_2(0.5, _a))),
        ),
        0.5,
      );
    }, ["t"]);
  }, ["a"]),
  "{ :a | { :t | +(/(arcTan(*((-(t, 0.5)), a)), (*(2, arcTan(*(0.5, a))))), 0.5) } }",
);

sl.extendTypeOrTraitWithMethod(
  "String",
  "EasingFunctions",
  "easingFunction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _caseOf_2(_self, [
      _hyphenMinusGreaterThanSign_2(
        "InQuadratic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInQuadratic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutQuadratic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutQuadratic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutQuadratic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutQuadratic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInQuadratic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInQuadratic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InCubic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInCubic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutCubic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutCubic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutCubic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutCubic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInCubic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInCubic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InQuartic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInQuartic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutQuartic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutQuartic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutQuartic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutQuartic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInQuartic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInQuartic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InQuintic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInQuintic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutQuintic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutQuintic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutQuintic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutQuintic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInQuintic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInQuintic_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InSine",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInSine_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutSine",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutSine_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutSine",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutSine_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInSine",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInSine_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InExponential",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInExponential_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutExponential",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutExponential_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutExponential",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutExponential_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInExponential",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInExponential_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InCircular",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInCircular_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutCircular",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutCircular_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutCircular",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutCircular_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInCircular",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInCircular_1;
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InBounce",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInBounce_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutBounce",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutBounce_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutBounce",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutBounce_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInBounce",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInBounce_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InBack",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInBack_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutBack",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutBack_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutBack",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutBack_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInBack",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInBack_1(1.70158);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InElastic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInElastic_2(1, 1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutElastic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutElastic_2(1, 1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutElastic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutElastic_2(1, 1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutInElastic",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutInElastic_2(1, 1);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InArcTan",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInArcTan_1(15);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "OutArcTan",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeOutArcTan_1(15);
        }, []),
      ),
      _hyphenMinusGreaterThanSign_2(
        "InOutArcTan",
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _easeInOutArcTan_1(15);
        }, []),
      ),
    ]);
  }, ["self"]),
  "{ :self | caseOf(self,[->('InQuadratic', { easeInQuadratic:/1 }), ->('OutQuadratic', { easeOutQuadratic:/1 }), ->('InOutQuadratic', { easeInOutQuadratic:/1 }), ->('OutInQuadratic', { easeOutInQuadratic:/1 }), ->('InCubic', { easeInCubic:/1 }), ->('OutCubic', { easeOutCubic:/1 }), ->('InOutCubic', { easeInOutCubic:/1 }), ->('OutInCubic', { easeOutInCubic:/1 }), ->('InQuartic', { easeInQuartic:/1 }), ->('OutQuartic', { easeOutQuartic:/1 }), ->('InOutQuartic', { easeInOutQuartic:/1 }), ->('OutInQuartic', { easeOutInQuartic:/1 }), ->('InQuintic', { easeInQuintic:/1 }), ->('OutQuintic', { easeOutQuintic:/1 }), ->('InOutQuintic', { easeInOutQuintic:/1 }), ->('OutInQuintic', { easeOutInQuintic:/1 }), ->('InSine', { easeInSine:/1 }), ->('OutSine', { easeOutSine:/1 }), ->('InOutSine', { easeInOutSine:/1 }), ->('OutInSine', { easeOutInSine:/1 }), ->('InExponential', { easeInExponential:/1 }), ->('OutExponential', { easeOutExponential:/1 }), ->('InOutExponential', { easeInOutExponential:/1 }), ->('OutInExponential', { easeOutInExponential:/1 }), ->('InCircular', { easeInCircular:/1 }), ->('OutCircular', { easeOutCircular:/1 }), ->('InOutCircular', { easeInOutCircular:/1 }), ->('OutInCircular', { easeOutInCircular:/1 }), ->('InBounce', { easeInBounce(1.70158) }), ->('OutBounce', { easeOutBounce(1.70158) }), ->('InOutBounce', { easeInOutBounce(1.70158) }), ->('OutInBounce', { easeOutInBounce(1.70158) }), ->('InBack', { easeInBack(1.70158) }), ->('OutBack', { easeOutBack(1.70158) }), ->('InOutBack', { easeInOutBack(1.70158) }), ->('OutInBack', { easeOutInBack(1.70158) }), ->('InElastic', { easeInElastic(1, 1) }), ->('OutElastic', { easeOutElastic(1, 1) }), ->('InOutElastic', { easeInOutElastic(1, 1) }), ->('OutInElastic', { easeOutInElastic(1, 1) }), ->('InArcTan', { easeInArcTan(15) }), ->('OutArcTan', { easeOutArcTan(15) }), ->('InOutArcTan', { easeInOutArcTan(15) })]) }",
);
