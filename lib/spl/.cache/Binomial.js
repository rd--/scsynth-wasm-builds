/*  Requires: Collection Integer Number  */

sl.extendTraitWithMethod(
  "Number",
  "Binomial",
  "positiveIntegerBinomial",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
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
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _numerator = _asterisk_2(_numerator, _factor);
      },
    );
    _toDo_3(1, _min_2(_k, _hyphenMinus_2(_n, _k)), function (_factor) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _factor";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _denominator = _asterisk_2(_denominator, _factor);
    });
    return _solidusSolidus_2(_numerator, _denominator);
  },
  "{ :n :k |\n\t\tlet numerator = n.one;\n\t\tlet denominator = n.one;\n\t\tn.toByDo(k.max(n - k) + 1, -1) { :factor |\n\t\t\tnumerator := numerator * factor\n\t\t};\n\t\t1.toDo(k.min(n - k)) { :factor |\n\t\t\tdenominator := denominator * factor\n\t\t};\n\t\tnumerator // denominator\n\t}",
);

sl.extendTraitWithMethod(
  "Number",
  "Binomial",
  "binomial",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_isCollection_1(_k), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _adaptToNumberAndApply_3(_k, _n, _binomial_2);
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(
        _ampersand_2(_isNonNegativeInteger_1(_n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _ampersand_2(_isNonNegativeInteger_1(_k), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return _lessThanSignEqualsSign_2(_k, _n);
          });
        }),
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _positiveIntegerBinomial_2(_n, _k);
        },
        function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
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
  "{ :n :k |\n\t\tk.isCollection.if {\n\t\t\tk.adaptToNumberAndApply(n, binomial:/2)\n\t\t} {\n\t\t\t(\n\t\t\t\tn.isNonNegativeInteger & {\n\t\t\t\t\tk.isNonNegativeInteger & {\n\t\t\t\t\t\tk <= n\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t).if {\n\t\t\t\tn.positiveIntegerBinomial(k)\n\t\t\t} {\n\t\t\t\t(n + 1).gamma / ((k + 1).gamma * (n - k + 1).gamma)\n\t\t\t}\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "catalanNumber",
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
      _solidus_2(_one_1(_self), _plusSign_2(_self, 1)),
      _binomial_2(_asterisk_2(2, _self), _self),
    );
  },
  "{ :self |\n\t\t(self.one / (self + 1)) * (2 * self).binomial(self)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "multichoose",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _multinomial_1([_hyphenMinus_2(_n, 1), _k]);
  },
  "{ :n :k |\n\t\t[n - 1, k].multinomial\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "partitionFunctionP",
  ["self", "anInteger"],
  function (_self, _anInteger) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _self, _anInteger";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Temporaries */
    let _p_2 = function (_n, _k) {
      /* ArityCheck */
      if (arguments.length !== 2) {
        const errorMessage = "Arity: expected 2, _n, _k";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _if_3(_greaterThanSign_2(_k, _n), function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return 0;
      }, function () {
        /* ArityCheck */
        if (arguments.length !== 0) {
          const errorMessage = "Arity: expected 0, ";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
        /* Statements */
        return _if_3(_equalsSign_2(_k, _n), function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return 1;
        }, function () {
          /* ArityCheck */
          if (arguments.length !== 0) {
            const errorMessage = "Arity: expected 0, ";
            console.error(errorMessage);
            throw new Error(errorMessage);
          }
          /* Statements */
          return _if_3(_equalsSign_2(_k, 0), function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
            return 0;
          }, function () {
            /* ArityCheck */
            if (arguments.length !== 0) {
              const errorMessage = "Arity: expected 0, ";
              console.error(errorMessage);
              throw new Error(errorMessage);
            }
            /* Statements */
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
  "{ :self :anInteger |\n\t\tlet p = { :n :k |\n\t\t\t(k > n).if {\n\t\t\t\t0\n\t\t\t} {\n\t\t\t\t(k = n).if {\n\t\t\t\t\t1\n\t\t\t\t} {\n\t\t\t\t\t(k = 0).if {\n\t\t\t\t\t\t0\n\t\t\t\t\t} {\n\t\t\t\t\t\tp(n - 1, k - 1) + p(n - k, k)\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\tp(self, anInteger)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "partitionFunctionQ",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _partitionFunctionP_2(_hyphenMinus_2(_n, _binomial_2(_k, 2)), _k);
  },
  "{ :n :k |\n\t\tpartitionFunctionP(n - binomial(k, 2), k)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "polygonalNumber",
  ["n"],
  function (_n) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _n";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _binomial_2(_plusSign_2(_n, 1), 2);
  },
  "{ :n |\n\t\tbinomial(n + 1, 2)\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "subfactorial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _sum_1(_collect_2(_upOrDownTo_2(0, _self), function (_each) {
      /* ArityCheck */
      if (arguments.length !== 1) {
        const errorMessage = "Arity: expected 1, _each";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _asterisk_2(
        _asterisk_2(
          _factorial_1(_each),
          _circumflexAccent_2(-1, _hyphenMinus_2(_self, _each)),
        ),
        _binomial_2(_self, _each),
      );
    }));
  },
  "{ :self |\n\t\t(0 .. self).collect { :each |\n\t\t\teach.factorial * (-1 ^ (self - each)) * self.binomial(each)\n\t\t}.sum\n\t}",
);

sl.extendTraitWithMethod(
  "Integer",
  "Binomial",
  "take",
  ["n", "k"],
  function (_n, _k) {
    /* ArityCheck */
    if (arguments.length !== 2) {
      const errorMessage = "Arity: expected 2, _n, _k";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _if_3(_greaterThanSign_2(_k, _n), function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return 0;
    }, function () {
      /* ArityCheck */
      if (arguments.length !== 0) {
        const errorMessage = "Arity: expected 0, ";
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
      /* Statements */
      return _positiveIntegerBinomial_2(_n, _k);
    });
  },
  "{ :n :k |\n\t\t(k > n).if {\n\t\t\t0\n\t\t} {\n\t\t\tn.positiveIntegerBinomial(k)\n\t\t}\n\t}",
);

sl.extendTraitWithMethod(
  "Collection",
  "Binomial",
  "multinomial",
  ["self"],
  function (_self) {
    /* ArityCheck */
    if (arguments.length !== 1) {
      const errorMessage = "Arity: expected 1, _self";
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    /* Statements */
    return _solidus_2(
      _factorialOrGamma_1(_sum_1(_self)),
      _product_1(_factorialOrGamma_1(_self)),
    );
  },
  "{ :self |\n\t\tself.sum.factorialOrGamma / self.factorialOrGamma.product\n\t}",
);
