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
    return _collect_2(_self, _conjugated_1);
  }, ["self"]),
  "{ :self | collect(self,conjugated:/1) }",
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
    return _collect_2(_self, _negated_1);
  }, ["self"]),
  "{ :self | collect(self,negated:/1) }",
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
  "{ :self | collect(self,sign:/1) }",
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
  "{ :self | collect(self,reciprocal:/1) }",
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
  "{ :self | collect(self,factorialOrGamma:/1) }",
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
  "{ :self | ^(e(1), self) }",
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
  "{ :self | collect(self,abs:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "absSquared",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _absSquared_1);
  }, ["self"]),
  "{ :self | collect(self,absSquared:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "arcCosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCosh_1);
  }, ["self"]),
  "{ :self | collect(self,arcCosh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "arcCos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcCos_1);
  }, ["self"]),
  "{ :self | collect(self,arcCos:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "arcSin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcSin_1);
  }, ["self"]),
  "{ :self | collect(self,arcSin:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "arcTan",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _arcTan_1);
  }, ["self"]),
  "{ :self | collect(self,arcTan:/1) }",
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
  "{ :self | collect(self,asFloat:/1) }",
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
  "{ :self | collect(self,asFraction:/1) }",
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
  "{ :self | collect(self,asInteger:/1) }",
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
  "{ :self | collect(self,bellNumber:/1) }",
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
  "{ :self :min :max | collect(self, { :each | betweenAnd(each,min, max) }) }",
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
  "{ :self | reduce(self,bitAnd:/2) }",
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
  "{ :self | reduce(self,bitOr:/2) }",
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
  "{ :self | collect(self,bitNot:/1) }",
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
  "{ :self | collect(self,boole:/1) }",
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
  "{ :self | collect(self,cantorStaircase:/1) }",
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
  "{ :self | collect(self,ceiling:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "conjugated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _conjugated_1);
  }, ["self"]),
  "{ :self | collect(self,conjugated:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cos",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cos_1);
  }, ["self"]),
  "{ :self | collect(self,cos:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cosecant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosecant_1);
  }, ["self"]),
  "{ :self | collect(self,cosecant:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cosh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cosh_1);
  }, ["self"]),
  "{ :self | collect(self,cosh:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cotangent",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cotangent_1);
  }, ["self"]),
  "{ :self | collect(self,cotangent:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "cubed",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _cubed_1);
  }, ["self"]),
  "{ :self | collect(self,cubed:/1) }",
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
  "{ :self | collect(self,degree:/1) }",
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
  "{ :self | collect(self,decrement:/1) }",
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
  "{ :self | collect(self,degreesToRadians:/1) }",
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
  "{ :self | collect(self,denominator:/1) }",
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
  "{ :self | collect(self,divisors:/1) }",
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
  "{ :self | collect(self,doubleFactorial:/1) }",
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
  "{ :self | collect(self,e:/1) }",
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
  "{ :self :aNumber | *(self, (^(10, aNumber))) }",
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
  "{ :self | collect(self,erf:/1) }",
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
  "{ :self | collect(self,erfc:/1) }",
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
  "{ :self | collect(self,eulerPhi:/1) }",
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
  "{ :self | collect(self,exp:/1) }",
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
  "{ :self | collect(self,factorial:/1) }",
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
  "{ :self | collect(self,factorialOrGamma:/1) }",
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
  "{ :self | collect(self,floor:/1) }",
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
  "{ :self | collect(self,factorInteger:/1) }",
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
  "{ :self | collect(self,fibonacciWord:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "fractionPart",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _fractionPart_1);
  }, ["self"]),
  "{ :self | collect(self,fractionPart:/1) }",
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
  "{ :self | collect(self,fibonacci:/1) }",
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
  "{ :self | collect(self,gamma:/1) }",
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
  "{ :self | collect(self,harmonicNumber:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "halved",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _halved_1);
  }, ["self"]),
  "{ :self | collect(self,halved:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "haversine",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _haversine_1);
  }, ["self"]),
  "{ :self | collect(self,haversine:/1) }",
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
  "{ :self | collect(self,i:/1) }",
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
  "{ :self | collect(self,imaginary:/1) }",
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
  "{ :self | collect(self,increment:/1) }",
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
  "{ :self :base :count | collect(self, { :each | integerDigits(each,base, count) }) }",
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
  "{ :self | collect(self,integerDigits:/1) }",
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
  "{ :self | collect(self,integerPart:/1) }",
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
  "{ :self | collect(self,integerSquareRoot:/1) }",
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
  "{ :self | collect(self,inverseErf:/1) }",
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
  "{ :self | collect(self,isGaussianPrime:/1) }",
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
  "{ :self | collect(self,isNegative:/1) }",
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
  "{ :self | collect(self,isPrime:/1) }",
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
  "{ :self | collect(self,isPrimePower:/1) }",
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
  "{ :self | reduce(self,lcm:/2) }",
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
  "{ :self | collect(self,log:/1) }",
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
  "{ :self :base | let k = /(1, log(base)); *(log(self), k) }",
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
  "{ :self | collect(self,log10:/1) }",
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
  "{ :self | collect(self,log2:/1) }",
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
    return _collect_2(_self, _logScale_1);
  }, ["self"]),
  "{ :self | collect(self,logScale:/1) }",
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
  "{ :self | collect(self,lucasNumber:/1) }",
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
  "{ :self | collect(self,minkowskiQuestionMark:/1) }",
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
  "{ :self | collect(self,minkowskiQuestionMarkInverse:/1) }",
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
  "{ :self | collect(self,mixedFractionParts:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "negated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _negated_1);
  }, ["self"]),
  "{ :self | collect(self,negated:/1) }",
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
  "{ :self | collect(self,numerator:/1) }",
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
  "{ :self | collect(self,partitionsP:/1) }",
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
  "{ :self | collect(self,partitionsQ:/1) }",
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
  "{ :self | collect(self,pi:/1) }",
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
  "{ :self :exponent :modulo | collect(self, { :each | powerMod(each,exponent, modulo) }) }",
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
  "{ :self | collect(self,primeFactors:/1) }",
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
  "{ :self | collect(self,primeLimit:/1) }",
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
  "{ :self | collect(self,primePi:/1) }",
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
  "{ :self | collect(self,radiansToDegrees:/1) }",
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
  "{ :self | collect(self,real:/1) }",
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
  "{ :self | collect(self,realImaginary:/1) }",
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
  "{ :self | collect(self,reciprocal:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "rounded",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _rounded_1);
  }, ["self"]),
  "{ :self | collect(self,rounded:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "secant",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _secant_1);
  }, ["self"]),
  "{ :self | collect(self,secant:/1) }",
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
  "{ :self | collect(self,sign:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sin",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sin_1);
  }, ["self"]),
  "{ :self | collect(self,sin:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sinc",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sinc_1);
  }, ["self"]),
  "{ :self | collect(self,sinc:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sincNormalized",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sincNormalized_1);
  }, ["self"]),
  "{ :self | collect(self,sincNormalized:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "sinh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _sinh_1);
  }, ["self"]),
  "{ :self | collect(self,sinh:/1) }",
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
  "{ :self | collect(self,sqrt:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "squared",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _squared_1);
  }, ["self"]),
  "{ :self | collect(self,squared:/1) }",
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
  "{ :self | collect(self,tan:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "tanh",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _tanh_1);
  }, ["self"]),
  "{ :self | collect(self,tanh:/1) }",
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
  "{ :self | collect(self,thueMorse:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "truncated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _truncated_1);
  }, ["self"]),
  "{ :self | collect(self,truncated:/1) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "truncated",
  ["self"],
  sl.annotateFunction(function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      throw new Error(errorMessage);
    } /* Statements */
    return _collect_2(_self, _truncated_1);
  }, ["self"]),
  "{ :self | collect(self,truncated:/1) }",
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
  "{ :self | collect(self,unitize:/1) }",
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
  "{ :self :base | collect(self, { :n | vanDerCorputNumber(n,base) }) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Collection",
  "Elementwise",
  "wrapBetweenAnd",
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
        return _wrapBetweenAnd_3(_each, _lo, _hi);
      }, ["each"]),
    );
  }, ["self", "lo", "hi"]),
  "{ :self :lo :hi | collect(self, { :each | wrapBetweenAnd(each,lo, hi) }) }",
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
  "{ :self :size | collect(self, { :each | wrapIndex(each,size) }) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, +) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, -) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, *) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, /) }",
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
    return _adaptToCollectionAndApply_3(_anObject, _self, _solidusSolidus_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, //) }",
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
    return _adaptToCollectionAndApply_3(
      _anObject,
      _self,
      _reverseSolidusReverseSolidus_2,
    );
  }, ["self", "anObject"]),
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, \\\\) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, <) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, <<) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, <=) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, >) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, >=) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, >>) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, ^) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, %) }",
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
  "{ :self :mul :add | +(*(self, mul), add) }",
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
  "{ :self | collect(self,absArg:/1) }",
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
  "{ :self | collect(self,arg:/1) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, arithmeticGeometricMean:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, beta:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, binomial:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, bitAnd:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, bitOr:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, bitShiftLeft:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, bitShiftRight:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, bitShiftRightUnsigned:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, Complex:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, divisible:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, Fraction:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, gcd:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, integerDigits:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, lcm:/2) }",
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
  "{ :self | Fraction(sum(collect(self,numerator:/1)), sum(collect(self,denominator:/1))) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, max:/2) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, min:/2) }",
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
  "{ :m :n | adaptToCollectionAndApply(n,m, mod:/2) }",
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
  "{ :m :n :d | adaptToCollectionAndApply(n, m, { :i :j | mod(i,j, d) }) }",
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
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, nthRoot:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "roundTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _roundTo_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, roundTo:/2) }",
);

sl.extendTypeOrTraitWithMethod(
  "@Sequenceable",
  "Elementwise",
  "truncateTo",
  ["self", "anObject"],
  sl.annotateFunction(function (_self, _anObject) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anObject";
      throw new Error(errorMessage);
    } /* Statements */
    return _adaptToCollectionAndApply_3(_anObject, _self, _truncateTo_2);
  }, ["self", "anObject"]),
  "{ :self :anObject | adaptToCollectionAndApply(anObject,self, truncateTo:/2) }",
);
