sl.extendTypeOrTraitWithMethod(
  "@RandomNumberGenerator",
  "BinomialDistribution",
  "binomialDistribution",
  ["self", "n", "p"],
  sl.annotateFunction(function (_self, _n, _p) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _n, _p";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _answer = 0;
    /* Statements */
    _timesRepeat_2(
      _n,
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _u = _nextRandomFloat_1(_self);
        /* Statements */
        return _ifTrue_2(
          _lessThanSign_2(_u, _p),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _answer = _plusSign_2(_answer, 1);
          }, []),
        );
      }, []),
    );
    return _answer;
  }, ["self", "n", "p"]),
  "{ :self :n :p | let answer = 0; timesRepeat(n, { let u = nextRandomFloat(self); ifTrue((<(u, p)), { answer := +(answer, 1) }) }); answer }",
);

sl.addType(
  false,
  "BinomialDistribution",
  "BinomialDistribution",
  ["Object", "Equatable", "ProbabilityDistribution"],
  ["n", "p"],
);

sl.copyTraitMethodsToType(
  "Object",
  "BinomialDistribution",
);

sl.copyTraitMethodsToType(
  "Equatable",
  "BinomialDistribution",
);

sl.copyTraitMethodsToType(
  "ProbabilityDistribution",
  "BinomialDistribution",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "cdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _p = _p_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _sum_1(
        _collect_2(
          _upOrDownTo_2(0, _k),
          sl.annotateFunction(function (_i) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _i";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _asterisk_2(_binomial_2(_n, _i), _circumflexAccent_2(_p, _i)),
              _circumflexAccent_2(
                _hyphenMinus_2(1, _p),
                _hyphenMinus_2(_n, _i),
              ),
            );
          }, ["i"]),
        ),
      );
    }, ["k"]);
  }, ["self"]),
  "{ :self | let n = n(self); let p = p(self); { :k | sum(collect(upOrDownTo(0, k), { :i | *(*(binomial(n,i), (^(p, i))), (^((-(1, p)), (-(n, i))))) })) } }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "kurtosis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _p = _p_1(_self);
    /* Statements */
    return _plusSign_2(
      _hyphenMinus_2(1, _solidus_2(6, _n)),
      _solidus_2(1, _asterisk_2(_asterisk_2(_n, _p), _hyphenMinus_2(1, _p))),
    );
  }, ["self"]),
  "{ :self | let n = n(self); let p = p(self); +(-(1, (/(6, n))), (/(1, (*(*(n, p), (-(1, p))))))) }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "mean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_n_1(_self), _p_1(_self));
  }, ["self"]),
  "{ :self | *(n(self), p(self)) }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "pdf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _p = _p_1(_self);
    /* Statements */
    return sl.annotateFunction(function (_k) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _asterisk_2(_binomial_2(_n, _k), _circumflexAccent_2(_p, _k)),
        _circumflexAccent_2(_hyphenMinus_2(1, _p), _hyphenMinus_2(_n, _k)),
      );
    }, ["k"]);
  }, ["self"]),
  "{ :self | let n = n(self); let p = p(self); { :k | *(*(binomial(n,k), (^(p, k))), (^((-(1, p)), (-(n, k))))) } }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "randomVariate",
  ["self", "rng", "shape"],
  sl.annotateFunction(function (_self, _rng, _shape) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _rng, _shape";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _p = _p_1(_self);
    /* Statements */
    return _exclamationMark_2(
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _binomialDistribution_3(_rng, _n, _p);
      }, []),
      _shape,
    );
  }, ["self", "rng", "shape"]),
  "{ :self :rng :shape | let n = n(self); let p = p(self); !({ binomialDistribution(rng,n, p) }, shape) }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "skewness",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _n_1(_self);
    let _p = _p_1(_self);
    /* Statements */
    return _solidus_2(
      _hyphenMinus_2(1, _asterisk_2(2, _p)),
      _sqrt_1(_asterisk_2(_asterisk_2(_n, _hyphenMinus_2(1, _p)), _p)),
    );
  }, ["self"]),
  "{ :self | let n = n(self); let p = p(self); /((-(1, (*(2, p)))), sqrt((*(*(n, (-(1, p))), p)))) }",
);

sl.addMethodToExistingType(
  "BinomialDistribution",
  "BinomialDistribution",
  "standardDeviation",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sqrt_1(
      _asterisk_2(
        _asterisk_2(_n_1(_self), _p_1(_self)),
        _hyphenMinus_2(1, _p_1(_self)),
      ),
    );
  }, ["self"]),
  "{ :self | sqrt((*(*(n(self), p(self)), (-(1, p(self)))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "BinomialDistribution",
  "BinomialDistribution",
  ["n", "p"],
  sl.annotateFunction(function (_n, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newBinomialDistribution_0(), _n, _p);
  }, ["n", "p"]),
  "{ :n :p | initializeSlots(newBinomialDistribution(),n, p) }",
);

sl.extendTypeOrTraitWithMethod(
  "Symbol",
  "BinomialDistribution",
  "BinomialDistribution",
  ["n", "p"],
  sl.annotateFunction(function (_n, _p) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _initializeSlots_3(_newBinomialDistribution_0(), _n, _p);
  }, ["n", "p"]),
  "{ :n :p | initializeSlots(newBinomialDistribution(),n, p) }",
);
