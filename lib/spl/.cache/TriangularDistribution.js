sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "TriangularDistribution",
  "triangularDistribution",
  ["self", "min", "max", "c"],
  sl.annotateFunction(function (_self, _min, _max, _c) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _self, _min, _max, _c";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _nextRandomFloat_1(_self);
    /* Statements */
    return _if_3(
      _lessThanSign_2(
        _u,
        _solidus_2(_hyphenMinus_2(_c, _min), _hyphenMinus_2(_max, _min)),
      ),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _plusSign_2(
          _min,
          _sqrt_1(
            _asterisk_2(
              _asterisk_2(_u, _hyphenMinus_2(_max, _min)),
              _hyphenMinus_2(_c, _min),
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
        return _hyphenMinus_2(
          _max,
          _sqrt_1(
            _asterisk_2(
              _asterisk_2(_hyphenMinus_2(1, _u), _hyphenMinus_2(_max, _min)),
              _hyphenMinus_2(_max, _c),
            ),
          ),
        );
      }, []),
    );
  }, ["self", "min", "max", "c"]),
  "{ :self :min :max :c | let u = nextRandomFloat(self); if((<(u, (/((-(c, min)), (-(max, min)))))), { +(min, sqrt((*(*(u, (-(max, min))), (-(c, min)))))) }, { -(max, sqrt((*(*((-(1, u)), (-(max, min))), (-(max, c)))))) }) }",
);

sl.addType(
  false,
  "TriangularDistribution",
  "TriangularDistribution",
  ["Object", "ProbabilityDistribution"],
  ["i", "c"],
);

sl.copyTraitMethodsToType(
  "Object",
  "TriangularDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "TriangularDistribution",
);

sl.addMethodToExistingType(
  "TriangularDistribution",
  "TriangularDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _min_1(_i_1(_self));
    let _b = _max_1(_i_1(_self));
    let _c = _c_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSignEqualsSign_2(_x, _a),
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
            _lessThanSignEqualsSign_2(_x, _c),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _asterisk_2(_hyphenMinus_2(_x, _a), _hyphenMinus_2(_x, _a)),
                _asterisk_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_c, _a)),
              );
            }, []),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _if_3(
                _lessThanSign_2(_x, _b),
                sl.annotateFunction(function () {
                  /* ArityCheck */
                  if (arguments.length !== 0) {
                    const errorMessage = "Arity: expected 0, ";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _hyphenMinus_2(
                    1,
                    _solidus_2(
                      _asterisk_2(
                        _hyphenMinus_2(_b, _x),
                        _hyphenMinus_2(_b, _x),
                      ),
                      _asterisk_2(
                        _hyphenMinus_2(_b, _a),
                        _hyphenMinus_2(_b, _c),
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
                  return 1;
                }, []),
              );
            }, []),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = min(i(self)); let b = max(i(self)); let c = c(self); { :x | if((<=(x, a)), { 0 }, { if((<=(x, c)), { /(*((-(x, a)), (-(x, a))), (*((-(b, a)), (-(c, a))))) }, { if((<(x, b)), { -(1, (/(*((-(b, x)), (-(b, x))), (*((-(b, a)), (-(b, c))))))) }, { 1 }) }) }) } }",
);

sl.addMethodToExistingType(
  "TriangularDistribution",
  "TriangularDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _min_1(_i_1(_self));
    let _b = _max_1(_i_1(_self));
    let _c = _c_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(
          _lessThanSignEqualsSign_2(_a, _x),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_x, _c);
          }, []),
        ),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _asterisk_2(2, _hyphenMinus_2(_x, _a)),
            _asterisk_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_c, _a)),
          );
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _ampersand_2(
              _lessThanSign_2(_c, _x),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                return _lessThanSignEqualsSign_2(_x, _b);
              }, []),
            ),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _solidus_2(
                _asterisk_2(2, _hyphenMinus_2(_b, _x)),
                _asterisk_2(_hyphenMinus_2(_b, _a), _hyphenMinus_2(_b, _c)),
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
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = min(i(self)); let b = max(i(self)); let c = c(self); { :x | if((&(<=(a, x), { <=(x, c) })), { /(*(2, (-(x, a))), (*((-(b, a)), (-(c, a))))) }, { if((&(<(c, x), { <=(x, b) })), { /(*(2, (-(b, x))), (*((-(b, a)), (-(b, c))))) }, { 0 }) }) } }",
);

sl.addMethodToExistingType(
  "TriangularDistribution",
  "TriangularDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _min_1(_i_1(_self));
    let _b = _max_1(_i_1(_self));
    let _c = _c_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _triangularDistribution_4(_rng, _a, _b, _c);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let a = min(i(self)); let b = max(i(self)); let c = c(self); !({ triangularDistribution(rng,a, b, c) }, shape) }",
);

sl.extendTypeOrTraitWithMethod(
  "Interval",
  "TriangularDistribution",
  "TriangularDistribution",
  ["m", "c"],
  sl.annotateFunction(function (_m, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _c";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newTriangularDistribution_0(), _m, _c);
  }, ["m", "c"]),
  "{ :m :c | initializeSlots(newTriangularDistribution(),m, c) }",
);
