/* {- Requires: Fraction -} */

sl.addMethod(
  "Fraction",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(_numerator_1(_self), _denominator_1(_self));
  },
  "{ :self |\n\t\tself.numerator * self.denominator\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let __genSym26 = _assertIsOfSize_2(
        _asTuple_1(_withoutFactorsOfTwo_1(_self)),
        2,
      ),
      _n = _at_2(__genSym26, 1),
      _d = _at_2(__genSym26, 2);
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _log2_1(_asterisk_2(_numerator_1(_self), _denominator_1(_self)));
  },
  "{ :self |\n\t\t(self.numerator * self.denominator).log2\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asFraction_1(
      _product_1(_reject_2(_primeFactors_1(_self), function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
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
  "Collection",
  "Xenharmonic",
  "benedettiHeight",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _benedettiHeight_1);
  },
  "{ :self |\n\t\tself.collect(benedettiHeight:/1)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _keesSemiHeight_1);
  },
  "{ :self |\n\t\tself.collect(keesSemiHeight:/1)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _wilsonHeight_1);
  },
  "{ :self |\n\t\tself.collect(wilsonHeight:/1)\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _Fraction_2(
        531441,
        524288,
      ),
    );
  },
  "{ :self |\n\t\tself * 531441/524288\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _Fraction_2(
        2187,
        2048,
      ),
    );
  },
  "{ :self |\n\t\tself * 2187/2048\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _Fraction_2(
        256,
        243,
      ),
    );
  },
  "{ :self |\n\t\tself * 256/243\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _Fraction_2(
        64,
        63,
      ),
    );
  },
  "{ :self |\n\t\tself * 64/63\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _asterisk_2(
      _self,
      _Fraction_2(
        81,
        80,
      ),
    );
  },
  "{ :self |\n\t\tself * 81/80\n\t}",
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
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _octaveReduced_1);
  },
  "{ :self |\n\t\tself.collect(octaveReduced:/1)\n\t}",
);
