sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "BernoulliDistribution",
  "bernoulliDistribution",
  ["self", "p"],
  sl.annotateFunction(function (_self, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _boole_1(_lessThanSign_2(_nextRandomFloat_1(_self), _p));
  }, ["self", "p"]),
  "{ :self :p |\n\t\t(self.nextRandomFloat < p).boole\n\t}",
);

sl.addType(
  false,
  "BernoulliDistribution",
  "BernoulliDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BernoulliDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BernoulliDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "BernoulliDistribution",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _lessThanSign_2(_x, 0),
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
            _lessThanSign_2(_x, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _hyphenMinus_2(1, _p_1(_self));
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
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\t{ :x |\n\t\t\t(x < 0).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(x < 1).if {\n\t\t\t\t\t1 - self.p\n\t\t\t\t} {\n\t\t\t\t\t1\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _v = _asterisk_2(_hyphenMinus_2(1, _p), _p);
    /* Statements */
    return _plusSign_2(
      3,
      _solidus_2(_hyphenMinus_2(1, _asterisk_2(6, _v)), _v),
    );
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\tlet v = (1 - p) * p;\n\t\t3 + ((1 - (6 * v)) / v)\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _p_1(_self);
  }, ["self"]),
  "{ :self |\n\t\tself.p\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "median",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _greaterThanSign_2(_p_1(_self), 0.5),
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
        return 0;
      }, []),
    );
  }, ["self"]),
  "{ :self |\n\t\t(self.p > 0.5).if {\n\t\t\t1\n\t\t} {\n\t\t\t0\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _p = _p_1(_self);
      /* Statements */
      return _if_3(
        _equalsSign_2(_x, 0),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _hyphenMinus_2(1, _p);
        }, []),
        sl.annotateFunction(function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(
            _equalsSign_2(_x, 1),
            sl.annotateFunction(function () {
              /* ArityCheck */
              if (arguments.length !== 0) {
                const errorMessage = "Arity: expected 0, ";
                throw new Error(errorMessage);
              } /* Statements */
              return _p;
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
  "{ :self |\n\t\t{ :x |\n\t\t\tlet p = self.p;\n\t\t\t(x = 0).if {\n\t\t\t\t1 - p\n\t\t\t} {\n\t\t\t\t(x = 1).if {\n\t\t\t\t\tp\n\t\t\t\t} {\n\t\t\t\t\t0\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _boole_1(_lessThanSign_2(_nextRandomFloat_1(_rng), _p));
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\tlet p = self.p;\n\t\t{\n\t\t\t(rng.nextRandomFloat < p).boole\n\t\t} ! shape\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    let _v = _asterisk_2(_hyphenMinus_2(1, _p), _p);
    /* Statements */
    return _solidus_2(_hyphenMinus_2(1, _asterisk_2(2, _p)), _sqrt_1(_v));
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\tlet v = (1 - p) * p;\n\t\t(1 - (2 * p)) / v.sqrt\n\t}",
);

sl.addMethodToExistingType(
  "BernoulliDistribution",
  "BernoulliDistribution",
  "variance",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p = _p_1(_self);
    /* Statements */
    return _asterisk_2(_hyphenMinus_2(1, _p), _p);
  }, ["self"]),
  "{ :self |\n\t\tlet p = self.p;\n\t\t(1 - p) * p\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BernoulliDistribution",
  "BernoulliDistribution",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBernoulliDistribution_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewBernoulliDistribution().initializeSlots(p)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "BernoulliDistribution",
  "BernoulliDistribution",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_2(_newBernoulliDistribution_0(), _p);
  }, ["p"]),
  "{ :p |\n\t\tnewBernoulliDistribution().initializeSlots(p)\n\t}",
);
