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
  "{ :self :a :b |\n\t\tlet u = a.isList.if {\n\t\t\t{ self.nextRandomFloat } ! a.size\n\t\t} {\n\t\t\tself.nextRandomFloat\n\t\t};\n\t\tu * (b - a) + a\n\t}",
);

sl.addType(
  false,
  "UniformDistribution",
  "UniformDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["a", "b"],
);

sl.copyTraitMethodsToType(
  "Object",
  "UniformDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
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
  "{ :self |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\t{ :x |\n\t\t\t(x < a).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(x > b).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t(x - a) / (b - a)\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self |\n\t\tself.a.size\n\t}",
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
  "{ :self |\n\t\t(self.b - self.a).log\n\t}",
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
  "{ :self |\n\t\t6/5\n\t}",
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
  "{ :self |\n\t\t9/5\n\t}",
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
  "{ :self |\n\t\t(self.a + self.b) / 2\n\t}",
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
  "{ :self |\n\t\t(self.a + self.b) / 2\n\t}",
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
  "{ :self |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\t{ :x |\n\t\t\tx.betweenAnd(a, b).if {\n\t\t\t\t1 / (b - a)\n\t\t\t} {\n\t\t\t\t0\n\t\t\t}\n\t\t}\n\t}",
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
  "{ :self :r :shape |\n\t\tlet a = self.a;\n\t\tlet b = self.b;\n\t\t{\n\t\t\tr.uniformDistribution(a, b)\n\t\t} ! shape\n\t}",
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
  "{ :self |\n\t\t0\n\t}",
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
  "{ :self |\n\t\tself.variance.sqrt\n\t}",
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
    return _solidus_2(_square_1(_hyphenMinus_2(_b_1(_self), _a_1(_self))), 12);
  }, ["self"]),
  "{ :self |\n\t\t(self.b - self.a).square / 12\n\t}",
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
    let __SplVar1 = _assertIsOfSize_2(
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
          return _transpose_1(_self);
        }, []),
      ),
      2,
    );
    let _a = _at_2(__SplVar1, 1);
    let _b = _at_2(__SplVar1, 2);
    /* Statements */
    return _initializeSlots_3(_newUniformDistribution_0(), _a, _b);
  }, ["self"]),
  "{ :self |\n\t\tlet [a, b] = self.isVector.if {\n\t\t\tself\n\t\t} {\n\t\t\tself.transpose\n\t\t};\n\t\tnewUniformDistribution().initializeSlots(a, b)\n\t}",
);
