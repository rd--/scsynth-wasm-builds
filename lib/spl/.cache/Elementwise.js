/* {- Requires: Collection Sequence -} */

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "plusSign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _conjugated_1);
  },
  "{ :self |\n\t\tself.collect(conjugated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "hyphenMinus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _negated_1);
  },
  "{ :self |\n\t\tself.collect(negated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "asterisk",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sign_1);
  },
  "{ :self |\n\t\tself.collect(sign:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "solidus",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _reciprocal_1);
  },
  "{ :self |\n\t\tself.collect(reciprocal:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "exclamationMark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorialOrGamma_1);
  },
  "{ :self |\n\t\tself.collect(factorialOrGamma:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "circumflexAccent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _circumflexAccent_2(_e, _self);
  },
  "{ :self |\n\t\te ^ self\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "abs",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _abs_1);
  },
  "{ :self |\n\t\tself.collect(abs:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "arcCosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcCosh_1);
  },
  "{ :self |\n\t\tself.collect(arcCosh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "arcCos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcCos_1);
  },
  "{ :self |\n\t\tself.collect(arcCos:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "arcSin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcSin_1);
  },
  "{ :self |\n\t\tself.collect(arcSin:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "arcTan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arcTan_1);
  },
  "{ :self |\n\t\tself.collect(arcTan:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "asFloat",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _asFloat_1);
  },
  "{ :self |\n\t\tself.collect(asFloat:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "asFraction",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _asFraction_1);
  },
  "{ :self |\n\t\tself.collect(asFraction:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "asInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _asInteger_1);
  },
  "{ :self |\n\t\tself.collect(asInteger:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "bellNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _bellNumber_1);
  },
  "{ :self |\n\t\tself.collect(bellNumber:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "bitAnd",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(_self, _bitAnd_2);
  },
  "{ :self |\n\t\tself.reduce(bitAnd:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "bitOr",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(_self, _bitOr_2);
  },
  "{ :self |\n\t\tself.reduce(bitOr:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "boole",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _boole_1);
  },
  "{ :self |\n\t\tself.collect(boole:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cantorStaircase",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cantorStaircase_1);
  },
  "{ :self |\n\t\tself.collect(cantorStaircase:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "ceiling",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _ceiling_1);
  },
  "{ :self |\n\t\tself.collect(ceiling:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "conjugated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _conjugated_1);
  },
  "{ :self |\n\t\tself.collect(conjugated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cos",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cos_1);
  },
  "{ :self |\n\t\tself.collect(cos:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cosecant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cosecant_1);
  },
  "{ :self |\n\t\tself.collect(cosecant:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cosh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cosh_1);
  },
  "{ :self |\n\t\tself.collect(cosh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cotangent",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cotangent_1);
  },
  "{ :self |\n\t\tself.collect(cotangent:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "cubed",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _cubed_1);
  },
  "{ :self |\n\t\tself.collect(cubed:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "degree",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _degree_1);
  },
  "{ :self |\n\t\tself.collect(degree:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "degreesToRadians",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _degreesToRadians_1);
  },
  "{ :self |\n\t\tself.collect(degreesToRadians:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "denominator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _denominator_1);
  },
  "{ :self |\n\t\tself.collect(denominator:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "divisors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _divisors_1);
  },
  "{ :self |\n\t\tself.collect(divisors:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "doubleFactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _doubleFactorial_1);
  },
  "{ :self |\n\t\tself.collect(doubleFactorial:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "e",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _e_1);
  },
  "{ :self |\n\t\tself.collect(e:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "erf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _erf_1);
  },
  "{ :self |\n\t\tself.collect(erf:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "erfc",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _erfc_1);
  },
  "{ :self |\n\t\tself.collect(erfc:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "eulerPhi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _eulerPhi_1);
  },
  "{ :self |\n\t\tself.collect(eulerPhi:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "exp",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _exp_1);
  },
  "{ :self |\n\t\tself.collect(exp:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "factorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorial_1);
  },
  "{ :self |\n\t\tself.collect(factorial:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "factorialOrGamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorialOrGamma_1);
  },
  "{ :self |\n\t\tself.collect(factorialOrGamma:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "floor",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _floor_1);
  },
  "{ :self |\n\t\tself.collect(floor:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "factorInteger",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _factorInteger_1);
  },
  "{ :self |\n\t\tself.collect(factorInteger:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "fibonacciWord",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _fibonacciWord_1);
  },
  "{ :self |\n\t\tself.collect(fibonacciWord:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "fractionPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _fractionPart_1);
  },
  "{ :self |\n\t\tself.collect(fractionPart:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "fibonacci",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _fibonacci_1);
  },
  "{ :self |\n\t\tself.collect(fibonacci:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "gamma",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _gamma_1);
  },
  "{ :self |\n\t\tself.collect(gamma:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "harmonicNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _harmonicNumber_1);
  },
  "{ :self |\n\t\tself.collect(harmonicNumber:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "haversine",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _haversine_1);
  },
  "{ :self |\n\t\tself.collect(haversine:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "i",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _i_1);
  },
  "{ :self |\n\t\tself.collect(i:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "imaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _imaginary_1);
  },
  "{ :self |\n\t\tself.collect(imaginary:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "integerDigits",
  ["self", "base", "count"],
  function (_self, _base, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _count";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _integerDigits_3(_each, _base, _count);
    });
  },
  "{ :self :base :count |\n\t\tself.collect { :each |\n\t\t\teach.integerDigits(base, count)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "integerDigits",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _integerDigits_1);
  },
  "{ :self |\n\t\tself.collect(integerDigits:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "integerPart",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _integerPart_1);
  },
  "{ :self |\n\t\tself.collect(integerPart:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "inverseErf",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _inverseErf_1);
  },
  "{ :self |\n\t\tself.collect(inverseErf:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "isGaussianPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _isGaussianPrime_1);
  },
  "{ :self |\n\t\tself.collect(isGaussianPrime:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "isNegative",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _isNegative_1);
  },
  "{ :self |\n\t\tself.collect(isNegative:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "isPrime",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _isPrime_1);
  },
  "{ :self |\n\t\tself.collect(isPrime:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "isPrimePower",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _isPrimePower_1);
  },
  "{ :self |\n\t\tself.collect(isPrimePower:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "lcm",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _reduce_2(_self, _lcm_2);
  },
  "{ :self |\n\t\tself.reduce(lcm:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "log",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log_1);
  },
  "{ :self |\n\t\tself.collect(log:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "log",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _k = _solidus_2(1, _log_1(_base));
    /* Statements */
    return _asterisk_2(_log_1(_self), _k);
  },
  "{ :self :base |\n\t\tlet k = 1 / base.log;\n\t\tself.log * k\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "log10",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log10_1);
  },
  "{ :self |\n\t\tself.collect(log10:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "log2",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _log2_1);
  },
  "{ :self |\n\t\tself.collect(log2:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "lucasNumber",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _lucasNumber_1);
  },
  "{ :self |\n\t\tself.collect(lucasNumber:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "minkowskiQuestionMark",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _minkowskiQuestionMark_1);
  },
  "{ :self |\n\t\tself.collect(minkowskiQuestionMark:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "minkowskiQuestionMarkInverse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _minkowskiQuestionMarkInverse_1);
  },
  "{ :self |\n\t\tself.collect(minkowskiQuestionMarkInverse:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "mixedFractionParts",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _mixedFractionParts_1);
  },
  "{ :self |\n\t\tself.collect(mixedFractionParts:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "negated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _negated_1);
  },
  "{ :self |\n\t\tself.collect(negated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "numerator",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _numerator_1);
  },
  "{ :self |\n\t\tself.collect(numerator:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "pi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _pi_1);
  },
  "{ :self |\n\t\tself.collect(pi:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "primeFactors",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _primeFactors_1);
  },
  "{ :self |\n\t\tself.collect(primeFactors:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "primeLimit",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _primeLimit_1);
  },
  "{ :self |\n\t\tself.collect(primeLimit:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "primePi",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _primePi_1);
  },
  "{ :self |\n\t\tself.collect(primePi:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "radiansToDegrees",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _radiansToDegrees_1);
  },
  "{ :self |\n\t\tself.collect(radiansToDegrees:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "real",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _real_1);
  },
  "{ :self |\n\t\tself.collect(real:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "realImaginary",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _realImaginary_1);
  },
  "{ :self |\n\t\tself.collect(realImaginary:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "rounded",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _rounded_1);
  },
  "{ :self |\n\t\tself.collect(rounded:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "secant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _secant_1);
  },
  "{ :self |\n\t\tself.collect(secant:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "sign",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sign_1);
  },
  "{ :self |\n\t\tself.collect(sign:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "sin",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sin_1);
  },
  "{ :self |\n\t\tself.collect(sin:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "sinc",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sinc_1);
  },
  "{ :self |\n\t\tself.collect(sinc:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "sinh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sinh_1);
  },
  "{ :self |\n\t\tself.collect(sinh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "sqrt",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _sqrt_1);
  },
  "{ :self |\n\t\tself.collect(sqrt:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "squared",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _squared_1);
  },
  "{ :self |\n\t\tself.collect(squared:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "tan",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _tan_1);
  },
  "{ :self |\n\t\tself.collect(tan:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "tanh",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _tanh_1);
  },
  "{ :self |\n\t\tself.collect(tanh:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "thueMorse",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _thueMorse_1);
  },
  "{ :self |\n\t\tself.collect(thueMorse:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _truncated_1);
  },
  "{ :self |\n\t\tself.collect(truncated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "truncated",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _truncated_1);
  },
  "{ :self |\n\t\tself.collect(truncated:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "unitize",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _unitize_1);
  },
  "{ :self |\n\t\tself.collect(unitize:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "vanDerCorputNumber",
  ["self", "base"],
  function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_n) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _n";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _vanDerCorputNumber_2(_n, _base);
    });
  },
  "{ :self :base |\n\t\tself.collect { :n |\n\t\t\tn.vanDerCorputNumber(base)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Elementwise",
  "wrapIndex",
  ["self", "size"],
  function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _wrapIndex_2(_each, _size);
    });
  },
  "{ :self :size |\n\t\tself.collect { :each |\n\t\t\teach.wrapIndex(size)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "plusSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _plusSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, +)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "hyphenMinus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _hyphenMinus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, -)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "asterisk",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _asterisk_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, *)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "solidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, /)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "solidusSolidus",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidusSolidus_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, //)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "lessThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lessThanSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _lessThanSignEqualsSign_2,
    );
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <=)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "greaterThanSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _greaterThanSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "greaterThanSignEqualsSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _greaterThanSignEqualsSign_2,
    );
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >=)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "circumflexAccent",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _circumflexAccent_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, ^)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "percentSign",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _percentSign_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, %)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "absArg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _absArg_1);
  },
  "{ :self |\n\t\tself.collect(absArg:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "arg",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _collect_2(_self, _arg_1);
  },
  "{ :self |\n\t\tself.collect(arg:/1)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "beta",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _beta_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, beta:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "binomial",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _binomial_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, binomial:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "bitAnd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitAnd_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitAnd:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "bitOr",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitOr_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitOr:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "Complex",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _Complex_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, Complex:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "divisible",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _divisible_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, divisible:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "Fraction",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _Fraction_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, Fraction:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "gcd",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _gcd_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, gcd:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "integerDigits",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _integerDigits_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, integerDigits:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "lcm",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lcm_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, lcm:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "mediant",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _Fraction_2(
      _sum_1(_collect_2(_self, _numerator_1)),
      _sum_1(_collect_2(_self, _denominator_1)),
    );
  },
  "{ :self |\n\t\tFraction(\n\t\t\tself.collect(numerator:/1).sum,\n\t\t\tself.collect(denominator:/1).sum\n\t\t)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "min",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _min_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, min:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "max",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _max_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, max:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "nthRoot",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _nthRoot_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, nthRoot:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "roundTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _roundTo_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, roundTo:/2)\n\t}",
);

sl.extendTraitWithMethod(
  "Sequence",
  "Elementwise",
  "truncateTo",
  ["self", "anObject"],
  function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _truncateTo_2);
  },
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, truncateTo:/2)\n\t}",
);
