sl.addType(
  false,
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["n", "s", "t"],
);

sl.copyTraitMethodsToType(
  "Object",
  "HypergeometricDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "HypergeometricDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "HypergeometricDistribution",
);

sl.addMethodToExistingType(
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  "max",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _min_2(_s_1(_self), _n_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tmin(self.s, self.n)\n\t}",
);

sl.addMethodToExistingType(
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  "min",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _hyphenMinus_2(_plusSign_2(_n_1(_self), _s_1(_self)), _t_1(_self));
  }, ["self"]),
  "{ :self |\n\t\tself.n + self.s - self.t\n\t}",
);

sl.addMethodToExistingType(
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _s = _s_1(_self);
    let _t = _t_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_x) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _x";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _greaterThanSign_2(_x, _n),
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
            _asterisk_2(
              _binomial_2(_s, _x),
              _binomial_2(_hyphenMinus_2(_t, _s), _hyphenMinus_2(_n, _x)),
            ),
            _binomial_2(_t, _n),
          );
        }, []),
      );
    }, ["x"]);
  }, ["self"]),
  "{ :self |\n\t\tlet n = self.n;\n\t\tlet s = self.s;\n\t\tlet t = self.t;\n\t\t{ :x |\n\t\t\t(x > n).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\ts.binomial(x)\n\t\t\t\t* (t - s).binomial(n - x)\n\t\t\t\t/ t.binomial(n)\n\t\t\t}\n\t\t}\n\t}",
);

sl.addMethodToExistingType(
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _n = _n_1(_self);
        let _s = _s_1(_self);
        let _t = _t_1(_self);
        let _x = 0;
        /* Statements */
        _doWhileTrue_2(
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Temporaries */
            let _p = _solidus_2(_s, _t);
            let _u = _nextRandomFloat_1(_rng);
            /* Statements */
            _ifTrue_2(
              _lessThanSign_2(_u, _p),
              sl.annotateFunction(function () {
                /* ArityCheck */
                if (arguments.length !== 0) {
                  const errorMessage = "Arity: expected 0, ";
                  throw new Error(errorMessage);
                } /* Statements */
                _x = _plusSign_2(_x, 1);
                return _s = _hyphenMinus_2(_s, 1);
              }, []),
            );
            _p = _hyphenMinus_2(_p, 1);
            return _n = _hyphenMinus_2(_n, 1);
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _greaterThanSign_2(_n, 0);
          }, []),
        );
        return _x;
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape |\n\t\t{\n\t\t\tlet n = self.n;\n\t\t\tlet s = self.s;\n\t\t\tlet t = self.t;\n\t\t\tlet x = 0;\n\t\t\t{\n\t\t\t\tlet p = s / t;\n\t\t\t\tlet u = rng.nextRandomFloat;\n\t\t\t\t(u < p).ifTrue {\n\t\t\t\t\tx := x + 1;\n\t\t\t\t\ts := s - 1\n\t\t\t\t};\n\t\t\t\tp := p - 1;\n\t\t\t\tn := n - 1\n\t\t\t}.doWhileTrue {\n\t\t\t\tn > 0\n\t\t\t};\n\t\t\tx\n\t\t} ! shape\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  ["n", "s", "t"],
  sl.annotateFunction(function (_n, _s, _t) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _s, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHypergeometricDistribution_0(), _n, _s, _t);
  }, ["n", "s", "t"]),
  "{ :n :s :t |\n\t\tnewHypergeometricDistribution().initializeSlots(n, s, t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "HypergeometricDistribution",
  "HypergeometricDistribution",
  ["n", "s", "t"],
  sl.annotateFunction(function (_n, _s, _t) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _n, _s, _t";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_4(_newHypergeometricDistribution_0(), _n, _s, _t);
  }, ["n", "s", "t"]),
  "{ :n :s :t |\n\t\tnewHypergeometricDistribution().initializeSlots(n, s, t)\n\t}",
);
