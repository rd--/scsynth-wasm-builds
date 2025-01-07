/*  Requires: Fraction  */

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "barlowDisharmonicity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOne_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _solidus_2(1, _barlowHarmonicity_1(_self));
    });
  },
  "{ :self |\n\t\tself.isOne.if {\n\t\t\t0\n\t\t} {\n\t\t\t1 / self.barlowHarmonicity\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "barlowHarmonicity",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOne_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _inf;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _q = _barlowIndigestibility_1(_numerator_1(_self));
      let _p = _barlowIndigestibility_1(_denominator_1(_self));
      /* Statements */
      return _solidus_2(_sign_1(_hyphenMinus_2(_q, _p)), _plusSign_2(_p, _q));
    });
  },
  "{ :self |\n\t\tself.isOne.if {\n\t\t\tinf\n\t\t} {\n\t\t\tlet q = self.numerator.barlowIndigestibility;\n\t\t\tlet p = self.denominator.barlowIndigestibility;\n\t\t\t(q - p).sign / (p + q)\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_numerator_1(_self), _denominator_1(_self));
  },
  "{ :self |\n\t\tself.numerator * self.denominator\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _numerator_1(_self);
    let _d = _denominator_1(_self);
    /* Statements */
    return _if_3(_isCoprime_2(_n, _d), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
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
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(
        _self,
        "Fraction>>eulerGradusSuavitatis: n/d not coprime",
      );
    });
  },
  "{ :self |\n\t\tlet n = self.numerator;\n\t\tlet d = self.denominator;\n\t\tn.isCoprime(d).if {\n\t\t\tlet factors = n.primeFactors ++ d.primeFactors;\n\t\t\tfactors.sum - factors.size + 1\n\t\t} {\n\t\t\tself.error('Fraction>>eulerGradusSuavitatis: n/d not coprime')\n\t\t}\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "isPythagorean",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _lessThanSignEqualsSign_2(_primeLimit_1(_self), 3);
  },
  "{ :self |\n\t\tself.primeLimit <= 3\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "keesSemiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let __genSym154 = _assertIsOfSize_2(
        _asTuple_1(_withoutFactorsOfTwo_1(_self)),
        2,
      ),
      _n = _at_2(__genSym154, 1),
      _d = _at_2(__genSym154, 2);
    /* Statements */
    return _max_2(_n, _d);
  },
  "{ :self |\n\t\tlet [n, d] = self.withoutFactorsOfTwo.asTuple;\n\t\tn.max(d)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "octaveReduced",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _octaveReduced_2(_self, 2);
  },
  "{ :self |\n\t\tself.octaveReduced(2)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "octaveReduced",
  ["self", "octaveRatio"],
  function (_self, _octaveRatio) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _octaveRatio";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _exponent = _negated_1(
      _floor_1(_log_2(_asFloat_1(_self), _asFloat_1(_octaveRatio))),
    );
    /* Statements */
    return _asterisk_2(
      _self,
      _circumflexAccent_2(
        _Fraction_2(
          2,
          1,
        ),
        _exponent,
      ),
    );
  },
  "{ :self :octaveRatio |\n\t\tlet exponent = self.asFloat.log(octaveRatio.asFloat).floor.negated;\n\t\tself * (2/1 ^ exponent)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "tenneyHeight",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _log_2(
      _asterisk_2(_numerator_1(_self), _denominator_1(_self)),
      _base,
    );
  },
  "{ :self :base |\n\t\t(self.numerator * self.denominator).log(base)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "tenneyHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _tenneyHeight_2(_self, 2);
  },
  "{ :self |\n\t\tself.tenneyHeight(2)\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "weilHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(
      _log2_1(_max_2(_numerator_1(_self), _denominator_1(_self))),
      2,
    );
  },
  "{ :self |\n\t\tself.numerator.max(self.denominator).log2 * 2\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "wilsonHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _sum_1(
      _primeFactors_1(_asterisk_2(_numerator_1(_self), _denominator_1(_self))),
    );
  },
  "{ :self |\n\t\t(self.numerator * self.denominator).primeFactors.sum\n\t}",
);

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "withoutFactorsOfTwo",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _asFraction_1(
      _product_1(_reject_2(_primeFactors_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _includes_2([
          _Fraction_2(
            1,
            2,
          ),
          2,
        ], _each);
      })),
    );
  },
  "{ :self |\n\t\tself.primeFactors.reject { :each |\n\t\t\t[1/2 2].includes(each)\n\t\t}.product.asFraction\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Xenharmonic",
  "barlowIndigestibility",
  ["p"],
  function (_p) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _p";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOne_1(_p), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _if_3(_isPrime_1(_p), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _asterisk_2(
          _solidus_2(_squared_1(_hyphenMinus_2(_p, 1)), _p),
          2,
        );
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _sum_1(_collect_2(_primeFactors_1(_p), function (_n) {
          /* ArityCheck */
          if (arguments.length !== 1) {
            const errorMessage = "Arity: expected 1, _n";
            /* console.error(errorMessage); */
            throw new Error(errorMessage);
          } /* Statements */
          return _asterisk_2(
            _solidus_2(_squared_1(_hyphenMinus_2(_n, 1)), _n),
            2,
          );
        }));
      });
    });
  },
  "{ :p |\n\t\tp.isOne.if {\n\t\t\t0\n\t\t} {\n\t\t\tp.isPrime.if {\n\t\t\t\t(p - 1).squared / p * 2\n\t\t\t} {\n\t\t\t\tp.primeFactors.collect { :n |\n\t\t\t\t\t(n - 1).squared / n * 2\n\t\t\t\t}.sum\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(_isOne_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return 1;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Temporaries */
      let _factors = _primeFactors_1(_self);
      /* Statements */
      return _plusSign_2(
        _hyphenMinus_2(_sum_1(_factors), _size_1(_factors)),
        1,
      );
    });
  },
  "{ :self |\n\t\tself.isOne.if {\n\t\t\t1\n\t\t} {\n\t\t\tlet factors = self.primeFactors;\n\t\t\tfactors.sum - factors.size + 1\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Xenharmonic",
  "octaveReduced",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    _ifFalse_2(_isInteger_1(_self), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _error_2(_self, "octaveReduced: not integer");
    });
    return _octaveReduced_2(_Fraction_2(_self, 1), 2);
  },
  "{ :self |\n\t\tself.isInteger.ifFalse {\n\t\t\tself.error('octaveReduced: not integer')\n\t\t};\n\t\tFraction(self, 1).octaveReduced(2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _benedettiHeight_1);
  },
  "{ :self |\n\t\tself.collect(benedettiHeight:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "eulerGradusSuavitatis",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _eulerGradusSuavitatis_1);
  },
  "{ :self |\n\t\tself.collect(eulerGradusSuavitatis:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "keesSemiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _keesSemiHeight_1);
  },
  "{ :self |\n\t\tself.collect(keesSemiHeight:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "kurenniemiMajorMinorIndex",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _l = _log_1(_lcm_1(_self));
    let _g = _log_1(_gcd_1(_self));
    /* Statements */
    return _solidus_2(
      _sum_1(_collect_2(_self, function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _rescale_5(_log_1(_each), _g, _l, -1, 1);
      })),
      _size_1(_self),
    );
  },
  "{ :self |\n\t\tlet l = self.lcm.log;\n\t\tlet g = self.gcd.log;\n\t\tself.collect { :each |\n\t\t\teach.log.rescale(g, l, -1, 1)\n\t\t}.sum / self.size\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "octaveReduced",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _octaveReduced_1);
  },
  "{ :self |\n\t\tself.collect(octaveReduced:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "tenneyHeight",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _tenneyHeight_2(_each, _base);
    });
  },
  "{ :self :base |\n\t\tself.collect { :each |\n\t\t\teach.tenneyHeight(base)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "tenneyHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tenneyHeight_1);
  },
  "{ :self |\n\t\tself.collect(tenneyHeight:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "weilHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _weilHeight_1);
  },
  "{ :self |\n\t\tself.collect(weilHeight:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "wilsonHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _wilsonHeight_1);
  },
  "{ :self |\n\t\tself.collect(wilsonHeight:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "holdersComma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_nthRoot_2(2, 53), _self);
  },
  "{ :self |\n\t\t2.nthRoot(53) ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "mercatorsComma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(_circumflexAccent_2(3n, 53), _circumflexAccent_2(2n, 84)),
      _self,
    );
  },
  "{ :self |\n\t\tFraction(3n ^ 53, 2n ^ 84) ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "pythagoreanComma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(
        531441,
        524288,
      ),
      _self,
    );
  },
  "{ :self |\n\t\t531441/524288 ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "pythagoreanChroma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(
        2187,
        2048,
      ),
      _self,
    );
  },
  "{ :self |\n\t\t2187/2048 ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "pythagoreanLimma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(
        256,
        243,
      ),
      _self,
    );
  },
  "{ :self |\n\t\t256/243 ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "septimalComma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(
        64,
        63,
      ),
      _self,
    );
  },
  "{ :self |\n\t\t64/63 ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Xenharmonic",
  "syntonicComma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(
      _Fraction_2(
        81,
        80,
      ),
      _self,
    );
  },
  "{ :self |\n\t\t81/80 ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Xenharmonic",
  "tonalityDiamond",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Temporaries */
    let _n = _asList_1(_thenTo_3(1, 3, _self));
    let _o = _sort_1(_collect_2(_n, function (_i) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _i";
        /* console.error(errorMessage); */
        throw new Error(errorMessage);
      } /* Statements */
      return _octaveReduced_1(_Fraction_2(_i, 1));
    }));
    let _u = _solidus_2(1, _o);
    /* Statements */
    return _table_3(
      function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          /* console.error(errorMessage); */
          throw new Error(errorMessage);
        } /* Statements */
        return _octaveReduced_1(_asterisk_2(_i, _j));
      },
      _u,
      _o,
    );
  },
  "{ :self |\n\t\tlet n = [1, 3 .. self];\n\t\tlet o = n.collect { :i | Fraction(i, 1).octaveReduced }.sort;\n\t\tlet u = 1 / o;\n\t\t{ :i :j | (i * j).octaveReduced }.table(u, o)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Xenharmonic",
  "octaveReduced",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      /* console.error(errorMessage); */
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _octaveReduced_1);
  },
  "{ :self |\n\t\tself.collect(octaveReduced:/1)\n\t}",
);
