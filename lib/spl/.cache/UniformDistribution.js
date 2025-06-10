sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "UniformDistribution",
  "uniformDistribution",
  ["self", "a", "b"],
  sl.annotateFunction(function (_self, _a, _b) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _a, _b";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _u = _if_3(
      _isList_1(_a),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _exclamationMark_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _nextRandomFloat_1(_self);
          }, []),
          _size_1(_a),
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _nextRandomFloat_1(_self);
      }, []),
    );
    /* Statements */
    return _plusSign_2(_asterisk_2(_u, _hyphenMinus_2(_b, _a)), _a);
  }, ["self", "a", "b"]),
  "{ :self :a :b | let u = if(isList(a), { !({ nextRandomFloat(self) }, size(a)) }, { nextRandomFloat(self) }); +(*(u, (-(b, a))), a) }",
);

sl.addType(
  false,
  "UniformDistribution",
  "UniformDistribution",
  ["Object", "ProbabilityDistribution"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UniformDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "UniformDistribution",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, _a),
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
            _greaterThanSign_2(_x, _b),
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
              return _solidus_2(_hyphenMinus_2(_x, _a), _hyphenMinus_2(_b, _a));
            }, []),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = a(self); let b = b(self); { :x | if((<(x, a)), { 0 }, { if((>(x, b)), { 1 }, { /((-(x, a)), (-(b, a))) }) }) } }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "dimensions",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _size_1(_a_1(_self));
  }, ["self"]),
  "{ :self | size(a(self)) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "entropy",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_1(_hyphenMinus_2(_b_1(_self), _a_1(_self)));
  }, ["self"]),
  "{ :self | log((-(b(self), a(self)))) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "excessKurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(6n, 5n);
  }, ["self"]),
  "{ :self | Fraction(6L, 5L) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(9n, 5n);
  }, ["self"]),
  "{ :self | Fraction(9L, 5L) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_a_1(_self), _b_1(_self)), 2);
  }, ["self"]),
  "{ :self | /((+(a(self), b(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_plusSign_2(_a_1(_self), _b_1(_self)), 2);
  }, ["self"]),
  "{ :self | /((+(a(self), b(self))), 2) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _betweenAnd_3(_x, _a, _b),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(1, _hyphenMinus_2(_b, _a));
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
    }, ["x"]);
  }, ["self"]),
  "{ :self | let a = a(self); let b = b(self); { :x | if(betweenAnd(x,a, b), { /(1, (-(b, a))) }, { 0 }) } }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "randomVariate",
  ["self", "r", "shape"],
  sl.annotateFunction(function (_self, _r, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _r, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = _a_1(_self);
    let _b = _b_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _uniformDistribution_3(_r, _a, _b);
      }, []),
      _shape,
    );
  }, ["self", "r", "shape"]),
  "{ :self :r :shape | let a = a(self); let b = b(self); !({ uniformDistribution(r,a, b) }, shape) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return 0;
  }, ["self"]),
  "{ :self | 0 }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(_variance_1(_self));
  }, ["self"]),
  "{ :self | sqrt(variance(self)) }",
);

sl.addMethodToExistingType(
  "UniformDistribution",
  "UniformDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(_squared_1(_hyphenMinus_2(_b_1(_self), _a_1(_self))), 12);
  }, ["self"]),
  "{ :self | /(squared((-(b(self), a(self)))), 12) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "UniformDistribution",
  "UniformDistribution",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SPL336 = _assertIsOfSize_2(
      _if_3(
        _isVector_1(_self),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _self;
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _transposed_1(_self);
        }, []),
      ),
      2,
    );
    let _a = _at_2(__SPL336, 1);
    let _b = _at_2(__SPL336, 2);
    /* Statements */
    return _initializeSlots_3(_newUniformDistribution_0(), _a, _b);
  }, ["self"]),
  "{ :self | let __SPL336 = assertIsOfSize(if(isVector(self), { self }, { transposed(self) }), 2); let a = at(__SPL336, 1); let b = at(__SPL336, 2); initializeSlots(newUniformDistribution(),a, b) }",
);
