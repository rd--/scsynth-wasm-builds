/*  Requires: Fraction  */

sl.extendTypeOrTraitWithMethod(
  "SmallFloat",
  "Xenharmonic",
  "plompLeveltDissonance",
  ["f1", "f2", "u1", "u2"],
  sl.annotateFunction(function (_f1, _f2, _u1, _u2) {
    /* ArityCheck */
    if (arguments.length !== 4) {
      const errorMessage = "Arity: expected 4, _f1, _f2, _u1, _u2";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _a = -3.51;
    let _b = -5.75;
    let _dStar = 0.24;
    let _s1 = 0.0207;
    let _s2 = 18.96;
    let _c1 = 5;
    let _c2 = -5;
    let _s = _solidus_2(
      _dStar,
      _plusSign_2(_asterisk_2(_s1, _min_2(_f1, _f2)), _s2),
    );
    let _fDif = _abs_1(_hyphenMinus_2(_f2, _f1));
    let _e1 = _asterisk_2(_c1, _exp_1(_asterisk_2(_asterisk_2(_a, _s), _fDif)));
    let _e2 = _asterisk_2(_c2, _exp_1(_asterisk_2(_asterisk_2(_b, _s), _fDif)));
    /* Statements */
    return _asterisk_2(_asterisk_2(_u1, _u2), _plusSign_2(_e1, _e2));
  }, ["f1", "f2", "u1", "u2"]),
  "{ :f1 :f2 :u1 :u2 | let a = -3.51; let b = -5.75; let dStar = 0.24; let s1 = 0.0207; let s2 = 18.96; let c1 = 5; let c2 = -5; let s = /(dStar, (+((*(s1, min(f1, f2))), s2))); let fDif = abs(-(f2, f1)); let e1 = *(c1, exp(*(*(a, s), fDif))); let e2 = *(c2, exp(*(*(b, s), fDif))); *(*(u1, u2), (+(e1, e2))) }",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Xenharmonic",
  "setharesDissonance",
  ["p", "q"],
  sl.annotateFunction(function (_p, _q) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _p, _q";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(_sum_1(_table_3(
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Temporaries */
        let __SplVar1 = _assertIsOfSize_2(_a, 2);
        let _f1 = _at_2(__SplVar1, 1);
        let _u1 = _at_2(__SplVar1, 2);
        let __SplVar2 = _assertIsOfSize_2(_b, 2);
        let _f2 = _at_2(__SplVar2, 1);
        let _u2 = _at_2(__SplVar2, 2);
        /* Statements */
        return _plompLeveltDissonance_4(_f1, _f2, _u1, _u2);
      }, ["a", "b"]),
      _p,
      _q,
    )));
  }, ["p", "q"]),
  "{ :p :q | sum(sum(table({ :a :b | let __SplVar1 = assertIsOfSize(a, 2); let f1 = at(__SplVar1, 1); let u1 = at(__SplVar1, 2); let __SplVar2 = assertIsOfSize(b, 2); let f2 = at(__SplVar2, 1); let u2 = at(__SplVar2, 2); plompLeveltDissonance(f1, f2, u1, u2) },p, q))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "barlowDisharmonicity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOne_1(_self),
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
        return _solidus_2(1, _barlowHarmonicity_1(_self));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isOne(self), { 0 }, { /(1, barlowHarmonicity(self)) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "barlowHarmonicity",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOne_1(_self),
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
        } /* Temporaries */
        let _q = _barlowIndigestibility_1(_numerator_1(_self));
        let _p = _barlowIndigestibility_1(_denominator_1(_self));
        /* Statements */
        return _solidus_2(_sign_1(_hyphenMinus_2(_q, _p)), _plusSign_2(_p, _q));
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isOne(self), { Infinity }, { let q = barlowIndigestibility(numerator(self)); let p = barlowIndigestibility(denominator(self)); /(sign((-(q, p))), (+(p, q))) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_numerator_1(_self), _denominator_1(_self));
  }, ["self"]),
  "{ :self | *(numerator(self), denominator(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    return _if_3(
      _isCoprime_2(_n, _d),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Temporaries */
        let _factors = _plusSignPlusSign_2(
          _primeFactors_1(_n),
          _primeFactors_1(_d),
        );
        /* Statements */
        return _plusSign_2(
          _hyphenMinus_2(_sum_1(_factors), _size_1(_factors)),
          1,
        );
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(
          _self,
          "Fraction>>eulerGradusSuavitatis: n/d not coprime",
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | let n = numerator(self); let d = denominator(self); if(isCoprime(n,d), { let factors = ++(primeFactors(n), primeFactors(d)); +(-(sum(factors), size(factors)), 1) }, { error(self,'Fraction>>eulerGradusSuavitatis: n/d not coprime') }) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "isPythagorean",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), 3);
  }, ["self"]),
  "{ :self | <=(primeLimit(self), 3) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "keesSemiHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let __SplVar3 = _assertIsOfSize_2(
      _asList_1(_withoutFactorsOfTwo_1(_self)),
      2,
    );
    let _n = _at_2(__SplVar3, 1);
    let _d = _at_2(__SplVar3, 2);
    /* Statements */
    return _max_2(_n, _d);
  }, ["self"]),
  "{ :self | let __SplVar3 = assertIsOfSize(asList(withoutFactorsOfTwo(self)), 2); let n = at(__SplVar3, 1); let d = at(__SplVar3, 2); max(n,d) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "octaveReduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _octaveReduce_2(_self, 2);
  }, ["self"]),
  "{ :self | octaveReduce(self,2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "octaveReduce",
  ["self", "octaveRatio"],
  sl.annotateFunction(function (_self, _octaveRatio) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _octaveRatio";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _exponent = _negate_1(
      _floor_1(_log_2(_asFloat_1(_self), _asFloat_1(_octaveRatio))),
    );
    /* Statements */
    return _asterisk_2(
      _self,
      _circumflexAccent_2(_Fraction_2(2n, 1n), _exponent),
    );
  }, ["self", "octaveRatio"]),
  "{ :self :octaveRatio | let exponent = negate(floor(log(asFloat(self),asFloat(octaveRatio)))); *(self, (^(Fraction(2L, 1L), exponent))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "tenneyHeight",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _log_2(
      _asFloat_1(_asterisk_2(_numerator_1(_self), _denominator_1(_self))),
      _base,
    );
  }, ["self", "base"]),
  "{ :self :base | log(asFloat((*(numerator(self), denominator(self)))),base) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "tenneyHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _tenneyHeight_2(_self, 2);
  }, ["self"]),
  "{ :self | tenneyHeight(self,2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "weilHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _log2_1(_max_2(_numerator_1(_self), _denominator_1(_self))),
      2,
    );
  }, ["self"]),
  "{ :self | *(log2(max(numerator(self),denominator(self))), 2) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "wilsonHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _primeFactors_1(_asterisk_2(_numerator_1(_self), _denominator_1(_self))),
    );
  }, ["self"]),
  "{ :self | sum(primeFactors((*(numerator(self), denominator(self))))) }",
);

sl.extendTypeOrTraitWithMethod(
  "Fraction",
  "Xenharmonic",
  "withoutFactorsOfTwo",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _asFraction_1(
      _product_1(
        _reject_2(
          _primeFactors_1(_self),
          sl.annotateFunction(function (_each) {
            /* ArityCheck */
            if (arguments.length !== 1) {
              const errorMessage = "Arity: expected 1, _each";
              throw new Error(errorMessage);
            } /* Statements */
            return _includes_2([_Fraction_2(1n, 2n), 2], _each);
          }, ["each"]),
        ),
      ),
    );
  }, ["self"]),
  "{ :self | asFraction(product(reject(primeFactors(self), { :each | includes([Fraction(1L, 2L), 2],each) }))) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Xenharmonic",
  "barlowIndigestibility",
  ["p"],
  sl.annotateFunction(function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOne_1(_p),
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
          _isPrime_1(_p),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _asterisk_2(
              _solidus_2(_square_1(_hyphenMinus_2(_p, 1)), _p),
              2,
            );
          }, []),
          sl.annotateFunction(function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              throw new Error(errorMessage);
            } /* Statements */
            return _sum_1(
              _collect_2(
                _primeFactors_1(_p),
                sl.annotateFunction(function (_n) {
                  /* ArityCheck */
                  if (arguments.length !== 1) {
                    const errorMessage = "Arity: expected 1, _n";
                    throw new Error(errorMessage);
                  } /* Statements */
                  return _asterisk_2(
                    _solidus_2(_square_1(_hyphenMinus_2(_n, 1)), _n),
                    2,
                  );
                }, ["n"]),
              ),
            );
          }, []),
        );
      }, []),
    );
  }, ["p"]),
  "{ :p | if(isOne(p), { 0 }, { if(isPrime(p), { *(/(square((-(p, 1))), p), 2) }, { sum(collect(primeFactors(p), { :n | *(/(square((-(n, 1))), n), 2) })) }) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isOne_1(_self),
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
        let _factors = _primeFactors_1(_self);
        /* Statements */
        return _plusSign_2(
          _hyphenMinus_2(_sum_1(_factors), _size_1(_factors)),
          1,
        );
      }, []),
    );
  }, ["self"]),
  "{ :self | if(isOne(self), { 1 }, { let factors = primeFactors(self); +(-(sum(factors), size(factors)), 1) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Xenharmonic",
  "octaveReduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(
      _isInteger_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _error_2(_self, "octaveReduce: not integer");
      }, []),
    );
    return _octaveReduce_2(_Fraction_2(_self, 1), 2);
  }, ["self"]),
  "{ :self | ifFalse(isInteger(self), { error(self,'octaveReduce: not integer') }); octaveReduce(Fraction(self, 1),2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _benedettiHeight_1);
  }, ["self"]),
  "{ :self | collect(self,benedettiHeight:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _eulerGradusSuavitatis_1);
  }, ["self"]),
  "{ :self | collect(self,eulerGradusSuavitatis:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "keesSemiHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _keesSemiHeight_1);
  }, ["self"]),
  "{ :self | collect(self,keesSemiHeight:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "kurenniemiMajorMinorIndex",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _log_1(_lcm_1(_self));
    let _g = _log_1(_gcd_1(_self));
    /* Statements */
    return _solidus_2(
      _sum_1(_collect_2(
        _self,
        sl.annotateFunction(function (_each) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _each";
            throw new Error(errorMessage);
          } /* Statements */
          return _rescale_3(_log_1(_each), [_g, _l], [-1, 1]);
        }, ["each"]),
      )),
      _size_1(_self),
    );
  }, ["self"]),
  "{ :self | let l = log(lcm(self)); let g = log(gcd(self)); /(sum(collect(self, { :each | rescale(log(each),[g, l], [-1, 1]) })), size(self)) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "octaveReduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _octaveReduce_1);
  }, ["self"]),
  "{ :self | collect(self,octaveReduce:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "tenneyHeight",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _tenneyHeight_2(_each, _base);
      }, ["each"]),
    );
  }, ["self", "base"]),
  "{ :self :base | collect(self, { :each | tenneyHeight(each,base) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "tenneyHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tenneyHeight_1);
  }, ["self"]),
  "{ :self | collect(self,tenneyHeight:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "weilHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _weilHeight_1);
  }, ["self"]),
  "{ :self | collect(self,weilHeight:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "wilsonHeight",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _wilsonHeight_1);
  }, ["self"]),
  "{ :self | collect(self,wilsonHeight:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "diaschisma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(2048n, 2025n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(2048L, 2025L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "diesis",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(128n, 125n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(128L, 125L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "holdersComma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_nthRoot_2(2, 53), _self);
  }, ["self"]),
  "{ :self | ^(nthRoot(2,53), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "mercatorsComma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(_circumflexAccent_2(3n, 53), _circumflexAccent_2(2n, 84)),
      _self,
    );
  }, ["self"]),
  "{ :self | ^(Fraction(^(3L, 53), ^(2L, 84)), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "pythagoreanComma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(531441n, 524288n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(531441L, 524288L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "pythagoreanChroma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(2187n, 2048n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(2187L, 2048L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "pythagoreanLimma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(256n, 243n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(256L, 243L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "schisma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(32805n, 32768n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(32805L, 32768L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "septimalComma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(64n, 63n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(64L, 63L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Number",
  "Xenharmonic",
  "syntonicComma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_Fraction_2(81n, 80n), _self);
  }, ["self"]),
  "{ :self | ^(Fraction(81L, 80L), self) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Integer",
  "Xenharmonic",
  "tonalityDiamond",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _asList_1(_thenTo_3(1, 3, _self));
    let _o = _sort_1(_collect_2(
      _n,
      sl.annotateFunction(function (_i) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _i";
          throw new Error(errorMessage);
        } /* Statements */
        return _octaveReduce_1(_Fraction_2(_i, 1));
      }, ["i"]),
    ));
    let _u = _solidus_2(1, _o);
    /* Statements */
    return _table_3(
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _octaveReduce_1(_asterisk_2(_i, _j));
      }, ["i", "j"]),
      _u,
      _o,
    );
  }, ["self"]),
  "{ :self | let n = asList(thenTo(1, 3, self)); let o = sort(collect(n, { :i | octaveReduce(Fraction(i, 1)) })); let u = /(1, o); table({ :i :j | octaveReduce((*(i, j))) },u, o) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Xenharmonic",
  "octaveReduce",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _octaveReduce_1);
  }, ["self"]),
  "{ :self | collect(self,octaveReduce:/1) }",
);
