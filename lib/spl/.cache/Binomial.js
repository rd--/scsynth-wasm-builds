/*  Requires: Collection Integer Number  */

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "positiveIntegerBinomial",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _numerator = _one_1(_n);
    let _denominator = _one_1(_n);
    /* Statements */
    _toByDo_4(
      _n,
      _plusSign_2(_max_2(_k, _hyphenMinus_2(_n, _k)), 1),
      -1,
      function (_factor) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _factor";
          throw new Error(errorMessage);
        } /* Statements */
        return _numerator = _asterisk_2(_numerator, _factor);
      },
    );
    _toDo_3(1, _min_2(_k, _hyphenMinus_2(_n, _k)), function (_factor) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _factor";
        throw new Error(errorMessage);
      } /* Statements */
      return _denominator = _asterisk_2(_denominator, _factor);
    });
    return _solidusSolidus_2(_numerator, _denominator);
  },
  "{ :n :k | let numerator = one(n); let denominator = one(n); toByDo(n, +(max(k,-(n, k)), 1), -1, { :factor | numerator := *(numerator, factor) }); toDo(1, min(k,-(n, k)), { :factor | denominator := *(denominator, factor) }); //(numerator, denominator) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Binomial",
  "binomial",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isCollection_1(_k), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _adaptToNumberAndApply_3(_k, _n, _binomial_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(
        _ampersand_2(_isNonNegativeInteger_1(_n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _ampersand_2(_isNonNegativeInteger_1(_k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _lessThanSignEqualsSign_2(_k, _n);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _positiveIntegerBinomial_2(_n, _k);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _solidus_2(
            _gamma_1(_plusSign_2(_n, 1)),
            _asterisk_2(
              _gamma_1(_plusSign_2(_k, 1)),
              _gamma_1(_plusSign_2(_hyphenMinus_2(_n, _k), 1)),
            ),
          );
        },
      );
    });
  },
  "{ :n :k | if(isCollection(k), { adaptToNumberAndApply(k,n, binomial:/2) }, { if((&(isNonNegativeInteger(n), { &(isNonNegativeInteger(k), { <=(k, n) }) })), { positiveIntegerBinomial(n,k) }, { /(gamma((+(n, 1))), (*(gamma((+(k, 1))), gamma((+(-(n, k), 1)))))) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "catalanNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _solidus_2(_one_1(_self), _plusSign_2(_self, 1)),
      _binomial_2(_asterisk_2(2, _self), _self),
    );
  },
  "{ :self | *((/(one(self), (+(self, 1)))), binomial((*(2, self)),self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "multichoose",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _multinomial_1([_hyphenMinus_2(_n, 1), _k]);
  },
  "{ :n :k | multinomial([-(n, 1), k]) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "partitionFunctionP",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _p_2 = function (_n, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _k";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_greaterThanSign_2(_k, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _if_3(_equalsSign_2(_k, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return 1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            throw new Error(errorMessage);
          } /* Statements */
          return _if_3(_equalsSign_2(_k, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return 0;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _plusSign_2(
              _p_2(_hyphenMinus_2(_n, 1), _hyphenMinus_2(_k, 1)),
              _p_2(_hyphenMinus_2(_n, _k), _k),
            );
          });
        });
      });
    };
    /* Statements */
    return _p_2(_self, _anInteger);
  },
  "{ :self :anInteger | let p = { :n :k | if((>(k, n)), { 0 }, { if((=(k, n)), { 1 }, { if((=(k, 0)), { 0 }, { +(p(-(n, 1), -(k, 1)), p(-(n, k), k)) }) }) }) }; p(self, anInteger) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "partitionFunctionQ",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _partitionFunctionP_2(_hyphenMinus_2(_n, _binomial_2(_k, 2)), _k);
  },
  "{ :n :k | partitionFunctionP(-(n, binomial(k, 2)), k) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "partitionsP",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = 1;
      let _k = 2;
      /* Statements */
      _whileTrue_1(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _partitionFunctionP_2(_n, _k);
        /* Statements */
        _answer = _plusSign_2(_answer, _i);
        _k = _plusSign_2(_k, 1);
        return _greaterThanSign_2(_i, 0);
      });
      return _answer;
    });
  },
  "{ :n | if((=(n, 0)), { 1 }, { let answer = 1; let k = 2; whileTrue({ let i = partitionFunctionP(n,k); answer := +(answer, i); k := +(k, 1); >(i, 0) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "partitionsQ",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_equalsSign_2(_n, 0), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Temporaries */
      let _answer = 1;
      let _k = 2;
      /* Statements */
      _whileTrue_1(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _i = _partitionFunctionQ_2(_n, _k);
        /* Statements */
        _answer = _plusSign_2(_answer, _i);
        _k = _plusSign_2(_k, 1);
        return _greaterThanSign_2(_i, 0);
      });
      return _answer;
    });
  },
  "{ :n | if((=(n, 0)), { 1 }, { let answer = 1; let k = 2; whileTrue({ let i = partitionFunctionQ(n,k); answer := +(answer, i); k := +(k, 1); >(i, 0) }); answer }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "polygonalNumber",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _binomial_2(_plusSign_2(_n, 1), 2);
  },
  "{ :n | binomial(+(n, 1), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "subfactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_collect_2(_upOrDownTo_2(0, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        throw new Error(errorMessage);
      } /* Statements */
      return _asterisk_2(
        _asterisk_2(
          _factorial_1(_each),
          _circumflexAccent_2(-1, _hyphenMinus_2(_self, _each)),
        ),
        _binomial_2(_self, _each),
      );
    }));
  },
  "{ :self | sum(collect(upOrDownTo(0, self), { :each | *(*(factorial(each), (^(-1, (-(self, each))))), binomial(self,each)) })) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "superCatalanNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _f_1 = function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_lessThanSignEqualsSign_2(_n, 2), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return 1;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _solidus_2(
          _hyphenMinus_2(
            _asterisk_2(
              _asterisk_2(3, _hyphenMinus_2(_asterisk_2(2, _n), 3)),
              _f_1(_hyphenMinus_2(_n, 1)),
            ),
            _asterisk_2(_hyphenMinus_2(_n, 3), _f_1(_hyphenMinus_2(_n, 2))),
          ),
          _n,
        );
      });
    };
    /* Statements */
    return _value_2(_memoize_1(_f_1), _self);
  },
  "{ :self | let f = { :n | if((<=(n, 2)), { 1 }, { /((-((*(*(3, (-(*(2, n), 3))), f(-(n, 1)))), (*((-(n, 3)), f(-(n, 2)))))), n) }) }; value(memoize(f:/1),self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Binomial",
  "take",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_greaterThanSign_2(_k, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        throw new Error(errorMessage);
      } /* Statements */
      return _positiveIntegerBinomial_2(_n, _k);
    });
  },
  "{ :n :k | if((>(k, n)), { 0 }, { positiveIntegerBinomial(n,k) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Binomial",
  "multinomial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _solidus_2(
      _factorialOrGamma_1(_sum_1(_self)),
      _product_1(_factorialOrGamma_1(_self)),
    );
  },
  "{ :self | /(factorialOrGamma(sum(self)), product(factorialOrGamma(self))) }",
);
