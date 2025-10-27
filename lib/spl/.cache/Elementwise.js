/*  Requires: Collection, Sequenceable  */

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "plusSign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _conjugate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(conjugate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "hyphenMinus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _negate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(negate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "asterisk",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sign_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(sign:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "solidus",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _reciprocal_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(reciprocal:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "exclamationMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorialOrGamma_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorialOrGamma:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "circumflexAccent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _circumflexAccent_2(_e_1(1), _self);
  }, ["self"]),
  "{ :self |\n\t\t1.e ^ self\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "abs",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _abs_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(abs:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "absSquare",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _absSquare_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(absSquare:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "asFloat",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asFloat_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(asFloat:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "asFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asFraction_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(asFraction:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "asInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _asInteger_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(asInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "bellNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bellNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(bellNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "between",
  ["self", "interval"],
  sl.annotateFunction(function (_self, _interval) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _interval";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _between_1(_interval));
  }, ["self", "interval"]),
  "{ :self :interval |\n\t\tself.collect(interval.between)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "betweenAnd",
  ["self", "min", "max"],
  sl.annotateFunction(function (_self, _min, _max) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _min, _max";
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
        return _betweenAnd_3(_each, _min, _max);
      }, ["each"]),
    );
  }, ["self", "min", "max"]),
  "{ :self :min :max |\n\t\tself.collect { :each |\n\t\t\teach.betweenAnd(min, max)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "bitAnd",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _bitAnd_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(bitAnd:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "bitOr",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _bitOr_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(bitOr:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "bitNot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _bitNot_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(bitNot:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "boole",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _boole_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(boole:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cantorStaircase",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cantorStaircase_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(cantorStaircase:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "ceiling",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ceiling_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ceiling:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "chop",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _chop_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(chop:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "conjugate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _conjugate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(conjugate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "continuedFraction",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _continuedFraction_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(continuedFraction:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cube",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cube_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(cube:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "degree",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _degree_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(degree:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "decrement",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _decrement_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(decrement:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "degreesToRadians",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _degreesToRadians_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(degreesToRadians:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "denominator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _denominator_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(denominator:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "divisors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _divisors_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(divisors:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "double",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _double_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(double:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "doubleFactorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _doubleFactorial_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(doubleFactorial:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "e",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _e_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(e:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "e",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _asterisk_2(_self, _circumflexAccent_2(10, _aNumber));
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself * (10 ^ aNumber)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "ellipticE",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ellipticE_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ellipticE:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "ellipticK",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ellipticK_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ellipticK:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "ellipticPi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ellipticPi_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ellipticPi:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "erf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _erf_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(erf:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "erfc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _erfc_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(erfc:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "eulerPhi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _eulerPhi_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(eulerPhi:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "exp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _exp_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(exp:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "factorial",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorial_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorial:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "factorialOrGamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorialOrGamma_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorialOrGamma:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "factorInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _factorInteger_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(factorInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fibonacci",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fibonacci_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(fibonacci:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fibonacciWord",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fibonacciWord_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(fibonacciWord:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "floor",
  ["self", "epsilon"],
  sl.annotateFunction(function (_self, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _epsilon";
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
        return _floor_2(_each, _epsilon);
      }, ["each"]),
    );
  }, ["self", "epsilon"]),
  "{ :self :epsilon |\n\t\tself.collect { :each |\n\t\t\teach.floor(epsilon)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "floor",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _floor_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(floor:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fold",
  ["self", "low", "high"],
  sl.annotateFunction(function (_self, _low, _high) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _low, _high";
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
        return _fold_3(_each, _low, _high);
      }, ["each"]),
    );
  }, ["self", "low", "high"]),
  "{ :self :low :high |\n\t\tself.collect { :each |\n\t\t\teach.fold(low, high)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fractionalPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fractionalPart_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(fractionalPart:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fromRomanNumeral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fromRomanNumeral_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(fromRomanNumeral:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "gamma",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _gamma_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(gamma:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "grayDecode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _grayDecode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(grayDecode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "grayEncode",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _grayEncode_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(grayEncode:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "harmonicNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _harmonicNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(harmonicNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "halve",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _halve_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(halve:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "hexagonalNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _hexagonalNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(hexagonalNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "i",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _i_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(i:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "imaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _imaginary_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(imaginary:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "increment",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _increment_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(increment:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerDigits",
  ["self", "base", "count"],
  sl.annotateFunction(function (_self, _base, _count) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _base, _count";
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
        return _integerDigits_3(_each, _base, _count);
      }, ["each"]),
    );
  }, ["self", "base", "count"]),
  "{ :self :base :count |\n\t\tself.collect { :each |\n\t\t\teach.integerDigits(base, count)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerDigits",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _integerDigits_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(integerDigits:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerLength",
  ["self", "radix"],
  sl.annotateFunction(function (_self, _radix) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _radix";
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
        return _integerLength_2(_each, _radix);
      }, ["each"]),
    );
  }, ["self", "radix"]),
  "{ :self :radix |\n\t\tself.collect { :each |\n\t\t\teach.integerLength(radix)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _integerPart_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(integerPart:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerReverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _integerReverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(integerReverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "integerSquareRoot",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _integerSquareRoot_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(integerSquareRoot:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "inverseErf",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _inverseErf_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(inverseErf:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "inverseErfc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _inverseErfc_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(inverseErfc:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isComposite",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isComposite_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isComposite:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isGaussianPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isGaussianPrime_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isGaussianPrime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isInteger_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isNegative",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isNegative_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isNegative:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isPrime_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isPrime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isPrimePower",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isPrimePower_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isPrimePower:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isSmallInteger",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isSmallInteger_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isSmallInteger:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "isZero",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _isZero_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(isZero:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "jacobiSymbol",
  ["a", "n"],
  sl.annotateFunction(function (_a, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _a, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _a,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _jacobiSymbol_2(_each, _n);
      }, ["each"]),
    );
  }, ["a", "n"]),
  "{ :a :n |\n\t\ta.collect { :each |\n\t\t\teach.jacobiSymbol(n)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "lcm",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _reduce_2(_self, _lcm_2);
  }, ["self"]),
  "{ :self |\n\t\tself.reduce(lcm:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "log",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _log_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(log:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "log",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Temporaries */
    let _k = _solidus_2(1, _log_1(_base));
    /* Statements */
    return _asterisk_2(_log_1(_self), _k);
  }, ["self", "base"]),
  "{ :self :base |\n\t\tlet k = 1 / base.log;\n\t\tself.log * k\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "log10",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _log10_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(log10:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "log2",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _log2_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(log2:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "logisticSigmoid",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _logisticSigmoid_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(logisticSigmoid:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "logit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _logit_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(logit:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "logScale",
  ["self", "c"],
  sl.annotateFunction(function (_self, _c) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _c";
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
        return _logScale_2(_each, _c);
      }, ["each"]),
    );
  }, ["self", "c"]),
  "{ :self :c |\n\t\tself.collect { :each |\n\t\t\teach.logScale(c)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "logScale",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _logScale_2(_self, _solidus_2(1, _log_1(10)));
  }, ["self"]),
  "{ :self |\n\t\tself.logScale(1 / 10.log)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "lucasNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _lucasNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(lucasNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "minkowskiQuestionMark",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _minkowskiQuestionMark_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(minkowskiQuestionMark:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "minkowskiQuestionMarkInverse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _minkowskiQuestionMarkInverse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(minkowskiQuestionMarkInverse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "mixedFractionParts",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _mixedFractionParts_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(mixedFractionParts:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "negate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _negate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(negate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "nextPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _nextPrime_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(nextPrime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "numerator",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _numerator_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(numerator:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "partitionsP",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _partitionsP_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(partitionsP:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "partitionsQ",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _partitionsQ_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(partitionsQ:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "pellNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _pellNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(pellNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "pi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _pi_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(pi:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "pentagonalNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _pentagonalNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(pentagonalNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "powerMod",
  ["self", "exponent", "modulo"],
  sl.annotateFunction(function (_self, _exponent, _modulo) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _exponent, _modulo";
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
        return _powerMod_3(_each, _exponent, _modulo);
      }, ["each"]),
    );
  }, ["self", "exponent", "modulo"]),
  "{ :self :exponent :modulo |\n\t\tself.collect { :each |\n\t\t\teach.powerMod(exponent, modulo)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "previousPrime",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _previousPrime_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(previousPrime:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "primeFactors",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _primeFactors_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(primeFactors:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "primeLimit",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _primeLimit_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(primeLimit:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "primePi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _primePi_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(primePi:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "radiansToDegrees",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _radiansToDegrees_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(radiansToDegrees:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "ramp",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _ramp_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(ramp:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "real",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _real_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(real:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "realImaginary",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _realImaginary_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(realImaginary:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "reciprocal",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _reciprocal_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(reciprocal:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "replaceNaN",
  ["x", "y"],
  sl.annotateFunction(function (_x, _y) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _x, _y";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _x,
      sl.annotateFunction(function (_each) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _each";
          throw new Error(errorMessage);
        } /* Statements */
        return _replaceNaN_2(_each, _y);
      }, ["each"]),
    );
  }, ["x", "y"]),
  "{ :x :y |\n\t\tx.collect { :each |\n\t\t\teach.replaceNaN(y)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "riemannXi",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _riemannXi_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(riemannXi:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "romanNumeral",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _romanNumeral_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(romanNumeral:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "round",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _round_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(round:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "roundTiesEven",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _roundTiesEven_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(roundTiesEven:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "rudinShapiro",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rudinShapiro_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(rudinShapiro:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sign",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sign_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(sign:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sqrt",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sqrt_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(sqrt:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "square",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _square_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(square:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "stirlingS1",
  ["self", "k"],
  sl.annotateFunction(function (_self, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _stirlingS1_2(_n, _k);
      }, ["n"]),
    );
  }, ["self", "k"]),
  "{ :self :k |\n\t\tself.collect { :n |\n\t\t\tn.stirlingS1(k)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "tan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tan_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(tan:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "thueMorse",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _thueMorse_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(thueMorse:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "triangularNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _triangularNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(triangularNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "tribonacciNumber",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tribonacciNumber_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(tribonacciNumber:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "truncate",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _truncate_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(truncate:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "unitize",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _unitize_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(unitize:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "vanDerCorputNumber",
  ["self", "base"],
  sl.annotateFunction(function (_self, _base) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _base";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(
      _self,
      sl.annotateFunction(function (_n) {
        /* ArityCheck */
        if (arguments.length !== 1) {
          const errorMessage = "Arity: expected 1, _n";
          throw new Error(errorMessage);
        } /* Statements */
        return _vanDerCorputNumber_2(_n, _base);
      }, ["n"]),
    );
  }, ["self", "base"]),
  "{ :self :base |\n\t\tself.collect { :n |\n\t\t\tn.vanDerCorputNumber(base)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "wrap",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
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
        return _wrap_3(_each, _lo, _hi);
      }, ["each"]),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tself.collect { :each |\n\t\t\teach.wrap(lo, hi)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "wrapExclusive",
  ["self", "lo", "hi"],
  sl.annotateFunction(function (_self, _lo, _hi) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _lo, _hi";
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
        return _wrapExclusive_3(_each, _lo, _hi);
      }, ["each"]),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi |\n\t\tself.collect { :each |\n\t\t\teach.wrapExclusive(lo, hi)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "wrapIndex",
  ["self", "size"],
  sl.annotateFunction(function (_self, _size) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _size";
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
        return _wrapIndex_2(_each, _size);
      }, ["each"]),
    );
  }, ["self", "size"]),
  "{ :self :size |\n\t\tself.collect { :each |\n\t\t\teach.wrapIndex(size)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "zeta",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _zeta_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(zeta:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "plusSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _plusSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, +)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "hyphenMinus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _hyphenMinus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, -)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "asterisk",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _asterisk_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, *)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "solidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, /)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "solidusSolidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _quotient_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.quotient(anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "reverseSolidusReverseSolidus",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _remainder_2(_self, _anObject);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tself.remainder(anObject)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "reverseSolidus",
  ["self", "aNumber"],
  sl.annotateFunction(function (_self, _aNumber) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aNumber";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(_self, _aNumber);
  }, ["self", "aNumber"]),
  "{ :self :aNumber |\n\t\tself.Fraction(aNumber)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "lessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lessThanSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "lessThanSignLessThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _lessThanSignLessThanSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <<)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "lessThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _lessThanSignEqualsSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, <=)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "greaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _greaterThanSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "greaterThanSignEqualsSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _greaterThanSignEqualsSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >=)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "greaterThanSignGreaterThanSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _greaterThanSignGreaterThanSign_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, >>)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "circumflexAccent",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _circumflexAccent_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, ^)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "percentSign",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _percentSign_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, %)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "asteriskPlusSign",
  ["self", "mul", "add"],
  sl.annotateFunction(function (_self, _mul, _add) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _mul, _add";
      throw new Error(errorMessage);
    } /* Statements */
    return _plusSign_2(_asterisk_2(_self, _mul), _add);
  }, ["self", "mul", "add"]),
  "{ :self :mul :add |\n\t\tself * mul + add\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "absArg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _absArg_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(absArg:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "arg",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arg_1);
  }, ["self"]),
  "{ :self |\n\t\tself.collect(arg:/1)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "arithmeticGeometricMean",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _arithmeticGeometricMean_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, arithmeticGeometricMean:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "beta",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _beta_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, beta:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "binomial",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _binomial_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, binomial:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "bitAnd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitAnd_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitAnd:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "bitOr",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitOr_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitOr:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "bitShiftLeft",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitShiftLeft_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitShiftLeft:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "bitShiftRight",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _bitShiftRight_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitShiftRight:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "bitShiftRightUnsigned",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _bitShiftRightUnsigned_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, bitShiftRightUnsigned:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "Complex",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _Complex_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, Complex:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "divisible",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _divisible_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, divisible:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "Fraction",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _Fraction_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, Fraction:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "gcd",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _gcd_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, gcd:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "integerDigits",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _integerDigits_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, integerDigits:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "isCloseToBy",
  ["self", "anObject", "epsilon"],
  sl.annotateFunction(function (_self, _anObject, _epsilon) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _self, _anObject, _epsilon";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      sl.annotateFunction(function (_a, _b) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _a, _b";
          throw new Error(errorMessage);
        } /* Statements */
        return _isCloseToBy_3(_a, _b, _epsilon);
      }, ["a", "b"]),
    );
  }, ["self", "anObject", "epsilon"]),
  "{ :self :anObject :epsilon |\n\t\tanObject.adaptToCollectionAndApply(self) { :a :b |\n\t\t\ta.isCloseToBy(b, epsilon)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "lcm",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _lcm_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, lcm:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "mediant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _Fraction_2(
      _sum_1(_collect_2(_self, _numerator_1)),
      _sum_1(_collect_2(_self, _denominator_1)),
    );
  }, ["self"]),
  "{ :self |\n\t\tFraction(\n\t\t\tself.collect(numerator:/1).sum,\n\t\t\tself.collect(denominator:/1).sum\n\t\t)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "max",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _max_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, max:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "min",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _min_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, min:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "mod",
  ["m", "n"],
  sl.annotateFunction(function (_m, _n) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _m, _n";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_n, _m, _mod_2);
  }, ["m", "n"]),
  "{ :m :n |\n\t\tn.adaptToCollectionAndApply(m, mod:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "mod",
  ["m", "n", "d"],
  sl.annotateFunction(function (_m, _n, _d) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _m, _n, _d";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(
      _n,
      _m,
      sl.annotateFunction(function (_i, _j) {
        /* ArityCheck */
        if (arguments.length !== 2) {
          const errorMessage = "Arity: expected 2, _i, _j";
          throw new Error(errorMessage);
        } /* Statements */
        return _mod_3(_i, _j, _d);
      }, ["i", "j"]),
    );
  }, ["m", "n", "d"]),
  "{ :m :n :d |\n\t\tn.adaptToCollectionAndApply(m) { :i :j |\n\t\t\ti.mod(j, d)\n\t\t}\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "multiplyAdd",
  ["i", "j", "k"],
  sl.annotateFunction(function (_i, _j, _k) {
    /* ArityCheck */
    if (arguments.length !== 3) {
      const errorMessage = "Arity: expected 3, _i, _j, _k";
      throw new Error(errorMessage);
    } /* Statements */
    return _withWithCollect_4(_i, _j, _k, _multiplyAdd_3);
  }, ["i", "j", "k"]),
  "{ :i :j :k |\n\t\twithWithCollect(i, j, k, multiplyAdd:/3)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "nthRoot",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _nthRoot_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, nthRoot:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "quotient",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _quotient_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, quotient:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "remainder",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _remainder_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, remainder:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "round",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _round_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, round:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "trinomial",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _trinomial_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, trinomial:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "truncate",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _truncate_2);
  }, ["self", "anObject"]),
  "{ :self :anObject |\n\t\tanObject.adaptToCollectionAndApply(self, truncate:/2)\n\t}",
);

sl.extendTypeOrTraitWithMethod(
  "List",
  "Elementwise",
  "atVectorOrElementwise",
  ["self", "aBlock:/1"],
  sl.annotateFunction(function (_self, _aBlock_1) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _aBlock_1";
      throw new Error(errorMessage);
    } /* Statements */
    return _if_3(
      _isVector_1(_self),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _aBlock_1(_self);
      }, []),
      sl.annotateFunction(function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          throw new Error(errorMessage);
        } /* Statements */
        return _collect_2(_self, _aBlock_1);
      }, []),
    );
  }, ["self", "aBlock:/1"]),
  "{ :self :aBlock:/1 |\n\t\tself.isVector.if {\n\t\t\taBlock(self)\n\t\t} {\n\t\t\tself.collect(aBlock:/1)\n\t\t}\n\t}",
);
